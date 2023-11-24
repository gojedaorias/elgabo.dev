import React from "react";
import styles from "./introduction.module.css";
import cn from "classnames";

export default function Introduction() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>Introduction</span>
          <h1 className={cn("h2", styles.title)}>About me.</h1>
        </div>

        <div className={styles.breakline} />

        <div>
          <div className={styles.image_container}>
            <img src="/intro-2.jpg" className={styles.image} />
          </div>

          <p className={cn("body-2", styles.subtitle)}>
            I specialize in crafting user-friendly websites and apps, blending
            aesthetics with functionality to create seamless digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
