"use client";

import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { footerLinks } from "@/mocks/footerLinks";
import { Dribbble, Instagram, Plus, X } from "../Icons";
import Subscribe from "../Subscribe";
import { motion } from "framer-motion";

export default function Footer() {
  const [visible, setVisible] = React.useState(null);

  const largeScreen = () => window.innerWidth > 1024;

  const toggleIndex = (index) => {
    if (visible === index) {
      setVisible(null);
    } else {
      setVisible(index);
    }
  };

  const container = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    collapsed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variant = {
    open: { opacity: 1, y: 0 },
    collapsed: { opacity: 0, y: -20 },
  };

  const largeVariant = {
    open: { opacity: 1, x: 0 },
    collapsed: { opacity: 1, x: 0 },
  };

  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {footerLinks.map((section, index) => (
            <motion.div key={index} className={styles.block}>
              <div
                className={cn("body-2-semibold", styles.title)}
                onClick={() => toggleIndex(index)}
              >
                {section.title}
                <div className={cn({ [styles.rotate]: visible === index })}>
                  <Plus />
                </div>
              </div>
              <motion.div
                initial="collapsed"
                animate={visible === index ? "open" : "collapsed"}
                variants={container}
                className={cn(styles.links, {
                  [styles.active]: visible === index,
                })}
              >
                {section.links.map((link, index) => (
                  <motion.a
                    key={index}
                    variants={largeScreen() ? largeVariant : variant}
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
}
