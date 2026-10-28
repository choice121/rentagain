import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import {
  getRequiredEnv,
  isAllowedOrigin,
  jsonResponse,
  preflightResponse,
} from "../_shared/http.ts";

const requestIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const allowedStatuses = new Set(["new", "contacted", "closed"]);

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return preflightResponse(request);
  if (!isAllowedOrigin(request)) return new Response("Forbidden", { status: 403 });
  if (request.method !== "POST") return jsonResponse(request, 405, { error: "Method not allowed." });

  try {
    const token = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
    if (!token) return jsonResponse(request, 401, { error: "Sign in with a staff account." });

    const url = getRequiredEnv("SUPABASE_URL");
    const anonKey = getRequiredEnv("SUPABASE_ANON_KEY");
    const serviceKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const authClient = createClient(url, anonKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: authData, error: authError } = await authClient.auth.getUser(token);
    if (authError || !authData.user) {
      return jsonResponse(request, 401, { error: "Your session expired. Sign in again." });
    }

    const admin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: membership, error: membershipError } = await admin
      .from("rentagain_staff_members")
      .select("role")
      .eq("user_id", authData.user.id)
      .maybeSingle();
    if (membershipError) {
      console.error("Could not verify staff membership:", membershipError);
      return jsonResponse(request, 503, { error: "Staff access could not be verified." });
    }
    if (!membership || !["staff", "admin"].includes(membership.role)) {
      return jsonResponse(request, 403, { error: "This account is not authorized for the staff console." });
    }

    const contentLength = Number(request.headers.get("Content-Length") ?? 0);
    if (contentLength > 2048) return jsonResponse(request, 413, { error: "Request is too large." });
    const bodyText = await request.text();
    if (new TextEncoder().encode(bodyText).byteLength > 2048) {
      return jsonResponse(request, 413, { error: "Request is too large." });
    }
    let body: unknown;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return jsonResponse(request, 400, { error: "Invalid request." });
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return jsonResponse(request, 400, { error: "Invalid request." });
    }
    const payload = body as Record<string, unknown>;

    if (payload.action === "update_status") {
      if (
        typeof payload.id !== "string"
        || !requestIdPattern.test(payload.id)
        || typeof payload.status !== "string"
        || !allowedStatuses.has(payload.status)
      ) {
        return jsonResponse(request, 400, { error: "A valid request and status are required." });
      }
      const { data: updated, error: updateError } = await admin
        .from("consultation_requests")
        .update({ status: payload.status })
        .eq("id", payload.id)
        .select("id, status")
        .maybeSingle();
      if (updateError) {
        console.error("Could not update consultation request status:", updateError);
        return jsonResponse(request, 503, { error: "The request status could not be updated." });
      }
      if (!updated) return jsonResponse(request, 404, { error: "The consultation request was not found." });
      return jsonResponse(request, 200, { request: updated });
    }

    if (payload.action !== "list") {
      return jsonResponse(request, 400, { error: "Unsupported staff action." });
    }
    const { data: requests, error: requestsError } = await admin
      .from("consultation_requests")
      .select("id, full_name, email, phone, service, property_type, target_city, target_state, move_timeline, status, created_at")
      .order("created_at", { ascending: false })
      .limit(100);
    if (requestsError) {
      console.error("Could not load consultation requests for staff:", requestsError);
      return jsonResponse(request, 503, { error: "Consultation requests could not be loaded." });
    }
    return jsonResponse(request, 200, { requests: requests ?? [] });
  } catch (error) {
    console.error("Staff consultation request handler failed:", error);
    return jsonResponse(request, 503, { error: "The staff console is temporarily unavailable." });
  }
});
