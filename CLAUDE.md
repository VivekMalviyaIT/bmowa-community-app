# CLAUDE.md — BlueJay Malgudi Community App

Instructions for Claude working in this repository. Read this first, then
[`PRODUCT.md`](PRODUCT.md) for the full product picture and
[`HANDOFF.md`](HANDOFF.md) for what previous sessions did.

## What this is
A resident web app for **BlueJay Malgudi** (a gated villa community; owners'
association = **BMOWA**). It presents as an editorial "Community Journal":
Spotlight, Snapshot, Initiatives, Handbook, Services, Events, Feedback.

## Tech stack
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`)
- **Framer Motion** for animation
- **google-auth-library** for the Google Sheets backend (service account)
- Deploys on **Vercel** (serverless — NOT a static export, see below)

## Run / build
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run before merging)
```

## Architecture conventions — follow these
- **Theming = CSS variables + `data-theme` on `<html>`.** Three designs:
  `editorial` (default), `cream`, `aubergine`. All values live in
  `src/app/globals.css` (`:root` = editorial; `:root[data-theme="..."]`
  override the same variable *names*). Components read variables / Tailwind
  utilities (`text-foreground`, `bg-card-bg`, `--nav-active-bg`, …) — **never
  hardcode a color** that should follow the theme. Full reference:
  `docs/design/`.
  - `ThemeProvider.tsx` (context + localStorage), `ThemeSelector.tsx` (the
    low-profile bottom-left switcher), no-flash inline script in `layout.tsx`.
  - `<html>` and `<body>` carry `suppressHydrationWarning` (theme attr +
    browser-extension attrs). Keep them.
- **Data backend = a PRIVATE Google Sheet via a service account.**
  - `src/lib/sheets.server.js` is **server-only** (`import 'server-only'`).
    **Never import it from a client component** — it reads
    `GOOGLE_SERVICE_ACCOUNT_JSON`. Client pages fetch `/api/sheet-data?tab=`
    via `src/lib/sheetClient.ts`.
  - Tabs/config: `src/config/sheetConfig.js`. Feedback writes to the private
    `Feedback_Responses` tab (never exposed via the read API).
  - **Every read fails soft to built-in defaults** — pages must still render
    with no credentials (important for preview/first deploy). Preserve this.
  - Setup + tab structure: `docs/google-backend-setup.md`,
    `scripts/google/seed-data.mjs` (canonical), `setup-sheets.mjs`,
    `populate-sheet.gs`.
- **Do NOT re-add `output: "export"`** to `next.config.ts`. The server runtime
  is required for the service-account backend.

## Workflow preferences (the user's, honor them)
- **Work in a git worktree.** Build + **test in the browser before merging**
  (use the preview/Claude-Preview tools; verify in headed/desktop *and* mobile).
- **Merge to `main` only when the user approves** (they say "merge"). Merge is a
  **local fast-forward** into the parent repo's `main`.
- **Do NOT push.** There is a GitHub remote (`origin`), but the user pushes /
  commits manually (which triggers Vercel). Never `git push`.
- Don't commit `package-lock.json` (repo doesn't track one), `.claude/`, or
  `.env.local` (secret). `.env.example` is committed.
- Verify changes empirically (screenshots, computed styles, build) — don't claim
  done without checking.

## Deployment notes for the user
- Vercel auto-detects the Next app (serverless). Env vars:
  `GOOGLE_SERVICE_ACCOUNT_JSON` (required for live data) and optional
  `GOOGLE_SHEET_ID`. See `docs/google-backend-setup.md`.

## When you finish a session
Append a dated entry to [`HANDOFF.md`](HANDOFF.md), and update
[`PRODUCT.md`](PRODUCT.md) if the product/architecture changed.
