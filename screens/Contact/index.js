import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import ContactForm from "./ContactForm";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <Layout>
      <Hero />
      <ContactForm />
      <FAQ title="contact-page" />
      <CTA />
    </Layout>
  );
}
