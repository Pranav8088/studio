import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CalendarDays, Tag, ArrowLeft, User } from 'lucide-react';
import { blogPostsData } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Nitya Marketing Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary py-14 md:py-20">
        <div className="container max-w-4xl px-4 md:px-6">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white mb-6 -ml-2">
            <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights</Link>
          </Button>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />{post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-5 text-white/60 text-sm">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-accent" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4 text-accent" />{post.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container max-w-4xl px-4 md:px-6 -mt-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl px-4 md:px-6">
          <div
            className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 pt-8 border-t border-border/60">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-primary/8 text-primary text-xs font-medium px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
