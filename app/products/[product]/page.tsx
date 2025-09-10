import { getProduct } from '@/lib/products';
import ProductPage from '@/screens/Product';
import React from 'react';

interface ProductParams {
  params: Promise<{
    product: string;
  }>;
}

export default async function Product({ params }: ProductParams) {
  const { product: productTitle } = await params;
  const product = await getProduct(productTitle);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
