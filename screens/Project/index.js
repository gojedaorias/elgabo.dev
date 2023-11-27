import React from "react";
import Layout from "@/components/Layout";
import Content from "./Content";

export default function ProjectPage({ project }) {
  return (
    <Layout title="project">
      <Content project={project} />
    </Layout>
  );
}
