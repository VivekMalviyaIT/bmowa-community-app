# Live Data Backend — Google Sheets (Service Account)

The dashboard reads its content from a **private Google Sheet** and writes
feedback submissions back to it, authenticated by a Google Cloud **service
account**. Nothing is public; the key lives only in a server-side environment
variable and is never sent to the browser.

- **Sheet:** `BMOWA Web App — Live Data`
  (`Malgudi Committee 2026-27 / Zero Final / BMOWA_WebApp_Live_DataSource`)
  ID: `1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4`
- **Reads:** server route `GET /api/sheet-data?tab=<Tab>` → `src/lib/sheets.server.js`
- **Writes:** `POST /api/feedback` appends to the private `Feedback_Responses` tab
- **Deploy model:** the app is a normal Next.js app on Vercel (serverless). It is
  **no longer a static export** — that change is required so the server can hold
  the key and call the Sheets API.

Until the steps below are complete, every page **falls back to its built-in
values**, so the site keeps working with nothing configured.

---

## One-time setup

### 1. Create a service account + key (Google Cloud Console)
1. Go to <https://console.cloud.google.com> → create (or pick) a project.
2. **APIs & Services → Library →** enable **Google Sheets API**.
3. **APIs & Services → Credentials → Create credentials → Service account.**
   Name it e.g. `bmowa-web-app`. No roles needed. Create.
4. Open the service account → **Keys → Add key → Create new key → JSON.** A
   `.json` file downloads. **Keep it secret.**
5. Note the service-account **email** (looks like
   `bmowa-web-app@<project>.iam.gserviceaccount.com`).

### 2. Share the sheet with the service account
Open the [sheet](https://docs.google.com/spreadsheets/d/1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4/edit)
→ **Share** → paste the service-account email → role **Editor** → Send.
(Editor is required so the feedback form can append rows.)

### 3. Configure local env
1. Copy `.env.example` to `.env.local`.
2. Set `GOOGLE_SERVICE_ACCOUNT_JSON` to the **entire** contents of the JSON key
   file, on one line. (Tip: open the file, copy everything, paste as the value.)
3. `GOOGLE_SHEET_ID` is already defaulted; leave as-is unless using another sheet.

### 4. Build the tabs (one command)
Requires Node 20.6+ (for `--env-file`):
```bash
node --env-file=.env.local scripts/google/setup-sheets.mjs
```
This creates and seeds all tabs: `Spotlight`, `Announcements`, `Snapshot`,
`Snapshot_Gaps`, `Initiatives`, `Handbook`, `Services`, `Events`, and the private
`Feedback_Responses`. It is **idempotent** — re-running won't overwrite tabs you've
edited; it only adds missing ones.

### 5. Run locally and verify
```bash
npm run dev
```
Open the dashboard — values now come from the sheet. Edit a cell in the
`Spotlight` tab (e.g. change `80k L`) and refresh the home page; it updates.

---

## Vercel (production)

Add these in **Vercel → Project → Settings → Environment Variables** (Production
+ Preview), then redeploy:

| Name | Value |
|---|---|
| `GOOGLE_SERVICE_ACCOUNT_JSON` | the entire JSON key, one line (same as `.env.local`) |
| `GOOGLE_SHEET_ID` | `1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4` (optional; defaulted in code) |

No other env vars are needed. Reads are cached ~60s at the edge; sheet edits
appear within a minute (or immediately on a fresh deploy / hard refresh).

> **Heads-up:** removing `output: "export"` means Vercel now builds this as a
> serverless Next.js app (it auto-detects this — no Vercel setting to change).

---

## Tab reference (column headers)

| Tab | Columns | Used by |
|---|---|---|
| `Spotlight` | key, title, value, subtitle, progress, color, icon | Home health cards + greeting (`welcome_status` row) |
| `Announcements` | title, desc, date, category, tone | Home announcements |
| `Snapshot` | label, value, detail, icon, accent | Snapshot stats |
| `Snapshot_Gaps` | text, severity | Snapshot operational gaps |
| `Initiatives` | title, status, description, progress, color, recommendation | Initiatives |
| `Handbook` | title, icon, description, driveUrl, details (` | `-separated) | Handbook (Drive links) |
| `Services` | title, icon, status, category, details | Services |
| `Events` | title, date, location, spots, formUrl, description | Events |
| `Feedback_Responses` | timestamp, referenceId, name, flatNumber, category, subject, details, priority, status | **Write target** for the feedback form (private) |

- `color`/`accent` values map to the theme accents (`blue`/`purple`/`emerald`/`amber`, or `text-accent-*`).
- Currently wired to render live: **Spotlight** (health + greeting), **Snapshot** (stats), **Initiatives**. The remaining tabs are created/seeded and ready to be wired into their pages next.

## Notes
- **Feedback privacy:** the `Feedback_Responses` tab is write-only from the app and is **not** exposed by `/api/sheet-data`. Only people you share the sheet with can read it.
- **Rotating the key:** generate a new JSON key, update the env var locally and on Vercel, delete the old key in GCP.
- **Handbook documents:** put the Drive share link in the `driveUrl` column; keep those Drive files shared appropriately for your residents.
