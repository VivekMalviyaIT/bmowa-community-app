import { NextRequest, NextResponse } from 'next/server';

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

    // Log the feedback (in production, this would write to a database or Google Sheet)
    console.log('[FEEDBACK RECEIVED]', {
      timestamp: new Date().toISOString(),
      name: name || 'Anonymous',
      flatNumber: flatNumber || 'N/A',
      category,
      subject,
      details,
      priority: priority || 'Medium',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your feedback has been recorded. The BMOWA committee will review it shortly.',
      referenceId: `FB-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
