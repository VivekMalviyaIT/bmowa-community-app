/**
 * Central data source configuration for BMOWA Community App.
 * This file exports the Google Sheet ID and helper URLs for fetching community data.
 */

export const GOOGLE_SHEET_ID = '1wAHIS0PY6atezES7bCCnKTVXksOgU4Q4jJc110Zrdjw';

export const getSheetCSVUrl = (sheetName = 'Sheet1') => {
  return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
};

export const getSheetQueryUrl = (sheetName = 'Sheet1', query = 'SELECT *') => {
  return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}&tq=${encodeURIComponent(query)}`;
};

export default {
  GOOGLE_SHEET_ID,
  getSheetCSVUrl,
  getSheetQueryUrl,
};
