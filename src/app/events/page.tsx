'use client';

import GlassCard from '@/components/GlassCard';
import PageHeader from '@/components/PageHeader';

const events = [
  { title: 'Summer Camp for Kids', date: 'Jun 10-20', time: '9:00 AM - 12:00 PM', location: 'Community Hall', spots: '8 spots left' },
  { title: 'Annual General Meeting', date: 'Jun 15', time: '6:00 PM - 8:00 PM', location: 'Clubhouse', spots: 'All welcome' },
  { title: 'Yoga & Meditation', date: 'Every Sunday', time: '6:30 AM - 7:30 AM', location: 'Garden Area', spots: 'Open' },
  { title: 'Movie Night', date: 'Jun 22', time: '7:00 PM', location: 'Terrace', spots: '25 spots left' },
];

export default function EventsPage() {
  return (
    <div>
      <PageHeader title="Events" subtitle="Upcoming community events" />
      <div className="space-y-4">
        {events.map((event, idx) => (
          <GlassCard key={event.title} delay={idx * 0.1}>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white/90">{event.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-blue-400/80">📅 {event.date}</span>
                    <span className="text-xs text-white/40">🕐 {event.time}</span>
                  </div>
                  <p className="text-xs text-white/30 mt-1.5">📍 {event.location}</p>
                </div>
                <span className="text-[10px] text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-full ring-1 ring-emerald-400/20">
                  {event.spots}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
