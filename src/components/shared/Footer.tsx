'use client';

import Link from 'next/link';
import { BriefcaseBusiness, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'; // Added icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary/10 text-muted-foreground py-12 mt-16 border-t border-border/40"> {/* Changed bg to secondary/10 */}
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Column 1: About Company */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-2 hover:opacity-90 transition-opacity">
              <BriefcaseBusiness className="h-6 w-6 text-accent" />
              {/* Show full name on larger screens */}
               <span className="hidden lg:inline">Nitya Marketing Management</span>
               {/* Show shorter name on smaller screens */}
               <span className="lg:hidden">Nitya Marketing</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your dedicated B2B growth partner, empowering SMEs & MSMEs to achieve their marketing goals.
            </p>
             <p className="text-xs pt-4 opacity-70">
                &copy; {currentYear} Nitya Marketing Management. All rights reserved.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3"> {/* Reduced space-y */}
            <h4 className="font-semibold text-foreground mb-3 text-base uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors duration-200">About Us</Link></li>
              <li><Link href="/why-us" className="hover:text-primary transition-colors duration-200">Why Choose Us</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors duration-200">Insights</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors duration-200">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3"> {/* Reduced space-y */}
            <h4 className="font-semibold text-foreground mb-3 text-base uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/digital-marketing/seo" className="hover:text-primary transition-colors duration-200">SEO</Link></li>
              <li><Link href="/digital-marketing/social-media-marketing" className="hover:text-primary transition-colors duration-200">Social Media Marketing</Link></li>
              <li><Link href="/web-development" className="hover:text-primary transition-colors duration-200">Web Development</Link></li>
              <li><Link href="/marketing-technologies" className="hover:text-primary transition-colors duration-200">Marketing Technologies</Link></li>
              <li><Link href="/digital-marketing/google-ads" className="hover:text-primary transition-colors duration-200">Google Ads</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors font-medium pt-1 inline-block">View All Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3"> {/* Reduced space-y */}
            <h4 className="font-semibold text-foreground mb-3 text-base uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3"> {/* Increased space-y slightly for contact info */}
               <li className="flex items-start gap-3">
                 <MapPin className="w-4 h-4 mt-1 shrink-0 text-accent" />
                 <span className="leading-relaxed">Office no. 302, 3rd Floor, New Vohra House,<br /> Grampanchayat Rd, Jawahar Nagar,<br /> Goregaon West, Mumbai,<br /> Maharashtra 400104</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="w-4 h-4 shrink-0 text-accent" />
                 <a href="tel:+917021038009" className="hover:text-primary transition-colors duration-200">+91 7021038009</a>
               </li>
                <li className="flex items-center gap-3">
                 <Mail className="w-4 h-4 shrink-0 text-accent" />
                 {/* Make email clickable and break long string */}
                 <a href="mailto:info@nityamarketing.com" className="hover:text-primary transition-colors duration-200 break-all">info@nityamarketing.com</a>
               </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
               {/* Add actual links later */}
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                 <Twitter className="w-5 h-5" />
               </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className="text-muted-foreground hover:text-primary transition-colors duration-200">
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
