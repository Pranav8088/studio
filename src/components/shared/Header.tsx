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
import { Menu, BriefcaseBusiness, Laptop, Smartphone, Wrench, Server } from 'lucide-react'; // Added more icons
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

// Web Development Dropdown Items
const webDevelopmentItems = [
    { title: "Web Development", href: "/web-development", description: "Custom website design and build.", icon: Laptop },
    { title: "Mobile App Development", href: "/mobile-app", description: "Native & cross-platform apps.", icon: Smartphone },
    { title: "Website Maintenance", href: "/website-maintenance", description: "Updates, security, and backups.", icon: Wrench },
    { title: "Hosting Support", href: "/hosting-support", description: "Reliable hosting and support.", icon: Server },
];


// Main Navigation Items (excluding dropdowns handled separately)
const mainNavItems = [
   { label: 'Home', href: '/' },
   { label: 'About', href: '/about' },
   { label: 'Why Us', href: '/why-us' },
   { label: 'Insights', href: '/insights' },
   // Digital Marketing Dropdown Placeholder
   { label: 'Marketing Technologies', href: '/marketing-technologies' },
   // Web Development Dropdown Placeholder
   { label: 'FAQs', href: '/faq' },
];


const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mr-4">
          <BriefcaseBusiness className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline">Nitya Marketing Navigator</span>
          <span className="sm:hidden">Nitya</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {mainNavItems.slice(0, 4).map((item) => ( // Before Digital Marketing
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

             <NavigationMenuItem> {/* Marketing Technologies Link */}
                <Link href={mainNavItems[4].href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {mainNavItems[4].label}
                    </NavigationMenuLink>
                </Link>
             </NavigationMenuItem>

             {/* Web Development Dropdown */}
             <NavigationMenuItem>
                 <NavigationMenuTrigger>Development</NavigationMenuTrigger>
                 <NavigationMenuContent>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                         {webDevelopmentItems.map((item) => (
                             <ListItem
                                key={item.title}
                                title={item.title}
                                href={item.href}
                                icon={item.icon}
                             >
                                {item.description}
                             </ListItem>
                         ))}
                     </ul>
                 </NavigationMenuContent>
             </NavigationMenuItem>


             <NavigationMenuItem> {/* FAQs Link */}
                <Link href={mainNavItems[5].href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {mainNavItems[5].label}
                    </NavigationMenuLink>
                </Link>
             </NavigationMenuItem>

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
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs overflow-y-auto">
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
                 <div className="border-l border-border/60 pl-4">
                    <p className="font-semibold text-muted-foreground text-base mb-2 mt-2">Digital Marketing</p>
                    {digitalMarketingItems.map((item) => (
                       <SheetClose asChild key={item.title}>
                          <Link href={item.href} className="block text-muted-foreground hover:text-accent py-1 text-base">{item.title}</Link>
                       </SheetClose>
                    ))}
                 </div>

                  {/* Marketing Technologies */}
                  <SheetClose asChild key={mainNavItems[4].label}>
                      <Link href={mainNavItems[4].href} className="transition-colors hover:text-accent py-1">{mainNavItems[4].label}</Link>
                  </SheetClose>


                 {/* Web Development Section */}
                 <div className="border-l border-border/60 pl-4">
                    <p className="font-semibold text-muted-foreground text-base mb-2 mt-2">Development</p>
                    {webDevelopmentItems.map((item) => (
                       <SheetClose asChild key={item.title}>
                          <Link href={item.href} className="block text-muted-foreground hover:text-accent py-1 text-base">{item.title}</Link>
                       </SheetClose>
                    ))}
                 </div>


                 {/* FAQs */}
                 <SheetClose asChild key={mainNavItems[5].label}>
                   <Link href={mainNavItems[5].href} className="transition-colors hover:text-accent py-1">{mainNavItems[5].label}</Link>
                 </SheetClose>

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
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType } // Add optional icon prop
>(({ className, title, children, icon: Icon, ...props }, ref) => {
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
            <div className="flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
          <p className={cn("line-clamp-2 text-sm leading-snug text-muted-foreground", Icon && "pl-6")}> {/* Indent description if icon exists */}
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
