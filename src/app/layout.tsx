
import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FloatingCTA from '@/components/shared/FloatingCTA';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Nitya Marketing Management — B2B Growth Partner for SMEs & MSMEs',
    template: '%s | Nitya Marketing Management',
  },
  description: 'Nitya Marketing Management empowers SMEs and MSMEs with expert B2B marketing strategies, GeM portal services, web development, and digital transformation solutions across India.',
  keywords: ['B2B marketing', 'SME marketing', 'MSME marketing', 'GeM services', 'digital marketing Mumbai', 'SEO India', 'government tender services'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nitya Marketing Management',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)} suppressHydrationWarning>
      <body className={cn(
          "font-sans bg-background text-foreground flex flex-col min-h-screen antialiased"
        )} suppressHydrationWarning>
        <Header />
        {/* pt-16 ensures content isn't hidden behind the fixed header */}
        <main className="flex-grow pt-16"> 
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <Toaster />
      </body>
    </html>
  );
}
