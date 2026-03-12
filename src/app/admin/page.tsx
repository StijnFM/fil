"use client";

import { useEffect, useState } from "react";

interface DashboardStats {
  donations: { total: number; count: number; loading: boolean; error: boolean };
  subscribers: { count: number; loading: boolean; error: boolean };
  instagram: { count: number; loading: boolean; error: boolean };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    donations: { total: 0, count: 0, loading: true, error: false },
    subscribers: { count: 0, loading: true, error: false },
    instagram: { count: 0, loading: true, error: false },
  });

  useEffect(() => {
    // Fetch donations
    fetch("/api/admin/donaties")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data: Array<{ amount: string; status: string }>) => {
        const paid = data.filter((d) => d.status === "paid");
        const total = paid.reduce(
          (sum, d) => sum + parseFloat(d.amount || "0"),
          0,
        );
        setStats((s) => ({
          ...s,
          donations: { total, count: data.length, loading: false, error: false },
        }));
      })
      .catch(() => {
        setStats((s) => ({
          ...s,
          donations: { total: 0, count: 0, loading: false, error: true },
        }));
      });

    // Fetch subscribers
    fetch("/api/admin/newsletter")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data: { subscribers: Array<{ status: string }> }) => {
        const active = data.subscribers.filter((s) => s.status === "active");
        setStats((s) => ({
          ...s,
          subscribers: { count: active.length, loading: false, error: false },
        }));
      })
      .catch(() => {
        setStats((s) => ({
          ...s,
          subscribers: { count: 0, loading: false, error: true },
        }));
      });

    // Fetch instagram posts
    fetch("/api/admin/instagram")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data: Array<unknown>) => {
        setStats((s) => ({
          ...s,
          instagram: { count: data.length, loading: false, error: false },
        }));
      })
      .catch(() => {
        setStats((s) => ({
          ...s,
          instagram: { count: 0, loading: false, error: true },
        }));
      });
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1
          className="font-display font-bold text-2xl"
          style={{ color: "var(--charcoal)" }}
        >
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
          Overzicht van Football is Life
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Donations card */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--green-pale)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 17.5s-7-4.7-7-9.2A3.8 3.8 0 0 1 10 5.4a3.8 3.8 0 0 1 7 2.9c0 4.5-7 9.2-7 9.2z"
                  stroke="var(--green)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--stone)" }}
            >
              Donaties
            </span>
          </div>
          {stats.donations.loading ? (
            <Skeleton />
          ) : stats.donations.error ? (
            <ErrorText />
          ) : (
            <>
              <p
                className="font-display font-bold text-2xl"
                style={{ color: "var(--green)" }}
              >
                {formatEuro(stats.donations.total)}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
                {stats.donations.count} donatie{stats.donations.count !== 1 ? "s" : ""}
              </p>
            </>
          )}
        </div>

        {/* Subscribers card */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--orange-pale)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2.5"
                  y="4"
                  width="15"
                  height="12"
                  rx="2"
                  stroke="var(--orange)"
                  strokeWidth="1.5"
                />
                <path
                  d="M2.5 7l7.5 4.5L17.5 7"
                  stroke="var(--orange)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--stone)" }}
            >
              Nieuwsbrief
            </span>
          </div>
          {stats.subscribers.loading ? (
            <Skeleton />
          ) : stats.subscribers.error ? (
            <ErrorText />
          ) : (
            <>
              <p
                className="font-display font-bold text-2xl"
                style={{ color: "var(--orange)" }}
              >
                {stats.subscribers.count}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
                actieve abonnee{stats.subscribers.count !== 1 ? "s" : ""}
              </p>
            </>
          )}
        </div>

        {/* Instagram card */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--green-pale)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2.5"
                  y="2.5"
                  width="15"
                  height="15"
                  rx="4"
                  stroke="var(--green)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="3.25"
                  stroke="var(--green)"
                  strokeWidth="1.5"
                />
                <circle cx="14.75" cy="5.25" r="1" fill="var(--green)" />
              </svg>
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--stone)" }}
            >
              Instagram
            </span>
          </div>
          {stats.instagram.loading ? (
            <Skeleton />
          ) : stats.instagram.error ? (
            <ErrorText />
          ) : (
            <>
              <p
                className="font-display font-bold text-2xl"
                style={{ color: "var(--green)" }}
              >
                {stats.instagram.count}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
                post{stats.instagram.count !== 1 ? "s" : ""} opgeslagen
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="space-y-2 animate-pulse">
      <div
        className="h-7 w-24 rounded-lg"
        style={{ background: "var(--sand-light)" }}
      />
      <div
        className="h-4 w-16 rounded-lg"
        style={{ background: "var(--sand-light)" }}
      />
    </div>
  );
}

function ErrorText() {
  return (
    <p className="text-sm" style={{ color: "var(--stone)" }}>
      Kon gegevens niet laden
    </p>
  );
}

function formatEuro(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
