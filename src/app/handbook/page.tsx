import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';
import { fetchSheetData } from '@/lib/googleSheets';

interface HandbookSection {
  title: string;
  icon: string;
  description: string;
  details?: string[];
  highlight?: boolean;
}

const HANDBOOK_SECTIONS: HandbookSection[] = [
  {
    title: 'Parking Rules — Odd-Even System',
    icon: '🅿️',
    description: 'Stilt parking follows odd-even allocation based on flat numbers.',
    details: [
      'Odd-numbered flats: Left-side parking slots',
      'Even-numbered flats: Right-side parking slots',
      'Visitor parking: Designated slots near gate only',
      'No double parking — violators will be penalized',
      'Two-wheeler zone: Separate covered area near Block B',
    ],
    highlight: true,
  },
  {
    title: '6-Step Water Purification Process',
    icon: '💧',
    description: 'BMOWA follows a comprehensive 6-step water treatment process.',
    details: [
      'Step 1: Primary Filtration — Raw water intake screening',
      'Step 2: External Treatment — Chemical dosing & settling',
      'Step 3: Softening Stage 1 — Ion exchange softening',
      'Step 4: Main Sump Collection — Treated water storage',
      'Step 5: Softening Stage 2 — Secondary polishing',
      'Step 6: Final Cleansing — UV/chlorination before distribution',
    ],
  },
  {
    title: 'CCTV & Security',
    icon: '📹',
    description: 'Security camera coverage and monitoring details.',
    details: [
      'Total cameras installed: 16',
      '⚠️ Currently non-functional: 5 cameras',
      '⚠️ Storage capacity: 5 days (recommended: 30 days)',
      'Monitoring: 24/7 at security cabin',
      'NVR upgrade pending committee approval',
    ],
  },
  {
    title: 'Legal & Registration Status',
    icon: '⚖️',
    description: 'Society registration and compliance information.',
    details: [
      '⚠️ Registration Status: EXPIRED (FY 2019-20)',
      'Registered under: Karnataka Societies Registration Act',
      'Action needed: Re-registration with updated bylaws',
      'Impact: Cannot open new bank accounts or file legal cases',
      'Committee is engaging legal counsel for resolution',
    ],
  },
  {
    title: 'Emergency Contacts',
    icon: '🚨',
    description: 'Key contacts for emergencies within the community.',
    details: [
      'Security Cabin: Available 24/7 at main gate',
      'Plumbing Emergency: Contact facility manager',
      'Electrical Issues: Maintenance team on-call',
      'Fire: Call 101, then inform security',
      'Medical: Call 108 (Ambulance)',
    ],
  },
  {
    title: 'Amenity Booking',
    icon: '🏊',
    description: 'Community amenities and booking procedures.',
    details: [
      'Clubhouse: Book 3 days in advance',
      'Party Hall: Available weekends, deposit required',
      'Gym: Open 5:30 AM - 9:30 PM daily',
      'Swimming Pool: Seasonal (Apr-Sep)',
      'Children\'s Play Area: Open access, 7 AM - 8 PM',
    ],
  },
];

export default async function HandbookPage() {
  let sheetData: Array<Record<string, string>> = [];
  try {
    sheetData = await fetchSheetData('Sheet1');
  } catch (e) {
    console.error('Failed to fetch handbook data:', e);
  }

  // If sheet has parking rules data, we could merge it here
  // For now, using Master Document v5 content as the authoritative source
  const sections = HANDBOOK_SECTIONS;

  return (
    <div>
      <PageHeader title="Handbook" subtitle="Community guidelines, rules & processes" />
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <GlassCard key={section.title} delay={idx * 0.08}>
            <div className={`p-5 ${section.highlight ? 'border-l-2 border-blue-400/50' : ''}`}>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{section.icon}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white/90">{section.title}</h3>
                  <p className="text-xs text-white/50 mt-1">{section.description}</p>
                  {section.details && (
                    <ul className="mt-3 space-y-1.5">
                      {section.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-[11px] text-white/40 flex items-start gap-2">
                          <span className="text-white/20 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="text-[10px] text-white/20 mt-4 text-center">
        Last updated from BMOWA Master Document v5 • Odd-Even parking effective immediately
      </p>
    </div>
  );
}
