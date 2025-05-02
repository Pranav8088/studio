
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import Button if you plan to use it, otherwise remove

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-16">
      {/* Use px-4 for padding on small screens and md:px-6 for medium and up */}
      <div className="container max-w-7xl text-center text-sm px-4 md:px-6">
        <p>&copy; {currentYear} Nitya Marketing Management. All rights reserved.</p>
        <p className="mt-2 max-w-xl mx-auto"> {/* Limit width on larger screens */}
          Your dedicated B2B growth partner. Let's build your success story together.
        </p>
        {/* Make links wrap nicely on smaller screens */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
           <Link href="/about" className="hover:text-primary transition-colors">About</Link>
           {/* Removed services link as it's now integrated */}
           {/* <Link href="/services" className="hover:text-primary transition-colors">Services</Link> */}
           <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
           <Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link>
           {/* Add links to privacy policy, terms etc. if needed */}
           {/* Example: <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
