import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeSelector from '@/components/ThemeSelector';

export const metadata: Metadata = {
  title: 'BMOWA Community Journal',
  description: 'The editorial community hub for BlueJay Malgudi residents',
};

// Applies the saved design before first paint so returning Cream/Aubergine
// visitors don't see an Editorial flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('bmowa-theme');if(t==='cream'||t==='aubergine'||t==='editorial'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

          {/* Low-profile design switcher (bottom-left) */}
          <ThemeSelector />
        </ThemeProvider>
      </body>
    </html>
  );
}
