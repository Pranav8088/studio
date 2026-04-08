import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ArrowRight, CheckCircle, FileText, ShoppingCart, Award, Users, Building2,
  ClipboardList, TrendingUp, Globe, Code, Shield, Zap, Star, Phone, ExternalLink
} from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'GeM & Government Marketplace Services | Nitya Marketing Management',
  description: 'End-to-end GeM portal registration, product cataloging, bid management, and government tender documentation for SMEs & MSMEs across India.',
};

const gemServices = [
  {
    icon: Building2,
    title: 'GeM Portal Registration',
    description: 'Complete end-to-end GeM seller registration for your business — from documentation and verification to profile activation and category mapping.',
  },
  {
    icon: ShoppingCart,
    title: 'Product & Service Catalogue Setup',
    description: 'Strategic product listing with accurate HSN codes, competitive pricing analysis, and keyword-rich descriptions that rank higher in government buyer searches.',
  },
  {
    icon: FileText,
    title: 'Bid & Tender Management',
    description: 'Expert bid preparation, compliance documentation, and submission support to maximize your chances of winning government contracts.',
  },
  {
    icon: ClipboardList,
    title: 'Tender Documentation',
    description: 'Professional preparation of technical bids, financial proposals, certificates, and all statutory documents required for government procurements.',
  },
  {
    icon: Shield,
    title: 'Compliance & Certification Support',
    description: 'Guidance on MSME, Startup India, and other government certifications that give you preferential treatment and price relaxation on GeM.',
  },
  {
    icon: TrendingUp,
    title: 'GeM Performance Optimization',
    description: 'Ongoing monitoring, rating management, and catalogue optimization to maintain a high seller score and improve order frequency.',
  },
];

const processSteps = [
  { step: '01', title: 'Business Assessment', desc: 'We review your business profile, products, and eligibility for GeM categories.' },
  { step: '02', title: 'Registration & Onboarding', desc: 'Complete portal registration, document submission, and account verification.' },
  { step: '03', title: 'Catalogue & Listing', desc: 'Professional listing of your products/services with optimized content.' },
  { step: '04', title: 'Bid Strategy & Submission', desc: 'Identifying live tenders, preparing bids, and managing submissions.' },
  { step: '05', title: 'Order & Compliance', desc: 'Supporting order execution, invoice management, and performance reviews.' },
  { step: '06', title: 'Ongoing Growth', desc: 'Continuous optimisation and new category expansion on your GeM dashboard.' },
];

const whyGem = [
  'Direct access to government buyers across India',
  'Transparent, paperless procurement process',
  'Timely payments with government guarantee',
  'No middlemen — sell directly to ministries and PSUs',
  'MSME-friendly with purchase preference policies',
  'Over ₹4 lakh crore+ transacted annually on GeM',
];

export default function GemPage() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(50,100%,60%) 0%, transparent 60%), radial-gradient(circle at 80% 20%, hsl(211,100%,40%) 0%, transparent 50%)' }}
        />
        <div className="container max-w-7xl px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" /> Government e-Marketplace (GeM) Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Unlock Government <span className="text-accent">Contracts</span> with GeM
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              India's most trusted platform for government procurement is open to your business.
              We handle the entire GeM journey — registration, cataloguing, bid management, and
              performance optimization — so you focus on fulfilling orders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all">
                <Link href="#gem-contact">Get Started on GeM <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href="#gem-services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why GeM Matters */}
      <section className="py-16 md:py-24 bg-background" id="why-gem">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Sell on GeM?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Government e-Marketplace is India's premier procurement portal connecting
                government buyers with verified sellers. For SMEs and MSMEs, it represents a
                massive, stable revenue channel backed by the government of India.
              </p>
              <ul className="space-y-3">
                {whyGem.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="#gem-contact">Start Your GeM Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Registered Sellers', value: '8 Lakh+' },
                { label: 'Product Categories', value: '11,000+' },
                { label: 'Government Buyers', value: '65,000+' },
                { label: 'Total GMV Transacted', value: '₹4L Cr+' },
              ].map((stat, i) => (
                <div key={i} className="bg-primary/5 border border-primary/10 rounded-xl p-6 text-center hover:border-accent transition-colors">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GeM Services */}
      <section className="py-16 md:py-24 bg-secondary/5" id="gem-services">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our GeM Services</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            End-to-end GeM support so your business captures every government procurement opportunity.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gemServices.map((service, i) => (
              <Card key={i} className="text-left border-border/70 hover:border-accent hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 6-step process that takes your business from GeM registration to consistent government orders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-md transition-all">
                <div className="text-5xl font-black text-primary/10 mb-3 leading-none">{s.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web & Software Development — Tendershade */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" /> Our Technology Partner
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Website or Custom Software to Support Your GeM Presence?
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                A professional website dramatically strengthens your GeM seller profile and builds
                government buyer trust. Our sister platform <strong className="text-accent">Tendershade</strong> specialises
                in web and software development for businesses participating in government tenders
                and the GeM ecosystem.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Custom business websites built for credibility',
                  'GeM-compliant digital catalogues and product portals',
                  'Tender management software and dashboards',
                  'ERP & inventory solutions for government order fulfilment',
                  'Mobile apps for field teams and order tracking',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <a href="https://tendershade.com" target="_blank" rel="noopener noreferrer">
                    Visit Tendershade.com <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link href="/web-development">Our Web Services</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Globe, title: 'Web Development', desc: 'High-performance, SEO-optimised websites that make your business look credible to government buyers.' },
                { icon: Code, title: 'Custom Software', desc: 'Tailored software solutions for managing tenders, bids, catalogues, and government order workflows.' },
                { icon: Zap, title: 'Fast Delivery', desc: 'Agile development process that delivers working products quickly, so you can start winning contracts sooner.' },
              ].map((card, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-5 flex gap-4 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-accent/15 border border-accent/30 rounded-xl p-5 text-center mt-2">
                <p className="text-white font-medium text-sm">
                  Powered by our technology partner
                </p>
                <a href="https://tendershade.com" target="_blank" rel="noopener noreferrer"
                  className="text-accent text-2xl font-bold hover:underline inline-flex items-center gap-2 mt-1">
                  tendershade.com <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-secondary/5" id="gem-contact">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Win Government Contracts?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talk to our GeM specialists today. We'll assess your business and map out a clear
              path to your first government order.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-accent py-8">
        <div className="container max-w-7xl px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-accent-foreground font-bold text-lg">Have questions about GeM registration?</p>
            <p className="text-accent-foreground/80 text-sm">Call us — our specialists are available Mon–Sat, 10am to 7pm IST.</p>
          </div>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shrink-0">
            <a href="tel:+917021038009" className="inline-flex items-center gap-2">
              <Phone className="w-5 h-5" /> +91 70210 38009
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
