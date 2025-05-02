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
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Social Media Marketing</h1>
          <p className="text-lg text-muted-foreground">
            Connect with your audience where they spend their time. We create and manage impactful social media campaigns that build community, increase brand awareness, and generate leads for your SME or MSME.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {smmFeatures.map((feature, index) => (
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
                 <Button size="lg">Engage Your Audience</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
