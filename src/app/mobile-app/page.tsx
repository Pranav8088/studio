import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, TabletSmartphone, Layers, Settings2 } from 'lucide-react'; // Changed icons
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development - Nitya Marketing Navigator',
  description: 'Develop custom mobile applications for iOS and Android to engage customers and streamline business processes.',
};

const mobileAppFeatures = [
  { icon: Smartphone, title: "Native iOS & Android Development", description: "Build high-performance, platform-specific mobile applications." },
  { icon: TabletSmartphone, title: "Cross-Platform App Development", description: "Develop apps for multiple platforms (iOS, Android) using frameworks like React Native." }, // Changed icon
  { icon: Layers, title: "UI/UX Design for Mobile", description: "Create intuitive and engaging user interfaces optimized for mobile devices." }, // Changed icon
  { icon: Settings2, title: "App Maintenance & Support", description: "Provide ongoing support, updates, and maintenance for your mobile apps." }, // Changed icon
];

export default function MobileAppPage() {
  return (
    <section id="mobile-app-service" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Mobile App Development</h1>
          <p className="text-lg text-muted-foreground">
            Reach your audience on the go. We design and develop custom mobile apps that offer seamless user experiences and help SMEs and MSMEs achieve their mobile strategy goals.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mobileAppFeatures.map((feature, index) => (
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
                 <Button size="lg">Develop Your Mobile App</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
