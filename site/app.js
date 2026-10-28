const site = {
  phone: "(866) 570-RENT",
  phoneHref: "+18665707368",
  email: "info@rentagain.org",
  bookingRoot: "https://www.rentagain.org",
};

const services = [
  {
    path: "/housing-packages/",
    icon: "01",
    name: "Housing approval",
    description: "Personalized guidance, rental profile support, and application strategy.",
    price: "From $950",
    meta: "30–45 days",
  },
  {
    path: "/cosigner/",
    icon: "02",
    name: "Co-applicant",
    description: "Explore whether a qualified, consenting co-applicant fits your application.",
    price: "$800",
    meta: "Typical processing: 48–72 hours",
  },
  {
    path: "/verified-income/",
    icon: "03",
    name: "Income verification",
    description: "Organize clear documentation of your actual income for a rental application.",
    price: "From $450",
    meta: "Typical processing: 48–72 hours",
  },
  {
    path: "/instant-approval/",
    icon: "04",
    name: "Instant approval",
    description: "A guided housing option for eligible renters who need a different path.",
    price: "From $2,500",
    meta: "Typical timeframe: 7–14 days",
  },
];

const sharedFaqs = [
  {
    question: "Can RentAgain guarantee that I’ll be approved?",
    answer:
      "No. Each housing provider sets its own criteria and makes its own decision. We help you understand your options and prepare accurate application materials.",
  },
  {
    question: "Do you work nationwide?",
    answer:
      "RentAgain offers virtual support across the United States. Service eligibility and available housing options can vary by location.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation to discuss your goals and challenges. A specialist can explain which services may fit your situation and what the next steps involve.",
  },
];

function serviceCards(items = services) {
  return items
    .map(
      (service) => `
        <article class="service-card">
          <div class="service-card__top"><span class="service-card__number">${service.icon}</span><span class="service-card__arrow" aria-hidden="true">↗</span></div>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <div class="service-card__meta"><strong>${service.price}</strong><span>${service.meta}</span></div>
          <a class="text-link" href="${service.path}">Explore service <span aria-hidden="true">→</span></a>
        </article>`,
    )
    .join("");
}

function faq(items = sharedFaqs) {
  return `
    <section class="section section--compact" aria-labelledby="faq-title">
      <div class="section-heading">
        <p class="eyebrow">Good to know</p>
        <h2 id="faq-title">Questions, answered.</h2>
      </div>
      <div class="faq-list">
        ${items
          .map(
            (item) => `
              <details class="faq-item">
                <summary>${item.question}<span aria-hidden="true"></span></summary>
                <p>${item.answer}</p>
              </details>`,
          )
          .join("")}
      </div>
    </section>`;
}

function consultationCta(label = "Book a free consultation") {
  return `
    <section class="cta-band">
      <div>
        <p class="eyebrow eyebrow--light">Your next chapter starts here</p>
        <h2>Let’s find a path that fits your situation.</h2>
      </div>
      <a class="button button--light" href="/book-consultation/">${label}<span aria-hidden="true">→</span></a>
    </section>`;
}

function pageHero(eyebrow, title, copy, aside = "") {
  return `
    <section class="page-hero">
      <div class="page-hero__copy">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="page-hero__lead">${copy}</p>
        <div class="button-row">
          <a class="button button--primary" href="/book-consultation/">Talk through your options <span aria-hidden="true">→</span></a>
          <a class="button button--outline" href="tel:${site.phoneHref}">Call ${site.phone}</a>
        </div>
      </div>
      <div class="page-hero__aside">${aside}</div>
    </section>`;
}

