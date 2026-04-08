
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, ChevronRight, CheckCircle, Zap, Target, TrendingUp, Palette,
  Code, Cpu, Server, BarChart3, CalendarDays, Tag, LayoutGrid, Cog, Laptop,
  Users, Settings, BriefcaseBusiness, Award, Star, Shield, Globe
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import ContactForm from '@/components/shared/ContactForm';
import { blogPostsData } from '@/lib/blog-data';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import ScrollReveal from '@/components/shared/ScrollReveal';
import MarqueeTicker from '@/components/shared/MarqueeTicker';

const heroBanners = [
  {
    gradient: 'from-primary via-primary/90 to-secondary',
    badge: 'B2B Marketing Experts',
    title: 'Strategic Marketing That Drives',
    highlight: 'Real Business Growth',
    description: 'Nitya Marketing empowers SMEs and MSMEs with data-driven strategies that build brands, generate quality leads, and unlock sustainable revenue.',
    cta: { label: 'Start Growing Today', href: '/contact' },
    ctaSecondary: { label: 'View Services', href: '#our-services' },
  },
  {
    gradient: 'from-secondary via-secondary/90 to-primary',
    badge: 'GeM & Government Contracts',
    title: 'Win Government Orders on',
    highlight: 'GeM Portal',
    description: 'End-to-end GeM registration, catalogue setup, bid management, and tender documentation. Let us open the government market for your business.',
    cta: { label: 'Explore GeM Services', href: '/gem' },
    ctaSecondary: { label: 'Talk to an Expert', href: '/contact' },
  },
  {
    gradient: 'from-primary/95 via-secondary to-primary',
    badge: 'Digital Transformation',
    title: 'Elevate Your Brand with',
    highlight: 'Digital Excellence',
    description: 'From SEO and Google Ads to social media and content creation — comprehensive digital marketing solutions crafted for B2B impact.',
    cta: { label: 'See Digital Marketing', href: '/digital-marketing/seo' },
    ctaSecondary: { label: 'Get a Free Audit', href: '/contact' },
  },
];

const statsData = [
  { value: 150, suffix: '+', label: 'Clients Served' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Years of Expertise' },
  { value: 95, suffix: '%', label: 'Client Retention' },
];

const quickSolutionsData = [
  {
    title: 'Boost your brand, products & services to the right audience',
    ctaText: 'Get Quick Solution',
    ctaLink: '/digital-marketing/seo',
    icon: TrendingUp,
    gradient: 'from-primary/10 to-primary/5',
    accent: 'text-primary',
  },
  {
    title: 'Reach your target market with precision social & digital campaigns',
    ctaText: 'Get Quick Solution',
    ctaLink: '/digital-marketing/social-media-marketing',
    icon: Target,
    gradient: 'from-accent/20 to-accent/5',
    accent: 'text-accent-foreground',
  },
  {
    title: 'Win government tenders & get GeM portal assistance',
    ctaText: 'Explore GeM Services',
    ctaLink: '/gem',
    icon: BriefcaseBusiness,
    gradient: 'from-secondary/10 to-secondary/5',
    accent: 'text-secondary',
  },
];

const servicesData = [
  { name: 'Digital Marketing Suite', link: '/digital-marketing/seo', icon: LayoutGrid, desc: 'SEO, SMM, PPC & more' },
  { name: 'Web & Mobile Solutions', link: '/web-development', icon: Laptop, desc: 'Websites & apps that convert' },
  { name: 'GeM Portal Services', link: '/gem', icon: Award, desc: 'Government marketplace expertise' },
  { name: 'SEO Services', link: '/digital-marketing/seo', icon: TrendingUp, desc: 'Organic growth & visibility' },
  { name: 'Social Media Marketing', link: '/digital-marketing/social-media-marketing', icon: Users, desc: 'Engage & grow your audience' },
  { name: 'Google Ads (PPC)', link: '/digital-marketing/google-ads', icon: Target, desc: 'Pay-per-click that pays back' },
  { name: 'Content & Video Creation', link: '/digital-marketing/video-production', icon: Palette, desc: 'Stories that sell' },
  { name: 'Website Maintenance', link: '/website-maintenance', icon: Settings, desc: 'Always secure, always fast' },
];

const whyNityaPoints = [
  { icon: Shield, title: 'Proven Track Record', desc: 'Over 150 SMEs and MSMEs have trusted us to grow their business across industries.' },
  { icon: Target, title: 'B2B Specialist', desc: 'We focus exclusively on B2B marketing — our strategies are built for business buyers, not consumers.' },
  { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'Every campaign is backed by analytics, tracking ROI at every stage of your marketing funnel.' },
  { icon: Zap, title: 'Full-Service Capability', desc: 'From digital marketing to GeM services and web development — one partner for everything.' },
];

const techPointers = [
  'Advanced CRM Systems', 'Marketing Automation Platforms',
  'Data Analytics & BI Tools', 'SEO & Keyword Intelligence',
  'Cloud Infrastructure', 'Modern Web Frameworks',
  'Project Management Tools', 'AI-Assisted Content Creation',
];

const homePageBlogPosts = blogPostsData.slice(0, 2).map(post => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  link: `/blog/${post.slug}`,
  imageUrl: post.imageUrl,
  imageAiHint: post.imageAiHint,
  category: post.category,
}));


