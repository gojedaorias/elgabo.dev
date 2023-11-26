import React from "react";
import Content from "./Content";
import Layout from "@/components/Layout";

export default function PostPage({ contentHtml, frontmatter }) {
  return (
    <Layout title="Post">
      <Content contentHtml={contentHtml} frontmatter={frontmatter} />
    </Layout>
  );
}
