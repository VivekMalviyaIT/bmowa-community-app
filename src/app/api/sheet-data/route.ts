import { NextRequest, NextResponse } from 'next/server';
import { getTab } from '@/lib/sheets.server';
import { TABS } from '@/config/sheetConfig';

// Runs at request time (reads the private sheet via the service account).
export const dynamic = 'force-dynamic';

// Only these tabs may be read through the public API route (the feedback
// responses tab is intentionally NOT exposed here).
const READABLE = new Set([
  TABS.spotlight,
  TABS.announcements,
  TABS.snapshot,
  TABS.snapshotGaps,
  TABS.initiatives,
  TABS.handbook,
  TABS.services,
  TABS.events,
]);

export async function GET(request: NextRequest) {
  const tab = request.nextUrl.searchParams.get('tab') || TABS.spotlight;

  if (!READABLE.has(tab)) {
    return NextResponse.json(
      { success: false, data: [], error: 'Unknown or non-readable tab.' },
      { status: 400 }
    );
  }

  const data = await getTab(tab);
  // Always 200 with data (possibly empty) so the client can fall back cleanly.
  return NextResponse.json(
    { success: true, tab, data },
    { headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' } }
  );
}
