import { Metadata } from 'next';
import Link from 'next/link';
import { allServices, serviceCategories, getServicesByCategory } from '@/lib/services-data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Services | Nitya Marketing Navigator',
  description: 'Explore our comprehensive range of digital marketing, web development, and enterprise solutions tailored for your business growth.'
};

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive digital solutions to grow your business in the digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category) => (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
                <div className="ml-4 h-px flex-1 bg-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getServicesByCategory(category).map((service) => (
                  <div 
                    key={service.href}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get a Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