function homePage() {
  return `
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow"><span class="eyebrow__dot"></span>A better path forward</p>
        <h1>A rental denial<br>isn’t the end<br>of your story.</h1>
        <p class="home-hero__lead">A clearer plan can help you move forward. RentAgain offers personalized housing support for renters facing credit, income, or rental-history challenges.</p>
        <div class="button-row">
          <a class="button button--primary" href="/book-consultation/">Explore your options <span aria-hidden="true">→</span></a>
          <a class="button button--text" href="#services">See how we can help <span aria-hidden="true">↓</span></a>
        </div>
        <div class="trust-row"><span class="trust-row__mark" aria-hidden="true">✳</span><span>Personalized support, nationwide</span><span class="trust-row__divider" aria-hidden="true"></span><span>Start with a free conversation</span></div>
      </div>
      <div class="home-hero__visual" aria-label="A simple path through the housing application process">
        <div class="orbit orbit--one"></div><div class="orbit orbit--two"></div>
        <div class="hero-note"><span class="hero-note__icon" aria-hidden="true">↗</span><span class="hero-note__label">A fresh start</span><strong>One step at a time.</strong><span class="hero-note__line"></span><span class="hero-note__small">Understand your options<br>and decide what comes next.</span></div>
        <div class="hero-sticker"><span aria-hidden="true">✳</span><span>Make room<br>for what’s next</span></div>
        <span class="hero-spark hero-spark--one" aria-hidden="true">✳</span><span class="hero-spark hero-spark--two" aria-hidden="true">✳</span>
      </div>
    </section>

    <section class="intro-strip">
      <p>Every renter has a story.<br><strong>Your next step should fit yours.</strong></p>
      <p>We help you understand your choices, prepare accurate information, and move forward with a plan tailored to your situation.</p>
      <a class="text-link" href="/book-consultation/">Meet with our team <span aria-hidden="true">→</span></a>
    </section>

    <section id="services" class="section section--tint">
      <div class="section-heading section-heading--row">
        <div><p class="eyebrow">Ways we can help</p><h2>Support for the<br>roadblocks in your way.</h2></div>
        <p class="section-heading__note">Explore services designed around common rental approval challenges. We’ll help you understand which options may fit.</p>
      </div>
      <div class="service-grid">${serviceCards()}</div>
    </section>

    <section class="section">
      <div class="section-heading"><p class="eyebrow">A thoughtful process</p><h2>Clarity first.<br>Then a plan.</h2></div>
      <div class="steps-grid">
        <article class="step-card"><span>01</span><h3>Tell us what’s going on</h3><p>Share your housing goals and the challenges you’ve run into.</p></article>
        <article class="step-card"><span>02</span><h3>Review your options</h3><p>We’ll walk through relevant services and explain what they can—and can’t—do.</p></article>
        <article class="step-card"><span>03</span><h3>Choose your next step</h3><p>Move ahead with a clear plan and support along the way.</p></article>
      </div>
    </section>

    <section class="challenge-section">
      <div class="challenge-section__intro"><p class="eyebrow eyebrow--light">You’re not the only one</p><h2>Life can make<br>renting complicated.</h2><p>We help renters work through a range of situations with care and practical guidance.</p><a class="button button--light" href="/book-consultation/">Talk with our team <span aria-hidden="true">→</span></a></div>
      <div class="challenge-list">
        <div><span>01</span><strong>Credit challenges</strong><span aria-hidden="true">↗</span></div>
        <div><span>02</span><strong>Limited rental history</strong><span aria-hidden="true">↗</span></div>
        <div><span>03</span><strong>Rental collections or past denials</strong><span aria-hidden="true">↗</span></div>
        <div><span>04</span><strong>Self-employment or variable income</strong><span aria-hidden="true">↗</span></div>
        <div><span>05</span><strong>Relocation and time-sensitive moves</strong><span aria-hidden="true">↗</span></div>
      </div>
    </section>
    ${faq()}
    ${consultationCta()}`;
}

