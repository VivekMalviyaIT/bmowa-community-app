import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'BMOWA Community Hub',
  description: 'Modern Glass community management app for BMOWA residents',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {/* Ambient background glow */}
        <div className="ambient-glow" />

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="relative z-10 lg:ml-64 min-h-screen pb-24 lg:pb-8">
          <div className="p-4 lg:p-8 max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
