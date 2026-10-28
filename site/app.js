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
    description: "Improve your rental profile and approval positioning.",
  },
  {
    path: "/cosigner/",
    icon: "02",
    name: "Co-Applicant Program",
    description: "Add qualified support to strengthen your application.",
  },
  {
    path: "/verified-income/",
    icon: "03",
    name: "Verified Income Program",
    description: "Organize and strengthen income documentation.",
  },
  {
    path: "/instant-approval/",
    icon: "04",
    name: "Instant Approval Service",
    description: "Improve your rental profile and approval positioning.",
  },
];

const faqAnswer =
  'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".';

const homeFaqs = [
  "How quickly can I get started?",
  "Do you guarantee approval?",
  "Do you work nationwide?",
  "What if I've already been denied?",
  "How do I know which service I need?",
];

const housingFaqs = [
  "How long does the Housing Approval Program take?",
  "Do you guarantee approval?",
  "Will this program remove negative items from my credit?",
  "What if I have an eviction or multiple collections?",
];

const coApplicantFaqs = [
  "How quickly will my application be submitted?",
  "Will the co-applicant be on the lease?",
  "What credit score does the co-applicant have?",
  "Do I have to meet any requirements?",
  "Is this the same as a co-signer?",
  "Is the program guaranteed to get me approved?",
];

const incomeFaqs = [
  "What types of income can you help verify?",
  "What documents do I need to provide?",
  "How long does the process take?",
  "Is this service available nationwide?",
  "Is this guaranteed to get me approved?",
  "What if my income is inconsistent?",
];

const instantFaqs = [
  "How quickly can I move in?",
  "What types of properties do you work with?",
  "Do I need good credit to qualify?",
  "Is this service available in my area?",
  "What types of properties do you work with?",
  "Do I need good credit to qualify?",
];

const successImages = [
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
          <a class="text-link" href="${service.path}">Learn More <span aria-hidden="true">→</span></a>
        </article>`,
    )
    .join("");
}

function faq(questions = homeFaqs) {
  return `
    <section id="faq" class="section section--compact" aria-labelledby="faq-title">
      <div class="section-heading">
        <p class="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
        <h2 id="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div class="faq-list">
        ${questions
          .map(
            (question) => `
              <details class="faq-item">
                <summary>${question}<span aria-hidden="true"></span></summary>
                <p>${faqAnswer}</p>
              </details>`,
          )
          .join("")}
      </div>
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
      <div><p>Many renters struggle with credit issues, rental history challenges, income concerns, collections, or previous denials.</p><p>At Rent Again, we focus on helping clients understand their options and create a clear path forward toward securing housing.</p></div>
    </section>

    <section class="section section--tint">
      <div class="section-heading"><h2>SUCCESS STORIES</h2></div>
      <div class="story-grid">${successImages.map((src) => `<img src="${src}" alt="" loading="lazy">`).join("")}</div>
    </section>

    <section id="how-it-works" class="section">
      <div class="section-heading"><p class="eyebrow">Clear Roadmap</p><h2>HOW IT WORKS</h2><p>Getting approved shouldn't be a guessing game. Our three-step framework turns obstacles into approvals.</p></div>
      <div class="steps-grid">
        <article class="step-card"><span>01</span><h3>Tell Us About Your Situation</h3><p>Complete a short questionnaire so we can better understand your housing goals and approval challenges.</p><a class="text-link" href="/book-online/">Get Started ➜</a></article>
        <article class="step-card"><span>02</span><h3>Receive Your Personalized Strategy</h3><p>We'll review your information and identify the most effective path forward based on your circumstances.</p><a class="text-link" href="/book-consultation/">Book a Consultation</a></article>
        <article class="step-card"><span>03</span><h3>Move Forward With Confidence</h3><p>Our team guides you through the next steps designed to improve your housing opportunities.</p><a class="text-link" href="/book-consultation/">Book a Consultation</a></article>
      </div>
    </section>

    <section id="services" class="section section--tint">
      <div class="section-heading section-heading--row">
        <div><h2>OUR SERVICES</h2></div>
        <a class="text-link" href="#services">View All Services ➜</a>
      </div>
      <div class="service-grid">${serviceCards()}</div>
    </section>

    <section class="feature-strip">
      <article><h3>EXPERIENCE</h3><p>We've worked with thousands of renters facing unique housing situations.</p></article>
      <article><h3>PERSONALIZED SOLUTIONS</h3><p>No two renters are the same. Every strategy is tailored to your circumstances.</p></article>
      <article><h3>SUPPORT</h3><p>Our team remains available throughout the process.</p></article>
    </section>

    <section class="challenge-section">
      <div class="challenge-section__intro"><h2>COMMON CHALLENGES WE HELP WITH</h2></div>
      <div class="challenge-list">${challengeItems.map(({ label, image }) => `<div><img src="${image}" alt="" loading="lazy"><strong>${label}</strong></div>`).join("")}</div>
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
        <div class="fact-grid"><div><strong>30-45 Day</strong><span>Program Length</span></div><div><strong>Nationwide</strong><span>Service</span></div><div><strong>Personalized</strong><span>Strategy</span></div><div><strong>Apartment &amp;</strong><span>Housing Focused</span></div></div>
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
      <p class="fine-print">All programs include personalized guidance, nationwide support, and a proven strategy to improve your approval odds.</p>
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
      <article class="step-card"><span>05</span><h3>Move Forward</h3><p>You'll have approved and move into your next home.</p></article>
    </div></section>
    ${faq(housingFaqs)}
    <section class="cta-band"><div><h2>Ready To Strengthen Your Profile And Get Approved?</h2><p>Let's create a plan that gets you in your next home.</p></div><div><a class="button button--light" href="/book-consultation/">Book My Consultation</a><p>Let's build your path to approval.</p><p>Have Questions? We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
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
      <article class="step-card"><span>05</span><h3>Get Approved</h3><p>Move into your new home with confidence.</p></article>
    </div></section>
    <section class="section section--tint"><div class="section-heading"><p class="eyebrow">THIS PROGRAM IS FOR YOU IF:</p><h2>THIS PROGRAM IS FOR YOU IF:</h2></div><div class="tag-grid"><span>You don't meet the income requirement alone</span><span>You need a higher credit score on your application</span><span>You've been denied in the past</span><span>You want to increase your approval chances</span><span>You're ready to move into your next home</span></div><div class="fact-grid fact-grid--wide"><div><strong>$800</strong><span>PROGRAM FEE</span></div><div><strong>48-72 Hours</strong><span>PROCESSING TIME (Volume Dependent)</span></div><div><strong>700+ Credit Score</strong><span>CO-APPLICANT REQUIREMENT</span></div><div><strong>+$10,000 Monthly Income</strong><span>INCOME ADDED</span></div><div><strong>Nationwide - All 50 States</strong><span>SERVICE AREA</span></div></div></section>
    ${faq(coApplicantFaqs)}
    <section class="cta-band"><div><h2>Stronger Application. Better Approval Odds.</h2><p>Take the next step toward getting approved.</p></div><div><a class="button button--light" href="/book-consultation/">Book My Consultation</a><p>Let's find the best solution for you.</p><p>Have Questions? We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
}

