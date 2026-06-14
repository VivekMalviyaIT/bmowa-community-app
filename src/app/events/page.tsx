'use client';

import EditorialCard from '@/components/EditorialCard';
import PageHeader from '@/components/PageHeader';

const events = [
  { title: 'Summer Camp for Kids', date: 'Jun 10–20', time: '9:00 AM – 12:00 PM', location: 'Community Hall', spots: '8 spots left' },
  { title: 'Annual General Meeting', date: 'Jun 15', time: '6:00 PM – 8:00 PM', location: 'Clubhouse', spots: 'All welcome' },
  { title: 'Yoga & Meditation', date: 'Every Sunday', time: '6:30 AM – 7:30 AM', location: 'Garden Area', spots: 'Open' },
  { title: 'Movie Night', date: 'Jun 22', time: '7:00 PM', location: 'Terrace', spots: '25 spots left' },
];

export default function EventsPage() {
  return (
    <div>
      <PageHeader title="Events" subtitle="Upcoming community events & gatherings" />

      <div className="space-y-5">
        {events.map((event, idx) => (
          <EditorialCard key={event.title} delay={idx * 0.08}>
            <div className="p-7">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-foreground">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-text-muted">📅 {event.date}</span>
                    <span className="text-xs text-text-subtle">🕐 {event.time}</span>
                  </div>
                  <p className="text-xs text-text-subtle mt-2">📍 {event.location}</p>
                </div>
                <span className="text-[11px] font-medium text-accent-emerald bg-accent-emerald/8 px-3 py-1 rounded-full border border-accent-emerald/15">
                  {event.spots}
                </span>
              </div>
            </div>
          </EditorialCard>
        ))}
      </div>
    </div>
  );
}
