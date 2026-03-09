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
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "var(--ivory)" }}
      >
        <div className="text-center max-w-lg mx-auto pt-16 py-24">
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl"
            style={{ background: "var(--green-pale)", border: "2px solid rgba(33,77,58,0.15)" }}
            aria-hidden
          >
            ⚽
          </div>

          <h1
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              color: "var(--green)",
              letterSpacing: "-0.025em",
            }}
          >
            {firstName ? `Bedankt, ${firstName}!` : "Bedankt!"}
          </h1>

          <p
            className="font-semibold mt-2 text-lg"
            style={{ color: "var(--orange)" }}
          >
            Football is Life.
          </p>

          {amount && (
            <div
              className="mt-5 inline-block px-5 py-2.5 rounded-full"
              style={{
                background: "var(--orange-pale)",
                border: "1px solid rgba(201,107,44,0.20)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--orange)" }}>
                Je donatie van € {amount} wordt verwerkt
              </p>
            </div>
          )}

          <p
            className="mt-6 leading-relaxed"
            style={{ color: "var(--stone)" }}
          >
            Je ontvangt een bevestiging per e-mail. We houden je op de hoogte
            van de voortgang van het project in Soweto, Mzuzu.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-7 py-3.5 rounded-full font-semibold border transition-colors"
              style={{ color: "var(--charcoal)", borderColor: "var(--border-strong)" }}
            >
              Terug naar home
            </Link>
            <Link
              href="/project"
              className="px-7 py-3.5 rounded-full font-semibold text-white hover:opacity-85 transition-opacity"
              style={{ background: "var(--green)" }}
            >
              Bekijk het project →
            </Link>
          </div>

          <p className="mt-10 text-xs" style={{ color: "var(--stone)", opacity: 0.5 }}>
            ANBI-erkende stichting · RSIN 868370873 · Nijmegen
          </p>
        </div>
      </main>
    </>
  );
}
