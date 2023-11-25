import React from "react";
import styles from "./step.module.css";
import cn from "classnames";
import { RightUp } from "@/components/Icons";

export default function Step({ image, title, description, isNew }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt="step" />
      </div>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={cn("body-2-semibold", styles.title)}>{title}</div>

          <p className={cn("caption", styles.description)}>{description}</p>
        </div>
      </div>
    </div>
  );
}
