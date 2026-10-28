import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(rootDir, "site");
const distDir = path.join(rootDir, "dist");
const routes = [
  { path: "/", title: "RentAgain | A better path forward", description: "Personalized housing support for renters facing credit, income, or rental-history challenges." },
  { path: "/housing-packages/", title: "Housing Approval Program | RentAgain", description: "Explore personalized housing approval support, rental history documentation, and application strategy." },
  { path: "/cosigner/", title: "Co-Applicant Program | RentAgain", description: "Learn about RentAgain's co-applicant program and how a genuine, consenting co-applicant may participate." },
  { path: "/verified-income/", title: "Income Verification | RentAgain", description: "Get help organizing accurate income documentation for a rental application." },
  { path: "/instant-approval/", title: "Instant Approval Service | RentAgain", description: "Explore RentAgain's guided housing options for eligible renters." },
  { path: "/book-consultation/", title: "Free Consultation | RentAgain", description: "Book a free consultation to discuss your housing goals and next steps." },
  { path: "/book-online/", title: "Book Online | RentAgain", description: "Choose an online housing or car approval consultation." },
  { path: "/booking-calendar/housing-approval-consultation/", title: "Housing Approval Consultation | RentAgain", description: "Continue to the RentAgain housing approval consultation calendar." },
  { path: "/booking-calendar/car-approval-consultation/", title: "Car Approval Consultation | RentAgain", description: "Continue to the RentAgain car approval consultation calendar." },
];

if (!fs.existsSync(path.join(sourceDir, "index.html"))) {
  throw new Error(`Missing site entry point: ${path.join(sourceDir, "index.html")}`);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(path.join(distDir, "assets"), { recursive: true });
fs.copyFileSync(path.join(sourceDir, "app.js"), path.join(distDir, "assets", "app.js"));
fs.copyFileSync(path.join(sourceDir, "styles.css"), path.join(distDir, "assets", "styles.css"));

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
