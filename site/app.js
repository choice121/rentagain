const site = {
  phone: "(866) 570-RENT",
  phoneHref: "+18665707368",
  email: "info@vontagain.org",
  bookingRoot: "https://www.rentagain.org",
  coverage: "Nationwide - All 50 States",
};

const services = [
  {
    path: "/housing-packages/",
    icon: "01",
    name: "Housing Approval Program",
    description: "Personalized rental-profile support, application strategy, and guided next steps.",
    meta: "2 packages · $950–$1,400",
  },
  {
    path: "/cosigner/",
    icon: "02",
    name: "Co-Applicant Program",
    description: "Explore whether a qualified co-applicant can strengthen your rental application.",
    meta: "$800 · 48–72 hours",
  },
  {
    path: "/verified-income/",
    icon: "03",
    name: "Verified Income Program",
    description: "Prepare accurate income documentation for a clearer rental application.",
    meta: "$450–$650 · 48–72 hours",
  },
  {
    path: "/instant-approval/",
    icon: "04",
    name: "Instant Approval Service",
    description: "A guided housing option for eligible clients seeking a faster path.",
    meta: "Apartments $2,500 · Houses $2,800",
  },
  {
    path: "/auto-approval/",
    icon: "05",
    name: "Auto Approval Program",
    description: "A 30-day credit-building service with guidance from the RentAgain team.",
    meta: "30-day program · Ask about pricing",
  },
];

const requestStatuses = [
  { value: "new", label: "Request received", description: "Your consultation request is in the RentAgain queue." },
  { value: "contacted", label: "Specialist contacted", description: "A RentAgain specialist has reached out about your request." },
  { value: "reviewing", label: "Review in progress", description: "The team is reviewing the information you shared." },
  { value: "needs_information", label: "More information needed", description: "Please contact your specialist to confirm what is needed next." },
  { value: "plan_ready", label: "Plan ready", description: "Your specialist has prepared the recommended next steps." },
  { value: "application_prepared", label: "Application prepared", description: "Application preparation is marked complete by the RentAgain team." },
  { value: "submitted_to_provider", label: "Submitted to housing provider", description: "The team has recorded that your application was submitted to a housing provider." },
  { value: "waiting_on_provider", label: "Waiting on provider", description: "The housing provider is reviewing the application. Its decision is outside RentAgain's control." },
  { value: "provider_approved", label: "Provider reported approval", description: "A provider decision was recorded. Confirm final terms directly with the housing provider." },
  { value: "provider_not_approved", label: "Provider did not approve", description: "A provider decision was recorded. Contact your specialist to discuss options." },
  { value: "closed", label: "Request closed", description: "This request is marked closed. Contact RentAgain if you need help." },
];

const statusRank = {
  new: 0,
  contacted: 1,
  reviewing: 2,
  needs_information: 2,
  plan_ready: 3,
  application_prepared: 4,
  submitted_to_provider: 5,
  waiting_on_provider: 5,
  provider_approved: 6,
  provider_not_approved: 6,
  closed: 7,
};

const homeFaqs = [
  {
    question: "How quickly can I get started?",
    answer: "You can get started by scheduling a consultation or selecting a program online. Timing depends on the service and your circumstances; discuss current processing estimates with the team.",
  },
  {
    question: "Do you guarantee approval?",
    answer: "No. Housing providers make their own decisions, and Rent Again cannot guarantee that an application will be accepted.",
  },
  {
    question: "Do you work nationwide?",
    answer: "Rent Again lists service across all 50 states. Available services and housing options can vary by location; contact the team to confirm availability.",
  },
  {
    question: "What if I've already been denied?",
    answer: "A consultation can help you review your situation and discuss available services. A prior denial does not guarantee a future approval.",
  },
  {
    question: "How do I know which service I need?",
    answer: "Review the service details and listed prices, or book a consultation to discuss which option may fit your situation.",
  },
];

const housingFaqs = [
  {
    question: "How long does the Housing Approval Program take?",
    answer: "The listed package timelines are estimates, not guarantees. Confirm current processing times during your consultation.",
  },
  { question: "Do you guarantee approval?", answer: homeFaqs[1].answer },
  {
    question: "Will this program remove negative items from my credit?",
    answer: "No credit-report changes are promised. Review the service details and consult the relevant credit bureau or qualified professional about your report.",
  },
  {
    question: "What if I have an eviction or multiple collections?",
    answer: "Discuss your circumstances during a consultation. The service cannot guarantee that a housing provider will approve an application.",
  },
];

const coApplicantFaqs = [
  {
    question: "How quickly will my application be submitted?",
    answer: "Processing time depends on the service and the information available. Confirm the current estimate and process before purchasing.",
  },
  {
    question: "Will the co-applicant be on the lease?",
    answer: "Lease participation and responsibilities depend on the housing provider and the parties' agreement. Confirm the exact arrangement before proceeding.",
  },
  {
    question: "What credit score does the co-applicant have?",
    answer: "Ask Rent Again for current, verifiable program details. Do not rely on an unverified score or submit information that is not accurate.",
  },
  {
    question: "Do I have to meet any requirements?",
    answer: "Eligibility and requirements can vary. Ask for the current terms and review them before sharing personal information or paying a fee.",
  },
  {
    question: "Is this the same as a co-signer?",
    answer: "Not necessarily. The legal obligations depend on the arrangement and documents involved. Review the actual agreement and seek qualified advice if needed.",
  },
  {
    question: "Is the program guaranteed to get me approved?",
    answer: homeFaqs[1].answer,
  },
];

const incomeFaqs = [
  {
    question: "What types of income can you help verify?",
    answer: "The service can help organize truthful income information you provide. Available options depend on the source and documentation.",
  },
  {
    question: "What documents do I need to provide?",
    answer: "Ask the team what current documents are required. Only provide authentic records obtained from the relevant employer, payroll provider, bank, or other source.",
  },
  {
    question: "How long does the process take?",
    answer: "The listed turnaround is an estimate. Confirm the current processing time before purchasing.",
  },
  { question: "Is this service available nationwide?", answer: homeFaqs[2].answer },
  { question: "Is this guaranteed to get me approved?", answer: homeFaqs[1].answer },
  {
    question: "What if my income is inconsistent?",
    answer: "A consultation can discuss how to organize accurate information about variable income. Rent Again cannot create or alter payroll, employment, or income records.",
  },
];

const instantFaqs = [
  {
    question: "How quickly can I move in?",
    answer: "The page lists an estimated 7–14-day timeline for some eligible cases. Timing depends on availability and provider decisions and is not guaranteed.",
  },
  {
    question: "What types of properties do you work with?",
    answer: "The service page describes apartment and house options. Ask the team what is currently available in your area.",
  },
  {
    question: "Do I need good credit to qualify?",
    answer: "Eligibility depends on your circumstances and the specific service. A consultation can explain the current criteria.",
  },
  {
    question: "Is this service available in my area?",
    answer: "Rent Again lists nationwide service, but housing availability varies by location. Contact the team to confirm.",
  },
];

const successStories = [
  "01ef68_a6e50e592af0463788861788b5474e45~mv2.jpg",
  "01ef68_61271eabbfdc4ae5a8c3390d169a0e96~mv2.jpg",
  "01ef68_8b79258f22b842299b2a17b6d8b5cc17~mv2.jpg",
  "01ef68_9905d97fc64543eb8d3d044128c9fb98~mv2.png",
  "01ef68_b220d9666dd3486c84daa0854400eb34~mv2.jpg",
  "01ef68_c34ff10b6cba46adb3829571530084f2~mv2.jpg",
  "01ef68_b8a7b864cb3242cab17222e5add39d05~mv2.jpg",
  "01ef68_e90dc2c4a6184468841baf7f5d05c0a4~mv2.jpg",
  "01ef68_24b2b83815eb42d28ab4868b08130a26~mv2.jpg",
  "01ef68_8ca633c8d5c94b9fbfc5984e42273cac~mv2.jpg",
  "01ef68_78c6dc8bac2b45d0bee5535e1a774ef7~mv2.jpg",
  "01ef68_0287af425b844275bcc128822137540d~mv2.png",
  "01ef68_9a65f1a8adec40f4808735533399b004~mv2.jpg",
  "01ef68_a85ad790c4174158942da35531d864a0~mv2.jpg",
  "01ef68_c26375599de44ccba3fd6d5ec5256423~mv2.jpg",
  "01ef68_7516fd9f80384bbbbfa31d0ac91cd07b~mv2.jpg",
  "01ef68_99c7ad2c46514fc38c3c1f54bb51da7f~mv2.jpg",
  "01ef68_278f2451bddc4a8eb2c2bec489bac112~mv2.jpg",
].map((image) => `https://static.wixstatic.com/media/${image}`);

const challengeItems = [
  ["Credit Challenges", "bea572_f6d2188bd2274dc08b886c36321a3463~mv2.png"],
  ["Limited Rental History", "bea572_d5d0e72343604fc7904d948c9357f88a~mv2.png"],
  ["Rental Collections", "bea572_3561f69e3fff4f62abb3c0b93d8ffa48~mv2.png"],
  ["Self-Employment Income", "bea572_67a98bee745f4cd390a307e9d482fcef~mv2.png"],
  ["Previous Denials", "bea572_36e952ce457546aebb359ff5e5ab611a~mv2.png"],
  ["Relocation Situations", "bea572_7ded28a5e42f4fd497232501392490bf~mv2.png"],
  ["Income Documentation", "bea572_7c4a191cbe444af5a29a57a2e295e23c~mv2.png"],
  ["Time-Sensitive Moves", "bea572_cd37c1a668504a45b0c7fb5107ee9798~mv2.png"],
].map(([label, image]) => ({
  label,
  image: `https://static.wixstatic.com/media/${image}`,
}));

