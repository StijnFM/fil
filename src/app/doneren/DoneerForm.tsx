"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TILES = [
  { amount: 10, label: "1 jongere", impact: "1 jaar betere begeleiding" },
  { amount: 50, label: "Coachontwikkeling", impact: "Meerdere jongeren geholpen" },
  { amount: 100, label: "Trainingen & life skills", impact: "Direct verschil op het veld" },
];

export function DoneerForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const finalAmount =
    selectedAmount === "custom"
      ? parseFloat(customAmount || "0")
      : selectedAmount;

  const displayAmount =
    selectedAmount === "custom"
      ? customAmount
        ? `€ ${parseFloat(customAmount).toLocaleString("nl-NL")}`
        : "€ ..."
      : `€ ${selectedAmount}`;

  function selectAmount(a: number | "custom") {
    setSelectedAmount(a);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!finalAmount || finalAmount < 1) {
      setError("Voer een geldig bedrag in (minimaal € 1).");
      return;
    }
    if (!name.trim()) {
      setError("Vul je naam in.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Vul een geldig e-mailadres in.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          name: name.trim(),
          email: email.trim(),
          newsletter,
        }),
      });

      const data = await res.json();

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setError(data.error || "Er is iets misgegaan. Probeer het opnieuw.");
        setLoading(false);
      }
    } catch {
      setError("Geen verbinding. Controleer je internet en probeer opnieuw.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">

      {/* ── Amount tiles ── */}
      <div>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--stone)" }}
        >
          Kies een bedrag
        </p>

        <div className="space-y-2.5">
          {TILES.map((tile) => {
            const active = selectedAmount === tile.amount;
            return (
              <button
                key={tile.amount}
                type="button"
                onClick={() => selectAmount(tile.amount)}
                className="w-full rounded-2xl p-4 text-left transition-all duration-200 flex items-center justify-between group"
                style={{
                  background: active ? "var(--green)" : "var(--white)",
                  border: `2px solid ${active ? "var(--green)" : "var(--border)"}`,
                  boxShadow: active ? "var(--glow-green)" : "var(--shadow-sm)",
                }}
              >
                <div>
                  <p
                    className="font-bold text-xl leading-none mb-1"
                    style={{ color: active ? "rgba(246,241,232,0.95)" : "var(--charcoal)" }}
                  >
                    € {tile.amount}
                  </p>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: active ? "rgba(246,241,232,0.65)" : "var(--stone)" }}
                  >
                    {tile.label}
                    <span className="mx-1.5 opacity-40">—</span>
                    {tile.impact}
                  </p>
                </div>
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{
                    borderColor: active ? "rgba(246,241,232,0.50)" : "var(--border-strong)",
                    background: active ? "rgba(246,241,232,0.20)" : "transparent",
                  }}
                >
                  {active && (
                    <div className="w-2 h-2 rounded-full" style={{ background: "rgba(246,241,232,0.90)" }} />
                  )}
                </div>
              </button>
            );
          })}

          {/* Custom amount */}
          <button
            type="button"
            onClick={() => selectAmount("custom")}
            className="w-full rounded-2xl p-4 text-left transition-all duration-200 flex items-center justify-between"
            style={{
              background: selectedAmount === "custom" ? "var(--orange-pale)" : "var(--white)",
              border: `2px solid ${selectedAmount === "custom" ? "var(--orange)" : "var(--border)"}`,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div>
              <p
                className="font-bold text-base leading-none mb-0.5"
                style={{ color: selectedAmount === "custom" ? "var(--orange)" : "var(--charcoal)" }}
              >
                Eigen bedrag
              </p>
              <p className="text-xs" style={{ color: "var(--stone)" }}>
                Voor partners en sponsors
              </p>
            </div>
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
              style={{
                borderColor: selectedAmount === "custom" ? "var(--orange)" : "var(--border-strong)",
                background: selectedAmount === "custom" ? "rgba(201,107,44,0.15)" : "transparent",
              }}
            >
              {selectedAmount === "custom" && (
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--orange)" }} />
              )}
            </div>
          </button>
        </div>

        <AnimatePresence>
          {selectedAmount === "custom" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease }}
              className="mt-3 relative"
            >
              <span
                className="absolute left-5 top-1/2 -translate-y-1/2 font-bold pointer-events-none"
                style={{ color: "var(--stone)" }}
              >
                €
              </span>
              <input
                type="number"
                min="1"
                step="1"
                placeholder="Voer bedrag in"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-5 py-4 rounded-2xl text-xl font-bold"
                style={{
                  background: "var(--white)",
                  border: "2px solid var(--orange)",
                  color: "var(--charcoal)",
                  outline: "none",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Divider ── */}
      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* ── Personal info ── */}
      <div className="space-y-4">
        <div>
          <label
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--stone)" }}
          >
            Naam
          </label>
          <input
            type="text"
            required
            placeholder="Voornaam Achternaam"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl text-base transition-colors"
            style={{
              background: "var(--white)",
              border: "2px solid var(--border)",
              color: "var(--charcoal)",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>

        <div>
          <label
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--stone)" }}
          >
            E-mailadres
          </label>
          <input
            type="email"
            required
            placeholder="naam@voorbeeld.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl text-base transition-colors"
            style={{
              background: "var(--white)",
              border: "2px solid var(--border)",
              color: "var(--charcoal)",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
      </div>

      {/* ── Newsletter ── */}
      <label className="flex items-start gap-3 cursor-pointer">
        <button
          type="button"
          onClick={() => setNewsletter(!newsletter)}
          className="mt-0.5 w-5 h-5 rounded-md flex-shrink-0 border-2 flex items-center justify-center transition-all duration-200"
          style={{
            background: newsletter ? "var(--green)" : "transparent",
            borderColor: newsletter ? "var(--green)" : "var(--border-strong)",
          }}
          role="checkbox"
          aria-checked={newsletter}
        >
          {newsletter && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <p className="text-sm leading-relaxed select-none" style={{ color: "var(--stone)" }}>
          Houd me via een nieuwsbrief op de hoogte van de voortgang van het
          project
        </p>
      </label>

      {/* ── Error ── */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm px-4 py-3 rounded-xl"
            style={{
              background: "rgba(200,50,50,0.06)",
              color: "#b91c1c",
              border: "1px solid rgba(200,50,50,0.15)",
            }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full font-semibold text-base text-white transition-opacity hover:opacity-85 disabled:opacity-40"
        style={{
          background: "var(--orange)",
          boxShadow: "var(--glow-orange)",
        }}
      >
        {loading ? "Betaling aanmaken..." : `Doneer ${displayAmount}`}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--stone)", opacity: 0.65 }}>
        ANBI-erkende stichting · Fiscaal aftrekbaar · RSIN 868370873
        <br />
        Veilig betalen via iDEAL, creditcard of bankoverschrijving
      </p>
    </form>
  );
}
