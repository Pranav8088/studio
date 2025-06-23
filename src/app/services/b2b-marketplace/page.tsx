'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function B2BMarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Banner Section */}
      <section className="bg-[#F9AA1D] py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">BANNER</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">B2B MARKETPLACE AND MANAGEMENT</h2>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 bg-[#0B2545] rounded-lg p-8 text-white flex items-center justify-center min-h-64">
              <span className="text-2xl">Image</span>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold font-serif">Short Info</h2>
              <p className="text-gray-700 font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif">Profile Enrichment</h3>
              <p className="text-gray-700 font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-[#0B2545] rounded-lg p-8 flex items-center justify-center min-h-64">
              <span className="text-2xl text-white">Image</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0B2545] rounded-lg p-8 flex items-center justify-center min-h-64 order-2 md:order-1">
              <span className="text-2xl text-white">Image</span>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-bold font-serif">Sales Support</h3>
              <p className="text-gray-700 font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Update Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-12">WANT TO UPDATE PRODUCT PROFILE IN B2C?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#0B2545] rounded-lg p-8 flex items-center justify-center min-h-48">
                <span className="text-2xl text-white">Image {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">WHY CHOOSE US?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 font-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#F9AA1D] flex items-center justify-center text-2xl font-bold text-[#0B2545] mb-4">
                  {item}
                </div>
                <span className="text-white bg-[#F9AA1D] px-4 py-2 rounded-full">Image + Info</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Box */}
      <section className="py-16 bg-[#0B2545]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-handwritten">Send us your inquiry……</h2>
          <Button className="mt-6" size="lg">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
