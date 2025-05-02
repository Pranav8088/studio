import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, BadgeDollarSign, BarChartBig, Filter } from 'lucide-react'; // Changed icons slightly
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Management - Nitya Marketing Navigator',
  description: 'Drive targeted traffic and generate leads with expertly managed Google Ads (PPC) campaigns for SMEs and MSMEs.',
};

const googleAdsFeatures = [
  { icon: Target, title: "Campaign Strategy & Setup", description: "Develop targeted campaigns based on keywords, demographics, and goals." },
  { icon: Filter, title: "Ad Copywriting & Optimization", description: "Create compelling ad copy that drives clicks and conversions." }, // Changed icon
  { icon: BadgeDollarSign, title: "Bid Management & Budget Optimization", description: "Maximize your ROI by optimizing bids and ad spend effectively." },
  { icon: BarChartBig, title: "Performance Tracking & Reporting", description: "Monitor campaign performance and provide detailed reports." }, // Changed icon
];

export default function GoogleAdsPage() {
  return (
    <section id="google-ads-service" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Google Ads (PPC) Management</h1>
          <p className="text-lg text-muted-foreground">
            Reach potential customers actively searching for your products or services. Our Google Ads management services help SMEs and MSMEs achieve measurable results through targeted pay-per-click advertising.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {googleAdsFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-full text-primary">
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
                 <Button size="lg">Launch Your Google Ads</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
