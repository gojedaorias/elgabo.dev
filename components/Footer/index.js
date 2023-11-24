import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { footerLinks } from "@/mocks/footerLinks";
import { Dribbble, Instagram, Plus, X } from "../Icons";
import TextInput from "../TextInput";
import Subscribe from "../Subscribe";

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {footerLinks.map((section, index) => (
            <div key={index} className={styles.block}>
              <div className={cn("body-2-semibold", styles.title)}>
                {section.title}
                <Plus />
              </div>
              <div className={styles.links}>
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    className={cn("btn-2", styles.link)}
                    href={link.href}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
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
