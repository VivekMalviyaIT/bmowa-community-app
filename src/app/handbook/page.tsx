import EditorialCard from '@/components/EditorialCard';
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
      <PageHeader title="Handbook" subtitle="Community Guidelines & Standard Operating Procedures" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sections.map((section, idx) => (
          <EditorialCard key={section.title} delay={idx * 0.08} hover={false}>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <div>
                  <h3 className="font-serif text-base text-foreground">{section.title}</h3>
                  <p className="text-xs text-text-subtle mt-0.5">{section.desc}</p>
                </div>
              </div>
              <ul className="space-y-2.5 mt-4">
                {section.details.map((d, i) => (
                  <li key={i} className="text-xs text-text-muted flex gap-2.5 leading-relaxed">
                    <span className="text-accent-sage mt-0.5">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </EditorialCard>
        ))}
      </div>

      <p className="text-[11px] text-text-subtle mt-10 text-center">
        Last updated from BMOWA Master Document • Odd-Even parking effective immediately
      </p>
    </div>
  );
}
