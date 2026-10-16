# PitchBookng landing page

Marketing site for [pitchbookng.com](https://pitchbookng.com) — book football pitches in Abuja and Nigeria.

Stack: Vite, React 19, TypeScript, Tailwind, Vercel. Pages are prerendered at build time so Google can index real HTML.

## Edit site content

Almost every public string, link, email, phone number and SEO title lives in one file:

[`src/content/site.json`](src/content/site.json)

Update that JSON, then rebuild. Header, footer, How it works, FAQ, About, Owners, the Abuja page, store buttons and structured data all read from it.

- **Emails:** `info@pitchbookng.com` (general) and `support@pitchbookng.com` (bookings / refunds)
- **WhatsApp / phone:** `+2347037656451`
- **Google Play:** set `stores.android.url` when the listing is live. While it is `null`, the button shows “Coming soon”.

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

`npm run build` typechecks, builds the client, builds an SSR bundle, prerenders every route into `dist/**/index.html`, and writes `dist/sitemap.xml`.

## Environment variables

Set these in Vercel (Production) and optionally in a local `.env`:

| Variable | Purpose |
|---|---|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (`G-XXXXXXXX`). Analytics is skipped when unset. |
| `VITE_GOOGLE_SITE_VERIFICATION` | Optional Search Console HTML tag verification token |

## UTM-tagged bio links

First-touch `utm_source`, `utm_medium` and `utm_campaign` are stored in `localStorage` and appended to the App Store link as Apple’s `ct` campaign token.

Paste these into each profile:

- Instagram: `https://pitchbookng.com/?utm_source=instagram&utm_medium=social&utm_campaign=bio`
- X: `https://pitchbookng.com/?utm_source=x&utm_medium=social&utm_campaign=bio`
- TikTok: `https://pitchbookng.com/?utm_source=tiktok&utm_medium=social&utm_campaign=bio`
- Facebook: `https://pitchbookng.com/?utm_source=facebook&utm_medium=social&utm_campaign=bio`
- WhatsApp: `https://pitchbookng.com/?utm_source=whatsapp&utm_medium=social&utm_campaign=bio`

## Off-site SEO (required for ranking)

Shipping this site is not enough. You still need to:

1. Verify `pitchbookng.com` in [Google Search Console](https://search.google.com/search-console) (DNS TXT is most reliable), submit `https://pitchbookng.com/sitemap.xml`, then Request indexing on the home page.
2. Create a Google Business Profile for PitchBookng in Abuja.
3. In Vercel domains, redirect `www.pitchbookng.com` → `https://pitchbookng.com` with a **308** (permanent), not 307.
4. Create a GA4 property and set `VITE_GA_MEASUREMENT_ID`.
5. Put the tagged website URL in every social bio. Set pitchbookng.com as the App Store marketing and support URL.
6. Ask partner venues to link to the site.

**Expectations:** “pitchbook ng” should rank once Google indexes the domain. “Book football pitch Abuja” takes weeks to months plus the Business Profile and links. Generic “football” will not rank first.

## HubSpot config

`hubspot.config.yml` holds a personal access key and is gitignored. If it was ever committed or shared, rotate that key in HubSpot.
