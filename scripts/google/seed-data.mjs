/**
 * Canonical tab structure + seed data for the BMOWA live-data Google Sheet.
 * Shared by:
 *   - build-xlsx.mjs       (one-time: build the initial populated sheet)
 *   - setup-sheets.mjs     (service-account: create/seed tabs in place)
 * Mirrors the values the dashboard currently shows so the sheet matches the UI.
 */

export const TABS = {
  Spotlight: {
    header: ['key', 'title', 'value', 'subtitle', 'progress', 'color', 'icon'],
    rows: [
      ['water_supply', 'Water Supply', '80k L', 'of 100k Litres capacity', '80', 'blue', '💧'],
      ['security_staff', 'Security Staff', '12 Guards', 'All positions covered', '100', 'purple', '🛡️'],
      ['lift_uptime', 'Lift Uptime', '99.95%', 'Last 30 days average', '99.95', 'emerald', '🛗'],
      ['welcome_status', '', 'Everything is running smoothly today ✓', '', '', '', ''],
    ],
  },
  Announcements: {
    header: ['title', 'desc', 'date', 'category', 'tone'],
    rows: [
      ['Monthly Maintenance Scheduled', 'Water tank cleaning and lift servicing this Saturday, 8 AM – 2 PM.', '2 Jun 2026', 'Maintenance', 'danger'],
      ['New Gym Equipment Arrived', 'New treadmills and weight stations now open for all residents.', '1 Jun 2026', 'Amenities', 'warning'],
      ['Annual General Meeting', 'AGM on June 15th at 6 PM in the community hall. All homeowners welcome.', '30 May 2026', 'Meeting', 'danger'],
      ['Parking Zones Repainted', 'Basement zones repainted — please park in your designated slot only.', '28 May 2026', 'Notice', 'success'],
    ],
  },
  Snapshot: {
    header: ['label', 'value', 'detail', 'icon', 'accent'],
    rows: [
      ['Water Sump', '80,000L', 'of 100kL Capacity', '💧', 'text-accent-slate'],
      ['CCTV Cameras', '27 – 45', 'HiKVision Stack', '📹', 'text-accent-warm'],
      ['Security Staff', '12 Guards', '24/7 Day & Night shifts', '🛡️', 'text-accent-sage'],
      ['Lift Availability', '99.95%', 'May Maintenance Report', '🛗', 'text-accent-rose'],
    ],
  },
  Snapshot_Gaps: {
    header: ['text', 'severity'],
    rows: [
      ['5 CCTV cameras currently non-operational since Nov 2024.', 'red'],
      ['CCTV Storage limited to 5 days (Target: 15+ days).', 'red'],
      ['BMOWA Registration expired since FY 2019-20. Renewal in progress.', 'amber'],
    ],
  },
  Initiatives: {
    header: ['title', 'status', 'description', 'progress', 'color', 'recommendation'],
    rows: [
      ['Project Kaveri — Rainwater Harvesting', 'On Hold', 'Rainwater harvesting system to recharge borewells and reduce dependency on tanker water. Requires resident consensus and BBMP NOC.', '15', 'amber', ''],
      ['CCTV Upgrade & Storage Extension', 'Active', 'Replace 5 non-operational cameras and extend storage from 5 to 15+ days.', '40', 'slate', 'Prioritise gate & basement coverage'],
      ['BMOWA Registration Renewal', 'Urgent', 'Renew the association registration lapsed since FY 2019-20.', '60', 'red', 'File with Registrar this quarter'],
      ['STP & Water Softening Audit', 'Active', '6-step water purification process in place: Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing.', '80', 'sage', 'Quarterly testing schedule established'],
    ],
  },
  Handbook: {
    header: ['title', 'icon', 'description', 'driveUrl', 'details'],
    rows: [
      ['Odd-Even Parking Rule', '🅿️', 'Ensuring smooth lane transit flow.', '', 'One row parks on Even days, opposite row on Odd days. | Opposite houses cannot park on the same day. | Violations are logged and penalized via MyGate.'],
      ['6-Step Water Process', '💧', 'How your water is treated and softened.', '', 'V-Pipe Primary Filtration | Settlement in External White Sintex Tanks | Softening Phase 1 (Electrolysis) | 100kL Main Sump Collection | Softening Phase 2 (Big Tube Softeners) | Final Cleansing (Wall-mounted tubes)'],
      ['Resident Onboarding', '📦', 'Welcome to BlueJay Malgudi.', '', 'Report builder handover to Association office. | Submit ownership/rental docs for MyGate activation. | Orientation on waste segregation & parking rules.'],
      ['Facility Guidelines', '🏊', 'Gym, Pool, and Clubhouse rules.', '', 'Pool: Maintained at 31-32°C. Mandatory shower. | Gym: No footwear. Wipe equipment after use. | Clubhouse: Residents only. Book 7 days in advance.'],
    ],
  },
  Services: {
    header: ['title', 'icon', 'status', 'category', 'details'],
    rows: [
      ['Water Supply', '💧', 'operational', 'Utilities', '24/7 supply via 100kL sump; tanker backup on standby.'],
      ['Security & CCTV', '🛡️', 'degraded', 'Safety', '12 guards across day/night; 5 cameras under repair.'],
      ['Lifts', '🛗', 'operational', 'Utilities', '99.95% uptime; AMC active.'],
      ['Housekeeping', '🧹', 'operational', 'Facilities', 'Daily common-area cleaning; waste segregation enforced.'],
    ],
  },
  Events: {
    header: ['title', 'date', 'location', 'spots', 'formUrl', 'description'],
    rows: [
      ['Annual General Meeting', '15 Jun 2026', 'Community Hall', '', '', 'AGM at 6 PM. All homeowners welcome.'],
      ['Summer Pool Party', '22 Jun 2026', 'Clubhouse Pool', '40', '', 'Residents and family. RSVP via the form.'],
    ],
  },
  // WRITE target for the feedback form — private, header only.
  Feedback_Responses: {
    header: ['timestamp', 'referenceId', 'name', 'flatNumber', 'category', 'subject', 'details', 'priority', 'status'],
    rows: [],
  },
};
