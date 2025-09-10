import React from 'react';
import PostPage from '@/screens/Post';
import { getPostContent } from '@/lib/posts';

interface PostParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Post({ params }: PostParams) {
  const { slug } = await params;
  const { contentHtml, ...frontmatter } = await getPostContent(slug);

  return <PostPage frontmatter={frontmatter} contentHtml={contentHtml} />;
}
