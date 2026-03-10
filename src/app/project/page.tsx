import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Project Soweto — Football is Life",
  description:
    "Communityproject in Soweto, de armste wijk van Mzuzu (Malawi). Via lokale coaches, life skills en een voetbalveld geven we jongeren duurzaam meer perspectief.",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold tracking-widest uppercase mb-4"
      style={{ color: "var(--orange)" }}
    >
      {children}
    </p>
  );
}

function PitchDecor({ opacity = 0.22, stroke = "white" }: { opacity?: number; stroke?: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 120 80"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grass-p" x="0" y="0" width="10" height="80" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="10" height="80" fill="rgba(255,255,255,0.025)" />
          <rect x="5" y="0" width="5" height="80" fill="rgba(0,0,0,0.018)" />
        </pattern>
      </defs>
      <rect width="120" height="80" fill="url(#grass-p)" />
      <g stroke={stroke} strokeWidth="0.7" fill="none" style={{ opacity }}>
        <rect x="4" y="4" width="112" height="72" />
        <line x1="60" y1="4" x2="60" y2="76" />
        <circle cx="60" cy="40" r="10" />
        <circle cx="60" cy="40" r="1.1" fill={stroke} stroke="none" />
        <rect x="4" y="21" width="18" height="38" />
        <rect x="4" y="29" width="7" height="22" />
        <circle cx="16" cy="40" r="1.1" fill={stroke} stroke="none" />
        <path d="M 22 29 A 11 11 0 0 1 22 51" />
        <rect x="98" y="21" width="18" height="38" />
        <rect x="109" y="29" width="7" height="22" />
        <circle cx="104" cy="40" r="1.1" fill={stroke} stroke="none" />
        <path d="M 98 29 A 11 11 0 0 0 98 51" />
        <path d="M 7,4 A 3,3 0 0,1 4,7" />
        <path d="M 113,4 A 3,3 0 0,0 116,7" />
        <path d="M 4,73 A 3,3 0 0,0 7,76" />
        <path d="M 116,73 A 3,3 0 0,1 113,76" />
      </g>
    </svg>
  );
}

const pillars = [
  {
    n: "01",
    title: "Voetbalveld & faciliteiten",
    desc: "We bouwen een voetbalveld en creëren een veilige ontmoetingsplek. Grondwerk, doelen, afrastering en markeringen — een plek van eigenwaarde.",
  },
  {
    n: "02",
    title: "Lokale coaches opleiden",
    desc: "Jongeren worden getraind via het Trainer Coach 1-programma. Football is Life leidt samen met UNGWERU en St. Patrick op — kennis blijft in de community.",
  },
  {
    n: "03",
    title: "Life skills & empowerment",
    desc: "Naast voetbal is er wekelijks ruimte voor gezondheid, samenwerken en persoonlijke ontwikkeling. Empowermentsessies voor en door jongeren.",
  },
  {
    n: "04",
    title: "2 jaar begeleiding",
    desc: "Football is Life blijft 2 jaar aanwezig na oplevering. Monitoring, safeguarding en continuïteit — zodat het model echt wordt ingebed.",
  },
];

const phases = [
  { n: "01", title: "Selectie & voorbereiding", desc: "Lokale coaches worden geselecteerd op basis van betrokkenheid en potentieel." },
  { n: "02", title: "Trainer Coach 1-opleiding", desc: "Intensieve opleiding tot erkend coach, begeleid door Football is Life en lokale partners." },
  { n: "03", title: "Start trainingen", desc: "Regelmatige voetbaltrainingen voor jongeren in Soweto. Drie keer per week." },
  { n: "04", title: "Empowermentactiviteiten", desc: "Wekelijkse life skills sessies naast de training. Gezondheid, samenwerken, toekomst." },
  { n: "05", title: "Monitoring & safeguarding", desc: "Voortgang wordt bijgehouden, coaches begeleid, deelnemers beschermd." },
  { n: "06", title: "Lokale verankering", desc: "Na 2 jaar draagt het lokale team de volle verantwoordelijkheid. Duurzaam ingebed." },
];

