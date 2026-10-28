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
  { path: "/", heading: "A rental denial" },
  { path: "/housing-packages/", heading: "Build a stronger rental profile." },
  { path: "/cosigner/", heading: "A stronger application starts with the right people." },
  { path: "/verified-income/", heading: "Make your income easier to understand." },
  { path: "/instant-approval/", heading: "A different route to your next home." },
  { path: "/book-consultation/", heading: "Let’s find the right next step." },
  { path: "/book-online/", heading: "Choose the conversation you need." },
  { path: "/booking-calendar/housing-approval-consultation/", heading: "Schedule your housing consultation." },
  { path: "/booking-calendar/car-approval-consultation/", heading: "Schedule your car consultation." },
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
    getElementById: () => appRoot,
    querySelector: (selector) => selector === ".menu-toggle" ? menuButton : nav,
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
assert.match(app, /do not guarantee that an application will be accepted/i);
assert.match(app, /We do not create or alter income, payroll, or employment information/i);
assert.doesNotMatch(app, /setConfirmed\(true\)|Case #RA-|2026-10-27/);

const redirects = fs.readFileSync(path.join(dist, "_redirects"), "utf8");
assert.match(redirects, /^\/m\/housing-packages\/ \/housing-packages\/ 301$/m);
assert.match(redirects, /^\/m\/booking-calendar\/car-approval-consultation\/ \/booking-calendar\/car-approval-consultation\/ 301$/m);

console.log(`Passed static site checks for ${routeFiles.length} routes.`);
