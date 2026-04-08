import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CalendarDays, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { blogPostsData } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Insights & Articles | Nitya Marketing Management',
  description: 'B2B marketing insights, GeM strategies, SEO tips, and growth articles for SMEs and MSMEs.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container max-w-7xl px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4 text-accent" /> Marketing Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Insights & Articles</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            B2B marketing strategies, GeM tips, digital growth insights, and more — curated by our expert team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPostsData.map((post, index) => (
              <Card
                key={post.id}
                className="flex flex-col overflow-hidden group shadow-md hover:shadow-xl border-border/60 hover:border-accent transition-all duration-300 transform hover:-translate-y-1 rounded-2xl"
              >
                <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={338}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                </Link>
                <CardHeader className="pb-2">
                  <CardDescription className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" /> {post.date}
                  </CardDescription>
                  <CardTitle className="text-xl leading-tight group-hover:text-accent transition-colors mt-1">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0 pb-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-2 pb-5">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 h-auto text-accent font-semibold text-sm">
                      Read Article <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
