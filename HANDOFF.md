# HANDOFF.md

Running log of work sessions so the next session knows what happened. Newest
first. Append a dated entry when you finish a session.

---

## 2026-06-24 — 3-design theme switcher, fixes, responsive, Google Sheets backend

**Branch:** `claude/dreamy-feynman-6ca123` (worktree) → fast-forward merged into
local `main`. Final commit: `08369e5`. **Not pushed** — `main` is ahead 3 of
`origin/main`; the user pushes manually via GitHub (triggers Vercel).

### What was done
1. **Three interchangeable designs** + a low-profile selector (bottom-left ◐):
   `editorial` (default, original), `cream` (DS light), `aubergine` (DS dark).
   Driven by `data-theme` on `<html>` + CSS-variable overrides in `globals.css`;
   choice persisted to `localStorage`, applied pre-paint (no flash). New:
   `ThemeProvider.tsx`, `ThemeSelector.tsx`, `public/malgudi-logo.png`. Unified
   masthead (crest + "BlueJay Malgudi") and hero greeting across all three;
   footer reads "Established 2026". Cream/Aubergine add raised+backlit sidebar,
   stronger sand/maroon blooms, sand hero illume, and a subtle maroon active-nav.
2. **Fixes along the way:**
   - Hydration warnings → `suppressHydrationWarning` on `<html>` + `<body>`
     (theme attr + browser-extension attrs).
   - Sidebar layout regression: a `position: relative` on `.sidebar-editorial`
     overrode Tailwind's `fixed` (same specificity, later in cascade) and pushed
     content below a full-height sidebar. Removed it; `fixed` + `overflow:hidden`
     is correct.
   - Dev indicator disabled (`devIndicators:false`) — it surfaced false-positive
     "issues" from browser extensions; dev-only, no prod impact.
   - Dark-mode **Submit Feedback** button was invisible (`text-white` on a light
     fill) → `text-background`.
3. **Responsive:** mobile bottom nav tightened so all 7 tabs fit; selector clears
   the nav. Verified across all three themes + a form page.
4. **Design docs:** `docs/design/{README,editorial,cream,aubergine}.md`.
5. **Live data backend (private Google Sheet via service account):**
   - Removed `output:"export"` → Vercel now runs it serverless (required to hold
     the key + call Sheets).
   - `src/lib/sheets.server.js` (server-only JWT client, read + append, fails soft
     to `[]`), `/api/sheet-data?tab=` (read), `/api/feedback` (append to private
     `Feedback_Responses`), `src/lib/sheetClient.ts` (client fetch),
     `src/config/sheetConfig.js`.
   - Wired live: **Spotlight** (health + greeting), **Snapshot**, **Initiatives**;
     all with built-in fallback so the app works with no creds.
   - Removed obsolete public-CSV `googleSheets.js` / `dataSource.js`.
   - `scripts/google/`: `seed-data.mjs` (canonical), `setup-sheets.mjs`
     (service-account tab builder), `populate-sheet.gs` (one-paste Apps Script),
     `make-apps-script.mjs` (generator). `docs/google-backend-setup.md`,
     `.env.example`.
   - Created the empty Sheet in Drive:
     `BMOWA Web App — Live Data` (ID `1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4`)
     under `Malgudi Committee 2026-27 / Zero Final / BMOWA_WebApp_Live_DataSource`.

### State at end of session
- Build green, TypeScript clean. App runs locally and on Vercel with **fallback
  data** (no creds needed to function).
- The live Sheet exists but is **empty** — tooling can't write cells; population
  is a one-paste Apps Script the user runs.

### Open items / next steps (for the user, then verify)
1. **Populate the sheet:** open the Sheet → Extensions → Apps Script → paste
   `scripts/google/populate-sheet.gs` → run `populateBMOWASheet` → authorize.
   Then ask Claude to verify structure (Claude has Drive read access).
2. **GCP service account** (see `docs/google-backend-setup.md` §Step B): create
   project, enable Sheets API, make service account + JSON key, share the Sheet
   with the SA email as Editor.
3. **Env vars:** `GOOGLE_SERVICE_ACCOUNT_JSON` (+ optional `GOOGLE_SHEET_ID`) in
   `.env.local` and on Vercel; redeploy.
4. **Live round-trip test:** with the key in the worktree `.env.local`, change a
   `Spotlight` cell and have Claude confirm via the dashboard.
5. **Push:** user pushes `main` to GitHub to deploy.
6. **Future wiring:** Handbook (Drive links), Services, Events, Announcements are
   created/seeded but not yet rendering from the sheet — wire next.

### Gotchas learned
- No MCP tool can write cells/tabs to an existing Sheet; `.xlsx` base64 import via
  Drive `create_file` was rejected. Use the Apps Script populate path.
- Claude cannot change Drive sharing or handle the service-account key (secret) —
  those are user steps.

---

<!-- Add new session entries above this line. -->
