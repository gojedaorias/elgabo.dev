import React from "react";
import styles from "./content.module.css";
import cn from "classnames";
import { Overview } from "@/components/Cards";
import Link from "next/link";

export default function Content({ product }) {
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

          <div className={styles.image_container}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
          </div>
        </div>

        <Overview className={styles.overview} product={product} />
      </div>
    </section>
  );
}