function serviceCards(items = services) {
  return items
    .map(
      (service) => `
        <article class="service-card">
          <div class="service-card__top"><span class="service-card__number" aria-hidden="true">${service.icon}</span><span class="service-card__arrow" aria-hidden="true">↗</span></div>
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <p class="service-card__meta">${service.meta}</p>
          <a class="text-link" href="${service.path}">Learn More <span aria-hidden="true">→</span></a>
        </article>`,
    )
    .join("");
}

function readinessGuide() {
  return `
    <section class="section readiness-section">
      <div class="section-heading">
        <p class="eyebrow">A useful first step</p>
        <h2>Know where you stand before you apply.</h2>
        <p class="section-heading__note">Use this private checklist to organize your next steps. It does not score you, verify documents, determine eligibility, or predict a housing provider's decision.</p>
      </div>
      <div class="readiness-panel">
        <form id="readiness-guide">
          <fieldset class="readiness-fieldset">
            <legend>What are you working through?</legend>
            <div class="readiness-options">
              <label><input type="radio" name="readiness-topic" value="housing" required><span>Credit or rental-history challenges</span></label>
              <label><input type="radio" name="readiness-topic" value="income"><span>Income documentation</span></label>
              <label><input type="radio" name="readiness-topic" value="coapplicant"><span>Considering a co-applicant</span></label>
              <label><input type="radio" name="readiness-topic" value="time"><span>Looking for a faster housing option</span></label>
              <label><input type="radio" name="readiness-topic" value="auto"><span>Auto credit-building support</span></label>
              <label><input type="radio" name="readiness-topic" value="unsure"><span>I'm not sure yet</span></label>
            </div>
          </fieldset>
          <fieldset class="readiness-fieldset">
            <legend>Check off what you already know</legend>
            <div class="readiness-checklist">
              <label><input type="checkbox" name="readiness-check" value="area"><span>I have a target area and a rough move timeline.</span></label>
              <label><input type="checkbox" name="readiness-check" value="budget"><span>I know my target rent and the costs I need to ask about.</span></label>
              <label><input type="checkbox" name="readiness-check" value="documents"><span>I know where to obtain my accurate, original income records.</span></label>
              <label><input type="checkbox" name="readiness-check" value="history"><span>I can describe my rental history accurately.</span></label>
              <label><input type="checkbox" name="readiness-check" value="provider"><span>I understand the housing provider makes the final decision.</span></label>
            </div>
          </fieldset>
          <button class="button button--primary" type="submit">Show my next steps</button>
          <p class="readiness-privacy">Your selections stay in this browser and are not sent to RentAgain.</p>
        </form>
        <div id="readiness-results" class="readiness-results" role="status" aria-live="polite" hidden></div>
      </div>
    </section>`;
}

function renderRequestProgress(status) {
  const current = requestStatuses.find((item) => item.value === status);
  const rank = statusRank[status] ?? 0;
  const list = document.createElement("ol");
  list.className = "progress-list";
  list.setAttribute("aria-label", "Consultation progress");
  if (status === "closed") {
    const notice = document.createElement("li");
    notice.className = "progress-list__notice";
    notice.textContent = current.description;
    list.append(notice);
    return list;
  }
  const milestones = [
    { value: "new", label: "Request received", description: "Your consultation request is in the RentAgain queue.", rank: 0 },
    { value: "contacted", label: "Specialist contacted", description: "A RentAgain specialist has reached out about your request.", rank: 1 },
    { value: "reviewing", label: "Review and plan", description: "The team reviews your information and prepares next steps.", rank: 2 },
    { value: "plan_ready", label: "Plan delivered", description: "Your specialist has prepared the recommended next steps.", rank: 3 },
    { value: "application_prepared", label: "Application prepared", description: "Application preparation is marked complete by the RentAgain team.", rank: 4 },
    { value: "submitted_to_provider", label: "Provider review", description: "The housing provider reviews the application. Its decision is outside RentAgain's control.", rank: 5 },
    { value: "provider_approved", label: "Provider decision", description: current?.value === "provider_approved"
      ? "A provider decision was recorded. Confirm final terms directly with the housing provider."
      : current?.value === "provider_not_approved"
        ? "A provider decision was recorded. Contact your specialist to discuss options."
        : "A housing provider's decision has not yet been recorded.", rank: 6 },
  ];
  for (const item of milestones) {
    const row = document.createElement("li");
    row.className = "progress-list__item";
    if (item.rank < rank || item.value === status || (item.value === "reviewing" && ["needs_information", "plan_ready"].includes(status))) {
      row.classList.add("progress-list__item--complete");
    }
    if (
      item.value === status
      || (item.value === "reviewing" && status === "needs_information")
      || (item.value === "submitted_to_provider" && status === "waiting_on_provider")
      || (item.value === "provider_approved" && ["provider_approved", "provider_not_approved"].includes(status))
    ) {
      row.classList.add("progress-list__item--current");
      row.setAttribute("aria-current", "step");
    }
    const marker = document.createElement("span");
    marker.className = "progress-list__marker";
    marker.setAttribute("aria-hidden", "true");
    const copy = document.createElement("span");
    copy.className = "progress-list__copy";
    const title = document.createElement("strong");
    title.textContent = item.label;
    const description = document.createElement("span");
    description.textContent = item.description;
    copy.append(title, description);
    row.append(marker, copy);
    list.append(row);
  }
  if (!current || status === "needs_information" || status === "closed") {
    const fallback = document.createElement("p");
    fallback.className = "progress-list__notice";
    fallback.textContent = current?.description ?? "Your request is being handled by the RentAgain team.";
    list.append(fallback);
  }
  return list;
}

function faq(questions = homeFaqs, showAllLink = false) {
  return `
    <section id="faq" class="section section--compact" aria-labelledby="faq-title">
      <div class="section-heading">
        <p class="eyebrow">Clear Answers</p>
        <h2 id="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <p>Everything you need to know about Rent Again programs and the approval process.</p>
      </div>
      <div class="faq-list">
        ${questions
          .map(
            ({ question, answer }) => `
              <details class="faq-item">
                <summary>${question}<span aria-hidden="true"></span></summary>
                <p>${answer}</p>
              </details>`,
          )
          .join("")}
      </div>
      ${showAllLink ? '<div class="button-row button-row--center"><a class="button button--outline" href="/#faq">View All FAQs ➜</a></div>' : ""}
    </section>`;
}

function homePage() {
  return `
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow"><span class="eyebrow__dot"></span>A BETTER PATH FORWARD</p>
        <h1>Get Back Into Housing -<br>Even If You've Been Denied Before.</h1>
        <p class="home-hero__lead">We help renters overcome common approval challenges with personalized solutions designed to improve your approval odds and get you moving forward.</p>
        <div class="button-row">
          <a class="button button--primary" href="/book-online/">Get Started ➜</a>
          <a class="button button--text" href="#how-it-works">See How It Works</a>
        </div>
        <div class="trust-row"><span>Nationwide Assistance</span><span class="trust-row__divider" aria-hidden="true"></span><span>Thousands Helped</span><span class="trust-row__divider" aria-hidden="true"></span><span>Flexible Solutions</span><span class="trust-row__divider" aria-hidden="true"></span><span>Fast Turnaround</span></div>
      </div>
      <div class="home-hero__visual" aria-hidden="true">
        <div class="orbit orbit--one"></div><div class="orbit orbit--two"></div>
        <div class="hero-note"><span class="hero-note__icon">↗</span><strong>R</strong><span class="hero-note__line"></span></div>
        <div class="hero-sticker"><span>✳</span></div>
        <span class="hero-spark hero-spark--one" aria-hidden="true">✳</span><span class="hero-spark hero-spark--two" aria-hidden="true">✳</span>
      </div>
    </section>

    <section class="intro-strip intro-strip--statement">
      <div><p class="eyebrow">WE BELIEVE EVERYONE DESERVES A SECOND CHANCE</p><h2>A Rental Denial Doesn't Have To Be The End Of The Story.</h2></div>
      <div><p>Many renters struggle with credit issues, rental history challenges, income concerns, collections, or previous denials.</p><p>At Rent Again, we focus on helping clients understand their options and create a path forward toward securing housing.</p></div>
    </section>

    <section class="section section--tint">
      <div class="section-heading"><h2>SUCCESS STORIES</h2></div>
      <div class="story-grid" role="list" aria-label="Rent Again success stories">${successStories.map((image) => `
        <article class="story-card" role="listitem"><img src="${image}" alt="Rent Again success story photo" loading="lazy"></article>`).join("")}</div>
    </section>

    <section id="how-it-works" class="section">
      <div class="section-heading"><p class="eyebrow">Clear Roadmap</p><h2>HOW IT WORKS</h2><p>Getting started shouldn't be a guessing game. Our three-step framework turns obstacles into clear next steps.</p></div>
      <div class="steps-grid">
        <article class="step-card"><span>01</span><h3>Tell Us About Your Situation</h3><p>Complete a short questionnaire so we can better understand your housing goals and approval challenges.</p><a class="text-link" href="/book-online/">Get Started ➜</a></article>
        <article class="step-card"><span>02</span><h3>Receive Your Personalized Strategy</h3><p>We'll review your information and identify the most effective path forward based on your circumstances.</p><a class="text-link" href="/book-consultation/">Book a Consultation</a></article>
        <article class="step-card"><span>03</span><h3>Move Forward With Confidence</h3><p>Our team guides you through the next steps designed to improve your housing opportunities.</p><a class="text-link" href="/book-consultation/">Book a Consultation</a></article>
      </div>
    </section>

    <section id="services" class="section section--tint">
      <div class="section-heading section-heading--row">
        <div><h2>OUR SERVICES</h2></div>
        <p class="section-heading__note">Start with the challenge you’re facing. Each program has its own details, costs, and process.</p>
      </div>
      <div class="service-grid">${serviceCards()}</div>
    </section>

    ${readinessGuide()}

    <section class="feature-strip">
      <article><h3>EXPERIENCE</h3><p>We've worked with thousands of renters facing unique housing situations.</p></article>
      <article><h3>PERSONALIZED SOLUTIONS</h3><p>No two renters are the same. Every strategy is tailored to your circumstances.</p></article>
      <article><h3>SUPPORT</h3><p>Our team remains available throughout the process.</p></article>
    </section>

    <section class="challenge-section">
      <div class="challenge-section__intro"><h2>COMMON CHALLENGES WE HELP WITH</h2></div>
      <div class="challenge-list">${challengeItems.map(({ label, image }) => `<article><img src="${image}" alt="" loading="lazy"><h3>${label}</h3></article>`).join("")}</div>
    </section>
    ${faq(homeFaqs)}
    <section class="cta-band">
      <div><h2>Your Next Home Could Be Closer Than You Think.</h2><p>Stop guessing and start moving forward with a clear housing strategy.</p></div>
      <div class="button-row"><a class="button button--light" href="/book-online/">Start My Housing Plan ➜</a><a class="button button--light" href="tel:${site.phoneHref}">Speak With A Specialist ➜</a></div>
    </section>`;
}

