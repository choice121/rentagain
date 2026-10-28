import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import {
  isAllowedOrigin,
  jsonResponse,
  preflightResponse,
  getRequiredEnv,
} from "../_shared/http.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return preflightResponse(request);
  if (!isAllowedOrigin(request)) return new Response("Forbidden", { status: 403 });
  if (request.method !== "POST") return jsonResponse(request, 405, { error: "Method not allowed." });

  try {
    const token = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
    if (!token) return jsonResponse(request, 401, { error: "Sign in before deleting your account." });

    const url = getRequiredEnv("SUPABASE_URL");
    const anonKey = getRequiredEnv("SUPABASE_ANON_KEY");
    const serviceKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const authClient = createClient(url, anonKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: authData, error: authError } = await authClient.auth.getUser(token);
    if (authError || !authData.user) return jsonResponse(request, 401, { error: "Your session expired. Sign in again." });

    const admin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const userId = authData.user.id;
    const { data: documents, error: documentsError } = await admin
      .from("generated_documents")
      .select("storage_path")
      .eq("owner_id", userId);
    if (documentsError) {
      console.error("Could not load client document paths for account deletion:", documentsError);
      return jsonResponse(request, 503, { error: "Account data could not be deleted. Contact Rent Again for assistance." });
    }

    const paths = (documents ?? []).map((document) => document.storage_path);
    for (let index = 0; index < paths.length; index += 100) {
      const { error: storageError } = await admin.storage
        .from("client-documents")
        .remove(paths.slice(index, index + 100));
      if (storageError) {
        console.error("Could not remove client files during account deletion:", storageError);
        return jsonResponse(request, 503, { error: "Account data could not be fully deleted. Contact Rent Again for assistance." });
      }
    }

    const { error: requestsError } = await admin
      .from("consultation_requests")
      .delete()
      .eq("owner_id", userId);
    if (requestsError) {
      console.error("Could not remove client requests during account deletion:", requestsError);
      return jsonResponse(request, 503, { error: "Account data could not be fully deleted. Contact Rent Again for assistance." });
    }

    const { error: userDeleteError } = await admin.auth.admin.deleteUser(userId);
    if (userDeleteError) {
      console.error("Could not remove client auth account:", userDeleteError);
      return jsonResponse(request, 503, { error: "Your requests were deleted, but the account could not be closed. Contact Rent Again." });
    }
    return jsonResponse(request, 200, { ok: true });
  } catch (error) {
    console.error("Client account deletion failed:", error);
    return jsonResponse(request, 503, { error: "Account deletion is temporarily unavailable." });
  }
});
