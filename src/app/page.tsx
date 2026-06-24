'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HealthCard from '@/components/HealthCard';
import AnnouncementList from '@/components/AnnouncementList';
import PageHeader from '@/components/PageHeader';
import { fetchTab, type SheetRow } from '@/lib/sheetClient';
import { TABS } from '@/config/sheetConfig';

type HealthColor = 'blue' | 'purple' | 'emerald' | 'amber';

// Built-in defaults — shown until the live "Spotlight" tab loads, and as a
// fallback if the sheet is unreachable.
const FALLBACK_HEALTH: Record<
  string,
  { title: string; value: string; subtitle: string; progress: number; color: HealthColor; icon: string }
> = {
  water_supply: { title: 'Water Supply', value: '80k L', subtitle: 'of 100k Litres capacity', progress: 80, color: 'blue', icon: '💧' },
  security_staff: { title: 'Security Staff', value: '12 Guards', subtitle: 'All positions covered', progress: 100, color: 'purple', icon: '🛡️' },
  lift_uptime: { title: 'Lift Uptime', value: '99.95%', subtitle: 'Last 30 days average', progress: 99.95, color: 'emerald', icon: '🛗' },
};
const HEALTH_KEYS = ['water_supply', 'security_staff', 'lift_uptime'] as const;
const FALLBACK_STATUS = 'Everything is running smoothly today ✓';

export default function SpotlightPage() {
  const [rows, setRows] = useState<SheetRow[]>([]);

  useEffect(() => {
    // Live values from the "Spotlight" tab (columns: key, title, value,
    // subtitle, progress, color, icon). The `welcome_status` row supplies the
    // greeting line.
    fetchTab(TABS.spotlight).then(setRows);
  }, []);

  const byKey: Record<string, SheetRow> = Object.fromEntries(
    rows.filter((r) => r.key).map((r) => [r.key, r])
  );

  const cards = HEALTH_KEYS.map((k, i) => {
    const r = byKey[k];
    const f = FALLBACK_HEALTH[k];
    return {
      title: r?.title || f.title,
      value: r?.value || f.value,
      subtitle: r?.subtitle || f.subtitle,
      progress: r?.progress ? parseFloat(r.progress) : f.progress,
      color: ((r?.color as HealthColor) || f.color),
      icon: r?.icon || f.icon,
      delay: 0.1 * (i + 1),
    };
  });

  const status = byKey['welcome_status']?.value || FALLBACK_STATUS;

  return (
    <div>
      <PageHeader title="Spotlight" subtitle="Your community at a glance" />

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
            <p className="text-text-muted text-sm mt-3 font-light">{status}</p>
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
          {cards.map((c) => (
            <div key={c.title} className="snap-start">
              <HealthCard
                title={c.title}
                value={c.value}
                subtitle={c.subtitle}
                progress={c.progress}
                color={c.color}
                icon={c.icon}
                delay={c.delay}
              />
            </div>
          ))}
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