function housingPage() {
  return `
    <section class="page-hero">
      <div class="page-hero__copy">
        <div class="fact-grid"><div><strong>2 Options</strong><span>30–45 or 7–14 day estimates</span></div><div><strong>Nationwide</strong><span>Service</span></div><div><strong>Personalized</strong><span>Strategy</span></div><div><strong>Apartment &amp;</strong><span>Housing Focused</span></div></div>
        <p class="eyebrow">HOUSING APPROVAL PROGRAM</p>
        <h1>Build A Stronger Rental Profile. Increase Your Approval Odds.</h1>
        <p class="page-hero__lead">Our Housing Approval Program helps renters strengthen their approval position through credit-building integrations, rental profile enhancement, application strategy, and personalized support.</p>
        <div class="button-row"><a class="button button--primary" href="/book-consultation/">Book My Consultation</a><a class="button button--outline" href="#housing-how-it-works">See How It Works</a></div>
      </div>
      <div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Better Profile.</span><strong>Better Opportunities.</strong><span class="hero-note__line"></span><span class="hero-note__small">Stronger Credit Profile<br>Positive Rental History<br>Better Approval Odds<br>Nationwide Support</span></div></div>
    </section>
    <section class="section section--tint">
      <div class="section-heading"><p class="eyebrow">CHOOSE THE PROGRAM THAT FITS YOUR TIMELINE</p><h2>CHOOSE THE PROGRAM THAT FITS YOUR TIMELINE</h2></div>
      <div class="package-grid">
        <article class="package-card"><p class="eyebrow">STANDARD HOUSING PACKAGE</p><h3>$950</h3><p class="package-card__term">30-45 Days</p><p>Our most popular option for renters with flexible timelines who want to strengthen their profile the smart way.</p><ul><li>Credit Profile Support</li><li>Rental History Documentation</li><li>Application Assistance &amp; Strategy</li><li>1 Quality Tradeline</li><li>Dedicated Support</li></ul><a class="button button--primary" href="/book-consultation/">Book My Consultation</a></article>
        <article class="package-card package-card--featured"><p class="eyebrow">EXPEDITED HOUSING PACKAGE</p><p class="package-card__term">FASTEST OPTION</p><h3>$1,400</h3><p class="package-card__term">7 - 14 Days</p><p>Our faster option for renters who need results quickly and want priority support.</p><ul><li>Credit Profile Support</li><li>Rental History Documentation</li><li>Application Assistance &amp; Strategy</li><li>2 Quality Tradelines</li><li>Priority Processing</li><li>Dedicated Support</li></ul><a class="button button--light" href="/book-consultation/">Book My Consultation</a></article>
      </div>
      <p class="fine-print">Processing times are estimates, not guarantees. Program scope and eligibility are reviewed during consultation. Housing providers make final application decisions.</p>
    </section>
    <section class="section"><div class="section-heading"><p class="eyebrow">WE HELP RENTERS FACING REAL APPROVAL CHALLENGES</p><h2>WE HELP RENTERS FACING REAL APPROVAL CHALLENGES</h2></div><div class="tag-grid"><span>Low or Bad Credit</span><span>Previous Apartment Denials</span><span>Previous Evictions</span><span>Rental Collections</span><span>Broken Lease History</span></div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">WHAT'S INCLUDED</p><h2>WHAT'S INCLUDED</h2></div><div class="feature-grid feature-grid--six">
      <article class="feature-card"><h3>Dedicated Support</h3><p>You'll have a dedicated team here to support you every step of the way.</p></article>
      <article class="feature-card"><h3>Nationwide Service</h3><p>Our program is available in all 50 states for apartments and homes.</p></article>
      <article class="feature-card"><h3>Approval Strategy</h3><p>We create a personalized strategy tailored to your unique situation.</p></article>
      <article class="feature-card"><h3>Application Assistance</h3><p>We guide you through the application process for the best possible outcome.</p></article>
      <article class="feature-card"><h3>Rental History Documentation</h3><p>We provide documented rental history to show Landlords you're reliable.</p></article>
      <article class="feature-card"><h3>Credit Profile Support</h3><p>We help strengthen your credit profile to improve approval potential.</p></article>
    </div></section>
    <section id="housing-how-it-works" class="section"><div class="section-heading"><p class="eyebrow">HOW IT WORKS</p><h2>HOW IT WORKS</h2></div><div class="steps-grid">
      <article class="step-card"><span>01</span><h3>Consultation</h3><p>We review your situation, goals, and approval challenges.</p></article>
      <article class="step-card"><span>02</span><h3>Strategy Development</h3><p>We create a personalized plan to strengthen your profile.</p></article>
      <article class="step-card"><span>03</span><h3>Profile Enhancement</h3><p>We build and enhance your credit and rental profile.</p></article>
      <article class="step-card"><span>04</span><h3>Application Preparation</h3><p>We prepare your application for the best possible results.</p></article>
      <article class="step-card"><span>05</span><h3>Move Forward</h3><p>Use your plan to prepare an application and move forward with clarity. The housing provider makes the final decision.</p></article>
    </div></section>
    ${faq(housingFaqs, true)}
    <section class="cta-band"><div><h2>Ready to strengthen your profile?</h2><p>Let's create a plan for your next housing application.</p></div><div><a class="button button--light" href="/book-consultation/">Book My Consultation</a><p>Get clear on your path forward.</p><p>Have Questions? We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
}

function coApplicantPage() {
  return `
    <section class="page-hero"><div class="page-hero__copy">
      <div class="fact-grid"><div><strong>48-72 Hours</strong><span>Typical Processing</span></div><div><strong>700+ Credit Score</strong><span>Qualified Co-Applicant</span></div><div><strong>+$10,000 Income</strong><span>Added To Your Application</span></div><div><strong>Nationwide</strong><span>Service Available</span></div></div>
      <p class="eyebrow">CO-APPLICANT PROGRAM</p><h1>Stronger Application. Better Approval Odds.</h1>
      <p class="page-hero__lead">Our Co-Applicant Program adds a qualified co-applicant to your rental application to increase your income qualifications and strengthen your overall approval chances.</p>
      <div class="button-row"><a class="button button--primary" href="/book-consultation/">Book My Consultation</a><a class="button button--outline" href="#cosigner-how-it-works">See How It Works</a></div>
    </div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Two Names.</span><strong>Stronger Results.</strong><span class="hero-note__line"></span><span class="hero-note__small">Qualified Co-Applicant (700+ Credit)<br>+$10,000 Monthly Income Added<br>Application Completed For You<br>Higher Approval Potential</span><p>PROGRAM FEE<br><strong>$800</strong></p></div></div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">HOW THE CO-APPLICANT PROGRAM HELPS YOU</p><h2>HOW THE CO-APPLICANT PROGRAM HELPS YOU</h2></div><div class="feature-grid">
      <article class="feature-card"><h3>Stronger Application</h3><p>A qualified co-applicant with 700+ credit strengthens your overall application profile.</p></article>
      <article class="feature-card"><h3>More Income</h3><p>We add $10,000 in monthly income to help you meet rental requirements.</p></article>
      <article class="feature-card"><h3>Better Approval Odds</h3><p>Improve your chances of approval for the apartment you want.</p></article>
      <article class="feature-card"><h3>Application Completed</h3><p>Our team completes the co-applicant portion of the application for you.</p></article>
    </div></section>
    <section id="cosigner-how-it-works" class="section"><div class="section-heading"><p class="eyebrow">HOW IT WORKS</p><h2>HOW IT WORKS</h2></div><div class="steps-grid">
      <article class="step-card"><span>01</span><h3>Consultation</h3><p>We review your situation and confirm you're a good fit for the program.</p></article>
      <article class="step-card"><span>02</span><h3>We Assign a Co-Applicant</h3><p>We pair you with a qualified co-applicant (700+ credit) with strong income.</p></article>
      <article class="step-card"><span>03</span><h3>Application Preparation</h3><p>Our team completes the co-applicant portion of your rental application.</p></article>
      <article class="step-card"><span>04</span><h3>Application Submitted</h3><p>We submit your completed application to the property on your behalf.</p></article>
      <article class="step-card"><span>05</span><h3>Provider decision</h3><p>The housing provider makes the final decision. Your specialist can help explain the next steps.</p></article>
    </div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">THIS PROGRAM IS FOR YOU IF:</p><h2>THIS PROGRAM IS FOR YOU IF:</h2></div><div class="tag-grid"><span>You don't meet the income requirement alone</span><span>You need a higher credit score on your application</span><span>You've been denied in the past</span><span>You want to increase your approval chances</span><span>You're ready to move into your next home</span></div><div class="fact-grid fact-grid--wide"><div><strong>$800</strong><span>PROGRAM FEE</span></div><div><strong>48-72 Hours</strong><span>PROCESSING TIME (Volume Dependent)</span></div><div><strong>700+ Credit Score</strong><span>CO-APPLICANT REQUIREMENT</span></div><div><strong>+$10,000 Monthly Income</strong><span>INCOME ADDED</span></div><div><strong>Nationwide - All 50 States</strong><span>SERVICE AREA</span></div></div></section>
    ${faq(coApplicantFaqs, true)}
    <section class="cta-band"><div><h2>Stronger Application. Better Approval Odds.</h2><p>Take the next step toward getting approved.</p></div><div><a class="button button--light" href="/book-consultation/">Book My Consultation</a><p>Let's find the best solution for you.</p><p>Have Questions? We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
}

