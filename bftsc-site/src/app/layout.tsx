// src/app/layout.tsx
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
        <header
          style={{
            background: "#0F3B75", // BFTSC blue
            borderBottom: "2px solid #F5A300", // orange accent
          }}
        >
          <div
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <img
                src="/bftsc/bftsc-logo.jpg"
                alt="BFTSC"
                style={{ height: "38px", width: "auto", borderRadius: "6px" }}
              />
              <strong>BFTSC Algeria</strong>
            </Link>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: "12px" }}>
              <Link
                href="/karta"
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: "#F5A300", // orange CTA
                  color: "#1b1400",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Karta Innovation Program
              </Link>
              <Link
                href="/partners"
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "2px solid white",
                  color: "white",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Partners
              </Link>
              <Link
                href="/contact"
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "2px solid white",
                  color: "white",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            background: "#0B2D5A", // darker blue
            borderTop: "2px solid #F5A300", // orange accent
            color: "white",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/bftsc/bftsc-logo.jpg"
                alt="BFTSC"
                style={{ height: "24px", width: "auto", borderRadius: "4px" }}
              />
              <span>© {new Date().getFullYear()} BFTSC Algeria</span>
            </div>
            <div>
              <a
                href="mailto:contact@bftsc.dz"
                style={{
                  color: "#F5A300",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                contact@bftsc.dz
              </a>
            </div>
          </div>
        </footer>

        {/* ✅ Add Vercel Analytics here */}
        <Analytics />
      </body>
    </html>
  );
}
