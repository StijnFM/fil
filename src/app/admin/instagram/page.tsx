"use client";

import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  caption: string | null;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  permalink: string;
  timestamp: string;
}

interface TokenStatus {
  connected: boolean;
  expiresAt?: string;
  expired?: boolean;
  userId?: string;
}

export default function InstagramPage() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [tokenStatus, setTokenStatus] = useState<TokenStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Token form
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const [savingToken, setSavingToken] = useState(false);
  const [tokenResult, setTokenResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Sync
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/instagram").then((res) => {
        if (!res.ok) throw new Error("Niet geautoriseerd");
        return res.json();
      }),
      fetch("/api/admin/instagram/status").then((res) => {
        if (!res.ok) throw new Error("Status ophalen mislukt");
        return res.json();
      }),
    ])
      .then(([postsData, statusData]: [InstagramPost[], TokenStatus]) => {
        setPosts(postsData);
        setTokenStatus(statusData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  async function handleSaveToken(e: React.FormEvent) {
    e.preventDefault();
    setSavingToken(true);
    setTokenResult(null);

    try {
      const res = await fetch("/api/admin/instagram/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken, userId }),
      });

      if (!res.ok) {
        const data = await res.json();
        setTokenResult({
          type: "error",
          message: data.error || "Token opslaan mislukt",
        });
        return;
      }

      setTokenResult({ type: "success", message: "Token opgeslagen" });
      setAccessToken("");
      setUserId("");

      // Refresh status
      const statusRes = await fetch("/api/admin/instagram/status");
      if (statusRes.ok) {
        setTokenStatus(await statusRes.json());
      }
    } catch {
      setTokenResult({ type: "error", message: "Verbinding mislukt" });
    } finally {
      setSavingToken(false);
    }
  }

  async function handleSync() {
    setSyncing(true);
    setSyncResult(null);

    try {
      const res = await fetch("/api/admin/instagram/sync", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        setSyncResult({
          type: "error",
          message: data.error || "Sync mislukt",
        });
        return;
      }

      setSyncResult({
        type: "success",
        message: `${data.synced} post${data.synced !== 1 ? "s" : ""} gesynchroniseerd (${data.total} totaal)`,
      });

      // Refresh posts
      const postsRes = await fetch("/api/admin/instagram");
      if (postsRes.ok) {
        setPosts(await postsRes.json());
      }
    } catch {
      setSyncResult({ type: "error", message: "Verbinding mislukt" });
    } finally {
      setSyncing(false);
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
          Instagram
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
          Posts synchroniseren en token beheren
        </p>
      </div>

      {/* Token status */}
      <div className="card p-6 mb-6">
        <h2
          className="font-display font-semibold text-lg mb-4"
          style={{ color: "var(--charcoal)" }}
        >
          Verbinding
        </h2>
        {tokenStatus?.connected ? (
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: tokenStatus.expired
                    ? "#b91c1c"
                    : "var(--green)",
                }}
              />
              <span
                className="text-sm font-medium"
                style={{
                  color: tokenStatus.expired
                    ? "#b91c1c"
                    : "var(--green)",
                }}
              >
                {tokenStatus.expired ? "Token verlopen" : "Verbonden"}
              </span>
            </div>
            {tokenStatus.expiresAt && (
              <span className="text-sm" style={{ color: "var(--stone)" }}>
                Verloopt: {formatDate(tokenStatus.expiresAt)}
              </span>
            )}
            {tokenStatus.userId && (
              <span className="text-sm" style={{ color: "var(--stone)" }}>
                User ID: {tokenStatus.userId}
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--stone)" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--stone)" }}
            >
              Niet verbonden
            </span>
          </div>
        )}
      </div>

      {/* Token input form */}
      <div className="card p-6 mb-6">
        <h2
          className="font-display font-semibold text-lg mb-4"
          style={{ color: "var(--charcoal)" }}
        >
          Token instellen
        </h2>
        <form onSubmit={handleSaveToken} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="accessToken"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--charcoal)" }}
            >
              Long-lived Access Token
            </label>
            <input
              id="accessToken"
              type="text"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none font-mono"
              style={{
                background: "var(--sand-light)",
                border: "1px solid var(--border)",
                color: "var(--charcoal)",
              }}
              placeholder="IGQ..."
            />
          </div>
          <div>
            <label
              htmlFor="userId"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--charcoal)" }}
            >
              User ID
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none font-mono"
              style={{
                background: "var(--sand-light)",
                border: "1px solid var(--border)",
                color: "var(--charcoal)",
              }}
              placeholder="17841400..."
            />
          </div>

          {tokenResult && (
            <div
              className="px-4 py-3 rounded-xl text-sm font-medium"
              style={{
                background:
                  tokenResult.type === "success"
                    ? "var(--green-pale)"
                    : "#fef2f2",
                color:
                  tokenResult.type === "success"
                    ? "var(--green)"
                    : "#b91c1c",
              }}
            >
              {tokenResult.message}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={savingToken}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-50"
              style={{ background: "var(--green)" }}
            >
              {savingToken ? "Bezig..." : "Token opslaan"}
            </button>
          </div>
        </form>
      </div>

      {/* Sync */}
      <div className="card p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2
              className="font-display font-semibold text-lg"
              style={{ color: "var(--charcoal)" }}
            >
              Synchroniseren
            </h2>
            <p className="text-sm mt-0.5" style={{ color: "var(--stone)" }}>
              Haal de nieuwste posts op van Instagram
            </p>
          </div>
          <button
            onClick={handleSync}
            disabled={syncing || !tokenStatus?.connected}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-50"
            style={{ background: "var(--orange)" }}
          >
            {syncing ? "Bezig met synchroniseren..." : "Posts synchroniseren"}
          </button>
        </div>
        {syncResult && (
          <div
            className="mt-4 px-4 py-3 rounded-xl text-sm font-medium"
            style={{
              background:
                syncResult.type === "success"
                  ? "var(--green-pale)"
                  : "#fef2f2",
              color:
                syncResult.type === "success" ? "var(--green)" : "#b91c1c",
            }}
          >
            {syncResult.message}
          </div>
        )}
      </div>

      {/* Posts grid */}
      <div className="mb-4">
        <h2
          className="font-display font-semibold text-lg"
          style={{ color: "var(--charcoal)" }}
        >
          Posts ({posts.length})
        </h2>
      </div>

      {posts.length === 0 ? (
        <div className="card p-12 text-center">
          <div
            className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "var(--sand-light)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="var(--stone)"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="var(--stone)"
                strokeWidth="1.5"
              />
              <circle cx="17.5" cy="6.5" r="1.25" fill="var(--stone)" />
            </svg>
          </div>
          <p className="font-medium" style={{ color: "var(--charcoal)" }}>
            Nog geen posts
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
            Verbind je account en synchroniseer om posts te laden
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="card overflow-hidden card-hover block"
            >
              <div
                className="aspect-square relative overflow-hidden"
                style={{ background: "var(--sand-light)" }}
              >
                {post.mediaType === "VIDEO" ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(31, 36, 33, 0.6)" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                      >
                        <polygon points="6,3 18,10 6,17" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.mediaUrl}
                    alt={post.caption?.slice(0, 60) || "Instagram post"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                {post.mediaType === "CAROUSEL_ALBUM" && (
                  <div
                    className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(31, 36, 33, 0.7)",
                      color: "white",
                    }}
                  >
                    Album
                  </div>
                )}
              </div>
              <div className="p-4">
                <p
                  className="text-sm line-clamp-2"
                  style={{ color: "var(--charcoal)" }}
                >
                  {post.caption || "Geen caption"}
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: "var(--stone)" }}
                >
                  {formatDate(post.timestamp)}
                </p>
              </div>
            </a>
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
        <div
          className="h-7 w-32 rounded-lg animate-pulse"
          style={{ background: "var(--sand-light)" }}
        />
        <div
          className="h-4 w-56 rounded-lg mt-2 animate-pulse"
          style={{ background: "var(--sand-light)" }}
        />
      </div>
      <div className="card p-6 mb-6 animate-pulse">
        <div
          className="h-5 w-28 rounded mb-4"
          style={{ background: "var(--sand-light)" }}
        />
        <div
          className="h-4 w-40 rounded"
          style={{ background: "var(--sand-light)" }}
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="card overflow-hidden animate-pulse">
            <div
              className="aspect-square"
              style={{ background: "var(--sand-light)" }}
            />
            <div className="p-4">
              <div
                className="h-4 rounded mb-2"
                style={{ background: "var(--sand-light)" }}
              />
              <div
                className="h-3 w-20 rounded"
                style={{ background: "var(--sand-light)" }}
              />
            </div>
          </div>
        ))}
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
