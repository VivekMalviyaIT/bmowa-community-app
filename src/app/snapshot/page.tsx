'use client';

import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';

export default function SnapshotPage() {
  return (
    <div>
      <PageHeader title="Snapshot" subtitle="Community data at a glance" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassCard delay={0.1}>
          <div className="p-6">
            <h3 className="text-sm font-medium text-white/60 mb-2">Total Residents</h3>
            <p className="text-3xl font-bold text-white">1,248</p>
            <p className="text-xs text-emerald-400 mt-1">↑ 12 new this month</p>
          </div>
        </GlassCard>
        <GlassCard delay={0.2}>
          <div className="p-6">
            <h3 className="text-sm font-medium text-white/60 mb-2">Maintenance Due</h3>
            <p className="text-3xl font-bold text-white">₹4.2L</p>
            <p className="text-xs text-amber-400 mt-1">85% collected</p>
          </div>
        </GlassCard>
        <GlassCard delay={0.3}>
          <div className="p-6">
            <h3 className="text-sm font-medium text-white/60 mb-2">Open Complaints</h3>
            <p className="text-3xl font-bold text-white">7</p>
            <p className="text-xs text-white/40 mt-1">3 resolved this week</p>
          </div>
        </GlassCard>
        <GlassCard delay={0.4}>
          <div className="p-6">
            <h3 className="text-sm font-medium text-white/60 mb-2">Upcoming Events</h3>
            <p className="text-3xl font-bold text-white">4</p>
            <p className="text-xs text-purple-400 mt-1">Next: Summer Camp (Jun 10)</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
