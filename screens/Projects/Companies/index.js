import React from "react";
import styles from "./companies.module.css";
import cn from "classnames";
import { facts } from "@/mocks/facts";
import { Fact } from "@/components/Cards";

export default function Companies() {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.title_container}>
            <span className={cn("hairline-2", styles.text)}>Client</span>
            <h1 className={cn("h2", styles.title)}>
              I’ve worked with great names.
            </h1>
          </div>

          <div className={styles.facts}>
            {facts.map((fact, index) => (
              <Fact key={index} {...fact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
