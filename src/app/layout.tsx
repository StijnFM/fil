import type { Metadata, Viewport } from "next";
import { Figtree, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "motion/react";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0c1a0d",
};

export const metadata: Metadata = {
  title: "Football is Life — Pass it on!",
  description:
    "Stichting Football is Life gebruikt voetbal als middel om communities te bouwen in Soweto, Mzuzu (Malawi). Draag bij aan het project.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${figtree.variable} ${barlow.variable} font-sans antialiased`}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
