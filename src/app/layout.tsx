import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'BMOWA Community Journal',
  description: 'The editorial community hub for BlueJay Malgudi residents',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
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
      </body>
    </html>
  );
}
