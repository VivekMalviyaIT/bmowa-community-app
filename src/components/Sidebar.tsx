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
      {/* Desktop Sidebar — Editorial Minimal */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col z-50 sidebar-editorial">
        <div className="h-full px-6 py-10 flex flex-col">
          {/* Masthead */}
          <div className="mb-12">
            <h1 className="font-serif text-2xl text-foreground tracking-tight">
              BMOWA
            </h1>
            <p className="text-[11px] text-text-subtle mt-1 tracking-widest uppercase font-light">
              Community Journal
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-foreground/[0.04]'
                        : 'hover:bg-foreground/[0.02]'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-foreground rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`text-sm ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}`}>
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
              Est. 2024 • Editorial Edition
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white/95 backdrop-blur-sm border-t border-card-border mx-0 px-2 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all ${
                      isActive ? 'bg-foreground/[0.05]' : ''
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className={`text-sm ${isActive ? 'opacity-100' : 'opacity-35'}`}>
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