function housingPage() {
  const aside = `<div class="price-note"><span>Program options</span><strong>$950 <i>–</i> $1,400</strong><p>Choose the support level and timeline that best matches your needs.</p><a class="text-link" href="/book-online/">Book a consultation <span aria-hidden="true">→</span></a></div>`;
  return `
    ${pageHero("Housing approval program", "Build a stronger rental profile.", "Explore personalized support with rental history documentation, application strategy, and profile guidance. Every housing provider makes its own decision; no service can guarantee approval.", aside)}
    <section class="section section--tint">
      <div class="section-heading"><p class="eyebrow">Choose your pace</p><h2>Two ways to move forward.</h2></div>
      <div class="package-grid">
        <article class="package-card"><p class="eyebrow">Standard housing package</p><h3>$950</h3><p class="package-card__term">Typical program length: 30–45 days</p><p>For renters who have time to work through a personalized profile and application plan.</p><ul><li>Credit profile support</li><li>Rental history documentation</li><li>Application assistance and strategy</li><li>One quality tradeline, where appropriate</li><li>Dedicated support</li></ul><a class="button button--primary" href="/book-consultation/">Discuss the standard package <span aria-hidden="true">→</span></a></article>
        <article class="package-card package-card--featured"><p class="eyebrow">Expedited housing package</p><h3>$1,400</h3><p class="package-card__term">Typical program length: 7–14 days</p><p>Priority support for renters working with a shorter timeline.</p><ul><li>Credit profile support</li><li>Rental history documentation</li><li>Application assistance and strategy</li><li>Two quality tradelines, where appropriate</li><li>Priority processing and dedicated support</li></ul><a class="button button--light" href="/book-consultation/">Discuss the expedited package <span aria-hidden="true">→</span></a></article>
      </div>
      <p class="fine-print">Program suitability, timelines, and outcomes vary by individual situation and third-party housing-provider requirements.</p>
    </section>
    <section class="section"><div class="section-heading"><p class="eyebrow">How it works</p><h2>Support that starts<br>with your situation.</h2></div><div class="steps-grid"><article class="step-card"><span>01</span><h3>Consultation</h3><p>We review your goals and current application challenges.</p></article><article class="step-card"><span>02</span><h3>Strategy</h3><p>We explain relevant profile and documentation options.</p></article><article class="step-card"><span>03</span><h3>Preparation</h3><p>We help you prepare accurate information for your next application.</p></article></div></section>
    ${consultationCta("Compare your options")}`;
}

function coApplicantPage() {
  const aside = `<div class="price-note"><span>Program fee</span><strong>$800</strong><p>Typical processing: 48–72 hours after required information is received.</p><a class="text-link" href="/book-online/">Talk through eligibility <span aria-hidden="true">→</span></a></div>`;
  return `
    ${pageHero("Co-applicant program", "A stronger application starts with the right people.", "A genuine, qualified co-applicant may be able to apply with you when the property accepts co-applicants. We’ll explain the process and help you understand what information is needed.", aside)}
    <section class="section section--tint">
      <div class="section-heading"><p class="eyebrow">A shared application</p><h2>Clear roles. Accurate information.</h2><p class="section-heading__note">The co-applicant is a real person who knowingly agrees to participate. Their identity, credit, income, and responsibilities must be represented accurately.</p></div>
      <div class="feature-grid"><article class="feature-card"><span>01</span><h3>Qualified participation</h3><p>The program advertises a co-applicant with a 700+ credit profile and $10,000 in monthly income. Those figures must be verified, belong to the co-applicant, and be accepted by the property.</p></article><article class="feature-card"><span>02</span><h3>Informed consent</h3><p>The co-applicant reviews the application and agrees to any obligations before anything is submitted.</p></article><article class="feature-card"><span>03</span><h3>No approval promises</h3><p>Property owners and managers make final decisions. We do not guarantee that an application will be accepted.</p></article></div>
      <div class="notice"><span aria-hidden="true">i</span><p>Any co-applicant’s income and credit belong to that person and must be documented truthfully. Availability and acceptance depend on the housing provider.</p></div>
    </section>
    <section class="section"><div class="section-heading"><p class="eyebrow">The process</p><h2>Four steps, with everyone in the loop.</h2></div><div class="steps-grid"><article class="step-card"><span>01</span><h3>Review your situation</h3><p>We discuss your application goals and confirm whether the program may fit.</p></article><article class="step-card"><span>02</span><h3>Confirm participation</h3><p>A potential co-applicant receives clear information and decides whether to participate.</p></article><article class="step-card"><span>03</span><h3>Prepare the application</h3><p>Required information is collected and reviewed with the people involved.</p></article></div></section>
    ${consultationCta("Ask about the co-applicant program")}`;
}

