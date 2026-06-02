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
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col z-50">
        <div className="glass-strong h-full m-3 rounded-2xl p-6 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              BMOWA
            </h1>
            <p className="text-xs text-white/40 mt-1 tracking-wider uppercase">Community Hub</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-white/10 border border-white/15'
                        : 'hover:bg-white/5'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`text-lg ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}>
                      {item.icon}
                    </span>
                    <span className={`text-sm font-medium ${
                      isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90'
                    }`}>
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-[10px] text-white/30 text-center">v1.0 • Modern Glass</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="glass-strong mx-2 mb-2 rounded-2xl px-2 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all ${
                      isActive ? 'bg-white/10' : ''
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className={`text-base ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {item.icon}
                    </span>
                    <span className={`text-[9px] font-medium ${
                      isActive ? 'text-white' : 'text-white/40'
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
