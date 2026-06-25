# Migrating the BMOWA Community App to a New Account (Google + GitHub + Vercel)

A complete, end-to-end runbook for moving the whole app — Google Sheet/Drive,
the Google Cloud service account, the GitHub repo, and the Vercel hosting — to a
**different Google account** (and new GitHub + Vercel sign-ups).

---

## 0. What you're actually moving — the 4 pieces

| Piece | Today | What changes |
|---|---|---|
| **The Google Sheet + Drive** | `BMOWA Web App — Live Data`, ID `1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4`, in `Malgudi Committee 2026-27 / Zero Final / BMOWA_WebApp_Live_DataSource` | Lives in the **new** account's Drive |
| **The GCP service account** | Project `bmowa-web-app`, SA `bmowa-web-app@bmowa-web-app.iam.gserviceaccount.com` + JSON key | New project + new SA + **new JSON key** on the new account |
| **The code** | GitHub `VivekMalviyaIT/bmowa-community-app` | New account's GitHub repo |
| **The hosting** | Vercel project (old login) | New Vercel account, new project |

**The single most important fact:** the app finds its data using **two
environment variables** — `GOOGLE_SERVICE_ACCOUNT_JSON` (the key) and
`GOOGLE_SHEET_ID` (which sheet). **The code itself does not need to change.** If
the new sheet has a different ID than the old one, you just set `GOOGLE_SHEET_ID`
to the new value. That's the whole trick.

**Before you start, have ready:**
- The new Gmail / Google account, created and logged in.
- A decision on the **sheet strategy** (Phase A — three options; Option 1 is recommended).

---

## Phase A — Move the Google Sheet to the new account

Three ways, differing only in whether the sheet keeps its **ID** and its
**current data**. Pick one.

### ✅ Option 1 — Transfer ownership (recommended: same ID + all current data)
The sheet ID never changes, so you won't need to touch `GOOGLE_SHEET_ID` at all.
1. **Old account:** open the sheet → **Share** → add the **new Gmail** → role **Editor** → Send.
2. **Old account:** in the Share box, click the dropdown next to the new person → **Transfer ownership** → confirm.
3. **New account:** check inbox → **Accept** the ownership transfer.
4. **New account:** the sheet now appears in its Drive. Create a folder (**Drive → New → Folder**) and move the sheet into it.
5. **Old account:** optionally remove yourself from sharing.
   → **Sheet ID stays `1_wVJu9SgyuJN97K-…`. Skip the `GOOGLE_SHEET_ID` change later.**

### Option 2 — Make a copy into the new Drive (new ID, keeps current data)
1. **Old account:** share the sheet with the **new Gmail** as **Editor**.
2. **New account:** open it → **File → Make a copy** → save into the new account's Drive (create the destination folder first).
3. The copy has a **new sheet ID** — copy it from the URL (the part between `/d/` and `/edit`). You'll need it for `GOOGLE_SHEET_ID`.

### Option 3 — Fresh blank sheet + repopulate from code (new ID, resets to seed data)
*Only if you're fine losing edits made since, and want a clean structure.*
1. **New account:** **Drive → New → Folder** (e.g. `BMOWA_WebApp_Live_DataSource`), then inside it **New → Google Sheets**. Name it `BMOWA Web App — Live Data`.
2. Copy its **new sheet ID** from the URL.
3. It gets populated by the script in Phase E once the new service account exists.

### Either way — share with your team
Once the sheet is in the new account, **Share** it with committee members' Gmail
addresses as **Editor** so they can keep editing. (Normal Google sharing —
separate from the service account.)

---

## Phase B — Create the new service account (new account's GCP)

Same one-time setup as the original, on the new account.

1. Go to <https://console.cloud.google.com>, signed in as the **new** account.
2. Project dropdown → **New Project** → name `bmowa-web-app` → **Create** → select it.
3. **APIs & Services → Library** → search **"Google Sheets API"** → **Enable**.
4. **APIs & Services → Credentials → + Create Credentials → Service account** → name `bmowa-web-app` → **Create and Continue** → skip roles (**Continue → Done**).
5. Click the service account → **Keys** tab → **Add Key → Create new key → JSON → Create.** A `.json` downloads. **Keep it private.**
6. Copy the service-account **email** (e.g. `bmowa-web-app@<new-project>.iam.gserviceaccount.com`).

### Share the new sheet with the new service account
7. Open the **new** sheet → **Share** → paste the **service-account email** → role **Editor** → untick "Notify" → Share. *(Editor is required so the feedback form can append rows.)*

---

## Phase C — Move the code to the new GitHub account

"Moving" the code = getting it onto the new account's GitHub. Two options.

