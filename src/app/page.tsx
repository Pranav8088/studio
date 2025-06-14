
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Lightbulb, BriefcaseBusiness, Settings, Users, HelpCircle, Zap, Target, TrendingUp, Palette, Code, GitBranch, Cpu, Server, BarChart3, CalendarDays, Tag, LayoutGrid, Cog, Laptop } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import ContactForm from '@/components/shared/ContactForm';
import { blogPostsData } from '@/lib/blog-data';
import AnimatedCounter from '@/components/shared/AnimatedCounter';


const heroBanners = [
  { src: "/images/home-page-banner/home-page-banner-1.jpg", alt: "Modern marketing solutions banner", dataAiHint: "marketing solutions", title: "Strategic Marketing for Growth", description: "Unlock your business potential with our tailored strategies." },
  { src: "/images/home-page-banner/home-page-banner-2.jpg", alt: "Team collaboration on digital project", dataAiHint: "team collaboration", title: "Digital Transformation Experts", description: "Navigate the digital landscape with Nitya Marketing." },
  { src: "/images/home-page-banner/home-page-banner-3.jpg", alt: "Data analytics dashboard", dataAiHint: "data analytics", title: "Data-Driven Results", description: "Achieve measurable success with our expert insights." },
];

const quickSolutionsData = [
  { title: "Want to boost your brand or products & services?", ctaText: "Click here to get quick solution", ctaLink: "/services", icon: () => <Image src="/images/Boost Icon.png" alt="Boost" width={48} height={48} className="w-12 h-12" /> },
  { title: "Do you want your updates to reach your target market?", ctaText: "Click here to get quick solution", ctaLink: "/digital-marketing/social-media-marketing", icon: () => <Image src="/images/Target Icon.png" alt="Target" width={48} height={48} className="w-12 h-12" /> },
  { title: "Want to win government tenders & documentation assistance?", ctaText: "Click here to get quick solution", ctaLink: "/contact", icon: () => <Image src="/images/Documentation Assistance Icon.png" alt="Documentation" width={48} height={48} className="w-12 h-12" /> },
];

