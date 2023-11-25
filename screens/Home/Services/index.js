import React from "react";
import styles from "./services.module.css";
import cn from "classnames";
import { Service } from "@/components/Cards";
import { services } from "@/mocks/services";

export default function Services() {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <span className={cn("hairline-2", styles.text)}>Services</span>
        <h1 className={cn("h2", styles.title)}>Services I’m offering.</h1>

        <div className={styles.services}>
          {services.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
