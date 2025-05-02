import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Zap, AreaChart, DatabaseZap } from 'lucide-react'; // Changed icons
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Technologies Implementation - Nitya Marketing Navigator',
  description: 'Integrate and optimize marketing automation, CRM, and analytics platforms to streamline your marketing efforts.',
};

const martechFeatures = [
  { icon: Settings, title: "Platform Selection & Consultation", description: "Identify the right marketing technology stack for your specific needs." },
  { icon: Zap, title: "Marketing Automation Setup", description: "Implement platforms like HubSpot, Mailchimp, etc., for automated workflows." },
  { icon: DatabaseZap, title: "CRM Integration & Optimization", description: "Connect and optimize CRM systems (Salesforce, Zoho) for better sales alignment." }, // Changed icon
  { icon: AreaChart, title: "Analytics & Data Integration", description: "Set up tracking and reporting tools (Google Analytics) for data-driven decisions." }, // Changed icon
];

export default function MarketingTechnologiesPage() {
  return (
    <section id="martech-service" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Marketing Technologies</h1>
          <p className="text-lg text-muted-foreground">
            Leverage the power of technology to enhance your marketing efficiency and effectiveness. We help SMEs and MSMEs select, implement, and integrate the right marketing tools.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {martechFeatures.map((feature, index) => (
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
                 <Button size="lg">Optimize Your MarTech Stack</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
