import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { runInNewContext } from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const routeFiles = [
  "index.html",
  "housing-packages/index.html",
  "cosigner/index.html",
  "verified-income/index.html",
  "instant-approval/index.html",
  "book-consultation/index.html",
  "book-online/index.html",
  "account/index.html",
  "staff/index.html",
  "privacy/index.html",
  "booking-calendar/housing-approval-consultation/index.html",
  "booking-calendar/car-approval-consultation/index.html",
];

for (const routeFile of routeFiles) {
  const html = fs.readFileSync(path.join(dist, routeFile), "utf8");
  assert.match(html, /<title>[^<]+<\/title>/, `${routeFile} has a title`);
  assert.match(html, /name="description" content="[^"]+"/, `${routeFile} has a description`);
  assert.match(html, /\/assets\/app\.js/, `${routeFile} loads the site app`);
  assert.match(html, /\/assets\/styles\.css/, `${routeFile} loads the site styles`);
  assert.doesNotMatch(html, /\{\{(?:TITLE|DESCRIPTION)\}\}/, `${routeFile} has no unresolved metadata`);
}

const app = fs.readFileSync(path.join(dist, "assets", "app.js"), "utf8");
const renderedRoutes = [
  { path: "/", heading: "Get Back Into Housing -" },
  { path: "/housing-packages/", heading: "Build A Stronger Rental Profile." },
  { path: "/cosigner/", heading: "Stronger Application. Better Approval Odds." },
  { path: "/verified-income/", heading: "Verify Your Income. Strengthen Your Approval." },
  { path: "/instant-approval/", heading: "INSTANT APPROVAL SERVICE" },
  { path: "/book-consultation/", heading: "Let's Find The Right Solution For You." },
  { path: "/book-online/", heading: "BOOK A CONSULTATION" },
  { path: "/account/", heading: "YOUR RENT AGAIN ACCOUNT" },
  { path: "/staff/", heading: "STAFF CONSOLE" },
  { path: "/privacy/", heading: "PRIVACY NOTICE" },
  { path: "/booking-calendar/housing-approval-consultation/", heading: "Schedule your service" },
  { path: "/booking-calendar/car-approval-consultation/", heading: "Schedule your service" },
];

