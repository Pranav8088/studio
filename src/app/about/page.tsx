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
      <div className="container max-w-7xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h1>
          <p className="text-lg text-muted-foreground">
            At Nitya Marketing Management, we're more than consultants—we're your dedicated B2B growth partner, empowering SMEs & MSMEs for over a decade.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent"><Target className="w-6 h-6"/> Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To empower SMEs & MSMEs with customized, high-impact B2B marketing strategies for brand value, lead generation, and measurable growth.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent"><TrendingUp className="w-6 h-6"/> Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To be the most trusted B2B marketing partner globally, driving transformation and sustainable success through innovation and strategic excellence.</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-300">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 text-accent"><Award className="w-6 h-6"/> Our Values</CardTitle>
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

    