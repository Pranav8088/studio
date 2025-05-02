
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'; // Added SheetHeader, SheetTitle, SheetDescription
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, BriefcaseBusiness, LayoutGrid, SearchCheck, Cog, Search, Megaphone, Lightbulb, Film, ShieldCheck, BarChart, Laptop, Smartphone, Wrench, Server, Settings, Zap, AreaChart, DatabaseZap, Code, Palette, ShoppingCart } from 'lucide-react'; // Added more icons
import { cn } from "@/lib/utils";
import React from 'react';


// Digital Marketing Dropdown Items
const digitalMarketingItems = [
  { title: "SEO", href: "/digital-marketing/seo", description: "Improve search engine rankings.", icon: Search },
  { title: "Social Media Marketing", href: "/digital-marketing/social-media-marketing", description: "Engage audiences on social platforms.", icon: Megaphone },
  { title: "Design Thinking", href: "/digital-marketing/design-thinking", description: "User-centric design solutions.", icon: Lightbulb },
  { title: "Video Production", href: "/digital-marketing/video-production", description: "Compelling video content creation.", icon: Film },
  { title: "ORM", href: "/digital-marketing/orm", description: "Manage your online reputation.", icon: ShieldCheck },
  { title: "Google Ads", href: "/digital-marketing/google-ads", description: "Targeted advertising campaigns.", icon: BarChart },
];

// Marketing Technologies Dropdown Items
const marketingTechnologiesItems = [
  { title: "Platform Selection", href: "/marketing-technologies", description: "Choose the right tech stack.", icon: Settings },
  { title: "Marketing Automation", href: "/marketing-technologies", description: "Implement automation workflows.", icon: Zap }, // Consider a more specific subpage if needed
  { title: "CRM Integration", href: "/marketing-technologies", description: "Connect CRM for sales alignment.", icon: DatabaseZap }, // Consider a more specific subpage if needed
  { title: "Analytics & Data", href: "/marketing-technologies", description: "Setup tracking and reporting.", icon: AreaChart }, // Consider a more specific subpage if needed
];

// Web Development Dropdown Items
const webDevelopmentItems = [
    { title: "Custom Development", href: "/web-development", description: "Unique, professional websites.", icon: Laptop },
    { title: "Responsive Design", href: "/web-development", description: "Optimal viewing on all devices.", icon: Palette }, // Consider a more specific subpage if needed
    { title: "E-commerce Solutions", href: "/web-development", description: "Secure B2B online stores.", icon: ShoppingCart }, // Consider a more specific subpage if needed
    { title: "CMS Integration", href: "/web-development", description: "Easy content management.", icon: Code }, // Consider a more specific subpage if needed
];

// Mobile App Development Dropdown Items
const mobileAppItems = [
    { title: "iOS & Android Native", href: "/mobile-app", description: "High-performance native apps.", icon: Smartphone },
    { title: "Cross-Platform Dev", href: "/mobile-app", description: "Apps for multiple platforms.", icon: Smartphone }, // Consider a more specific subpage if needed
    { title: "UI/UX Design", href: "/mobile-app", description: "Intuitive mobile interfaces.", icon: Smartphone }, // Consider a more specific subpage if needed
    { title: "Maintenance & Support", href: "/mobile-app", description: "Ongoing app support.", icon: Smartphone }, // Consider a more specific subpage if needed
];


// Website Maintenance Dropdown Items
const websiteMaintenanceItems = [
    { title: "Security Updates", href: "/website-maintenance", description: "Regular patches & monitoring.", icon: ShieldCheck },
    { title: "Software Updates", href: "/website-maintenance", description: "Keep CMS, themes, plugins updated.", icon: Wrench }, // Consider a more specific subpage if needed
    { title: "Regular Backups", href: "/website-maintenance", description: "Scheduled data backups.", icon: DatabaseZap }, // Consider a more specific subpage if needed
    { title: "Performance Checks", href: "/website-maintenance", description: "Ensure optimal loading speed.", icon: BarChart }, // Consider a more specific subpage if needed
];

// Hosting Support Dropdown Items
const hostingSupportItems = [
    { title: "Reliable Hosting", href: "/hosting-support", description: "Secure & scalable hosting plans.", icon: Server },
    { title: "Performance Optimization", href: "/hosting-support", description: "Fast loading times.", icon: Server }, // Consider a more specific subpage if needed
    { title: "Security Measures", href: "/hosting-support", description: "SSL, firewalls, malware scanning.", icon: ShieldCheck }, // Consider a more specific subpage if needed
    { title: "Technical Support", href: "/hosting-support", description: "Dedicated hosting assistance.", icon: Server }, // Consider a more specific subpage if needed
];



