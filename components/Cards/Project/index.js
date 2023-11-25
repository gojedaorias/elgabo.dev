import React from "react";
import styles from "./project.module.css";
import cn from "classnames";
import { RightUp } from "@/components/Icons";

export default function Project({ product, isNew }) {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img className={styles.image} src={product.image} alt="product" />
      </div>

      <div className={styles.overlay}>
        <div className={styles.icon}>
          <RightUp />
        </div>

        <div className={styles.content}>
          <div className={cn("body-2-semibold", styles.title)}>
            {product.title}
          </div>

          <p className={cn("caption", styles.description)}>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
