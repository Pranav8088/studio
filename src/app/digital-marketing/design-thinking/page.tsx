
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, BrainCircuit, Users, Wand2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Thinking Services - Nitya Marketing Navigator',
  description: 'Leverage user-centric design thinking principles to innovate, solve complex problems, and create exceptional customer experiences.',
};

const designThinkingFeatures = [
  { icon: Users, title: "User Empathy & Research", description: "Deeply understand user needs, behaviors, and pain points." },
  { icon: Lightbulb, title: "Ideation & Prototyping", description: "Generate innovative solutions and create testable prototypes quickly." },
  { icon: Wand2, title: "Iterative Testing & Refinement", description: "Gather user feedback and continuously improve solutions based on insights." },
  { icon: BrainCircuit, title: "Problem Framing & Strategy", description: "Clearly define challenges and develop human-centered strategies." },
];

export default function DesignThinkingPage() {
  return (
    <section id="design-thinking-service" className="py-16 md:py-24 bg-secondary">
      {/* Added responsive padding */}
      <div className="container max-w-7xl space-y-12 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Responsive text sizes */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Design Thinking</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Embrace a human-centered approach to innovation. Our Design Thinking workshops and services help SMEs and MSMEs understand customer needs, foster creativity, and develop solutions that truly resonate.
          </p>
        </div>
        {/* Responsive grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {designThinkingFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <span className="p-2 bg-accent/10 rounded-full text-accent mb-2 sm:mb-0">
                     <feature.icon className="w-7 h-7" />
                  </span>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow text-center sm:text-left">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
             <Link href="/contact">
                 <Button size="lg">Innovate with Design Thinking</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
      