"use client";

import React from "react";
import styles from "./tabNavigator.module.css";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bag, Email, Home, Profile, Store, Writing } from "../Icons";
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

export default function TabNavigator() {
  const pathname = usePathname();
  const navRefs = React.useRef([]);
  navRefs.current = [];

  const addToRefs = (el) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  React.useEffect(() => {
    // Find the active nav item and scroll it into view
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

  return (
    <nav className={cn(styles.nav)}>
      {links.map((link, index) => (
        <Link href={link.url} key={index}>
          <button
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
          </button>
        </Link>
      ))}
    </nav>
  );
}
