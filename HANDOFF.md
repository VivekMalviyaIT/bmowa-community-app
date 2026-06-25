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

## 2026-06-25 — Wire every page to the sheet + reconcile seed data

**Branch:** `claude/gallant-ramanujan-b120a2` (worktree). Build green, TS clean,
verified in browser with fallback data. **Not merged, not pushed.**

### Decision
User confirmed: **keep the service-account backend** (current design) — sheet
stays private; live edits reflect in the app. The only irreducible user steps
are the ones Google requires a human for (make the service account + key, share
the sheet). Everything else is now done in code.

### What was done (all autonomous — no creds needed)
1. **Wired the remaining pages to the sheet** (previously hardcoded), each with a
   built-in fallback so the app still renders with no creds:
   - **Announcements** (home) — `AnnouncementList.tsx` now fetches the
     `Announcements` tab (client). Column `tone` → **`priority`** (high/medium/low).
   - **Snapshot → Active Operational Gaps** — now reads `Snapshot_Gaps`
     (the stat cards were already wired).
   - **Handbook** — converted to an **async server component** reading `Handbook`
     (`details` split on ` | `; optional `driveUrl` renders an "Open document →" link).
   - **Services** — converted to an **async server component** reading `Services`
     (kept category grouping + the Operational/Degraded/Down summary bar).
   - **Events** — converted to an **async server component** reading `Events`.
     Columns now `title, date, time, location, spots` (was location/spots/formUrl/desc).
   - Result: `/handbook`, `/services`, `/events`, `/initiatives` are now `ƒ`
     (dynamic, re-read per request); home + snapshot fetch client-side.
2. **Reconciled `scripts/google/seed-data.mjs`** so each tab is an **exact mirror**
   of what every page currently displays (Announcements ×5, Initiatives ×5,
   Services ×9, Events ×4 with time/spots, Handbook details). Previously the seed
   was thinner/stale — populating would have *removed* live content. Fixed.
3. **Regenerated `scripts/google/populate-sheet.gs`** from the new seed
   (`node scripts/google/make-apps-script.mjs`).
4. Added `.claude/launch.json` (preview config; gitignored under `.claude/`).

### State at end of session
- Sheet `BMOWA Web App — Live Data`
  (`1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4`) is **still empty** — populating
  needs a write credential (see below).
- App is fully sheet-driven with identical fallbacks → looks unchanged until the
  sheet is populated, then the sheet becomes the single source of truth.

### Remaining steps — USER must do these (Google requires a human)
These are the *only* things blocking go-live; do them once, in order:
1. **GCP service account + JSON key** — `docs/google-backend-setup.md` §1
   (create project → enable Sheets API → service account → JSON key).
2. **Share the sheet** with the service-account email as **Editor** — §2.
3. **`.env.local`** in this worktree: copy `.env.example`, paste the whole JSON
   into `GOOGLE_SERVICE_ACCOUNT_JSON` (one line) — §3.
4. **Populate the sheet** (one command, also acts as the round-trip test):
   `node --env-file=.env.local scripts/google/setup-sheets.mjs`
   *(Alternative, no key needed: paste `scripts/google/populate-sheet.gs` into the
   sheet's Apps Script editor and run `populateBMOWASheet`.)*
5. **Vercel env vars** — add `GOOGLE_SERVICE_ACCOUNT_JSON` (+ optional
   `GOOGLE_SHEET_ID`) in Project → Settings → Environment Variables, redeploy.
6. **Verify live:** edit a `Spotlight`/`Services`/`Events` cell, refresh → it changes.

After step 4, ask Claude to verify the sheet structure (Claude has Drive read).

### Gotchas (unchanged)
- No MCP tool can write cells to the existing sheet, and Claude can't handle the
  secret key or change Drive sharing — those stay user steps. The populate is a
  single command/script once the credential exists.

---

## 2026-06-25 (cont.) — Backend live, favicon, migration doc

- **Backend is LIVE in production.** User created the GCP service account + key,
  shared the sheet, added `GOOGLE_SERVICE_ACCOUNT_JSON` to Vercel, and pushed
  commit `a60b891` (this session's full page-wiring). Verified: editing the sheet
  reflects on the live Vercel site. Sheet `1_wVJu9SgyuJN97K-…` is populated (all 9
  tabs) — done via `setup-sheets.mjs` with the real credential.
  - `GOOGLE_SHEET_ID` is NOT set on Vercel; code default covers it (fine).
  - A flattened (one-line) `.env.local` lives in this worktree (gitignored) for
    local live-data dev.
- **Favicon added.** Cropped the red Malgudi emblem out of `public/malgudi-logo.png`
  (sharp) into App-Router icon files: `src/app/icon.png` (256, transparent),
  `src/app/apple-icon.png` (180), `src/app/favicon.ico` (32). Next auto-emits the
  `<link rel=icon>` tags; verified all three serve 200 locally. Tab now shows the crest.
- **New doc:** `docs/migration-to-new-account.md` — full runbook for moving Google
  account + Drive/Sheet + GCP SA + GitHub + Vercel to a fresh account. Key point:
  code never changes, only the two env vars (`GOOGLE_SERVICE_ACCOUNT_JSON`,
  `GOOGLE_SHEET_ID`); transferring sheet ownership keeps the same ID.

---

## 2026-06-25 (cont.) — Default theme = Cream, selector reorder + footer dock

Three UI tweaks (verified in browser at 1280px and mobile), then full cleanup.

1. **Cream is now the default theme** (was Editorial). Server renders
   `<html data-theme="cream">` (`layout.tsx`); `ThemeProvider` default + context
   value are `'cream'`. The no-flash script still applies a returning visitor's
   saved choice pre-paint. Editorial/Aubergine still selectable; switching +
   persistence verified.
2. **Selector order is Cream → Aubergine → Editorial** (`ThemeSelector.tsx`
   `OPTIONS`).
3. **Selector docked into the sidebar footer** on the same line as
   "Established 2026" (switcher left, imprint right). `ThemeSelector` is now a
   `relative` inline element (was `fixed`); `Sidebar.tsx` renders it in a
   `flex justify-between` footer; `layout.tsx` keeps a separate `lg:hidden` fixed
   instance for mobile. Popover width trimmed to `w-48` so it never clips inside
   the sidebar's `overflow:hidden`.

Docs: `PRODUCT.md` §3 updated (default + order + dock). `CLAUDE.md` "When you
finish a session" made explicit — HANDOFF mandatory every session, PRODUCT.md
only on product changes.

**Cleanup done at end of session:** committed to the branch, fast-forwarded into
local `main`, then **removed the git worktree and deleted the
`claude/gallant-ramanujan-b120a2` branch** — locally only `main` remains, no
worktrees. Nothing pushed (user pushes `main` to GitHub manually → Vercel).

---

<!-- Add new session entries above this line. -->
