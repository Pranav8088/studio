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
```

  </change>
  <change>
    <file>src/components/ui/navigation-menu.tsx</file>
    <description>Add shadcn/ui NavigationMenu component.</description>
    <content><![CDATA[import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
```

  </change>
  <change>
    <file>src/app/services/page.tsx</file>
    <description>Delete old services page as services are now integrated into the header navigation with individual pages.</description>
    <content><![CDATA[