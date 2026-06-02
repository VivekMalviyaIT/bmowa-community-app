'use client';

import { motion } from 'framer-motion';

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
  high: 'bg-red-400/20 text-red-300 ring-red-400/30',
  medium: 'bg-amber-400/20 text-amber-300 ring-amber-400/30',
  low: 'bg-emerald-400/20 text-emerald-300 ring-emerald-400/30',
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function AnnouncementList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3"
    >
      {sampleAnnouncements.map((announcement) => (
        <motion.div
          key={announcement.id}
          variants={item}
          whileHover={{ x: 4, transition: { duration: 0.15 } }}
          className="glass glass-hover rounded-xl p-4 group cursor-pointer"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ring-1 ${priorityColors[announcement.priority]}`}>
                  {announcement.category}
                </span>
                <span className="text-[10px] text-white/30">{announcement.date}</span>
              </div>
              <h4 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors truncate">
                {announcement.title}
              </h4>
              <p className="text-xs text-white/40 mt-1 line-clamp-2 leading-relaxed">
                {announcement.description}
              </p>
            </div>
            <div className="text-white/20 group-hover:text-white/50 transition-colors mt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
