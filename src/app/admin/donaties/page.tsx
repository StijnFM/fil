"use client";

import { useEffect, useState } from "react";

interface Donation {
  id: string;
  amount: string;
  currency: string;
  status: "paid" | "pending" | "failed" | "expired";
  name: string | null;
  email: string | null;
  newsletter: boolean;
  paidAt: string | null;
  createdAt: string;
}

const statusConfig: Record<
  Donation["status"],
  { label: string; bg: string; color: string }
> = {
  paid: { label: "Betaald", bg: "var(--green-pale)", color: "var(--green)" },
  pending: {
    label: "In afwachting",
    bg: "var(--orange-pale)",
    color: "var(--orange)",
  },
  failed: { label: "Mislukt", bg: "#fef2f2", color: "#b91c1c" },
  expired: {
    label: "Verlopen",
    bg: "var(--blue-grey-pale)",
    color: "var(--stone)",
  },
};

export default function DonatiesPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/donaties")
      .then((res) => {
        if (!res.ok) throw new Error("Niet geautoriseerd");
        return res.json();
      })
      .then((data: Donation[]) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const paid = donations.filter((d) => d.status === "paid");
  const totalDonated = paid.reduce(
    (sum, d) => sum + parseFloat(d.amount || "0"),
    0,
  );
  const avgAmount =
    paid.length > 0 ? totalDonated / paid.length : 0;

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <div>
      <div className="mb-8">
        <h1
          className="font-display font-bold text-2xl"
          style={{ color: "var(--charcoal)" }}
        >
          Donaties
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
          Overzicht van alle donaties
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="card p-5">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--stone)" }}>
            Totaal gedoneerd
          </p>
          <p
            className="font-display font-bold text-xl"
            style={{ color: "var(--green)" }}
          >
            {formatEuro(totalDonated)}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--stone)" }}>
            Aantal donaties
          </p>
          <p
            className="font-display font-bold text-xl"
            style={{ color: "var(--green)" }}
          >
            {donations.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--stone)" }}>
            Gemiddeld bedrag
          </p>
          <p
            className="font-display font-bold text-xl"
            style={{ color: "var(--orange)" }}
          >
            {formatEuro(avgAmount)}
          </p>
        </div>
      </div>

      {/* Table */}
      {donations.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Datum
                  </th>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Naam
                  </th>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Bedrag
                  </th>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {donations.map((d) => {
                  const cfg = statusConfig[d.status];
                  return (
                    <tr
                      key={d.id}
                      style={{ borderBottom: "1px solid var(--border)" }}
                      className="last:border-0"
                    >
                      <td
                        className="px-5 py-3.5"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {formatDate(d.createdAt)}
                      </td>
                      <td
                        className="px-5 py-3.5"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {d.name || "-"}
                      </td>
                      <td
                        className="px-5 py-3.5 font-medium"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {formatEuro(parseFloat(d.amount || "0"))}
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            background: cfg.bg,
                            color: cfg.color,
                          }}
                        >
                          {cfg.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div>
      <div className="mb-8">
        <div
          className="h-7 w-32 rounded-lg animate-pulse"
          style={{ background: "var(--sand-light)" }}
        />
        <div
          className="h-4 w-48 rounded-lg mt-2 animate-pulse"
          style={{ background: "var(--sand-light)" }}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="card p-5 animate-pulse">
            <div
              className="h-4 w-24 rounded mb-2"
              style={{ background: "var(--sand-light)" }}
            />
            <div
              className="h-6 w-20 rounded"
              style={{ background: "var(--sand-light)" }}
            />
          </div>
        ))}
      </div>
      <div className="card p-6 animate-pulse">
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-4 rounded"
              style={{ background: "var(--sand-light)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="card p-8 text-center">
      <p className="text-sm font-medium" style={{ color: "#b91c1c" }}>
        {message}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="card p-12 text-center">
      <div
        className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
        style={{ background: "var(--sand-light)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s-8-5.5-8-10.7A4.5 4.5 0 0 1 12 6.3a4.5 4.5 0 0 1 8 3C20 15.5 12 21 12 21z"
            stroke="var(--stone)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="font-medium" style={{ color: "var(--charcoal)" }}>
        Nog geen donaties
      </p>
      <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
        Donaties verschijnen hier zodra ze binnenkomen
      </p>
    </div>
  );
}

function formatEuro(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
