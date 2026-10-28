# RentAgain

A modern, responsive static website for RentAgain, built for Cloudflare Pages.

## What is included

- A new responsive design for desktop, tablet, and mobile.
- Dedicated pages for housing packages, the co-applicant program, income verification, instant approval, consultations, and both booking calendars.
- Legacy `/m/` URLs redirect to their responsive equivalents.
- Consultation booking links continue to the existing RentAgain calendar on `www.rentagain.org`.
- Phone and email contact links remain available throughout the site.
- Service descriptions avoid promising a housing provider’s approval. Co-applicant and income documentation content requires accurate information and informed participation.

This deployment is a front-end redesign only. It does not collect or store lead forms, process payments, authenticate clients, or implement a client portal. Booking currently continues on the existing RentAgain site. Connect and test the intended backend and booking providers before moving the primary domain.

## Build and test

The site uses only Node.js built-ins:

```bash
npm run build
npm test
```

The build writes the Cloudflare Pages site to `dist/`. In Cloudflare Pages, use `npm run build` as the build command and `dist` as the build output directory.

## Project layout

- `site/` — website template, styles, route rendering, and Pages redirects.
- `scripts/build.js` — generates route-specific static HTML in `dist/`.
- `scripts/test-site.mjs` — checks route output, metadata, legacy redirects, and booking bridges.
- `functions/_middleware.js` — passes requests through; responsive layout is handled in the browser.

## Contact

- Phone: (866) 570-RENT / +1 (866) 570-7368
- Email: info@rentagain.org
- Service area: Nationwide