function verifiedIncomePage() {
  return `
    <section class="page-hero"><div class="page-hero__copy">
      <div class="fact-grid"><div><strong>Fast Turnaround</strong><span>48-72 Hours</span></div><div><strong>ADP Powered</strong><span>Trusted Software</span></div><div><strong>Landlord Ready</strong><span>Proper Documentation</span></div><div><strong>Nationwide</strong><span>Virtual Service</span></div></div>
      <p class="eyebrow">INCOME VERIFICATION SERVICE</p><h1>Verify Your Income. Strengthen Your Approval.</h1>
      <p class="page-hero__lead">Our Income Verification Service helps you organize accurate income documentation for a clearer rental application. Housing providers set their own requirements and make their own decisions.</p>
      <div class="button-row"><a class="button button--primary" href="/book-consultation/">Book My Consultation</a><a class="button button--outline" href="#income-packages">See Packages</a></div>
    </div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">We use ADP</span><strong>The #1 payroll platform</strong><span class="hero-note__line"></span><span class="hero-note__small">Trusted by millions of businesses nationwide.</span></div></div></section>
    <section id="income-packages" class="section section--tint">
      <div class="section-heading"><p class="eyebrow">CHOOSE THE INCOME VERIFICATION PACKAGE THAT FITS YOUR NEEDS</p><h2>CHOOSE THE INCOME VERIFICATION PACKAGE THAT FITS YOUR NEEDS</h2></div>
      <div class="package-grid">
        <article class="package-card"><p class="eyebrow">STANDARD</p><h3>Income Verification Package</h3><h4>$450</h4><p class="package-card__term">48-72 Hours Turnaround</p><p>Essential documentation to meet basic rental income requirements.</p><ul><li>Income Requirement Review (2.5x-3x Rent)</li><li>Paystubs (4 Weeks)</li><li>Bank Statements (1-2 Months)</li><li>Income Summary Report</li><li>Landlord-Ready Documentation</li></ul><a class="button button--primary" href="/book-consultation/">Choose Standard ➜</a></article>
        <article class="package-card package-card--featured"><p class="eyebrow">MOST POPULAR</p><h3>PREMIUM</h3><h4>Income Verification Package</h4><h4>$650</h4><p class="package-card__term">48-72 Hours Turnaround</p><p>Complete income verification with advanced documentation and analysis.</p><ul><li>Everything in Standard Package</li><li>ADP Payroll Setup &amp; Income Structuring</li><li>Business Overview (If Applicable)</li><li>Detailed Income Analysis Report</li><li>Custom Income Plan &amp; Recommendations</li><li>Priority Processing</li></ul><a class="button button--light" href="/book-consultation/">Choose Premium ➜</a></article>
      </div>
    </section>
    <section class="section"><div class="section-heading"><p class="eyebrow">Powered by ADP.</p><h2>Powered by ADP. Trusted by Millions.</h2><p>We partner with ADP, the #1 payroll software in the world, to provide accurate, professional, and landlord-ready income verification.</p></div><div class="feature-grid"><article class="feature-card"><h3>Secure</h3><p>Bank-level security to protect your data</p></article><article class="feature-card"><h3>Accurate</h3><p>Real-time payroll and income data</p></article><article class="feature-card"><h3>Reliable</h3><p>Trusted by 1M+ businesses</p></article><article class="feature-card"><h3>Professional</h3><p>Landlord-ready documentation</p></article></div></section>
    <section id="income-how-it-works" class="section section--tint"><div class="section-heading"><p class="eyebrow">HOW OUR INCOME VERIFICATION PROCESS WORKS</p><h2>HOW OUR INCOME VERIFICATION PROCESS WORKS</h2></div><div class="steps-grid">
      <article class="step-card"><span>01</span><h3>Consultation</h3><p>We review your situation and income goals.</p></article>
      <article class="step-card"><span>02</span><h3>Information Submission</h3><p>You provide income details and required information.</p></article>
      <article class="step-card"><span>03</span><h3>ADP Setup &amp; Processing</h3><p>We process your payroll and structure your income.</p></article>
      <article class="step-card"><span>04</span><h3>Verification &amp; Documentation</h3><p>We create professional, landlord-ready documents.</p></article>
      <article class="step-card"><span>05</span><h3>Prepare for your application</h3><p>Use your accurate documentation when applying. The housing provider makes the final decision.</p></article>
    </div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">THIS SERVICE IS PERFECT FOR YOU IF:</p><h2>THIS SERVICE IS PERFECT FOR YOU IF:</h2></div><div class="tag-grid"><span>You are self-employed or a sole proprietor</span><span>You have inconsistent or variable income</span><span>You get paid in cash or non-traditional ways</span><span>You need help meeting rental income requirements</span><span>You've been denied due to income proof</span><span>You want to increase your approval chances</span></div><div class="fact-grid fact-grid--wide"><div><strong>48-72 Hours</strong><span>TURNAROUND TIME</span></div><div><strong>Virtual - Nationwide</strong><span>SERVICE TYPE</span></div><div><strong>One-time payment</strong><span>PAYMENT</span></div><div><strong>Secure email delivery</strong><span>DOCUMENT DELIVERY</span></div><div><strong>1 Round of revisions included</strong><span>REVISIONS</span></div><div><strong>We're here every step</strong><span>SUPPORT</span></div></div></section>
    ${faq(incomeFaqs, true)}
    <section class="cta-band"><div><h2>Verified Income. Stronger Approval. Better Results.</h2><p>Let us help you verify your income the right way.</p></div><div><a class="button button--light" href="/book-consultation/">Book My Consultation</a><p>Let's build your income verification plan.</p><p>Have Questions? We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
}

function instantApprovalPage() {
  return `
    <section class="page-hero"><div class="page-hero__copy">
      <div class="fact-grid"><div><strong>Fastest Path</strong><span>Move in as soon as 7-14 days</span></div><div><strong>Nationwide</strong><span>Service available in all 50 states</span></div><div><strong>Private &amp; Discreet</strong><span>Your information is always protected</span></div><div><strong>Dedicated Support</strong><span>Your team is with you every step</span></div></div>
      <p class="eyebrow">OUR PREMIUM SERVICE</p><h1>INSTANT APPROVAL SERVICE</h1>
      <h2>Move Into Your Next Home Without Traditional Approval Barriers.</h2>
      <p class="page-hero__lead">We secure qualifying housing opportunities through our premium Instant Approval Service, helping eligible clients move forward faster.</p>
      <div class="button-row"><a class="button button--primary" href="/book-consultation/">Book My Consultation</a><a class="button button--outline" href="#instant-pricing">See Pricing</a></div>
    </div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">PREMIUM HOUSING SOLUTIONS</span><strong>We Open Doors. You Walk Through.</strong><span class="hero-note__line"></span><span class="hero-note__small">We meet the requirements.<br>You get the keys.<br>You move forward.</span></div></div></section>
    <section id="instant-pricing" class="section section--tint"><div class="section-heading"><p class="eyebrow">Service Fees</p><h2>Service Fees</h2></div><div class="price-grid"><article class="price-tile"><span>Apartments</span><strong>$2,500</strong><p>Upfront Pricing</p><p>No Hidden Fees</p></article><article class="price-tile"><span>Houses</span><strong>$2,800</strong><p>Upfront Pricing</p><p>No Hidden Fees</p></article></div></section>
    <section id="instant-how-it-works" class="section"><div class="section-heading"><p class="eyebrow">HOW IT WORKS</p><h2>HOW IT WORKS</h2></div><div class="steps-grid">
      <article class="step-card"><span>01</span><h3>Consultation</h3><p>We review your situation in a private consultation to determine eligibility.</p></article>
      <article class="step-card"><span>02</span><h3>Property Selection</h3><p>Choose from our network of qualifying properties that fit your needs.</p></article>
      <article class="step-card"><span>03</span><h3>Approval coordination</h3><p>Our team coordinates the qualifying housing opportunity and its provider requirements.</p></article>
      <article class="step-card"><span>04</span><h3>Lease Completion</h3><p>All lease documents are finalized and ready for your signature.</p></article>
      <article class="step-card"><span>05</span><h3>Complete move-in steps</h3><p>After provider approval and lease completion, coordinate move-in directly with the housing provider.</p></article>
    </div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">IS INSTANT APPROVAL RIGHT FOR YOU?</p><h2>IS INSTANT APPROVAL RIGHT FOR YOU?</h2></div><div class="feature-grid">
      <article class="feature-card"><h3>Previously Denied</h3><p>You've been declined by apartments in the past and need a different approach.</p></article>
      <article class="feature-card"><h3>Need Housing Quickly</h3><p>You're on a tight timeline and need to secure housing as soon as possible.</p></article>
      <article class="feature-card"><h3>Credit Challenges</h3><p>Traditional approval requirements have become an obstacle for you.</p></article>
      <article class="feature-card"><h3>Relocating</h3><p>You're moving to a new city or state and need housing without delays.</p></article>
    </div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">WHY CLIENTS CHOOSE INSTANT APPROVAL</p><h2>WHY CLIENTS CHOOSE INSTANT APPROVAL</h2></div><div class="feature-grid">
      <article class="feature-card"><h3>Faster Path</h3><p>Move in as soon as 7-14 days in many eligible cases.</p></article>
      <article class="feature-card"><h3>Housing Focused</h3><p>We meet the property requirements so you don't have to.</p></article>
      <article class="feature-card"><h3>Private Process</h3><p>Discreet, confidential, and handled with professional care.</p></article>
      <article class="feature-card"><h3>Nationwide Support</h3><p>We work with clients across all 50 states in the U.S.</p></article>
    </div></section>
    ${faq(instantFaqs, true)}
    <section class="cta-band"><div><h2>Your Next Home Is Closer Than You Think.</h2><p>Book your private consultation today and let our team create your fastest path to move-in.</p></div><div><a class="button button--light" href="/book-consultation/">Book a Consultation</a><p>Speak with a housing specialist and see if you qualify.</p><p>Have Questions? Call us directly. We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
}

