
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

export default function FaqPage() {
  return (
     <section id="faq" className="py-16 md:py-24 bg-background">
         {/* Added responsive padding */}
        <div className="container max-w-4xl space-y-12 px-4 md:px-6">
           <div className="text-center space-y-4">
              {/* Responsive text sizes */}
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Frequently Asked Questions</h1>
             <p className="text-lg md:text-xl text-muted-foreground">
                Addressing your common concerns about B2B marketing and how we can help.
             </p>
           </div>
           {/* Ensure accordion items are readable on small screens */}
           <Accordion type="single" collapsible className="w-full">
             {faqs.map((faq) => (
               <AccordionItem key={faq.value} value={faq.value} className="border-b border-border/60 last:border-b-0">
                 <AccordionTrigger className="text-left hover:text-accent font-medium text-base md:text-lg py-4 px-1 sm:px-2 text-primary hover:no-underline">
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-4 pt-0 px-2 sm:px-4 text-sm md:text-base">
                    {faq.answer}
                   <Link href="/contact">
                     <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-accent hover:underline">
                       Get Solution <Send className="w-3 h-3 ml-1" />
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
      