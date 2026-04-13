'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';

const services = [
  {
    tag:         '01',
    title:       'Digital Marketing Suite',
    description: 'Full-funnel demand generation, Google Ads, content & social for B2B pipelines.',
    image:       '/images/Digital Marketing Suite Thumbnail.jpg',
    href:        '/digital-marketing',
  },
  {
    tag:         '02',
    title:       'Web & Mobile Solutions',
    description: 'High-converting websites and scalable apps that close serious B2B buyers.',
    image:       '/images/Web & Mobile Solutions Thumbnail.jpg',
    href:        '/web-development',
  },
  {
    tag:         '03',
    title:       'Technology & Support',
    description: 'Automation, CRM, analytics dashboards and marketing ops for lean teams.',
    image:       '/images/Technology & Support Thumbnail.jpg',
    href:        '/marketing-technologies',
  },
  {
    tag:         '04',
    title:       'SEO Services',
    description: 'Search visibility strategies built for steady organic growth and buyer intent.',
    image:       '/images/SEO Services Thumbnail.jpg',
    href:        '/digital-marketing/seo',
  },
  {
    tag:         '05',
    title:       'Social Media Marketing',
    description: 'Build brand loyalty and engage your audience on LinkedIn, Instagram, and more.',
    image:       '/images/social media marketing Thumbnail.jpg',
    href:        '/digital-marketing/social-media-marketing',
  },
];

export default function ServicesSection() {
  const [isPaused, setIsPaused] = React.useState(false);
  const doubledServices = [...services, ...services];

  return (
    <section id="our-services" className="relative overflow-hidden bg-[#0A1F44] py-[80px] md:py-[120px]">
      
      {/* Background ambient orbs to elevate the premium feel */}
      <div className="absolute left-[10%] top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/15 opacity-60 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-[5%] h-[450px] w-[450px] rounded-full bg-[#123E75]/40 opacity-70 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-7xl px-4 md:px-6">
        <ScrollReveal direction="up" className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-5xl tracking-tight">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/70">
            We offer a comprehensive suite of B2B marketing solutions — from search visibility and web development
            to government marketplace support and marketing automation.
          </p>
        </ScrollReveal>
      </div>

      {/* Full Bleed Continuous CSS Marquee */}
      <div className="relative z-10 w-full pb-12 pt-4 group">
        <div 
          className="flex w-max animate-services-marquee"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {doubledServices.map((service, index) => (
            <div key={index} className="flex-none px-3 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-[320px] xl:w-[380px]">
                <Link
                  href={service.href}
                  className="group/card relative block h-[350px] lg:h-[450px] w-full overflow-hidden bg-[#0A1F44] border-2 border-b-0 border-transparent transition-colors duration-300 hover:border-t-accent hover:border-x-accent"
                >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 450px"
                />
                
                {/* Top gradient for text legibility */}
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent pointer-events-none" />

                {/* Bottom gradient fade to completely merge into background */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/80 to-transparent pointer-events-none" />

                {/* Text placed at the TOP LEFT as per the screenshot */}
                <div className="absolute top-0 left-0 p-6 md:p-8 max-w-[85%]">
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes services-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-services-marquee {
          animation: services-marquee 30s linear infinite;
        }
      `}</style>
      
      <div className="container relative z-10 max-w-7xl px-4 md:px-6">
        <ScrollReveal direction="up" delay={200} className="mt-6 text-center md:mt-8">
          <div 
            className="inline-block"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full border border-accent bg-[#0A1F44] px-9 py-7 text-base font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-[#0A1F44] shadow-[0_0_20px_rgba(255,190,0,0.1)] hover:shadow-[0_0_35px_rgba(255,190,0,0.3)]"
            >
              <Link href="/services">
                <Eye className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                View All Services
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
