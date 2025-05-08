
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nitya Marketing Navigator',
  description: 'Learn about Nitya Marketing Management, our mission, vision, values, and dedication to empowering SMEs & MSMEs.',
};


export default function AboutPage() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Who We Are</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            At Nitya Marketing Management, we're more than consultants—we're your dedicated B2B growth partner, empowering SMEs & MSMEs for over a decade with tailored strategies and unwavering support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Mission Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-100 flex flex-col"> {/* Added flex flex-col */}
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="p-3 bg-primary/10 rounded-full text-primary">
                   <Target className="w-6 h-6 md:w-7 md:h-7"/>
                 </span>
                 <CardTitle className="text-xl md:text-2xl text-foreground">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow"> {/* Added flex-grow */}
              <p className="text-muted-foreground">To empower SMEs & MSMEs with customized, high-impact B2B marketing strategies that build brand value, generate quality leads, and drive measurable, sustainable growth.</p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-200 flex flex-col"> {/* Added flex flex-col */}
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center gap-3">
                 <span className="p-3 bg-primary/10 rounded-full text-primary">
                   <TrendingUp className="w-6 h-6 md:w-7 md:h-7"/>
                 </span>
                 <CardTitle className="text-xl md:text-2xl text-foreground">Our Vision</CardTitle>
               </div>
            </CardHeader>
            <CardContent className="flex-grow"> {/* Added flex-grow */}
              <p className="text-muted-foreground">To be the most trusted and innovative B2B marketing partner globally, driving transformation and sustainable success through strategic excellence and client dedication.</p>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card id="values" className="md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-300 flex flex-col"> {/* Added id="values" and flex flex-col */}
            <CardHeader className="flex-shrink-0">
               <div className="flex items-center gap-3">
                 <span className="p-3 bg-accent/10 rounded-full text-accent">
                   <Award className="w-6 h-6 md:w-7 md:h-7"/>
                 </span>
                 <CardTitle className="text-xl md:text-2xl text-foreground">Our Core Values</CardTitle>
               </div>
            </CardHeader>
            <CardContent className="flex-grow"> {/* Added flex-grow */}
               <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                  <li>Client-Centric Approach</li>
                  <li>Excellence & Quality</li>
                  <li>Innovation & Adaptability</li>
                  <li>Integrity & Transparency</li>
                  <li>Collaboration & Partnership</li>
               </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
