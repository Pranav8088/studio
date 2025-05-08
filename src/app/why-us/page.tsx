
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Handshake, Award, BrainCircuit, Users, ArrowRight } from 'lucide-react'; // Added ArrowRight
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Nitya Marketing Navigator?',
  description: 'Discover the advantages of partnering with Nitya Marketing Management for your B2B growth, including our expertise, approach, and proven results.',
};


// Why Choose Us Data
const whyChooseUsPoints = [
  { icon: Award, title: "Proven Industry Expertise", description: "Over 10 years specializing in SME & MSME marketing across 1,000+ diverse business categories." },
  { icon: Target, title: "Mission-Driven Partnership", description: "We become an integral part of your team, dedicated to achieving your long-term success and vision." },
  { icon: TrendingUp, title: "Focus on Measurable Results", description: "Data-driven strategies consistently delivering tangible growth, lead generation, and positive ROI." },
  { icon: BrainCircuit, title: "Innovative & Holistic Solutions", description: "Comprehensive, end-to-end marketing solutions leveraging the latest strategies and technologies." },
  { icon: Handshake, title: "Client-Centric Core Values", description: "Built on excellence, integrity, collaboration, innovation, and unwavering client focus." },
  { icon: Users, title: "Dedicated Support & Guidance", description: "Hands-on assistance, transparent communication, and expert guidance at every stage of your growth journey." },
];

export default function WhyUsPage() {
  return (
    <section id="why-us" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Why Partner with Nitya Marketing?</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Choosing the right marketing partner is crucial. We are committed to becoming an integral extension of your team, driving your business towards new heights with unparalleled expertise, unwavering dedication, and consistently proven results.
              </p>
              {/* Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                 {whyChooseUsPoints.map((point, index) => (
                   <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50 shadow-sm text-left">
                     <span className="p-2 bg-accent/10 rounded-full text-accent mt-1 shrink-0">
                       <point.icon className="w-5 h-5" />
                     </span>
                     <div>
                       <h4 className="font-semibold text-base md:text-lg text-foreground mb-1">{point.title}</h4>
                       <p className="text-sm text-muted-foreground leading-normal">{point.description}</p>
                     </div>
                   </div>
                 ))}
              </div>
              <div className="flex justify-center lg:justify-start pt-4">
                 <Link href="/contact">
                    <Button size="lg">Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" /></Button>
                 </Link>
              </div>
          </div>

           {/* Image */}
           <div className="flex justify-center items-center animate-fade-in-right order-first lg:order-last">
             <Image
                 src="https://picsum.photos/550/650?random=10" // Changed image slightly
                 alt="Business Growth and Partnership"
                 data-ai-hint="business growth partnership success"
                 width={500} // Adjusted size slightly
                 height={600}
                 className="rounded-xl shadow-lg object-cover w-full max-w-md lg:max-w-lg aspect-[5/6]" // Adjusted aspect ratio
                 priority // Prioritize loading this image
              />
          </div>
      </div>
    </section>
  );
}
