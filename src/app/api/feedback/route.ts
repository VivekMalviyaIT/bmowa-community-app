import { NextRequest, NextResponse } from 'next/server';
import { appendRow, isConfigured } from '@/lib/sheets.server';
import { TABS } from '@/config/sheetConfig';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { category, subject, details, priority, flatNumber, name } = body;

    if (!category || !subject || !details) {
      return NextResponse.json(
        { success: false, error: 'Category, subject, and details are required.' },
        { status: 400 }
      );
    }

    const referenceId = `FB-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Append to the private Feedback_Responses tab. Column order MUST match the
    // header row created by scripts/google/setup-sheets.mjs.
    const row = [
      timestamp,
      referenceId,
      name || 'Anonymous',
      flatNumber || 'N/A',
      category,
      subject,
      details,
      priority || 'Medium',
      'New', // Status column for the committee to triage
    ];

    if (isConfigured()) {
      const ok = await appendRow(TABS.feedback, row);
      if (!ok) {
        // Don't lose the resident's submission silently — log it for recovery.
        console.error('[FEEDBACK] sheet append failed; payload:', row);
        return NextResponse.json(
          { success: false, error: 'Could not record feedback right now. Please try again shortly.' },
          { status: 502 }
        );
      }
    } else {
      // Backend not configured yet (e.g. local without creds) — log so nothing
      // is lost, and still confirm to the resident.
      console.log('[FEEDBACK RECEIVED — sheet not configured]', row);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your feedback has been recorded. The BMOWA committee will review it shortly.',
      referenceId,
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
