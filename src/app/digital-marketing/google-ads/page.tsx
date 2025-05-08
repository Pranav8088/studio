
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, BadgeDollarSign, BarChartBig, Filter, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Management - Nitya Marketing Navigator',
  description: 'Drive targeted traffic and generate leads with expertly managed Google Ads (PPC) campaigns for SMEs and MSMEs.',
};

const googleAdsFeatures = [
  { icon: Target, title: "Campaign Strategy & Setup", description: "Develop hyper-targeted campaigns based on keywords, demographics, intent signals, and business goals." },
  { icon: Filter, title: "Ad Copywriting & A/B Testing", description: "Create compelling, high-converting ad copy and continuously optimize through rigorous A/B testing." },
  { icon: BadgeDollarSign, title: "Bid Management & Budget Optimization", description: "Maximize your ROI by implementing smart bidding strategies and optimizing ad spend allocation effectively." },
  { icon: BarChartBig, title: "Performance Tracking & Reporting", description: "Monitor key metrics, analyze campaign performance, and provide transparent, actionable reports." },
];

export default function GoogleAdsPage() {
  return (
    <section id="google-ads-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Google Ads (PPC) Management</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Reach potential customers precisely when they're searching for your products or services. Our Google Ads management services help SMEs and MSMEs achieve measurable results and maximize ROI through strategic pay-per-click advertising.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {googleAdsFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col group hover:border-primary transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex flex-col items-center text-center gap-3">
                   <span className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-2">
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
                 <Button size="lg">Launch Your Google Ads <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