// Main Navigation Items (excluding dropdowns handled separately)
const mainNavItems = [
   { label: 'Home', href: '/' },
   { label: 'About', href: '/about' },
   { label: 'Why Us', href: '/why-us' },
   { label: 'Insights', href: '/insights' },
   // Dropdown Placeholders handled below
   { label: 'FAQs', href: '/faq' },
];


const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mr-4 shrink-0">
          <BriefcaseBusiness className="h-6 w-6 text-accent" />
          {/* Show full name on medium screens and up, short name on small screens */}
          <span className="hidden sm:inline">Nitya Marketing Navigator</span>
          <span className="sm:hidden">Nitya</span>
        </Link>

        {/* Desktop Navigation - Hidden below lg breakpoint */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center">
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
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

             {/* Marketing Technologies Dropdown */}
             <NavigationMenuItem>
                 <NavigationMenuTrigger>MarTech</NavigationMenuTrigger>
                 <NavigationMenuContent>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                         {marketingTechnologiesItems.map((item) => (
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

             {/* Web Development Dropdown */}
             <NavigationMenuItem>
                 <NavigationMenuTrigger>Web</NavigationMenuTrigger>
                 <NavigationMenuContent>
                    <div className="p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                      <h3 className="font-semibold text-primary mb-3 px-3">Web Development</h3>
                      <ul className="grid gap-3 md:grid-cols-2">
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
                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                         <div>
                             <h4 className="font-semibold text-primary mb-2 px-3 text-sm">Mobile Apps</h4>
                             <ul className="grid gap-3">
                                {mobileAppItems.map((item) => (
                                    <ListItem
                                      key={item.title}
                                      title={item.title}
                                      href={item.href}
                                      icon={item.icon}
                                      className="text-sm" // Smaller text for sub-items
                                    >
                                      {item.description}
                                    </ListItem>
                                ))}
                              </ul>
                          </div>
                          <div>
                              <h4 className="font-semibold text-primary mb-2 px-3 text-sm">Site Care</h4>
                              <ul className="grid gap-3">
                                 {websiteMaintenanceItems.map((item) => (
                                    <ListItem
                                      key={item.title}
                                      title={item.title}
                                      href={item.href}
                                      icon={item.icon}
                                      className="text-sm" // Smaller text for sub-items
                                    >
                                      {item.description}
                                    </ListItem>
                                ))}
                                {hostingSupportItems.map((item) => (
                                    <ListItem
                                      key={item.title}
                                      title={item.title}
                                      href={item.href}
                                      icon={item.icon}
                                      className="text-sm" // Smaller text for sub-items
                                    >
                                      {item.description}
                                    </ListItem>
                                ))}
                              </ul>
                          </div>
                      </div>
                     </div>
                 </NavigationMenuContent>
             </NavigationMenuItem>


             <NavigationMenuItem> {/* FAQs Link */}
                <Link href={mainNavItems[4].href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {mainNavItems[4].label}
                    </NavigationMenuLink>
                </Link>
             </NavigationMenuItem>



          </NavigationMenuList>
        </NavigationMenu>

         {/* Right side items (Contact Button) - Always visible but moves */}
         <div className="hidden lg:flex ml-auto shrink-0">
             <Link href="/contact" legacyBehavior passHref>
                  <Button className={cn(navigationMenuTriggerStyle(), "bg-primary text-primary-foreground hover:bg-primary/90")}>
                     Get Consultation
                  </Button>
               </Link>
          </div>


        {/* Mobile Navigation Trigger - Hidden on lg and up */}
        <div className="lg:hidden flex items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Toggle Navigation Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm overflow-y-auto p-0">
              <SheetHeader className="p-6 pb-4 border-b">
                 <SheetTitle>
                   <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-1">
                      <BriefcaseBusiness className="h-6 w-6 text-accent" />
                      <span>Nitya Marketing</span>
                    </Link>
                </SheetTitle>
                 <SheetDescription>Navigate our services and expertise.</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-2 text-base font-medium p-4">

                {/* Main Links */}
                {mainNavItems.slice(0, 4).map((item) => (
                   <SheetClose asChild key={item.label}>
                     <Link href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                       {/* Optional: Add icons here if desired */}
                       {item.label}
                     </Link>
                   </SheetClose>
                ))}

                 {/* Digital Marketing Section */}
                 <div className="py-2">
                    <h4 className="mb-1 rounded-lg px-3 py-1 text-sm font-semibold text-primary">Digital Marketing</h4>
                    <div className="grid grid-flow-row auto-rows-max text-sm">
                        {digitalMarketingItems.map((item) => (
                           <SheetClose asChild key={item.title}>
                              <Link href={item.href} className="flex w-full items-center gap-3 rounded-lg py-1.5 pl-6 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                  <item.icon className="h-4 w-4 mr-1 text-accent"/>
                                  {item.title}
                              </Link>
                           </SheetClose>
                        ))}
                    </div>
                 </div>

                  {/* Marketing Technologies Section */}
                 <div className="py-2">
                    <h4 className="mb-1 rounded-lg px-3 py-1 text-sm font-semibold text-primary">Marketing Technologies</h4>
                    <div className="grid grid-flow-row auto-rows-max text-sm">
                        {marketingTechnologiesItems.map((item) => (
                           <SheetClose asChild key={item.title}>
                              <Link href={item.href} className="flex w-full items-center gap-3 rounded-lg py-1.5 pl-6 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                   <item.icon className="h-4 w-4 mr-1 text-accent"/>
                                  {item.title}
                              </Link>
                           </SheetClose>
                        ))}
                    </div>
                 </div>

                  {/* Web Development Section */}
                 <div className="py-2">
                    <h4 className="mb-1 rounded-lg px-3 py-1 text-sm font-semibold text-primary">Web Development</h4>
                    <div className="grid grid-flow-row auto-rows-max text-sm">
                        {webDevelopmentItems.map((item) => (
                           <SheetClose asChild key={item.title}>
                              <Link href={item.href} className="flex w-full items-center gap-3 rounded-lg py-1.5 pl-6 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                   <item.icon className="h-4 w-4 mr-1 text-accent"/>
                                  {item.title}
                              </Link>
                           </SheetClose>
                        ))}
                    </div>
                 </div>

                 {/* Mobile App Section */}
                  <div className="py-2">
                     <h4 className="mb-1 rounded-lg px-3 py-1 text-sm font-semibold text-primary">Mobile Apps</h4>
                     <div className="grid grid-flow-row auto-rows-max text-sm">
                         {mobileAppItems.map((item) => (
                            <SheetClose asChild key={item.title}>
                               <Link href={item.href} className="flex w-full items-center gap-3 rounded-lg py-1.5 pl-6 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                    <item.icon className="h-4 w-4 mr-1 text-accent"/>
                                   {item.title}
                               </Link>
                            </SheetClose>
                         ))}
                     </div>
                  </div>

                   {/* Website Maintenance Section */}
                   <div className="py-2">
                      <h4 className="mb-1 rounded-lg px-3 py-1 text-sm font-semibold text-primary">Website Maintenance</h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                          {websiteMaintenanceItems.map((item) => (
                             <SheetClose asChild key={item.title}>
                                <Link href={item.href} className="flex w-full items-center gap-3 rounded-lg py-1.5 pl-6 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                     <item.icon className="h-4 w-4 mr-1 text-accent"/>
                                    {item.title}
                                </Link>
                             </SheetClose>
                          ))}
                      </div>
                   </div>

                   {/* Hosting Support Section */}
                    <div className="py-2">
                       <h4 className="mb-1 rounded-lg px-3 py-1 text-sm font-semibold text-primary">Hosting Support</h4>
                       <div className="grid grid-flow-row auto-rows-max text-sm">
                           {hostingSupportItems.map((item) => (
                              <SheetClose asChild key={item.title}>
                                 <Link href={item.href} className="flex w-full items-center gap-3 rounded-lg py-1.5 pl-6 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                      <item.icon className="h-4 w-4 mr-1 text-accent"/>
                                     {item.title}
                                 </Link>
                              </SheetClose>
                           ))}
                       </div>
                    </div>


                 {/* FAQs */}
                 <SheetClose asChild key={mainNavItems[4].label}>
                   <Link href={mainNavItems[4].href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted mt-2">
                       {/* Optional: Add icon here if desired */}
                       {mainNavItems[4].label}
                     </Link>
                 </SheetClose>

                <SheetClose asChild>
                  <Link href="/contact" className="mt-4 px-3">
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
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
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
          <p className={cn("line-clamp-2 text-sm leading-snug text-muted-foreground", Icon ? "pl-6" : "")}> {/* Indent description if icon exists */}
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
