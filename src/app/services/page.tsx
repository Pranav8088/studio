import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Search, Users, BadgeDollarSign, ShieldCheck, BrainCircuit, Video,
  Code, Smartphone, Zap, Wrench, Server, Award, ArrowRight, LayoutGrid,
  Building2, Target, TrendingUp, Lightbulb, Handshake, CalendarCheck,
  MessageCircleQuestion, Megaphone, BarChart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Services | Nitya Marketing Management',
  description: 'Comprehensive B2B marketing services — SEO, social media, Google Ads, web development, GeM portal services, and more for SMEs & MSMEs.',
};

const insightsData = [
  { icon: Building2, title: "Strategic Brand Positioning", description: "Build credibility, differentiate from competitors, and foster trust with a consistent and compelling brand message across all touchpoints." },
  { icon: Target, title: "Targeted Lead Generation", description: "Leverage data analytics and market research for precision-targeted campaigns that generate high-quality, sales-ready leads." },
  { icon: TrendingUp, title: "Cost-Effective Marketing", description: "Optimize marketing spend, focus on high-ROI activities, and maximize impact with expert strategies tailored to your budget." },
  { icon: Lightbulb, title: "Digital Transformation", description: "Stay visible, relevant, and competitive with a strong digital footprint encompassing SEO, social media, and a high-performing website." },
  { icon: Search, title: "Competitive Edge", description: "Gain market advantage by analyzing industry trends, understanding customer behavior, and monitoring competitor activities." },
  { icon: Handshake, title: "Sales & Marketing Alignment", description: "Enhance customer engagement, shorten sales cycles, and improve conversion rates through seamless collaboration between sales and marketing." },
  { icon: CalendarCheck, title: "Consistency & Long-Term Growth", description: "Build lasting brand recognition and customer relationships through sustained, strategic marketing efforts and campaigns." },
  { icon: MessageCircleQuestion, title: "Reputation Management", description: "Proactively manage public relations, handle potential crises effectively, and safeguard your brand's hard-earned reputation online." },
  { icon: Megaphone, title: "Scalability & Market Expansion", description: "Develop adaptable marketing strategies that support business growth, diversification, and successful entry into new markets." },
  { icon: BarChart, title: "Data-Driven Decisions", description: "Track key performance indicators, measure results accurately, optimize campaigns based on insights, and ensure continuous improvement." },
];

const allServices = [
// ... (existing services)
  {
    category: 'Digital Marketing Suite',
    icon: LayoutGrid,
    color: 'bg-primary/10 text-primary',
    services: [
      { name: 'SEO Services', href: '/digital-marketing/seo', icon: Search, desc: 'Drive organic traffic and rank higher on Google with targeted B2B SEO strategies.' },
      { name: 'Social Media Marketing', href: '/digital-marketing/social-media-marketing', icon: Users, desc: 'Build brand loyalty and engage your audience on LinkedIn, Instagram, and more.' },
      { name: 'Google Ads (PPC)', href: '/digital-marketing/google-ads', icon: BadgeDollarSign, desc: 'Precision-targeted paid campaigns that deliver measurable ROI.' },
      { name: 'Online Reputation (ORM)', href: '/digital-marketing/orm', icon: ShieldCheck, desc: 'Protect and enhance your brand image across digital platforms.' },
      { name: 'Design Thinking', href: '/digital-marketing/design-thinking', icon: BrainCircuit, desc: 'User-centric problem solving that drives product and service innovation.' },
      { name: 'Video Production', href: '/digital-marketing/video-production', icon: Video, desc: 'Compelling video content that tells your brand story and converts viewers.' },
    ],
  },
  {
    category: 'Web & Mobile Solutions',
    icon: Code,
    color: 'bg-secondary/10 text-secondary',
    services: [
      { name: 'Web Development', href: '/web-development', icon: Code, desc: 'High-performance, SEO-ready websites that establish authority and convert visitors.' },
      { name: 'Mobile App Development', href: '/mobile-app', icon: Smartphone, desc: 'Custom iOS and Android applications tailored to your business workflows.' },
    ],
  },
  {
    category: 'Technology & Support',
    icon: Zap,
    color: 'bg-accent/20 text-accent-foreground',
    services: [
      { name: 'Marketing Technologies', href: '/marketing-technologies', icon: Zap, desc: 'Integrate and optimise your MarTech stack for maximum campaign efficiency.' },
      { name: 'Website Maintenance', href: '/website-maintenance', icon: Wrench, desc: 'Keep your site secure, fast, and up-to-date with ongoing maintenance plans.' },
      { name: 'Hosting & Support', href: '/hosting-support', icon: Server, desc: 'Reliable cloud hosting with dedicated technical support when you need it.' },
    ],
  },
  {
    category: 'GeM & Government Services',
    icon: Award,
    color: 'bg-accent/20 text-accent-foreground',
    services: [
      { name: 'GeM Portal Registration', href: '/gem', icon: Award, desc: 'End-to-end GeM seller registration, verification, and profile activation.' },
      { name: 'Catalogue & Bid Management', href: '/gem#gem-services', icon: LayoutGrid, desc: 'Strategic product listings and expert bid preparation for government tenders.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <LayoutGrid className="w-4 h-4 text-accent" /> Everything You Need to Grow
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A complete suite of B2B marketing and business growth services — from digital campaigns
            to government procurement, all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl px-4 md:px-6 space-y-16">
          {allServices.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${group.color}`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">{group.category}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.services.map((service) => (
                  <Card
                    key={service.name}
                    className="group hover:shadow-lg border-border/60 hover:border-accent transition-all duration-300 rounded-xl"
                  >
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed">{service.desc}</CardDescription>
                      <Button asChild variant="link" className="p-0 h-auto text-accent font-semibold text-sm">
                        <Link href={service.href}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Insights Section */}
      <section id="marketing-insights" className="py-20 md:py-28 bg-secondary/5">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Strategic Marketing Insights</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic marketing isn't just an advantage—it's essential for survival and growth for SMEs & MSMEs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {insightsData.map((insight, index) => (
              <Card key={index} className="flex flex-col group hover:border-primary transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <span className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <insight.icon className="w-6 h-6" />
                  </span>
                  <CardTitle className="text-lg md:text-xl text-foreground">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{insight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/5">
        <div className="container max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Not Sure Where to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our strategists will assess your business and recommend the right combination of services.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
