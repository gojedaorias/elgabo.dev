"use client";

import { footerLinks } from "@/mocks/footerLinks";
import cn from "classnames";
import { motion } from "framer-motion";
import React from "react";
import { Dribbble, Instagram, Plus, X } from "../Icons";
import Subscribe from "../Subscribe";
import styles from "./footer.module.css";

interface FooterProps {
  title?: string;
}

export const Footer = ({ title }: FooterProps) => {
  const [visible, setVisible] = React.useState<number | null>(null);

  const toggleIndex = (index: number) => {
    if (visible === index) {
      setVisible(null);
    } else {
      setVisible(index);
    }
  };

  return (
    <footer
      className={cn(styles.section, {
        [styles.section_margin]: title,
      })}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {footerLinks.map((section, index) => (
            <motion.div
              key={crypto.randomUUID()}
              className={cn(styles.block, {
                [styles.active]: visible === index,
              })}
            >
              <button
                type="button"
                className={cn("body-2-semibold", styles.title)}
                onClick={() => toggleIndex(index)}
              >
                {section.title}
                <Plus />
              </button>
              <motion.div className={styles.links}>
                {section.links.map((link) => (
                  <motion.a
                    key={crypto.randomUUID()}
                    className={cn("btn-2", styles.link)}
                    href={link.href}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className={styles.newsletter}>
          <div className={cn("body-2-semibold", styles.title)}>Newsletter</div>

          <Subscribe className={styles.subscribe} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={cn("caption", styles.copyright)}>
          Angel Uriostegui © 2023
        </div>

        <div className={styles.socials}>
          <Instagram />
          <X />
          <Dribbble />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
