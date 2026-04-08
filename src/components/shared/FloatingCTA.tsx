'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      {/* Expanded menu */}
      {open && (
        <div className="flex flex-col gap-2 items-end animate-fade-in-up">
          <a
            href="tel:+917021038009"
            className="flex items-center gap-2.5 bg-white text-primary font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg border border-border/60 hover:bg-primary hover:text-white transition-all"
          >
            <Phone className="w-4 h-4" /> +91 70210 38009
          </a>
          <a
            href="mailto:info@nityamarketing.com"
            className="flex items-center gap-2.5 bg-white text-primary font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg border border-border/60 hover:bg-primary hover:text-white transition-all"
          >
            <Mail className="w-4 h-4" /> Email Us
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 bg-primary text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg hover:bg-primary/90 transition-all"
          >
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110",
          open ? "bg-foreground/80 text-white" : "bg-accent text-accent-foreground"
        )}
        aria-label="Contact options"
      >
        {open
          ? <X className="w-6 h-6" />
          : <MessageCircle className="w-6 h-6" />
        }
        {/* Pulse ring */}
        {!open && (
          <span className="absolute w-14 h-14 rounded-full bg-accent/40 animate-ping" />
        )}
      </button>
    </div>
  );
}