function verifiedIncomePage() {
  return `
    <section class="page-hero"><div class="page-hero__copy">
      <div class="fact-grid"><div><strong>Fast Turnaround</strong><span>48-72 Hours</span></div><div><strong>ADP Powered</strong><span>Trusted Software</span></div><div><strong>Landlord Ready</strong><span>Proper Documentation</span></div><div><strong>Nationwide</strong><span>Virtual Service</span></div></div>
      <p class="eyebrow">INCOME VERIFICATION SERVICE</p><h1>Verify Your Income. Strengthen Your Approval.</h1>
      <p class="page-hero__lead">Our Income Verification Service helps you properly document and verify your income so you can meet rental requirements and get approved with confidence.</p>
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
      <article class="step-card"><span>05</span><h3>You Get Approved</h3><p>Use your verified income to meet requirements and secure your new home.</p></article>
    </div></section>
    <section class="section"><div class="section-heading"><p class="eyebrow">THIS SERVICE IS PERFECT FOR YOU IF:</p><h2>THIS SERVICE IS PERFECT FOR YOU IF:</h2></div><div class="tag-grid"><span>You are self-employed or a sole proprietor</span><span>You have inconsistent or variable income</span><span>You get paid in cash or non-traditional ways</span><span>You need help meeting rental income requirements</span><span>You've been denied due to income proof</span><span>You want to increase your approval chances</span></div><div class="fact-grid fact-grid--wide"><div><strong>48-72 Hours</strong><span>TURNAROUND TIME</span></div><div><strong>Virtual - Nationwide</strong><span>SERVICE TYPE</span></div><div><strong>One-time payment</strong><span>PAYMENT</span></div><div><strong>Secure email delivery</strong><span>DOCUMENT DELIVERY</span></div><div><strong>1 Round of revisions included</strong><span>REVISIONS</span></div><div><strong>We're here every step</strong><span>SUPPORT</span></div></div></section>
    ${faq(incomeFaqs)}
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
      <article class="step-card"><span>03</span><h3>Approval Execution</h3><p>Our team secures the lease and meets all requirements on your behalf.</p></article>
      <article class="step-card"><span>04</span><h3>Lease Completion</h3><p>All lease documents are finalized and ready for your signature.</p></article>
      <article class="step-card"><span>05</span><h3>Move In</h3><p>Receive your keys and move into your new home with confidence.</p></article>
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
    ${faq(instantFaqs)}
    <section class="cta-band"><div><h2>Your Next Home Is Closer Than You Think.</h2><p>Book your private consultation today and let our team create your fastest path to move-in.</p></div><div><a class="button button--light" href="/book-consultation/">Book a Consultation</a><p>Speak with a housing specialist and see if you qualify.</p><p>Have Questions? Call us directly. We're here to help. <a href="tel:${site.phoneHref}">${site.phone}</a></p></div></section>`;
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
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">BOOK A CONSULTATION</p><h1>BOOK A CONSULTATION</h1><p class="page-hero__lead">Speak with an expert to review your rental approval options and find the service that fits your needs.</p></div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Select a Date &amp; Time</span><strong>Select a Date &amp; Time</strong><span class="hero-note__line"></span><a class="text-link" href="${housingUrl}" target="_blank" rel="noopener noreferrer">Book Now</a></div></div></section>
    <section class="section section--tint"><div class="booking-breadcrumb"><a href="/">Home</a><span>Services</span><span>Service Information</span></div><div class="section-heading"><p class="eyebrow">Select a Date &amp; Time</p><h2>Select a Date &amp; Time</h2></div><div class="booking-grid">
      <article class="booking-card"><span class="booking-card__icon" aria-hidden="true">⌂</span><h3>Housing Approval Consultation</h3><div class="booking-card__meta"><span>15 min</span></div><a class="button button--primary" href="/booking-calendar/housing-approval-consultation/">Book Now</a></article>
      <article class="booking-card"><span class="booking-card__icon booking-card__icon--gold" aria-hidden="true">✳</span><h3>Car Approval Consultation</h3><div class="booking-card__meta"><span>15 min</span></div><a class="button button--primary" href="/booking-calendar/car-approval-consultation/">Book Now</a></article>
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
    <section class="page-hero"><div class="page-hero__copy"><p class="eyebrow">Schedule your service</p><h1>Schedule your service</h1><p class="page-hero__lead">${serviceDescription}</p><p>Check out our availability and book the date and time that works for you</p><div class="button-row"><a class="button button--primary" href="${fullUrl}" target="_blank" rel="noopener noreferrer">Book Now</a></div></div><div class="page-hero__aside"><div class="hero-note"><span class="hero-note__label">Schedule your service</span><strong>${isCar ? "Car Approval Consultation" : "Housing Approval Consultation"}</strong><span class="hero-note__line"></span><span class="hero-note__small">Filter by:<br>Staff Member (All)</span></div></div></section>
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
  "/book-consultation": { title: "Book Consultation | RentAgain", render: consultationPage },
  "/book-online": { title: "Book Online | RentAgain", render: bookingPage },
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
        <details class="nav-dropdown"><summary>Services</summary><div class="nav-dropdown__menu"><a href="/instant-approval/">Instant Approval</a><a href="/cosigner/">Cosigner</a><a href="/book-consultation/">Book Consultation</a><a href="/verified-income/">Verified Income</a><a href="/housing-packages/">Housing Packages</a></div></details>
        <a class="site-nav__mobile-login" href="https://www.rentagain.org" target="_blank" rel="noopener noreferrer">Log In</a>
      </nav>
      <div class="site-header__actions"><a class="site-header__login" href="https://www.rentagain.org" target="_blank" rel="noopener noreferrer">Log In</a><a class="button button--small button--outline" href="/book-consultation/">Book a Consultation</a><a class="button button--small button--primary site-header__cta" href="/book-online/">Get Started ➜</a></div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="site-footer__main">
        <div><a class="brand brand--footer" href="/"><span class="brand__symbol" aria-hidden="true">R</span><span>RENT AGAIN<small>NEW CHAPTER NEW HOME.</small></span></a></div>
        <div class="site-footer__links"><div><p class="footer-label">QUICK LINKS</p><a href="/">Home</a><a href="/#how-it-works">How It's Works</a><a href="/housing-packages/">Housing Approval Program</a><a href="/cosigner/">Co-Applicant Program</a><a href="/verified-income/">Verified Income Program</a><a href="/instant-approval/">Instant Approval Service</a><a href="/#faq">FAQ</a><a href="/book-consultation/">Book a Consultation</a></div><div><p class="footer-label">CONTACT</p><a href="tel:${site.phoneHref}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a><span>${site.coverage}</span><p class="footer-label">FOLLOW US</p></div></div>
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
