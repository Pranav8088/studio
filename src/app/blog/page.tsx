
import Link from 'next/link';
import Image from 'next/image';
import { blogPostsData, type BlogPost } from '@/lib/blog-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Tag, UserCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Insights & Articles - Nitya Marketing Navigator',
  description: 'Explore the latest B2B marketing trends, strategies, and insights from Nitya Marketing Management, tailored for SMEs & MSMEs.',
};

export default function BlogPage() {
  return (
    <section id="blog-listing" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-7xl space-y-16 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Our Marketing Insights</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Stay ahead with expert analysis, actionable strategies, and the latest trends in B2B marketing, curated for SMEs and MSMEs by Nitya Marketing Navigator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-100">
          {blogPostsData.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden group shadow-lg hover:shadow-xl border-border/70 hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="block aspect-video w-full overflow-hidden relative">
                <Image
                  src={post.imageUrl}
                  alt={`Cover image for ${post.title}`}
                  data-ai-hint={post.imageAiHint}
                  width={400}
                  height={225}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs text-muted-foreground mb-1">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="mx-1.5">·</span>
                   <span className="inline-flex items-center gap-1 text-accent font-medium">
                     <Tag className="w-3 h-3" />{post.category}
                   </span>
                </CardDescription>
                <CardTitle className="text-lg lg:text-xl leading-tight group-hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0 pb-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-5">
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="link" className="p-0 h-auto text-accent group-hover:underline font-semibold text-sm">
                    Read Full Article <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Optional: Add Pagination if many posts */}
        {/* <div className="text-center mt-16 animate-fade-in-up delay-200">
             <Button variant="outline" size="lg">Load More Posts</Button>
        </div> */}

      </div>
    </section>
  );
}
