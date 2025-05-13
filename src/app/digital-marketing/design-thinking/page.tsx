
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, BrainCircuit, Users, Wand2, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Thinking Services - Nitya Marketing Navigator',
  description: 'Leverage user-centric design thinking principles to innovate, solve complex problems, and create exceptional customer experiences.',
};

const designThinkingFeatures = [
  { icon: Users, title: "User Empathy & Research", description: "Deeply understand user needs, behaviors, and pain points through qualitative and quantitative research methods." },
  { icon: BrainCircuit, title: "Problem Framing & Strategy", description: "Clearly define complex challenges and develop innovative, human-centered strategies for impactful solutions." },
  { icon: Lightbulb, title: "Ideation & Prototyping", description: "Generate a wide range of creative solutions and quickly build testable prototypes to validate ideas." },
  { icon: Wand2, title: "Iterative Testing & Refinement", description: "Gather real user feedback through structured testing and continuously improve solutions based on actionable insights." },
];

export default function DesignThinkingPage() {
  return (
    <section id="design-thinking-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Design Thinking</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Embrace a human-centered approach to innovation. Our Design Thinking workshops and services help SMEs and MSMEs uncover deep customer needs, foster collaborative creativity, and develop solutions that truly resonate and drive business value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {designThinkingFeatures.map((feature, index) => (
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
                 <Button size="lg">Innovate with Design Thinking <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
