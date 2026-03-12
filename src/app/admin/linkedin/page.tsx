"use client";

import { useEffect, useState } from "react";

interface LinkedInPost {
  id: string;
  url: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string | null;
}

export default function LinkedInPage() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Football is Life");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [imageUrl, setImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [formResult, setFormResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/admin/linkedin")
      .then((res) => {
        if (!res.ok) throw new Error("Niet geautoriseerd");
        return res.json();
      })
      .then((data: LinkedInPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setFormResult(null);

    try {
      const res = await fetch("/api/admin/linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          content,
          author,
          date,
          imageUrl: imageUrl || null,
        }),
      });

      if (!res.ok) {
        setFormResult({ type: "error", message: "Opslaan mislukt" });
        return;
      }

      setFormResult({ type: "success", message: "Post toegevoegd" });
      setUrl("");
      setContent("");
      setImageUrl("");
      setShowForm(false);

      // Refresh
      const postsRes = await fetch("/api/admin/linkedin");
      if (postsRes.ok) setPosts(await postsRes.json());
    } catch {
      setFormResult({ type: "error", message: "Verbinding mislukt" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je deze post wilt verwijderen?")) return;

    const res = await fetch(`/api/admin/linkedin?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  }

  if (loading) return <LoadingState />;
  if (error) {
    return (
      <div className="card p-8 text-center">
        <p className="text-sm font-medium" style={{ color: "#b91c1c" }}>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl" style={{ color: "var(--charcoal)" }}>
          LinkedIn
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
          Beheer LinkedIn-posts die op de website getoond worden.
        </p>
      </div>

      {/* ── Info card ── */}
      <div className="card p-6 mb-6">
        <div className="flex gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#E8F4FD" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" rx="3" stroke="#0A66C2" strokeWidth="1.5" />
              <path d="M6.5 8.5V14M10 14V10.5C10 9.4 10.9 8.5 12 8.5C13.1 8.5 14 9.4 14 10.5V14M6.5 6.25V6.26" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
              Handmatig beheer
            </p>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--stone)" }}>
              LinkedIn heeft geen gratis API voor het ophalen van posts. Voeg daarom handmatig posts toe
              door de URL en inhoud te kopiëren van je LinkedIn-pagina.
            </p>
          </div>
        </div>

        {/* How-to */}
        <div className="mt-5 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--stone)" }}>
            Zo voeg je een post toe
          </p>
          <div className="space-y-2">
            {[
              "Open de LinkedIn-post die je wilt toevoegen",
              "Klik op de drie puntjes (...) en kies 'Link naar bericht kopiëren'",
              "Klik hieronder op 'Post toevoegen' en plak de URL en tekst",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                  style={{ background: "var(--green-pale)", color: "var(--green)" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm" style={{ color: "var(--stone)" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Add button / form ── */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="card p-4 w-full text-center text-sm font-semibold transition-all card-hover mb-6"
          style={{ color: "var(--green)", border: "2px dashed var(--border)" }}
        >
          + Post toevoegen
        </button>
      ) : (
        <div className="card p-6 mb-6">
          <h2 className="font-display font-semibold text-lg mb-4" style={{ color: "var(--charcoal)" }}>
            Nieuwe post
          </h2>
          <form onSubmit={handleAdd} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                LinkedIn URL *
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: "var(--sand-light)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                placeholder="https://www.linkedin.com/posts/..."
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                Inhoud *
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-y"
                style={{ background: "var(--sand-light)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                placeholder="Kopieer de tekst van de LinkedIn-post..."
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                  Auteur *
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "var(--sand-light)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                  Datum *
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: "var(--sand-light)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                Afbeelding URL (optioneel)
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: "var(--sand-light)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                placeholder="https://..."
              />
            </div>

            {formResult && (
              <div
                className="px-4 py-3 rounded-xl text-sm font-medium"
                style={{
                  background: formResult.type === "success" ? "var(--green-pale)" : "#fef2f2",
                  color: formResult.type === "success" ? "var(--green)" : "#b91c1c",
                }}
              >
                {formResult.message}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity disabled:opacity-50"
                style={{ background: "var(--green)" }}
              >
                {saving ? "Opslaan..." : "Toevoegen"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity"
                style={{ color: "var(--stone)", border: "1px solid var(--border)" }}
              >
                Annuleren
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── Posts list ── */}
      <div className="mb-4">
        <h2 className="font-display font-semibold text-lg" style={{ color: "var(--charcoal)" }}>
          Posts ({posts.length})
        </h2>
      </div>

      {posts.length === 0 ? (
        <div className="card p-12 text-center">
          <div
            className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "#E8F4FD" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0A66C2" strokeWidth="1.5" />
              <path d="M7.5 9.5V16M11.5 16V12C11.5 10.62 12.62 9.5 14 9.5C15.38 9.5 16.5 10.62 16.5 12V16M7.5 7.25V7.26" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-semibold" style={{ color: "var(--charcoal)" }}>
            Nog geen LinkedIn-posts
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
            Voeg je eerste post toe via de knop hierboven.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="card p-5 flex gap-4">
              {post.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.imageUrl}
                  alt=""
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  style={{ background: "var(--sand-light)" }}
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                      {post.author}
                    </p>
                    <p className="text-xs" style={{ color: "var(--stone)" }}>
                      {new Date(post.date).toLocaleDateString("nl-NL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: "var(--sand-light)", color: "var(--stone)" }}
                      title="Bekijk op LinkedIn"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10.5 7.58V10.5a1.17 1.17 0 0 1-1.17 1.17H3.5A1.17 1.17 0 0 1 2.33 10.5V4.67A1.17 1.17 0 0 1 3.5 3.5h2.92M8.75 2.33h2.92v2.92M5.83 8.17 11.67 2.33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: "#fef2f2", color: "#b91c1c" }}
                      title="Verwijderen"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.75 3.5h10.5M4.67 3.5V2.33a1.17 1.17 0 0 1 1.16-1.16h2.34a1.17 1.17 0 0 1 1.16 1.16V3.5m1.75 0v7.58a1.17 1.17 0 0 1-1.16 1.17H4.08a1.17 1.17 0 0 1-1.16-1.17V3.5h8.16z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-sm mt-2 line-clamp-3 leading-relaxed" style={{ color: "var(--stone)" }}>
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div>
      <div className="mb-8">
        <div className="h-7 w-28 rounded-lg animate-pulse" style={{ background: "var(--sand-light)" }} />
        <div className="h-4 w-56 rounded-lg mt-2 animate-pulse" style={{ background: "var(--sand-light)" }} />
      </div>
      <div className="card p-6 mb-6 animate-pulse">
        <div className="h-10 w-10 rounded-xl mb-4" style={{ background: "var(--sand-light)" }} />
        <div className="h-4 w-48 rounded" style={{ background: "var(--sand-light)" }} />
      </div>
    </div>
  );
}
