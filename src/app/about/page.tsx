
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Award, BrainCircuit, Handshake, Users, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Nitya Marketing Navigator',
  description: 'Learn about Nitya Marketing Management, our mission, vision, values, and dedication to empowering SMEs & MSMEs.',
};

const whyChooseUsPoints = [
  { icon: Award, title: "Proven Industry Expertise", description: "Over 10 years specializing in SME & MSME marketing across 1,000+ diverse business categories." },
  { icon: Target, title: "Mission-Driven Partnership", description: "We become an integral part of your team, dedicated to achieving your long-term success and vision." },
  { icon: TrendingUp, title: "Focus on Measurable Results", description: "Data-driven strategies consistently delivering tangible growth, lead generation, and positive ROI." },
  { icon: BrainCircuit, title: "Innovative & Holistic Solutions", description: "Comprehensive, end-to-end marketing solutions leveraging the latest strategies and technologies." },
  { icon: Handshake, title: "Client-Centric Core Values", description: "Built on excellence, integrity, collaboration, innovation, and unwavering client focus." },
  { icon: Users, title: "Dedicated Support & Guidance", description: "Hands-on assistance, transparent communication, and expert guidance at every stage of your growth journey." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient to secondary/10 for lighter feel */}
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

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-28 lg:py-32 bg-primary">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Partner with Nitya Marketing?</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Choosing the right marketing partner is crucial. We are committed to becoming an integral extension of your team, driving your business towards new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="p-3 bg-accent/20 rounded-full text-accent mt-1 shrink-0">
                  <point.icon className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">{point.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 animate-fade-in-up">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
