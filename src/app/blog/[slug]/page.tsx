
import { blogPostsData } from '@/lib/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, UserCircle, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata, ResolvingMetadata } from 'next';

// Explicitly define props for generateMetadata
interface GenerateMetadataProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Nitya Marketing Management',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  return {
    title: `${post.title} - Nitya Marketing Management`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

// Explicitly define props for the page component
interface BlogPostPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-4xl px-4 md:px-6">
        <header className="mb-12 space-y-6 animate-fade-in-up">
          <Link href="/blog">
            <Button variant="outline" size="sm" className="mb-4 group text-muted-foreground hover:text-accent hover:border-accent">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-accent transition-colors" />
              Back to All Insights
            </Button>
          </Link>

          <Badge variant="outline" className="text-accent border-accent/80 py-1 px-3 text-sm font-medium">{post.category}</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-accent" />
              <span>Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4 text-accent" />
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {post.imageUrl && (
          <div className="mb-12 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl animate-fade-in-up delay-100">
            <Image
              src={post.imageUrl}
              alt={`Cover image for ${post.title}`}
              data-ai-hint={post.imageAiHint}
              width={1200}
              height={675}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg lg:prose-xl max-w-none text-foreground prose-headings:text-primary prose-h2:text-2xl prose-h2:md:text-3xl prose-h3:text-xl prose-h3:md:text-2xl prose-h3:text-secondary-foreground prose-strong:text-foreground prose-a:text-accent prose-a:font-semibold hover:prose-a:underline prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:marker:text-accent prose-blockquote:border-accent prose-blockquote:text-muted-foreground animate-fade-in-up delay-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-16 pt-12 border-t border-border/40 animate-fade-in-up delay-300">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Tag className="h-5 w-5 text-accent" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg">
                Discuss Your Marketing Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
