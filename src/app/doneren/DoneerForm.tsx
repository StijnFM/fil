"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PRESET_AMOUNTS = [20, 50, 75, 100];
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* ── Amount selection ── */}
      <div>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "rgba(254,249,240,0.4)" }}
        >
          Kies een bedrag
        </p>

        <div className="grid grid-cols-2 gap-3">
          {PRESET_AMOUNTS.map((a) => {
            const active = selectedAmount === a;
            return (
              <button
                key={a}
                type="button"
                onClick={() => selectAmount(a)}
                className="py-5 rounded-2xl border-2 font-display font-black transition-all duration-200"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  background: active ? "var(--amber)" : "var(--surface)",
                  borderColor: active ? "var(--amber)" : "var(--glass-border)",
                  color: active ? "var(--pitch-dark)" : "var(--foreground)",
                  boxShadow: active ? "var(--glow-amber)" : "none",
                }}
              >
                € {a}
              </button>
            );
          })}
        </div>

        {/* Custom amount toggle */}
        <button
          type="button"
          onClick={() => selectAmount("custom")}
          className="mt-3 w-full py-3.5 rounded-2xl text-sm font-semibold border-2 transition-all duration-200"
          style={{
            borderColor:
              selectedAmount === "custom" ? "var(--amber)" : "var(--glass-border)",
            background:
              selectedAmount === "custom"
                ? "rgba(245,166,35,0.08)"
                : "transparent",
            color:
              selectedAmount === "custom"
                ? "var(--amber)"
                : "rgba(254,249,240,0.45)",
          }}
        >
          Eigen bedrag
        </button>

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
                className="absolute left-5 top-1/2 -translate-y-1/2 text-xl font-bold pointer-events-none"
                style={{ color: "rgba(254,249,240,0.4)" }}
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
                className="w-full pl-10 pr-5 py-4 rounded-2xl text-xl font-bold"
                style={{
                  background: "var(--surface)",
                  border: "2px solid var(--amber)",
                  color: "var(--foreground)",
                  outline: "none",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Divider ── */}
      <div
        className="border-t"
        style={{ borderColor: "var(--glass-border)" }}
      />

      {/* ── Personal info ── */}
      <div className="space-y-4">
        <div>
          <label
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "rgba(254,249,240,0.4)" }}
          >
            Naam
          </label>
          <input
            type="text"
            required
            placeholder="Voornaam Achternaam"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl text-base"
            style={{
              background: "var(--surface)",
              border: "2px solid var(--glass-border)",
              color: "var(--foreground)",
              outline: "none",
              transition: "border-color 0.15s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--amber)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
          />
        </div>

        <div>
          <label
            className="block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "rgba(254,249,240,0.4)" }}
          >
            E-mailadres
          </label>
          <input
            type="email"
            required
            placeholder="naam@voorbeeld.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl text-base"
            style={{
              background: "var(--surface)",
              border: "2px solid var(--glass-border)",
              color: "var(--foreground)",
              outline: "none",
              transition: "border-color 0.15s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--amber)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
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
            background: newsletter ? "var(--amber)" : "transparent",
            borderColor: newsletter ? "var(--amber)" : "var(--glass-border)",
          }}
          role="checkbox"
          aria-checked={newsletter}
        >
          {newsletter && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="#0c1a0d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <p
          className="text-sm leading-relaxed select-none"
          style={{ color: "rgba(254,249,240,0.5)" }}
        >
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
              background: "rgba(220,50,50,0.1)",
              color: "#f87171",
              border: "1px solid rgba(220,50,50,0.2)",
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
        className="w-full py-5 rounded-full font-bold text-xl text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        style={{
          background: "var(--primary)",
          boxShadow: "var(--glow-orange)",
        }}
      >
        {loading ? "Betaling aanmaken..." : `Doneer ${displayAmount}`}
      </button>

      <p
        className="text-xs text-center"
        style={{ color: "rgba(254,249,240,0.22)" }}
      >
        ANBI-erkende stichting · Fiscaal aftrekbaar · RSIN 868370873
        <br />
        Veilig betalen via iDEAL, creditcard of bankoverschrijving
      </p>
    </form>
  );
}
