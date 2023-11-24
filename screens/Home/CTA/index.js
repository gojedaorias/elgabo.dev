import React from "react";
import styles from "./cta.module.css";
import cn from "classnames";

export default function CTA() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>CONTACT ME</span>
          <h1 className={cn("h1", styles.title)}>Let’s work together.</h1>
        </div>

        <div>
          <p className={cn("body-2", styles.subtitle)}>
            Embark on a journey of collaboration and innovation with me. Reach
            out now to transform your vision into reality.
          </p>

          <button className={cn("button")}>Get in touch</button>
        </div>
      </div>
    </div>
  );
}
