import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Project Soweto — Football is Life",
  description:
    "Communityproject in Soweto, de armste wijk van Mzuzu (Malawi). In samenwerking met UNGWERU en St. Patrick bouwen we een voetbalveld en een veilige plek voor de community.",
};

const pillars = [
  {
    number: "01",
    title: "Voetbalveld",
    desc: "We bouwen een voetbalveld en creëren een veilige ontmoetingsplek waar buurtbewoners elkaar kunnen ontmoeten, spelen en groeien.",
    color: "var(--grass)",
  },
  {
    number: "02",
    title: "Lokale coaches",
    desc: "Jongeren worden getraind door lokale coaches. Football is Life leidt deze coaches samen met de partners op — zodat kennis in de community blijft.",
    color: "var(--amber)",
  },
  {
    number: "03",
    title: "Educatie",
    desc: "Naast voetbal is er ruimte voor educatie en voorlichting — over gezondheid, samenwerken en persoonlijke ontwikkeling.",
    color: "var(--primary)",
  },
  {
    number: "04",
    title: "Begeleiding",
    desc: "Football is Life blijft 2 jaar aanwezig na oplevering. Een plek waar sport, ontwikkeling en verbinding samenkomen — duurzaam ingebed.",
    color: "var(--earth-light)",
  },
];

const partners = [
  {
    name: "UNGWERU",
    desc: "Lokale organisatie in Mzuzu met diepgewortelde kennis van de gemeenschap in Soweto. UNGWERU zorgt voor lokale verankering en coördinatie.",
  },
  {
    name: "St. Patrick",
    desc: "Lokale partnerorganisatie die de verbinding legt met buurtbewoners, coaches en scholen in en rondom Soweto.",
  },
];

