
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
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
  Menu, BriefcaseBusiness, Search, Megaphone, BarChart, Laptop, Smartphone, ShieldCheck, Cog, Layers, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, LayoutGrid, Settings2, Zap, AreaChart, DatabaseZap, Code, Palette, ShoppingCart, Wrench, Activity, DatabaseBackup, Server, Gauge, LifeBuoy, Target, Users, TrendingUp, Lightbulb, BrainCircuit, Wand2, Filter, BadgeDollarSign, BarChartBig, MessageSquareHeart, Link2, CheckCircle, Share2, Film, Clapperboard, Sparkles, Store, Video as VideoIcon, Gavel, UserCog, ShoppingCart as ShoppingCartIcon
} from 'lucide-react';
import { cn } from "@/lib/utils";
import React from 'react';

// Main Navigation Items
const mainNavItems = [
   { label: 'HOME', href: '/' },
   { label: 'ABOUT US', href: '/about' },
   { label: 'WHY CHOOSE US', href: '/why-us' },
   // SERVICES will be a dropdown
   { label: 'SERVICES', href: '/services' },
   { label: 'INSIGHTS', href: '/insights' },
   { label: 'FAQs', href: '/faq' },
   { label: 'CONTACT US', href: '/contact' },
];

const serviceCategories = [
  {
    title: "Digital Marketing",
    href: "/digital-marketing", 
    icon: Megaphone,
    description: "End-to-end digital marketing solutions to boost your online presence.",
    subItems: [
      { title: "Digital Marketing Overview", href: "/digital-marketing", icon: Megaphone, description: "Comprehensive digital marketing solutions" },
      { title: "SEO Services", href: "/digital-marketing/seo", icon: Search, description: "Search engine optimization" },
      { title: "Social Media Marketing", href: "/digital-marketing/social-media-marketing", icon: Users, description: "Social media strategy & management" },
      { title: "Google Ads", href: "/digital-marketing/google-ads", icon: BadgeDollarSign, description: "PPC advertising solutions" },
    ]
  },
  {
    title: "Web Development",
    href: "/web-development", 
    icon: Code,
    description: "Custom web solutions for your business needs.",
    subItems: [
      { title: "Web Development", href: "/web-development", icon: Code, description: "Custom website development" },
      { title: "Mobile App Development", href: "/mobile-app", icon: Smartphone, description: "iOS & Android apps" },
    ]
  },
  {
    title: "GEM Services",
    href: "/gem", 
    icon: BriefcaseBusiness,
    description: "Government e-Marketplace solutions.",
    subItems: [
      { title: "GEM Registration", href: "/gem/registration", icon: CheckCircle, description: "Vendor registration" },
      { title: "GEM Bidding", href: "/gem/bidding", icon: Gavel, description: "Bid management" },
    ]
  },
  {
    title: "B2B Marketplace",
    href: "/services/b2b-marketplace", 
    icon: Store,
    description: "End-to-end B2B solutions.",
    subItems: [
      { title: "Vendor Portal", href: "/b2b/vendor", icon: UserCog, description: "Vendor management" },
      { title: "Buyer Portal", href: "/b2b/buyer", icon: ShoppingCart, description: "Procurement solutions" },
    ]
  },
  {
    title: "Marketing Technologies",
    href: "/marketing-technologies", 
    icon: Zap,
    description: "Technology solutions for marketing.",
    subItems: [
      { title: "Marketing Automation", href: "/marketing/automation", icon: Zap, description: "Automate marketing workflows" },
      { title: "Analytics", href: "/marketing/analytics", icon: BarChart, description: "Data-driven insights" },
    ]
  }
];


const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Facebook, label: "Facebook" },
];


