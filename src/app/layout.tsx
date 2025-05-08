
import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter instead of Geist
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster
import Header from '@/components/shared/Header'; // Import Header
import Footer from '@/components/shared/Footer'; // Import Footer
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Setup Inter font

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
    // Explicitly set dark mode as default, ensure smooth scroll
    <html lang="en" className={cn("scroll-smooth dark", inter.variable)}>
      {/* Apply font variable and base styles to body */}
      <body className={cn(
          "font-sans bg-background text-foreground flex flex-col min-h-screen antialiased"
        )}>
        <Header />
        {/* Ensure main content area grows to fill space */}
        <main className="flex-grow pt-16"> {/* Add padding-top equal to header height */}
          {children}
        </main>
        <Footer />
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
