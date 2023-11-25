import React from "react";
import styles from "./process.module.css";
import cn from "classnames";
import { Step } from "@/components/Cards";
import { steps } from "@/mocks/steps";

export default function Process() {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>Process</span>
          <h1 className={cn("h2", styles.title)}>Development process.</h1>
          <p className={cn("body-2", styles.subtitle)}>
            A brief insight into how I craft custom digital solutions,
            emphasizing efficient collaboration and technological excellence.
          </p>
        </div>

        <div className={styles.process_container}>
          {steps.map((step, index) => (
            <Step key={index} {...step} withBackground={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
