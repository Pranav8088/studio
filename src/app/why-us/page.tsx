import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Handshake, Award, BrainCircuit, Users } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Nitya Marketing Navigator?',
  description: 'Discover the advantages of partnering with Nitya Marketing Management for your B2B growth, including our expertise, approach, and proven results.',
};


// Why Choose Us Data
const whyChooseUsPoints = [
  { icon: Award, title: "Industry Expertise", description: "10+ years in SME & MSME marketing across 1,000+ categories." },
  { icon: Target, title: "Mission-Driven Approach", description: "Integral part of your team for long-term success." },
  { icon: TrendingUp, title: "Global Vision", description: "Redefining SME & MSME marketing with innovative solutions." },
  { icon: Handshake, title: "Core Values", description: "Client-centricity, excellence, innovation, integrity, collaboration." },
  { icon: CheckCircle, title: "Proven Results", description: "Consistent delivery of impactful marketing outcomes." },
  { icon: BrainCircuit, title: "End-to-End Solutions", description: "Holistic approach from strategy to execution." },
  { icon: Users, title: "Dedicated Support", description: "Hands-on assistance at every growth stage." },
];

export default function WhyUsPage() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">Why Partner with Nitya Marketing?</h1>
              <p className="text-lg text-muted-foreground">
                  We are committed to becoming an integral part of your marketing team, driving your business to new heights with expertise, dedication, and proven results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {whyChooseUsPoints.map((point, index) => (
                   <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                     <span className="p-1.5 bg-accent/10 rounded-full text-accent mt-1">
                       <point.icon className="w-5 h-5" />
                     </span>
                     <div>
                       <h4 className="font-semibold">{point.title}</h4>
                       <p className="text-sm text-muted-foreground">{point.description}</p>
                     </div>
                   </div>
                 ))}
              </div>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="mt-6">Let's Collaborate</Button>
              </Link>
          </div>
           <div className="hidden lg:block animate-fade-in-right">
             <Image
                 src="https://picsum.photos/550/650"
                 alt="Business Growth Chart"
                 data-ai-hint="business growth chart success"
                 width={550}
                 height={650}
                 className="rounded-xl shadow-lg object-cover aspect-[55/65]"
              />
          </div>
      </div>
    </section>
  );
}
