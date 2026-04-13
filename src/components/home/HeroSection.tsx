'use client';

/**
 * HeroSection — video-focused, centered, dark navy
 *
 * Animations / interactions applied here:
 *  • ScrollReveal stagger: badge → h1 → subtitle → play btn → CTA (fade-up, 80 ms increments)
 *  • .hero-play-btn — twin pulsing rings via @keyframes hero-ring-pulse (globals.css)
 *  • .hero-play-btn:hover — scale(1.07) + deeper shadow
 *  • Video modal — mounts on play-click, unmounts on backdrop/X click (opacity fade-in)
 *  • Hero orbs — static blur blobs for ambient depth
 */

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';

import heroImage from '@/images/home page banner/Home Page Banner 2.jpg';

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section">
        {/* Faint background photo — texture only, 10% opacity */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />

        {/* Grid dot pattern */}
        <div className="hero-grid-pattern" aria-hidden="true" />

        {/* Dark gradient + gold radial glow */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Ambient colour blobs */}
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="container relative z-10 max-w-5xl px-4 py-28 text-center md:px-6 lg:py-36">

          {/* Eyebrow badge — scroll reveal: fade up */}
          <ScrollReveal direction="up" distance={20}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              Trusted by 150+ SMEs &amp; MSMEs across India
            </div>
          </ScrollReveal>



          {/* Video play button — scroll reveal: fade up, delay 260 ms */}
          {/* Interaction: pulsing rings animate via @keyframes hero-ring-pulse */}
          {/* On click → video modal opens with fade-in overlay */}
          <ScrollReveal direction="up" delay={260}>
            <div className="mt-12 flex flex-col items-center gap-3">
              <button
                type="button"
                aria-label="Play introduction video"
                className="hero-play-btn"
                onClick={() => setVideoOpen(true)}
              >
                {/* Play icon offset right to optically centre inside circle */}
                <Play className="ml-1 h-9 w-9 fill-current" />
              </button>
              <span className="text-sm font-medium tracking-wide text-white/50">
                Watch How We Work
              </span>
            </div>
          </ScrollReveal>

          {/* Primary CTA — scroll reveal: fade up, delay 340 ms */}
          {/* Hover: slight lift + deeper gold shadow */}
          <ScrollReveal direction="up" delay={340}>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-10 py-6 text-base font-bold text-accent-foreground shadow-[0_18px_40px_rgba(255,190,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_24px_50px_rgba(255,190,0,0.32)]"
              >
                <Link href="/contact">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>



        </div>
      </section>

      {/* ── Video Modal ── */}
      {/* Interaction: backdrop click or X button closes modal */}
      {videoOpen && (
        <div
          className="video-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Nitya Marketing introduction video"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="video-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              className="video-modal-close"
              onClick={() => setVideoOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            {/*
              Replace the src with your actual YouTube embed URL, e.g.:
              https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0
            */}
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/?autoplay=1&rel=0"
              title="Nitya Marketing Introduction"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