function autoApprovalPage() {
  return `
    <section class="page-hero">
      <div class="page-hero__copy">
        <p class="eyebrow">30-day credit-building service</p>
        <h1>A clearer path toward your auto goals.</h1>
        <p class="page-hero__lead">The Auto Approval Program is a 30-day credit-building service. Talk with the RentAgain team to understand the program, current costs, and whether it fits your situation.</p>
        <div class="button-row"><a class="button button--primary" href="/book-online/">Book an auto consultation</a><a class="button button--outline" href="tel:${site.phoneHref}">Call ${site.phone}</a></div>
      </div>
      <div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Auto Approval Program</span><strong>Understand your next steps.</strong><span class="hero-note__line"></span><span class="hero-note__small">30-day credit-building service<br>Personal consultation<br>Program details before you decide</span></div></div>
    </section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">What to expect</p><h2>Get the details before you get started.</h2><p class="section-heading__note">A specialist can explain the program scope, costs, and process during your consultation. Ask questions and decide whether the service is right for you.</p></div><div class="steps-grid">
      <article class="step-card"><span>01</span><h3>Talk with the team</h3><p>Share your goals and ask about the current Auto Approval Program.</p></article>
      <article class="step-card"><span>02</span><h3>Review the program</h3><p>Confirm the steps, costs, timing, and what the service does and does not include.</p></article>
      <article class="step-card"><span>03</span><h3>Choose your next step</h3><p>Credit-building support does not guarantee a lender's approval or financing terms.</p></article>
    </div></section>
    <section class="cta-band"><div><h2>Want to learn whether it fits?</h2><p>Ask a specialist about the 30-day Auto Approval Program.</p></div><div><a class="button button--light" href="/book-online/">Book a consultation</a><p>The lender makes the final financing decision.</p></div></section>`;
}

function consultationPage() {
  return `
    <section class="page-hero"><div class="page-hero__copy">
      <p class="eyebrow">BOOK A FREE CONSULTATION</p><h1>Let's Find The Right Solution For You.</h1>
      <p class="page-hero__lead">Every situation is different. During your free consultation, we'll review your goals, identify your biggest challenges, and recommend the best program to get you approved.</p>
      <div class="feature-grid"><article class="feature-card"><h3>100% FREE</h3><p>No hidden fees. No obligations.</p></article><article class="feature-card"><h3>PRIVATE &amp; SECURE</h3><p>Your information is safe with us.</p></article><article class="feature-card"><h3>EXPERT GUIDANCE</h3><p>Get real answers from real specialists.</p></article></div>
      <div class="button-row"><a class="button button--primary" href="/book-online/">Book a Consultation</a></div>
    </div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">FREE CONSULTATION</span><strong>Let's Find The Right Solution For You.</strong><span class="hero-note__line"></span><a class="text-link" href="/book-online/">Book a Consultation</a></div></div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">WHAT WE'LL DISCUSS</p><h2>WHAT WE'LL DISCUSS</h2></div><div class="feature-grid feature-grid--four">
      <article class="feature-card"><h3>Your Goals</h3><p>What are you looking to achieve?</p></article>
      <article class="feature-card"><h3>Your Situation</h3><p>We'll review your credit, income, and rental history.</p></article>
      <article class="feature-card"><h3>Your Options</h3><p>We'll recommend the best program for you.</p></article>
      <article class="feature-card"><h3>Your Next Steps</h3><p>You'll leave with a clear plan.</p></article>
    </div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">WHY TALK TO US?</p><h2>WHY TALK TO US?</h2></div><div class="feature-grid feature-grid--four">
      <article class="feature-card"><p>We specialize in getting real people approved.</p></article>
      <article class="feature-card"><p>We've helped thousands of renters across the country.</p></article>
      <article class="feature-card"><p>We create custom strategies for your unique situation.</p></article>
      <article class="feature-card"><p>We're here to make the process simple and stress-free.</p></article>
    </div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">WHAT TO EXPECT</p><h2>WHAT TO EXPECT</h2></div><div class="feature-grid feature-grid--four">
      <article class="feature-card"><h3>1 ON 1 CONVERSATION</h3><p>We'll listen to your situation and answer all your questions.</p></article>
      <article class="feature-card"><h3>EXPERT EVALUATION</h3><p>We'll evaluate your profile and identify opportunities.</p></article>
      <article class="feature-card"><h3>CUSTOM RECOMMENDATION</h3><p>We'll recommend the program that gives you the best results.</p></article>
      <article class="feature-card"><h3>CLEAR ROADMAP</h3><p>You'll get a step-by-step plan to reach your goal.</p></article>
    </div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">TRUSTED BY RENTERS ACROSS THE COUNTRY</p><h2>TRUSTED BY RENTERS ACROSS THE COUNTRY</h2></div><div class="fact-grid"><div><strong>4.9/5</strong><span>Average Rating</span></div><div><strong>10,000+</strong><span>Happy Clients</span></div><div><strong>100%</strong><span>Satisfaction Focused</span></div></div></section>
    <section class="cta-band"><div><h2>Ready to take the next step? We're here to help.</h2><p>Book your free consultation now and get one step closer to your new home.</p></div><div><a class="button button--light" href="/book-online/">Book My Free Consultation</a><p>No fees. No obligations. Just real help.</p></div></section>`;
}

function bookingPage() {
  const housingUrl = `${site.bookingRoot}/booking-calendar/housing-approval-consultation`;
  const carUrl = `${site.bookingRoot}/booking-calendar/car-approval-consultation`;
  return `
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">Direct Calendar</p><h1>BOOK A CONSULTATION</h1><p class="page-hero__lead">Speak with an expert to review your rental approval options and find the service that fits your needs.</p></div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Select a Date &amp; Time</span><strong>Choose a consultation</strong><span class="hero-note__line"></span><span class="hero-note__small">Choose a service below to open its live calendar.</span></div></div></section>
    <section class="section section--tint"><div class="booking-breadcrumb"><a href="/">Home</a><span>Services</span><span>Service Information</span></div><div class="section-heading"><p class="eyebrow">Select a Date &amp; Time</p><h2>Select a Date &amp; Time</h2></div><div class="booking-grid">
      <article class="booking-card"><span class="booking-card__icon" aria-hidden="true">⌂</span><h3>Housing Approval Consultation</h3><div class="booking-card__meta"><span>15 min</span></div><a class="button button--primary" href="${housingUrl}" target="_blank" rel="noopener noreferrer">Book Now</a></article>
      <article class="booking-card"><span class="booking-card__icon booking-card__icon--gold" aria-hidden="true">✳</span><h3>Auto Approval Consultation</h3><div class="booking-card__meta"><span>15 min</span></div><a class="button button--primary" href="${carUrl}" target="_blank" rel="noopener noreferrer">Book Now</a></article>
    </div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">Need help choosing?</p><h2>Request a consultation</h2><p>This sends a request to Rent Again; it does not reserve a calendar time. Use one of the live calendars above to book a confirmed appointment.</p></div>${consultationRequestForm()}</section>`;
}

function consultationRequestForm() {
  return `
    <form class="intake-form" id="consultation-request" method="post" action="/book-online/" novalidate>
      <div class="intake-form__grid">
        <label>Full name<input name="full_name" autocomplete="name" maxlength="120" required></label>
        <label>Email address<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
        <label>Phone number<input name="phone" type="tel" autocomplete="tel" maxlength="40" required></label>
        <label>Service you are interested in<select name="service" required>
          <option value="">Select a service</option>
          <option value="housing">Housing Approval Program</option>
          <option value="co_applicant">Co-Applicant Program</option>
          <option value="income_verification">Verified Income Program</option>
          <option value="instant_approval">Instant Approval Service</option>
          <option value="auto_approval">Auto Approval Program</option>
          <option value="not_sure">Not sure yet</option>
        </select></label>
        <label>Property type<select name="property_type" required>
          <option value="">Select a property type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="townhouse">Townhouse / condo</option>
          <option value="other">Other / not sure</option>
        </select></label>
        <label>Target city<input name="target_city" maxlength="100" autocomplete="address-level2" required></label>
        <label>Target state<select name="target_state" autocomplete="address-level1" required>
          <option value="">Select a state</option>
          <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
        </select></label>
        <label>When are you hoping to move?<select name="move_timeline" required>
          <option value="">Select a timeline</option>
          <option value="asap">As soon as possible</option>
          <option value="within_30_days">Within 30 days</option>
          <option value="within_60_days">Within 60 days</option>
          <option value="more_than_60_days">More than 60 days</option>
          <option value="not_sure">Not sure yet</option>
        </select></label>
      </div>
      <label class="intake-form__consent"><input name="consent" type="checkbox" required><span>I agree that Rent Again may contact me about this request. I understand this is a consultation request, not a confirmed booking.</span></label>
      <label class="intake-form__trap" aria-hidden="true">Leave this field empty<input name="company_website" tabindex="-1" autocomplete="off"></label>
      <p class="intake-form__notice">Please do not submit Social Security numbers, bank or payroll records, credit reports, or other sensitive documents through this form. A consultation request is not an approval or guarantee. <a href="/privacy/">Read the privacy notice.</a></p>
      <div id="turnstile-widget" aria-label="Spam protection"></div>
      <button class="button button--primary" type="submit" disabled>Send consultation request</button>
      <p class="intake-form__status" id="consultation-request-status" role="status" aria-live="polite"></p>
      <p class="intake-form__account-note">Sign in before submitting if you want to view this request and generate a self-reported intake summary from your account.</p>
    </form>`;
}

