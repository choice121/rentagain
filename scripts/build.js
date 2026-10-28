import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(rootDir, "site");
const distDir = path.join(rootDir, "dist");
const routes = [
  { path: "/", title: "Home | RentAgain", description: "Rent Again helps renters understand their options and create a clear path forward toward securing housing." },
  { path: "/housing-packages/", title: "Housing Packages | RentAgain", description: "Explore the Standard and Expedited Housing Packages, program details, and consultation options." },
  { path: "/cosigner/", title: "Cosigner | RentAgain", description: "Learn about the Rent Again Co-Applicant Program and how to get started." },
  { path: "/verified-income/", title: "Verified Income | RentAgain", description: "Learn about Rent Again's income verification service and consultation options." },
  { path: "/instant-approval/", title: "Instant Approval | RentAgain", description: "Explore Rent Again's Instant Approval Service, service fees, and consultation options." },
  { path: "/book-consultation/", title: "Book Consultation | RentAgain", description: "Book a free consultation with Rent Again to discuss your situation and options." },
  { path: "/book-online/", title: "Book Online | RentAgain", description: "Select a date and time to book a Housing Approval or Car Approval consultation." },
  { path: "/account/", title: "Client Account | RentAgain", description: "Securely access your Rent Again consultation requests and client intake summaries." },
  { path: "/staff/", title: "Staff Console | RentAgain", description: "Authorized Rent Again staff can securely manage consultation requests." },
  { path: "/privacy/", title: "Privacy Notice | RentAgain", description: "Learn what the Rent Again redesigned website collects and how consultation information and client summaries are handled." },
  { path: "/booking-calendar/housing-approval-consultation/", title: "Schedule your service | RentAgain", description: "Check availability and book a Housing Approval consultation." },
  { path: "/booking-calendar/car-approval-consultation/", title: "Schedule your service | RentAgain", description: "Check availability and book an Auto Approval consultation." },
];

if (!fs.existsSync(path.join(sourceDir, "index.html"))) {
  throw new Error(`Missing site entry point: ${path.join(sourceDir, "index.html")}`);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(path.join(distDir, "assets"), { recursive: true });
fs.copyFileSync(path.join(sourceDir, "app.js"), path.join(distDir, "assets", "app.js"));
fs.copyFileSync(path.join(sourceDir, "styles.css"), path.join(distDir, "assets", "styles.css"));
fs.writeFileSync(
  path.join(distDir, "assets", "supabase-config.js"),
  `window.RENTAGAIN_SUPABASE = ${JSON.stringify({
    url: process.env.SUPABASE_URL ?? "",
    anonKey: process.env.SUPABASE_ANON_KEY ?? "",
    turnstileSiteKey: process.env.TURNSTILE_SITE_KEY ?? "",
    enabled: process.env.RENTAGAIN_BACKEND_ENABLED === "true",
  })};\n`,
);

const template = fs.readFileSync(path.join(sourceDir, "index.html"), "utf8");
for (const route of routes) {
  const html = template
    .replace("{{TITLE}}", route.title)
    .replace("{{DESCRIPTION}}", route.description);
  const destination = route.path === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, route.path, "index.html");
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
}

fs.copyFileSync(path.join(sourceDir, "404.html"), path.join(distDir, "404.html"));
fs.copyFileSync(path.join(sourceDir, "_redirects"), path.join(distDir, "_redirects"));
console.log(`Built RentAgain responsive site with ${routes.length} routes in dist/.`);
