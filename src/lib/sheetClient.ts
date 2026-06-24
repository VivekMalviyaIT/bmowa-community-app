/**
 * Client-side helper: fetch a sheet tab through the server API route.
 * Safe to call from 'use client' components. Returns [] on any failure so
 * callers can fall back to built-in defaults.
 */
export type SheetRow = Record<string, string>;

export async function fetchTab(tab: string): Promise<SheetRow[]> {
  try {
    const res = await fetch(`/api/sheet-data?tab=${encodeURIComponent(tab)}`);
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch {
    return [];
  }
}
