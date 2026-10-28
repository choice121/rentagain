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
  "auto-approval/index.html",
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
  { path: "/auto-approval/", heading: "A clearer path toward your auto goals." },
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
    assert.match(appRoot.innerHTML, /fictional profiles and quotes are design-preview copy, not real client reviews or endorsements/i);
    assert.equal((appRoot.innerHTML.match(/Sample · fictional profile/g) ?? []).length, 3, "each sample testimonial is clearly labeled");
    assert.match(appRoot.innerHTML, /Replace these samples with feedback from real clients only after receiving their permission/);
    listeners["menu-click"]();
    assert.equal(attributes["aria-expanded"], "true", "mobile navigation opens accessibly");
    assert.ok(classes.has("site-nav--open"), "mobile navigation becomes visible");
    documentListeners.keydown({ key: "Escape" });
    assert.equal(attributes["aria-expanded"], "false", "Escape closes mobile navigation");
  }
}

class MockElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.attributes = {};
    this.classNames = new Set();
    this.classList = { add: (name) => this.classNames.add(name) };
    this.hidden = false;
  }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = [...children]; }
  setAttribute(name, value) { this.attributes[name] = value; }
  scrollIntoView() {}
}

let readinessSubmit;
const readinessTopic = { value: "income" };
const checkedReadinessInput = { closest: () => ({ querySelector: () => ({ textContent: "I know my target rent." }) }) };
const uncheckedReadinessInput = { closest: () => ({ querySelector: () => ({ textContent: "I can describe my rental history accurately." }) }) };
const readinessForm = {
  addEventListener: (event, callback) => { if (event === "submit") readinessSubmit = callback; },
  reportValidity: () => true,
  querySelector: () => readinessTopic,
  querySelectorAll: (selector) => {
    if (selector.includes(":checked")) return [checkedReadinessInput];
    if (selector.includes(":not(:checked)")) return [uncheckedReadinessInput];
    return [checkedReadinessInput, uncheckedReadinessInput];
  },
};
const readinessResults = new MockElement("div");
const appRoot = new MockElement("div");
const readinessDocument = {
  getElementById: (id) => id === "app" ? appRoot : null,
  querySelector: (selector) => ({
    "#readiness-guide": readinessForm,
    "#readiness-results": readinessResults,
  })[selector] ?? null,
  createElement: (tagName) => new MockElement(tagName),
  addEventListener: () => {},
};
const readinessContext = {
  window: { location: { pathname: "/" } },
  document: readinessDocument,
  HTMLAnchorElement: class HTMLAnchorElement {},
};
runInNewContext(app, readinessContext);
assert.equal(typeof readinessSubmit, "function", "the readiness guide handles submissions");
readinessSubmit({ preventDefault() {} });
assert.equal(readinessResults.hidden, false, "the readiness guide reveals its next-step result");
assert.ok(readinessResults.children.some((element) => element.textContent?.includes("This is a checklist, not an approval score")));
assert.ok(readinessResults.children.some((element) => element.href === "/verified-income/"));
assert.ok(readinessResults.children.some((element) => element.tagName === "ul"), "the readiness guide lists unchecked planning items");
const waitingProgress = readinessContext.renderRequestProgress("waiting_on_provider");
assert.ok(waitingProgress.children.some((row) => row.attributes["aria-current"] === "step"), "provider waiting appears as the current progress stage");
const declinedProgress = readinessContext.renderRequestProgress("provider_not_approved");
assert.ok(declinedProgress.children.some((row) => row.attributes["aria-current"] === "step"), "a recorded provider decision appears as the current progress stage");

assert.match(app, /bookingRoot: "https:\/\/www\.rentagain\.org"/);
assert.match(app, /\/booking-calendar\/housing-approval-consultation/);
assert.match(app, /\/booking-calendar\/car-approval-consultation/);
assert.match(app, /id="readiness-guide"/);
assert.match(app, /Your selections stay in this browser and are not sent to RentAgain/);
assert.match(app, /This is a checklist, not an approval score or eligibility decision/);
assert.match(app, /status_updated_at/);
assert.match(app, /provider_not_approved/);
assert.match(app, /decision is outside RentAgain's control/);
assert.match(app, /info@vontagain\.org/);
assert.match(app, /class="footer-socials" aria-hidden="true"/);
assert.equal([...app.matchAll(/bea572_(?:37e807f014a94a59a0bcaa31302ae0c8|42e56c2aab1045e7b1d8a2f0fc6f4fcc|3c35867aae664e648a931e54c2370089|8c12aae5a0114da197dea3c2ea03c065)~mv2\.png/g)].length, 4, "all source footer social icons are retained");
assert.match(app, /testimonialPreviews\.map/);
assert.doesNotMatch(app, /successStories|SUCCESS STORIES/);
assert.doesNotMatch(app, /Approved in 48 Hours with Previous Eviction|Income Multiplier Requirement Met via ADP|Overcame 530 Credit Score/);
assert.match(app, /challengeItems\.map/);
assert.doesNotMatch(app, /standard scoring algorithms reject|strict 3x-rent thresholds|4-6 weeks of uncertain waiting/i);
assert.match(app, /View All FAQs/);
assert.match(app, /faq\(housingFaqs, true\)/);
assert.match(app, /faq\(coApplicantFaqs, true\)/);
assert.match(app, /faq\(incomeFaqs, true\)/);
assert.match(app, /faq\(instantFaqs, true\)/);
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
const progressMigration = fs.readFileSync(path.join(root, "supabase", "migrations", "20261028000001_consultation_progress_statuses.sql"), "utf8");
assert.match(progressMigration, /status_updated_at timestamptz not null default now\(\)/i);
assert.match(progressMigration, /provider_approved/);
assert.match(progressMigration, /provider_not_approved/);

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
const staffFunction = fs.readFileSync(path.join(root, "supabase", "functions", "staff-consultation-requests", "index.ts"), "utf8");
assert.match(staffFunction, /needs_information/);
assert.match(staffFunction, /status_updated_at: new Date\(\)\.toISOString\(\)/);
const deletionFunction = fs.readFileSync(path.join(root, "supabase", "functions", "delete-client-account", "index.ts"), "utf8");
assert.match(deletionFunction, /auth\.admin\.deleteUser\(userId\)/);
assert.match(deletionFunction, /storage[\s\S]*from\("client-documents"\)[\s\S]*remove\(paths\.slice/);
assert.match(staffFunction, /rentagain_staff_members/);
assert.match(staffFunction, /authClient\.auth\.getUser\(token\)/);
assert.match(staffFunction, /allowedStatuses/);
assert.match(staffFunction, /\.limit\(100\)/);
const supabaseConfigToml = fs.readFileSync(path.join(root, "supabase", "config.toml"), "utf8");
assert.match(supabaseConfigToml, /\[functions\.staff-consultation-requests\]\s+verify_jwt = true/);

console.log(`Passed static site checks for ${routeFiles.length} routes and Supabase privacy safeguards.`);
