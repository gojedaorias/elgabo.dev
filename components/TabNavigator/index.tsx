"use client";

import cn from "classnames";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./tabNavigator.module.css";

interface LinkItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

interface SocialItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

interface TabNavigatorProps {
  links: LinkItem[];
  socials: SocialItem[];
}

export const TabNavigator = ({ links, socials }: TabNavigatorProps) => {
  const pathname = usePathname();
  const [visible] = React.useState(false);
  const navRefs = React.useRef<HTMLElement[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
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

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
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
      <LayoutGroup>
        {links.map((link) => (
          <Link href={link.url} key={crypto.randomUUID()}>
            <motion.button
              layout
              variants={item}
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
      </LayoutGroup>

      <motion.div
        className={styles.socials}
        animate={visible ? "hidden" : "visible"}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {socials.map((item) => (
          <motion.a
            key={crypto.randomUUID()}
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
};

export default TabNavigator;
