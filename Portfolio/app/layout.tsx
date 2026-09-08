import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import "../styles/globals.css";
export const metadata: Metadata = {
  title: {
    default: "Himanshu — Engineering Portfolio",
    template: "%s — Himanshu",
  },
  description:
    "An engineering portfolio at the intersection of software, cybersecurity, frontend design and systems thinking. Featuring the SOC-IQ case study foundation.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
