'use client';

import { motion } from 'framer-motion';

interface HealthCardProps {
  title: string;
  value: string;
  subtitle: string;
  progress?: number;
  color: 'blue' | 'purple' | 'emerald' | 'amber';
  icon: string;
  delay?: number;
}

const colorMap = {
  blue: {
    accent: 'text-accent-slate',
    bar: 'bg-accent-slate',
    badge: 'bg-accent-slate/10 text-accent-slate',
  },
  purple: {
    accent: 'text-accent-rose',
    bar: 'bg-accent-rose',
    badge: 'bg-accent-rose/10 text-accent-rose',
  },
  emerald: {
    accent: 'text-accent-sage',
    bar: 'bg-accent-sage',
    badge: 'bg-accent-sage/10 text-accent-sage',
  },
  amber: {
    accent: 'text-accent-warm',
    bar: 'bg-accent-warm',
    badge: 'bg-accent-warm/10 text-accent-warm',
  },
};

export default function HealthCard({ title, value, subtitle, progress, color, icon, delay = 0 }: HealthCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -2, transition: { duration: 0.25 } }}
      className="editorial-card rounded-3xl p-6 min-w-[240px] flex-shrink-0"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${colors.badge}`}>
          Live
        </span>
      </div>

      <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">{title}</h3>
      <p className={`text-2xl font-semibold ${colors.accent} mb-1`}>{value}</p>
      <p className="text-xs text-text-subtle">{subtitle}</p>

      {progress !== undefined && (
        <div className="mt-4">
          <div className="progress-bar-track">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
              className={`progress-bar-fill ${colors.bar}`}
            />
          </div>
          <p className="text-[10px] text-text-subtle mt-1.5 text-right">{progress}%</p>
        </div>
      )}
    </motion.div>
  );
}
