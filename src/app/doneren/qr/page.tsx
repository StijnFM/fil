"use client";

import { motion } from "motion/react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function QRPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ background: "var(--ivory)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-center max-w-sm mx-auto"
      >
        {/* Logo / Brand */}
        <p
          className="font-display font-extrabold text-2xl tracking-tight mb-1"
          style={{ color: "var(--green)" }}
        >
          Football is Life
        </p>
        <p
          className="text-sm italic mb-8"
          style={{ color: "var(--orange)", opacity: 0.7 }}
        >
          Pass it on.
        </p>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="rounded-3xl p-6 mx-auto inline-block"
          style={{
            background: "var(--white)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* SVG QR Code pointing to /doneren */}
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Background */}
            <rect width="240" height="240" rx="8" fill="white" />

            {/* QR Pattern - simplified visual representation */}
            {/* Top-left finder pattern */}
            <rect x="16" y="16" width="56" height="56" rx="4" fill="var(--green)" />
            <rect x="24" y="24" width="40" height="40" rx="2" fill="white" />
            <rect x="32" y="32" width="24" height="24" rx="2" fill="var(--green)" />

            {/* Top-right finder pattern */}
            <rect x="168" y="16" width="56" height="56" rx="4" fill="var(--green)" />
            <rect x="176" y="24" width="40" height="40" rx="2" fill="white" />
            <rect x="184" y="32" width="24" height="24" rx="2" fill="var(--green)" />

            {/* Bottom-left finder pattern */}
            <rect x="16" y="168" width="56" height="56" rx="4" fill="var(--green)" />
            <rect x="24" y="176" width="40" height="40" rx="2" fill="white" />
            <rect x="32" y="184" width="24" height="24" rx="2" fill="var(--green)" />

            {/* Data modules - decorative grid pattern */}
            {[
              [88, 16], [104, 16], [120, 16], [136, 16], [152, 16],
              [88, 32], [120, 32], [152, 32],
              [88, 48], [104, 48], [120, 48], [136, 48], [152, 48],
              [16, 88], [32, 88], [48, 88], [88, 88], [104, 88], [136, 88], [168, 88], [184, 88], [200, 88], [216, 88],
              [16, 104], [48, 104], [88, 104], [120, 104], [136, 104], [152, 104], [168, 104], [200, 104],
              [16, 120], [32, 120], [48, 120], [88, 120], [104, 120], [120, 120], [152, 120], [184, 120], [216, 120],
              [16, 136], [48, 136], [88, 136], [120, 136], [136, 136], [168, 136], [200, 136], [216, 136],
              [16, 152], [32, 152], [48, 152], [88, 152], [104, 152], [136, 152], [152, 152], [184, 152], [216, 152],
              [88, 168], [104, 168], [136, 168], [152, 168], [184, 168], [216, 168],
              [88, 184], [120, 184], [136, 184], [168, 184], [200, 184],
              [88, 200], [104, 200], [120, 200], [152, 200], [168, 200], [184, 200], [216, 200],
              [88, 216], [136, 216], [152, 216], [200, 216], [216, 216],
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="12" height="12" rx="2" fill="var(--green)" />
            ))}

            {/* Center accent - football icon */}
            <circle cx="120" cy="120" r="16" fill="var(--orange)" />
            <circle cx="120" cy="120" r="6" fill="white" opacity="0.9" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
        >
          <p
            className="mt-6 font-display font-bold text-lg"
            style={{ color: "var(--green)" }}
          >
            Scan & Doneer
          </p>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--stone)" }}
          >
            Scan de QR-code met je telefoon om direct te doneren
            aan Football is Life.
          </p>

          <div
            className="mt-5 inline-block px-4 py-2 rounded-full text-xs font-semibold"
            style={{
              background: "var(--green-pale)",
              color: "var(--green)",
              border: "1px solid rgba(33,77,58,0.12)",
            }}
          >
            ANBI-erkend · Fiscaal aftrekbaar
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/doneren"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white btn-primary"
              style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
            >
              Direct doneren →
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold hover:opacity-70 transition-opacity"
              style={{ color: "var(--stone)" }}
            >
              ← Terug naar home
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
