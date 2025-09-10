"use client";

import { faqs } from "@/mocks/faqs";
import cn from "classnames";
import React from "react";
import { FaqItem } from "../Cards";
import { Instagram } from "../Icons";
import styles from "./faq.module.css";

interface FAQProps {
  title?: string;
}

export const FAQ = ({ title }: FAQProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleIndex = (index: number) => {
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

          {title === "contact-page" && (
            <div className={styles.card}>
              <div className={cn("body-2-semibold", styles.card_title)}>
                Couldn’t find what you’re looking for?
              </div>

              <div className={styles.breakline} />

              <div className={styles.email_container}>
                <Instagram />
                <div className={cn("caption", styles.email)}>
                  anguriostegui@outlook.com
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.faq_container}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={crypto.randomUUID()}
              isActive={index === activeIndex}
              onClick={() => toggleIndex(index)}
              {...faq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
