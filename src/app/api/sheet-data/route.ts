import { fetchSheetData } from '@/lib/googleSheets';
import { NextResponse } from 'next/server';

export const revalidate = 300;

export async function GET() {
  try {
    const data = await fetchSheetData('Sheet1');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return NextResponse.json({ success: false, data: [], error: 'Failed to fetch data' }, { status: 500 });
  }
}
