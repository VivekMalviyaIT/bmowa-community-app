'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Spotlight', path: '/', icon: '✦' },
  { name: 'Snapshot', path: '/snapshot', icon: '◎' },
  { name: 'Initiatives', path: '/initiatives', icon: '◆' },
  { name: 'Handbook', path: '/handbook', icon: '▣' },
  { name: 'Services', path: '/services', icon: '⚙' },
  { name: 'Events', path: '/events', icon: '◈' },
  { name: 'Feedback', path: '/feedback', icon: '✎' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar — Editorial Minimal (shared across all three designs) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col z-50 sidebar-editorial">
        <div className="relative z-10 h-full px-6 py-10 flex flex-col">
          {/* Masthead — crest + wordmark (identical in every design) */}
          <div className="mb-12">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/malgudi-logo.png"
                alt="BlueJay Malgudi crest"
                className="w-9 h-9 object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="font-serif text-xl text-foreground tracking-tight leading-none">
                  BlueJay Malgudi
                </h1>
                <p className="text-[10px] text-text-subtle mt-1 tracking-widest uppercase font-light">
                  Community Journal
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive ? 'bg-[var(--nav-active-bg)]' : 'hover:bg-[var(--nav-hover-bg)]'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full"
                        style={{ background: 'var(--nav-active-indicator)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={`text-sm ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}`}
                      style={isActive ? { color: 'var(--nav-active-icon)' } : undefined}
                    >
                      {item.icon}
                    </span>
                    <span className={`text-[13px] font-medium tracking-tight ${
                      isActive ? 'text-foreground' : 'text-text-muted group-hover:text-foreground'
                    }`}>
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-card-border">
            <p className="text-[10px] text-text-subtle text-center tracking-wide">
              Established 2026
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="mobile-nav-surface backdrop-blur-sm border-t border-card-border mx-0 px-1 py-2">
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`flex flex-col items-center gap-0.5 px-1.5 py-1.5 rounded-xl transition-all ${
                      isActive ? 'bg-[var(--nav-active-bg)]' : ''
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span
                      className={`text-sm ${isActive ? 'opacity-100' : 'opacity-35'}`}
                      style={isActive ? { color: 'var(--nav-active-icon)' } : undefined}
                    >
                      {item.icon}
                    </span>
                    <span className={`text-[9px] font-medium ${
                      isActive ? 'text-foreground' : 'text-text-subtle'
                    }`}>
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
