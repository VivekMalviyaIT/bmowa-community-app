'use client';

import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';

const sections = [
  { title: 'Community Rules', icon: '📋', description: 'Bylaws, parking rules, noise guidelines' },
  { title: 'Emergency Contacts', icon: '🚨', description: 'Security, fire, medical, plumbing' },
  { title: 'Amenity Booking', icon: '🏊', description: 'Pool, gym, clubhouse, party hall' },
  { title: 'Move-in/Move-out', icon: '📦', description: 'Process, forms, and checklist' },
  { title: 'Pet Policy', icon: '🐾', description: 'Registration, walking areas, rules' },
  { title: 'Vendor Directory', icon: '🔧', description: 'Approved vendors and service providers' },
];

export default function HandbookPage() {
  return (
    <div>
      <PageHeader title="Handbook" subtitle="Community guidelines and resources" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, idx) => (
          <GlassCard key={section.title} delay={idx * 0.08}>
            <div className="p-5 flex items-start gap-4">
              <span className="text-2xl">{section.icon}</span>
              <div>
                <h3 className="text-sm font-semibold text-white/90">{section.title}</h3>
                <p className="text-xs text-white/40 mt-1">{section.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
