/**
 * Canonical tab structure + seed data for the BMOWA live-data Google Sheet.
 * Shared by:
 *   - setup-sheets.mjs       (service-account: create/seed tabs in place)
 *   - make-apps-script.mjs   (generates populate-sheet.gs for the no-creds path)
 *
 * IMPORTANT: these rows must mirror exactly what each page renders as its
 * built-in fallback, so populating the sheet never changes the live UI — it
 * just moves the same content into an editable source. When you change a
 * page's fallback, change the matching rows here too.
 */

export const TABS = {
  // Home → Community Health cards + the welcome greeting (welcome_status row).
  Spotlight: {
    header: ['key', 'title', 'value', 'subtitle', 'progress', 'color', 'icon'],
    rows: [
      ['water_supply', 'Water Supply', '80k L', 'of 100k Litres capacity', '80', 'blue', '💧'],
      ['security_staff', 'Security Staff', '12 Guards', 'All positions covered', '100', 'purple', '🛡️'],
      ['lift_uptime', 'Lift Uptime', '99.95%', 'Last 30 days average', '99.95', 'emerald', '🛗'],
      ['welcome_status', '', 'Everything is running smoothly today ✓', '', '', '', ''],
    ],
  },
  // Home → Announcements list. `priority` drives the badge colour (high/medium/low).
  Announcements: {
    header: ['title', 'desc', 'date', 'category', 'priority'],
    rows: [
      ['Monthly Maintenance Scheduled', 'Water tank cleaning and lift servicing will be conducted this Saturday from 8 AM to 2 PM.', '2 Jun 2026', 'Maintenance', 'high'],
      ['New Gym Equipment Arrived', 'The community gym has been upgraded with new treadmills and weight stations. Open for all residents.', '1 Jun 2026', 'Amenities', 'medium'],
      ['Annual General Meeting', 'AGM scheduled for June 15th at 6 PM in the community hall. All homeowners requested to attend.', '30 May 2026', 'Meeting', 'high'],
      ['Parking Zone Repainted', 'Basement parking zones have been repainted. Please park in your designated slot only.', '28 May 2026', 'Notice', 'low'],
      ['Summer Camp for Kids', 'Registrations open for the community summer camp. Activities include art, sports, and coding.', '26 May 2026', 'Events', 'medium'],
    ],
  },
  // Snapshot → infrastructure stat cards.
  Snapshot: {
    header: ['label', 'value', 'detail', 'icon', 'accent'],
    rows: [
      ['Water Sump', '80,000L', 'of 100kL Capacity', '💧', 'text-accent-slate'],
      ['CCTV Cameras', '27 – 45', 'HiKVision Stack', '📹', 'text-accent-warm'],
      ['Security Staff', '12 Guards', '24/7 Day & Night shifts', '🛡️', 'text-accent-sage'],
      ['Lift Availability', '99.95%', 'May Maintenance Report', '🛗', 'text-accent-rose'],
    ],
  },
  // Snapshot → "Active Operational Gaps". severity = red | amber.
  Snapshot_Gaps: {
    header: ['text', 'severity'],
    rows: [
      ['5 CCTV cameras currently non-operational since Nov 2024.', 'red'],
      ['CCTV Storage limited to 5 days (Target: 15+ days).', 'red'],
      ['BMOWA Registration expired since FY 2019-20. Renewal in progress.', 'amber'],
    ],
  },
  // Initiatives → improvement projects. color = amber|slate|sage|red|rose.
  Initiatives: {
    header: ['title', 'status', 'description', 'progress', 'color', 'recommendation'],
    rows: [
      ['Project Kaveri — Rainwater Harvesting', 'On Hold', 'Rainwater harvesting system to recharge borewells and reduce dependency on tanker water. Requires resident consensus and BBMP NOC.', '15', 'amber', 'Pending resident vote & budget approval'],
      ['STP Upgrade — ECO STP', 'Recommended', 'Current STP is outdated. ECO STP recommended for better efficiency, lower maintenance, and compliance with KSPCB norms.', '10', 'slate', 'ECO STP recommended — vendor evaluation in progress'],
      ['CCTV System Overhaul', 'Urgent', '5 out of 16 cameras are non-functional. Storage capacity only 5 days vs recommended 30 days. Full system upgrade needed.', '30', 'red', 'Immediate repair + NVR upgrade for 30-day storage'],
      ['Society Re-Registration', 'Pending', 'BMOWA registration expired in FY 2019-20. Re-registration with Karnataka Societies Act required for legal standing.', '5', 'red', 'Engage legal counsel for re-registration process'],
      ['Water Quality Monitoring', 'Active', '6-step water purification process in place: Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing.', '80', 'sage', 'Quarterly testing schedule established'],
    ],
  },
  // Handbook → SOP cards. `details` is a single cell, items separated by " | ".
  Handbook: {
    header: ['title', 'icon', 'description', 'driveUrl', 'details'],
    rows: [
      ['Odd-Even Parking Rule', '🅿️', 'Ensuring smooth lane transit flow.', '', 'Schedule: One row parks on Even days, opposite row on Odd days. | Opposite houses cannot park on the same day. | Violations are logged and penalized via MyGate.'],
      ['6-Step Water Process', '💧', 'How your water is treated and softened.', '', '1. V-Pipe Primary Filtration (sediment removal) | 2. Settlement in External White Sintex Tanks | 3. Softening Phase 1 (Electrolysis Anode/Cathode) | 4. 100kL Main Sump Collection | 5. Softening Phase 2 (Big Tube Softeners) | 6. Final Cleansing (Wall-mounted tubes)'],
      ['Resident Onboarding', '📦', 'Welcome to BlueJay Malgudi.', '', 'Report builder handover to Association office. | Submit ownership/rental docs for MyGate activation. | Orientation on waste segregation & parking rules.'],
      ['Facility Guidelines', '🏊', 'Gym, Pool, and Clubhouse rules.', '', 'Pool: Maintained at 31-32°C. Mandatory shower. | Gym: No footwear. Wipe equipment after use. | Clubhouse: Residents only. Book 7 days in advance.'],
    ],
  },
  // Services → status grid grouped by category. status = operational|degraded|down.
  Services: {
    header: ['title', 'icon', 'status', 'category', 'details'],
    rows: [
      ['Water Supply — 6-Step Process', '💧', 'operational', 'Infrastructure', 'Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing'],
      ['Borewell System', '🕳️', 'operational', 'Infrastructure', '3 active borewells • Regular yield monitoring'],
      ['CCTV Surveillance', '📹', 'degraded', 'Security', '11/16 cameras active • 5 down • 5-day storage only'],
      ['Security Staff', '🛡️', 'operational', 'Security', '24/7 security at main gate • Patrol rounds every 2 hours'],
      ['STP (Sewage Treatment)', '♻️', 'degraded', 'Infrastructure', 'Current STP operational but outdated • ECO STP upgrade recommended'],
      ['Housekeeping', '🧹', 'operational', 'Maintenance', 'Daily common area cleaning • Staircase cleaning alternate days'],
      ['Electrical Maintenance', '⚡', 'operational', 'Maintenance', 'On-call electrician • DG backup for common areas'],
      ['Plumbing Services', '🔧', 'operational', 'Maintenance', 'On-call plumber • Emergency response within 30 mins'],
      ['Waste Management', '🗑️', 'operational', 'Infrastructure', 'Wet & dry segregation • BBMP pickup daily'],
    ],
  },
  // Events → upcoming community events.
  Events: {
    header: ['title', 'date', 'time', 'location', 'spots'],
    rows: [
      ['Summer Camp for Kids', 'Jun 10–20', '9:00 AM – 12:00 PM', 'Community Hall', '8 spots left'],
      ['Annual General Meeting', 'Jun 15', '6:00 PM – 8:00 PM', 'Clubhouse', 'All welcome'],
      ['Yoga & Meditation', 'Every Sunday', '6:30 AM – 7:30 AM', 'Garden Area', 'Open'],
      ['Movie Night', 'Jun 22', '7:00 PM', 'Terrace', '25 spots left'],
    ],
  },
  // WRITE target for the feedback form — private, header only.
  Feedback_Responses: {
    header: ['timestamp', 'referenceId', 'name', 'flatNumber', 'category', 'subject', 'details', 'priority', 'status'],
    rows: [],
  },
};
