
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Clapperboard, Film, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Production Services - Nitya Marketing Navigator',
  description: 'Create compelling video content, from corporate videos to social media snippets, designed to engage your B2B audience.',
};

const videoFeatures = [
  { icon: Clapperboard, title: "Concept Development & Scripting", description: "Craft engaging narratives and professional scripts for your videos." },
  { icon: Film, title: "Filming & Production", description: "High-quality video shooting with professional equipment and crew." },
  { icon: Sparkles, title: "Post-Production & Editing", description: "Editing, motion graphics, sound design, and color correction services." },
  { icon: Video, title: "Video Strategy & Distribution", description: "Develop strategies to maximize video reach and impact across platforms." },
];

export default function VideoProductionPage() {
  return (
    <section id="video-production-service" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
      {/* Added responsive padding */}
      <div className="container max-w-7xl space-y-12 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Responsive text sizes */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Video Production</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Harness the power of video to tell your brand story, showcase products, and connect with your B2B audience. We offer end-to-end video production services for SMEs and MSMEs.
          </p>
        </div>
         {/* Responsive grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {videoFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                  <span className="p-2 bg-primary/10 rounded-full text-primary mb-2 sm:mb-0">
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
                 <Button size="lg">Start Your Video Project</Button>
             </Link>
          </div>
      </div>
    </section>
  );
}
      