function accountPage() {
  return `
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">Client account</p><h1>YOUR RENT AGAIN ACCOUNT</h1><p class="page-hero__lead">Sign in with a secure email link to see consultation requests you submitted while signed in and create a factual intake summary.</p></div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Private access</span><strong>Your information, for you.</strong><span class="hero-note__line"></span><span class="hero-note__small">Only consultation requests linked to your signed-in account appear here.</span></div></div></section>
    <section class="section"><div class="account-panel">
      <p id="account-config-status" class="intake-form__status" role="status" aria-live="polite"></p>
      <form class="intake-form" id="account-login" method="post" action="/account/">
        <label>Email address<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
        <button class="button button--primary" type="submit" disabled>Email me a sign-in link</button>
        <p id="account-login-status" class="intake-form__status" role="status" aria-live="polite"></p>
      </form>
      <section id="account-session" hidden aria-labelledby="account-session-title">
        <h2 id="account-session-title">Your requests</h2>
        <p id="account-user-email"></p>
        <button class="button button--outline" id="account-sign-out" type="button">Sign out</button>
        <p id="account-requests-status" class="intake-form__status" role="status" aria-live="polite"></p>
        <div id="account-requests"></div>
        <div class="account-delete">
          <h3>Delete your account and signed-in requests</h3>
          <p>This permanently deletes your account, requests linked to it, and generated summaries. Guest requests submitted while signed out are not included.</p>
          <button class="button button--outline" id="account-delete" type="button">Delete account and data</button>
          <p id="account-delete-status" class="intake-form__status" role="status" aria-live="polite"></p>
        </div>
      </section>
    </div></section>`;
}

function staffPage() {
  return `
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">Authorized staff</p><h1>STAFF CONSOLE</h1><p class="page-hero__lead">Sign in with an authorized staff account to review consultation requests and keep clients informed about progress.</p></div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Restricted access</span><strong>For the Rent Again team.</strong><span class="hero-note__line"></span><span class="hero-note__small">Only accounts provisioned by a project administrator can access request details.</span></div></div></section>
    <section class="section"><div class="account-panel">
      <p id="staff-config-status" class="intake-form__status" role="status" aria-live="polite"></p>
      <form class="intake-form" id="staff-login" method="post" action="/staff/">
        <label>Staff email address<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
        <button class="button button--primary" type="submit" disabled>Email me a sign-in link</button>
        <p id="staff-login-status" class="intake-form__status" role="status" aria-live="polite"></p>
      </form>
      <section id="staff-session" hidden aria-labelledby="staff-session-title">
        <h2 id="staff-session-title">Consultation requests</h2>
        <p id="staff-user-email"></p>
        <div class="button-row"><button class="button button--outline" id="staff-refresh" type="button">Refresh requests</button><button class="button button--outline" id="staff-sign-out" type="button">Sign out</button></div>
        <p id="staff-requests-status" class="intake-form__status" role="status" aria-live="polite"></p>
        <div id="staff-requests"></div>
      </section>
    </div></section>`;
}

function privacyPage() {
  return `
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">Privacy</p><h1>PRIVACY NOTICE</h1><p class="page-hero__lead">This notice explains what the Rent Again redesign collects when you submit a consultation request or use a client account.</p></div></section>
    <section class="section"><div class="privacy-content">
      <h2>Information you submit</h2>
      <p>The consultation form collects your name, email address, phone number, service of interest, property type, target city and state, move timeline, and consent to be contacted. Please do not submit Social Security numbers, credit reports, bank statements, payroll records, or other sensitive documents through the form.</p>
      <h2>How information is used and stored</h2>
      <p>Once the online request feature is enabled, consultation details will be stored in a dedicated Rent Again Supabase project so the team can respond. Requests submitted while signed in are associated with that account and can be viewed in the client account. Requests submitted while signed out are not linked to an account.</p>
      <p>Authorized Rent Again staff provisioned in the project can review consultation requests and update their progress through the staff console. Progress reflects updates entered by RentAgain; housing providers make all final application decisions.</p>
      <p>The self-guided readiness checklist runs in your browser. Its selections are not transmitted to RentAgain or saved.</p>
      <p>Client intake summaries are generated only from a request linked to the signed-in account. The PDF is stored in a private Supabase Storage bucket and its download link expires after five minutes. It repeats information submitted by the client; it is not independent verification or proof of income, identity, rental history, landlord approval, or eligibility.</p>
      <h2>Retention and your choices</h2>
      <p>When the backend is enabled, requests and documents remain stored until deleted; this build does not automatically delete records. Signed-in clients can delete their account and linked requests from the account page. Guest requests are not linked to an account; contact <a href="mailto:${site.email}">${site.email}</a> to ask about access, correction, or deletion of a guest request.</p>
      <h2>External services</h2>
      <p>Sign-in and request processing use Supabase. Cloudflare Turnstile is used for spam protection. The Supabase JavaScript client and Google Fonts are loaded from their respective providers. Appointment calendars open on the existing Rent Again website. This site does not process payments.</p>
      <p class="intake-form__notice">This is an operational privacy notice for the redesigned site, not legal advice. Rent Again should review it, its retention practices, applicable state privacy obligations, and its service-provider agreements before enabling backend features in production.</p>
    </div></section>`;
}

function calendarPage(kind) {
  const isCar = kind === "car";
  const path = isCar
    ? "/booking-calendar/car-approval-consultation"
    : "/booking-calendar/housing-approval-consultation";
  const fullUrl = `${site.bookingRoot}${path}`;
  const serviceDescription = isCar
    ? "Our Auto Approval Program is a 30-day credit-building service. Talk with us to start your service"
    : "Housing/APT Approval package Or Instant Approval Service";
  return `
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">Schedule your service</p><h1>Schedule your service</h1><p class="page-hero__lead">${serviceDescription}</p><p>Check out our availability and book the date and time that works for you</p><div class="button-row"><a class="button button--primary" href="${fullUrl}" target="_blank" rel="noopener noreferrer">Book Now</a></div></div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Schedule your service</span><strong>${isCar ? "Auto Approval Consultation" : "Housing Approval Consultation"}</strong><span class="hero-note__line"></span><span class="hero-note__small">Filter by:<br>Staff Member (All)</span></div></div></section>
    <section class="section section--tint"><div class="booking-bridge"><div><p class="eyebrow">Schedule your service</p><h2>Check out our availability and book the date and time that works for you</h2><a class="button button--primary" href="${fullUrl}" target="_blank" rel="noopener noreferrer">Continue to booking</a></div><div class="booking-bridge__note"><span aria-hidden="true">↗</span><p>Filter by: Staff Member (All)</p></div></div></section>`;
}

function notFoundPage() {
  return `
    <section class="not-found"><p class="eyebrow">Page not found</p><h1>Let’s get you<br>back on track.</h1><p>The page may have moved. Head back home or explore our services.</p><a class="button button--primary" href="/">Go to the homepage <span aria-hidden="true">→</span></a></section>`;
}

const routes = {
  "/": { title: "Home | RentAgain", render: homePage },
  "/housing-packages": { title: "Housing Packages | RentAgain", render: housingPage },
  "/cosigner": { title: "Cosigner | RentAgain", render: coApplicantPage },
  "/verified-income": { title: "Verified Income | RentAgain", render: verifiedIncomePage },
  "/instant-approval": { title: "Instant Approval | RentAgain", render: instantApprovalPage },
  "/auto-approval": { title: "Auto Approval | RentAgain", render: autoApprovalPage },
  "/book-consultation": { title: "Book Consultation | RentAgain", render: consultationPage },
  "/book-online": { title: "Book Online | RentAgain", render: bookingPage },
  "/account": { title: "Client Account | RentAgain", render: accountPage },
  "/staff": { title: "Staff Console | RentAgain", render: staffPage },
  "/privacy": { title: "Privacy Notice | RentAgain", render: privacyPage },
  "/booking-calendar/housing-approval-consultation": {
    title: "Schedule your service | RentAgain",
    render: () => calendarPage("housing"),
  },
  "/booking-calendar/car-approval-consultation": {
    title: "Schedule your service | RentAgain",
    render: () => calendarPage("car"),
  },
};

function normalizedPath(pathname) {
  return pathname.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
}

