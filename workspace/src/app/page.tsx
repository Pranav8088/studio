
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, CheckCircle, Award, BrainCircuit, Users, CalendarDays, Tag } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
// Blog data import removed as individual blog pages are removed for now
// import { blogPostsData } from '@/lib/blog-data';

// Placeholder if blog data is needed for home page snippet, otherwise can be empty
const homePageBlogPosts: Array<{
  id: number;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  imageUrl: string;
  imageAiHint: string;
  category: string;
}> = [
  // Example: Add a few static items here if you want to show a snippet,
  // but ensure 'link' goes to "#" or a valid placeholder if detail pages are gone.
  // {
  //   id: 1,
  //   title: "Placeholder Blog Title 1",
  //   excerpt: "This is a short excerpt for the placeholder blog post...",
  //   date: "2024-01-01",
  //   link: "#", // Link to # as detail pages are removed
  //   imageUrl: "https://placehold.co/400x225.png",
  //   imageAiHint: "abstract technology",
  //   category: "Insights"
  // }
];


const coreValues = [
  { icon: Users, title: "Client-Centric Approach" },
  { icon: Award, title: "Excellence & Quality" },
  { icon: BrainCircuit, title: "Innovation & Adaptability" },
  { icon: CheckCircle, title: "Integrity & Transparency" },
];

const featuredServices = [
  { title: "Search Engine Optimization", description: "Boost visibility and drive organic traffic through expert SEO.", icon: TrendingUp, link: "/digital-marketing/seo" },
  { title: "Custom Web Development", description: "Build high-performing, responsive sites tailored to your brand.", icon: Target, link: "/web-development" },
  { title: "Marketing Technologies", description: "Implement and optimize your MarTech stack for efficiency.", icon: BrainCircuit, link: "/marketing-technologies" },
];

const heroImages = [
  { src: "/images/home-page-banner/home-page-banner-1.jpg", alt: "Digital Marketing Strategy Session Team Discussing Growth", aiHint: "digital marketing strategy" },
  { src: "/images/home-page-banner/home-page-banner-2.jpg", alt: "Diverse Team Collaborating on a Project Board", aiHint: "team collaboration" },
  { src: "/images/home-page-banner/home-page-banner-3.jpg", alt: "Business Growth Analytics Dashboard with Charts", aiHint: "business analytics chart" },
];


