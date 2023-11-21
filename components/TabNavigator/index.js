"use client";

import React from "react";
import styles from "./tabNavigator.module.css";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Bag,
  Email,
  Home,
  Instagram,
  LinkedIn,
  Profile,
  Store,
  Writing,
  X,
  Youtube,
} from "../Icons";
import { LayoutGroup, motion } from "framer-motion";

export default function TabNavigator({ links, socials }) {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(false);
  const navRefs = React.useRef([]);

  const addToRefs = (el) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  React.useEffect(() => {
    const activeNavItem = navRefs.current.find(
      (el) => el.getAttribute("data-url") === pathname
    );
    if (activeNavItem) {
      activeNavItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [pathname]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.nav
      className={cn(styles.container)}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.nav_links}
      >
        {links.map((link, index) => (
          <Link href={link.url} key={index}>
            <motion.button
              variants={itemVariant}
              ref={addToRefs}
              data-url={link.url}
              className={cn("btn-2", styles.nav_item, {
                [styles.active]: pathname === link.url,
              })}
            >
              {link.icon}
              <span className={cn("btn-2", styles.nav_link_text)}>
                {link.title}
              </span>
            </motion.button>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className={styles.socials}
        animate={visible ? "hidden" : "visible"}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {socials.map((item, index) => (
          <motion.a
            key={index}
            className={styles.social}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
