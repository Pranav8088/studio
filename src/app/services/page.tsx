
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, BriefcaseBusiness, LayoutGrid, SearchCheck, Cog, Search, Megaphone, Lightbulb, Film, ShieldCheck, BarChart, Laptop, Smartphone, Wrench, Server, Settings, Zap, AreaChart, DatabaseZap, Code, Palette, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Services - Nitya Marketing Navigator',
  description: 'Explore the comprehensive B2B marketing services offered by Nitya Marketing Management, designed to empower SMEs & MSMEs.',
};

// Group services logically based on Header structure
const serviceGroups = [
  {
    categoryTitle: "Digital Marketing Suite",
    categoryIcon: LayoutGrid,
    categoryDescription: "Comprehensive online solutions to boost your digital presence.",
    services: [
      { title: "SEO", href: "/digital-marketing/seo", description: "Improve search engine rankings.", icon: Search },
      { title: "Social Media Marketing", href: "/digital-marketing/social-media-marketing", description: "Engage audiences on social platforms.", icon: Megaphone },
      { title: "Design Thinking", href: "/digital-marketing/design-thinking", description: "User-centric design solutions.", icon: Lightbulb },
      { title: "Video Production", href: "/digital-marketing/video-production", description: "Compelling video content creation.", icon: Film },
      { title: "ORM", href: "/digital-marketing/orm", description: "Manage your online reputation.", icon: ShieldCheck },
      { title: "Google Ads", href: "/digital-marketing/google-ads", description: "Targeted advertising campaigns.", icon: BarChart },
    ]
  },
  {
    categoryTitle: "Marketing Technologies",
    categoryIcon: Cog, // Using Cog for MarTech overall category
    categoryDescription: "Leverage technology for marketing efficiency.",
     services: [
      { title: "Platform Selection & Consultation", href: "/marketing-technologies", description: "Choose the right tech stack.", icon: Settings },
      { title: "Marketing Automation Setup", href: "/marketing-technologies", description: "Implement automation workflows.", icon: Zap },
      { title: "CRM Integration & Optimization", href: "/marketing-technologies", description: "Connect CRM for sales alignment.", icon: DatabaseZap },
      { title: "Analytics & Data Integration", href: "/marketing-technologies", description: "Setup tracking and reporting.", icon: AreaChart },
    ]
  },
   {
    categoryTitle: "Web & Mobile Solutions",
    categoryIcon: Laptop, // Using Laptop for Web/Mobile overall category
    categoryDescription: "Develop and maintain your online platforms.",
     services: [
        // Web Dev
        { title: "Custom Web Development", href: "/web-development", description: "Unique, professional websites.", icon: Laptop },
        { title: "Responsive Design", href: "/web-development", description: "Optimal viewing on all devices.", icon: Palette },
        { title: "E-commerce Solutions", href: "/web-development", description: "Secure B2B online stores.", icon: ShoppingCart },
        { title: "CMS Integration", href: "/web-development", description: "Easy content management.", icon: Code },
        // Mobile App
        { title: "Native & Cross-Platform Apps", href: "/mobile-app", description: "Engaging mobile applications.", icon: Smartphone },
        // Maintenance
        { title: "Website Maintenance", href: "/website-maintenance", description: "Security, updates, and backups.", icon: Wrench },
        // Hosting
        { title: "Hosting Support", href: "/hosting-support", description: "Reliable and secure hosting.", icon: Server },
    ]
  }
]


export default function ServicesPage() {
  return (
    <section id="services-overview" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Our Comprehensive B2B Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tailored solutions designed to drive growth for SMEs & MSMEs. From strategy to execution, we're your dedicated marketing partner.
          </p>
        </div>

         {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-8 animate-fade-in-up" style={{ animationDelay: `${groupIndex * 150}ms` }}>
                 <div className="flex flex-col md:flex-row items-center gap-4 border-b pb-4 mb-8 border-border/60">
                    <span className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                         <group.categoryIcon className="w-8 h-8" />
                     </span>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center md:text-left">{group.categoryTitle}</h2>
                        <p className="text-muted-foreground mt-1 text-center md:text-left">{group.categoryDescription}</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                     {group.services.map((service, serviceIndex) => (
                         <Card key={serviceIndex} className="flex flex-col hover:shadow-lg hover:border-accent transition-all duration-300">
                            <CardHeader className="flex flex-row items-center gap-3 pb-3">
                                 <span className="p-1.5 bg-accent/10 rounded-full text-accent">
                                     <service.icon className="w-5 h-5" />
                                 </span>
                                 <CardTitle className="text-lg">{service.title}</CardTitle>
                             </CardHeader>
                             <CardContent className="flex-grow">
                                 <CardDescription>{service.description}</CardDescription>
                             </CardContent>
                             <div className="p-6 pt-2">
                                 <Link href={service.href}>
                                     <Button variant="link" size="sm" className="p-0 h-auto text-accent hover:underline">
                                         Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                     </Button>
                                 </Link>
                             </div>
                         </Card>
                     ))}
                 </div>
            </div>
        ))}


         <div className="text-center mt-16 pt-8 border-t border-border/60">
             <p className="text-lg text-muted-foreground mb-4">Ready to discuss your specific needs?</p>
             <Link href="/contact">
                 <Button size="lg">Get a Free Consultation</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
