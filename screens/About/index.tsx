import Cta from "@/components/CTA";
import Layout from "@/components/Layout";
import Stack from "../Home/Stack";
import Background from "./Background";
import Hero from "./Hero";
import Section from "./Section";

const AboutPage = () => {
  return (
    <Layout>
      <Hero />
      <Section />
      <Background />
      <Stack />
      <Cta />
    </Layout>
  );
};

export default AboutPage;
