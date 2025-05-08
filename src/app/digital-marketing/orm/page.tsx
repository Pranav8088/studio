
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Search, MessageSquareHeart, TrendingUp, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Reputation Management (ORM) - Nitya Marketing Navigator',
  description: 'Protect and enhance your brand\'s online image with our proactive Online Reputation Management services for businesses.',
};

const ormFeatures = [
  { icon: Search, title: "Comprehensive Monitoring", description: "Continuously track online mentions, reviews, and sentiment across the web, social media, and industry platforms." },
  { icon: ShieldCheck, title: "Negative Feedback Mitigation", description: "Strategically address and manage negative reviews or press proactively to minimize impact and protect your brand." },
  { icon: MessageSquareHeart, title: "Positive Review Amplification", description: "Implement strategies to encourage satisfied customers to share positive feedback on relevant online channels." },
  { icon: TrendingUp, title: "Proactive Brand Building", description: "Strategically build and promote a positive, authoritative, and trustworthy online presence for long-term benefit." },
];

export default function OrmPage() {
  return (
    <section id="orm-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Online Reputation Management (ORM)</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your online reputation is a critical asset in the B2B landscape. We help SMEs and MSMEs monitor, manage, and proactively improve their digital footprint to build trust, credibility, and attract more business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ormFeatures.map((feature, index) => (
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
                 <Button size="lg">Manage Your Reputation <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
