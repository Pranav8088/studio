
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import Link from 'next/link'; // Import Link

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-b from-primary/10 to-background flex items-center overflow-hidden min-h-[calc(100vh-4rem)]">
         {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container max-w-7xl grid md:grid-cols-2 gap-12 items-center relative z-10 px-4 md:px-6">
          <div className="space-y-6 animate-fade-in-up text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight">
              Navigate Your B2B Growth with <span className="text-accent">Nitya Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Your dedicated partner in empowering SMEs & MSMEs. We bridge the gap between ambition and achievement through expert marketing strategies.
            </p>
            {/* Responsive button layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/digital-marketing/seo"> {/* Link to a specific service or main page */}
                <Button size="lg">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Request Consultation</Button>
              </Link>
            </div>
             {/* Animated Stats - Responsive layout */}
            <div className="mt-10 grid grid-cols-2 gap-4 text-center max-w-sm mx-auto md:mx-0">
                <div className="p-4 rounded-lg">
                    {/* Responsive text size */}
                    <AnimatedCounter end={10} suffix="+" className="text-3xl sm:text-4xl font-bold text-accent" />
                    <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
                </div>
                <div className="p-4 rounded-lg">
                     {/* Responsive text size */}
                    <AnimatedCounter end={1000} suffix="+" className="text-3xl sm:text-4xl font-bold text-accent" />
                    <p className="text-sm text-muted-foreground mt-1">Business Categories Served</p>
                </div>
            </div>
          </div>
          {/* Ensure image is responsive and hidden on small screens */}
          <div className="hidden md:flex justify-center animate-fade-in">
             <Image
                src="https://picsum.photos/600/500"
                alt="Digital Agency Team Collaboration"
                data-ai-hint="team collaboration digital marketing"
                width={600}
                height={500}
                priority // Prioritize loading hero image
                className="rounded-xl shadow-2xl object-cover w-full max-w-lg aspect-[6/5]" // Control max width
             />
          </div>
        </div>
      </section>

       {/* Call to Action / Feature Snippets */}
       <section className="py-16 md:py-24 bg-secondary">
         <div className="container max-w-7xl text-center px-4 md:px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Unlock Your Business Potential</h2>
           <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
             Discover how our tailored B2B marketing solutions can drive sustainable growth for your SME or MSME.
           </p>
           {/* Responsive grid for features */}
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="flex flex-col items-center space-y-4 animate-fade-in-up delay-100">
               <Target className="w-12 h-12 text-accent"/>
               <h3 className="text-xl font-semibold">Strategic Roadmaps</h3>
               <p className="text-muted-foreground">Custom plans aligned with your unique business goals.</p>
               <Link href="/insights">
                 <Button variant="link">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Button>
               </Link>
             </div>
             <div className="flex flex-col items-center space-y-4 animate-fade-in-up delay-200">
               <TrendingUp className="w-12 h-12 text-accent"/>
               <h3 className="text-xl font-semibold">Measurable Growth</h3>
               <p className="text-muted-foreground">Data-driven strategies focused on tangible results and ROI.</p>
               <Link href="/insights">
                  <Button variant="link">See Insights <ArrowRight className="ml-1 h-4 w-4" /></Button>
               </Link>
             </div>
             {/* Added sm:col-span-2 lg:col-span-1 for better alignment on medium screens */}
              <div className="flex flex-col items-center space-y-4 animate-fade-in-up delay-300 sm:col-span-2 lg:col-span-1 lg:mt-0">
               {/* SVG Icon remains the same */}
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business text-accent"><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/></svg>
               <h3 className="text-xl font-semibold">Expert Partnership</h3>
               <p className="text-muted-foreground">Decades of experience dedicated to SME & MSME success.</p>
               <Link href="/about">
                  <Button variant="link">About Us <ArrowRight className="ml-1 h-4 w-4" /></Button>
               </Link>
             </div>
           </div>
         </div>
       </section>


    </div>
  );
}
