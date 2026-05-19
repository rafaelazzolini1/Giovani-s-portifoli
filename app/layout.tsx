import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#fafaf8] text-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
