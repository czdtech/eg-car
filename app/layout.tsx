import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eggy Car Unblocked - Play Free Online Skill Game',
  description: 'Play Eggy Car Unblocked online for free! The ultimate unblocked driving game where you transport eggs safely through challenging terrain. No download required - play instantly in your browser.',
  keywords: 'Eggy Car Unblocked, unblocked games, racing game, physics game, free online games, browser games',
  authors: [{ name: 'Eggy Car Unblocked Portal' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Eggy Car Unblocked - Play Free Online Racing Game',
    description: 'The ultimate unblocked driving game! Transport your egg safely through challenging terrain in this addictive physics-based racing game.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}