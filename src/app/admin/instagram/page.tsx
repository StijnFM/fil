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

  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const [savingToken, setSavingToken] = useState(false);
  const [tokenResult, setTokenResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [showGuide, setShowGuide] = useState(false);

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
        setShowGuide(!statusData.connected);
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

      setTokenResult({ type: "success", message: "Token opgeslagen! Je kunt nu synchroniseren." });
      setAccessToken("");
      setUserId("");
      setShowGuide(false);

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
      const res = await fetch("/api/admin/instagram/sync", { method: "POST" });
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
        message: `${data.synced} nieuwe post${data.synced !== 1 ? "s" : ""} opgehaald (${data.total} totaal)`,
      });

      const postsRes = await fetch("/api/admin/instagram");
      if (postsRes.ok) setPosts(await postsRes.json());
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
        <p className="text-sm font-medium" style={{ color: "#b91c1c" }}>{error}</p>
      </div>
    );
  }

  const daysUntilExpiry = tokenStatus?.expiresAt
    ? Math.ceil((new Date(tokenStatus.expiresAt).getTime() - Date.now()) / 86400000)
    : null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl" style={{ color: "var(--charcoal)" }}>
          Instagram
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--stone)" }}>
          Synchroniseer posts van je Instagram-account naar de website.
        </p>
      </div>

      {/* ── Status card ── */}
      <div className="card p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: tokenStatus?.connected
                  ? tokenStatus.expired ? "#fef2f2" : "var(--green-pale)"
                  : "var(--sand-light)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="5" stroke={
                  tokenStatus?.connected
                    ? tokenStatus.expired ? "#b91c1c" : "var(--green)"
                    : "var(--stone)"
                } strokeWidth="1.5" />
                <circle cx="10" cy="10" r="3.5" stroke={
                  tokenStatus?.connected
                    ? tokenStatus.expired ? "#b91c1c" : "var(--green)"
                    : "var(--stone)"
                } strokeWidth="1.5" />
                <circle cx="14.5" cy="5.5" r="1" fill={
                  tokenStatus?.connected
                    ? tokenStatus.expired ? "#b91c1c" : "var(--green)"
                    : "var(--stone)"
                } />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{
                color: tokenStatus?.connected
                  ? tokenStatus.expired ? "#b91c1c" : "var(--green)"
                  : "var(--stone)",
              }}>
                {tokenStatus?.connected
                  ? tokenStatus.expired ? "Token verlopen" : "Verbonden"
                  : "Niet verbonden"}
              </p>
              {tokenStatus?.connected && daysUntilExpiry !== null && (
                <p className="text-xs" style={{ color: "var(--stone)" }}>
                  {tokenStatus.expired
                    ? "Vernieuw je token om weer te synchroniseren"
                    : `Verloopt over ${daysUntilExpiry} dagen (wordt automatisch vernieuwd)`}
                </p>
              )}
              {!tokenStatus?.connected && (
                <p className="text-xs" style={{ color: "var(--stone)" }}>
                  Volg de stappen hieronder om te verbinden
                </p>
              )}
            </div>
          </div>

          {tokenStatus?.connected && !tokenStatus.expired && (
            <button
              onClick={handleSync}
              disabled={syncing}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity disabled:opacity-50"
              style={{ background: "var(--orange)" }}
            >
              {syncing ? "Synchroniseren..." : "Posts ophalen"}
            </button>
          )}
        </div>

        {syncResult && (
          <div
            className="mt-4 px-4 py-3 rounded-xl text-sm font-medium"
            style={{
              background: syncResult.type === "success" ? "var(--green-pale)" : "#fef2f2",
              color: syncResult.type === "success" ? "var(--green)" : "#b91c1c",
            }}
          >
            {syncResult.message}
          </div>
        )}
      </div>

      {/* ── Setup guide ── */}
      <div className="card mb-6 overflow-hidden">
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ background: "var(--orange-pale)", color: "var(--orange)" }}
            >
              ?
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--charcoal)" }}>
                {tokenStatus?.connected ? "Token vernieuwen" : "Hoe verbind ik Instagram?"}
              </p>
              <p className="text-xs" style={{ color: "var(--stone)" }}>
                Stap-voor-stap uitleg om je token op te halen
              </p>
            </div>
          </div>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className="flex-shrink-0 transition-transform"
            style={{ transform: showGuide ? "rotate(180deg)" : "rotate(0)" }}
          >
            <path d="M4 6L8 10L12 6" stroke="var(--stone)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {showGuide && (
          <div className="px-6 pb-6 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="mt-6 space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                >
                  1
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                    Ga naar de Meta Token Generator
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--stone)" }}>
                    Open{" "}
                    <a
                      href="https://developers.facebook.com/tools/explorer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                      style={{ color: "var(--orange)" }}
                    >
                      developers.facebook.com/tools/explorer
                    </a>
                    {" "}en log in met het Facebook-account dat gekoppeld is aan je Instagram.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                >
                  2
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                    Maak een app aan (eenmalig)
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--stone)" }}>
                    Als je nog geen app hebt: ga naar{" "}
                    <a
                      href="https://developers.facebook.com/apps/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                      style={{ color: "var(--orange)" }}
                    >
                      developers.facebook.com/apps
                    </a>
                    {" "}en klik <strong>App maken</strong>. Kies type &quot;Business&quot;, geef het een naam (bijv. &quot;FIL Website&quot;).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                >
                  3
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                    Genereer een User Token
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--stone)" }}>
                    In de Graph API Explorer: selecteer je app, klik <strong>Generate Access Token</strong>.
                    Vink de permissions <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--sand-light)" }}>instagram_basic</code> en{" "}
                    <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--sand-light)" }}>pages_show_list</code> aan.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                >
                  4
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                    Verleng de token naar 60 dagen
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--stone)" }}>
                    Ga naar{" "}
                    <a
                      href="https://developers.facebook.com/tools/debug/accesstoken/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                      style={{ color: "var(--orange)" }}
                    >
                      Access Token Debugger
                    </a>
                    , plak je token en klik <strong>Extend Access Token</strong> onderaan. Kopieer de nieuwe lange token.
                  </p>
                  <div
                    className="mt-2 px-3 py-2 rounded-lg text-xs"
                    style={{ background: "var(--green-pale)", color: "var(--green)" }}
                  >
                    Tip: De token wordt automatisch vernieuwd zolang je minstens 1x per 50 dagen synchroniseert.
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                >
                  5
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                    Vind je Instagram User ID
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--stone)" }}>
                    In de Graph API Explorer, typ <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--sand-light)" }}>me/accounts</code> en klik Submit.
                    Kopieer de <strong>id</strong> van je pagina. Typ daarna{" "}
                    <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--sand-light)" }}>{"{page-id}"}?fields=instagram_business_account</code>{" "}
                    om je Instagram User ID te vinden.
                  </p>
                </div>
              </div>

              {/* Step 6 - Token form */}
              <div
                className="mt-2 p-5 rounded-xl"
                style={{ background: "var(--sand-light)", border: "1px solid var(--border)" }}
              >
                <p className="font-semibold text-sm mb-4" style={{ color: "var(--charcoal)" }}>
                  Plak je gegevens hieronder:
                </p>
                <form onSubmit={handleSaveToken} className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="accessToken" className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                      Long-lived Access Token
                    </label>
                    <input
                      id="accessToken"
                      type="text"
                      value={accessToken}
                      onChange={(e) => setAccessToken(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none font-mono"
                      style={{ background: "var(--white)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                      placeholder="EAAxxxxxxx..."
                    />
                  </div>
                  <div>
                    <label htmlFor="userId" className="block text-xs font-medium mb-1" style={{ color: "var(--stone)" }}>
                      Instagram User ID
                    </label>
                    <input
                      id="userId"
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none font-mono"
                      style={{ background: "var(--white)", border: "1px solid var(--border)", color: "var(--charcoal)" }}
                      placeholder="17841400..."
                    />
                  </div>

                  {tokenResult && (
                    <div
                      className="px-4 py-3 rounded-xl text-sm font-medium"
                      style={{
                        background: tokenResult.type === "success" ? "var(--green-pale)" : "#fef2f2",
                        color: tokenResult.type === "success" ? "var(--green)" : "#b91c1c",
                      }}
                    >
                      {tokenResult.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={savingToken}
                    className="self-start px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity disabled:opacity-50"
                    style={{ background: "var(--green)" }}
                  >
                    {savingToken ? "Opslaan..." : "Verbinden"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Posts grid ── */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display font-semibold text-lg" style={{ color: "var(--charcoal)" }}>
          Posts ({posts.length})
        </h2>
      </div>

      {posts.length === 0 ? (
        <div className="card p-12 text-center">
          <div
            className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "var(--sand-light)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="var(--stone)" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="var(--stone)" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1.25" fill="var(--stone)" />
            </svg>
          </div>
          <p className="font-semibold" style={{ color: "var(--charcoal)" }}>
            Nog geen posts
          </p>
          <p className="text-sm mt-1 max-w-xs mx-auto" style={{ color: "var(--stone)" }}>
            {tokenStatus?.connected
              ? "Klik op 'Posts ophalen' om je Instagram-posts te synchroniseren."
              : "Verbind eerst je Instagram-account via de stappen hierboven."}
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
              <div className="aspect-square relative overflow-hidden" style={{ background: "var(--sand-light)" }}>
                {post.mediaType === "VIDEO" ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(31, 36, 33, 0.6)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
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
                    style={{ background: "rgba(31, 36, 33, 0.7)", color: "white" }}
                  >
                    Album
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm line-clamp-2" style={{ color: "var(--charcoal)" }}>
                  {post.caption || "Geen caption"}
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--stone)" }}>
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
        <div className="h-7 w-32 rounded-lg animate-pulse" style={{ background: "var(--sand-light)" }} />
        <div className="h-4 w-56 rounded-lg mt-2 animate-pulse" style={{ background: "var(--sand-light)" }} />
      </div>
      <div className="card p-6 mb-6 animate-pulse">
        <div className="h-10 w-10 rounded-xl mb-4" style={{ background: "var(--sand-light)" }} />
        <div className="h-4 w-40 rounded" style={{ background: "var(--sand-light)" }} />
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
