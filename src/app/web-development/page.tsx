
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Laptop, ShoppingCart, Palette, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services - Nitya Marketing Navigator',
  description: 'Build high-performing, responsive, and user-friendly websites tailored to your B2B business needs.',
};

const webDevFeatures = [
  { icon: Laptop, title: "Custom Web Design & Development", description: "Create unique, professional, and brand-aligned websites from scratch, focusing on your specific business objectives." },
  { icon: Palette, title: "Responsive & Mobile-First Design", description: "Ensure an optimal, seamless viewing and interaction experience across all devices (desktops, tablets, mobiles)." },
  { icon: ShoppingCart, title: "B2B E-commerce Solutions", description: "Develop secure, scalable, and feature-rich online stores specifically designed for B2B transactions and workflows." },
  { icon: Code, title: "CMS Integration & Development", description: "Build powerful websites on platforms like WordPress, Drupal, etc., allowing for easy content management and scalability." },
];

export default function WebDevelopmentPage() {
  return (
    <section id="web-dev-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Web Development</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your website is your most crucial digital asset and primary storefront. We build robust, scalable, and visually appealing websites optimized for performance, user experience, lead generation, and achieving tangible business results for SMEs & MSMEs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {webDevFeatures.map((feature, index) => (
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
                 <Button size="lg">Build Your Website <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
