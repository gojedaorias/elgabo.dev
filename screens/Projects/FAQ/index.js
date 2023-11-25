"use client";

import React from "react";
import styles from "./faq.module.css";
import cn from "classnames";
import { FaqItem } from "@/components/Cards";
import { faqs } from "@/mocks/faqs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState(false);

  const toggleIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>FAQ</span>
          <h1 className={cn("h2", styles.title)}>Frequently Asked Questions</h1>
        </div>

        <div className={styles.faq_container}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              isActive={index === activeIndex}
              onClick={() => toggleIndex(index)}
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
