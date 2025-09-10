"use client";

import { Product } from "@/components/Cards";
import CircularAnimation from "@/components/CircularAnimation";
import { products } from "@/mocks/products";
import cn from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <main className={cn("section-hero")}>
      <section className={cn("container")}>
        <div className={styles.hero_content}>
          <div className={styles.author}>
            <div className={styles.avatar_container}>
              <Image src="/logo-gabo.svg" alt="avatar" width={60} height={60} />
            </div>
            <div>
              <Image
                src="/logotipo-gabo.svg"
                alt="avatar"
                width={100}
                height={50}
              />
              <p className={cn("caption", styles.profession)}>
                Desarrollador Senior Front-End
              </p>
            </div>
          </div>

          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <h1 className={cn("hero", styles.title, styles.typing_effect)}>
              I design + code apps & websites.
            </h1>

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "var(--n8)",
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
                Bringing beauty to the web, one line of code at a time.
              </p>

              <motion.a
                href="https://ui8.net/users/angel-uriostegui?status=6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className={cn("button", styles.button)}
              >
                Get template
              </motion.a>
            </div>

            <CircularAnimation />
          </div>
        </div>

        <div className={styles.products_container}>
          <div className={styles.products}>
            {products.slice(0, 4).map((product) => (
              <Product key={product.title} product={product} />
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
};

export default Hero;
