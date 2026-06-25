'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'editorial' | 'cream' | 'aubergine';

const THEMES: Theme[] = ['editorial', 'cream', 'aubergine'];
const STORAGE_KEY = 'bmowa-theme';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'cream',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Cream is the default — it matches `data-theme="cream"` rendered on <html>
  // by the server, so the first client render agrees (no hydration mismatch).
  // A returning visitor's stored choice is applied in the effect below; the
  // inline <head> script also sets the attribute pre-paint to avoid a flash.
  const [theme, setThemeState] = useState<Theme>('cream');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored && THEMES.includes(stored)) {
        setThemeState(stored);
        document.documentElement.setAttribute('data-theme', stored);
      }
    } catch {
      /* localStorage unavailable — fall back to Editorial */
    }
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence failures */
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
