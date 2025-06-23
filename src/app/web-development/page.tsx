
import { Button } from '@/components/ui/button';
import { Code, Laptop, ShoppingCart, Palette, ArrowRight, CheckCircle, Clock, Users, ShieldCheck, Smartphone, Server } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services - Nitya Marketing Navigator',
  description: 'Build high-performing, responsive, and user-friendly websites tailored to your B2B business needs.',};

const webDevFeatures = [
  { 
    icon: Laptop, 
    title: "Custom Web Development", 
    description: "Tailored web solutions designed to meet your specific business objectives and drive results.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  { 
    icon: Smartphone, 
    title: "Mobile-First Design", 
    description: "Responsive websites that deliver seamless experiences across all devices and screen sizes.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  { 
    icon: ShoppingCart, 
    title: "E-commerce Solutions", 
    description: "Powerful online stores with secure payment gateways and intuitive shopping experiences.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  { 
    icon: Code, 
    title: "Custom Applications", 
    description: "Bespoke web applications built with modern technologies to solve complex business challenges.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600"
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Custom web solutions designed to drive business growth and deliver exceptional user experiences
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link href="/contact" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">Our Technology Stack</h2>
              <p className="text-gray-600 mb-8">
                We leverage cutting-edge technologies to build fast, secure, and scalable web applications that deliver exceptional performance and user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'React & Next.js', icon: '⚛️' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'Tailwind CSS', icon: '🎨' },
                  { name: 'MongoDB', icon: '🍃' },
                  { name: 'PostgreSQL', icon: '🐘' },
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-gray-100 rounded-xl p-8">
                <div className="aspect-w-16 aspect-h-9 relative h-64 w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss how we can help bring your web project to life with our expert development services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
