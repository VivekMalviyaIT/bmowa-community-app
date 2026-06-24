/**
 * Central configuration for the BMOWA live data source (Google Sheets).
 *
 * The dashboard reads from a PRIVATE Google Sheet via a Google Cloud service
 * account (see docs/google-backend-setup.md). Nothing here is secret — the
 * sheet ID is not sensitive; the service-account key lives only in the
 * server-side env var GOOGLE_SERVICE_ACCOUNT_JSON and is never bundled to the
 * client.
 */

// The live data Sheet created under
// Malgudi Committee 2026-27 / Zero Final / BMOWA_WebApp_Live_DataSource.
// Overridable via env so it can be pointed at a different sheet without a code
// change (e.g. a staging copy).
export const SHEET_ID =
  process.env.GOOGLE_SHEET_ID || '1_wVJu9SgyuJN97K-zgnYs3PWFX95gX7LOGM5ardWbF4';

// Tab (worksheet) names. Keep in sync with scripts/google/setup-sheets.mjs.
export const TABS = {
  spotlight: 'Spotlight',          // headline health metrics + welcome status
  announcements: 'Announcements',  // notices shown on Spotlight
  snapshot: 'Snapshot',            // infrastructure stats
  snapshotGaps: 'Snapshot_Gaps',   // active operational gaps
  initiatives: 'Initiatives',
  handbook: 'Handbook',            // downloadable docs (Drive links)
  services: 'Services',
  events: 'Events',
  feedback: 'Feedback_Responses',  // WRITE target for the feedback form (private)
};