function verifiedIncomePage() {
  const aside = `<div class="price-note"><span>Package options</span><strong>$450 <i>–</i> $650</strong><p>Typical processing: 48–72 hours after required information is received.</p><a class="text-link" href="/book-online/">Book a consultation <span aria-hidden="true">→</span></a></div>`;
  return `
    ${pageHero("Income verification service", "Make your income easier to understand.", "Get help organizing accurate income documentation for a rental application, including support for self-employed, variable, or non-traditional income.", aside)}
    <section class="section section--tint">
      <div class="section-heading"><p class="eyebrow">Two package options</p><h2>Documentation that reflects your real income.</h2></div>
      <div class="package-grid">
        <article class="package-card"><p class="eyebrow">Standard</p><h3>$450</h3><p class="package-card__term">Typical turnaround: 48–72 hours</p><p>Core documentation support for common rental income requirements.</p><ul><li>Income requirement review</li><li>Review of four weeks of pay stubs and one to two months of bank statements you provide</li><li>Income summary report</li><li>Landlord-ready documentation</li></ul><a class="button button--primary" href="/book-consultation/">Ask about standard support <span aria-hidden="true">→</span></a></article>
        <article class="package-card package-card--featured"><p class="eyebrow">Premium</p><h3>$650</h3><p class="package-card__term">Typical turnaround: 48–72 hours</p><p>More detailed support for self-employed renters and complex income situations.</p><ul><li>Everything in Standard</li><li>Income analysis and business overview, if applicable</li><li>ADP payroll setup support, where available and authorized</li><li>Custom recommendations and priority processing</li></ul><a class="button button--light" href="/book-consultation/">Ask about premium support <span aria-hidden="true">→</span></a></article>
      </div>
      <div class="notice"><span aria-hidden="true">i</span><p>Documentation must reflect actual earnings and be supported by accurate records. We do not create or alter income, payroll, or employment information. Any third-party product availability is subject to that provider’s terms.</p></div>
    </section>
    <section class="section"><div class="section-heading"><p class="eyebrow">Who we support</p><h2>Income doesn’t always arrive<br>in a neat monthly package.</h2></div><div class="tag-grid"><span>Self-employed</span><span>Contractors and gig workers</span><span>Variable income</span><span>Cash or non-traditional income</span><span>Recent relocation</span><span>Past income-related denial</span></div></section>
    ${consultationCta("Talk through income documentation")}`;
}

function instantApprovalPage() {
  const aside = `<div class="price-note"><span>Published service fees</span><strong>$2,500 <i>–</i> $2,800</strong><p>A typical timeframe for eligible cases is 7–14 days. Availability and timing vary.</p><a class="text-link" href="/book-online/">Discuss eligibility <span aria-hidden="true">→</span></a></div>`;
  return `
    ${pageHero("Premium housing service", "A different route to your next home.", "The Instant Approval Service helps eligible clients explore qualifying housing options and understand the steps involved when traditional application routes have not worked.", aside)}
    <section class="section section--tint">
      <div class="section-heading"><p class="eyebrow">Service fees</p><h2>Upfront pricing for a guided process.</h2><p class="section-heading__note">Fees cover RentAgain services. Rent, deposits, screening charges, and other property costs are separate unless specifically stated in a written agreement.</p></div>
      <div class="price-grid"><article class="price-tile"><span>Apartments</span><strong>$2,500</strong><p>For eligible apartment housing options.</p></article><article class="price-tile"><span>Houses</span><strong>$2,800</strong><p>For eligible single-family housing options.</p></article></div>
      <p class="fine-print">A service fee does not guarantee a lease, property availability, approval, or move-in by a particular date. Housing providers make their own decisions.</p>
    </section>
    <section class="section"><div class="section-heading"><p class="eyebrow">What to expect</p><h2>From first conversation<br>to a clear next step.</h2></div><div class="steps-grid"><article class="step-card"><span>01</span><h3>Consultation</h3><p>Discuss your goals, budget, location, and eligibility.</p></article><article class="step-card"><span>02</span><h3>Explore options</h3><p>Review available qualifying options and their requirements.</p></article><article class="step-card"><span>03</span><h3>Application and lease</h3><p>Understand the application process and review any documents before you sign.</p></article></div></section>
    ${consultationCta("Check whether this service may fit")}`;
}