function navigation(currentPath) {
  const links = [
    { path: "/", label: "Home" },
    { path: "/#how-it-works", label: "How It Works" },
    { path: "/#faq", label: "FAQ" },
    { path: "/book-online/", label: "Book Online" },
  ];
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Rent Again home"><span class="brand__symbol" aria-hidden="true">R</span><span>RENT AGAIN<small>NEW CHAPTER NEW HOME.</small></span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span class="visually-hidden">Menu</span></button>
      <nav class="site-nav" id="primary-nav" aria-label="Main navigation">
        ${links.map(({ path, label }) => `<a href="${path}"${normalizedPath(path) === currentPath ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
        <details class="nav-dropdown"><summary>Services</summary><div class="nav-dropdown__menu"><a href="/instant-approval/">Instant Approval</a><a href="/cosigner/">Co-Applicant Program</a><a href="/book-consultation/">Book Consultation</a><a href="/verified-income/">Verified Income</a><a href="/housing-packages/">Housing Packages</a><a href="/auto-approval/">Auto Approval</a></div></details>
        <a class="site-nav__mobile-login" href="/account/">Client Login</a>
      </nav>
      <div class="site-header__actions"><a class="site-header__login" href="/account/">Client Login</a><a class="button button--small button--outline" href="/book-consultation/">Book a Consultation</a><a class="button button--small button--primary site-header__cta" href="/book-online/">Get Started ➜</a></div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="site-footer__main">
        <div><a class="brand brand--footer" href="/"><span class="brand__symbol" aria-hidden="true">R</span><span>RENT AGAIN<small>NEW CHAPTER NEW HOME.</small></span></a></div>
        <div class="site-footer__links">
          <div><p class="footer-label">QUICK LINKS</p><a href="/">Home</a><a href="/#how-it-works">How It's Works</a><a href="/housing-packages/">Housing Approval Program</a><a href="/cosigner/">Co-Applicant Program</a><a href="/verified-income/">Verified Income Program</a><a href="/instant-approval/">Instant Approval Service</a><a href="/#faq">FAQ</a><a href="/book-consultation/">Book a Consultation</a><a href="/account/">Client Login</a><a href="/staff/">Staff Console</a><a href="/privacy/">Privacy</a></div>
          <div><p class="footer-label">CONTACT</p><a href="tel:${site.phoneHref}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a><span>${site.coverage}</span><p class="footer-label">FOLLOW US</p><span class="footer-socials" aria-hidden="true"><img src="https://static.wixstatic.com/media/bea572_37e807f014a94a59a0bcaa31302ae0c8~mv2.png" alt=""><img src="https://static.wixstatic.com/media/bea572_42e56c2aab1045e7b1d8a2f0fc6f4fcc~mv2.png" alt=""><img src="https://static.wixstatic.com/media/bea572_3c35867aae664e648a931e54c2370089~mv2.png" alt=""><img src="https://static.wixstatic.com/media/bea572_8c12aae5a0114da197dea3c2ea03c065~mv2.png" alt=""></span></div>
        </div>
      </div>
      <div class="site-footer__bottom"><span>© ${new Date().getFullYear()} RENT AGAIN</span><a href="/book-online/">Book Online</a></div>
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

function initializeReadinessGuide() {
  const form = document.querySelector("#readiness-guide");
  const results = document.querySelector("#readiness-results");
  if (!form || !results) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const topic = form.querySelector('input[name="readiness-topic"]:checked')?.value;
    const checkedItems = [...form.querySelectorAll('input[name="readiness-check"]:checked')];
    const uncheckedItems = [...form.querySelectorAll('input[name="readiness-check"]:not(:checked)')];
    const serviceByTopic = {
      housing: { name: "Housing Approval Program", href: "/housing-packages/", detail: "Review the housing program and discuss how its profile and application support may fit." },
      income: { name: "Verified Income Program", href: "/verified-income/", detail: "Review the income documentation service and ask what authentic records may be needed." },
      coapplicant: { name: "Co-Applicant Program", href: "/cosigner/", detail: "Review the co-applicant program and ask about roles, responsibilities, and provider requirements." },
      time: { name: "Instant Approval Service", href: "/instant-approval/", detail: "Review the Instant Approval Service and confirm eligibility, current availability, costs, and timing with the team." },
      auto: { name: "Auto Approval Program", href: "/auto-approval/", detail: "Review the 30-day Auto Approval Program and confirm the current scope and costs with the team." },
      unsure: { name: "A consultation", href: "/book-consultation/", detail: "A specialist can help you understand the available services and what to ask next." },
    };
    const service = serviceByTopic[topic] ?? serviceByTopic.unsure;

    results.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = "Your next steps";
    const summary = document.createElement("p");
    summary.textContent = `You marked ${checkedItems.length} of ${form.querySelectorAll('input[name="readiness-check"]').length} planning items as ready. This is a checklist, not an approval score or eligibility decision.`;
    const suggestion = document.createElement("p");
    suggestion.textContent = service.detail;
    const link = document.createElement("a");
    link.className = "button button--primary";
    link.href = service.href;
    link.textContent = `Explore ${service.name}`;
    results.append(heading, summary, suggestion);

    if (uncheckedItems.length) {
      const listHeading = document.createElement("h4");
      listHeading.textContent = "Planning items to consider";
      const list = document.createElement("ul");
      for (const input of uncheckedItems) {
        const item = document.createElement("li");
        item.textContent = input.closest("label")?.querySelector("span")?.textContent ?? "";
        list.append(item);
      }
      results.append(listHeading, list);
    }

    results.append(link);
    results.hidden = false;
    results.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function initializeSupabaseFeatures() {
  const config = window.RENTAGAIN_SUPABASE;
  const sdk = window.supabase;
  const requestForm = document.querySelector("#consultation-request");
  const accountConfigStatus = document.querySelector("#account-config-status");
  const requestStatus = document.querySelector("#consultation-request-status");
  const loginForm = document.querySelector("#account-login");
  const staffLoginForm = document.querySelector("#staff-login");
  const loginStatus = document.querySelector("#account-login-status");
  const staffLoginStatus = document.querySelector("#staff-login-status");
  const staffConfigStatus = document.querySelector("#staff-config-status");
  let turnstileToken = "";
  let turnstileWidgetId;
  if (!config?.enabled || !config?.url || !config?.anonKey || !sdk?.createClient) {
    const message = "Online requests and account features are not configured yet. Please use the live booking calendars or call Rent Again.";
    if (requestStatus) requestStatus.textContent = message;
    if (accountConfigStatus) accountConfigStatus.textContent = message;
    if (staffConfigStatus) staffConfigStatus.textContent = message;
    return;
  }

  const client = sdk.createClient(config.url, config.anonKey, {
    auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });
  const requestButton = requestForm?.querySelector('button[type="submit"]');
  loginForm?.querySelector('button[type="submit"]')?.removeAttribute("disabled");
  staffLoginForm?.querySelector('button[type="submit"]')?.removeAttribute("disabled");
  if (requestForm && requestButton) {
    if (!config.turnstileSiteKey) {
      if (requestStatus) requestStatus.textContent = "Secure spam protection is not configured. Please use a live calendar or call Rent Again.";
    } else {
      const renderChallenge = () => {
        if (!window.turnstile) {
          if (requestStatus) requestStatus.textContent = "Spam protection could not load. Please use a live calendar or call Rent Again.";
          return;
        }
        try {
          turnstileWidgetId = window.turnstile.render("#turnstile-widget", {
            sitekey: config.turnstileSiteKey,
            action: "consultation-intake",
            callback: (token) => {
              turnstileToken = token;
              requestButton.disabled = false;
            },
            "expired-callback": () => {
              turnstileToken = "";
              requestButton.disabled = true;
            },
            "error-callback": () => {
              turnstileToken = "";
              requestButton.disabled = true;
              if (requestStatus) requestStatus.textContent = "Spam protection failed to load. Please try again or use a live calendar.";
            },
          });
        } catch (error) {
          console.error("Could not render Turnstile challenge:", error);
          if (requestStatus) requestStatus.textContent = "Spam protection failed to load. Please use a live calendar or call Rent Again.";
        }
      };
      if (window.turnstile) {
        renderChallenge();
      } else {
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = renderChallenge;
        script.onerror = () => {
          if (requestStatus) requestStatus.textContent = "Spam protection could not load. Please use a live calendar or call Rent Again.";
        };
        document.head.append(script);
      }
    }
  }

  requestForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!requestForm.reportValidity()) return;
    if (!turnstileToken) {
      requestStatus.textContent = "Complete the spam protection check before sending your request.";
      return;
    }
    const formData = new FormData(requestForm);
    requestButton.disabled = true;
    requestStatus.textContent = "Sending your request…";
    let error;
    try {
      ({ error } = await client.functions.invoke("submit-consultation", {
        body: {
          full_name: formData.get("full_name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          property_type: formData.get("property_type"),
          target_city: formData.get("target_city"),
          target_state: formData.get("target_state"),
          move_timeline: formData.get("move_timeline"),
          consent: formData.get("consent") === "on",
          company_website: formData.get("company_website"),
          turnstile_token: turnstileToken,
        },
      }));
    } catch (requestError) {
      console.error("Consultation request submission failed:", requestError);
      error = requestError;
    }
    turnstileToken = "";
    if (window.turnstile && turnstileWidgetId) window.turnstile.reset(turnstileWidgetId);
    if (error) {
      console.error("Consultation request submission failed:", error);
      requestStatus.textContent = "We could not submit your request. Please try again or call Rent Again.";
      return;
    }
    requestForm.reset();
    requestStatus.textContent = "Your consultation request was sent. This is not a confirmed appointment; use a live calendar above to reserve a time.";
  });

  const activeLoginForm = loginForm ?? staffLoginForm;
  const activeLoginStatus = loginStatus ?? staffLoginStatus;
  activeLoginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!activeLoginForm.reportValidity()) return;
    const email = new FormData(activeLoginForm).get("email");
    let error;
    try {
      ({ error } = await client.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}${window.location.pathname}` },
      }));
    } catch (requestError) {
      console.error("Email sign-in request failed:", requestError);
      error = requestError;
    }
    if (error) {
      console.error("Email sign-in request failed:", error);
      activeLoginStatus.textContent = "We could not send a sign-in link. Please try again later.";
      return;
    }
    activeLoginStatus.textContent = "If the address can receive sign-in links, one is on its way. Check your email.";
  });

  document.querySelector("#account-sign-out, #staff-sign-out")?.addEventListener("click", async () => {
    let error;
    try {
      ({ error } = await client.auth.signOut());
    } catch (requestError) {
      console.error("Client sign-out failed:", requestError);
      error = requestError;
    }
    if (error) {
      console.error("Client sign-out failed:", error);
      const status = document.querySelector("#account-requests-status, #staff-requests-status");
      if (status) status.textContent = "Sign out failed. Please close this browser window and try again.";
    }
  });

  document.querySelector("#account-delete")?.addEventListener("click", async (event) => {
    if (!window.confirm("Permanently delete this account and all consultation requests linked to it? This cannot be undone.")) return;
    const button = event.currentTarget;
    const status = document.querySelector("#account-delete-status");
    button.disabled = true;
    status.textContent = "Deleting your account and linked data…";
    let error;
    try {
      ({ error } = await client.functions.invoke("delete-client-account", { body: {} }));
    } catch (requestError) {
      console.error("Client account deletion request failed:", requestError);
      error = requestError;
    }
    if (error) {
      console.error("Client account deletion request failed:", error);
      status.textContent = "We could not confirm complete deletion. Contact Rent Again for assistance.";
      button.disabled = false;
      return;
    }
    const { error: signOutError } = await client.auth.signOut({ scope: "local" });
    if (signOutError) console.error("Deleted client could not be signed out locally:", signOutError);
    window.location.assign("/");
  });

  document.querySelector("#staff-refresh")?.addEventListener("click", () => loadStaffRequests(client));
  client.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => renderAccountSession(client, session), 0);
  });
  client.auth.getSession()
    .then(({ data, error }) => {
      if (error) console.error("Could not read client session:", error);
      renderAccountSession(client, data?.session ?? null);
    })
    .catch((error) => {
      console.error("Could not initialize client session:", error);
      const status = document.querySelector("#account-login-status");
      if (status) status.textContent = "Your account could not be loaded. Please reload and try again.";
    });
}

