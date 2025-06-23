import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, MessageSquare, Share2, Search, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs & Insights - Nitya Marketing Navigator',
  description: 'Discover the latest insights, trends, and strategies in digital marketing and web development.',
};

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Digital Marketing Strategies for 2024',
    excerpt: 'Discover the most effective digital marketing strategies to grow your business this year.',
    date: 'June 15, 2024',
    author: 'Marketing Team',
    readTime: '5 min read',
    category: 'Digital Marketing',
    image: '/images/insights/digital-marketing-trends.jpg'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to SEO in 2024',
    excerpt: 'Learn the latest SEO techniques and best practices to improve your website\'s visibility.',
    date: 'June 10, 2024',
    author: 'SEO Experts',
    readTime: '7 min read',
    category: 'SEO',
    image: '/images/insights/seo-guide.jpg'
  },
  {
    id: 3,
    title: 'Web Design Trends to Watch in 2024',
    excerpt: 'Explore the top web design trends that will dominate the digital landscape this year.',
    date: 'June 5, 2024',
    author: 'Design Team',
    readTime: '6 min read',
    category: 'Web Design',
    image: '/images/insights/web-design-trends.jpg'
  },
];

const categories = [
  'All',
  'Digital Marketing',
  'SEO',
  'Web Design',
  'Social Media',
  'Content Marketing',
  'Email Marketing'
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs & Insights</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Stay updated with the latest trends, strategies, and insights in digital marketing and web development
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <main className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              
              <div className="w-full md:w-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    category === 'All' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="h-48 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-gray-300" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                    <Link href={`/blogs/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-700">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {post.readTime}
                      </span>
                      <button className="text-gray-400 hover:text-primary">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>

      {/* Why Read Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Read Our Blog?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Insights',
                description: 'Learn from industry experts with years of experience in digital marketing and web development.',
                icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
                bg: 'bg-amber-50'
              },
              {
                title: 'Latest Trends',
                description: 'Stay updated with the latest trends, tools, and technologies in the digital space.',
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                bg: 'bg-blue-50'
              },
              {
                title: 'Actionable Tips',
                description: 'Get practical, actionable tips and strategies you can implement right away.',
                icon: <BookOpen className="w-8 h-8 text-green-500" />,
                bg: 'bg-green-50'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`${item.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated With Our Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and never miss our latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
