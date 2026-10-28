import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { PDFDocument, StandardFonts, rgb, type PDFFont } from "npm:pdf-lib@1.17.1";
import {
  getRequiredEnv,
  isAllowedOrigin,
  jsonResponse,
  preflightResponse,
} from "../_shared/http.ts";

const bucket = "client-documents";
const documentType = "client_intake_summary";

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);
    line = word;
  }
  if (line) lines.push(line);
  return lines;
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return preflightResponse(request);
  if (!isAllowedOrigin(request)) return new Response("Forbidden", { status: 403 });
  if (request.method !== "POST") return jsonResponse(request, 405, { error: "Method not allowed." });

  try {
    const authorization = request.headers.get("Authorization");
    const token = authorization?.replace(/^Bearer\s+/i, "");
    if (!token) return jsonResponse(request, 401, { error: "Sign in to generate your document." });

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
    const user = authData.user;

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
    const requestId = (body as Record<string, unknown>).consultation_request_id;
    if (typeof requestId !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
      return jsonResponse(request, 400, { error: "A valid consultation request is required." });
    }

    const admin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: requestRecord, error: requestError } = await admin
      .from("consultation_requests")
      .select("id, owner_id, full_name, email, phone, service, property_type, target_city, target_state, move_timeline, consent_at, created_at")
      .eq("id", requestId)
      .eq("owner_id", user.id)
      .maybeSingle();
    if (requestError) {
      console.error("Could not load consultation request for document generation:", requestError);
      return jsonResponse(request, 503, { error: "Your request could not be loaded. Please try again." });
    }
    if (!requestRecord) return jsonResponse(request, 404, { error: "The consultation request was not found." });

    const { data: withinLimit, error: rateLimitError } = await admin.rpc(
      "consume_document_generation_limit",
      { p_owner_id: user.id },
    );
    if (rateLimitError) {
      console.error("Could not check client document generation limit:", rateLimitError);
      return jsonResponse(request, 503, { error: "Document generation is temporarily unavailable." });
    }
    if (withinLimit !== true) {
      return jsonResponse(request, 429, { error: "Document generation limit reached. Try again tomorrow." });
    }

    const pdf = await PDFDocument.create();
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const pageSize: [number, number] = [612, 792];
    let page = pdf.addPage(pageSize);
    let y = 735;
    const margin = 52;
    const maxWidth = pageSize[0] - margin * 2;
    const drawParagraph = (text: string, size = 10, selectedFont = font, color = rgb(0.13, 0.19, 0.16)) => {
      for (const line of wrapText(text, selectedFont, size, maxWidth)) {
        if (y < 62) {
          page = pdf.addPage(pageSize);
          y = 735;
        }
        page.drawText(line, { x: margin, y, size, font: selectedFont, color });
        y -= size + 7;
      }
    };

    page.drawText("RENT AGAIN", {
      x: margin,
      y,
      size: 12,
      font: bold,
      color: rgb(0.14, 0.36, 0.27),
    });
    y -= 36;
    drawParagraph("Client Intake Summary", 20, bold, rgb(0.11, 0.24, 0.18));
    drawParagraph("Prepared from information submitted by the client", 10);
    y -= 12;

    const rows = [
      ["Request reference", requestRecord.id],
      ["Submitted", new Date(requestRecord.created_at).toLocaleString("en-US", { timeZone: "UTC" }) + " UTC"],
      ["Client name", requestRecord.full_name],
      ["Email", requestRecord.email],
      ["Phone", requestRecord.phone],
      ["Service of interest", requestRecord.service.replaceAll("_", " ")],
      ["Property type", requestRecord.property_type.replaceAll("_", " ")],
      ["Target location", `${requestRecord.target_city}, ${requestRecord.target_state}`],
      ["Move timeline", requestRecord.move_timeline.replaceAll("_", " ")],
    ];
    try {
      for (const [, value] of rows) font.widthOfTextAtSize(value, 10);
    } catch (error) {
      console.error("Client intake summary contains unsupported PDF text:", error);
      return jsonResponse(request, 422, { error: "Some submitted characters cannot be rendered in this PDF. Contact Rent Again for assistance." });
    }
    for (const [label, value] of rows) {
      drawParagraph(label, 9, bold, rgb(0.14, 0.36, 0.27));
      drawParagraph(value, 11);
      y -= 5;
    }

    y -= 12;
    drawParagraph("Important", 11, bold, rgb(0.14, 0.36, 0.27));
    drawParagraph(
      "This summary reproduces information supplied by the client. It is not independently verified and is not proof of identity, employment, income, rental history, landlord approval, or eligibility. It does not represent a housing-provider decision or guarantee an outcome. Verify information with its original source.",
      9,
    );
    drawParagraph("Generated securely by Rent Again for the account holder.", 8, font, rgb(0.38, 0.43, 0.39));

    const pdfBytes = await pdf.save();
    const storagePath = `${user.id}/${requestRecord.id}/client-intake-summary.pdf`;
    const { error: documentError } = await admin
      .from("generated_documents")
      .upsert(
        {
          owner_id: user.id,
          consultation_request_id: requestRecord.id,
          document_type: documentType,
          storage_path: storagePath,
          created_at: new Date().toISOString(),
        },
        { onConflict: "owner_id,consultation_request_id,document_type" },
      );
    if (documentError) {
      console.error("Could not save generated document record:", documentError);
      return jsonResponse(request, 503, { error: "Your document could not be saved. Please try again." });
    }

    const { error: uploadError } = await admin.storage.from(bucket).upload(storagePath, pdfBytes, {
      contentType: "application/pdf",
      upsert: true,
    });
    if (uploadError) {
      console.error("Could not store generated client summary:", uploadError);
      return jsonResponse(request, 503, { error: "Your document could not be saved. Please try again." });
    }

    const { data: signed, error: signedUrlError } = await admin.storage
      .from(bucket)
      .createSignedUrl(storagePath, 300, { download: "rentagain-client-intake-summary.pdf" });
    if (signedUrlError || !signed?.signedUrl) {
      console.error("Could not create temporary document link:", signedUrlError);
      return jsonResponse(request, 503, { error: "Your document link could not be created. Please try again." });
    }

    return jsonResponse(request, 200, { signed_url: signed.signedUrl, expires_in: 300 });
  } catch (error) {
    console.error("Client intake summary generation failed:", error);
    return jsonResponse(request, 503, { error: "Document generation is temporarily unavailable." });
  }
});
