"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { Project } from "@/components/Cards";
import Link from "next/link";
import { Bag } from "@/components/Icons";
import { projects } from "@/mocks/projects";

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

            <div className={styles.circular_container}>
              <svg className={styles.rotated_text} viewBox="0 0 200 200">
                <defs>
                  <path
                    id="circle"
                    d={`
                    M 100, 100
                    m -75, 0
                    a 75,75 0 1,0 150,0
                    a 75,75 0 1,0 -150,0
                  `}
                  />
                </defs>
                <text width="400" textLength={Math.PI * 150}>
                  <textPath
                    alignmentBaseline="top"
                    xlinkHref="#circle"
                    className={cn("caption", styles.text)}
                    textLength={Math.PI * 150}
                  >
                    Explore more ・ Explore more ・ Explore more ・
                  </textPath>
                </text>
              </svg>

              <svg
                className={styles.vector}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66006 23.9791L0.102417 21.4214L17.6406 3.88327H1.92931V0.229492H23.852V22.1522H20.1982V6.44091L2.66006 23.9791Z"
                  fill="#080708"
                />
              </svg>
            </div>
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
