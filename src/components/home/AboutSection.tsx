import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import ScrollReveal from '@/components/shared/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about-us" className="about-section py-20 md:py-28 lg:py-32">
      <div className="container relative z-10 max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

          {/* ── Left: Geometric Blocks + Rotating Logo ── */}
          <ScrollReveal direction="right" distance={40}>
            <div className="about-visual-wrapper">
              
              {/* The Navy Blocks Grid */}
              <div className="about-blocks-grid">
                <div className="about-block block-tall" />
                <div className="about-block-group">
                  <div className="about-block block-square" />
                  <div className="about-block block-square" />
                </div>
              </div>

              {/* Rotating Logo with Circular Text */}
              <div className="about-logo-floating">
                {/* SVG Ring with Text */}
                <svg viewBox="0 0 200 200" className="about-ring-svg">
                  <defs>
                    <path
                      id="textCircle"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="about-ring-text">
                    <textPath href="#textCircle" startOffset="0%">
                      NITYA MARKETING • NITYA MARKETING • NITYA MARKETING •
                    </textPath>
                  </text>
                </svg>
                
                {/* Logo Icon in Center */}
                <div className="about-logo-icon-wrap">
                  <Image
                    src="/images/Nitya Marketing Logo.png"
                    alt="Nitya Marketing Icon"
                    width={50}
                    height={50}
                    className="about-logo-center-img"
                  />
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* ── Right: Text + CTA ── */}
          <ScrollReveal direction="left" distance={40} delay={80}>
            <div className="flex flex-col items-start">

              {/* Heading */}
              <h2 className="font-heading text-4xl leading-[1.1] text-primary sm:text-5xl lg:text-6xl mb-8">
                <span className="font-normal text-slate-900">About</span>
                <br />
                <span className="font-extrabold">Nitya Marketing</span>
              </h2>

              {/* Body copy — matched exactly to screenshot */}
              <div className="space-y-6 text-justify text-base leading-relaxed text-slate-700 mb-10 max-w-xl">
                <p>
                  Nitya Marketing is your dedicated partner in navigating the complexities of the B2B market. 
                  We specialize in empowering SMEs and MSMEs with innovative and results-driven marketing 
                  strategies designed to build brand value, generate quality leads, and achieve sustainable growth.
                </p>
                <p>
                  Our team of experts combines industry knowledge with cutting-edge techniques to deliver 
                  marketing solutions that truly make an impact.
                </p>
              </div>

              {/* CTA button — custom pill with sliding arrow */}
              <Link href="/about" className="about-cta-pill group shadow-lg shadow-black/10">
                <span className="font-semibold text-sm uppercase tracking-wide">learn More About Us</span>
                <span className="about-cta-icon-wrap">
                  <ArrowRight className="h-4 w-4" strokeWidth={3} />
                </span>
              </Link>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

