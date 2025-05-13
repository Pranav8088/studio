
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Zap, AreaChart, DatabaseZap, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Technologies Implementation - Nitya Marketing Navigator',
  description: 'Integrate and optimize marketing automation, CRM, and analytics platforms to streamline your marketing efforts.',
};

const martechFeatures = [
  { icon: Settings, title: "Platform Selection & Consultation", description: "Identify and evaluate the optimal marketing technology stack tailored to your specific business needs, budget, and goals." },
  { icon: Zap, title: "Marketing Automation Setup", description: "Implement and configure platforms like HubSpot, Mailchimp, etc., for automated workflows, lead nurturing, and email campaigns." },
  { icon: DatabaseZap, title: "CRM Integration & Optimization", description: "Seamlessly connect and optimize CRM systems (e.g., Salesforce, Zoho) for better sales and marketing alignment and data flow." },
  { icon: AreaChart, title: "Analytics & Data Integration", description: "Set up robust tracking and reporting tools (Google Analytics, Tag Manager) for comprehensive data collection and actionable insights." },
];

export default function MarketingTechnologiesPage() {
  return (
    <section id="martech-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Marketing Technologies</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Leverage the power of technology to supercharge your marketing efficiency, effectiveness, and measurability. We help SMEs and MSMEs select, implement, integrate, and optimize the right marketing tools for success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {martechFeatures.map((feature, index) => (
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
                 <Button size="lg">Optimize Your MarTech Stack <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