const servicesData = [
    { name: "Digital Marketing Suite", link: "/digital-marketing/seo", icon: () => <Image src="/images/Digital Marketing Suite Thumbnail.jpg" alt="Digital Marketing Suite" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "Web & Mobile Solutions", link: "/web-development", icon: () => <Image src="/images/Web & Mobile Solutions Thumbnail.jpg" alt="Web & Mobile Solutions" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "Technology & Support", link: "/marketing-technologies", icon: () => <Image src="/images/Technology & Support Thumbnail.jpg" alt="Technology & Support" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "SEO Services", link: "/digital-marketing/seo", icon: () => <Image src="/images/SEO Services Thumbnail.jpg" alt="SEO Services" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "Social Media Marketing", link: "/digital-marketing/social-media-marketing", icon: () => <Image src="/images/social media marketing Thumbnail.jpg" alt="Social Media Marketing" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "Google Ads (PPC)", link: "/digital-marketing/google-ads", icon: () => <Image src="/images/Google Ads (PRC) Thumbnail.jpg" alt="Google Ads" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "Content Creation", link: "/digital-marketing/video-production", icon: () => <Image src="/images/Content Creation Thumbnail.jpg" alt="Content Creation" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
    { name: "Website Maintenance", link: "/website-maintenance", icon: () => <Image src="/images/Website Maintenance Thumbnail.jpg" alt="Website Maintenance" width={64} height={64} className="w-16 h-16 rounded-full object-cover" /> },
];

const strategicMarketingPointers = [
  "Identify and reach your ideal B2B customers effectively.",
  "Build a strong, recognizable brand in your industry niche.",
  "Generate consistent, high-quality leads for your sales pipeline.",
  "Optimize marketing spend for maximum return on investment.",
  "Stay ahead of competitors with innovative strategies."
];

const techPointers = [
  "Advanced CRM Systems", "Marketing Automation Platforms", "Data Analytics Tools", "SEO Software Suite",
  "Cloud Hosting Solutions", "Modern Web Frameworks", "Project Management Software", "Graphic Design Tools"
];

const homePageBlogPosts = blogPostsData.slice(0, 2).map(post => ({ // Show 2 posts
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  link: `/blog/${post.slug}`,
  imageUrl: post.imageUrl,
  imageAiHint: post.imageAiHint,
  category: post.category,
}));

export default function Home() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col">

      {/* Hero Section - Rotating Banners */}
      <section id="home-banners" className="relative flex items-center justify-center text-center overflow-hidden min-h-[750px] group">
        <div className="absolute inset-0 w-full h-full bg-secondary/20">
          <Carousel
            className="w-full h-full"
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayPlugin.current]}
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={autoplayPlugin.current.reset}
          >
            <CarouselContent>
              {heroBanners.map((banner, index) => (
                <CarouselItem key={index} className="h-full relative">
                  <div className="relative w-full h-[750px] overflow-hidden">
                    <Image
                      src={banner.src}
                      alt={banner.alt}
                      data-ai-hint={banner.dataAiHint}
                      fill
                      priority={index === 0}
                      className="w-full h-full object-cover brightness-[0.7]"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 md:p-8">
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-background drop-shadow-lg animate-fade-in-up">
                        {banner.title}
                      </h1>
                      <p className="mt-4 text-md sm:text-lg lg:text-xl text-background/90 max-w-lg md:max-w-2xl drop-shadow-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        {banner.description}
                      </p>
                       <Button asChild size="lg" className="mt-8 animate-fade-in-up shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                            <Link href="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
          </Carousel>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6">
          <div className="animate-fade-in-left lg:order-first">
            <Image
              src="/images/home-page-about-us/about-us.jpg"
              alt="Nitya Marketing team in a strategy session"
              data-ai-hint="team meeting strategy"
              width={550}
              height={480}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
              className="rounded-lg shadow-xl object-cover w-full aspect-[11/9] hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6 animate-fade-in-right text-center lg:text-left lg:order-last">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">About Nitya Marketing</h2>
            <p className="text-lg text-muted-foreground">
              Nitya Marketing is your dedicated partner in navigating the complexities of the B2B market. We specialize in empowering SMEs and MSMEs with innovative and results-driven marketing strategies designed to build brand value, generate quality leads, and achieve sustainable growth.
            </p>
            <p className="text-muted-foreground">
              Our team of experts combines industry knowledge with cutting-edge techniques to deliver marketing solutions that truly make an impact.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline" className="hover:bg-accent/10 hover:text-accent-foreground transition-colors duration-300">
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Solutions Section */}
      <section id="quick-solutions" className="py-16 md:py-24 bg-secondary/10">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Need Quick Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {quickSolutionsData.map((solution, index) => (
              <Card key={index} className="flex flex-col items-center p-6 text-center animate-fade-in-up shadow-lg hover:shadow-xl border-border/70 hover:border-primary transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                  {solution.icon()}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mb-4 h-16 flex items-center justify-center">{solution.title}</CardTitle>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={solution.ctaLink}>{solution.ctaText} <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We offer a comprehensive suite of marketing services tailored to meet the unique needs of your B2B business.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
                <Card key={index} className="group h-full flex flex-col justify-center items-center p-6 text-center rounded-lg shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
                 <Link href={service.link} className="flex flex-col items-center justify-center h-full w-full">
                    <div className="p-3 bg-accent/10 rounded-full text-accent mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        {service.icon()}
                    </div>
                    <CardTitle className="text-md font-medium text-foreground group-hover:text-accent">{service.name}</CardTitle>
                  </Link>
                </Card>
            ))}
          </div>
           <div className="mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Why SME/MSME Requires Strategic Marketing Management? Section */}
      <section id="why-strategic-marketing" className="py-16 md:py-24 bg-secondary/10">
        <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-6">
          <div className="animate-fade-in-left">
            <Image
              src="/images/Why SME Requires.jpg"
              alt="Business people analyzing marketing data on a graph"
              data-ai-hint="marketing analytics graph"
              width={550}
              height={450}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
              className="rounded-lg shadow-xl object-cover w-full aspect-[11/9] hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why SME/MSME Requires Strategic Marketing Management?</h2>
            <p className="text-lg text-muted-foreground">
              In today's competitive landscape, strategic marketing is not just an option but a necessity for SMEs and MSMEs to thrive and grow.
            </p>
            <ul className="space-y-3">
              {strategicMarketingPointers.map((pointer, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{pointer}</span>
                </li>
              ))}
            </ul>
             <div className="pt-2">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/insights">Discover More Insights <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology/Software Section */}
      <section id="about-technologies" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/Why Choose Us.jpg"
            alt="Technology Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container max-w-7xl px-4 md:px-6 text-center relative">
          <div className="mb-10">
            <div className="bg-white p-4 rounded-lg inline-block shadow-xl">
              <Image 
                src="/images/Nitya Marketing Logo.png" 
                alt="Nitya Marketing Logo" 
                width={300}
                height={100}
                className="h-24 w-auto"
                priority
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Technological Edge</h2>
          <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto">
            We leverage a robust suite of modern technologies, languages, and software to deliver cutting-edge marketing solutions and ensure optimal performance for your campaigns.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto text-left">
            {techPointers.map((tech, index) => (
              <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 animate-fade-in-up hover:bg-white/20 transition-colors duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <Zap className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-white/90">{tech}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/marketing-technologies">Explore Our Tech Stack <Cpu className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact-form-home" className="py-16 md:py-24 bg-secondary/10">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to grow with Strategic Marketing Management?</h2>
            <p className="text-lg text-muted-foreground mt-2">Let's discuss how we can elevate your business.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Blog/Updates Section */}
      {homePageBlogPosts.length > 0 && (
        <section id="blog-snippet" className="py-16 md:py-24 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Insights & Articles</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Stay updated with B2B marketing trends, strategies, and tips.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {homePageBlogPosts.map((post, index) => (
                <Card key={post.id} className="flex flex-col overflow-hidden group animate-fade-in-up shadow-lg hover:shadow-xl border-border/70 hover:border-accent transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link href={post.link} className="block aspect-video w-full overflow-hidden relative">
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
                  </Link>
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
                      <Link href={post.link}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0 pb-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-2 pb-5">
                    <Link href={post.link}>
                      <Button variant="link" className="p-0 h-auto text-accent group-hover:underline font-semibold text-sm">Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" /></Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
             {blogPostsData.length > 2 && (
                <div className="text-center mt-16">
                <Button asChild size="lg">
                    <Link href="/blog">View All Articles <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

    