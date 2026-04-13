'use client';

import Link from 'next/link';
import { BriefcaseBusiness, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="container max-w-7xl px-4 md:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

            {/* Column 1 — Brand */}
            <div className="space-y-5 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white hover:opacity-90 transition-opacity">
                <BriefcaseBusiness className="h-7 w-7 text-accent flex-shrink-0" />
                <span>Nitya Marketing</span>
              </Link>
              <p className="text-white/65 leading-relaxed text-sm max-w-xs">
                Your dedicated B2B growth partner — empowering SMEs & MSMEs with expert marketing,
                GeM services, and digital solutions that deliver real results.
              </p>
              <div className="flex gap-3 pt-1">
                {[
                  { href: '#', icon: Linkedin, label: 'LinkedIn' },
                  { href: '#', icon: Twitter, label: 'Twitter' },
                  { href: '#', icon: Facebook, label: 'Facebook' },
                  { href: '#', icon: Instagram, label: 'Instagram' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'GeM Services', href: '/gem' },
                  { label: 'Contact Us', href: '/contact' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`text-white/65 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5 text-sm ${label === 'GeM Services' ? 'font-semibold text-accent' : ''}`}
                    >
                      {label === 'GeM Services' && <ArrowRight className="w-3 h-3" />}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-widest">Our Services</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'SEO Services', href: '/digital-marketing/seo' },
                  { label: 'Social Media Marketing', href: '/digital-marketing/social-media-marketing' },
                  { label: 'Google Ads (PPC)', href: '/digital-marketing/google-ads' },
                  { label: 'Web Development', href: '/web-development' },
                  { label: 'GeM Portal Services', href: '/gem' },
                  { label: 'Marketing Technologies', href: '/marketing-technologies' },
                  { label: 'View All Services →', href: '/services' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/65 hover:text-accent transition-colors duration-200 text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-widest">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/65 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span className="leading-relaxed">
                    Office no. 302, 3rd Floor, New Vohra House,<br />
                    Grampanchayat Rd, Jawahar Nagar,<br />
                    Goregaon West, Mumbai – 400104
                  </span>
                </li>
                <li>
                  <a href="tel:+917021038009" className="flex items-center gap-3 text-white/65 hover:text-accent transition-colors text-sm">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    +91 7021038009
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nityamarketing.com" className="flex items-center gap-3 text-white/65 hover:text-accent transition-colors text-sm break-all">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    info@nityamarketing.com
                  </a>
                </li>
              </ul>
              {/* Tender division callout */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/50 mb-1.5">Our E-Tendering Division</p>
                <a
                  href="https://tendershade.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline"
                >
                  tendershade.com <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container max-w-7xl px-4 md:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>&copy; {currentYear} Nitya Marketing Management. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact#faq" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/contact#faq" className="hover:text-white/80 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white/80 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
