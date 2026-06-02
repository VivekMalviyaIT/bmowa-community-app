'use client';

import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';

const services = [
  { title: 'Plumbing', icon: '🔧', available: true, eta: '30 min' },
  { title: 'Electrical', icon: '⚡', available: true, eta: '45 min' },
  { title: 'Carpentry', icon: '🪚', available: false, eta: 'Tomorrow' },
  { title: 'Housekeeping', icon: '🧹', available: true, eta: '1 hour' },
  { title: 'Pest Control', icon: '🐛', available: true, eta: 'Schedule' },
  { title: 'Painting', icon: '🎨', available: true, eta: '2-3 days' },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader title="Services" subtitle="Book community services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <GlassCard key={service.title} delay={idx * 0.08}>
            <div className="p-5 text-center">
              <span className="text-3xl block mb-3">{service.icon}</span>
              <h3 className="text-sm font-semibold text-white/90">{service.title}</h3>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <div className={`w-1.5 h-1.5 rounded-full ${service.available ? 'bg-emerald-400' : 'bg-red-400'}`} />
                <span className="text-[10px] text-white/40">
                  {service.available ? `ETA: ${service.eta}` : 'Unavailable'}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
