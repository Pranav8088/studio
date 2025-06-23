import { Button } from '@/components/ui/button';
import { Search, ArrowRight, Check, ChevronRight, BadgeCheck, BarChart, MessageSquare, Share2, Target, PieChart, TrendingUp, Users, Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services - Nitya Marketing Navigator',
  description: 'Comprehensive digital marketing solutions to grow your online presence and drive business growth.',
};

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website\'s visibility on search engines and drive organic traffic.',
    icon: Search,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: [
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Technical SEO Audits',
      'Local SEO Optimization',
      'Content Optimization'
    ]
  },
  {
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'Reach your target audience with targeted ads on search engines and social media.',
    icon: Target,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    features: [
      'Google Ads Management',
      'Social Media Advertising',
      'Display Advertising',
      'Remarketing Campaigns',
      'Conversion Tracking'
    ]
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand awareness on social media platforms.',
    icon: Share2,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: [
      'Content Strategy & Creation',
      'Community Management',
      'Influencer Partnerships',
      'Social Media Analytics',
      'Paid Social Campaigns'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content to attract and retain your target audience.',
    icon: FileText,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
    features: [
      'Content Strategy Development',
      'Blog Writing & Management',
      'Infographic Creation',
      'Video Content Production',
      'Content Distribution'
    ]
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and build customer loyalty through targeted email campaigns.',
    icon: Mail,
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    features: [
      'Email Campaign Strategy',
      'Newsletter Creation',
      'Automated Email Flows',
      'A/B Testing',
      'Performance Analytics'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track and measure the performance of your digital marketing efforts.',
    icon: BarChart,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    features: [
      'Google Analytics Setup',
      'Custom Dashboard Creation',
      'Conversion Tracking',
      'ROI Analysis',
      'Monthly Performance Reports'
    ]
  }
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Solutions</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Drive growth, increase visibility, and connect with your target audience through our comprehensive digital marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Grow Your Business with Data-Driven Digital Marketing</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's digital landscape, having a strong online presence is crucial for business success. 
                Our comprehensive digital marketing services are designed to help you reach your target audience, 
                generate quality leads, and drive sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-xl p-8">
                <div className="aspect-w-16 aspect-h-9 relative h-80 w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart className="w-16 h-16 text-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a full suite of digital marketing services tailored to your business goals and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`${service.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="p-0 h-auto text-primary hover:no-underline group">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Digital Marketing Services?</h2>
              <p className="text-lg text-gray-600">
                We combine creativity, data, and technology to deliver measurable results and a strong return on your marketing investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Data-Driven Approach',
                  description: 'We base our strategies on data and analytics to ensure maximum ROI and continuous optimization.',
                  icon: <PieChart className="h-8 w-8 text-blue-500" />,
                  bg: 'bg-blue-50'
                },
                {
                  title: 'Transparent Reporting',
                  description: 'Regular, easy-to-understand reports that show you exactly how your campaigns are performing.',
                  icon: <BarChart className="h-8 w-8 text-green-500" />,
                  bg: 'bg-green-50'
                },
                {
                  title: 'Proven Results',
                  description: 'A track record of delivering successful digital marketing campaigns across various industries.',
                  icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
                  bg: 'bg-purple-50'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className={`${item.bg} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Grow Your Business Online?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our digital marketing services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get a Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