function consultationPage() {
  return `
    ${pageHero("Free consultation", "Let’s find the right next step.", "Talk through your housing goals, the challenges you’re facing, and the options that may be available. The conversation is free and there’s no obligation to purchase a service.", `<div class="price-note"><span>What to expect</span><strong>15 min</strong><p>A one-to-one conversation with a RentAgain specialist.</p><a class="text-link" href="/book-online/">Choose a time <span aria-hidden="true">→</span></a></div>`)}
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">We’ll talk about</p><h2>Your goals, your situation,<br>your options.</h2></div><div class="feature-grid"><article class="feature-card"><span>01</span><h3>Your goals</h3><p>Where you hope to rent and what matters most to you.</p></article><article class="feature-card"><span>02</span><h3>Your situation</h3><p>Relevant credit, income, rental-history, or timing challenges.</p></article><article class="feature-card"><span>03</span><h3>Your options</h3><p>Services that may fit, what they cost, and what they cannot promise.</p></article></div><div class="button-row button-row--center"><a class="button button--primary" href="/book-online/">See available consultations <span aria-hidden="true">→</span></a><a class="button button--outline" href="tel:${site.phoneHref}">Call ${site.phone}</a></div></section>
    ${faq([{ question: "Is the consultation really free?", answer: "Yes. The initial consultation is free and there is no obligation to purchase a service." }, ...sharedFaqs.slice(0, 2)])}
    ${consultationCta("Choose a consultation time")}`;
}

function bookingPage() {
  const housingUrl = `${site.bookingRoot}/booking-calendar/housing-approval-consultation`;
  const carUrl = `${site.bookingRoot}/booking-calendar/car-approval-consultation`;
  return `
    ${pageHero("Book online", "Choose the conversation you need.", "Select a free 15-minute consultation. Online scheduling currently opens the existing RentAgain booking calendar.", `<div class="price-note"><span>Quick support</span><strong>Free</strong><p>Not sure which consultation to choose? Call or email and we’ll point you in the right direction.</p><a class="text-link" href="mailto:${site.email}">Email our team <span aria-hidden="true">→</span></a></div>`)}
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">Select a service</p><h2>Make time for a clear plan.</h2></div><div class="booking-grid"><article class="booking-card"><span class="booking-card__icon" aria-hidden="true">⌂</span><p class="eyebrow">Housing consultation</p><h3>Housing approval</h3><p>Review rental approval options, housing packages, income documentation, and next steps.</p><div class="booking-card__meta"><span>15 minutes</span><span>Free</span></div><a class="button button--primary" href="${housingUrl}" target="_blank" rel="noopener noreferrer">Open housing calendar <span aria-hidden="true">↗</span></a></article><article class="booking-card"><span class="booking-card__icon booking-card__icon--gold" aria-hidden="true">✳</span><p class="eyebrow">Vehicle consultation</p><h3>Car approval</h3><p>Discuss vehicle financing and automotive approval guidance and documentation.</p><div class="booking-card__meta"><span>15 minutes</span><span>Free</span></div><a class="button button--primary" href="${carUrl}" target="_blank" rel="noopener noreferrer">Open car calendar <span aria-hidden="true">↗</span></a></article></div><p class="fine-print">Scheduling is completed on the existing RentAgain site. This redesign does not collect or store booking details.</p></section>
    ${consultationCta("Need help choosing?")}`;
}

function calendarPage(kind) {
  const isCar = kind === "car";
  const title = isCar ? "Car approval consultation" : "Housing approval consultation";
  const description = isCar
    ? "Discuss vehicle financing and automotive approval guidance and documentation."
    : "Discuss rental approval options, housing packages, and your next steps.";
  const path = isCar
    ? "/booking-calendar/car-approval-consultation"
    : "/booking-calendar/housing-approval-consultation";
  const fullUrl = `${site.bookingRoot}${path}`;
  return `
    ${pageHero("Online scheduling", `Schedule your ${isCar ? "car" : "housing"} consultation.`, description, `<div class="price-note"><span>Consultation length</span><strong>15 min</strong><p>Free, one-to-one conversation. No obligation.</p></div>`)}
    <section class="section section--tint"><div class="booking-bridge"><div><p class="eyebrow">Continue to scheduling</p><h2>Pick a time that works for you.</h2><p>Your appointment is booked through RentAgain’s existing scheduling system. Continue there to view current availability.</p><a class="button button--primary" href="${fullUrl}" target="_blank" rel="noopener noreferrer">Open the RentAgain calendar <span aria-hidden="true">↗</span></a></div><div class="booking-bridge__note"><span aria-hidden="true">↗</span><p>You’ll open the current booking calendar in a new tab. Your appointment details are handled by that service—not this preview site.</p></div></div></section>
    <section class="section section--compact"><div class="contact-card"><div><p class="eyebrow">Prefer to talk?</p><h2>We’re here to help.</h2></div><div class="button-row"><a class="button button--outline" href="tel:${site.phoneHref}">Call ${site.phone}</a><a class="button button--outline" href="mailto:${site.email}">Email us</a></div></div></section>`;
}

