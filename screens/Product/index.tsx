import React from 'react';
import Layout from '@/components/Layout';
import Content from './Content';

interface Product {
  title: string;
  description: string;
  images: string[];
  overview: string;
  features: Array<{
    title: string;
  }>;
  extras: Array<{
    title: string;
  }>;
  price: number;
  [key: string]: any;
}

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <Layout title="product">
      <Content product={product} />
    </Layout>
  );
}
