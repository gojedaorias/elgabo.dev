import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import FAQ from "./FAQ";
import Process from "./Process";

export default function ProjectsPage() {
  return (
    <Layout>
      <Hero />
      <FAQ />
      <Process />
    </Layout>
  );
}
