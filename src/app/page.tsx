'use client'; // Add this directive to make the component a Client Component

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, CheckCircle, Award, BrainCircuit, Users, BookOpen, CalendarDays } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Placeholder blog data
const blogPosts = [
  { id: 1, title: "The Ultimate Guide to B2B SEO", excerpt: "Unlock organic growth with these essential SEO strategies tailored for B2B businesses.", date: "2024-08-15", link: "/digital-marketing/seo" },
  { id: 2, title: "Why Your SME Needs a Marketing Technology Stack", excerpt: "Streamline your marketing efforts and drive efficiency with the right MarTech tools.", date: "2024-08-10", link: "/marketing-technologies" },
  { id: 3, title: "Building a High-Converting B2B Website", excerpt: "Key elements and design principles for a website that turns visitors into leads.", date: "2024-08-05", link: "/web-development" },
];

// Placeholder values data (subset from About page)
const coreValues = [
  { icon: Users, title: "Client-Centric Approach" },
  { icon: Award, title: "Excellence" },
  { icon: BrainCircuit, title: "Innovation" },
  { icon: CheckCircle, title: "Integrity" },
];

// Featured Services Data
const featuredServices = [
  { title: "SEO", description: "Boost visibility and drive organic traffic.", icon: TrendingUp, link: "/digital-marketing/seo" },
  { title: "Web Development", description: "Build high-performing, responsive sites.", icon: Target, link: "/web-development" },
  { title: "Marketing Technologies", description: "Implement and optimize your MarTech stack.", icon: BrainCircuit, link: "/marketing-technologies" },
];

const heroImages = [
  { src: "https://picsum.photos/1920/1080?random=1", alt: "Digital Marketing Strategy Session Team Discussing Growth", aiHint: "digital marketing strategy" },
  { src: "https://picsum.photos/1920/1080?random=2", alt: "Diverse Team Collaborating on a Project Board", aiHint: "team collaboration" },
  { src: "https://picsum.photos/1920/1080?random=3", alt: "Business Growth Analytics Dashboard with Charts", aiHint: "business analytics chart" },
];


export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section - Full-width Banner Slider */}
      <section id="home" className="relative flex items-center justify-center text-center overflow-hidden min-h-[85vh] md:min-h-[90vh] group">
        <Carousel
          className="absolute inset-0 w-full h-full"
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-[0.6] group-hover:brightness-[0.7] transition-all duration-500 ease-in-out transform group-hover:scale-105" // Darken image for text contrast, subtle zoom on hover
                  priority={index === 0}
                  sizes="100vw"
                  data-ai-hint={image.aiHint}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Optional: Custom styled Previous/Next buttons for full-screen banner */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
        </Carousel>

        {/* Overlay for text contrast if needed, but brightness on image might be enough */}
        {/* <div className="absolute inset-0 bg-black/20"></div>  */}

        {/* Text content overlaid */}
        <div className="container max-w-4xl relative z-10 px-4 md:px-6 text-white py-10 md:py-0">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight !leading-tight text-white drop-shadow-md">
              Navigate Your B2B Growth with <span className="text-accent">Nitya Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto drop-shadow-sm">
              Your dedicated partner empowering SMEs & MSMEs. We bridge the gap between ambition and achievement through expert marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Request Consultation</Button>
              </Link>
            </div>
            <div className="pt-8 grid grid-cols-2 gap-4 text-center max-w-sm mx-auto">
              <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm shadow-md">
                <AnimatedCounter end={10} suffix="+" className="text-3xl sm:text-4xl font-bold text-accent" />
                <p className="text-sm text-gray-300 mt-1">Years Experience</p>
              </div>
              <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm shadow-md">
                <AnimatedCounter end={1000} suffix="+" className="text-3xl sm:text-4xl font-bold text-accent" />
                <p className="text-sm text-gray-300 mt-1">Categories Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* About Us Snippet */}
        <section id="about-snippet" className="py-16 md:py-24 bg-background">
            <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6">
                <div className="animate-fade-in-left order-last lg:order-first">
                    <Image
                        src="https://picsum.photos/550/450?random=4"
                        alt="Nitya Marketing Team in a Productive Discussion"
                        data-ai-hint="team meeting discussion"
                        width={550}
                        height={450}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
                        className="rounded-lg shadow-xl object-cover w-full aspect-[11/9] hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="space-y-6 animate-fade-in-right text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">About Nitya Marketing</h2>
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


        {/* Our Values Snippet */}
        <section id="values-snippet" className="py-16 md:py-24 bg-secondary">
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
                           <h4 className="font-semibold text-base md:text-lg mt-2">{value.title}</h4>
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

       {/* Featured Services Section */}
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
                         <CardTitle className="text-xl">{service.title}</CardTitle>
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
            <div className="mt-16">
             <Link href="/services" className="inline-block">
               <Button size="lg" variant="outline" className="hover:bg-primary/10 hover:text-primary transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">View All Services</Button>
             </Link>
            </div>
         </div>
       </section>

        {/* Blog Posts Snippet */}
        <section id="blog-snippet" className="py-16 md:py-24 bg-secondary">
            <div className="container max-w-7xl px-4 md:px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Insights</h2>
                     <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Stay updated with B2B marketing trends, strategies, and tips relevant for SMEs & MSMEs.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                         <Card key={post.id} className="flex flex-col overflow-hidden group animate-fade-in-up shadow-lg hover:shadow-xl border-border/70 hover:border-accent transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="aspect-video w-full overflow-hidden relative">
                               <Image
                                    src={`https://picsum.photos/400/225?random=${post.id+5}`}
                                    alt={`Illustration for blog post titled: ${post.title}`}
                                    data-ai-hint="marketing article illustration"
                                    width={400}
                                    height={225}
                                    loading="lazy"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                           </div>
                            <CardHeader>
                                <CardTitle className="text-lg lg:text-xl leading-tight group-hover:text-accent transition-colors">{post.title}</CardTitle>
                                <CardDescription className="flex items-center gap-1.5 text-xs pt-1 text-muted-foreground">
                                  <CalendarDays className="w-3.5 h-3.5"/> {post.date}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter className="pt-4">
                                <Link href={post.link}>
                                    <Button variant="link" className="p-0 h-auto text-accent group-hover:underline font-semibold">Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" /></Button>
                                </Link>
                            </CardFooter>
                         </Card>
                    ))}
                </div>
                 {/* Add a link to a main blog page if it exists - Currently no blog page exists */}
                 {/* <div className="text-center mt-16">
                     <Link href="/blog">
                         <Button size="lg" variant="outline">Visit Our Blog</Button>
                     </Link>
                 </div> */}
            </div>
        </section>


    </div>
  );
}
