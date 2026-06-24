import EditorialCard from '@/components/EditorialCard';
import PageHeader from '@/components/PageHeader';
import { getTab } from '@/lib/sheets.server';
import { TABS } from '@/config/sheetConfig';

// Re-read the sheet at request time so edits show up live (rather than being
// frozen at build time).
export const dynamic = 'force-dynamic';

interface Initiative {
  title: string;
  status: string;
  description: string;
  progress: number;
  color: string;
  recommendation?: string;
}

const FALLBACK_INITIATIVES: Initiative[] = [
  {
    title: 'Project Kaveri — Rainwater Harvesting',
    status: 'On Hold',
    description: 'Rainwater harvesting system to recharge borewells and reduce dependency on tanker water. Requires resident consensus and BBMP NOC.',
    progress: 15,
    color: 'amber',
    recommendation: 'Pending resident vote & budget approval',
  },
  {
    title: 'STP Upgrade — ECO STP',
    status: 'Recommended',
    description: 'Current STP is outdated. ECO STP recommended for better efficiency, lower maintenance, and compliance with KSPCB norms.',
    progress: 10,
    color: 'slate',
    recommendation: 'ECO STP recommended — vendor evaluation in progress',
  },
  {
    title: 'CCTV System Overhaul',
    status: 'Urgent',
    description: '5 out of 16 cameras are non-functional. Storage capacity only 5 days vs recommended 30 days. Full system upgrade needed.',
    progress: 30,
    color: 'red',
    recommendation: 'Immediate repair + NVR upgrade for 30-day storage',
  },
  {
    title: 'Society Re-Registration',
    status: 'Pending',
    description: 'BMOWA registration expired in FY 2019-20. Re-registration with Karnataka Societies Act required for legal standing.',
    progress: 5,
    color: 'red',
    recommendation: 'Engage legal counsel for re-registration process',
  },
  {
    title: 'Water Quality Monitoring',
    status: 'Active',
    description: '6-step water purification process in place: Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing.',
    progress: 80,
    color: 'sage',
    recommendation: 'Quarterly testing schedule established',
  },
];

export default async function InitiativesPage() {
  // Live data from the "Initiatives" tab (columns: title, status, description,
  // progress, color, recommendation). Falls back to defaults if unavailable.
  const sheetData = await getTab(TABS.initiatives);

  let initiatives: Initiative[] = FALLBACK_INITIATIVES;

  if (sheetData.length > 0) {
    const sheetInitiatives = sheetData
      .filter((row) => (row.title || '').trim().length > 0)
      .map((row) => ({
        title: row.title,
        status: row.status || 'Pending',
        description: row.description || '',
        progress: parseInt(row.progress || '0', 10) || 0,
        color: row.color || 'slate',
        recommendation: row.recommendation || undefined,
      }));

    if (sheetInitiatives.length > 0) {
      initiatives = sheetInitiatives;
    }
  }

  const getBarColor = (color: string) => {
    switch (color) {
      case 'slate': return 'bg-accent-slate';
      case 'amber': return 'bg-accent-amber';
      case 'sage': return 'bg-accent-sage';
      case 'red': return 'bg-accent-red';
      case 'rose': return 'bg-accent-rose';
      default: return 'bg-accent-slate';
    }
  };

  const getStatusStyle = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('active') || s.includes('complete')) return 'bg-accent-emerald/8 text-accent-emerald border-accent-emerald/20';
    if (s.includes('urgent') || s.includes('expired')) return 'bg-accent-red/8 text-accent-red border-accent-red/20';
    if (s.includes('hold') || s.includes('pending')) return 'bg-accent-amber/8 text-accent-amber border-accent-amber/20';
    return 'bg-accent-slate/8 text-accent-slate border-accent-slate/20';
  };

  return (
    <div>
      <PageHeader title="Initiatives" subtitle="Community improvement projects — from the BMOWA Master Document" />

      <div className="space-y-5">
        {initiatives.map((init, idx) => (
          <EditorialCard key={init.title} delay={idx * 0.08} hover={false}>
            <div className="p-7">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg text-foreground">{init.title}</h3>
                <span className={`text-[10px] font-medium px-3 py-1 rounded-full border ${getStatusStyle(init.status)}`}>
                  {init.status}
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{init.description}</p>
              {init.recommendation && (
                <p className="text-xs text-accent-slate mb-4 flex items-center gap-1.5 italic">
                  <span>💡</span> {init.recommendation}
                </p>
              )}
              <div className="progress-bar-track">
                <div
                  className={`progress-bar-fill ${getBarColor(init.color)}`}
                  style={{ width: `${init.progress}%` }}
                />
              </div>
              <p className="text-[11px] text-text-subtle mt-2">{init.progress}% progress</p>
            </div>
          </EditorialCard>
        ))}
      </div>

      <p className="text-[11px] text-text-subtle mt-10 text-center">
        Source: BMOWA Master Document v5 • Synced from Google Sheets
      </p>
    </div>
  );
}
