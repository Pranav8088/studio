
import Link from 'next/link';
import { BriefcaseBusiness, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'; // Added icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground py-12 mt-16 border-t border-border/40">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Column 1: About Company */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-2">
              <BriefcaseBusiness className="h-6 w-6 text-accent" />
              <span>Nitya Marketing</span>
            </Link>
            <p className="text-sm">
              Your dedicated B2B growth partner, empowering SMEs & MSMEs to achieve their marketing goals.
            </p>
             <p className="text-xs pt-4">
                &copy; {currentYear} Nitya Marketing Management. All rights reserved.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-3 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/why-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-3 text-base">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/digital-marketing/seo" className="hover:text-primary transition-colors">SEO</Link></li>
              <li><Link href="/digital-marketing/social-media-marketing" className="hover:text-primary transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/marketing-technologies" className="hover:text-primary transition-colors">Marketing Technologies</Link></li>
               {/* Add more key service links if needed */}
              <li><Link href="/services" className="hover:text-primary transition-colors font-medium">View All Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground mb-3 text-base">Get In Touch</h4>
            <ul className="space-y-2">
               <li className="flex items-start gap-2">
                 <MapPin className="w-4 h-4 mt-1 shrink-0 text-accent" />
                 <span>123 Marketing Ave,<br />Business City, BC 12345</span> {/* Placeholder Address */}
               </li>
               <li className="flex items-center gap-2">
                 <Phone className="w-4 h-4 shrink-0 text-accent" />
                 <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a> {/* Placeholder Phone */}
               </li>
                <li className="flex items-center gap-2">
                 <Mail className="w-4 h-4 shrink-0 text-accent" />
                 <a href="mailto:info@nityamarketing.com" className="hover:text-primary transition-colors">info@nityamarketing.com</a> {/* Placeholder Email */}
               </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                 <Twitter className="w-5 h-5" /> {/* Or use an X icon if preferred */}
               </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               {/* Add more social links as needed */}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
