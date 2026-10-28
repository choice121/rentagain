# RentAgain

A responsive static website for Rent Again, designed for Cloudflare Pages. The frontend remains static; all client data and document-generation operations use Supabase Edge Functions, PostgreSQL, Auth, and private Storage.

## What works in this redesign

- Public marketing pages, navigation, service-card copy, package details, booking content, process outcomes, FAQ wording, and original imagery are aligned with the live Rent Again visitor experience. The client account, staff console, privacy notice, readiness checklist, and intake form remain available on direct routes and are not added to public navigation.
- Existing housing and auto appointment calendars remain available on `www.rentagain.org`. Opening a calendar books through that existing provider; a form on this site is only a request and does not reserve a time.
- Consultation request intake at `/request-consultation/` stores only contact details and non-sensitive service/location/timing preferences. Cloudflare Turnstile verification is required before a request is accepted.
- A private, self-guided readiness checklist at `/readiness/` organizes next steps without scoring applicants or predicting a provider decision. Checklist answers stay in the browser and are not submitted or saved.
- Passwordless Supabase Auth gives clients access to requests submitted while signed in.
- A restricted staff console lets provisioned staff review the 100 most recent requests and update progress. Clients can see the latest progress step and update time in their account. Housing providers make all final application decisions.
- Clients can delete their signed-in account, linked consultation requests, and private summaries from the account page.
- Authenticated clients can generate a private PDF intake summary from their own submitted request. It is explicitly identified as client-submitted, not independently verified, and not proof of income, identity, rental history, landlord approval, or eligibility.
- Generated summaries are stored in a private Supabase Storage bucket and shared using five-minute signed links.
- The site does not implement payment processing, automatic appointment booking, automated approval decisions, fabricated landlord documents, or client uploads of sensitive financial records. The housing provider makes the final application decision.

The public calendar handoff remains in place until the business supplies an appointment system, availability, timezone, and booking rules. This preserves current booking access rather than pretending a consultation request is a confirmed appointment.

## Service and launch readiness

The service pages and booking handoff were checked against the public source pages on 2026-10-28. This confirms copy parity with what the source site publishes, not that prices, turnaround times, eligibility, or service capacity are still the business's current offer.

| Service or route | Source check | Remaining confirmation |
| --- | --- | --- |
| Housing Approval | Public package page is available; package copy and amounts are covered by site tests. | Confirm package prices, durations, tradeline offering, and capacity before accepting new customers. |
| Co-Applicant | Public page is available; qualifications, price, process, and timeline are covered by site tests. | Confirm current co-applicant availability, qualification criteria, price, and processing expectations. |
| Verified Income | Public page is available; package copy, amounts, and deliverables are covered by site tests. | Confirm ADP workflow, document handling, pricing, turnaround, and the actual scope of income verification. |
| Instant Approval | Public page is available; service fees, stated timeline, process, and eligibility copy are covered by site tests. | Confirm current availability, fees, qualification, and what the service can promise before relying on these claims. |
| Auto Approval | The source detail route returned 404; the source car-calendar page describes a 30-day credit-building program. | The redesigned detail page is not a full copy of an available source page. Confirm the current offer, costs, and supported outcomes with the business. |
| Booking | The source site provides housing and car calendars; this site links directly to those calendars. | Keep the calendars available, or supply the replacement provider, appointment types, availability, timezone, and booking rules before changing the handoff. |
| FAQ and policy routes | The source FAQ, privacy, and contact routes returned 404 during this check. | FAQ copy shown on the source service pages is mirrored; maintain this site's own accurate privacy notice for its separate data collection. |

At the live `rentagain.pages.dev` deployment checked on 2026-10-28, the browser Supabase configuration reported backend features disabled, with no public Supabase URL or Turnstile site key. Consequently, online requests, client sign-in, and staff account features are not operational there; the current live calendars and phone contact remain the available paths. Enable those features only after configuring the Cloudflare Pages variables and Supabase Auth email/Turnstile settings described below, then test a guest request, signed-in request, staff status update, and client status view in production.

Staff currently have to check the console manually: there are no lead email notifications or response-time promise. Before adding notifications, choose the approved recipient and delivery provider. Conversion analytics are not currently collected; choose an analytics and privacy approach before adding tracking. Neither lead alerts nor analytics can be safely enabled from a code-only change without those business decisions and production configuration.

## Build and test

The static build uses Node.js built-ins:

```bash
npm run build
npm test
```

The build writes route-specific pages and a browser-safe Supabase config to `dist/`. Backend browser features are disabled by default. Never put a Supabase `service_role` key in Cloudflare Pages variables or browser assets.

For a local static build, set:

```text
SUPABASE_URL=https://<dedicated-project-ref>.supabase.co
SUPABASE_ANON_KEY=<publishable-or-anon-key>
TURNSTILE_SITE_KEY=<public-turnstile-site-key>
RENTAGAIN_BACKEND_ENABLED=true
```