async function renderAccountSession(client, session) {
  if (document.querySelector("#staff-session")) {
    await renderStaffSession(client, session);
    return;
  }
  const loginForm = document.querySelector("#account-login");
  const sessionPanel = document.querySelector("#account-session");
  if (!loginForm || !sessionPanel) return;
  loginForm.hidden = Boolean(session);
  sessionPanel.hidden = !session;
  if (!session) return;

  document.querySelector("#account-user-email").textContent = session.user.email ?? "";
  const list = document.querySelector("#account-requests");
  const status = document.querySelector("#account-requests-status");
  list.replaceChildren();
  status.textContent = "Loading your requests…";

  let requests;
  let error;
  try {
    ({ data: requests, error } = await client
      .from("consultation_requests")
      .select("id, service, created_at, status, status_updated_at")
      .order("created_at", { ascending: false }));
  } catch (requestError) {
    console.error("Could not load client requests:", requestError);
    status.textContent = "Your requests could not be loaded. Please try again later.";
    return;
  }
  if (error) {
    console.error("Could not load client requests:", error);
    status.textContent = "Your requests could not be loaded. Please try again later.";
    return;
  }
  const clientRequests = requests ?? [];
  status.textContent = clientRequests.length ? "" : "No signed-in consultation requests were found.";
  const serviceLabels = {
    housing: "Housing Approval Program",
    co_applicant: "Co-Applicant Program",
    income_verification: "Verified Income Program",
    instant_approval: "Instant Approval Service",
    auto_approval: "Auto Approval Program",
    not_sure: "Service to be discussed",
  };
  for (const request of clientRequests) {
    const card = document.createElement("article");
    card.className = "account-request";
    const heading = document.createElement("h3");
    heading.textContent = serviceLabels[request.service] ?? "Consultation request";
    const date = document.createElement("p");
    date.textContent = `Request created ${new Date(request.created_at).toLocaleString()}`;
    const state = document.createElement("p");
    state.className = "account-request__status";
    const statusInfo = requestStatuses.find((item) => item.value === request.status);
    state.textContent = statusInfo?.label ?? "Request received";
    const statusDescription = document.createElement("p");
    statusDescription.textContent = statusInfo?.description ?? "Your request is being handled by the RentAgain team.";
    const updatedAt = document.createElement("p");
    updatedAt.className = "account-request__updated";
    updatedAt.textContent = `Last updated ${new Date(request.status_updated_at ?? request.created_at).toLocaleString()}`;
    const button = document.createElement("button");
    button.className = "button button--outline";
    button.type = "button";
    button.textContent = "Generate intake summary";
    button.addEventListener("click", () => generateIntakeSummary(client, request.id, card, status));
    card.append(heading, date, state, statusDescription, updatedAt, renderRequestProgress(request.status), button);
    list.append(card);
  }
}

async function renderStaffSession(client, session) {
  const loginForm = document.querySelector("#staff-login");
  const sessionPanel = document.querySelector("#staff-session");
  if (!loginForm || !sessionPanel) return;
  loginForm.hidden = Boolean(session);
  sessionPanel.hidden = !session;
  if (!session) return;
  document.querySelector("#staff-user-email").textContent = session.user.email ?? "";
  await loadStaffRequests(client);
}

async function loadStaffRequests(client) {
  const list = document.querySelector("#staff-requests");
  const status = document.querySelector("#staff-requests-status");
  if (!list || !status) return;
  list.replaceChildren();
  status.textContent = "Loading consultation requests…";

  let data;
  let error;
  try {
    ({ data, error } = await client.functions.invoke("staff-consultation-requests", {
      body: { action: "list" },
    }));
  } catch (requestError) {
    console.error("Could not load staff consultation requests:", requestError);
    status.textContent = "Requests could not be loaded. Please try again.";
    return;
  }
  if (error || !Array.isArray(data?.requests)) {
    console.error("Could not load staff consultation requests:", error);
    status.textContent = data?.error ?? "Requests could not be loaded. Please try again.";
    return;
  }
  if (!data.requests.length) {
    status.textContent = "No consultation requests have been submitted.";
    return;
  }
  status.textContent = "Showing the 100 most recent requests.";
  for (const request of data.requests) {
    const card = document.createElement("article");
    card.className = "account-request";
    const heading = document.createElement("h3");
    heading.textContent = request.full_name;
    const contact = document.createElement("p");
    const email = document.createElement("a");
    email.href = `mailto:${request.email}`;
    email.textContent = request.email;
    contact.append(email, document.createTextNode(` · ${request.phone}`));
    const details = document.createElement("p");
    details.textContent = [
      request.service.replaceAll("_", " "),
      request.property_type.replaceAll("_", " "),
      `${request.target_city}, ${request.target_state}`,
      request.move_timeline.replaceAll("_", " "),
      new Date(request.created_at).toLocaleString(),
    ].join(" · ");
    const statusLabel = document.createElement("label");
    statusLabel.className = "staff-request-status";
    statusLabel.textContent = "Update progress";
    const statusSelect = document.createElement("select");
    for (const { value, label } of requestStatuses) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      option.selected = request.status === value;
      statusSelect.append(option);
    }
    statusLabel.append(statusSelect);
    statusSelect.addEventListener("change", async () => {
      statusSelect.disabled = true;
      status.textContent = "Updating request status…";
      let updateData;
      let updateError;
      try {
        ({ data: updateData, error: updateError } = await client.functions.invoke("staff-consultation-requests", {
          body: { action: "update_status", id: request.id, status: statusSelect.value },
        }));
      } catch (requestError) {
        console.error("Could not update staff consultation request:", requestError);
        updateError = requestError;
      }
      if (updateError || updateData?.request?.status !== statusSelect.value) {
        console.error("Could not update staff consultation request:", updateError);
        status.textContent = updateData?.error ?? "The request status could not be updated.";
        statusSelect.value = request.status;
      } else {
        request.status = updateData.request.status;
        status.textContent = "Request status updated.";
      }
      statusSelect.disabled = false;
    });
    card.append(heading, contact, details, statusLabel);
    list.append(card);
  }
}

async function generateIntakeSummary(client, requestId, container, status) {
  const button = container.querySelector("button");
  button.disabled = true;
  status.textContent = "Preparing your intake summary…";
  let data;
  let error;
  try {
    ({ data, error } = await client.functions.invoke("generate-client-intake-summary", {
      body: { consultation_request_id: requestId },
    }));
  } catch (requestError) {
    console.error("Client intake summary generation failed:", requestError);
    button.disabled = false;
    status.textContent = "We could not create your document. Please try again later.";
    return;
  }
  button.disabled = false;
  if (error || !data?.signed_url) {
    console.error("Client intake summary generation failed:", error);
    status.textContent = "We could not create your document. Please try again later.";
    return;
  }
  let signedUrl;
  try {
    signedUrl = new URL(data.signed_url);
  } catch (error) {
    console.error("Client intake summary returned an invalid download URL:", error);
    status.textContent = "We could not verify the document link. Please try again later.";
    return;
  }
  const backendUrl = new URL(window.RENTAGAIN_SUPABASE.url);
  if (
    signedUrl.protocol !== "https:"
    || signedUrl.origin !== backendUrl.origin
    || !signedUrl.pathname.includes("/storage/v1/object/sign/client-documents/")
  ) {
    console.error("Client intake summary returned an unexpected download URL.");
    status.textContent = "We could not verify the document link. Please try again later.";
    return;
  }
  const link = document.createElement("a");
  link.className = "text-link";
  link.href = signedUrl.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Open your private intake summary";
  container.append(link);
  status.textContent = "Your summary is ready. It contains information you submitted and is not independent verification.";
}

initializeReadinessGuide();
initializeSupabaseFeatures();