function notFoundPage() {
  return `
    <section class="not-found"><p class="eyebrow">Page not found</p><h1>Let’s get you<br>back on track.</h1><p>The page may have moved. Head back home or explore our services.</p><a class="button button--primary" href="/">Go to the homepage <span aria-hidden="true">→</span></a></section>`;
}

const routes = {
  "/": { title: "RentAgain | A better path forward", render: homePage },
  "/housing-packages": { title: "Housing Approval Program | RentAgain", render: housingPage },
  "/cosigner": { title: "Co-Applicant Program | RentAgain", render: coApplicantPage },
  "/verified-income": { title: "Income Verification | RentAgain", render: verifiedIncomePage },
  "/instant-approval": { title: "Instant Approval Service | RentAgain", render: instantApprovalPage },
  "/book-consultation": { title: "Free Consultation | RentAgain", render: consultationPage },
  "/book-online": { title: "Book Online | RentAgain", render: bookingPage },
  "/booking-calendar/housing-approval-consultation": {
    title: "Housing Approval Consultation | RentAgain",
    render: () => calendarPage("housing"),
  },
  "/booking-calendar/car-approval-consultation": {
    title: "Car Approval Consultation | RentAgain",
    render: () => calendarPage("car"),
  },
};

function normalizedPath(pathname) {
  return pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
}

function navigation(currentPath) {
  const links = [
    { path: "/", label: "Home" },
    { path: "/housing-packages/", label: "Housing approval" },
    { path: "/cosigner/", label: "Co-applicant" },
    { path: "/verified-income/", label: "Income verification" },
    { path: "/instant-approval/", label: "Instant approval" },
  ];
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="RentAgain home"><span class="brand__symbol" aria-hidden="true">r.</span><span>rentagain<small>NEW CHAPTER. NEW HOME.</small></span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span class="visually-hidden">Menu</span></button>
      <nav class="site-nav" id="primary-nav" aria-label="Main navigation">
        ${links.map(({ path, label }) => `<a href="${path}"${normalizedPath(path) === currentPath ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
        <a class="site-nav__mobile-book" href="/book-online/">Book online</a>
      </nav>
      <a class="button button--small button--primary site-header__cta" href="/book-consultation/">Free consultation <span aria-hidden="true">→</span></a>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="site-footer__main">
        <div><a class="brand brand--footer" href="/"><span class="brand__symbol" aria-hidden="true">r.</span><span>rentagain<small>NEW CHAPTER. NEW HOME.</small></span></a><p class="site-footer__statement">A better path forward,<br>one step at a time.</p></div>
        <div class="site-footer__links"><div><p class="footer-label">Explore</p><a href="/housing-packages/">Housing approval</a><a href="/cosigner/">Co-applicant</a><a href="/verified-income/">Income verification</a><a href="/instant-approval/">Instant approval</a></div><div><p class="footer-label">Get in touch</p><a href="/book-online/">Book online</a><a href="tel:${site.phoneHref}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a></div></div>
      </div>
      <div class="site-footer__bottom"><span>© ${new Date().getFullYear()} RentAgain. All rights reserved.</span><span>Service availability and outcomes vary. Housing providers make all approval decisions.</span></div>
    </footer>`;
}

const currentPath = normalizedPath(window.location.pathname);
const page = routes[currentPath];
const content = page ? page.render() : notFoundPage();
const main = `<main id="main">${content}</main>`;
document.getElementById("app").innerHTML = `${navigation(currentPath)}${main}${footer()}`;
document.title = page ? page.title : "Page not found | RentAgain";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuButton?.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  nav.classList.toggle("site-nav--open", !isExpanded);
});
nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("site-nav--open");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuButton?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("site-nav--open");
  }
});
