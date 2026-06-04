import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';
import { fetchSheetData } from '@/lib/googleSheets';

const sections = [
  { 
    title: 'Odd-Even Parking Rule', 
    icon: '🅿️', 
    desc: 'Ensuring smooth lane transit flow.',
    details: [
      'Schedule: One row parks on Even days, opposite row on Odd days.',
      'Opposite houses cannot park on the same day.',
      'Violations are logged and penalized via MyGate.'
    ]
  }, 
  { 
    title: '6-Step Water Process', 
    icon: '💧', 
    desc: 'How your water is treated and softened.',
    details: [
      '1. V-Pipe Primary Filtration (sediment removal)',
      '2. Settlement in External White Sintex Tanks',
      '3. Softening Phase 1 (Electrolysis Anode/Cathode)',
      '4. 100kL Main Sump Collection',
      '5. Softening Phase 2 (Big Tube Softeners)',
      '6. Final Cleansing (Wall-mounted tubes)'
    ]
  },
  { 
    title: 'Resident Onboarding', 
    icon: '📦', 
    desc: 'Welcome to BlueJay Malgudi.',
    details: [
      'Report builder handover to Association office.',
      'Submit ownership/rental docs for MyGate activation.',
      'Orientation on waste segregation & parking rules.'
    ]
  },
  { 
    title: 'Facility Guidelines', 
    icon: '🏊', 
    desc: 'Gym, Pool, and Clubhouse rules.',
    details: [
      'Pool: Maintained at 31-32°C. Mandatory shower.',
      'Gym: No footwear. Wipe equipment after use.',
      'Clubhouse: Residents only. Book 7 days in advance.'
    ]
  },
];

export default async function HandbookPage() {
  let sheetData: Record<string, string>[] = [];
  try {
    sheetData = (await fetchSheetData('Sheet1')) as Record<string, string>[];
  } catch (e) {
    console.error('Failed to fetch handbook data:', e);
  }

  return (
    <div>
      <PageHeader title="Handbook" subtitle="Community Guidelines & How-To's" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, idx) => (
          <GlassCard key={section.title} delay={idx * 0.1}>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-sm font-semibold text-white/90">{section.title}</h3>
              </div>
              <p className="text-[11px] text-white/40 mb-3">{section.desc}</p>
              <ul className="space-y-1.5">
                {section.details.map((d, i) => (
                  <li key={i} className="text-[10px] text-white/60 flex gap-2">
                    <span className="text-blue-400">•</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="text-[10px] text-white/20 mt-4 text-center">
        Last updated from BMOWA Master Document • Odd-Even parking effective immediately
      </p>
    </div>
  );
}
