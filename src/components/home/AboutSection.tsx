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

          {/* ── Left: Geometric Collage ── */}
          <ScrollReveal direction="right" distance={40}>
            <div className="about-visual-wrapper h-[480px]">
              
              <div className="about-blocks-grid h-full w-full">
                {/* Tall block on the left */}
                <div className="about-block block-tall relative overflow-hidden">
                  <Image
                    src="/images/About Us Thumbnail Image-01.jpg"
                    alt="About Nitya Marketing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 330px"
                  />
                </div>
                
                {/* Column of two blocks on the right */}
                <div className="about-block-group h-full">
                  <div className="about-block flex-grow rounded-[1.5rem] relative overflow-hidden" style={{ aspectRatio: 'unset' }}>
                    <Image
                      src="/images/About Us Thumbnail Image-02.jpg"
                      alt="Nitya Marketing team"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 30vw, 220px"
                    />
                  </div>
                  <div className="about-block h-[40%] rounded-[1.5rem] relative overflow-hidden" style={{ aspectRatio: 'unset' }}>
                    <Image
                      src="/images/About Us Thumbnail Image-03.jpg"
                      alt="Nitya Marketing services"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 30vw, 220px"
                    />
                  </div>
                </div>
              </div>

              {/* Rotating Logo Badge — centered at the intersection */}
              <div className="about-logo-floating">
                {/* Outer rotating text ring */}
                <svg className="about-ring-svg" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="textPath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="about-ring-text">
                    <textPath href="#textPath" startOffset="0%">
                      Nitya Marketing &bull; Nitya Marketing &bull; Nitya Marketing &bull;
                    </textPath>
                  </text>
                </svg>

                {/* Inner white circle with logo icon */}
                <div className="about-logo-icon-wrap">
                  <div className="about-logo-icon-rotate w-full h-full p-1">
                    <Image
                      src="/images/Nitya Marketing Logo.png"
                      alt="Nitya Logo"
                      width={80}
                      height={80}
                      className="about-logo-center-img"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* ── Right: Text + CTA ── */}
          <ScrollReveal direction="left" distance={40} delay={80}>
            <div className="flex flex-col items-start">

              {/* Heading — Mixed weights as per reference */}
              <h2 className="text-4xl leading-[1.1] text-primary sm:text-5xl lg:text-5xl mb-8">
                <span className="font-normal text-slate-900 block mb-1">About</span>
                <span className="font-extrabold text-primary tracking-tight">Nitya Marketing</span>
              </h2>

              {/* Body copy — Fully left aligned, Medium gray */}
              <div className="space-y-6 text-left text-base leading-[1.6] text-[#555] mb-10 max-w-xl">
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

              {/* CTA button — custom pill with sliding arrow on hover */}
              <Link href="/about" className="about-cta-pill group shadow-md">
                <span className="font-bold text-sm tracking-wider">LEARN MORE ABOUT US</span>
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

