import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import Posts from "./Posts";

export default function BlogPage() {
  return (
    <Layout>
      <Hero />
      <Posts />
      <CTA />
    </Layout>
  );
}
