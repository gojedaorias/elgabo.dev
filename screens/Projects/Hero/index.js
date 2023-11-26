"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Project } from "@/components/Cards";
import Link from "next/link";
import { Bag } from "@/components/Icons";
import { projects } from "@/mocks/projects";
import CircularAnimation from "@/components/CircularAnimation";

export default function Hero() {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.icon_container}>
            <Bag />
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title)}>Handcrafted ideas.</h1>

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

          <div className={styles.bottom_content}>
            <div>
              <p className={cn("body-1")}>
                Crafting tailored web and app solutions that bring client ideas
                to life.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className={cn("button", styles.button)}
              >
                Get template
              </motion.button>
            </div>

            <CircularAnimation />
          </div>
        </div>

        <div className={styles.projects_container}>
          <div className={styles.projects}>
            {projects.map((product, index) => (
              <Project
                key={product.title}
                product={product}
                isNew={index === 0}
              />
            ))}
          </div>

          <Link href="/store">
            <button className={cn("button-stroke", styles.secondary_button)}>
              See all
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