for (const route of renderedRoutes) {
  const appRoot = { innerHTML: "" };
  const listeners = {};
  const attributes = { "aria-expanded": "false" };
  const menuButton = {
    addEventListener: (event, callback) => { listeners[`menu-${event}`] = callback; },
    getAttribute: (name) => attributes[name],
    setAttribute: (name, value) => { attributes[name] = value; },
  };
  const classes = new Set();
  const nav = {
    classList: {
      toggle: (name, force) => force ? classes.add(name) : classes.delete(name),
      remove: (name) => classes.delete(name),
    },
    addEventListener: (event, callback) => { listeners[`nav-${event}`] = callback; },
  };
  const documentListeners = {};
  const document = {
    title: "",
    getElementById: (id) => id === "app" ? appRoot : null,
    querySelector: (selector) => selector === ".menu-toggle" ? menuButton : selector === "#primary-nav" ? nav : null,
    addEventListener: (event, callback) => { documentListeners[event] = callback; },
  };
  runInNewContext(app, {
    window: { location: { pathname: route.path } },
    document,
    HTMLAnchorElement: class HTMLAnchorElement {},
  });
  assert.ok(appRoot.innerHTML.includes(`<h1>${route.heading}`), `${route.path} renders the expected page heading`);
  assert.ok(document.title.endsWith("RentAgain") || route.path === "/", `${route.path} sets a page title`);

  if (route.path === "/") {
    listeners["menu-click"]();
    assert.equal(attributes["aria-expanded"], "true", "mobile navigation opens accessibly");
    assert.ok(classes.has("site-nav--open"), "mobile navigation becomes visible");
    documentListeners.keydown({ key: "Escape" });
    assert.equal(attributes["aria-expanded"], "false", "Escape closes mobile navigation");
  }
}
assert.match(app, /bookingRoot: "https:\/\/www\.rentagain\.org"/);
assert.match(app, /\/booking-calendar\/housing-approval-consultation/);
assert.match(app, /\/booking-calendar\/car-approval-consultation/);
assert.match(app, /info@vontagain\.org/);
assert.match(app, /successStories\.map/);
assert.match(app, /"Approved in 48 Hours with Previous Eviction"/);
assert.match(app, /challengeItems\.map/);
assert.match(app, /cash earnings, tip income, bonuses, or fluctuating monthly commissions/i);
assert.match(app, /company_website/);
assert.match(app, /client\.functions\.invoke\("submit-consultation"/);
assert.match(app, /client\.functions\.invoke\("generate-client-intake-summary"/);
assert.match(app, /client\.functions\.invoke\("staff-consultation-requests"/);
assert.match(app, /Once the online request feature is enabled/);
assert.doesNotMatch(app, /setConfirmed\(true\)|Case #RA-|2026-10-27/);

const redirects = fs.readFileSync(path.join(dist, "_redirects"), "utf8");
assert.match(redirects, /^\/m\/housing-packages\/ \/housing-packages\/ 301$/m);
assert.match(redirects, /^\/m\/booking-calendar\/car-approval-consultation\/ \/booking-calendar\/car-approval-consultation\/ 301$/m);

const supabaseConfig = fs.readFileSync(path.join(dist, "assets", "supabase-config.js"), "utf8");
assert.match(supabaseConfig, /enabled":false/);
assert.doesNotMatch(supabaseConfig, /SERVICE_ROLE_KEY/i, "the service-role key is never emitted to the browser");
const shell = fs.readFileSync(path.join(root, "site", "index.html"), "utf8");
assert.match(shell, /@supabase\/supabase-js@2\.49\.1/);
assert.match(shell, /integrity="sha384-YieCqqg9gQufX7\+5HcFvCEg\/n3KUEdl8\/Jb\+A6J0npf1mB740VayvwKjTrtCeUoy"/);

const migration = fs.readFileSync(path.join(root, "supabase", "migrations", "20261028000000_rentagain_consultations_and_documents.sql"), "utf8");
assert.match(migration, /enable row level security/i);
assert.match(migration, /Clients can view their own consultation requests/);
assert.match(migration, /Clients can read documents in their own folder/);
assert.match(migration, /rentagain_staff_members/);
assert.match(migration, /Staff can view only their own membership/);
assert.match(migration, /revoke all on function public\.consume_intake_rate_limit\(text\) from public, anon, authenticated/i);
assert.match(migration, /consume_document_generation_limit/);

const documentFunction = fs.readFileSync(path.join(root, "supabase", "functions", "generate-client-intake-summary", "index.ts"), "utf8");
assert.match(documentFunction, /This summary reproduces information supplied by the client/);
assert.match(documentFunction, /not proof of identity, employment, income, rental history, landlord approval, or eligibility/);
assert.match(documentFunction, /createSignedUrl\(storagePath, 300/);
assert.match(documentFunction, /\.eq\("owner_id", user\.id\)/);
const intakeFunction = fs.readFileSync(path.join(root, "supabase", "functions", "submit-consultation", "index.ts"), "utf8");
assert.match(intakeFunction, /siteverify/);
assert.match(intakeFunction, /consume_intake_rate_limit/);
assert.match(intakeFunction, /importKey\([\s\S]*HMAC/);
assert.match(intakeFunction, /token !== anonKey/);
const deletionFunction = fs.readFileSync(path.join(root, "supabase", "functions", "delete-client-account", "index.ts"), "utf8");
assert.match(deletionFunction, /auth\.admin\.deleteUser\(userId\)/);
assert.match(deletionFunction, /storage[\s\S]*from\("client-documents"\)[\s\S]*remove\(paths\.slice/);
const staffFunction = fs.readFileSync(path.join(root, "supabase", "functions", "staff-consultation-requests", "index.ts"), "utf8");
assert.match(staffFunction, /rentagain_staff_members/);
assert.match(staffFunction, /authClient\.auth\.getUser\(token\)/);
assert.match(staffFunction, /allowedStatuses/);
assert.match(staffFunction, /\.limit\(100\)/);
const supabaseConfigToml = fs.readFileSync(path.join(root, "supabase", "config.toml"), "utf8");
assert.match(supabaseConfigToml, /\[functions\.staff-consultation-requests\]\s+verify_jwt = true/);

console.log(`Passed static site checks for ${routeFiles.length} routes and Supabase privacy safeguards.`);
