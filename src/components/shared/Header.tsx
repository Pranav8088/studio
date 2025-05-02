import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BriefcaseBusiness } from 'lucide-react';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' }, // Updated href
    { label: 'About', href: '/about' }, // Updated href
    { label: 'Services', href: '/services' }, // Updated href
    { label: 'Why Us', href: '/why-us' }, // Updated href
    { label: 'Insights', href: '/insights' }, // Updated href
    { label: 'FAQs', href: '/faq' }, // Updated href
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <BriefcaseBusiness className="h-6 w-6 text-accent" />
          <span>Nitya Marketing Navigator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
           <Link href="/contact">
             <Button size="sm">Get Consultation</Button>
           </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-6">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
                    <BriefcaseBusiness className="h-6 w-6 text-accent" />
                    <span>Nitya Marketing</span>
                  </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact">
                   <Button className="mt-4 w-full">Get Consultation</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
