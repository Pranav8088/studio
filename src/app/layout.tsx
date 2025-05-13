
import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nitya Marketing Navigator - Your B2B Growth Partner',
  description: 'Empowering SMEs & MSMEs with expert B2B marketing strategies for brand building, sales driving, and market presence establishment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth dark", inter.variable)}>
      <body className={cn(
          "font-sans bg-background text-foreground flex flex-col min-h-screen antialiased"
        )}>
        <Header />
        {/* pt-16 ensures content isn't hidden behind the fixed header */}
        <main className="flex-grow pt-16"> 
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
