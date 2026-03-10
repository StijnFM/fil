"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SITE_URL = "https://footballislife.nl";
const DONATE_URL = `${SITE_URL}/doneren`;

function getShareText(firstName: string | null) {
  const name = firstName || "Ik";
  return `${name === "Ik" ? "Ik heb" : `${name} heeft`} gedoneerd aan Football is Life! Voetbal als ingang naar coaching, life skills en ontwikkeling voor jongeren in Malawi. Doe ook mee!`;
}

export function ShareButtons({
  firstName,
  amount,
}: {
  firstName: string | null;
  amount: number | null;
}) {
  const [copied, setCopied] = useState(false);
  const shareText = getShareText(firstName);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${DONATE_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: select text
    }
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      color: "#25D366",
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${DONATE_URL}`)}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      color: "#E1306C",
      href: null, // Instagram doesn't support direct share links, we'll copy instead
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      color: "#0A66C2",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(DONATE_URL)}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "X",
      color: "#000000",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(DONATE_URL)}`,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      color: "#1877F2",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(DONATE_URL)}&quote=${encodeURIComponent(shareText)}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "E-mail",
      color: "var(--green)",
      href: `mailto:?subject=${encodeURIComponent("Ik heb gedoneerd aan Football is Life!")}&body=${encodeURIComponent(`${shareText}\n\nDoneer ook: ${DONATE_URL}`)}`,
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease }}
      className="mt-10"
    >
      {/* Share preview card */}
      <div
        className="rounded-2xl overflow-hidden mx-auto max-w-sm"
        style={{
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* Card visual */}
        <div
          className="relative p-6 pb-8"
          style={{ background: "var(--green)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10 text-center">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Football is Life
            </p>
            <p
              className="font-display font-extrabold text-2xl leading-tight"
              style={{ color: "rgba(246,241,232,0.95)" }}
            >
              {firstName ? `${firstName} heeft gedoneerd!` : "Ik heb gedoneerd!"}
            </p>
            {amount && (
              <p
                className="mt-2 text-sm font-semibold"
                style={{ color: "rgba(246,241,232,0.50)" }}
              >
                &euro; {amount} voor jongeren in Soweto
              </p>
            )}
            <p
              className="mt-3 text-xs leading-relaxed max-w-xs mx-auto"
              style={{ color: "rgba(246,241,232,0.40)" }}
            >
              Voetbal als ingang naar coaching, life skills en ontwikkeling voor jongeren in Malawi.
            </p>
          </div>
        </div>
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ background: "var(--white)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "var(--green)" }}
            >
              <span className="text-xs" style={{ color: "rgba(246,241,232,0.80)" }}>⚽</span>
            </div>
            <span className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>
              footballislife.nl
            </span>
          </div>
          <span className="text-xs" style={{ color: "var(--stone)" }}>
            Doneer ook →
          </span>
        </div>
      </div>

      {/* Share label */}
      <p
        className="mt-6 text-xs font-semibold tracking-wider uppercase"
        style={{ color: "var(--stone)" }}
      >
        Deel je donatie
      </p>

      {/* Share buttons */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href || "#"}
            onClick={
              link.name === "Instagram"
                ? (e: React.MouseEvent) => {
                    e.preventDefault();
                    handleCopy();
                  }
                : undefined
            }
            target={link.href && !link.href.startsWith("mailto") ? "_blank" : undefined}
            rel={link.href && !link.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-shadow hover:shadow-md"
            style={{
              background: link.color,
              color: "white",
            }}
            title={link.name === "Instagram" ? "Kopieer tekst voor Instagram" : `Deel op ${link.name}`}
          >
            {link.icon}
            <span className="text-xs">
              {link.name === "Instagram" ? (copied ? "Gekopieerd!" : "Kopieer") : link.name}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        className="mt-3 text-xs font-semibold hover:opacity-70 transition-opacity cursor-pointer"
        style={{ color: "var(--green)" }}
      >
        {copied ? "Link gekopieerd!" : "Of kopieer de link"}
      </button>
    </motion.div>
  );
}
