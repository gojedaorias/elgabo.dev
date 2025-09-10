import React from 'react';
import styles from './content.module.css';
import cn from 'classnames';
import { Overview } from '@/components/Cards';
import Link from 'next/link';
import Carousel from '@/components/Carousel';

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

interface ContentProps {
  product: Product;
}

export default function Content({ product }: ContentProps) {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <Link href="/store">
            <button className={cn("button-stroke", styles.button)}>
              Go back
            </button>
          </Link>

          <div className={cn("h2", styles.title)}>{product.title}</div>
          <div className={cn("body-2", styles.description)}>
            {product.description}
          </div>

          <Carousel images={product.images} />
        </div>

        <div className={styles.overview}>
          <Overview product={product} />
        </div>
      </div>
    </section>
  );
}
