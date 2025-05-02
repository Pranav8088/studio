
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Share2, TrendingUp, Megaphone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing - Nitya Marketing Navigator',
  description: 'Engage your target audience, build brand loyalty, and drive conversions with our expert social media marketing strategies.',
};

const smmFeatures = [
  { icon: Users, title: "Platform Strategy & Management", description: "Identify the right platforms and manage your presence effectively." },
  { icon: Share2, title: "Content Creation & Curation", description: "Develop engaging content tailored to each social media channel." },
  { icon: Megaphone, title: "Paid Social Advertising", description: "Run targeted ad campaigns to reach specific demographics and interests." },
  { icon: TrendingUp, title: "Analytics & Reporting", description: "Track performance, measure ROI, and optimize campaigns for better results." },
];

export default function SocialMediaMarketingPage() {
  return (
    <section id="smm-service" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      {/* Added responsive padding */}
      <div className="container max-w-7xl space-y-12 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Responsive text sizes */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Social Media Marketing</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Connect with your audience where they spend their time. We create and manage impactful social media campaigns that build community, increase brand awareness, and generate leads for your SME or MSME.
          </p>
        </div>
        {/* Responsive grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {smmFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                 <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <span className="p-2 bg-primary/10 rounded-full text-primary mb-2 sm:mb-0">
                     <feature.icon className="w-7 h-7" />
                  </span>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow text-center sm:text-left">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
             <Link href="/contact">
                 <Button size="lg">Engage Your Audience</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
      