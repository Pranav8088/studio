import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Laptop, ShoppingCart, Palette } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services - Nitya Marketing Navigator',
  description: 'Build high-performing, responsive, and user-friendly websites tailored to your B2B business needs.',
};

const webDevFeatures = [
  { icon: Laptop, title: "Custom Website Design & Development", description: "Create unique, professional websites that reflect your brand identity." },
  { icon: Palette, title: "Responsive Design", description: "Ensure optimal viewing experience across all devices (desktops, tablets, mobiles)." }, // Changed icon
  { icon: ShoppingCart, title: "E-commerce Solutions", description: "Develop secure and scalable online stores for B2B transactions." },
  { icon: Code, title: "CMS Integration & Development", description: "Build websites on platforms like WordPress, Drupal, etc., for easy content management." },
];

export default function WebDevelopmentPage() {
  return (
    <section id="web-dev-service" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Web Development</h1>
          <p className="text-lg text-muted-foreground">
            Your website is your digital storefront. We build robust, scalable, and visually appealing websites optimized for performance and user experience, helping SMEs and MSMEs succeed online.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {webDevFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-full text-primary">
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
                 <Button size="lg">Build Your Website</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
