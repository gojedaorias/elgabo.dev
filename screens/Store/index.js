import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";

export default function StorePage() {
  return (
    <Layout>
      <Hero />
      <CTA />
    </Layout>
  );
}
