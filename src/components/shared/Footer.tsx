import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import Button if you plan to use it, otherwise remove

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-16">
      <div className="container max-w-7xl text-center text-sm">
        <p>&copy; {currentYear} Nitya Marketing Management. All rights reserved.</p>
        <p className="mt-2">
          Your dedicated B2B growth partner. Let's build your success story together.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
           <Link href="/about" className="hover:text-primary">About</Link>
           <Link href="/services" className="hover:text-primary">Services</Link>
           <Link href="/contact" className="hover:text-primary">Contact</Link>
           {/* Add links to privacy policy, terms etc. if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
