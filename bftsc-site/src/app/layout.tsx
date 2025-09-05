import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BFTSC Algeria",
  description: "Smart payments built in Algeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* HEADER */}
        <header className="bftsc-header">
          <div className="bftsc-container">
            {/* Logo */}
            <Link href="/" className="bftsc-logo">
              <img
                src="/bftsc/bftsc-logo.jpg"
                alt="BFTSC"
                className="bftsc-logo-img"
              />
              <strong>BFTSC Algeria</strong>
            </Link>

            {/* Navigation */}
            <nav className="bftsc-nav">
              <Link href="/karta" className="btn-primary">
                Karta Innovation Program
              </Link>
              <Link href="/partners" className="btn-outline">
                Partners
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bftsc-footer">
          <div className="bftsc-container footer-content">
            <div className="footer-left">
              <img
                src="/bftsc/bftsc-logo.jpg"
                alt="BFTSC"
                className="footer-logo"
              />
              <span>© {new Date().getFullYear()} BFTSC Algeria</span>
            </div>
            <div>
              <a href="mailto:contact@bftsc.dz" className="footer-mail">
                contact@bftsc.dz
              </a>
            </div>
          </div>
        </footer>

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
