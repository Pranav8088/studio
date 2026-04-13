import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe, Sparkles, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ContactForm from '@/components/shared/ContactForm';
import ScrollReveal from '@/components/shared/ScrollReveal';
import MarqueeTicker from '@/components/shared/MarqueeTicker';
import { blogPostsData } from '@/lib/blog-data';

/* ── Homepage section components ── */
import HeroSection           from '@/components/home/HeroSection';
import ServicesSection       from '@/components/home/ServicesSection';
import AboutSection          from '@/components/home/AboutSection';
import QuickSolutionsSection from '@/components/home/QuickSolutionsSection';

const homePageBlogPosts = blogPostsData.slice(0, 2).map((post) => ({
  id:          post.id,
  title:       post.title,
  excerpt:     post.excerpt,
  date:        post.date,
  link:        `/blog/${post.slug}`,
  imageUrl:    post.imageUrl,
  imageAiHint: post.imageAiHint,
  category:    post.category,
}));

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-clip bg-background">

      {/* ① Hero — video-focused, centered, dark navy, play button + Schedule a Call CTA */}
      <HeroSection />

      {/* ② Marquee ticker — navy strip, white scrolling service tags */}
      <section className="border-y border-primary/10 bg-primary py-4">
        <MarqueeTicker
          items={[
            'SEO that compounds',
            'GeM marketplace support',
            'Web experiences that convert',
            'Automation for lean teams',
            'B2B campaign optimisation',
            'Brand systems with clarity',
            'Analytics-first decision making',
          ]}
          speed={34}
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90"
          itemClassName="text-white/90"
          separator="•"
        />
      </section>

      {/* ③ Services — 4 image-overlay cards, hover zoom + overlay darken */}
      <ServicesSection />

      {/* ④ About — 2-col layout, spinning logo, navy blocks, animated CTA */}
      <AboutSection />

      {/* ⑤ Quick Solutions — 3 numbered cards, curved SVG connectors, hover dip + color-shift CTA */}
      <QuickSolutionsSection />

      {/* ⑥ GeM Spotlight */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f8fc_0%,#ffffff_100%)] py-24 md:py-32">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <ScrollReveal direction="right" className="max-w-3xl">
              <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-primary md:text-5xl">
                Sell directly to government buyers through India&apos;s GeM portal.
              </h2>
            </ScrollReveal>
            <Button asChild size="lg" className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              <Link href="/gem">
                Explore GeM Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Registration and onboarding',
              'Catalogue structuring and optimization',
              'Bid response and tender support',
              'Documentation and compliance readiness',
            ].map((line, index) => (
              <ScrollReveal key={line} direction="up" distance={40} delay={index * 120}>
                <div className="home-process-card h-full rounded-[1.7rem] border border-primary/10 p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="text-base font-medium leading-7 text-slate-700">{line}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ Contact Form */}
      <section className="bg-primary py-24 md:py-32">
        <div className="container max-w-5xl px-4 md:px-6">
          <ScrollReveal direction="up" distance={30} className="mb-12 text-center">
            <h2 className="mt-5 font-heading text-4xl font-semibold text-white md:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/72">
              Share your requirements and our marketing strategists will get back to you within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={50} delay={200}>
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ⑧ Blog Insights */}
      {homePageBlogPosts.length > 0 && (
        <section className="bg-background py-24 md:py-32">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <ScrollReveal direction="right" distance={30} className="max-w-3xl">
                <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-primary md:text-5xl">
                  Marketing intelligence &amp; articles
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" distance={30} delay={100}>
                <Button asChild variant="outline" className="rounded-full border-primary/20 bg-white text-primary hover:bg-primary/5">
                  <Link href="/blog">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {homePageBlogPosts.map((post, index) => (
                <ScrollReveal key={post.id} direction="up" distance={50} delay={index * 150}>
                  <Link
                    href={post.link}
                    className="group block overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_22px_60px_rgba(7,44,84,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(7,44,84,0.13)]"
                  >
                    <div className="relative aspect-[1.35/1] overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        data-ai-hint={post.imageAiHint}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-7">
                      <p className="text-sm font-medium text-slate-500">{post.date}</p>
                      <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight text-primary transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
