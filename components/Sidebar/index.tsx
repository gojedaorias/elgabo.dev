"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./sidebar.module.css";

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

interface SidebarProps {
  links: LinkItem[];
  socials: SocialItem[];
}

export const Sidebar = ({ links, socials }: SidebarProps) => {
  const [visible, setVisible] = React.useState(false);
  const pathname = usePathname();

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
        ease: "easeInOut",
      },
    },
  };

  const socialsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={cn(styles.sidebar, { [styles.sidebar_open]: visible })}>
      <button
        className={cn(styles.burger, {
          [styles.burger_active]: !visible,
        })}
        onClick={() => setVisible(!visible)}
      ></button>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.links}
      >
        {links.map((item) => (
          <Link href={item.url} key={crypto.randomUUID()}>
            <motion.button
              variants={itemVariant}
              className={cn("btn-2", styles.button, {
                [styles.active]: pathname === item.url,
              })}
            >
              {item.icon}
              <motion.span
                animate={{ opacity: visible ? 0 : 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {item.title}
              </motion.span>
            </motion.button>
          </Link>
        ))}
      </motion.div>

      <motion.div
        variants={socialsVariants}
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
            variants={itemVariants}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Sidebar;
