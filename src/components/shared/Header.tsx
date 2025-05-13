
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menu, BriefcaseBusiness, Search, Megaphone, Lightbulb, Film, ShieldCheck, BarChart, Laptop, Smartphone, Wrench, Server, Settings, Zap, AreaChart, DatabaseZap, Code, Palette, ShoppingCart, Layers, TabletSmartphone, Settings2, Activity, DatabaseBackup, Gauge, ShieldAlert, LifeBuoy // Added missing icons
} from 'lucide-react';
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

// Marketing Technologies Link (No Dropdown - this is a direct link now)
// const marketingTechnologiesItems = [ ... ]; // Removed as it's a direct link

// Web Solutions Dropdown (Combined Web Dev, Mobile App, Maintenance, Hosting)
const webDevelopmentSubItems = [
    { title: "Custom Web Development", href: "/web-development", description: "Unique, professional websites.", icon: Laptop },
    { title: "Responsive Design", href: "/web-development", description: "Optimal viewing on all devices.", icon: Palette },
    { title: "E-commerce Solutions", href: "/web-development", description: "Secure B2B online stores.", icon: ShoppingCart },
    { title: "CMS Integration", href: "/web-development", description: "Easy content management.", icon: Code },
];

const mobileAppSubItems = [
    { title: "Native iOS & Android", href: "/mobile-app", description: "Platform-specific mobile apps.", icon: Smartphone },
    { title: "Cross-Platform Apps", href: "/mobile-app", description: "Cost-effective multi-platform apps.", icon: TabletSmartphone },
    { title: "Mobile UI/UX Design", href: "/mobile-app", description: "Intuitive mobile interfaces.", icon: Layers },
    { title: "App Maintenance", href: "/mobile-app", description: "Ongoing support & updates.", icon: Settings2 },
];

const websiteMaintenanceSubItems = [
    { title: "Security Updates", href: "/website-maintenance", description: "Proactive security patching.", icon: ShieldCheck },
    { title: "Software Management", href: "/website-maintenance", description: "CMS, theme, plugin updates.", icon: Wrench },
    { title: "Regular Backups", href: "/website-maintenance", description: "Automated data backups.", icon: DatabaseBackup },
    { title: "Performance Checks", href: "/website-maintenance", description: "Optimize site speed.", icon: Activity },
];

const hostingSupportSubItems = [
    { title: "Reliable Hosting", href: "/hosting-support", description: "Secure & scalable hosting.", icon: Server },
    { title: "Performance Tuning", href: "/hosting-support", description: "Fast loading times.", icon: Gauge },
    { title: "Security Measures", href: "/hosting-support", description: "SSL, firewalls, monitoring.", icon: ShieldAlert },
    { title: "Technical Support", href: "/hosting-support", description: "Expert hosting assistance.", icon: LifeBuoy },
];

// Main Navigation Items
const mainNavItems = [
   { label: 'Home', href: '/' },
   { label: 'About', href: '/about' },
   { label: 'Why Us', href: '/why-us' },
   { label: 'Insights', href: '/insights' },
   // Digital Marketing (Dropdown)
   // Marketing Technologies (Direct Link)
   // Web Solutions (Dropdown)
   { label: 'FAQs', href: '/faq' },
];


