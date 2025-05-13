
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Nitya Marketing Navigator',
  description: 'Find answers to common questions about B2B marketing, lead generation, branding, and how Nitya Marketing Management can help your SME or MSME.',
};

// FAQ Data
const faqs = [
  { value: "faq-1", question: "Struggling to stand out in a crowded B2B market?", answer: "We design tailored marketing strategies specifically for your niche to cut through the noise, highlight your unique value proposition, and capture the attention of your ideal clients." },
  { value: "faq-2", question: "Want to boost your brand visibility among competitors?", answer: "Let’s elevate your brand presence! We craft data-driven strategies to increase your market share, build authority, and ensure you're seen by the right decision-makers." },
  { value: "faq-3", question: "Are your current marketing efforts failing to generate quality leads?", answer: "We implement high-impact lead generation solutions focused on attracting and nurturing leads that align with your business goals and are more likely to convert into valuable customers." },
  { value: "faq-4", question: "How can we keep buyers updated on new products or services?", answer: "We develop targeted communication plans and customer engagement strategies using email marketing, social media, and content to keep your audience informed and interested." },
  { value: "faq-5", question: "Spending heavily on ads but not seeing sufficient ROI?", answer: "Optimize your ad spend now! We analyze your campaigns, refine targeting, improve ad creative, and implement conversion tracking to ensure your budget delivers maximum return." },
  { value: "faq-6", question: "Need a stronger digital presence to attract B2B customers?", answer: "Let’s build your digital authority! We establish a commanding online presence through integrated SEO, content marketing, social media, and website optimization strategies." },
  { value: "faq-7", question: "Is your website underperforming or failing to convert visitors?", answer: "Improve your website’s performance! We optimize user experience (UX), calls-to-action (CTAs), landing pages, and overall site architecture to turn your website into a powerful conversion engine." },
  { value: "faq-8", question: "Want to explore new B2B sales channels but unsure where to start?", answer: "Expand your business reach today! We help you identify, evaluate, and leverage new sales channels and partnership opportunities tailored to the B2B landscape." },
  { value: "faq-9", question: "Struggling with low brand recognition and building trust?", answer: "Strengthen your brand’s reputation! We build credibility and trust through consistent messaging, thought leadership content, positive online reviews, and strategic PR." },
  { value: "faq-10", question: "Confused about which marketing strategy is right for your business?", answer: "Get a free consultation! Let our experienced marketing experts analyze your situation, understand your goals, and guide you towards the most effective path for sustainable growth." },
];

export default function FaqPage() {
  return (
     <section id="faq" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
        <div className="container max-w-4xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
           <div className="text-center space-y-4 animate-fade-in-up">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Frequently Asked Questions</h1>
             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Addressing common concerns and questions SMEs & MSMEs have about navigating the complexities of B2B marketing and achieving growth.
             </p>
           </div>

           <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-in-up delay-100"> {/* Add space between items */}
             {faqs.map((faq, index) => (
               <AccordionItem
                 key={faq.value}
                 value={faq.value}
                 className="border border-border/60 rounded-lg bg-card shadow-sm overflow-hidden" // Style individual items as cards
                 style={{ animationDelay: `${index * 50}ms` }}
                >
                 <AccordionTrigger className="text-left hover:text-primary font-medium text-base md:text-lg py-4 px-6 text-foreground hover:no-underline [&[data-state=open]>svg]:text-primary"> {/* Adjust styling */}
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-6 pt-0 px-6 text-sm md:text-base leading-relaxed"> {/* Adjust padding and leading */}
                    {faq.answer}
                   <Link href="/contact">
                     <Button variant="link" size="sm" className="p-0 h-auto mt-3 text-accent hover:underline font-medium">
                       Get Solution <Send className="w-3.5 h-3.5 ml-1.5" />
                     </Button>
                   </Link>
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
        </div>
      </section>
  );
}