const costBreakdown = [
  { item: "Aanleg voetbalveld", detail: "Grondwerk, doelen, afrastering, markeringen" },
  { item: "Sportmateriaal", detail: "Voetballen, hesjes, pionnen en trainingsmateriaal" },
  { item: "Trainersopleiding", detail: "Opleiding en begeleiding van lokale coaches" },
  { item: "2 jaar projectbegeleiding", detail: "Football is Life ter plaatse in Mzuzu" },
];

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-16">
          {/* Pitch lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 120 80"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            style={{ opacity: 0.10 }}
          >
            <g stroke="white" strokeWidth="0.5" fill="none">
              <rect x="4" y="4" width="112" height="72" />
              <line x1="60" y1="4" x2="60" y2="76" />
              <circle cx="60" cy="40" r="10" />
              <circle cx="60" cy="40" r="0.9" fill="white" stroke="none" />
              <rect x="4" y="21" width="18" height="38" />
              <rect x="4" y="29" width="7" height="22" />
              <circle cx="16" cy="40" r="0.9" fill="white" stroke="none" />
              <path d="M 22 29 A 11 11 0 0 1 22 51" />
              <rect x="98" y="21" width="18" height="38" />
              <rect x="109" y="29" width="7" height="22" />
              <circle cx="104" cy="40" r="0.9" fill="white" stroke="none" />
              <path d="M 98 29 A 11 11 0 0 0 98 51" />
            </g>
          </svg>

          {/* Ambient orb */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: "var(--grass)", opacity: 0.2 }}
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
            {/* Location badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
              style={{
                borderColor: "rgba(245,166,35,0.3)",
                background: "rgba(245,166,35,0.08)",
              }}
            >
              <span aria-hidden>📍</span>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--amber)" }}
              >
                Soweto, Mzuzu — Malawi
              </span>
            </div>

            <h1
              className="font-display font-black text-foreground leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(4rem, 16vw, 13rem)" }}
            >
              SOWETO.
            </h1>
            <p
              className="font-display font-black italic mt-2"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                color: "rgba(254,249,240,0.45)",
              }}
            >
              Communityproject in Mzuzu, Malawi.
            </p>
          </div>
        </section>

        {/* ── Intro (cream) ── */}
        <section style={{ background: "var(--cream)" }} className="py-24 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(12,26,13,0.4)" }}
              >
                Achtergrond
              </p>
              <h2
                className="font-display font-black leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "var(--pitch-dark)",
                }}
              >
                De armste wijk van Mzuzu.
              </h2>
              <div
                className="w-14 h-1 mt-4 rounded-full"
                style={{ background: "var(--primary)" }}
              />
            </div>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(12,26,13,0.70)" }}
            >
              <p>
                In samenwerking met de organisaties{" "}
                <strong style={{ color: "var(--pitch-dark)" }}>UNGWERU</strong>{" "}
                en{" "}
                <strong style={{ color: "var(--pitch-dark)" }}>St. Patrick</strong>{" "}
                ondersteunt Football is Life een bijzonder project in Soweto — de
                armste wijk van Mzuzu, Malawi.
              </p>
              <p>
                Het doel: via voetbal de gemeenschapszin versterken, lokale trots
                opbouwen en mensen een plek geven om te groeien.
              </p>
              <p>
                Football is Life levert sportmateriaal, begeleidt de aanleg van
                het veld en traint lokale leiders. Samen met onze partners zorgen
                we dat dit project{" "}
                <strong style={{ color: "var(--pitch-dark)" }}>
                  lokaal gedragen en duurzaam ingebed
                </strong>{" "}
                wordt.
              </p>
            </div>
          </div>
        </section>

        {/* ── What we build (4 pillars) ── */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--amber)" }}
            >
              Wat we bouwen
            </p>
            <h2
              className="font-display font-black text-foreground mb-12"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Vier pijlers van het project.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className="glass-card rounded-2xl p-8"
                >
                  <p
                    className="font-display font-black text-6xl leading-none mb-4"
                    style={{ color: p.color, opacity: 0.25 }}
                  >
                    {p.number}
                  </p>
                  <h3
                    className="font-display font-black text-foreground mb-3"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-foreground/55 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--amber)" }}
            >
              Lokale partners
            </p>
            <h2
              className="font-display font-black text-foreground mb-12"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Geworteld in de community.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-2xl p-8 border"
                  style={{
                    borderColor: "rgba(245,166,35,0.2)",
                    background: "rgba(245,166,35,0.04)",
                  }}
                >
                  <p
                    className="font-display font-black mb-3"
                    style={{
                      fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                      color: "var(--amber)",
                    }}
                  >
                    {partner.name}
                  </p>
                  <p className="text-foreground/55 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cost breakdown ── */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "var(--amber)" }}
                >
                  Projectdoel
                </p>
                <p
                  className="font-display font-black text-foreground leading-none"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "var(--amber)" }}
                >
                  € 15.000
                </p>
                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "rgba(254,249,240,0.55)" }}
                >
                  Totaal nodig voor het veld, de trainersopleiding en 2 jaar
                  begeleiding ter plaatse in Mzuzu.
                </p>
                <Link
                  href="/doneren"
                  className="mt-8 inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-opacity"
                  style={{ boxShadow: "var(--glow-orange)" }}
                >
                  Help mee bouwen →
                </Link>
              </div>

              <div className="space-y-4">
                {costBreakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-b"
                    style={{ borderColor: "var(--glass-border)" }}
                  >
                    <span
                      className="font-display font-black text-lg flex-shrink-0 mt-0.5"
                      style={{ color: "var(--amber)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-bold text-foreground text-sm">
                        {item.item}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "rgba(254,249,240,0.4)" }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA (orange) ── */}
        <section
          className="py-28 px-6 text-center relative overflow-hidden"
          style={{ background: "var(--amber)" }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 120 80"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            style={{ opacity: 0.06 }}
          >
            <g stroke="#0c1a0d" strokeWidth="0.5" fill="none">
              <rect x="4" y="4" width="112" height="72" />
              <circle cx="60" cy="40" r="10" />
              <line x1="60" y1="4" x2="60" y2="76" />
            </g>
          </svg>

          <div className="relative z-10 max-w-xl mx-auto">
            <h2
              className="font-display font-black text-pitch-dark leading-tight"
              style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
            >
              HELP MEE.
            </h2>
            <p
              className="font-display font-black italic mt-2"
              style={{
                fontSize: "clamp(1.3rem, 3vw, 2.5rem)",
                color: "rgba(12,26,13,0.55)",
              }}
            >
              Bouw mee aan Soweto.
            </p>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "rgba(12,26,13,0.68)" }}
            >
              € 20 = een voetbal voor een kind in Soweto.
              <br />
              € 15.000 = een heel community-project.
            </p>
            <Link
              href="/doneren"
              className="mt-10 inline-flex items-center px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-opacity"
              style={{ background: "var(--pitch-dark)", color: "var(--amber)" }}
            >
              Doneer nu →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
