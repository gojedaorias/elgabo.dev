"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.icon_container}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.9898 18.9533C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533H19.9898ZM16.0299 3.69906L17.5049 4.87078C18.1097 5.34377 18.513 5.96726 18.6509 6.62299C18.8101 7.3443 18.6403 8.0527 18.1628 8.66544L9.3764 20.0279C8.97316 20.5439 8.37891 20.8341 7.74222 20.8449L4.24039 20.8879C4.04939 20.8879 3.89021 20.7589 3.84777 20.5761L3.0519 17.1255C2.91395 16.4912 3.0519 15.8355 3.45514 15.3303L9.68413 7.26797C9.79025 7.13898 9.98126 7.11855 10.1086 7.21422L12.7297 9.29967C12.8994 9.43942 13.1329 9.51467 13.377 9.48242C13.8969 9.41792 14.2471 8.94493 14.1941 8.43969C14.1622 8.1817 14.0349 7.96671 13.8651 7.80546C13.812 7.76246 11.3183 5.76301 11.3183 5.76301C11.1591 5.63401 11.1273 5.39752 11.2546 5.23735L12.2415 3.95706C13.1541 2.78534 14.7459 2.67784 16.0299 3.69906Z" />
            </svg>
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title)}>Smart writings.</h1>

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#fcfcfd",
                zIndex: 1,
              }}
            />
          </div>

          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.breakline}
          />

          <p className={cn("body-1")}>
            Explore the evolving world of tech. Discover the latest in web and
            app development.
          </p>
        </div>
      </section>
    </main>
  );
}
