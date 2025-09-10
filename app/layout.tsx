import cn from "classnames";
import type { Metadata } from "next";
import { DM_Sans, Inter, Poppins } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import { links } from "@/mocks/links";
import { socials } from "@/mocks/socials";
import "../styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Krafty Personal Template",
  description: "Personal template for creators.",
  keywords: ["portfolio", "personal", "template", "next.js", "react"],
  authors: [{ name: "Krafty" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(inter.variable, poppins.variable, dmSans.variable)}>
        <main
          style={{
            display: "flex",
          }}
        >
          <Sidebar
            links={links}
            socials={socials.map((social) => ({
              ...social,
              title: social.url,
            }))}
          />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
