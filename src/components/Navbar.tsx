"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold tracking-tight text-base transition-opacity hover:opacity-70 duration-200"
          style={{ color: "var(--charcoal)", letterSpacing: "-0.01em" }}
        >
          Football is Life
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <Link
            href="/over-ons"
            className="text-sm font-medium hidden sm:block hover:opacity-70 transition-opacity duration-200"
            style={{ color: "var(--stone)" }}
          >
            Over ons
          </Link>
          <Link
            href="/project"
            className="text-sm font-medium hidden sm:block hover:opacity-70 transition-opacity duration-200"
            style={{ color: "var(--stone)" }}
          >
            Project
          </Link>
          <Link
            href="/doneren"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-85 hidden sm:block"
            style={{ background: "var(--green)" }}
          >
            Doneren
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ color: "var(--charcoal)" }}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M3 5H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M3 10H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M3 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t sm:hidden"
            style={{
              borderColor: "var(--border)",
              background: "var(--nav-bg)",
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {[
                { href: "/over-ons", label: "Over ons" },
                { href: "/project", label: "Project Soweto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium py-3 border-b transition-opacity hover:opacity-70"
                  style={{
                    color: "var(--charcoal)",
                    borderColor: "var(--border)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/doneren"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-6 py-3.5 rounded-full font-semibold text-white transition-opacity hover:opacity-85"
                style={{ background: "var(--orange)" }}
              >
                Doneer nu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
