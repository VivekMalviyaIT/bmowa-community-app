import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';
import { fetchSheetData } from '@/lib/googleSheets';

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
    color: 'blue',
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
    color: 'emerald',
    recommendation: 'Quarterly testing schedule established',
  },
];

export default async function InitiativesPage() {
  let sheetData: Array<Record<string, string>> = [];
  try {
    sheetData = (await fetchSheetData('Sheet1')) as Record<string, string>[];
  } catch (e) {
    console.error('Failed to fetch initiatives data:', e);
  }

  // Try to extract initiatives from sheet data, fall back to hardcoded
  let initiatives: Initiative[] = FALLBACK_INITIATIVES;

  if (sheetData.length > 0) {
    const sheetInitiatives = sheetData
      .filter(row => {
        const values = Object.values(row).join(' ').toLowerCase();
        return values.includes('initiative') || values.includes('project') ||
               values.includes('kaveri') || values.includes('stp') ||
               values.includes('cctv') || values.includes('registration');
      })
      .map(row => {
        const vals = Object.values(row);
        return {
          title: vals[0] || vals[1] || 'Unknown',
          status: vals[2] || vals[1] || 'Pending',
          description: vals[3] || vals[2] || '',
          progress: parseInt(vals[4] || '0') || 0,
          color: 'blue',
        };
      });

    if (sheetInitiatives.length > 0) {
      initiatives = sheetInitiatives;
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-400 to-blue-500';
      case 'amber': return 'from-amber-400 to-amber-500';
      case 'emerald': return 'from-emerald-400 to-emerald-500';
      case 'red': return 'from-red-400 to-red-500';
      case 'purple': return 'from-purple-400 to-purple-500';
      default: return 'from-blue-400 to-blue-500';
    }
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('active') || s.includes('complete')) return 'bg-emerald-400/10 text-emerald-400 ring-emerald-400/20';
    if (s.includes('urgent') || s.includes('expired')) return 'bg-red-400/10 text-red-400 ring-red-400/20';
    if (s.includes('hold') || s.includes('pending')) return 'bg-amber-400/10 text-amber-400 ring-amber-400/20';
    return 'bg-blue-400/10 text-blue-400 ring-blue-400/20';
  };

  return (
    <div>
      <PageHeader title="Initiatives" subtitle="Community improvement projects — Data from Master Document v5" />
      <div className="space-y-4">
        {initiatives.map((init, idx) => (
          <GlassCard key={init.title} delay={idx * 0.1}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-white/90">{init.title}</h3>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ring-1 ${getStatusColor(init.status)}`}>
                  {init.status}
                </span>
              </div>
              <p className="text-xs text-white/50 mb-3">{init.description}</p>
              {init.recommendation && (
                <p className="text-[10px] text-blue-300/70 mb-3 flex items-center gap-1">
                  <span>💡</span> {init.recommendation}
                </p>
              )}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getColorClasses(init.color)}`}
                  style={{ width: `${init.progress}%` }}
                />
              </div>
              <p className="text-[10px] text-white/30 mt-1.5">{init.progress}% progress</p>
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="text-[10px] text-white/20 mt-4 text-center">
        Source: BMOWA Master Document v5 • Sheet ID: 1wAHIS0PY6atezES7bCCnKTVXksOgU4Q4jJc110Zrdjw
      </p>
    </div>
  );
}
