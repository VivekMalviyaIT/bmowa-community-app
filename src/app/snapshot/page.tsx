'use client';

import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';
import { useEffect, useState } from 'react';
import { fetchSheetData } from '@/lib/googleSheets';

interface SheetRow {
  [key: string]: string;
}

export default function SnapshotPage() {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const result = (await fetchSheetData('Sheet1')) as SheetRow[];
        setData(result);
      } catch (e) {
        console.error('Failed to fetch snapshot data:', e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const stats = [
    { label: 'Water Sump', value: '80,000L', detail: 'of 100kL Capacity', icon: '💧', color: 'text-blue-400' },
    { label: 'CCTV Cameras', value: '27 - 45', detail: 'HiKVision Stack', icon: '📹', color: 'text-amber-400' },
    { label: 'Security Staff', value: '12 Guards', detail: '24/7 Day & Night shifts', icon: '🛡️', color: 'text-emerald-400' },
    { label: 'Lift Availability', value: '99.95%', detail: 'May Maintenance Report', icon: '🛗', color: 'text-purple-400' },
  ];

  return (
    <div>
      <PageHeader title="Snapshot" subtitle="Live community infrastructure status" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <GlassCard key={stat.label} delay={idx * 0.1}>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{stat.icon}</span>
                <h3 className="text-sm font-medium text-white/60">{stat.label}</h3>
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className={`text-xs ${stat.color} mt-1`}>{stat.detail}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard delay={0.5}>
        <div className="p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-4 flex items-center gap-2">
            🚨 Active Operational Gaps
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-xs text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1 flex-shrink-0" />
              <span>5 CCTV cameras currently non-operational since Nov 2024.</span>
            </li>
            <li className="flex gap-3 text-xs text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1 flex-shrink-0" />
              <span>CCTV Storage limited to 5 days (Target: 15+ days).</span>
            </li>
            <li className="flex gap-3 text-xs text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 flex-shrink-0" />
              <span>BMOWA Registration expired since FY 2019-20. Renewal in progress.</span>
            </li>
          </ul>
        </div>
      </GlassCard>
    </div>
  );
}
