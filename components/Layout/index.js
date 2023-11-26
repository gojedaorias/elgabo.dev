import React from "react";
import cn from "classnames";
import Footer from "../Footer";
import TabNavigator from "../TabNavigator";
import { socials } from "@/mocks/socials";
import { links } from "@/mocks/links";

export default function Layout({ children, title }) {
  return (
    <main className={cn("main")}>
      {children}

      {title !== "Post" && <TabNavigator links={links} socials={socials} />}
      <Footer />
    </main>
  );
}
