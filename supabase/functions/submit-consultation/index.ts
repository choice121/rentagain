import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import {
  getRequiredEnv,
  isAllowedOrigin,
  jsonResponse,
  preflightResponse,
} from "../_shared/http.ts";

const serviceValues = new Set([
  "housing",
  "co_applicant",
  "income_verification",
  "instant_approval",
  "auto_approval",
  "not_sure",
]);
const propertyValues = new Set(["apartment", "house", "townhouse", "other"]);
const timelineValues = new Set([
  "asap",
  "within_30_days",
  "within_60_days",
  "more_than_60_days",
  "not_sure",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigitsPattern = /^\+?\d{7,15}$/;

function isText(value: unknown): value is string {
  return typeof value === "string";
}

async function fingerprintIp(value: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return preflightResponse(request);
  if (!request.headers.get("Origin") || !isAllowedOrigin(request)) return new Response("Forbidden", { status: 403 });
  if (request.method !== "POST") return jsonResponse(request, 405, { error: "Method not allowed." });

  const contentLength = Number(request.headers.get("Content-Length") ?? 0);
  if (contentLength > 8192) return jsonResponse(request, 413, { error: "Request is too large." });
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse(request, 415, { error: "JSON is required." });
  }

  try {
    const url = getRequiredEnv("SUPABASE_URL");
    const anonKey = getRequiredEnv("SUPABASE_ANON_KEY");
    const serviceKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
    const admin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const ip = request.headers.get("CF-Connecting-IP")
      ?? request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim()
      ?? "unknown";
    const fingerprint = await fingerprintIp(ip, getRequiredEnv("TURNSTILE_SECRET_KEY"));
    const { data: withinLimit, error: rateLimitError } = await admin.rpc(
      "consume_intake_rate_limit",
      { p_fingerprint: fingerprint },
    );
    if (rateLimitError) {
      console.error("Consultation rate-limit check failed:", rateLimitError);
      return jsonResponse(request, 503, { error: "Requests are temporarily unavailable." });
    }
    if (withinLimit !== true) {
      return jsonResponse(request, 429, { error: "Too many requests. Please try again later." });
    }

    const bodyText = await request.text();
    if (new TextEncoder().encode(bodyText).byteLength > 8192) {
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
    const form = body as Record<string, unknown>;
    if (isText(form.company_website) && form.company_website.trim()) {
      return jsonResponse(request, 200, { ok: true });
    }

    const fullName = isText(form.full_name) ? form.full_name.trim() : "";
    const email = isText(form.email) ? form.email.trim().toLowerCase() : "";
    const phone = isText(form.phone) ? form.phone.trim() : "";
    const normalizedPhone = phone.replace(/[\s().-]/g, "");
    const service = isText(form.service) ? form.service : "";
    const propertyType = isText(form.property_type) ? form.property_type : "";
    const targetCity = isText(form.target_city) ? form.target_city.trim() : "";
    const targetState = isText(form.target_state) ? form.target_state : "";
    const moveTimeline = isText(form.move_timeline) ? form.move_timeline : "";
    const turnstileToken = isText(form.turnstile_token) ? form.turnstile_token : "";

    if (
      fullName.length < 1 || fullName.length > 120
      || email.length > 254 || !emailPattern.test(email)
      || !phoneDigitsPattern.test(normalizedPhone)
      || !serviceValues.has(service)
      || !propertyValues.has(propertyType)
      || targetCity.length < 1 || targetCity.length > 100
      || !/^[A-Z]{2}$/.test(targetState)
      || !timelineValues.has(moveTimeline)
      || turnstileToken.length < 1 || turnstileToken.length > 2048
      || form.consent !== true
    ) {
      return jsonResponse(request, 400, { error: "Check the form fields and consent, then try again." });
    }

    const origin = request.headers.get("Origin")!;
    const challenge = new URLSearchParams({
      secret: getRequiredEnv("TURNSTILE_SECRET_KEY"),
      response: turnstileToken,
      idempotency_key: crypto.randomUUID(),
    });
    const verificationResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: challenge,
    });
    if (!verificationResponse.ok) {
      console.error("Turnstile verification service returned HTTP", verificationResponse.status);
      return jsonResponse(request, 503, { error: "Spam protection is temporarily unavailable." });
    }
    const verification = await verificationResponse.json();
    if (
      verification.success !== true
      || verification.hostname !== new URL(origin).hostname
      || verification.action !== "consultation-intake"
    ) {
      return jsonResponse(request, 400, { error: "Spam protection verification failed. Please try again." });
    }

    let ownerId: string | null = null;
    const authorization = request.headers.get("Authorization");
    if (authorization) {
      const token = authorization.replace(/^Bearer\s+/i, "");
      if (token !== anonKey) {
        const authClient = createClient(url, anonKey, {
          auth: { autoRefreshToken: false, persistSession: false },
        });
        const { data, error } = await authClient.auth.getUser(token);
        if (error || !data.user) return jsonResponse(request, 401, { error: "Sign in again before submitting." });
        ownerId = data.user.id;
      }
    }

    const { error: insertError } = await admin.from("consultation_requests").insert({
      owner_id: ownerId,
      full_name: fullName,
      email,
      phone,
      service,
      property_type: propertyType,
      target_city: targetCity,
      target_state: targetState,
      move_timeline: moveTimeline,
      consent_at: new Date().toISOString(),
    });
    if (insertError) {
      console.error("Consultation request insert failed:", insertError);
      return jsonResponse(request, 503, { error: "We could not save your request. Please try again." });
    }

    return jsonResponse(request, 201, { ok: true });
  } catch (error) {
    console.error("Consultation request handler failed:", error);
    return jsonResponse(request, 503, { error: "Requests are temporarily unavailable." });
  }
});
