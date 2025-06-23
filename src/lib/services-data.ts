import { BriefcaseBusiness, Code, Laptop, Megaphone, Search, Server, ShieldCheck, Smartphone, Store, Users, VideoIcon, Zap, BadgeDollarSign, MessageSquareHeart } from 'lucide-react';

export interface ServiceItem {
  title: string;
  href: string;
  icon: any;
  description: string;
  category: string;
  featured?: boolean;
}

export const allServices: ServiceItem[] = [
  // Digital Marketing Services
  {
    title: "Digital Marketing Suite",
    href: "/digital-marketing",
    icon: Megaphone,
    description: "End-to-end digital marketing solutions to boost your online presence and drive growth.",
    category: "Digital Marketing",
    featured: true
  },
  {
    title: "SEO Services",
    href: "/digital-marketing/seo",
    icon: Search,
    description: "Boost visibility & drive organic traffic with our comprehensive SEO strategies.",
    category: "Digital Marketing"
  },
  {
    title: "Social Media Marketing",
    href: "/digital-marketing/social-media-marketing",
    icon: Users,
    description: "Engage audiences & build brand loyalty across all major social platforms.",
    category: "Digital Marketing"
  },
  {
    title: "Google Ads (PPC)",
    href: "/digital-marketing/google-ads",
    icon: BadgeDollarSign,
    description: "Targeted pay-per-click advertising for maximum return on investment.",
    category: "Digital Marketing"
  },
  {
    title: "Video Production",
    href: "/digital-marketing/video-production",
    icon: VideoIcon,
    description: "High-quality video content creation for marketing and brand storytelling.",
    category: "Digital Marketing"
  },

  // Web & Technology Services
  {
    title: "Web Development",
    href: "/web-development",
    icon: Code,
    description: "Custom, high-performing websites built with the latest web technologies.",
    category: "Web & Technology",
    featured: true
  },
  {
    title: "Mobile App Development",
    href: "/mobile-app",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android.",
    category: "Web & Technology"
  },
  {
    title: "Blogs & Insights",
    href: "/blogs",
    icon: MessageSquareHeart,
    description: "Content creation and strategy to establish thought leadership.",
    category: "Web & Technology"
  },

  // Enterprise Solutions
  {
    title: "GEM Services",
    href: "/gem",
    icon: BriefcaseBusiness,
    description: "Government e-Marketplace registration and vendor management services.",
    category: "Enterprise Solutions",
    featured: true
  },
  {
    title: "B2B Marketplace",
    href: "/services/b2b-marketplace",
    icon: Store,
    description: "End-to-end B2B marketplace solutions for your business needs.",
    category: "Enterprise Solutions"
  },
  {
    title: "Marketing Technologies",
    href: "/marketing-technologies",
    icon: Zap,
    description: "Integration and optimization of marketing technology stacks.",
    category: "Enterprise Solutions"
  },
  {
    title: "Hosting & Support",
    href: "/hosting-support",
    icon: Server,
    description: "Reliable hosting solutions and ongoing technical support.",
    category: "Enterprise Solutions"
  },
  {
    title: "Online Reputation (ORM)",
    href: "/digital-marketing/orm",
    icon: ShieldCheck,
    description: "Manage and enhance your brand's online reputation.",
    category: "Digital Marketing"
  }
];

export const serviceCategories = [
  'Digital Marketing',
  'Web & Technology',
  'Enterprise Solutions'
];

export const getServicesByCategory = (category: string) => {
  return allServices.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return allServices.filter(service => service.featured);
};
