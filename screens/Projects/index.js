import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import FAQ from "./FAQ";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Introduction from "@/components/Introduction";
import Companies from "./Companies";

export default function ProjectsPage() {
  return (
    <Layout>
      <Hero />
      <FAQ />
      <Process />
      <Testimonials />
      <Introduction />
      <Companies />
    </Layout>
  );
}
