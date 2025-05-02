
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nitya Marketing Navigator',
  description: 'Learn about Nitya Marketing Management, our mission, vision, values, and dedication to empowering SMEs & MSMEs.',
};


export default function AboutPage() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      {/* Added responsive padding */}
      <div className="container max-w-7xl space-y-12 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
           {/* Responsive text sizes */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Who We Are</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            At Nitya Marketing Management, we're more than consultants—we're your dedicated B2B growth partner, empowering SMEs & MSMEs for over a decade.
          </p>
        </div>
        {/* Responsive grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent text-xl md:text-2xl"><Target className="w-6 h-6 md:w-7 md:h-7"/> Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To empower SMEs & MSMEs with customized, high-impact B2B marketing strategies for brand value, lead generation, and measurable growth.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent text-xl md:text-2xl"><TrendingUp className="w-6 h-6 md:w-7 md:h-7"/> Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To be the most trusted B2B marketing partner globally, driving transformation and sustainable success through innovation and strategic excellence.</p>
            </CardContent>
          </Card>
          {/* Ensure this card spans correctly and looks good on all screens */}
          <Card className="md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-300">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 text-accent text-xl md:text-2xl"><Award className="w-6 h-6 md:w-7 md:h-7"/> Our Values</CardTitle>
            </CardHeader>
            <CardContent>
               <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Client-Centric Approach</li>
                  <li>Excellence</li>
                  <li>Innovation</li>
                  <li>Integrity</li>
                  <li>Collaboration</li>
               </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