const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16">
      <div className="container flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mr-2 shrink-0 hover:opacity-90 transition-opacity">
          <Image 
            src="/images/Nitya Marketing Logo.png" 
            alt="Nitya Marketing Logo" 
            width={200}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center">
          <NavigationMenuList>
            {mainNavItems.slice(0,3).map((item) => ( // Items before SERVICES
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "text-sm font-medium")}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">SERVICES</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                  {serviceCategories.map((category) => (
                    <li key={category.title} className="row-span-3">
                       <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={category.href}
                        >
                          <category.icon className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                            {category.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {category.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                   {serviceCategories.flatMap(category => category.subItems).map((subItem) => (
                     <ListItem
                       key={subItem.title}
                       title={subItem.title}
                       href={subItem.href}
                       icon={subItem.icon}
                     >
                       {subItem.description}
                     </ListItem>
                   ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {mainNavItems.slice(3).map((item) => ( // Items after SERVICES
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "text-sm font-medium")}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

         <div className="hidden lg:flex items-center gap-2 ml-auto shrink-0">
            {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild aria-label={social.label} className="text-muted-foreground hover:text-primary">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4" />
                    </Link>
                </Button>
            ))}
             <Button size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact#contact-form-home">SCHEDULE A CALL</Link>
            </Button>
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
                   <Link href="/" className="flex items-center justify-center">
                      <Image 
                        src="/images/Nitya Marketing Logo.png" 
                        alt="Nitya Marketing Logo" 
                        width={180}
                        height={54}
                        className="h-14 w-auto"
                        priority
                      />
                    </Link>
                 </SheetTitle>
              </SheetHeader>
              <div className="flex-grow overflow-y-auto">
                <nav className="p-4 grid gap-1 text-sm font-medium">
                  {mainNavItems.slice(0,3).map((item) => ( // Before Services
                     <SheetClose asChild key={item.label + "-mobile-pre"}>
                       <Link href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                         {item.label}
                       </Link>
                     </SheetClose>
                  ))}
                  
                  {/* Adding Services link and sub-items for mobile */}
                  <SheetClose asChild>
                    <Link href="/services" className="flex items-center gap-3 rounded-md px-3 py-2 font-semibold text-primary transition-all hover:bg-muted">
                      SERVICES
                    </Link>
                  </SheetClose>
                  <div className="pl-4 border-l border-border/40 ml-1">
                    {serviceCategories.flatMap(category => category.subItems).map((subItem) => (
                       <SheetClose asChild key={subItem.title + "-mobile"}>
                         <Link href={subItem.href} className="flex items-center gap-3 rounded-md px-3 py-1.5 text-muted-foreground transition-all hover:text-primary hover:bg-muted text-xs">
                           {subItem.title}
                         </Link>
                       </SheetClose>
                    ))}
                  </div>
                  
                   {mainNavItems.slice(3).map((item) => ( // After Services
                     <SheetClose asChild key={item.label + "-mobile-post"}>
                       <Link href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
                         {item.label}
                       </Link>
                     </SheetClose>
                  ))}

                   <div className="my-2 border-t border-border/40"></div>
                    <div className="px-3 py-2">
                        <h4 className="mb-2 text-xs font-semibold text-primary/80 uppercase tracking-wider">Social</h4>
                        <div className="flex space-x-3">
                        {socialLinks.map((social) => (
                            <SheetClose asChild key={social.label + "-mobile-social"}>
                                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary p-1">
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            </SheetClose>
                        ))}
                        </div>
                    </div>
                </nav>
              </div>
               <div className="p-4 border-t border-border/40 mt-auto">
                 <SheetClose asChild>
                    <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                        <Link href="/contact#contact-form-home">SCHEDULE A CALL</Link>
                    </Button>
                 </SheetClose>
                 <div className="text-center mt-3 text-xs text-muted-foreground space-x-2">
                    <SheetClose asChild>
                        <Link href="tel:+917021038009" className="hover:text-primary inline-flex items-center gap-1"><Phone className="w-3 h-3"/> Call</Link>
                    </SheetClose>
                    <span>|</span>
                    <SheetClose asChild>
                        <Link href="mailto:info@nityamarketing.com" className="hover:text-primary inline-flex items-center gap-1"><Mail className="w-3 h-3"/> Email</Link>
                    </SheetClose>
                 </div>
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
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; icon?: React.ElementType; children: React.ReactNode }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ?? '#'} // Ensure href has a default value
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
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;

    