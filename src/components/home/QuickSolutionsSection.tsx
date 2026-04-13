import React from 'react';
import Image from 'next/image';

import ScrollReveal from '@/components/shared/ScrollReveal';

const solutions = [
  {
    number: '01',
    image: '/images/Boost Icon.png',
    title: 'Want to boost your brand or products & services?',
  },
  {
    number: '02',
    image: '/images/Target Icon.png',
    title: 'Do you want your updates to reach your target market?',
  },
  {
    number: '03',
    image: '/images/Documentation Assistance Icon.png',
    title: 'Want to win government tenders & documentation assistance?',
  },
];

export default function QuickSolutionsSection() {
  return (
    <section id="quick-solutions" className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="container max-w-6xl px-4 md:px-6 relative z-10">

        {/* Section heading */}
        <ScrollReveal direction="up" className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-[#1A1A1A] md:text-5xl lg:text-[54px] tracking-tight">
            Need <span className="text-accent">Quick Solutions?</span>
          </h2>
        </ScrollReveal>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
          
          {/* Connector Arrows (Desktop Only) */}
          <div className="hidden md:block absolute top-[80px] left-[22%] w-[18%] h-[60px] pointer-events-none">
            <svg viewBox="0 0 100 50" fill="none" className="w-full h-full text-accent" preserveAspectRatio="none">
              <path d="M0,25 Q50,-10 100,25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M90,15 L100,25 L85,30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="hidden md:block absolute top-[80px] left-[55%] w-[18%] h-[60px] pointer-events-none">
            <svg viewBox="0 0 100 50" fill="none" className="w-full h-full text-accent" preserveAspectRatio="none">
              <path d="M0,25 Q50,-10 100,25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M90,15 L100,25 L85,30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {solutions.map((item, index) => (
            <ScrollReveal key={item.number} direction="up" delay={index * 150}>
              <div className="group flex flex-col items-center text-center">
                
                {/* Icon Wrapper */}
                <div className="relative w-40 h-40 mt-4 mb-8">
                  {/* The dark navy/black number badge */}
                  <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#111827] text-white text-sm font-bold shadow-lg transition-transform duration-500 ease-in-out group-hover:translate-y-4">
                    {item.number}
                  </div>
                  
                  {/* Yellow Circle containing the image */}
                  <div className="relative w-full h-full rounded-full bg-accent flex items-center justify-center shadow-[0_15px_30px_rgba(255,190,0,0.3)]">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={`Quick Solution ${item.number}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-[20px] font-bold text-[#1F2937] leading-[1.4] mb-8 max-w-[280px] mx-auto min-h-[56px] flex items-center justify-center">
                  {item.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
