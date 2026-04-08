
import ContactForm from '@/components/shared/ContactForm';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Nitya Marketing Navigator',
  description: 'Reach out for a free consultation. Let\'s discuss how Nitya Marketing Management can help elevate your SME or MSME business.',
};

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

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10"> {/* Adjusted gradient */}
          <div className="container max-w-6xl space-y-16 px-4 md:px-6"> {/* Wider container, more spacing */}
              <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Ready to Elevate Your Business?</h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Reach out for a free, no-obligation consultation. Let's discuss how Nitya Marketing Management can become your dedicated growth partner and tailor a strategy for your success.
                  </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Contact Form */}
                  <div className="animate-fade-in-left lg:order-last">
                     <ContactForm />
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-8 animate-fade-in-right lg:order-first">
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Contact Information</h2>
                      <div className="space-y-4 text-muted-foreground">
                          <div className="flex items-start gap-4">
                              <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                              <div>
                                  <h3 className="font-medium text-foreground mb-1">Our Office</h3>
                                  <p>Office no. 302, 3rd Floor, New Vohra House,<br /> Grampanchayat Rd, Jawahar Nagar,<br /> Goregaon West, Mumbai,<br /> Maharashtra 400104</p>
                              </div>
                          </div>
                           <div className="flex items-center gap-4">
                              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                               <div>
                                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                                  <a href="tel:+917021038009" className="hover:text-primary transition-colors">+91 7021038009</a>
                               </div>
                          </div>
                          <div className="flex items-center gap-4">
                              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                               <div>
                                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                                  <a href="mailto:info@nityamarketing.com" className="hover:text-primary transition-colors break-all">info@nityamarketing.com</a>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl space-y-16 px-4 md:px-6">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Addressing common concerns and questions SMEs & MSMEs have about navigating B2B marketing.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="border border-border/60 rounded-lg bg-card shadow-sm overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:text-primary font-medium text-base md:text-lg py-4 px-6 text-foreground hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pt-0 px-6 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                  <div className="mt-3">
                    <Button variant="link" size="sm" className="p-0 h-auto text-accent hover:underline font-medium" asChild>
                      <Link href="#contact">
                        Get Solution <Send className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
