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

          {/* ── Left: Photo Collage ── */}
          <ScrollReveal direction="right" distance={40}>
            <div className="relative h-[480px] w-full">

              {/* Large image — top-left */}
              <div className="absolute left-0 top-0 h-[300px] w-[58%] overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(7,44,84,0.18)]">
                <Image
                  src="/images/About Us Thumbnail Image-01.jpg"
                  alt="About Nitya Marketing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 330px"
                />
              </div>

              {/* Tall image — right */}
              <div className="absolute right-0 top-0 h-[390px] w-[38%] overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(7,44,84,0.18)]">
                <Image
                  src="/images/About Us Thumbnail Image-02.jpg"
                  alt="Nitya Marketing team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 220px"
                />
              </div>

              {/* Small image — bottom-left */}
              <div className="absolute bottom-0 left-0 h-[160px] w-[38%] overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(7,44,84,0.18)]">
                <Image
                  src="/images/About Us Thumbnail Image-03.jpg"
                  alt="Nitya Marketing services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 220px"
                />
              </div>

              {/* Floating logo badge — bottom-right overlap */}
              <div className="absolute bottom-4 right-[42%] z-20 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-[0_10px_30px_rgba(7,44,84,0.35)]">
                <Image
                  src="/images/Nitya Marketing Logo.png"
                  alt="Nitya Marketing"
                  width={44}
                  height={44}
                  className="object-contain"
                />
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

