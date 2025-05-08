
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, ShieldAlert, Gauge, LifeBuoy, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Hosting & Support - Nitya Marketing Navigator',
  description: 'Reliable website hosting solutions with dedicated technical support to ensure your site is always available and performant.',
};

const hostingFeatures = [
  { icon: Server, title: "Reliable Hosting Solutions", description: "Secure, scalable, and high-performance hosting plans tailored specifically for the demands of business websites." },
  { icon: Gauge, title: "Performance Optimization", description: "Ensure lightning-fast loading times and optimal website performance through server-level caching and resource management." },
  { icon: ShieldAlert, title: "Robust Security Measures", description: "Implement SSL certificates, firewalls, regular malware scanning, and proactive security monitoring to protect your site." },
  { icon: LifeBuoy, title: "Dedicated Technical Support", description: "Access to our expert technical support team, available to assist promptly with any hosting-related issues or questions." },
];

export default function HostingSupportPage() {
  return (
    <section id="hosting-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Hosting & Support</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ensure your website has a stable, secure, and high-performing foundation. We offer reliable hosting packages with robust security features, performance tuning, and expert technical support tailored for SMEs and MSMEs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {hostingFeatures.map((feature, index) => (
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
                 <Button size="lg">Get Reliable Hosting <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
