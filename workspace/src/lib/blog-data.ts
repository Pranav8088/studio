// This file is intentionally left blank as the blog functionality has been temporarily removed.
// You can delete this file from your project if it's no longer needed.

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  imageAiHint: string;
  category: string;
  content: string;
  tags: string[];
}

export const blogPostsData: BlogPost[] = [];
