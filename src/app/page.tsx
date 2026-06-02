'use client';

import { motion } from 'framer-motion';
import HealthCard from '@/components/HealthCard';
import AnnouncementList from '@/components/AnnouncementList';
import PageHeader from '@/components/PageHeader';

export default function SpotlightPage() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        title="Spotlight"
        subtitle="Your community at a glance"
      />

      {/* Greeting Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="glass rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
          <div className="relative z-10">
            <p className="text-white/50 text-sm">Good morning,</p>
            <h2 className="text-xl font-bold text-white mt-0.5">Welcome to BMOWA Community</h2>
            <p className="text-white/40 text-xs mt-2">Everything is running smoothly today ✓</p>
          </div>
        </div>
      </motion.div>

      {/* Community Health Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-white/80">Community Health</h2>
          <span className="text-[10px] text-white/30 uppercase tracking-wider">Live Status</span>
        </div>

        {/* Horizontal scrollable cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory">
          <div className="snap-start">
            <HealthCard
              title="Water Supply"
              value="80k L"
              subtitle="of 100k Litres capacity"
              progress={80}
              color="blue"
              icon="💧"
              delay={0.1}
            />
          </div>
          <div className="snap-start">
            <HealthCard
              title="Security Staff"
              value="12 Guards"
              subtitle="All positions covered"
              progress={100}
              color="purple"
              icon="🛡️"
              delay={0.2}
            />
          </div>
          <div className="snap-start">
            <HealthCard
              title="Lift Uptime"
              value="99.95%"
              subtitle="Last 30 days average"
              progress={99.95}
              color="emerald"
              icon="🛗"
              delay={0.3}
            />
          </div>
        </div>
      </motion.div>

      {/* Announcements Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-white/80">Announcements</h2>
          <button className="text-xs text-blue-400/70 hover:text-blue-400 transition-colors">
            View All →
          </button>
        </div>
        <AnnouncementList />
      </motion.div>
    </div>
  );
}
