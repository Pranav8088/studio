
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Search, MessageSquareHeart, TrendingUp } from 'lucide-react'; // Changed icons
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Reputation Management (ORM) - Nitya Marketing Navigator',
  description: 'Protect and enhance your brand\'s online image with our proactive Online Reputation Management services for businesses.',
};

const ormFeatures = [
  { icon: Search, title: "Reputation Monitoring", description: "Track online mentions and sentiment across the web and social media." },
  { icon: ShieldCheck, title: "Negative Content Mitigation", description: "Address and manage negative reviews or press proactively." },
  { icon: MessageSquareHeart, title: "Positive Review Generation", description: "Encourage satisfied customers to share positive feedback online." }, // Changed icon
  { icon: TrendingUp, title: "Brand Image Building", description: "Strategically build a positive and authoritative online presence." },
];

export default function OrmPage() {
  return (
    <section id="orm-service" className="py-16 md:py-24 bg-secondary">
       {/* Added responsive padding */}
      <div className="container max-w-7xl space-y-12 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
           {/* Responsive text sizes */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Online Reputation Management (ORM)</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Your online reputation is crucial. We help SMEs and MSMEs monitor, manage, and improve their digital footprint to build trust and credibility with potential B2B customers.
          </p>
        </div>
         {/* Responsive grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ormFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <span className="p-2 bg-accent/10 rounded-full text-accent mb-2 sm:mb-0">
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
                 <Button size="lg">Manage Your Reputation</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
      