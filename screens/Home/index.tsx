import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Stack from './Stack';
import LatestPosts from './LatestPosts';
import Layout from '@/components/Layout';
import Introduction from '@/components/Introduction';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Stack />
      <Introduction />
      <LatestPosts />
      <CTA />
    </Layout>
  );
}
