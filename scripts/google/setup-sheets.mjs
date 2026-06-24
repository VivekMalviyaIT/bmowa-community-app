/**
 * One-time setup: build all tabs in the live-data Google Sheet and seed them
 * with the dashboard's current values.
 *
 * Prereqs (see docs/google-backend-setup.md):
 *   - A Google Cloud service account with the Sheets API enabled.
 *   - The sheet shared with the service-account email as Editor.
 *   - .env.local containing GOOGLE_SERVICE_ACCOUNT_JSON and GOOGLE_SHEET_ID.
 *
 * Run (Node 20.6+):
 *   node --env-file=.env.local scripts/google/setup-sheets.mjs
 *
 * Idempotent: tabs that already exist are left untouched (your edits are safe);
 * only missing tabs are created and seeded.
 */

import { JWT } from 'google-auth-library';
import { TABS } from './seed-data.mjs';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const RAW = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

if (!SHEET_ID || !RAW) {
  console.error('Missing GOOGLE_SHEET_ID or GOOGLE_SERVICE_ACCOUNT_JSON. See docs/google-backend-setup.md.');
  process.exit(1);
}

const creds = JSON.parse(RAW);
if (creds.private_key?.includes('\\n')) creds.private_key = creds.private_key.replace(/\\n/g, '\n');

const auth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function api(path, method = 'GET', body) {
  const { token } = await auth.getAccessToken();
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status} ${await res.text()}`);
  return res.json();
}

async function main() {
  console.log(`Connecting to sheet ${SHEET_ID} as ${creds.client_email} ...`);
  const meta = await api(SHEET_ID);
  const existing = new Map(meta.sheets.map((s) => [s.properties.title, s.properties.sheetId]));
  console.log(`Existing tabs: ${[...existing.keys()].join(', ') || '(none)'}`);

  // 1) Create any missing tabs.
  const toCreate = Object.keys(TABS).filter((t) => !existing.has(t));
  if (toCreate.length) {
    await api(`${SHEET_ID}:batchUpdate`, 'POST', {
      requests: toCreate.map((title) => ({ addSheet: { properties: { title } } })),
    });
    console.log(`Created tabs: ${toCreate.join(', ')}`);
  }

  // 2) Seed header + rows for the tabs we just created.
  for (const title of toCreate) {
    const { header, rows } = TABS[title];
    const values = [header, ...rows];
    await api(
      `${SHEET_ID}/values/${encodeURIComponent(title)}!A1?valueInputOption=USER_ENTERED`,
      'PUT',
      { values }
    );
    console.log(`Seeded ${title} (${rows.length} rows)`);
  }

  // 3) Remove the default empty "Sheet1" if present and not one of ours.
  if (existing.has('Sheet1') && !TABS['Sheet1']) {
    await api(`${SHEET_ID}:batchUpdate`, 'POST', {
      requests: [{ deleteSheet: { sheetId: existing.get('Sheet1') } }],
    });
    console.log('Removed default "Sheet1".');
  }

  console.log('\n✅ Done. The dashboard will now read these tabs live.');
}

main().catch((e) => {
  console.error('\n❌ Setup failed:', e.message);
  process.exit(1);
});
