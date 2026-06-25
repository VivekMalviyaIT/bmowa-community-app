'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme, type Theme } from './ThemeProvider';

interface ThemeOption {
  id: Theme;
  label: string;
  hint: string;
  swatch: [string, string, string]; // [canvas, ink/brand, accent]
}

const OPTIONS: ThemeOption[] = [
  { id: 'cream', label: 'Cream', hint: 'Warm & light', swatch: ['#F7F4EC', '#8C2D33', '#3C6B4E'] },
  { id: 'aubergine', label: 'Aubergine', hint: 'Moody & dark', swatch: ['#2A0F13', '#DB908C', '#D8BC8C'] },
  { id: 'editorial', label: 'Editorial', hint: 'The original', swatch: ['#F7F7F7', '#1A1A1A', '#C4A882'] },
];

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative z-[60]"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-9 left-0 w-48 rounded-2xl p-1.5 editorial-card"
            role="listbox"
            aria-label="Choose a design"
          >
            <p className="px-2.5 pt-1.5 pb-1 text-[9px] uppercase tracking-[0.18em] text-text-subtle">
              Design
            </p>
            {OPTIONS.map((opt) => {
              const active = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setTheme(opt.id);
                    setOpen(false);
                  }}
                  className={`group flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors ${
                    active ? 'bg-foreground/[0.05]' : 'hover:bg-foreground/[0.03]'
                  }`}
                >
                  {/* Swatch */}
                  <span
                    className="flex h-6 w-6 flex-shrink-0 overflow-hidden rounded-full"
                    style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}
                  >
                    <span className="h-full w-1/2" style={{ background: opt.swatch[0] }} />
                    <span className="flex h-full w-1/2 flex-col">
                      <span className="h-1/2 w-full" style={{ background: opt.swatch[1] }} />
                      <span className="h-1/2 w-full" style={{ background: opt.swatch[2] }} />
                    </span>
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block text-[12px] font-medium leading-tight text-foreground">
                      {opt.label}
                    </span>
                    <span className="block text-[10px] leading-tight text-text-subtle">
                      {opt.hint}
                    </span>
                  </span>

                  {active && (
                    <span className="text-[11px] text-text-muted" aria-hidden>
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger — intentionally subtle / low profile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch design"
        aria-expanded={open}
        title="Switch design"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
          open ? 'opacity-100' : 'opacity-30 hover:opacity-100'
        }`}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" className="text-text-muted" />
          <path d="M8 1.75 A6.25 6.25 0 0 1 8 14.25 Z" fill="currentColor" className="text-text-muted" />
        </svg>
      </button>
    </div>
  );
}
