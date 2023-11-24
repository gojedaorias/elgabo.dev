import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { footerLinks } from "@/mocks/footerLinks";
import { Instagram } from "../Icons";

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {footerLinks.map((section) => (
            <div>
              <div className={cn("body-2-semibold", styles.title)}>
                {section.title}
              </div>
              <div className={styles.links}>
                {section.links.map((link) => (
                  <a className={cn("btn-2", styles.link)} href={link.href}>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className={cn("body-2-semibold", styles.title)}>Newsletter</div>
        </div>
        <div className={styles.breakline} />

        <div className={styles.copyright}>
          <div className={cn("caption", styles.text)}>
            Angel Uriostegui © 2023
          </div>

          <div className={styles.socials}>
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
}
