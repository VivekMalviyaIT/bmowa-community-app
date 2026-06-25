# PRODUCT.md — BlueJay Malgudi Community App

The single-source product snapshot. If you had to recreate this app, start here.

## 1. What it is
A web app for residents of **BlueJay Malgudi**, a gated villa community ("Earthen
Villas") in Bangalore. The owners' welfare association is **BMOWA** (BlueJay
Malgudi Owners' Welfare Association). The app reads as an editorial **Community
Journal**, not a SaaS dashboard — calm, warm, neighbourly.

- **Audience:** residents (view community status, handbook, services, events) and
  the committee (receive feedback).
- **Live:** GitHub → Vercel. Data backend lives entirely in the Google ecosystem
  (Google Sheets; Drive for handbook docs; Forms for events later).

## 2. Pages / features
Left sidebar nav (desktop) / bottom tab bar (mobile), 7 sections:

| Route | Page | Content |
|---|---|---|
| `/` | **Spotlight** | Greeting + "Community Health" cards (water, security, lift) + announcements |
| `/snapshot` | **Snapshot** | Infrastructure stats + active operational gaps |
| `/initiatives` | **Initiatives** | Community projects with status + progress |
| `/handbook` | **Handbook** | Guidelines / SOPs (will link Drive docs) |
| `/services` | **Services** | Utilities/safety/facilities status |
| `/events` | **Events** | Community events (Form-driven later) |
| `/feedback` | **Feedback** | Resident form → writes to a private sheet tab |

## 3. The three designs (theme system)
Switchable via a low-profile selector; on desktop it's docked in the sidebar
footer (left of "Established 2026"), on mobile/tablet it floats in the top-right
corner (clear of the content cards and bottom nav). Choice
persists in `localStorage` (`bmowa-theme`), applied pre-paint (no flash). All
three share the same structure (logo + "BlueJay Malgudi" masthead, nav,
components, typography) — **only colors/atmosphere differ**. Selector order is
Cream → Aubergine → Editorial.

- **Cream** (default) — Claude-cream canvas, Malgudi-maroon brand, garden
  green/sand; subtle maroon active-nav + warm illumination.
- **Aubergine** — dark aubergine/maroon canvas, raised/illuminated sidebar, warm
  sand backlight, rose-maroon accents.
- **Editorial** — neutral paper-white, the original look.

Mechanism: `data-theme` on `<html>` + CSS variables in `src/app/globals.css`.
The server renders `data-theme="cream"` so Cream is the default for new visitors;
the no-flash script applies a returning visitor's saved choice pre-paint.
Full per-theme reference: `docs/design/{README,editorial,cream,aubergine}.md`.

Typography: **Instrument Serif** (headings/masthead) over **Inter** (UI/body) —
the serif/sans contrast is the signature. Icons are emoji + Unicode glyphs.

## 4. Tech stack
- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4 (config in CSS via `@theme inline`), Framer Motion
- google-auth-library (service-account JWT → Google Sheets REST API)
- Hosting: Vercel (serverless functions for API routes)

## 5. Architecture
```
Browser (client pages)
  ├─ read:  fetch /api/sheet-data?tab=X  ──▶ src/lib/sheets.server.js (JWT) ──▶ Google Sheets API (private)
  └─ write: POST /api/feedback           ──▶ appendRow(Feedback_Responses)  ──▶ Google Sheets API
Server components (initiatives) call sheets.server.js directly (force-dynamic).
All reads fail soft → built-in fallback values render if the sheet is unreachable.
```
- **Secrets stay server-side.** `GOOGLE_SERVICE_ACCOUNT_JSON` is only read in
  `sheets.server.js` (marked `import 'server-only'`).
- Not a static export — `next.config.ts` has no `output:"export"` (required for
  the server runtime). `devIndicators:false` (cosmetic, dev-only).

## 6. Data model — Google Sheet tabs
Sheet: **"BMOWA Web App — Live Data"** in Drive at
`Malgudi Committee 2026-27 / Zero Final / BMOWA_WebApp_Live_DataSource`
(ID `1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4`, default in `sheetConfig.js`).

| Tab | Columns |
|---|---|
| Spotlight | key, title, value, subtitle, progress, color, icon |
| Announcements | title, desc, date, category, tone |
| Snapshot | label, value, detail, icon, accent |
| Snapshot_Gaps | text, severity |
| Initiatives | title, status, description, progress, color, recommendation |
| Handbook | title, icon, description, driveUrl, details (`|`-separated) |
| Services | title, icon, status, category, details |
| Events | title, date, location, spots, formUrl, description |
| Feedback_Responses | timestamp, referenceId, name, flatNumber, category, subject, details, priority, status (PRIVATE — write only) |

Canonical seed: `scripts/google/seed-data.mjs`. Currently wired to render live:
Spotlight, Snapshot, Initiatives (others created/seeded, ready to wire).

## 7. Deployment & env
- **Vercel** auto-detects Next.js → serverless. After connecting the repo:
  add env var `GOOGLE_SERVICE_ACCOUNT_JSON` (full service-account JSON, one line)
  and optionally `GOOGLE_SHEET_ID`; redeploy.
- Reads need no other env vars. See `docs/google-backend-setup.md` for the full
  Google Cloud + sharing + populate steps.

## 8. Key files / map
```
src/app/
  layout.tsx              ThemeProvider + Sidebar + ThemeSelector + no-flash script
  globals.css             ALL theme tokens (3 themes) + component styles
  page.tsx                Spotlight (live)
  {snapshot,initiatives,handbook,services,events,feedback}/page.tsx
  api/sheet-data/route.ts read a tab (server)
  api/feedback/route.ts   append feedback (server)
src/components/
  Sidebar, ThemeProvider, ThemeSelector, HealthCard, EditorialCard,
  PageHeader, AnnouncementList, GlassCard
src/lib/      sheets.server.js (server-only), sheetClient.ts (client)
src/config/   sheetConfig.js (sheet id + tab names)
scripts/google/ seed-data.mjs, setup-sheets.mjs, populate-sheet.gs, make-apps-script.mjs
docs/         design/*, google-backend-setup.md
public/       malgudi-logo.png (crest)
```

## 9. To recreate from scratch (outline)
1. `create-next-app` (TS, App Router, Tailwind v4). Add Framer Motion,
   google-auth-library.
2. Build the editorial layout: fixed 240px sidebar + centered column; mobile
   bottom nav. Masthead = crest + "BlueJay Malgudi".
3. Theme system: variables in `globals.css`, `ThemeProvider` + `ThemeSelector` +
   no-flash script; three `data-theme` palettes.
4. Pages with built-in fallback data.
5. Google backend: service account, `sheets.server.js`, `/api/sheet-data` +
   `/api/feedback`, wire pages, populate the sheet (`populate-sheet.gs`).
6. Deploy to Vercel with the env vars.