const costBreakdown = [
  { item: "Aanleg voetbalveld", detail: "Grondwerk, doelen, afrastering, markeringen" },
  { item: "Sportmateriaal", detail: "Voetballen, hesjes, pionnen en trainingsmateriaal" },
  { item: "Trainersopleiding", detail: "Trainer Coach 1 — opleiding en begeleiding van lokale coaches" },
  { item: "2 jaar projectbegeleiding", detail: "Football is Life ter plaatse in Mzuzu" },
];

const indicators = [
  { value: "60–80", label: "Jongeren bereikt", sub: "doelstelling fase 1" },
  { value: "4–6", label: "Coaches opgeleid", sub: "Trainer Coach 1" },
  { value: "3×", label: "Trainingen p/week", sub: "per groep" },
  { value: "Wekelijks", label: "Life skills sessies", sub: "naast training" },
  { value: "2 jaar", label: "Begeleiding", sub: "na oplevering" },
  { value: "100%", label: "Lokale uitvoering", sub: "via UNGWERU & St. Patrick" },
];

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.09} stroke="white" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(24,56,40,0.8) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
              style={{ borderColor: "rgba(201,107,44,0.35)", background: "rgba(201,107,44,0.10)" }}>
              <span>📍</span>
              <span className="text-sm font-semibold" style={{ color: "rgba(201,107,44,0.90)" }}>
                Soweto, Mzuzu — Malawi
              </span>
            </div>

            <h1
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Communityproject
              <br />
              in Soweto.
            </h1>
            <p
              className="mt-5 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.60)" }}
            >
              Via lokale coaches, life skills en een veilige speelplek geven we
              jongeren die buiten beeld blijven duurzaam meer perspectief.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/doneren"
                className="px-7 py-3.5 rounded-full font-semibold text-base hover:opacity-85 transition-opacity"
                style={{ background: "var(--orange)", color: "white" }}
              >
                Help mee bouwen →
              </Link>
              <Link
                href="/over-ons"
                className="px-7 py-3.5 rounded-full font-semibold text-base border transition-colors"
                style={{ color: "rgba(246,241,232,0.75)", borderColor: "rgba(246,241,232,0.18)" }}
              >
                Over de stichting
              </Link>
            </div>
          </div>
        </section>

        {/* ── Waarom Soweto (cream) ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Achtergrond</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Waarom Soweto?
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
            </div>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--stone)" }}>
              <p>
                Soweto is de armste wijk van Mzuzu, Malawi. Jongeren hier missen
                niet alleen faciliteiten — ze missen ook de begeleiding en
                rolmodellen die ontwikkeling mogelijk maken.
              </p>
              <p>
                Dat is precies waarom Football is Life hier begint. Niet met een
                eenmalige actie, maar met een{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  duurzaam programma
                </strong>{" "}
                dat lokaal geworteld is en lokaal wordt gedragen.
              </p>
              <p>
                In samenwerking met{" "}
                <strong style={{ color: "var(--green)" }}>UNGWERU</strong> en{" "}
                <strong style={{ color: "var(--green)" }}>St. Patrick</strong>{" "}
                — twee organisaties met diepe wortels in de community — bouwen
                we iets wat blijft.
              </p>
            </div>
          </div>
        </section>

        {/* ── Lokale partners ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Lokale partners</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                De dragers van het model.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                Zonder lokale verankering werkt geen enkel programma. UNGWERU en
                St. Patrick zijn geen uitvoerders — zij zijn mede-eigenaren.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  name: "UNGWERU",
                  role: "Lokale verankering & coördinatie",
                  desc: "Lokale organisatie in Mzuzu met diepgewortelde kennis van de gemeenschap in Soweto. UNGWERU zorgt voor lokale verankering, coördinatie en dagelijks toezicht op het programma.",
                },
                {
                  name: "St. Patrick",
                  role: "Community & scholen",
                  desc: "Lokale partnerorganisatie die de verbinding legt met buurtbewoners, coaches en scholen in en rondom Soweto. Onmisbaar voor draagvlak en lokaal vertrouwen.",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl p-7"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.12)",
                    boxShadow: "var(--shadow-sm)",
                    borderLeft: "3px solid var(--green)",
                  }}
                >
                  <p className="font-display font-bold text-xl mb-1" style={{ color: "var(--green)" }}>
                    {p.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mb-3"
                    style={{ color: "var(--orange)" }}
                  >
                    {p.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vier pijlers ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Wat we doen</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Vier pijlers van het project.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.n}
                  className="rounded-2xl p-7"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <p
                    className="font-display font-bold text-5xl leading-none mb-4"
                    style={{ color: "var(--green)", opacity: 0.15 }}
                  >
                    {p.n}
                  </p>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projectfasen (timeline) ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Label>Projectfasen</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Van start tot verankering.
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
                style={{ background: "rgba(33,77,58,0.15)" }}
              />

              <div className="space-y-0">
                {phases.map((phase, i) => (
                  <div key={phase.n} className="flex gap-6 pb-8 last:pb-0">
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 relative"
                        style={{
                          background: i === 0 ? "var(--green)" : "var(--white)",
                          border: `2px solid ${i === 0 ? "var(--green)" : "rgba(33,77,58,0.18)"}`,
                          color: i === 0 ? "white" : "var(--stone)",
                        }}
                      >
                        {phase.n}
                      </div>
                    </div>
                    <div className="pt-2 pb-0">
                      <h3
                        className="font-semibold text-base leading-snug mb-1"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Impactindicatoren ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Impact</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Zo meten we resultaat.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Doelstellingen voor fase 1. We meten wat we beloven — en
                rapporteren transparant terug aan onze donateurs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {indicators.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-5"
                  style={{ background: "var(--green-pale)", border: "1px solid rgba(33,77,58,0.10)" }}
                >
                  <p
                    className="font-display font-bold text-2xl leading-none mb-2"
                    style={{ color: "var(--green)" }}
                  >
                    {m.value}
                  </p>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--charcoal)" }}>
                    {m.label}
                  </p>
                  <p className="text-xs" style={{ color: "var(--stone)" }}>
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kostenopbouw + donatie ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Projectdoel</Label>
              <p
                className="font-display font-extrabold leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  color: "var(--orange)",
                  letterSpacing: "-0.03em",
                }}
              >
                € 15.000
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
                Totaal nodig voor het veld, de trainersopleiding en 2 jaar
                begeleiding ter plaatse in Mzuzu.
              </p>

              <div className="mt-6 space-y-2">
                {[
                  { a: 10, i: "1 jongere, 1 jaar betere begeleiding" },
                  { a: 50, i: "Bijdrage aan coachontwikkeling" },
                  { a: 100, i: "Trainingen en life skills" },
                ].map((tile) => (
                  <Link
                    key={tile.a}
                    href="/doneren"
                    className="flex items-center justify-between rounded-xl p-4 border transition-colors group"
                    style={{ borderColor: "var(--border)", background: "var(--white)" }}
                  >
                    <div>
                      <span className="font-bold text-sm" style={{ color: "var(--charcoal)" }}>
                        € {tile.a}
                      </span>
                      <span className="mx-2 text-xs" style={{ color: "var(--stone)" }}>—</span>
                      <span className="text-sm" style={{ color: "var(--stone)" }}>{tile.i}</span>
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform" style={{ color: "var(--stone)" }}>→</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/doneren"
                className="mt-6 inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-base text-white hover:opacity-85 transition-opacity"
                style={{ background: "var(--orange)" }}
              >
                Doneer nu →
              </Link>
            </div>

            <div>
              <Label>Bestedingsoverzicht</Label>
              <div className="space-y-0">
                {costBreakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="font-display font-bold text-sm flex-shrink-0 mt-0.5 w-6 text-right"
                      style={{ color: "var(--orange)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                        {item.item}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--stone)" }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed" style={{ color: "var(--stone)", opacity: 0.75 }}>
                Als ANBI-erkende instelling zijn donaties aan Football is Life
                fiscaal aftrekbaar. Financiële verantwoording is beschikbaar via
                het bestuur.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" />
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Help mee bouwen.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              € 10 = 1 jongere, 1 jaar betere begeleiding.
              <br />
              € 15.000 = een heel community-project.
            </p>
            <Link
              href="/doneren"
              className="mt-8 inline-flex items-center px-9 py-4 rounded-full font-semibold text-lg text-white hover:opacity-85 transition-opacity"
              style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
            >
              Doneer nu →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
