import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeSelector from '@/components/ThemeSelector';

export const metadata: Metadata = {
  title: 'BMOWA Community Journal',
  description: 'The editorial community hub for BlueJay Malgudi residents',
};

// Cream is the default design (set on <html> below). This script applies a
// returning visitor's saved choice before first paint, so switching to
// Editorial/Aubergine doesn't flash Cream first.
const themeInitScript = `(function(){try{var t=localStorage.getItem('bmowa-theme');if(t==='cream'||t==='aubergine'||t==='editorial'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cream" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          {/* Atmospheric background blooms */}
          <div className="atmospheric-blooms" />

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="relative z-10 lg:ml-60 min-h-screen pb-28 lg:pb-12">
            <div className="px-6 py-12 lg:px-16 lg:py-16 max-w-5xl mx-auto">
              {children}
            </div>
          </main>

          {/* Design switcher: docked in the sidebar footer on desktop; on
              mobile/tablet (sidebar hidden) it floats in the top-right corner —
              clear of the content cards and the bottom nav, always reachable. */}
          <div className="lg:hidden fixed top-4 right-4 z-[60]">
            <ThemeSelector direction="down" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
