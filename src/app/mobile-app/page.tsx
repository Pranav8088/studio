
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, TabletSmartphone, Layers, Settings2, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development - Nitya Marketing Navigator',
  description: 'Develop custom mobile applications for iOS and Android to engage customers and streamline business processes.',
};

const mobileAppFeatures = [
  { icon: Smartphone, title: "Native iOS & Android Development", description: "Build high-performance, platform-specific mobile applications leveraging the full capabilities of each operating system." },
  { icon: TabletSmartphone, title: "Cross-Platform App Development", description: "Develop cost-effective apps for multiple platforms (iOS, Android) using frameworks like React Native or Flutter." },
  { icon: Layers, title: "Intuitive UI/UX Design for Mobile", description: "Create visually appealing, user-friendly, and engaging interfaces specifically optimized for mobile devices and user flows." },
  { icon: Settings2, title: "App Maintenance & Ongoing Support", description: "Provide reliable ongoing support, timely updates, bug fixes, and maintenance to ensure app longevity and performance." },
];

export default function MobileAppPage() {
  return (
    <section id="mobile-app-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Mobile App Development</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Reach your audience directly on their most-used devices. We design and develop custom mobile applications that offer seamless user experiences, drive engagement, and help SMEs and MSMEs achieve their mobile strategy objectives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mobileAppFeatures.map((feature, index) => (
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
                 <Button size="lg">Develop Your Mobile App <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