### Option 1 — Transfer the repo (keeps history + issues)
1. **Old GitHub:** repo → **Settings → General → Danger Zone → Transfer ownership** → enter the **new username** → confirm.
2. **New GitHub:** accept the transfer.
3. **On your computer**, repoint your local clone:
   ```bash
   git remote set-url origin https://github.com/<NEW-USERNAME>/bmowa-community-app.git
   git remote -v
   ```

### Option 2 — Push to a brand-new repo (clean slate, keeps commit history)
1. **New GitHub:** create an **empty** repo `bmowa-community-app` (no README/.gitignore).
2. **On your computer:**
   ```bash
   git remote remove origin
   git remote add origin https://github.com/<NEW-USERNAME>/bmowa-community-app.git
   git push -u origin main
   ```

Either way, the local code is unchanged — you only change *where it pushes to*.

---

## Phase D — Re-host on the new Vercel account

1. Log into **Vercel** with the **new** account (sign in with the new GitHub).
2. **Add New… → Project → Import Git Repository** → authorize GitHub → select `bmowa-community-app`.
3. Framework auto-detected (**Next.js**) — leave build settings default.
4. **Before clicking Deploy, expand "Environment Variables"** and add:

   | Name | Value | Scope |
   |---|---|---|
   | `GOOGLE_SERVICE_ACCOUNT_JSON` | the **new** key file's entire contents (paste as-is; multi-line is fine on Vercel) | Production + Preview |
   | `GOOGLE_SHEET_ID` | the **new** sheet's ID — **only if you used Phase A Option 2 or 3.** With Option 1 (transfer) the ID is unchanged, so this is optional. | Production + Preview |

5. Click **Deploy** and wait ~1–2 min.

> **Why `GOOGLE_SHEET_ID` matters:** the code has a *default* sheet ID baked into
> `src/config/sheetConfig.js` (the old one). The env var overrides it. Setting the
> env var is cleaner than editing the code.

---

## Phase E — Local development on the new setup (optional but recommended)

1. In the project folder, edit `.env.local`:
   ```
   GOOGLE_SHEET_ID=<new sheet ID>
   GOOGLE_SERVICE_ACCOUNT_JSON={...the new key, all on ONE line...}
   ```
   ⚠️ **Local gotcha:** in `.env.local` the JSON **must be one line** (the local
   env loader can't parse a multi-line value). On Vercel multi-line is fine;
   locally it is not.
2. **If you used Option 3 (blank sheet), populate it now** — builds all 9 tabs from the seed data:
   ```bash
   node --env-file=.env.local scripts/google/setup-sheets.mjs
   ```
   *(Options 1 & 2 already have data — skip, or run anyway; it's idempotent.)*
3. Test locally: `npm install`, then `npm run dev` → <http://localhost:3000>.

---

## Phase F — Verify it's all connected

1. Hard-refresh the new Vercel URL (Ctrl+Shift+R).
2. Edit any cell in the **new** sheet (e.g. the `Spotlight` welcome line), wait ~60s, refresh — it should change live.
3. Submit a test entry on the **Feedback** page → confirm a new row appears in the private `Feedback_Responses` tab.

If a change doesn't show, it's almost always: (a) `GOOGLE_SHEET_ID` wrong or
missing after a copy, or (b) the new key wasn't saved on Vercel before deploying.

---

## Phase G — Decommission the old account (after everything works)

1. **Vercel (old):** delete the old project.
2. **GCP (old):** delete the old service-account key (or the whole project) — instantly disables the old credential.
3. **Drive (old):** remove sharing on the old sheet (delete it if you used Option 2/3 and no longer need it).
4. **GitHub (old):** if you transferred (Phase C Option 1), nothing to do; if you used a fresh repo, archive/delete the old one.

---

## Quick reference card

**Environment variables (all the app needs):**
- `GOOGLE_SERVICE_ACCOUNT_JSON` — the service-account key (Vercel: multi-line OK; local `.env.local`: **one line only**).
- `GOOGLE_SHEET_ID` — which sheet to read. Required if the sheet's ID changed (Phase A Option 2/3); optional if you transferred ownership (Option 1).

**Files worth knowing (no edits needed to migrate):**
- `src/config/sheetConfig.js` — the **default** sheet ID + tab names.
- `scripts/google/setup-sheets.mjs` — builds + seeds all tabs (the populate command).
- `scripts/google/seed-data.mjs` — canonical content for every tab.
- `scripts/google/populate-sheet.gs` — no-credentials alternative: paste into the sheet's Apps Script editor and run.
- `docs/google-backend-setup.md` — the original setup doc (same steps as Phases B & D).

**Golden rules:**
- The **code never needs to change** to switch accounts — only the two env vars and where the repo/host live.
- A **service account is independent of who owns the sheet** — it just needs Editor access. New account = new SA + new key + re-share.
- **Transfer ownership (Phase A, Option 1) is the least-friction path** — the sheet ID stays the same.
