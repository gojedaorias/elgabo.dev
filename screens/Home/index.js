import React from "react";
import Hero from "./Hero";
import styles from "./home.module.css";
import Services from "./Services";
import Stack from "./Stack";
import Introduction from "./Introduction";
import LatestPosts from "./LatestPosts";
import CTA from "./CTA";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Stack />
      <Introduction />
      <LatestPosts />
      <CTA />
    </main>
  );
}
