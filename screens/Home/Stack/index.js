import React from "react";
import styles from "./stack.module.css";
import cn from "classnames";
import { Tool } from "@/components/Cards";
import { tools } from "@/mocks/tools";

export default function Stack() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={cn("hairline-2", styles.text)}>Tools</span>
        <h1 className={cn("h2", styles.title)}>Stack.</h1>
        <div className={styles.tools}>
          {tools.map((tool) => (
            <Tool key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