export default function Home() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">

      {/* ── Hero Section ── */}
      <section id="home-banners" className="relative overflow-hidden group">
        <Carousel
          className="w-full"
          opts={{ loop: true, align: 'start' }}
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
            {heroBanners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className={`relative w-full min-h-[85vh] md:min-h-[90vh] bg-gradient-to-br ${banner.gradient} flex items-center`}>
                  {/* Dot grid overlay */}
                  <div className="absolute inset-0 hero-grid opacity-60" />
                  {/* Decorative glow circles */}
                  <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
                  <div className="absolute top-[30%] right-[15%] w-[200px] h-[200px] rounded-full bg-white/5" />

                  <div className="container max-w-7xl px-4 md:px-6 relative z-10 py-20">
                    <div className="max-w-3xl">
                      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm text-white/90 font-medium mb-6 animate-fade-in-up">
                        <Star className="w-4 h-4 text-accent" /> {banner.badge}
                      </div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {banner.title}
                      </h1>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {banner.highlight}
                      </h1>
                      <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        {banner.description}
                      </p>
                      <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base px-8 py-6">
                          <Link href={banner.cta.href}>{banner.cta.label} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/15 backdrop-blur-sm text-base px-8 py-6">
                          <Link href={banner.ctaSecondary.href}>{banner.ctaSecondary.label}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm border-white/20 transition-opacity opacity-0 group-hover:opacity-100 w-12 h-12" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm border-white/20 transition-opacity opacity-0 group-hover:opacity-100 w-12 h-12" />
        </Carousel>
      </section>

      {/* ── Marquee Ticker ── */}
      <section className="bg-accent py-3 overflow-hidden">
        <MarqueeTicker
          items={[
            'SEO & Content Marketing', 'Google Ads Management', 'Social Media Strategy',
            'GeM Portal Registration', 'Tender Documentation', 'Web Development',
            'Brand Identity Design', 'Video Production', 'Marketing Automation',
            'B2B Lead Generation', 'Online Reputation Management',
          ]}
          speed={40}
          className="text-accent-foreground font-semibold text-sm tracking-wide"
        />
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary py-8 md:py-10">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {statsData.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-black text-accent flex items-center gap-0.5">
                  <AnimatedCounter end={stat.value} />{stat.suffix}
                </div>
                <div className="text-white/70 text-sm md:text-base mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Us Section ── */}
      <section id="about-us" className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 md:px-6">
          <ScrollReveal direction="left" className="lg:order-first relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-xl -z-10" />
            <div className="absolute -bottom-6 -right-4 w-48 h-48 bg-primary/5 rounded-2xl -z-10" />
            <Image
              src="https://placehold.co/600x520.png"
              alt="Nitya Marketing team strategy session"
              data-ai-hint="business team meeting"
              width={600}
              height={520}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-2xl object-cover w-full aspect-[6/5]"
            />
            <div className="absolute bottom-6 -right-4 md:-right-8 bg-primary text-white rounded-xl p-4 shadow-xl w-36 text-center">
              <div className="text-3xl font-black text-accent">8+</div>
              <div className="text-xs mt-1 text-white/80">Years of B2B Marketing Mastery</div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100} className="space-y-6 lg:order-last">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <BriefcaseBusiness className="w-4 h-4" /> About Nitya Marketing
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Your Dedicated B2B Growth Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nitya Marketing Management is built for one purpose: to help SMEs and MSMEs grow.
              We combine deep industry knowledge with cutting-edge marketing strategies to deliver
              results that actually move your business forward.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need to build brand awareness, generate qualified leads, win government
              contracts through GeM, or establish a commanding digital presence — we have the
              expertise and tools to make it happen.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                'SME & MSME Specialists',
                'ROI-Focused Strategies',
                'GeM Portal Experts',
                'End-to-End Marketing',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Button asChild className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quick Solutions Section ── */}
      <section id="quick-solutions" className="py-20 md:py-28 bg-secondary/5">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4 text-accent" /> Quick Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Can We Solve for You?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tell us your challenge — we have the right strategy, team, and tools ready.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {quickSolutionsData.map((solution, index) => (
              <Card
                key={index}
                className={`flex flex-col items-center p-8 text-center shadow-md hover:shadow-xl border-border/60 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-b ${solution.gradient} group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-4 bg-white rounded-2xl shadow-sm mb-5 group-hover:shadow-md transition-shadow">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground mb-4 leading-snug">{solution.title}</CardTitle>
                <CardFooter className="mt-auto pt-4 px-0">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors shadow-sm">
                    <Link href={solution.ctaLink}>{solution.ctaText} <ChevronRight className="ml-1.5 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services Section ── */}
      <section id="our-services" className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <LayoutGrid className="w-4 h-4" /> Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">A Complete Marketing Arsenal</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            From digital marketing and web development to government procurement — we cover every
            growth channel your B2B business needs.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {servicesData.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 60} threshold={0.05}>
              <Card
                className="group h-full flex flex-col justify-center items-center p-6 text-center rounded-xl shadow-sm hover:shadow-lg border-border/60 hover:border-accent transition-all duration-300 transform hover:-translate-y-1 bg-card"
              >
                <Link href={service.link} className="flex flex-col items-center justify-center h-full w-full gap-3">
                  <div className="p-3.5 bg-primary/8 rounded-xl text-primary mb-1 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">{service.name}</CardTitle>
                  <CardDescription className="text-xs">{service.desc}</CardDescription>
                </Link>
              </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-md">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Nitya Marketing ── */}
      <section id="why-us" className="py-20 md:py-28 bg-primary">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4 text-accent" /> Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for B2B. Proven in the Market.</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We don't do generic marketing. Every strategy is tailored, every result is tracked,
              and every client gets our full attention.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNityaPoints.map((point, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80} threshold={0.05}>
                <div className="bg-white/8 border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-colors group h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg">
              <Link href="/about#why-us">Discover Why Clients Choose Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Strategic Marketing Section ── */}
      <section id="why-strategic-marketing" className="py-20 md:py-28 bg-secondary/5">
        <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 md:px-6">
          <ScrollReveal direction="left" className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <TrendingUp className="w-4 h-4" /> Strategic Thinking
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Why SMEs & MSMEs Need Strategic Marketing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In today's hyper-competitive B2B landscape, having a great product is not enough.
              You need a systematic approach to reach the right buyers, at the right time, with
              the right message — consistently.
            </p>
            <ul className="space-y-4">
              {[
                'Identify and engage your ideal B2B buyers with precision',
                'Build a strong, recognisable brand in your industry niche',
                'Generate consistent, high-quality leads for your sales pipeline',
                'Optimise marketing spend for maximum return on investment',
                'Leverage government channels like GeM for stable revenue',
              ].map((pointer, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-muted-foreground">{pointer}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/services#marketing-insights">Discover Marketing Insights <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100} className="relative">
            <div className="absolute -top-6 -right-4 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <Image
              src="https://placehold.co/580x480.png"
              alt="Marketing analytics dashboard with growth charts"
              data-ai-hint="marketing analytics growth"
              width={580}
              height={480}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-2xl object-cover w-full aspect-[6/5]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── GeM Services Spotlight ── */}
      <section id="gem-spotlight" className="py-20 md:py-28 bg-background">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  <Globe className="w-4 h-4" /> Government e-Marketplace
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Access India's Largest Government Procurement Platform
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  GeM (Government e-Marketplace) connects your business directly with government
                  buyers — ministries, PSUs, and departments across India. We handle every step
                  from registration to order delivery support.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg">
                  <Link href="/gem">Explore GeM Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BriefcaseBusiness, label: 'GeM Registration', desc: 'Complete onboarding and profile setup' },
                  { icon: BarChart3, label: 'Catalogue Setup', desc: 'Optimized product & service listings' },
                  { icon: Target, label: 'Bid Management', desc: 'Expert tender preparation & filing' },
                  { icon: Shield, label: 'Compliance Support', desc: 'MSME certifications & documentation' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors">
                    <item.icon className="w-6 h-6 text-accent mb-3" />
                    <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                    <div className="text-white/60 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Stack Section ── */}
      <section id="about-technologies" className="py-20 md:py-28 bg-secondary/5">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" /> Our Technological Edge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Powered by the Best Tools</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We leverage an enterprise-grade technology stack to deliver campaigns that are fast,
            measurable, and consistently ahead of the competition.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {techPointers.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm border border-border/60 hover:border-accent hover:shadow-md transition-all animate-fade-in-up text-left"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/marketing-technologies">Explore Our Tech Stack <Cpu className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Lead Form Section ── */}
      <section id="contact-form-home" className="py-20 md:py-28 bg-primary">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 text-accent" /> Let's Talk
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Share your requirements and our marketing strategists will get back to you within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Blog/Insights Section ── */}
      {homePageBlogPosts.length > 0 && (
        <section id="blog-snippet" className="py-20 md:py-28 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <BarChart3 className="w-4 h-4" /> Latest Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Marketing Intelligence & Articles</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Stay ahead of the curve with B2B marketing trends, GeM strategies, and growth tips.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {homePageBlogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="flex flex-col overflow-hidden group shadow-md hover:shadow-xl border-border/60 hover:border-accent transition-all duration-300 transform hover:-translate-y-1 rounded-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={post.link} className="block aspect-video w-full overflow-hidden relative">
                    <Image
                      src={post.imageUrl}
                      alt={`Blog: ${post.title}`}
                      data-ai-hint={post.imageAiHint}
                      width={600}
                      height={338}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                        <Tag className="w-3 h-3" />{post.category}
                      </span>
                    </div>
                  </Link>
                  <CardHeader className="pb-2">
                    <CardDescription className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" /> {post.date}
                    </CardDescription>
                    <CardTitle className="text-lg lg:text-xl leading-tight group-hover:text-accent transition-colors mt-1">
                      <Link href={post.link}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0 pb-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-2 pb-5">
                    <Link href={post.link}>
                      <Button variant="link" className="p-0 h-auto text-accent font-semibold text-sm group-hover:underline">
                        Read Article <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {blogPostsData.length > 2 && (
              <div className="text-center mt-14">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/blog">View All Articles <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
