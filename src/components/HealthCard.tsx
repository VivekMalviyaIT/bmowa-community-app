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
    gradient: 'from-blue-400/20 to-blue-600/10',
    text: 'text-blue-400',
    bar: 'bg-gradient-to-r from-blue-400 to-blue-500',
    glow: 'shadow-blue-500/20',
    ring: 'ring-blue-400/20',
  },
  purple: {
    gradient: 'from-purple-400/20 to-purple-600/10',
    text: 'text-purple-400',
    bar: 'bg-gradient-to-r from-purple-400 to-purple-500',
    glow: 'shadow-purple-500/20',
    ring: 'ring-purple-400/20',
  },
  emerald: {
    gradient: 'from-emerald-400/20 to-emerald-600/10',
    text: 'text-emerald-400',
    bar: 'bg-gradient-to-r from-emerald-400 to-emerald-500',
    glow: 'shadow-emerald-500/20',
    ring: 'ring-emerald-400/20',
  },
  amber: {
    gradient: 'from-amber-400/20 to-amber-600/10',
    text: 'text-amber-400',
    bar: 'bg-gradient-to-r from-amber-400 to-amber-500',
    glow: 'shadow-amber-500/20',
    ring: 'ring-amber-400/20',
  },
};

export default function HealthCard({ title, value, subtitle, progress, color, icon, delay = 0 }: HealthCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
      className={`glass glass-hover rounded-2xl p-5 min-w-[220px] flex-shrink-0 relative overflow-hidden`}
    >
      {/* Background gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`} />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl">{icon}</span>
          <span className={`text-xs font-medium ${colors.text} px-2 py-0.5 rounded-full bg-white/5 ring-1 ${colors.ring}`}>
            Live
          </span>
        </div>

        <h3 className="text-sm font-medium text-white/60 mb-1">{title}</h3>
        <p className={`text-2xl font-bold ${colors.text} mb-1`}>{value}</p>
        <p className="text-xs text-white/40">{subtitle}</p>

        {progress !== undefined && (
          <div className="mt-3">
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
                className={`h-full rounded-full ${colors.bar} shadow-lg ${colors.glow}`}
              />
            </div>
            <p className="text-[10px] text-white/30 mt-1 text-right">{progress}%</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
