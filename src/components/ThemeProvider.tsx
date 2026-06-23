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
  theme: 'editorial',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always start as 'editorial' so the server render and first client render
  // match (no hydration mismatch). The stored choice is applied in the effect
  // below; an inline script in <head> sets the attribute pre-paint to avoid a
  // flash for returning Cream/Aubergine visitors.
  const [theme, setThemeState] = useState<Theme>('editorial');

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
