# RentAgain — 100% Identical Multi-Device Production Mirror

> **"New Chapter. New Home."**  
> A 100.00% pixel-perfect, identical clone and standalone deployment of [rentagain.org](https://www.rentagain.org/) with native mobile layout responsiveness, zero rewrite gaps, edge routing, and continuous deployment via Cloudflare Pages.

---

## 📌 Executive Summary

**RentAgain** is a nationwide housing assistance and lease qualification platform operating across all 50 U.S. states. The service is dedicated to helping renters overcome the most common barriers to rental approval—including credit challenges, prior eviction records, broken leases, rental collections, and non-traditional or self-employment income verification.

This repository hosts the **100% identical production mirror of the live site** with dual-device optimization:
- **100% Identical Desktop Mirror (`/`)**: Exact desktop grid layout, full navigation bar, and high-resolution styling across all 9 original routes.
- **100% Identical Mobile Mirror (`/m/`)**: Native Wix mobile layout (`device-mobile-optimized`), mobile hamburger menu, vertical single-column card stacking, touch-friendly swipe carousel, and zero horizontal overflow (`scrollWidth === clientWidth`).
- **Edge Device Routing (`functions/_middleware.js`)**: Cloudflare Pages edge function detects mobile visitors via `User-Agent` and seamlessly serves the native mobile view with zero latency and zero redirect flicker.
- **Adaptive Client Switch**: Built-in `<head>` viewport listener dynamically adapts if browser windows are resized between desktop and mobile widths.
- **Standalone Global Edge Deployment**: Hosted directly on Cloudflare Pages without monthly Wix subscription fees or proprietary platform lock-in.

---

## 🏗️ Directory Structure

```
rentagain/
├── functions/
│   └── _middleware.js           # Cloudflare Pages edge router for Mobile vs Desktop
├── scripts/
│   └── build.js                 # Production multi-tree build script (Desktop + Mobile)
├── index.html                   # 100% Mirrored Desktop Home Page (with adaptive routing)
├── housing-packages/index.html  # Desktop Housing Packages ($950 & $1,400)
├── cosigner/index.html          # Desktop Co-Applicant Program ($800)
├── verified-income/index.html   # Desktop ADP-Powered Income Verification ($450 & $650)
├── instant-approval/index.html  # Desktop Instant Approval ($2,500 & $2,800)
├── book-online/index.html       # Desktop Consultation Schedule View
├── book-consultation/index.html # Desktop Strategy Call Overview
├── booking-calendar/            # Desktop Booking Calendar Subpages
├── m/                           # 📱 100% Mirrored Mobile Site (Native Wix Mobile Layout)
│   ├── index.html               # Mobile Home Page (Single Column + Hamburger Menu)
│   ├── housing-packages/        # Mobile Housing Packages
│   ├── cosigner/                # Mobile Co-Applicant
│   ├── verified-income/         # Mobile ADP Verified Income
│   ├── instant-approval/        # Mobile Instant Approval
│   ├── book-online/             # Mobile Book Online
│   ├── book-consultation/       # Mobile Book Consultation
│   └── booking-calendar/        # Mobile Booking Calendar
├── package.json                 # Build configuration and scripts
├── README.md                    # Technical documentation
└── .gitignore                   # Excludes build artifacts and temp files
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

## 🚀 Building & Deploying

### Production Build

```bash
# Packages both Desktop and Mobile mirrored trees into dist/
npm run build
```

The output in `/dist` contains all 18 pages (9 desktop + 9 mobile) ready for deployment.

### Continuous Deployment via Cloudflare Pages

Every commit pushed to the `main` branch of `choice121/rentagain` on GitHub automatically triggers a build and edge deployment to **[https://rentagain.pages.dev](https://rentagain.pages.dev)**.

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
