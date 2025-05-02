import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Added SheetClose
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, BriefcaseBusiness } from 'lucide-react';
import { cn } from "@/lib/utils";
import React from 'react';

// Digital Marketing Dropdown Items
const digitalMarketingItems = [
  { title: "SEO", href: "/digital-marketing/seo", description: "Improve search engine rankings." },
  { title: "Social Media Marketing", href: "/digital-marketing/social-media-marketing", description: "Engage audiences on social platforms." },
  { title: "Design Thinking", href: "/digital-marketing/design-thinking", description: "User-centric design solutions." },
  { title: "Video Production", href: "/digital-marketing/video-production", description: "Compelling video content creation." },
  { title: "ORM", href: "/digital-marketing/orm", description: "Manage your online reputation." },
  { title: "Google Ads", href: "/digital-marketing/google-ads", description: "Targeted advertising campaigns." },
];

// Main Navigation Items
const mainNavItems = [
   { label: 'Home', href: '/' },
   { label: 'About', href: '/about' },
   { label: 'Why Us', href: '/why-us' },
   { label: 'Insights', href: '/insights' },
   // Digital Marketing Dropdown Placeholder - handled separately in NavigationMenu
   { label: 'Marketing Technologies', href: '/marketing-technologies' },
   { label: 'Web Development', href: '/web-development' },
   { label: 'Mobile App', href: '/mobile-app' },
   { label: 'Website Maintenance', href: '/website-maintenance' },
   { label: 'Hosting Support', href: '/hosting-support' },
   { label: 'FAQs', href: '/faq' },
];


const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <BriefcaseBusiness className="h-6 w-6 text-accent" />
          <span>Nitya Marketing Navigator</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {mainNavItems.slice(0, 4).map((item) => ( // Home, About, Why Us, Insights
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

             {/* Digital Marketing Dropdown */}
             <NavigationMenuItem>
              <NavigationMenuTrigger>Digital Marketing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {digitalMarketingItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {mainNavItems.slice(4).map((item) => ( // Items after Digital Marketing
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
               <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-primary text-primary-foreground hover:bg-primary/90")}>
                     Get Consultation
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>


        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <nav className="grid gap-4 text-lg font-medium mt-6">
                 <SheetClose asChild>
                   <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
                      <BriefcaseBusiness className="h-6 w-6 text-accent" />
                      <span>Nitya Marketing</span>
                    </Link>
                  </SheetClose>

                {/* Main Links */}
                {mainNavItems.slice(0, 4).map((item) => (
                   <SheetClose asChild key={item.label}>
                     <Link href={item.href} className="transition-colors hover:text-accent py-1">{item.label}</Link>
                   </SheetClose>
                ))}

                 {/* Digital Marketing Section */}
                 <div className="pl-4 border-l border-border/60">
                    <p className="font-semibold text-muted-foreground text-base mb-2">Digital Marketing</p>
                    {digitalMarketingItems.map((item) => (
                       <SheetClose asChild key={item.title}>
                          <Link href={item.href} className="block text-muted-foreground hover:text-accent py-1">{item.title}</Link>
                       </SheetClose>
                    ))}
                 </div>

                 {/* Remaining Main Links */}
                 {mainNavItems.slice(4).map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link href={item.href} className="transition-colors hover:text-accent py-1">{item.label}</Link>
                    </SheetClose>
                 ))}

                <SheetClose asChild>
                  <Link href="/contact" className="mt-4">
                     <Button className="w-full">Get Consultation</Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

// Helper component for NavigationMenu dropdown items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
