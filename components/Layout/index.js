import React from "react";
import cn from "classnames";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <main className={cn("main")}>
      {children}
      <Footer />
    </main>
  );
}
