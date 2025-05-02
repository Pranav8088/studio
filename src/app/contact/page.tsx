
import ContactForm from '@/components/shared/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Nitya Marketing Navigator',
  description: 'Reach out for a free consultation. Let\'s discuss how Nitya Marketing Management can help elevate your SME or MSME business.',
};


export default function ContactPage() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
        {/* Added responsive padding */}
        <div className="container max-w-4xl space-y-12 px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                {/* Responsive text sizes */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Ready to Elevate Your Business?</h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                    Reach out for a free consultation and let's discuss how Nitya Marketing Management can become your dedicated growth partner.
                </p>
            </div>
            {/* ContactForm component is assumed to be responsive */}
            <ContactForm />
        </div>
    </section>
  );
}
