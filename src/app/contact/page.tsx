
import ContactForm from '@/components/shared/ContactForm';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react'; // Import icons

export const metadata: Metadata = {
  title: 'Contact Nitya Marketing Navigator',
  description: 'Reach out for a free consultation. Let\'s discuss how Nitya Marketing Management can help elevate your SME or MSME business.',
};


export default function ContactPage() {
  return (
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
                    {/* Optional: Add a map here */}
                    {/* <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                       <iframe
                         src="YOUR_GOOGLE_MAPS_EMBED_URL" // Replace with your embed URL
                         width="100%"
                         height="100%"
                         style={{ border:0 }}
                         allowFullScreen={false}
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                         title="Nitya Marketing Location"
                       ></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  );
}