const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16">
      <div className="container flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mr-4 shrink-0 hover:opacity-90 transition-opacity">
          <BriefcaseBusiness className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline">Nitya Marketing Navigator</span>
          <span className="sm:hidden">Nitya</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center">
          <NavigationMenuList>
            {mainNavItems.slice(0, 4).map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

             <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">Digital Marketing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[450px] gap-3 p-4 md:w-[550px] md:grid-cols-2 lg:w-[650px] ">
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

             <NavigationMenuItem>
                <Link href="/marketing-technologies" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                        Marketing Technologies
                    </NavigationMenuLink>
                </Link>
             </NavigationMenuItem>

             <NavigationMenuItem>
                 <NavigationMenuTrigger className="text-sm">Web Solutions</NavigationMenuTrigger>
                 <NavigationMenuContent>
                    <div className="grid w-[600px] gap-x-4 p-4 md:w-[700px] lg:w-[800px] grid-cols-2">
                        <div>
                            <h3 className="text-sm font-medium text-primary px-3 pb-2">Web Development</h3>
                            <ul className="space-y-1">
                               {webDevelopmentSubItems.map((item) => (
                                   <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} className="hover:bg-accent/10">
                                     {item.description}
                                   </ListItem>
                               ))}
                            </ul>
                             <h3 className="text-sm font-medium text-primary px-3 pt-4 pb-2">Mobile App Development</h3>
                             <ul className="space-y-1">
                               {mobileAppSubItems.map((item) => (
                                   <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} className="hover:bg-accent/10">
                                     {item.description}
                                   </ListItem>
                               ))}
                            </ul>
                        </div>
                        <div>
                             <h3 className="text-sm font-medium text-primary px-3 pb-2">Website Maintenance</h3>
                             <ul className="space-y-1">
                               {websiteMaintenanceSubItems.map((item) => (
                                   <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} className="hover:bg-accent/10">
                                     {item.description}
                                   </ListItem>
                               ))}
                            </ul>
                            <h3 className="text-sm font-medium text-primary px-3 pt-4 pb-2">Hosting Support</h3>
                             <ul className="space-y-1">
                               {hostingSupportSubItems.map((item) => (
                                   <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} className="hover:bg-accent/10">
                                     {item.description}
                                   </ListItem>
                               ))}
                            </ul>
                        </div>
                    </div>
                 </NavigationMenuContent>
             </NavigationMenuItem>

             <NavigationMenuItem>
                <Link href={mainNavItems[4].href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm")}>
                        {mainNavItems[4].label}
                    </NavigationMenuLink>
                </Link>
             </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

         <div className="hidden lg:flex ml-auto shrink-0">
             <Link href="/contact" legacyBehavior passHref>
                  <Button size="sm" className={cn("bg-primary text-primary-foreground hover:bg-primary/90", navigationMenuTriggerStyle())}>
                     Get Consultation
                  </Button>
               </Link>
          </div>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden flex items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Toggle Navigation Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm p-0 flex flex-col">
               <SheetHeader className="p-4 pb-2 border-b">
                 <SheetTitle>
                   <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
                      <BriefcaseBusiness className="h-5 w-5 text-accent" />
                      <span>Nitya Marketing</span>
                    </Link>
                 </SheetTitle>
              </SheetHeader>
              <div className="flex-grow overflow-y-auto">
                <nav className="p-4 grid gap-1 text-sm font-medium">
                  {mainNavItems.map((item) => (
                     <SheetClose asChild key={item.label}>
                       <Link href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                         {item.label}
                       </Link>
                     </SheetClose>
                  ))}

                   <div className="my-2 border-t border-border/40"></div>

                   <div className="py-1">
                      <h4 className="mb-1 rounded-md px-3 py-1 text-xs font-semibold text-primary/80 uppercase tracking-wider">Digital Marketing</h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                          {digitalMarketingItems.map((item) => (
                             <SheetClose asChild key={item.title}>
                                <Link href={item.href} className="flex w-full items-center gap-2 rounded-md py-1.5 pl-5 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                    <item.icon className="h-3.5 w-3.5 text-accent flex-shrink-0"/>
                                    <span>{item.title}</span>
                                </Link>
                             </SheetClose>
                          ))}
                      </div>
                   </div>

                    <SheetClose asChild>
                        <Link href="/marketing-technologies" className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                            Marketing Technologies
                        </Link>
                    </SheetClose>
                     <div className="my-2 border-t border-border/40"></div>

                   <div className="py-1">
                      <h4 className="mb-1 rounded-md px-3 py-1 text-xs font-semibold text-primary/80 uppercase tracking-wider">Web Development</h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                          {webDevelopmentSubItems.map((item) => (
                             <SheetClose asChild key={item.title}>
                                <Link href={item.href} className="flex w-full items-center gap-2 rounded-md py-1.5 pl-5 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                     <item.icon className="h-3.5 w-3.5 text-accent flex-shrink-0"/>
                                    <span>{item.title}</span>
                                </Link>
                             </SheetClose>
                          ))}
                      </div>
                   </div>
                   <div className="py-1">
                      <h4 className="mb-1 rounded-md px-3 py-1 text-xs font-semibold text-primary/80 uppercase tracking-wider">Mobile App Development</h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                          {mobileAppSubItems.map((item) => (
                             <SheetClose asChild key={item.title}>
                                <Link href={item.href} className="flex w-full items-center gap-2 rounded-md py-1.5 pl-5 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                     <item.icon className="h-3.5 w-3.5 text-accent flex-shrink-0"/>
                                    <span>{item.title}</span>
                                </Link>
                             </SheetClose>
                          ))}
                      </div>
                   </div>
                   <div className="py-1">
                      <h4 className="mb-1 rounded-md px-3 py-1 text-xs font-semibold text-primary/80 uppercase tracking-wider">Website Maintenance</h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                          {websiteMaintenanceSubItems.map((item) => (
                             <SheetClose asChild key={item.title}>
                                <Link href={item.href} className="flex w-full items-center gap-2 rounded-md py-1.5 pl-5 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                     <item.icon className="h-3.5 w-3.5 text-accent flex-shrink-0"/>
                                    <span>{item.title}</span>
                                </Link>
                             </SheetClose>
                          ))}
                      </div>
                   </div>
                   <div className="py-1">
                      <h4 className="mb-1 rounded-md px-3 py-1 text-xs font-semibold text-primary/80 uppercase tracking-wider">Hosting Support</h4>
                      <div className="grid grid-flow-row auto-rows-max text-sm">
                          {hostingSupportSubItems.map((item) => (
                             <SheetClose asChild key={item.title}>
                                <Link href={item.href} className="flex w-full items-center gap-2 rounded-md py-1.5 pl-5 pr-3 text-muted-foreground hover:text-primary hover:bg-muted/50">
                                     <item.icon className="h-3.5 w-3.5 text-accent flex-shrink-0"/>
                                    <span>{item.title}</span>
                                </Link>
                             </SheetClose>
                          ))}
                      </div>
                   </div>
                </nav>
              </div>
               <div className="p-4 border-t border-border/40 mt-auto">
                 <SheetClose asChild>
                   <Link href="/contact" className="w-full">
                      <Button size="sm" className="w-full">Get Consultation</Button>
                   </Link>
                 </SheetClose>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

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
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
            <div className="flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4 text-primary group-hover:text-accent-foreground flex-shrink-0" />}
              <div className="text-sm font-medium leading-none text-foreground group-hover:text-accent-foreground">{title}</div>
            </div>
          <p className={cn("line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground", Icon ? "pl-6" : "")}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
