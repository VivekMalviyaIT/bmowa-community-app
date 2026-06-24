'use client';

import EditorialCard from '@/components/EditorialCard';
import PageHeader from '@/components/PageHeader';
import { useEffect, useState } from 'react';
import { fetchTab, type SheetRow } from '@/lib/sheetClient';
import { TABS } from '@/config/sheetConfig';

const FALLBACK_STATS = [
  { label: 'Water Sump', value: '80,000L', detail: 'of 100kL Capacity', icon: '💧', accent: 'text-accent-slate' },
  { label: 'CCTV Cameras', value: '27 – 45', detail: 'HiKVision Stack', icon: '📹', accent: 'text-accent-warm' },
  { label: 'Security Staff', value: '12 Guards', detail: '24/7 Day & Night shifts', icon: '🛡️', accent: 'text-accent-sage' },
  { label: 'Lift Availability', value: '99.95%', detail: 'May Maintenance Report', icon: '🛗', accent: 'text-accent-rose' },
];

export default function SnapshotPage() {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTab(TABS.snapshot)
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  // Live rows (columns: label, value, detail, icon, accent) override the
  // fallback once the sheet is populated.
  const liveStats = data
    .filter((r) => (r.label || '').trim().length > 0)
    .map((r) => ({
      label: r.label,
      value: r.value,
      detail: r.detail,
      icon: r.icon || '•',
      accent: r.accent || 'text-accent-slate',
    }));
  const stats = liveStats.length > 0 ? liveStats : FALLBACK_STATS;

  return (
    <div>
      <PageHeader title="Snapshot" subtitle="Live community infrastructure status — a data report" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {stats.map((stat, idx) => (
          <EditorialCard key={stat.label} delay={idx * 0.08} hover={false}>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider">{stat.label}</h3>
              </div>
              <p className={`text-3xl font-semibold ${stat.accent}`}>{stat.value}</p>
              <p className="text-xs text-text-subtle mt-2">{stat.detail}</p>
            </div>
          </EditorialCard>
        ))}
      </div>

      {/* Operational Gaps */}
      <EditorialCard delay={0.4} hover={false}>
        <div className="p-7">
          <h3 className="font-serif text-lg text-foreground mb-5 flex items-center gap-2">
            Active Operational Gaps
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-red mt-1.5 flex-shrink-0" />
              <span>5 CCTV cameras currently non-operational since Nov 2024.</span>
            </li>
            <li className="flex gap-3 text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-red mt-1.5 flex-shrink-0" />
              <span>CCTV Storage limited to 5 days (Target: 15+ days).</span>
            </li>
            <li className="flex gap-3 text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-amber mt-1.5 flex-shrink-0" />
              <span>BMOWA Registration expired since FY 2019-20. Renewal in progress.</span>
            </li>
          </ul>
        </div>
      </EditorialCard>

      {/* Data Source Note */}
      {loading && (
        <p className="text-xs text-text-subtle mt-8 text-center animate-pulse">Loading sheet data...</p>
      )}
      {!loading && data.length > 0 && (
        <p className="text-[11px] text-text-subtle mt-8 text-center">
          Connected to live Google Sheets • {data.length} rows synced
        </p>
      )}
    </div>
  );
}
