"use client";

import React from "react";
import styles from "./sidebar.module.css";
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
import { motion } from "framer-motion";

const links = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <Bag />,
  },
  {
    title: "Store",
    url: "/store",
    icon: <Store />,
  },
  {
    title: "About",
    url: "/about",
    icon: <Profile />,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <Writing />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <Email />,
  },
];

const socials = [
  {
    url: "https://www.instagram.com/",
    icon: <Instagram />,
  },
  {
    url: "https://www.twitter.com/",
    icon: <X />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <Youtube />,
  },
  {
    url: "https://www.linkedin.com/",
    icon: <LinkedIn />,
  },
];

export default function Sidebar() {
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
        {links.map((item, index) => (
          <Link href={item.url} key={index}>
            <motion.button
              variants={itemVariant}
              key={index}
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
        {socials.map((item, index) => (
          <motion.a
            key={index}
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
}
