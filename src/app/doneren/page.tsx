import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { DoneerForm } from "./DoneerForm";

export const metadata: Metadata = {
  title: "Doneren — Football is Life",
  description:
    "Steun het Soweto-project in Mzuzu, Malawi. € 20 = een voetbal voor een kind in Soweto.",
};

export default function DonerenPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ── Hero band ── */}
        <div className="pt-16">
          <div
            className="py-20 px-6 text-center relative overflow-hidden"
            style={{ background: "var(--surface)" }}
          >
            {/* Pitch lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 120 80"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              style={{ opacity: 0.06 }}
            >
              <g stroke="white" strokeWidth="0.5" fill="none">
                <rect x="4" y="4" width="112" height="72" />
                <circle cx="60" cy="40" r="10" />
                <line x1="60" y1="4" x2="60" y2="76" />
              </g>
            </svg>

            <div className="relative z-10">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--amber)" }}
              >
                Draag bij
              </p>
              <h1
                className="font-display font-black text-foreground leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
              >
                DRAAG BIJ.
              </h1>
              <p
                className="font-display font-black italic mt-2"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
                  color: "rgba(254,249,240,0.45)",
                }}
              >
                Voor het project in Soweto, Malawi.
              </p>

              {/* Impact line */}
              <div
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border"
                style={{
                  borderColor: "rgba(245,166,35,0.3)",
                  background: "rgba(245,166,35,0.08)",
                }}
              >
                <span aria-hidden>⚽</span>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "rgba(254,249,240,0.7)" }}
                >
                  € 20 = een voetbal voor een kind in Soweto
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Form ── */}
        <div className="max-w-lg mx-auto px-6 py-16">
          <DoneerForm />
        </div>

        {/* ── Trust strip ── */}
        <div
          className="border-t py-12 px-6"
          style={{
            background: "var(--surface)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "🔒",
                title: "Veilig betalen",
                desc: "iDEAL, creditcard of bankoverschrijving",
              },
              {
                icon: "📄",
                title: "ANBI-erkend",
                desc: "Donaties zijn fiscaal aftrekbaar",
              },
              {
                icon: "🌍",
                title: "100% naar het project",
                desc: "Onbezoldigd bestuur, geen overhead",
              },
            ].map((item) => (
              <div key={item.title}>
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <p className="font-bold text-foreground text-sm mt-2">
                  {item.title}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(254,249,240,0.4)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
