/**
 * SERVER-ONLY Google Sheets client (service-account auth).
 *
 * Do NOT import this from a client component — it reads the service-account
 * private key from process.env.GOOGLE_SERVICE_ACCOUNT_JSON. Client components
 * must go through the /api/sheet-data route instead.
 *
 * Designed to fail soft: if credentials are missing or the API errors, reads
 * return [] and writes return false, so the UI falls back to its built-in
 * defaults rather than crashing (important for first deploy / preview).
 */

import 'server-only';
import { JWT } from 'google-auth-library';
import { SHEET_ID } from '@/config/sheetConfig';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

let cachedClient = null;

function getCredentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    const creds = JSON.parse(raw);
    // Vercel/env files sometimes store the private key with literal "\n".
    if (creds.private_key && creds.private_key.includes('\\n')) {
      creds.private_key = creds.private_key.replace(/\\n/g, '\n');
    }
    return creds;
  } catch (e) {
    console.error('[sheets] GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON:', e.message);
    return null;
  }
}

function getClient() {
  if (cachedClient) return cachedClient;
  const creds = getCredentials();
  if (!creds?.client_email || !creds?.private_key) return null;
  cachedClient = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
  });
  return cachedClient;
}

async function authHeader() {
  const client = getClient();
  if (!client) return null;
  const { token } = await client.getAccessToken();
  return token ? { Authorization: `Bearer ${token}` } : null;
}

/** Turn a 2D values array (first row = headers) into an array of row objects. */
function rowsToObjects(values) {
  if (!Array.isArray(values) || values.length < 2) return [];
  const headers = values[0].map((h) => String(h).trim());
  return values.slice(1).map((row) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] != null ? String(row[i]) : '';
    });
    return obj;
  });
}

/**
 * Read a whole tab as an array of objects keyed by the header row.
 * @param {string} tabName
 * @returns {Promise<Array<Record<string, string>>>}
 */
export async function getTab(tabName) {
  const headers = await authHeader();
  if (!headers) return [];
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
      tabName
    )}`;
    const res = await fetch(url, { headers, cache: 'no-store' });
    if (!res.ok) {
      console.error(`[sheets] read "${tabName}" failed: ${res.status}`);
      return [];
    }
    const data = await res.json();
    return rowsToObjects(data.values);
  } catch (e) {
    console.error(`[sheets] read "${tabName}" error:`, e.message);
    return [];
  }
}

/**
 * Append a single row (array of cell values) to a tab.
 * @param {string} tabName
 * @param {Array<string|number>} rowValues
 * @returns {Promise<boolean>} true on success
 */
export async function appendRow(tabName, rowValues) {
  const headers = await authHeader();
  if (!headers) return false;
  try {
    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/` +
      `${encodeURIComponent(tabName)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [rowValues] }),
    });
    if (!res.ok) {
      console.error(`[sheets] append "${tabName}" failed: ${res.status}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error(`[sheets] append "${tabName}" error:`, e.message);
    return false;
  }
}

/** True when a service-account key is configured (used for status/debug). */
export function isConfigured() {
  return !!getClient();
}
