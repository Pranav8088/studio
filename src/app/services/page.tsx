import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, BriefcaseBusiness, LayoutGrid, SearchCheck } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Services - Nitya Marketing Navigator',
  description: 'Explore the comprehensive B2B marketing services offered by Nitya Marketing Management, designed to empower SMEs & MSMEs.',
};

const serviceCategories = [
    {
        icon: BriefcaseBusiness,
        title: "Strategic Marketing",
        description: "Develop foundational strategies including market research, competitive analysis, and brand positioning.",
        link: "/insights", // Link to a relevant page, e.g., Insights or About
        linkText: "View Our Approach"
    },
    {
        icon: LayoutGrid,
        title: "Digital Marketing Suite",
        description: "Comprehensive online solutions: SEO, Social Media, PPC, ORM, Video Production, and Design Thinking.",
        link: "/digital-marketing/seo", // Link to the first digital marketing service
        linkText: "Explore Digital Services"
    },
     {
        icon: SearchCheck, // Placeholder icon
        title: "Technology & Development",
        description: "Implement MarTech, build websites and mobile apps, ensure maintenance and reliable hosting.",
        link: "/marketing-technologies", // Link to the first tech service
        linkText: "Discover Tech Solutions"
    }
]


export default function ServicesPage() {
  return (
    <section id="services-overview" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Our Comprehensive B2B Services</h1>
          <p className="text-lg text-muted-foreground">
            Tailored solutions designed to drive growth for SMEs & MSMEs. From strategy to execution, we're your dedicated marketing partner.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
                 <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                         <div className="flex flex-col items-center text-center">
                             <span className="p-3 bg-accent/10 rounded-full text-accent mb-3">
                                 <category.icon className="w-8 h-8" />
                             </span>
                             <CardTitle>{category.title}</CardTitle>
                         </div>
                     </CardHeader>
                     <CardContent className="flex-grow text-center">
                         <CardDescription>{category.description}</CardDescription>
                     </CardContent>
                     <div className="p-6 pt-0 text-center">
                         <Link href={category.link}>
                             <Button variant="link">{category.linkText} <ArrowRight className="ml-1 h-4 w-4" /></Button>
                         </Link>
                     </div>
                 </Card>
            ))}
        </div>
         <div className="text-center mt-12">
             <p className="text-muted-foreground mb-4">Ready to discuss your specific needs?</p>
             <Link href="/contact">
                 <Button size="lg">Get a Free Consultation</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
