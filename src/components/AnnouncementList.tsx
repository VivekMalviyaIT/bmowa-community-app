'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchTab, type SheetRow } from '@/lib/sheetClient';
import { TABS } from '@/config/sheetConfig';

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

const sampleAnnouncements: Announcement[] = [
  {
    id: 1,
    title: 'Monthly Maintenance Scheduled',
    description: 'Water tank cleaning and lift servicing will be conducted this Saturday from 8 AM to 2 PM.',
    date: '2 Jun 2026',
    category: 'Maintenance',
    priority: 'high',
  },
  {
    id: 2,
    title: 'New Gym Equipment Arrived',
    description: 'The community gym has been upgraded with new treadmills and weight stations. Open for all residents.',
    date: '1 Jun 2026',
    category: 'Amenities',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Annual General Meeting',
    description: 'AGM scheduled for June 15th at 6 PM in the community hall. All homeowners requested to attend.',
    date: '30 May 2026',
    category: 'Meeting',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Parking Zone Repainted',
    description: 'Basement parking zones have been repainted. Please park in your designated slot only.',
    date: '28 May 2026',
    category: 'Notice',
    priority: 'low',
  },
  {
    id: 5,
    title: 'Summer Camp for Kids',
    description: 'Registrations open for the community summer camp. Activities include art, sports, and coding.',
    date: '26 May 2026',
    category: 'Events',
    priority: 'medium',
  },
];

const priorityColors = {
  high: 'bg-accent-red/8 text-accent-red border-accent-red/15',
  medium: 'bg-accent-amber/8 text-accent-amber border-accent-amber/15',
  low: 'bg-accent-emerald/8 text-accent-emerald border-accent-emerald/15',
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const VALID_PRIORITIES = new Set(['high', 'medium', 'low']);

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(sampleAnnouncements);

  useEffect(() => {
    // Live rows (columns: title, desc, date, category, priority) replace the
    // built-in fallback once the Announcements tab is populated.
    fetchTab(TABS.announcements).then((rows: SheetRow[]) => {
      const live = rows
        .filter((r) => (r.title || '').trim().length > 0)
        .map((r, i) => {
          const p = (r.priority || '').trim().toLowerCase();
          return {
            id: i + 1,
            title: r.title,
            description: r.desc || '',
            date: r.date || '',
            category: r.category || 'Notice',
            priority: (VALID_PRIORITIES.has(p) ? p : 'medium') as Announcement['priority'],
          };
        });
      if (live.length > 0) setAnnouncements(live);
    });
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3"
    >
      {announcements.map((announcement) => (
        <motion.div
          key={announcement.id}
          variants={item}
          whileHover={{ x: 3, transition: { duration: 0.15 } }}
          className="editorial-card rounded-2xl p-5 group cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-2">
                <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${priorityColors[announcement.priority]}`}>
                  {announcement.category}
                </span>
                <span className="text-[11px] text-text-subtle">{announcement.date}</span>
              </div>
              <h4 className="text-sm font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                {announcement.title}
              </h4>
              <p className="text-xs text-text-muted mt-1.5 line-clamp-2 leading-relaxed">
                {announcement.description}
              </p>
            </div>
            <div className="text-text-subtle/40 group-hover:text-text-muted transition-colors mt-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
