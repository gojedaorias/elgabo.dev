import React from "react";
import Hero from "./Hero";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
