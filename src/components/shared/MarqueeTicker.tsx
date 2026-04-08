'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;   // seconds for one full loop
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export default function MarqueeTicker({
  items,
  speed = 30,
  className,
  itemClassName,
  separator = '✦',
}: MarqueeTickerProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={cn('overflow-hidden whitespace-nowrap select-none', className)}>
      <div
        className="inline-flex"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={cn('inline-flex items-center gap-4 px-6', itemClassName)}>
            <span className="text-accent text-xs">{separator}</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
