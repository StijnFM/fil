import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { DoneerForm } from "./DoneerForm";

export const metadata: Metadata = {
  title: "Doneren — Football is Life",
  description:
    "Doneer aan Football is Life. € 10 = 1 jongere, 1 jaar betere begeleiding in Soweto, Mzuzu. ANBI-erkende stichting, donaties fiscaal aftrekbaar.",
};

export default function DonerenPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Intro ── */}
        <section className="pt-24 pb-16 px-6" style={{ background: "var(--green)" }}>
          <div className="max-w-xl mx-auto text-center">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Bijdragen
            </span>
            <h1
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Waar jouw bijdrage aan bouwt.
            </h1>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Jouw donatie gaat rechtstreeks naar coaches, trainingen en life
              skills voor jongeren in Soweto. Elke euro wordt verantwoord besteed
              — het bestuur werkt onbezoldigd.
            </p>
            <div className="mt-8">
              <ImagePlaceholder
                label="(Afb F)"
                description="Jongeren op het veld in Soweto"
                aspect="16/9"
                className="rounded-xl"
                src="/images/photos/afb-f.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── Impact context ── */}
        <section className="py-8 px-6" style={{ background: "var(--green-dark)" }}>
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-3 gap-3">
              {[
                { amount: "€ 10", impact: "1 jongere, 1 jaar betere begeleiding" },
                { amount: "€ 50", impact: "Bijdrage aan coachontwikkeling" },
                { amount: "€ 100", impact: "Trainingen én life skills" },
              ].map((tile) => (
                <div
                  key={tile.amount}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(246,241,232,0.05)",
                    border: "1px solid rgba(246,241,232,0.09)",
                  }}
                >
                  <p
                    className="font-bold text-base leading-none mb-1.5"
                    style={{ color: "rgba(201,107,44,0.90)" }}
                  >
                    {tile.amount}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "rgba(246,241,232,0.45)" }}
                  >
                    {tile.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form ── */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-lg mx-auto">
            <DoneerForm />
          </div>
        </section>

        {/* ── Trust strip ── */}
        <section
          className="py-12 px-6 border-t"
          style={{ borderColor: "var(--border)", background: "var(--sand-light)" }}
        >
          <div className="max-w-lg mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center mb-8">
              {[
                {
                  label: "Veilig betalen",
                  sub: "iDEAL, creditcard, overschrijving",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  ),
                },
                {
                  label: "ANBI-erkend",
                  sub: "Fiscaal aftrekbaar",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  label: "100% naar het project",
                  sub: "Onbezoldigd bestuur",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ background: "var(--green-pale)", color: "var(--green)" }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--stone)" }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-5 text-sm leading-relaxed space-y-2"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                color: "var(--stone)",
              }}
            >
              <p>
                <strong style={{ color: "var(--charcoal)" }}>Na je donatie</strong> ontvang je
                een bevestiging per e-mail. Je gegevens worden niet gedeeld met
                derden en enkel gebruikt voor projectupdates als je dit wenst.
              </p>
              <p>
                Voor grotere bijdragen of sponsoring:{" "}
                <Link
                  href="/over-ons"
                  className="font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  neem contact op met het bestuur →
                </Link>
              </p>
            </div>
          </div>
        </section>
        {/* ── Football Shirt Challenge ── */}
        <section className="py-12 px-6 bg-background">
          <div className="max-w-lg mx-auto">
            <div
              className="rounded-2xl p-6 relative overflow-hidden card-hover"
              style={{
                background: "var(--green)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="relative z-10">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(201,107,44,0.80)" }}
                >
                  Maandelijkse actie
                </p>
                <h3
                  className="font-display font-bold text-xl leading-snug mb-3"
                  style={{ color: "rgba(246,241,232,0.95)" }}
                >
                  Football Shirt Challenge
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(246,241,232,0.55)" }}
                >
                  Elke maand verloten we onder de donateurs een voetbalshirt
                  van een bekende speler. Doneer en maak kans — en steun
                  tegelijkertijd het project.
                </p>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "rgba(246,241,232,0.35)" }}
                >
                  Meer weten? Volg ons op LinkedIn en Instagram.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
