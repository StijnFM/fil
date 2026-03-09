import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "motion/react";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#214D3A",
};

export const metadata: Metadata = {
  title: "Football is Life — Coaching voor jongeren in Malawi",
  description:
    "Stichting Football is Life gebruikt voetbal als ingang naar coaching, life skills en toekomstperspectief voor jongeren in Mzuzu, Malawi. ANBI-erkend.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}
      >
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
