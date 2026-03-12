"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Er ging iets mis.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Check je inbox om te bevestigen.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Er ging iets mis. Probeer het later opnieuw.");
    }
  }

  return (
    <div>
      {status === "success" ? (
        <p className="text-sm font-medium" style={{ color: "#7FBF8E" }}>
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Je e-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="flex-1 px-4 py-3 rounded-xl text-sm transition-colors duration-200 outline-none disabled:opacity-50"
            style={{
              background: "var(--white)",
              color: "var(--charcoal)",
              border: "1px solid var(--border)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--green)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full font-semibold text-sm text-white transition-opacity duration-200 hover:opacity-85 disabled:opacity-50 whitespace-nowrap cursor-pointer"
            style={{ background: "var(--orange)" }}
          >
            {status === "loading" ? "Bezig..." : "Aanmelden"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-sm mt-2" style={{ color: "#D94F4F" }}>
          {message}
        </p>
      )}
    </div>
  );
}
