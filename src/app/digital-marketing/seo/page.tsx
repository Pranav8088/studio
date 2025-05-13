
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search, BarChart, Link2, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services - Nitya Marketing Navigator',
  description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO services for SMEs & MSMEs.',
};

const seoFeatures = [
  { icon: Search, title: "Keyword Research & Strategy", description: "Identify high-impact, relevant keywords to target your ideal audience and understand search intent." },
  { icon: Link2, title: "On-Page & Content Optimization", description: "Optimize website content, structure, and meta tags for maximum search engine visibility and user experience." },
  { icon: BarChart, title: "Off-Page SEO & Link Building", description: "Build high-quality, authoritative backlinks and enhance your domain authority through ethical outreach." },
  { icon: CheckCircle, title: "Technical SEO Audit & Implementation", description: "Ensure your website meets technical requirements for optimal crawling, indexing, and performance." },
];

export default function SeoPage() {
  return (
    <section id="seo-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Search Engine Optimization (SEO)</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Improve your website's visibility on search engines like Google. Attract more qualified organic traffic and establish market authority. Our tailored SEO strategies are designed for long-term, sustainable growth for SMEs and MSMEs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {seoFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col group hover:border-accent transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex flex-col items-center text-center gap-3">
                   <span className="p-4 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mb-2">
                     <feature.icon className="w-8 h-8" />
                  </span>
                  <CardTitle className="text-lg md:text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

         <div className="text-center mt-12 animate-fade-in-up delay-500">
             <Link href="/contact">
                 <Button size="lg">Boost Your SEO Today <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
