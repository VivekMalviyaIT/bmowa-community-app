import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';
import { fetchSheetData } from '@/lib/googleSheets';

interface SheetRow {
  [key: string]: string;
}

function findValue(data: SheetRow[], keywords: string[]): string | null {
  for (const row of data) {
    const values = Object.values(row).map(v => v?.toLowerCase?.() || '');
    const keys = Object.keys(row).map(k => k?.toLowerCase?.() || '');
    for (const keyword of keywords) {
      const kw = keyword.toLowerCase();
      if (values.some(v => v.includes(kw)) || keys.some(k => k.includes(kw))) {
        // Return the value column (usually 2nd or 3rd column)
        const colKeys = Object.keys(row);
        for (let i = 1; i < colKeys.length; i++) {
          const val = row[colKeys[i]];
          if (val && val.trim() && !val.toLowerCase().includes(kw)) {
            return val;
          }
        }
        return row[colKeys[1]] || row[colKeys[0]];
      }
    }
  }
  return null;
}

export default async function SnapshotPage() {
  let sheetData: SheetRow[] = [];
  try {
    sheetData = await fetchSheetData('Sheet1');
  } catch (e) {
    console.error('Failed to fetch sheet data:', e);
  }

  // Extract real data from sheet, with fallbacks from Master Document v5
  const borewellCount = findValue(sheetData, ['borewell', 'bore well', 'bore']) || '3';
  const cctvCount = findValue(sheetData, ['cctv', 'camera']) || '16';
  const staffCount = findValue(sheetData, ['staff', 'employee', 'worker']) || '12';
  const waterProcess = findValue(sheetData, ['water', 'process']) || '6-Step Process';

  const stats = [
    {
      label: 'Borewells',
      value: borewellCount,
      detail: 'Active borewells serving the community',
      color: 'text-blue-400',
      icon: '💧',
    },
    {
      label: 'CCTV Cameras',
      value: cctvCount,
      detail: '⚠️ 5 cameras down • 5-day storage gap',
      color: 'text-amber-400',
      icon: '📹',
    },
    {
      label: 'Staff Members',
      value: staffCount,
      detail: 'Security, housekeeping & maintenance',
      color: 'text-emerald-400',
      icon: '👥',
    },
    {
      label: 'Water Treatment',
      value: waterProcess,
      detail: 'Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing',
      color: 'text-purple-400',
      icon: '🚰',
    },
  ];

  const alerts = [
    { text: 'CCTV: 5 cameras currently non-functional', severity: 'high' },
    { text: 'Storage gap: Only 5 days vs recommended 30 days', severity: 'high' },
    { text: 'Legal: Society registration expired since FY 2019-20', severity: 'medium' },
  ];

  return (
    <div>
      <PageHeader title="Snapshot" subtitle="Community infrastructure at a glance — Live from Google Sheets" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <GlassCard key={stat.label} delay={idx * 0.1}>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{stat.icon}</span>
                <h3 className="text-sm font-medium text-white/60">{stat.label}</h3>
              </div>
              <p className={`text-3xl font-bold text-white`}>{stat.value}</p>
              <p className={`text-xs ${stat.color} mt-1`}>{stat.detail}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Alerts Section */}
      <GlassCard delay={0.5}>
        <div className="p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
            <span>🚨</span> Active Alerts
          </h3>
          <div className="space-y-2">
            {alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  alert.severity === 'high' ? 'bg-red-500/10 border border-red-500/20' : 'bg-amber-500/10 border border-amber-500/20'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  alert.severity === 'high' ? 'bg-red-400' : 'bg-amber-400'
                }`} />
                <span className="text-xs text-white/70">{alert.text}</span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Data Source Note */}
      <p className="text-[10px] text-white/20 mt-4 text-center">
        Data sourced from BMOWA Master Sheet • Auto-refreshes every 5 minutes
      </p>
    </div>
  );
}
