'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Megaphone,
  Search,
  Code,
  Zap,
  BriefcaseBusiness,
  Users,
  BadgeDollarSign,
  Smartphone,
  Gavel,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

/* ─── Services dropdown data ─── */
const serviceItems = [
  {
    title: 'Digital Marketing',
    href: '/digital-marketing',
    icon: Megaphone,
    description: 'SEO, Ads, social & full-funnel demand generation.',
  },
  {
    title: 'SEO Services',
    href: '/digital-marketing/seo',
    icon: Search,
    description: 'Organic visibility strategies for long-term growth.',
  },
  {
    title: 'Social Media Marketing',
    href: '/digital-marketing/social-media-marketing',
    icon: Users,
    description: 'Audience engagement across all major platforms.',
  },
  {
    title: 'Google Ads',
    href: '/digital-marketing/google-ads',
    icon: BadgeDollarSign,
    description: 'Performance PPC campaigns that convert.',
  },
  {
    title: 'Web Development',
    href: '/web-development',
    icon: Code,
    description: 'High-converting websites & digital experiences.',
  },
  {
    title: 'Mobile App Development',
    href: '/mobile-app',
    icon: Smartphone,
    description: 'iOS & Android apps for growing businesses.',
  },
  {
    title: 'Marketing Technologies',
    href: '/marketing-technologies',
    icon: Zap,
    description: 'Automation, CRM, and analytics dashboards.',
  },
  {
    title: 'GeM Services',
    href: '/gem',
    icon: BriefcaseBusiness,
    description: 'Government e-Marketplace registration & bidding.',
  },
];

/* ─── Desktop nav link items ─── */
const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  // Services is rendered separately as a dropdown
  { label: 'Insight',    href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 w-full bg-white/90 shadow-[0_4px_24px_rgba(7,44,84,0.10)] backdrop-blur-md transition-all duration-300"
        style={{ height: '72px' }}
      >
        <div className="container flex h-full max-w-7xl items-center justify-between px-4 md:px-6">

          {/* ── LEFT: Logo ── */}
          <Link href="/" className="shrink-0 flex items-center transition-all duration-300" aria-label="Nitya Marketing home">
            <Image
              src="/images/Nitya Marketing Logo.png"
              alt="Nitya Marketing"
              width={140}
              height={42}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* ── CENTER: Pill nav (desktop only) ── */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 rounded-full bg-slate-100/80 px-3 py-1.5 shadow-inner transition-all duration-300">
              {/* Home + About */}
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                    isActive(link.href)
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-700 hover:bg-white hover:text-primary',
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={cn(
                    'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                    isActive('/digital-marketing') || isActive('/web-development') || isActive('/gem') || isActive('/marketing-technologies')
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-700 hover:bg-white hover:text-primary',
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      dropdownOpen && 'rotate-180',
                    )}
                  />
                </button>

                {/* Dropdown panel */}
                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-slate-200/70 bg-white shadow-[0_20px_60px_rgba(7,44,84,0.14)] overflow-hidden">
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 rounded-sm border-l border-t border-slate-200/70 bg-white" />

                    <div className="relative grid grid-cols-2 gap-1 p-3">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-150 hover:bg-primary/5"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 transition-colors group-hover:bg-primary group-hover:text-white text-primary">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800 group-hover:text-primary">
                              {item.title}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Explore all our services</span>
                      <Link
                        href="/services"
                        onClick={() => setDropdownOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"
                      >
                        View all
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Insight + Contact */}
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                    isActive(link.href)
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-700 hover:bg-white hover:text-primary',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* ── RIGHT: CTA (desktop) ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,50,95,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-primary transition-all duration-200 hover:bg-slate-100"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[300px] bg-white shadow-[-8px_0_40px_rgba(7,44,84,0.12)] transition-transform duration-300 ease-in-out lg:hidden flex flex-col',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/Nitya Marketing Logo.png"
              alt="Nitya Marketing"
              width={130}
              height={38}
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-primary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={cn(
              'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150',
              isActive('/') ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-primary',
            )}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={cn(
              'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150',
              isActive('/about') ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-primary',
            )}
          >
            About
          </Link>

          {/* Services accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-all duration-150"
            >
              Services
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  mobileServicesOpen && 'rotate-180',
                )}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mt-1 ml-3 border-l-2 border-primary/20 pl-3 space-y-0.5">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-primary/5 hover:text-primary transition-all duration-150"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-primary/60" />
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-all duration-150"
                >
                  <ArrowRight className="h-4 w-4" />
                  All Services
                </Link>
              </div>
            )}
          </div>

          {/* Insight */}
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className={cn(
              'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150',
              isActive('/blog') ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-primary',
            )}
          >
            Insight
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={cn(
              'flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150',
              isActive('/contact') ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-primary',
            )}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA at bottom */}
        <div className="border-t border-slate-100 px-5 py-5">
          <Button
            asChild
            className="w-full rounded-full bg-accent font-bold text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
