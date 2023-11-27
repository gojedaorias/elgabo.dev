import React from "react";
import Layout from "@/components/Layout";
import Content from "./Content";

export default function ProductPage({ product }) {
  return (
    <Layout>
      <Content product={product} />
    </Layout>
  );
}
