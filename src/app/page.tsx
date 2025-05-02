import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Target, TrendingUp, Lightbulb, Users, Award, BarChart, Search, Handshake, BrainCircuit, Megaphone, Building2, FileText, CalendarCheck, BotMessageSquare, MessageCircleQuestion, Send } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import ContactForm from '@/components/shared/ContactForm';

// Service Data
const services = [
  { icon: Target, title: "Strategic Marketing Roadmap", description: "Customized blueprint aligned with business goals for consistent growth." },
  { icon: Search, title: "Market & Competitor Analysis", description: "In-depth research for insights into trends, gaps, and competitor positioning." },
  { icon: Building2, title: "B2B Marketplace Optimization", description: "Enhance presence on platforms like IndiaMART, TradeIndia, Alibaba." },
  { icon: TrendingUp, title: "Digital Marketing Strategy & Execution", description: "Comprehensive SEO, PPC, social media, and email marketing solutions." },
  { icon: Award, title: "Government Market Penetration", description: "Assistance with vendor registrations, tender bidding, and compliance." },
  { icon: Lightbulb, title: "Brand Development & Positioning", description: "Craft compelling brand identity, messaging, and storytelling." },
  { icon: Handshake, title: "Lead Generation & Sales Enablement", description: "Data-driven campaigns with marketing automation and CRM integration." },
  { icon: FileText, title: "Content Marketing & Thought Leadership", description: "Create authoritative content like whitepapers, blogs, case studies." },
  { icon: Megaphone, title: "Trade Show & Event Marketing", description: "Maximize exposure at trade fairs, exhibitions, and networking events." },
  { icon: BrainCircuit, title: "Marketing Automation & CRM Integration", description: "Implement tools like HubSpot, Zoho, Salesforce for efficiency." },
  { icon: CheckCircle, title: "Execution & Implementation Support", description: "Hands-on guidance for effective strategy implementation." },
  { icon: BarChart, title: "Performance Analytics & Optimization", description: "Track KPIs and refine strategies for enhanced ROI." },
];

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

// Insights Data
const insightsData = [
  { icon: Building2, title: "Strategic Brand Positioning", description: "Build credibility and trust with a consistent brand message." },
  { icon: Target, title: "Targeted Marketing & Lead Generation", description: "Leverage data for targeted campaigns and quality lead generation." },
  { icon: TrendingUp, title: "Cost-Effective Marketing Investment", description: "Optimize spending and maximize ROI with expert strategies." },
  { icon: Lightbulb, title: "Digital Transformation & Online Presence", description: "Stay visible and relevant with strong SEO, social media, and web presence." },
  { icon: Search, title: "Competitive Edge & Market Analysis", description: "Stay ahead by analyzing trends, customer behavior, and competitors." },
  { icon: Handshake, title: "Sales & Marketing Alignment", description: "Enhance customer engagement and conversion through collaboration." },
  { icon: CalendarCheck, title: "Consistency & Long-Term Growth", description: "Build brand recognition and relationships with ongoing campaigns." },
  { icon: MessageCircleQuestion, title: "Crisis Management & Reputation Building", description: "Manage PR and safeguard your brand's reputation effectively." },
  { icon: Megaphone, title: "Scalability & Expansion", description: "Adapt strategies to support growth into new markets and diversification." },
  { icon: BarChart, title: "Measurable Performance & Data-Driven Decisions", description: "Track, optimize, and ensure continuous improvement with analytics." },
];


