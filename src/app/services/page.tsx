import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Lightbulb, Users, Award, BarChart, Search, Handshake, BrainCircuit, Megaphone, Building2, FileText } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Nitya Marketing Navigator',
  description: 'Explore our comprehensive B2B marketing solutions for SMEs & MSMEs, from strategic roadmaps to digital marketing execution.',
};


// Service Data
const services = [
  { icon: Target, title: "Strategic Marketing Roadmap", description: "Customized blueprint aligned with business goals for consistent growth." },
  { icon: Search, title: "Market & Competitor Analysis", description: "In-depth research for insights into trends, gaps, and competitor positioning." },
  { icon: Building2, title: "B2B Marketplace Optimization", description: "Enhance presence on platforms like IndiaMART, TradeIndia, Alibaba." },
  { icon: TrendingUp, title: "Digital Marketing Strategy & Execution", description: "Comprehensive SEO, PPC, social media, and email marketing solutions." },
  { icon: Award, title: "Government Market Penetration", description: "Assistance with vendor registrations, tender bidding, and compliance." },
  { icon: Lightbulb, title: "Brand Development & Positioning", description: "Craft compelling brand identity, messaging, and storytelling." },
  { icon: Handshake, title: "Lead Generation & Sales Enablement", description: "Data-driven campaigns with marketing automation and CRM integration." },
  { icon: FileText, title: "Content Marketing & Thought Leadership", description: "Create authoritative content like whitepapers, blogs, case studies." },
  { icon: Megaphone, title: "Trade Show & Event Marketing", description: "Maximize exposure at trade fairs, exhibitions, and networking events." },
  { icon: BrainCircuit, title: "Marketing Automation & CRM Integration", description: "Implement tools like HubSpot, Zoho, Salesforce for efficiency." },
  { icon: CheckCircle, title: "Execution & Implementation Support", description: "Hands-on guidance for effective strategy implementation." },
  { icon: BarChart, title: "Performance Analytics & Optimization", description: "Track KPIs and refine strategies for enhanced ROI." },
];

export default function ServicesPage() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Comprehensive B2B Marketing Solutions</h1>
          <p className="text-lg text-muted-foreground">
            From Strategy to Execution, we provide end-to-end marketing solutions tailored to the unique needs of SMEs & MSMEs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-accent/10 rounded-full text-accent">
                     <service.icon className="w-6 h-6" />
                  </span>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-8">
             <Link href="/contact">
                 <Button size="lg">Get Started Today</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
