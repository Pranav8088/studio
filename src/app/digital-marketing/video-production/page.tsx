
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Clapperboard, Film, Sparkles, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Production Services - Nitya Marketing Navigator',
  description: 'Create compelling video content, from corporate videos to social media snippets, designed to engage your B2B audience.',
};

const videoFeatures = [
  { icon: Clapperboard, title: "Concept Development & Scripting", description: "Craft engaging narratives, develop creative concepts, and write professional scripts tailored to your message and audience." },
  { icon: Film, title: "Professional Filming & Production", description: "High-quality video shooting utilizing professional-grade equipment, lighting, sound, and experienced crew members." },
  { icon: Sparkles, title: "Post-Production & Editing", description: "Comprehensive editing, color grading, motion graphics, sound design, and visual effects to create polished final videos." },
  { icon: Video, title: "Video Strategy & Distribution", description: "Develop effective strategies to maximize video reach, engagement, and impact across relevant platforms and marketing channels." },
];

export default function VideoProductionPage() {
  return (
    <section id="video-production-service" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Video Production</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Harness the power of video to tell your brand story, showcase products, demonstrate expertise, and connect with your B2B audience on a deeper level. We offer end-to-end video production services for SMEs and MSMEs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {videoFeatures.map((feature, index) => (
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
                 <Button size="lg">Start Your Video Project <ArrowRight className="ml-2 h-5 w-5" /></Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
