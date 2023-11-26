import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <Layout>
      <Hero />
      <ContactForm />
      <CTA />
    </Layout>
  );
}
