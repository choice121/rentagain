const defaultOrigins = [
  "https://rentagain.pages.dev",
  "https://www.rentagain.org",
  "https://rentagain.org",
];

export function getCorsHeaders(request: Request): Headers | null {
  const origin = request.headers.get("Origin");
  if (!origin) return new Headers({ Vary: "Origin" });

  const configuredOrigins = Deno.env.get("SITE_ORIGINS")
    ?.split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const allowedOrigins = configuredOrigins?.length ? configuredOrigins : defaultOrigins;
  if (!allowedOrigins.includes(origin)) return null;

  return new Headers({
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  });
}

export function jsonResponse(
  request: Request,
  status: number,
  body: Record<string, unknown>,
): Response {
  const headers = getCorsHeaders(request);
  if (!headers) return new Response("Forbidden", { status: 403 });
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "no-store");
  return new Response(JSON.stringify(body), { status, headers });
}

export function preflightResponse(request: Request): Response {
  const headers = getCorsHeaders(request);
  if (!headers) return new Response("Forbidden", { status: 403 });
  return new Response(null, { status: 204, headers });
}

export function isAllowedOrigin(request: Request): boolean {
  return getCorsHeaders(request) !== null;
}

export function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}
