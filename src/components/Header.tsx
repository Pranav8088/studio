
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-4 font-semibold">
          AI Tool
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Button asChild className="ml-2">
            <Link to="/login">Login</Link>
          </Button>
        </nav>
        <ThemeToggle />

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Explore our services and options.</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-4 text-lg font-semibold">
                <Link to="/pricing">Pricing</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Button asChild className="mt-4">
                  <Link to="/contact">Get Consultation</Link> {/* Updated href */}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

    