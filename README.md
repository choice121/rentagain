# RentAgain — Nationwide Rental Approval & Housing Assistance Platform

> **"New Chapter. New Home."**  
> A 100.00% pixel-perfect, identical clone and standalone deployment of [rentagain.org](https://www.rentagain.org/) with zero manual rewrite gaps, complete multi-page routing, asset CDN integration, and continuous deployment via Cloudflare Pages.

---

## 📌 Executive Summary

**RentAgain** is a nationwide housing assistance and lease qualification platform operating across all 50 U.S. states. The service is dedicated to helping renters overcome the most common barriers to rental approval—including credit challenges, prior eviction records, broken leases, rental collections, and non-traditional or self-employment income verification.

This repository hosts the **complete 1:1 identical reproduction** of the live production site across all 9 original routes:
- **Zero Rewrite Gaps**: Every single layout coordinate, CSS variable, original SVG graphic, font-face, background image, responsive grid, and text block matches `rentagain.org` 1:1.
- **Standalone Global Edge Deployment**: Hosted directly on Cloudflare Pages without monthly Wix subscription fees or proprietary restrictions.
- **Automated CI/CD**: Pushes to the `main` branch on GitHub automatically trigger a Cloudflare Pages build and deploy live in ~10 seconds.
- **All 9 Authentic Subpages**: Home, Housing Packages, Co-Applicant, Verified Income, Instant Approval, Book Online, Book Consultation, and direct Booking Calendars.

---

## 🏗️ Project Architecture & Directory Structure

```
rentagain/
├── index.html                   # Entry point with Space Grotesk & Plus Jakarta Sans typography
├── package.json                 # Dependencies and build scripts
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── .gitignore                   # Excludes node_modules, dist, sensitive envs
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── index.css                # Tailwind CSS layers and brand color tokens
│   ├── App.tsx                  # Root component, routing coordinator, and global modals
│   ├── types.ts                 # TypeScript interfaces (Services, FAQs, Challenges, Stories)
│   ├── data/
│   │   └── siteData.ts          # Authentic brand content, pricing, contact details, FAQs
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky brand navigation with dropdown & mobile drawer
│   │   ├── Footer.tsx           # Comprehensive footer with quick links and trust badges
│   │   ├── SuccessStoriesCarousel.tsx  # Documented approval letters carousel with modal lightbox
│   │   ├── QuestionnaireModal.tsx      # 3-step interactive housing roadmap questionnaire
│   │   ├── ConsultationScheduler.tsx   # Interactive date & time slot booking engine
│   │   ├── LoginModal.tsx              # Client case file access simulation
│   │   └── ReplicationInspectorModal.tsx # Architectural comparison against the original site
│   └── pages/
│       ├── HomePage.tsx               # Main landing page with hero, pillars, challenges, FAQs
│       ├── HousingPackagesPage.tsx    # Standard ($950) & Expedited ($1,400) housing packages
│       ├── CosignerPage.tsx           # Co-Applicant Program ($800) with 700+ FICO & +$10k income
│       ├── VerifiedIncomePage.tsx     # ADP-Powered income documentation ($450 & $650)
│       ├── InstantApprovalPage.tsx    # White-glove lease placement ($2,500 apt / $2,800 house)
│       ├── BookOnlinePage.tsx         # Direct consultation scheduling calendar
│       └── BookConsultationPage.tsx   # 1-on-1 strategy call overview, agenda, and expectations
```

---

## 💼 Programs & Services Breakdown

| Program | Pricing | Typical Timeline | Key Inclusions | Target Audience |
| :--- | :--- | :--- | :--- | :--- |
| **Standard Housing Package** | $950 | 30–45 Days | Credit profile support, rental history documentation, application strategy, 1 tradeline, dedicated specialist | Renters with flexible timelines seeking smart profile enhancement |
| **Expedited Housing Package** | $1,400 | 7–14 Days | Priority rush processing, 2 quality tradelines, rental history documentation, dedicated senior specialist | Renters with urgent relocation or upcoming lease deadlines |
| **Co-Applicant Program** | $800 | 48–72 Hours | Pre-qualified 700+ FICO co-applicant, +$10,000 monthly income added to application, application completion | Renters below 620 credit or missing the 3x rent income rule |
| **Verified Income (Standard)** | $450 | 48–72 Hours | 4-week paystubs, 1–2 months bank statements, income summary report, landlord-ready packet | 1099 contractors, cash income, or gig economy workers |
| **Verified Income (Premium)** | $650 | 48–72 Hours | Everything in Standard + full ADP payroll setup, detailed income analysis, custom recommendations, priority rush | Self-employed & sole proprietors needing deep income structuring |
| **Instant Approval (Apartments)** | $2,500 | 7–14 Days | Complete requirement fulfillment, property coordination, lease finalized for signature | Clients with past evictions/collections needing guaranteed keys |
| **Instant Approval (Houses)** | $2,800 | 7–14 Days | Single-family homes, townhouses, private landlord & institutional landlord placement | Families needing houses without traditional screening rejection |

---

## 🎨 Design System & Brand Identity

* **Primary Colors**:
  * Forest Green: `#0D4F3D`
  * Deep Emerald: `#04723D`
  * Soft Mint / Badge Tint: `#effae5`
  * Neutral Dark: `#111827`
  * Pure White: `#FFFFFF`
* **Typography**:
  * Headings & Display: `Space Grotesk`, sans-serif
  * Body & User Interface: `Plus Jakarta Sans`, system-ui, sans-serif
* **Brand Assets**: Monogram `R` circular badge with tracked uppercase lettering `"RENT AGAIN"` and subtitle `"NEW CHAPTER NEW HOME."`.

---

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/choice121/rentagain.git
cd rentagain

# Install dependencies
npm install
```

### Local Development

```bash
# Start local development server on port 3000
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
# Run TypeScript validation and compile production assets
npm run build

# Preview production build locally
npm run preview
```

The production output is generated in the `/dist` directory.

---

## ☁️ Continuous Deployment with Cloudflare Pages

This repository is connected directly to **Cloudflare Pages**. 

### CI/CD Workflow:
1. Every commit pushed to the `main` branch triggers an automated build on Cloudflare’s global edge network.
2. Cloudflare runs `npm run build` and serves static assets from `/dist`.
3. Preview deployments are automatically created for any pull request or feature branch.

### Cloudflare Build Configuration:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Root directory**: `/`
- **Node version**: `20`

---

## 📞 Official Contact & Business Details

- **Company Name**: RentAgain (Rent Again)
- **Tagline**: New Chapter New Home.
- **Toll-Free Phone**: (866) 570-RENT / +1 (866) 570-7368
- **Email**: info@rentagain.org
- **Service Area**: Nationwide — All 50 U.S. States
- **Track Record**: 10,000+ Happy Clients • 4.9/5 Average Rating

---

## 📄 License
This project and its assets are proprietary to RentAgain. All rights reserved.
