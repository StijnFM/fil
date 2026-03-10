"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/over-ons", label: "Over ons" },
  { href: "/project", label: "Project" },
  { href: "/opleiding", label: "Opleiding" },
  { href: "/partners", label: "Partners" },
  { href: "/malawi", label: "Malawi" },
  { href: "/meedoen", label: "Meedoen" },
  { href: "/transparantie", label: "Transparantie" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close "more" dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const primaryLinks = navLinks.slice(0, 3);
  const moreLinks = navLinks.slice(3);

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
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hidden md:block hover:opacity-70 transition-opacity duration-200"
              style={{ color: "var(--stone)" }}
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown — desktop */}
          <div ref={moreRef} className="relative hidden md:block">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="text-sm font-medium hover:opacity-70 transition-opacity duration-200 flex items-center gap-1"
              style={{ color: "var(--stone)" }}
            >
              Meer
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-200"
                style={{ transform: moreOpen ? "rotate(180deg)" : "rotate(0)" }}
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden border"
                  style={{
                    background: "var(--white)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-md)",
                    minWidth: "180px",
                  }}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium hover:opacity-70 transition-opacity border-b last:border-0"
                      style={{ color: "var(--charcoal)", borderColor: "var(--border)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/doneren"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white btn-primary hidden md:block"
            style={{ background: "var(--green)" }}
          >
            Doneren
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
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
            className="overflow-hidden border-t md:hidden"
            style={{
              borderColor: "var(--border)",
              background: "var(--nav-bg)",
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
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
                className="mt-4 text-center px-6 py-3.5 rounded-full font-semibold text-white btn-primary"
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
