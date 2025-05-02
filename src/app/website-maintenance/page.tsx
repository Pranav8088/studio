import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, ShieldCheck, Activity, DatabaseBackup } from 'lucide-react'; // Changed icons
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Maintenance Services - Nitya Marketing Navigator',
  description: 'Keep your website secure, up-to-date, and running smoothly with our comprehensive website maintenance packages.',
};

const maintenanceFeatures = [
  { icon: ShieldCheck, title: "Security Updates & Monitoring", description: "Regular security patches and monitoring to protect against threats." },
  { icon: Wrench, title: "Software & Plugin Updates", description: "Keep your CMS, themes, and plugins updated for performance and security." },
  { icon: DatabaseBackup, title: "Regular Backups", description: "Scheduled backups of your website data to prevent data loss." }, // Changed icon
  { icon: Activity, title: "Performance Optimization", description: "Ensure your website loads quickly and performs optimally." }, // Changed icon
];

export default function WebsiteMaintenancePage() {
  return (
    <section id="maintenance-service" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Website Maintenance</h1>
          <p className="text-lg text-muted-foreground">
            Ensure your website remains a valuable asset. Our maintenance services for SMEs and MSMEs cover updates, security, backups, and performance checks, giving you peace of mind.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {maintenanceFeatures.map((feature, index) => (
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
                 <Button size="lg">Secure Your Website</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
