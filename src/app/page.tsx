'use client';

import { motion } from 'framer-motion';
import HealthCard from '@/components/HealthCard';
import AnnouncementList from '@/components/AnnouncementList';
import PageHeader from '@/components/PageHeader';

export default function SpotlightPage() {
  return (
    <div>
      <PageHeader
        title="Spotlight"
        subtitle="Your community at a glance"
      />

      {/* Greeting Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <div className="editorial-card rounded-3xl p-8 relative overflow-hidden">
          <div className="hero-glow" />
          <div className="relative z-10">
            <p className="text-text-subtle text-xs uppercase tracking-widest">Welcome home</p>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mt-2">Welcome to BlueJay Malgudi</h2>
            <p className="text-text-muted text-sm mt-3 font-light">Everything is running smoothly today ✓</p>
          </div>
        </div>
      </motion.div>

      {/* Community Health Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-xl text-foreground">Community Health</h2>
          <span className="text-[10px] text-text-subtle uppercase tracking-widest">Live Status</span>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory">
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
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-xl text-foreground">Announcements</h2>
          <button className="text-xs text-text-muted hover:text-foreground transition-colors font-medium">
            View All →
          </button>
        </div>
        <AnnouncementList />
      </motion.div>
    </div>
  );
}
