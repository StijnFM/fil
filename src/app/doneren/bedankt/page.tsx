import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default async function BedanktPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; amount?: string }>;
}) {
  const params = await searchParams;
  const name = params.name ? decodeURIComponent(params.name) : null;
  const amount = params.amount ? parseFloat(params.amount) : null;
  const firstName = name ? name.split(" ")[0] : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-lg mx-auto pt-16 py-24">
          {/* Football icon */}
          <div
            className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl"
            style={{ background: "var(--amber)", boxShadow: "var(--glow-amber)" }}
            aria-hidden
          >
            ⚽
          </div>

          <h1
            className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            {firstName ? `Bedankt, ${firstName}!` : "Bedankt!"}
          </h1>

          <p
            className="font-display font-black italic mt-2"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "var(--amber)",
            }}
          >
            Football is Life.
          </p>

          {amount && (
            <div
              className="mt-6 inline-block px-6 py-3 rounded-full border"
              style={{
                borderColor: "rgba(245,166,35,0.3)",
                background: "rgba(245,166,35,0.08)",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--amber)" }}
              >
                Je donatie van € {amount} wordt verwerkt
              </p>
            </div>
          )}

          <p
            className="mt-6 leading-relaxed"
            style={{ color: "rgba(254,249,240,0.6)" }}
          >
            Je ontvangt een bevestiging per e-mail. We houden je op de hoogte
            van de voortgang van het project in Soweto, Mzuzu.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-full border text-foreground font-bold hover:bg-glass-bg transition-colors"
              style={{ borderColor: "var(--glass-border)" }}
            >
              Terug naar home
            </Link>
            <Link
              href="https://football-is-life.nl/project-soweto/"
              className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-opacity"
            >
              Bekijk het project →
            </Link>
          </div>

          <p
            className="mt-10 text-xs"
            style={{ color: "rgba(254,249,240,0.2)" }}
          >
            ANBI-erkende stichting · RSIN 868370873 · Nijmegen
          </p>
        </div>
      </main>
    </>
  );
}
