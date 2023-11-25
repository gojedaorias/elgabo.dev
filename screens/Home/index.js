import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Stack from "./Stack";
import Introduction from "./Introduction";
import LatestPosts from "./LatestPosts";
import CTA from "./CTA";
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Stack />
      <Introduction />
      <LatestPosts />
      <CTA />
    </Layout>
  );
}
