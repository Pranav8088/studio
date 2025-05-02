import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search, BarChart, Link2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services - Nitya Marketing Navigator',
  description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO services for SMEs & MSMEs.',
};

const seoFeatures = [
  { icon: Search, title: "Keyword Research & Strategy", description: "Identify high-impact keywords to target relevant audiences." },
  { icon: Link2, title: "On-Page Optimization", description: "Optimize website content and structure for search engines." },
  { icon: BarChart, title: "Off-Page SEO & Link Building", description: "Build high-quality backlinks to increase domain authority." },
  { icon: CheckCircle, title: "Technical SEO Audit", description: "Ensure your website meets technical requirements for optimal crawling and indexing." },
];

export default function SeoPage() {
  return (
    <section id="seo-service" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Search Engine Optimization (SEO)</h1>
          <p className="text-lg text-muted-foreground">
            Improve your website's visibility on search engines like Google and attract more qualified organic traffic. Our SEO strategies are tailored for SMEs and MSMEs to achieve long-term growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-accent/10 rounded-full text-accent">
                     <feature.icon className="w-6 h-6" />
                  </span>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-8">
             <Link href="/contact">
                 <Button size="lg">Boost Your SEO Today</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
