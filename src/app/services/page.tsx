
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutGrid, Cog, Laptop, BriefcaseBusiness } from 'lucide-react'; // Adjusted icons
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services - Nitya Marketing Navigator',
  description: 'Explore the comprehensive B2B marketing services offered by Nitya Marketing Management, designed to empower SMEs & MSMEs.',
};

// High-level service categories matching the header structure
const serviceCategories = [
  {
    title: "Digital Marketing Suite",
    description: "Comprehensive online solutions to boost your digital presence, from SEO and social media to content and advertising.",
    icon: LayoutGrid,
    link: "/digital-marketing/seo" // Link to the first service in the dropdown or a general category page if created
  },
  {
    title: "Marketing Technologies",
    description: "Leverage technology for marketing efficiency, including platform selection, automation, CRM integration, and analytics.",
    icon: Cog,
    link: "/marketing-technologies"
  },
   {
    title: "Web & Mobile Solutions",
    description: "Develop and maintain your crucial online platforms, including custom websites, e-commerce, mobile apps, maintenance, and hosting.",
    icon: Laptop,
    link: "/web-development" // Link to the main web development page
  }
]


export default function ServicesPage() {
  return (
    <section id="services-overview" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
           <span className="p-3 bg-primary/10 rounded-full text-primary inline-block mb-4">
               <BriefcaseBusiness className="w-10 h-10" /> {/* Larger Icon */}
           </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Our Comprehensive B2B Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tailored solutions designed to drive growth for SMEs & MSMEs. From strategy to execution across digital, technology, and web platforms, we're your dedicated marketing partner.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {serviceCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md border border-border/60 hover:shadow-lg hover:border-accent transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <span className="p-4 bg-accent/10 rounded-full text-accent mb-5">
                  <category.icon className="w-8 h-8" />
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{category.title}</h2>
                <p className="text-muted-foreground flex-grow mb-5">{category.description}</p>
                <Link href={category.link}>
                  <Button variant="outline" size="sm">
                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
        </div>


         <div className="text-center mt-16 pt-12 border-t border-border/60 animate-fade-in-up delay-500">
             <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Ready to Elevate Your Marketing?</h2>
             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                 Let's discuss your specific business challenges and goals. We'll tailor a strategy to achieve the results you need.
             </p>
             <Link href="/contact">
                 <Button size="lg">Get Your Free Consultation</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
