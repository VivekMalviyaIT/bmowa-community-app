'use client';

import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';

const initiatives = [
  { title: 'Rainwater Harvesting', status: 'In Progress', progress: 65, color: 'blue' },
  { title: 'Solar Panel Installation', status: 'Planning', progress: 20, color: 'amber' },
  { title: 'EV Charging Stations', status: 'Completed', progress: 100, color: 'emerald' },
  { title: 'Community Garden', status: 'In Progress', progress: 45, color: 'purple' },
];

export default function InitiativesPage() {
  return (
    <div>
      <PageHeader title="Initiatives" subtitle="Community improvement projects" />
      <div className="space-y-4">
        {initiatives.map((init, idx) => (
          <GlassCard key={init.title} delay={idx * 0.1}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white/90">{init.title}</h3>
                <span className="text-[10px] font-medium text-white/50 px-2 py-0.5 rounded-full bg-white/5 ring-1 ring-white/10">
                  {init.status}
                </span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${
                    init.color === 'blue' ? 'from-blue-400 to-blue-500' :
                    init.color === 'amber' ? 'from-amber-400 to-amber-500' :
                    init.color === 'emerald' ? 'from-emerald-400 to-emerald-500' :
                    'from-purple-400 to-purple-500'
                  }`}
                  style={{ width: `${init.progress}%` }}
                />
              </div>
              <p className="text-[10px] text-white/30 mt-1.5">{init.progress}% complete</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
