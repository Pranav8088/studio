
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, ShieldCheck, Activity, DatabaseBackup, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Maintenance Services - Nitya Marketing Navigator',
  description: 'Keep your website secure, up-to-date, and running smoothly with our comprehensive website maintenance packages.',
};

const maintenanceFeatures = [
  { icon: ShieldCheck, title: "Security Updates & Monitoring", description: "Proactive application of security patches, vulnerability scanning, and continuous monitoring to protect against threats." },
  { icon: Wrench, title: "Software & Plugin Management", description: "Keep your CMS core, themes, and plugins updated regularly for optimal performance, compatibility, and security." },
  { icon: DatabaseBackup, title: "Reliable Regular Backups", description: "Scheduled, automated backups of your website files and database stored securely to prevent data loss." },
  { icon: Activity, title: "Performance Optimization Checks", description: "Regular checks and optimizations to ensure your website loads quickly and performs optimally for users and search engines." },
];

export default function WebsiteMaintenancePage() {
  return (
    <section id="maintenance-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Website Maintenance</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ensure your website remains a secure, high-performing, and valuable asset. Our comprehensive maintenance services for SMEs and MSMEs cover essential updates, security protocols, backups, and performance checks, giving you complete peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {maintenanceFeatures.map((feature, index) => (
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
                 <Button size="lg">Secure Your Website <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
