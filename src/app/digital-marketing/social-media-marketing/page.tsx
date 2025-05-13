
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Share2, TrendingUp, Megaphone, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing - Nitya Marketing Navigator',
  description: 'Engage your target audience, build brand loyalty, and drive conversions with our expert social media marketing strategies.',
};

const smmFeatures = [
  { icon: Users, title: "Platform Strategy & Management", description: "Identify the most effective social platforms for your B2B audience and manage your presence consistently." },
  { icon: Share2, title: "Content Creation & Curation", description: "Develop engaging, valuable content (posts, articles, videos) tailored to each social media channel and audience segment." },
  { icon: Megaphone, title: "Paid Social Advertising Campaigns", description: "Run highly targeted ad campaigns to reach specific demographics, industries, job titles, and interests for lead generation." },
  { icon: TrendingUp, title: "Analytics, Reporting & Optimization", description: "Track key performance indicators (KPIs), measure ROI, analyze data, and continuously optimize campaigns for better results." },
];

export default function SocialMediaMarketingPage() {
  return (
    <section id="smm-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Social Media Marketing</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Connect with your B2B audience where they actively engage and build relationships. We create and manage impactful social media campaigns that build community, increase brand awareness, and generate qualified leads for your SME or MSME.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {smmFeatures.map((feature, index) => (
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
                 <Button size="lg">Engage Your Audience <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
