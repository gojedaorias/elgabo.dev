import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Stack from "./Stack";
import LatestPosts from "./LatestPosts";
import CTA from "./CTA";
import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";

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