The publishable/anon key and Turnstile site key are public browser values. `SUPABASE_SERVICE_ROLE_KEY` and `TURNSTILE_SECRET_KEY` are server secrets and belong only in Supabase Edge Function secrets.

## Supabase setup

Use the dedicated Rent Again Supabase project (`moavkqlqvyfwnvfqevrg`). Do not point this site at Choice Properties' shared Supabase project; client intake and document data must remain isolated. The project is created, linked, migrated, and has all four Edge Functions deployed. Its Auth site URL and redirect allowlist are configured for the preview and production domains.

Before enabling the browser features:

1. Configure passwordless email sign-in with a production SMTP provider in Supabase Auth. Test delivery; Gmail/Google Workspace SMTP requires an app password if the account's security policy allows it.
2. Create a Cloudflare Turnstile widget for the preview and production domains. Configure its site key in Cloudflare Pages as `TURNSTILE_SITE_KEY`, and its secret in Supabase Edge Function secrets as `TURNSTILE_SECRET_KEY`.
3. If setting up a fresh checkout, link it to the dedicated project and apply the migration:

   ```bash
   supabase link --project-ref moavkqlqvyfwnvfqevrg
   supabase db push
   ```

   The progress tracker migration follows the initial consultation migration. Apply it with `supabase db push` before deploying the matching application build.

4. Supabase supplies `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to Edge Functions; do not try to set those reserved variables as custom secrets. The allowed origins are already configured. Never place `TURNSTILE_SECRET_KEY` or a Supabase service-role key in Cloudflare Pages variables or browser assets.

5. To redeploy functions after a code change:

   ```bash
   supabase functions deploy submit-consultation --no-verify-jwt
   supabase functions deploy generate-client-intake-summary
   supabase functions deploy delete-client-account
   supabase functions deploy staff-consultation-requests
   ```

6. In Cloudflare Pages, set build variables `SUPABASE_URL=https://moavkqlqvyfwnvfqevrg.supabase.co`, `SUPABASE_ANON_KEY=<public-anon-or-publishable-key>`, and `TURNSTILE_SITE_KEY=<public-turnstile-site-key>`. Set `RENTAGAIN_BACKEND_ENABLED=true` only after SMTP and Turnstile are configured, then trigger a new Pages deployment so the build picks up the variables.
7. Test a magic-link sign-in, consultation submission, staff progress update, and client progress display before accepting real client data. Progress is updated by staff; a recorded provider outcome should only be used after the provider has communicated it.
8. Provision staff only after the staff member has signed in once. In the Supabase SQL editor, grant access to the matching Auth user ID, for example:

   ```sql
   insert into public.rentagain_staff_members (user_id)
   select id from auth.users where email = 'staff@example.com';
   ```

   Do not grant staff access based only on a user-controlled email submitted in the browser. Remove access by deleting the corresponding staff-membership row.
9. Submit test requests as a guest and as an authenticated client. Confirm guests cannot read requests, clients can only read their own records, unprovisioned users cannot access the staff console, provisioned staff can update statuses, generated PDFs stay private, signed links expire, and the original calendar links still open.

The backend is intentionally disabled in the current Cloudflare build until SMTP, Turnstile, and the public Pages variables are configured. The business should also review the privacy notice and choose a documented retention/deletion process before accepting real client data.

## Data and document safeguards

- The migration enables row-level security and grants clients access only to their own signed-in requests/documents. Guest intake is written by a server-side Edge Function and is not publicly readable.
- A database-backed rate limit and Turnstile verification protect public intake. Origin allowlisting is enforced in the Edge Functions.
- The service-role key and Turnstile secret are never rendered into the browser.
- The only generated file is a client intake summary using the client's saved form fields. It is not a landlord approval, paystub, income/employment verification, credit report, lease, or eligibility certificate.
- The staff Edge Function requires a valid Supabase session and a row in `rentagain_staff_members` before returning or changing consultation requests. The browser never receives the service-role key.
- Signed-in account deletion removes the user's generated Storage objects, linked requests, and Auth account. Guest requests are not linked to an account and must be handled by authorized staff.
- The current migration does not automatically delete client records. Rent Again must operate deletion requests and establish an appropriate retention period.
- The staff console does not send lead email notifications, and the site does not promise a response time. Staff must check the console until an approved notification workflow is configured.

## Project layout

- `site/` — static template, styles, route rendering, Supabase client integration, and redirects.
- `scripts/build.js` — generates route-specific static HTML and browser configuration in `dist/`.
- `scripts/test-site.mjs` — checks routes, booking bridges, form/config behavior, and key Supabase safeguards.
- `supabase/migrations/` — database schema, row-level security, rate limiting, and private Storage policies.
- `supabase/functions/` — consultation intake, authenticated client PDF generation, account deletion, and staff request management.
- `functions/_middleware.js` — Cloudflare Pages pass-through middleware.

## Contact

- Phone: (866) 570-RENT / +1 (866) 570-7368
- Email: info@vontagain.org
- Service area: Nationwide - All 50 States
