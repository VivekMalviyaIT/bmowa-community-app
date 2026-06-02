/**
 * Google Sheets data fetching helper.
 * Uses the public CSV export endpoint for anonymous access.
 * Converts CSV response into an array of objects using the first row as headers.
 */

import { getSheetCSVUrl, getSheetQueryUrl } from '@/config/dataSource';

/**
 * Parse CSV text into an array of objects.
 * Handles quoted fields with commas and newlines.
 */
function parseCSV(csvText) {
  const lines = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    if (char === '"') {
      if (inQuotes && csvText[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === '\n' && !inQuotes) {
      lines.push(current);
      current = '';
    } else if (char === '\r' && !inQuotes) {
      // skip carriage return
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    lines.push(current);
  }

  const result = [];
  const splitRow = (row) => {
    const fields = [];
    let field = '';
    let insideQuotes = false;
    for (let i = 0; i < row.length; i++) {
      const c = row[i];
      if (c === '"') {
        if (insideQuotes && row[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (c === ',' && !insideQuotes) {
        fields.push(field.trim());
        field = '';
      } else {
        field += c;
      }
    }
    fields.push(field.trim());
    return fields;
  };

  if (lines.length === 0) return [];
  const headers = splitRow(lines[0]);

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = splitRow(lines[i]);
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = values[idx] || '';
    });
    result.push(obj);
  }

  return result;
}

/**
 * Fetch data from a Google Sheet tab as an array of objects.
 * @param {string} sheetName - The tab/sheet name to fetch
 * @returns {Promise<Array<Object>>} Array of row objects
 */
export async function fetchSheetData(sheetName = 'Sheet1') {
  try {
    const url = getSheetCSVUrl(sheetName);
    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes in Next.js
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data: ${response.status} ${response.statusText}`);
    }

    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error(`Error fetching sheet "${sheetName}":`, error);
    return [];
  }
}

/**
 * Fetch data using the Google Visualization Query endpoint.
 * Returns parsed JSON data from the sheet.
 * @param {string} sheetName - The tab/sheet name
 * @param {string} query - SQL-like query (e.g., "SELECT A, B WHERE C > 0")
 * @returns {Promise<Array<Object>>}
 */
export async function querySheetData(sheetName = 'Sheet1', query = 'SELECT *') {
  try {
    const url = getSheetQueryUrl(sheetName, query);
    const response = await fetch(url, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to query sheet: ${response.status}`);
    }

    const text = await response.text();
    // The response is wrapped in google.visualization.Query.setResponse(...)
    const jsonStr = text.replace(/^[^(]*\(/, '').replace(/\);?\s*$/, '');
    const data = JSON.parse(jsonStr);

    if (!data.table || !data.table.rows) return [];

    const headers = data.table.cols.map((col) => col.label || col.id);
    return data.table.rows.map((row) => {
      const obj = {};
      row.c.forEach((cell, idx) => {
        obj[headers[idx]] = cell ? cell.v : '';
      });
      return obj;
    });
  } catch (error) {
    console.error(`Error querying sheet "${sheetName}":`, error);
    return [];
  }
}

export default { fetchSheetData, querySheetData, parseCSV };
