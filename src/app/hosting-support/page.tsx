import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, ShieldAlert, Gauge, LifeBuoy } from 'lucide-react'; // Changed icons
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Hosting & Support - Nitya Marketing Navigator',
  description: 'Reliable website hosting solutions with dedicated technical support to ensure your site is always available and performant.',
};

const hostingFeatures = [
  { icon: Server, title: "Reliable Hosting Solutions", description: "Secure and scalable hosting plans tailored for business websites." },
  { icon: Gauge, title: "Performance Optimization", description: "Ensure fast loading times and optimal website performance." }, // Changed icon
  { icon: ShieldAlert, title: "Security Measures", description: "Implement SSL certificates, firewalls, and malware scanning." }, // Changed icon
  { icon: LifeBuoy, title: "Technical Support", description: "Dedicated support team available to assist with hosting-related issues." },
];

export default function HostingSupportPage() {
  return (
    <section id="hosting-service" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Hosting Support</h1>
          <p className="text-lg text-muted-foreground">
            Ensure your website has a stable and secure foundation. We offer reliable hosting packages with robust security and performance features, backed by expert technical support for SMEs and MSMEs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostingFeatures.map((feature, index) => (
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
                 <Button size="lg">Get Reliable Hosting</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
