// productService.js

import { products } from "@/mocks/products";

export function fetchProductByTitle(title: string) {
  const product = products.find(
    (p) => p.title.toLowerCase() === title.toLowerCase()
  );

  return product;
}

export async function getProduct(title: string) {
  const product = products.find((p) => p.title === title);
  return product;
}

export { products };
