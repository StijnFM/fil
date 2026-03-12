"use client";

import { useEffect, useState } from "react";

interface Subscriber {
  id: string;
  email: string;
  firstName: string | null;
  status: "pending" | "active" | "unsubscribed";
  subscribedAt: string;
}

interface SentNewsletter {
  id: string;
  subject: string;
  sentAt: string;
  recipientCount: number;
}

export default function NieuwsbriefPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [sent, setSent] = useState<SentNewsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Send form state
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [confirmSend, setConfirmSend] = useState(false);

  useEffect(() => {
    fetch("/api/admin/newsletter")
      .then((res) => {
        if (!res.ok) throw new Error("Niet geautoriseerd");
        return res.json();
      })
      .then((data: { subscribers: Subscriber[]; sent: SentNewsletter[] }) => {
        setSubscribers(data.subscribers);
        setSent(data.sent);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const active = subscribers.filter((s) => s.status === "active");
  const pending = subscribers.filter((s) => s.status === "pending");
  const unsubscribed = subscribers.filter((s) => s.status === "unsubscribed");

  async function handleSend() {
    if (!confirmSend) {
      setConfirmSend(true);
      return;
    }

    setSending(true);
    setSendResult(null);
    setConfirmSend(false);

    try {
      const res = await fetch("/api/admin/newsletter/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, body }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSendResult({ type: "error", message: data.error || "Verzenden mislukt" });
        return;
      }

      setSendResult({
        type: "success",
        message: `Nieuwsbrief verzonden naar ${data.sent} abonnee${data.sent !== 1 ? "s" : ""}`,
      });
      setSubject("");
      setBody("");

      // Refresh sent list
      const refreshRes = await fetch("/api/admin/newsletter");
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        setSent(refreshData.sent);
      }
    } catch {
      setSendResult({ type: "error", message: "Verbinding mislukt" });
    } finally {
      setSending(false);
    }
  }

  if (loading) return <LoadingState />;
  if (error) {
    return (
      <div className="card p-8 text-center">
        <p className="text-sm font-medium" style={{ color: "#b91c1c" }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1
          className="font-display font-bold text-2xl"
          style={{ color: "var(--charcoal)" }}
        >
          Nieuwsbrief
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
          Abonnees beheren en nieuwsbrieven versturen
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="card p-5">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--stone)" }}>
            Actief
          </p>
          <p
            className="font-display font-bold text-xl"
            style={{ color: "var(--green)" }}
          >
            {active.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--stone)" }}>
            In afwachting
          </p>
          <p
            className="font-display font-bold text-xl"
            style={{ color: "var(--orange)" }}
          >
            {pending.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium mb-1" style={{ color: "var(--stone)" }}>
            Uitgeschreven
          </p>
          <p
            className="font-display font-bold text-xl"
            style={{ color: "var(--stone)" }}
          >
            {unsubscribed.length}
          </p>
        </div>
      </div>

      {/* Send form */}
      <div className="card p-6 mb-8">
        <h2
          className="font-display font-semibold text-lg mb-4"
          style={{ color: "var(--charcoal)" }}
        >
          Nieuwsbrief versturen
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--charcoal)" }}
            >
              Onderwerp
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setConfirmSend(false);
              }}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                background: "var(--sand-light)",
                border: "1px solid var(--border)",
                color: "var(--charcoal)",
              }}
              placeholder="Onderwerp van de nieuwsbrief"
            />
          </div>
          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--charcoal)" }}
            >
              Inhoud
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                setConfirmSend(false);
              }}
              rows={8}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-y"
              style={{
                background: "var(--sand-light)",
                border: "1px solid var(--border)",
                color: "var(--charcoal)",
              }}
              placeholder="Schrijf de inhoud van je nieuwsbrief..."
            />
          </div>

          {sendResult && (
            <div
              className="px-4 py-3 rounded-xl text-sm font-medium"
              style={{
                background:
                  sendResult.type === "success"
                    ? "var(--green-pale)"
                    : "#fef2f2",
                color:
                  sendResult.type === "success" ? "var(--green)" : "#b91c1c",
              }}
            >
              {sendResult.message}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={handleSend}
              disabled={sending || !subject.trim() || !body.trim()}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-50"
              style={{
                background: confirmSend ? "var(--orange)" : "var(--green)",
              }}
            >
              {sending
                ? "Bezig met verzenden..."
                : confirmSend
                  ? `Bevestig: verzend naar ${active.length} abonnee${active.length !== 1 ? "s" : ""}`
                  : "Versturen"}
            </button>
            {confirmSend && (
              <button
                onClick={() => setConfirmSend(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium"
                style={{ color: "var(--stone)" }}
              >
                Annuleren
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Subscribers table */}
      <div className="card overflow-hidden mb-8">
        <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-display font-semibold text-base"
            style={{ color: "var(--charcoal)" }}
          >
            Abonnees ({subscribers.length})
          </h2>
        </div>
        {subscribers.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm" style={{ color: "var(--stone)" }}>
              Nog geen abonnees
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    E-mail
                  </th>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Status
                  </th>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Aangemeld
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((s) => (
                  <tr
                    key={s.id}
                    style={{ borderBottom: "1px solid var(--border)" }}
                    className="last:border-0"
                  >
                    <td
                      className="px-5 py-3.5"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {s.email}
                    </td>
                    <td className="px-5 py-3.5">
                      <SubscriberBadge status={s.status} />
                    </td>
                    <td
                      className="px-5 py-3.5"
                      style={{ color: "var(--stone)" }}
                    >
                      {formatDate(s.subscribedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Sent history */}
      <div className="card overflow-hidden">
        <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-display font-semibold text-base"
            style={{ color: "var(--charcoal)" }}
          >
            Verzonden ({sent.length})
          </h2>
        </div>
        {sent.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm" style={{ color: "var(--stone)" }}>
              Nog geen nieuwsbrieven verzonden
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left px-5 py-3 font-medium"
                    style={{ color: "var(--stone)" }}
                  >
                    Onderwerp
                  </th>
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
                    Ontvangers
                  </th>
                </tr>
              </thead>
              <tbody>
                {sent.map((nl) => (
                  <tr
                    key={nl.id}
                    style={{ borderBottom: "1px solid var(--border)" }}
                    className="last:border-0"
                  >
                    <td
                      className="px-5 py-3.5 font-medium"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {nl.subject}
                    </td>
                    <td
                      className="px-5 py-3.5"
                      style={{ color: "var(--stone)" }}
                    >
                      {formatDate(nl.sentAt)}
                    </td>
                    <td
                      className="px-5 py-3.5"
                      style={{ color: "var(--stone)" }}
                    >
                      {nl.recipientCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function SubscriberBadge({ status }: { status: Subscriber["status"] }) {
  const config: Record<
    Subscriber["status"],
    { label: string; bg: string; color: string }
  > = {
    active: { label: "Actief", bg: "var(--green-pale)", color: "var(--green)" },
    pending: {
      label: "In afwachting",
      bg: "var(--orange-pale)",
      color: "var(--orange)",
    },
    unsubscribed: {
      label: "Uitgeschreven",
      bg: "var(--blue-grey-pale)",
      color: "var(--stone)",
    },
  };

  const cfg = config[status];

  return (
    <span
      className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

function LoadingState() {
  return (
    <div>
      <div className="mb-8">
        <div
          className="h-7 w-36 rounded-lg animate-pulse"
          style={{ background: "var(--sand-light)" }}
        />
        <div
          className="h-4 w-56 rounded-lg mt-2 animate-pulse"
          style={{ background: "var(--sand-light)" }}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="card p-5 animate-pulse">
            <div
              className="h-4 w-20 rounded mb-2"
              style={{ background: "var(--sand-light)" }}
            />
            <div
              className="h-6 w-12 rounded"
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

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