// FAQ Data
const faqs = [
  { value: "faq-1", question: "Struggling to stand out in a crowded market?", answer: "Get a Tailored Marketing Strategy designed specifically for your business to cut through the noise and capture attention." },
  { value: "faq-2", question: "Want to boost your brand/product visibility among competitors?", answer: "Let’s Elevate Your Brand! We'll craft strategies to increase your visibility and market share." },
  { value: "faq-3", question: "Are your marketing efforts failing to generate quality leads?", answer: "Get High-Impact Lead Generation Solutions! We focus on attracting leads that convert." },
  { value: "faq-4", question: "Do you want your buyers to stay updated on new products or services?", answer: "Get Quick Solutions for Customer Engagement! Keep your audience informed and engaged." },
  { value: "faq-5", question: "Spending on ads but not getting enough ROI?", answer: "Optimize Your Ad Spend Now! We ensure your advertising budget delivers maximum return." },
  { value: "faq-6", question: "Need a strong digital presence to attract B2B customers?", answer: "Let’s Build Your Digital Authority! Establish a commanding online presence in the B2B space." },
  { value: "faq-7", question: "Is your website failing to convert visitors into customers?", answer: "Improve Your Website’s Performance! Turn your website into a powerful conversion tool." },
  { value: "faq-8", question: "Want to explore new B2B sales channels but don’t know where to start?", answer: "Expand Your Business Reach Today! We help you identify and leverage new sales opportunities." },
  { value: "faq-9", question: "Struggling with low brand recognition and trust?", answer: "Strengthen Your Brand’s Reputation! Build credibility and trust with targeted strategies." },
  { value: "faq-10", question: "Confused about which marketing strategy is right for your business?", answer: "Get a Free Consultation! Let our experts guide you towards the most effective path." },
];


export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background flex items-center overflow-hidden min-h-[calc(100vh-4rem)]">
         {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

        <div className="container max-w-7xl grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight">
              Navigate Your B2B Growth with <span className="text-accent">Nitya Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your dedicated partner in empowering SMEs & MSMEs. We bridge the gap between ambition and achievement through expert marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#services">Explore Services</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Request Consultation</a>
              </Button>
            </div>
             {/* Animated Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-lg">
                    <AnimatedCounter end={10} suffix="+" className="text-4xl font-bold text-accent" />
                    <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
                </div>
                <div className="p-4 rounded-lg">
                    <AnimatedCounter end={1000} suffix="+" className="text-4xl font-bold text-accent" />
                    <p className="text-sm text-muted-foreground mt-1">Business Categories Served</p>
                </div>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in">
             <Image
                src="https://picsum.photos/600/500"
                alt="Digital Agency Team Collaboration"
                data-ai-hint="team collaboration digital marketing"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl object-cover aspect-[6/5]"
             />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
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

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Comprehensive B2B Marketing Solutions</h2>
            <p className="text-lg text-muted-foreground">
              From Strategy to Execution, we provide end-to-end marketing solutions tailored to the unique needs of SMEs & MSMEs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-accent/10 rounded-full text-accent">
                       <service.icon className="w-6 h-6" />
                    </span>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
                <Button size="lg" asChild>
                    <a href="#contact">Get Started Today</a>
                </Button>
            </div>
        </div>
      </section>

       {/* Why Partner with Nitya Section */}
      <section id="why-us" className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Partner with Nitya Marketing?</h2>
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
                 <Button size="lg" variant="outline" asChild className="mt-6">
                    <a href="#contact">Let's Collaborate</a>
                </Button>
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


       {/* Insights Section (Why SMEs Need Expertise) */}
       <section id="insights" className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
            <div className="container max-w-7xl space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Why SMEs & MSMEs Need Dedicated Marketing Expertise</h2>
                    <p className="text-lg text-muted-foreground">
                        In today’s competitive landscape, strategic marketing isn't a luxury—it's essential for survival and growth. Discover why dedicated expertise is crucial.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {insightsData.map((insight, index) => (
                        <Card key={index} className="hover:border-accent transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-lg">
                                    <span className="p-1.5 bg-primary/10 rounded-full text-primary">
                                      <insight.icon className="w-5 h-5" />
                                    </span>
                                    {insight.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{insight.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl space-y-12">
           <div className="text-center space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
             <p className="text-lg text-muted-foreground">
                Addressing your common concerns about B2B marketing and how we can help.
             </p>
           </div>
           <Accordion type="single" collapsible className="w-full">
             {faqs.map((faq) => (
               <AccordionItem key={faq.value} value={faq.value} className="border-b border-border/60">
                 <AccordionTrigger className="text-left hover:text-accent font-medium text-base py-4">
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-4 pt-0 px-1">
                    {faq.answer}
                   <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-accent" asChild>
                      <a href="#contact"> Get Solution <Send className="w-3 h-3 ml-1" /></a>
                   </Button>
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
       <section id="contact" className="py-16 md:py-24 bg-secondary">
            <div className="container max-w-4xl space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to Elevate Your Business?</h2>
                    <p className="text-lg text-muted-foreground">
                        Reach out for a free consultation and let's discuss how Nitya Marketing Management can become your dedicated growth partner.
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>

    </div>
  );
}
