import { Button } from '@/components/ui/button';
import { Globe, Target, Users, Briefcase, FileText, BarChart, ArrowRight, Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GemPage() {
  const services = [
    {
      title: 'Market Research',
      description: 'In-depth analysis of target markets, competition, and consumer behavior to inform your global strategy.',
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        'Market sizing and segmentation',
        'Competitive landscape analysis',
        'Consumer behavior insights',
        'Regulatory environment assessment'
      ]
    },
    {
      title: 'Market Entry Strategy',
      description: 'Customized strategies for entering new markets with minimal risk and maximum impact.',
      icon: <Target className="h-6 w-6 text-green-600" />,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
        'Market entry mode selection',
        'Go-to-market strategy',
        'Partnership development',
        'Localization requirements'
      ]
    },
    {
      title: 'International Business Development',
      description: 'Building and managing international business relationships for sustainable growth.',
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        'Global partnership development',
        'Distribution channel strategy',
        'Strategic alliance building',
        'International sales enablement'
      ]
    },
    {
      title: 'Cross-Cultural Training',
      description: 'Preparing your team for successful international business interactions.',
      icon: <Users className="h-6 w-6 text-red-600" />,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      features: [
        'Cultural awareness training',
        'Business etiquette guidance',
        'Communication strategies',
        'Negotiation techniques'
      ]
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensuring compliance with international trade laws and regulations.',
      icon: <FileText className="h-6 w-6 text-yellow-600" />,
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      features: [
        'Trade compliance consulting',
        'Regulatory requirements mapping',
        'Documentation management',
        'Compliance training'
      ]
    },
    {
      title: 'Global Branding',
      description: 'Adapting your brand for international markets while maintaining consistency.',
      icon: <Briefcase className="h-6 w-6 text-indigo-600" />,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      features: [
        'Brand localization strategy',
        'Global brand guidelines',
        'Market-specific messaging',
        'Brand consistency management'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Global Expertise',
      description: 'Extensive knowledge of international markets and business practices across multiple industries.',
      icon: <Globe className="h-8 w-8 text-white" />,
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Local Insights',
      description: 'In-depth understanding of local markets, cultural nuances, and business environments.',
      icon: <Users className="h-8 w-8 text-white" />,
      bgColor: 'bg-green-600'
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful international expansions and market entries.',
      icon: <BarChart className="h-8 w-8 text-white" />,
      bgColor: 'bg-purple-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Expansion Management</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Expand your business globally with our comprehensive GEM services designed for sustainable international growth.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigate Global Markets with Confidence</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's interconnected world, expanding your business internationally presents tremendous opportunities 
                but also complex challenges. Our Global Expansion Management (GEM) services provide the strategic guidance 
                and operational support you need to succeed in new markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Start Your Global Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-xl p-8">
                <div className="aspect-w-16 aspect-h-9 relative h-80 w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-16 h-16 text-primary/30" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our GEM Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your business expand and thrive in global markets.
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
                    {service.icon}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600">
                We combine global expertise with local market knowledge to deliver exceptional results for your international expansion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Take Your Business Global?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our Global Expansion Management services can help you succeed in international markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get a Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
