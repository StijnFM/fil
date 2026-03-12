"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Inloggen mislukt");
        return;
      }

      router.refresh();
    } catch {
      setError("Verbinding mislukt");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--ivory)" }}
    >
      <div className="card w-full max-w-sm p-8">
        <div className="text-center mb-8">
          <h1
            className="font-display font-bold text-2xl mb-2"
            style={{ color: "var(--green)" }}
          >
            Football is Life
          </h1>
          <p
            className="text-sm"
            style={{ color: "var(--stone)" }}
          >
            Admin inloggen
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--charcoal)" }}
            >
              Wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
              style={{
                background: "var(--sand-light)",
                border: "1px solid var(--border)",
                color: "var(--charcoal)",
              }}
              placeholder="Voer wachtwoord in"
            />
          </div>

          {error && (
            <p className="text-sm font-medium" style={{ color: "#b91c1c" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-60"
            style={{ background: "var(--green)" }}
          >
            {loading ? "Bezig..." : "Inloggen"}
          </button>
        </form>
      </div>
    </div>
  );
}
