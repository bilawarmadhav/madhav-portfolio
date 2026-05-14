import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LenisProvider } from '@/components/ui/lenis-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Madhav Bilawar — Creative Developer',
  description:
    'BCA student and aspiring software developer building clean websites, practical software ideas, and interactive digital experiences that mix logic with creativity.',
  keywords: ['Madhav Bilawar', 'developer', 'portfolio', 'BCA', 'web development', 'Java', 'DSA'],
  authors: [{ name: 'Madhav Bilawar' }],
  openGraph: {
    title: 'Madhav Bilawar — Creative Developer',
    description: 'Building modern digital experiences with creativity and logic.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="noise" suppressHydrationWarning>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