export default function Home() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">

      <section id="home" className="relative flex items-center justify-center text-center overflow-hidden min-h-[85vh] md:min-h-[90vh] group">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Carousel
            className="w-full h-full"
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[autoplayPlugin.current]}
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={autoplayPlugin.current.reset}
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full relative">
                  <div className="relative w-full h-[85vh] md:h-[90vh]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.aiHint}
                      fill
                      priority={index === 0}
                      className="w-full h-full object-cover brightness-[0.6]"
                      sizes="100vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
          </Carousel>
        </div>

        <div className="container max-w-4xl relative z-10 px-4 md:px-6 py-10 md:py-0">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight !leading-tight text-background drop-shadow-md">
              Navigate Your B2B Growth with <span className="text-accent">Nitya Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-background/90 max-w-xl mx-auto drop-shadow-sm">
              Your dedicated partner empowering SMEs & MSMEs. We bridge the gap between ambition and achievement through expert marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Request Consultation</Button>
              </Link>
            </div>
            <div className="pt-8 grid grid-cols-2 gap-4 text-center max-w-sm mx-auto">
              <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm shadow-md">
                <AnimatedCounter end={10} suffix="+" className="text-3xl sm:text-4xl font-bold text-accent" />
                <p className="text-sm text-background/80 mt-1">Years Experience</p>
              </div>
              <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm shadow-md">
                <AnimatedCounter end={1000} suffix="+" className="text-3xl sm:text-4xl font-bold text-accent" />
                <p className="text-sm text-background/80 mt-1">Categories Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section id="about-snippet" className="py-16 md:py-24 bg-background">
            <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6">
                <div className="animate-fade-in-left order-last lg:order-first">
                    <Image
                        src="/images/home-page-about-us/about-us.jpg"
                        alt="Nitya Marketing team discussing market analysis, lead generation, and sales conversion strategies on a digital board."
                        data-ai-hint="team meeting marketing"
                        width={550}
                        height={480}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
                        className="rounded-lg shadow-xl object-cover w-full aspect-[11/9] hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="space-y-6 animate-fade-in-right text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">About Nitya Marketing Management</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        For over a decade, Nitya Marketing Management has been the dedicated B2B growth partner for SMEs and MSMEs. We're more than consultants; we integrate with your team to provide tailored, high-impact marketing strategies focused on building brand value, generating quality leads, and achieving measurable growth.
                    </p>
                     <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
                        Our mission is to empower businesses like yours to navigate the complexities of the modern market and unlock their full potential.
                    </p>
                    <div className="pt-2">
                      <Link href="/about">
                          <Button variant="outline" className="hover:bg-accent/10 hover:text-accent-foreground transition-colors duration-300">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                    </div>
                </div>
            </div>
        </section>

        <section id="values-snippet" className="py-16 md:py-24 bg-secondary/10">
            <div className="container max-w-7xl text-center px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Our Core Values</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {coreValues.map((value, index) => (
                         <div key={index} className="flex flex-col items-center space-y-3 animate-fade-in-up transform hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                           <div className="p-3 bg-background rounded-full shadow-lg">
                             <span className="p-3 bg-accent/10 rounded-full text-accent inline-block">
                               <value.icon className="w-7 h-7 md:w-8 md:h-8" />
                             </span>
                           </div>
                           <h4 className="font-semibold text-base md:text-lg mt-2 text-foreground">{value.title}</h4>
                         </div>
                    ))}
                </div>
                 <div className="mt-16">
                   <Link href="/about#values" className="inline-block">
                      <Button className="shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">Discover Our Guiding Principles</Button>
                   </Link>
                  </div>
            </div>
        </section>

       <section id="featured-services" className="py-16 md:py-24 bg-background">
         <div className="container max-w-7xl text-center px-4 md:px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Services</h2>
           <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
             Driving growth through specialized B2B marketing solutions tailored for SMEs & MSMEs.
           </p>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {featuredServices.map((service, index) => (
                 <Card key={index} className="flex flex-col text-left group overflow-hidden animate-fade-in-up shadow-lg hover:shadow-xl border-border/70 hover:border-primary transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 150}ms` }}>
                   <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <span className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                           <service.icon className="w-6 h-6" />
                         </span>
                         <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                       <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="pt-4">
                         <Link href={service.link}>
                           <Button variant="link" className="p-0 h-auto text-accent group-hover:underline font-semibold">View Service <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" /></Button>
                         </Link>
                     </CardFooter>
                 </Card>
             ))}
           </div>
         </div>
       </section>

        {/* Blog Posts Snippet - Removed as individual blog pages are causing issues */}
        {/*
        <section id="blog-snippet" className="py-16 md:py-24 bg-secondary/10">
            <div className="container max-w-7xl px-4 md:px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Insights & Articles</h2>
                     <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Stay updated with B2B marketing trends, strategies, and tips relevant for SMEs & MSMEs.</p>
                </div>
                {homePageBlogPosts.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {homePageBlogPosts.map((post, index) => (
                           <Card key={post.id} className="flex flex-col overflow-hidden group animate-fade-in-up shadow-lg hover:shadow-xl border-border/70 hover:border-accent transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                              <a href={post.link} className="block aspect-video w-full overflow-hidden relative">
                                 <Image
                                      src={post.imageUrl}
                                      alt={`Illustration for blog post titled: ${post.title}`}
                                      data-ai-hint={post.imageAiHint}
                                      width={400}
                                      height={225}
                                      loading="lazy"
                                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                             </a>
                              <CardHeader className="pb-3">
                                  <CardDescription className="text-xs text-muted-foreground mb-1">
                                    <span className="inline-flex items-center gap-1.5">
                                      <CalendarDays className="w-3.5 h-3.5" /> {post.date}
                                    </span>
                                    <span className="mx-1.5">·</span>
                                    <span className="inline-flex items-center gap-1 text-accent font-medium">
                                      <Tag className="w-3 h-3" />{post.category}
                                    </span>
                                  </CardDescription>
                                  <CardTitle className="text-lg lg:text-xl leading-tight group-hover:text-accent transition-colors">
                                    <a href={post.link}>{post.title}</a>
                                  </CardTitle>
                              </CardHeader>
                              <CardContent className="flex-grow pt-0 pb-4">
                                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                              </CardContent>
                              <CardFooter className="pt-2 pb-5">
                                  <a href={post.link}>
                                      <Button variant="link" className="p-0 h-auto text-accent group-hover:underline font-semibold text-sm">Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" /></Button>
                                  </a>
                              </CardFooter>
                           </Card>
                      ))}
                  </div>
                )}
            </div>
        </section>
        */}
    </div>
  );
}
