import React from "react";
import Hero from "./Hero";
import styles from "./home.module.css";
import Services from "./Services";
import Stack from "./Stack";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Stack />
    </main>
  );
}
