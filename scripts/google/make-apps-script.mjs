/**
 * Generate populate-sheet.gs (Google Apps Script) from the canonical seed data.
 * The .gs is pasted into the sheet's Apps Script editor and run once to build
 * and populate every tab — no service account needed for this step.
 *
 * Run:  node scripts/google/make-apps-script.mjs
 */
import { writeFileSync } from 'node:fs';
import { TABS } from './seed-data.mjs';

const gs = `/**
 * BMOWA Web App — one-time sheet populate.
 * HOW TO RUN:
 *   1. Open the "BMOWA Web App — Live Data" sheet.
 *   2. Extensions → Apps Script.
 *   3. Delete any sample code, paste THIS whole file, click Save.
 *   4. Select "populateBMOWASheet" in the function dropdown, click Run.
 *   5. Authorize when prompted (it only touches this spreadsheet).
 * Creates/fills tabs: ${Object.keys(TABS).join(', ')}.
 */
var TABS = ${JSON.stringify(TABS, null, 2)};

function populateBMOWASheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(TABS).forEach(function (name) {
    var def = TABS[name];
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.clearContents();
    var values = [def.header].concat(def.rows);
    sh.getRange(1, 1, values.length, def.header.length).setValues(values);
    sh.setFrozenRows(1);
  });
  // Remove the default empty "Sheet1" if it isn't one of ours.
  var d = ss.getSheetByName('Sheet1');
  if (d && !TABS['Sheet1'] && ss.getSheets().length > 1) ss.deleteSheet(d);
  SpreadsheetApp.getUi().alert('Done. Tabs: ' + Object.keys(TABS).join(', '));
}
`;

writeFileSync(new URL('./populate-sheet.gs', import.meta.url), gs);
console.log(`Wrote populate-sheet.gs (${Object.keys(TABS).length} tabs)`);
