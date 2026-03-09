"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar as SharedNavbar } from "@/components/Navbar";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Reusable pitch SVG markings ─────────────────── */
function PitchLines({ opacity = 0.11 }: { opacity?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 120 80"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="0.5" fill="none" style={{ opacity }}>
        <rect x="4" y="4" width="112" height="72" />
        <line x1="60" y1="4" x2="60" y2="76" />
        <circle cx="60" cy="40" r="10" />
        <circle cx="60" cy="40" r="0.9" fill="white" stroke="none" />
        {/* Left penalty area */}
        <rect x="4" y="21" width="18" height="38" />
        <rect x="4" y="29" width="7" height="22" />
        <circle cx="16" cy="40" r="0.9" fill="white" stroke="none" />
        <path d="M 22 29 A 11 11 0 0 1 22 51" />
        {/* Right penalty area */}
        <rect x="98" y="21" width="18" height="38" />
        <rect x="109" y="29" width="7" height="22" />
        <circle cx="104" cy="40" r="0.9" fill="white" stroke="none" />
        <path d="M 98 29 A 11 11 0 0 0 98 51" />
        {/* Corner arcs */}
        <path d="M 7,4 A 3,3 0 0,1 4,7" />
        <path d="M 113,4 A 3,3 0 0,0 116,7" />
        <path d="M 4,73 A 3,3 0 0,0 7,76" />
        <path d="M 116,73 A 3,3 0 0,1 113,76" />
      </g>
    </svg>
  );
}

/* ─── Navbar ───────────────────────────────────────── */
function Navbar() {
  return <SharedNavbar />;
}

/* ─── Hero ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <PitchLines opacity={0.11} />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "var(--grass)", opacity: 0.18 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "var(--amber)", opacity: 0.13 }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-32">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
          style={{
            borderColor: "rgba(245,166,35,0.3)",
            background: "rgba(245,166,35,0.08)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse-glow"
            style={{ background: "var(--amber)" }}
          />
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: "var(--amber)" }}
          >
            Stichting · Nijmegen · ANBI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <h1
            className="font-display font-black text-foreground leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(4.5rem, 18vw, 15rem)" }}
          >
            FOOTBALL
            <br />
            IS LIFE.
          </h1>
          <p
            className="font-display font-black italic leading-none mt-2"
            style={{
              fontSize: "clamp(2rem, 8vw, 7rem)",
              color: "var(--amber)",
            }}
          >
            Pass it on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          <p className="text-foreground/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mt-8">
            Elk jaar gaan we naar Afrika met een zak voetballen. Wat er dan
            gebeurt, is magisch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/doneren"
              className="px-8 py-4 rounded-full bg-primary text-white font-bold text-base hover:opacity-90 transition-opacity"
              style={{ boxShadow: "var(--glow-orange)" }}
            >
              Doneer nu
            </Link>
            <Link
              href="/project"
              className="px-8 py-4 rounded-full border text-foreground font-bold text-base hover:bg-glass-bg transition-colors"
              style={{ borderColor: "var(--glass-border)" }}
            >
              Ons project →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll pulse */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ opacity: [0.2, 0.7, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-foreground/30 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

/* ─── Marquee ──────────────────────────────────────── */
function Marquee() {
  const items = [
    "FOOTBALL IS LIFE",
    "PASS IT ON",
    "SOWETO · MALAWI",
    "UNGWERU",
    "ST. PATRICK",
    "COMMUNITY",
    "STICHTING",
    "MZUZU",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: "var(--amber)" }}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-black text-2xl tracking-widest mx-6"
            style={{ color: "var(--pitch-dark)" }}
          >
            {item}
            <span className="mx-6 opacity-40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Mission (cream/daylight section) ─────────────── */
function Mission() {
  return (
    <section style={{ background: "var(--cream)" }} className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="font-display font-black leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              color: "var(--pitch-dark)",
            }}
          >
            "De verbindende kracht van voetbal."
          </p>
          <div
            className="w-14 h-1 mt-6 rounded-full"
            style={{ background: "var(--primary)" }}
          />
          <p
            className="text-sm mt-3 font-semibold tracking-widest uppercase"
            style={{ color: "rgba(12,26,13,0.4)" }}
          >
            Football is Life — Pass it on
          </p>

          {/* Bestuur */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(12,26,13,0.1)" }}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(12,26,13,0.4)" }}
            >
              Bestuur
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(12,26,13,0.6)" }}>
              {[
                { name: "Paul van Zwam", role: "Voorzitter" },
                { name: "Ivo Spanjersberg", role: "Secretaris" },
                { name: "Mano Radema", role: "Penningmeester" },
              ].map((m) => (
                <li key={m.name}>
                  <strong style={{ color: "var(--pitch-dark)" }}>{m.name}</strong>
                  <span className="mx-1.5 opacity-40">—</span>
                  {m.role}
                </li>
              ))}
            </ul>
            <p className="text-xs mt-3" style={{ color: "rgba(12,26,13,0.35)" }}>
              Onbezoldigd bestuur · Alle inkomsten gaan naar het project
            </p>
          </div>
        </motion.div>

        {/* Body copy — real text from the site */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="space-y-5 text-lg leading-relaxed"
          style={{ color: "rgba(12,26,13,0.72)" }}
        >
          <p>
            Binnen no-time sta je midden tussen honderden mensen — kinderen,
            ouders, jongeren — allemaal op een veld dat eigenlijk geen veld mag
            heten. Ze lachen, ze spelen, ze genieten.
          </p>
          <p>
            Die kracht is zó groot, dat we besloten hebben er iets blijvends mee
            te doen. Zo is{" "}
            <strong style={{ color: "var(--pitch-dark)" }}>
              Football is Life
            </strong>{" "}
            ontstaan.
          </p>
          <p>
            Met deze stichting gebruiken we voetbal als middel om{" "}
            <strong style={{ color: "var(--primary)" }}>
              communities te bouwen
            </strong>
            . Om mensen te verbinden. Om hoop, structuur en toekomst te brengen
            op plekken waar dat niet vanzelfsprekend is.
          </p>
          <p>
            In de communities die we ondersteunen, krijgen kinderen de kans om
            samen te spelen, samen te trainen — maar ook om samen te leren. Over
            gezondheid. Over educatie. Over samenwerken.
          </p>
          <p>
            Het voetbalveld is daarbij de verbindende factor —{" "}
            <strong style={{ color: "var(--pitch-dark)" }}>
              het hart van de community.
            </strong>
          </p>

          <div className="pt-4">
            <Link
              href="https://football-is-life.nl/over-ons/"
              className="inline-flex items-center gap-2 font-bold text-base hover:opacity-70 transition-opacity"
              style={{ color: "var(--primary)" }}
            >
              Meer over de stichting →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Stats ────────────────────────────────────────── */
const stats = [
  {
    value: "€ 15.000",
    label: "Projectdoel",
    desc: "Totaal nodig voor het veld, trainersopleiding en 2 jaar begeleiding in Soweto, Mzuzu",
  },
  {
    value: "1",
    label: "Project in uitvoering",
    desc: "Soweto — de armste wijk van Mzuzu, Malawi. Eerste project, blauwdruk voor meer.",
  },
  {
    value: "2 jaar",
    label: "Begeleiding ter plaatse",
    desc: "Football is Life blijft aanwezig na oplevering van het veld",
  },
];

function Stats() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <p
              className="font-display font-black leading-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "var(--amber)",
              }}
            >
              {stat.value}
            </p>
            <p className="font-bold text-foreground text-base mt-2">
              {stat.label}
            </p>
            <p className="text-foreground/45 text-sm mt-3 leading-relaxed">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Project ──────────────────────────────────────── */
function Project() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-semibold tracking-widest text-sm uppercase mb-4"
          style={{ color: "var(--amber)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Huidig project
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="rounded-3xl overflow-hidden border"
          style={{
            background: "var(--gradient-navy)",
            borderColor: "rgba(245,166,35,0.15)",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Visual panel */}
            <div
              className="relative min-h-72 md:min-h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0c1a0d 0%, #1a3d1c 60%, #0d1a10 100%)",
              }}
            >
              {/* Mini pitch */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 60 40"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <g stroke="white" strokeWidth="0.4" fill="none" opacity="0.11">
                  <rect x="2" y="2" width="56" height="36" />
                  <circle cx="30" cy="20" r="7" />
                  <line x1="30" y1="2" x2="30" y2="38" />
                  <rect x="2" y="10" width="9" height="20" />
                  <rect x="49" y="10" width="9" height="20" />
                </g>
              </svg>

              {/* Location badge */}
              <div className="absolute top-6 left-6">
                <span
                  className="rounded-full px-4 py-2 text-sm font-semibold text-foreground"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  📍 Soweto, Mzuzu — Malawi
                </span>
              </div>

              {/* Partners */}
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Partners
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["UNGWERU", "St. Patrick"].map((p) => (
                    <span
                      key={p}
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        background: "rgba(245,166,35,0.15)",
                        border: "1px solid rgba(245,166,35,0.3)",
                        color: "var(--amber)",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative number */}
              <p
                className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(6rem, 12vw, 10rem)",
                  color: "rgba(255,255,255,0.04)",
                }}
              >
                01
              </p>
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center">
              <h2
                className="font-display font-black text-foreground leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                Bouw mee aan de voetbalclub van Soweto
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/60">
                In Soweto — de armste wijk van Mzuzu — bouwen we een voetbalveld
                en een veilige ontmoetingsplek. Lokale coaches worden opgeleid.
                Naast voetbal is er ruimte voor educatie, voorlichting en
                psychologische ondersteuning.
              </p>
              <p className="mt-3 text-sm text-foreground/35 leading-relaxed">
                Football is Life levert sportmateriaal, begeleidt de aanleg en
                traint lokale leiders — samen met UNGWERU en St. Patrick.
              </p>

              <div
                className="mt-6 pt-6 border-t"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground/40">Projectdoel</span>
                  <span
                    className="font-bold"
                    style={{ color: "var(--amber)" }}
                  >
                    € 15.000
                  </span>
                </div>
                <p className="text-foreground/30 text-xs">
                  Help mee dit doel te bereiken — iedere bijdrage telt
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  href="/project"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-opacity"
                >
                  Meer over het project →
                </Link>
                <Link
                  href="/doneren"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border text-foreground font-bold hover:bg-glass-bg transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                >
                  Steun dit project
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Donate CTA (orange burst) ────────────────────── */
const donationAmounts = ["€ 20", "€ 50", "€ 75", "€ 100"];

function DonateCTA() {
  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--amber)" }}
    >
      {/* Pitch lines on amber */}
      <PitchLines opacity={0.06} />
      {/* Override SVG stroke for dark-on-amber effect */}
      <style>{`
        section[data-donate] svg g { stroke: #0c1a0d !important; }
      `}</style>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="font-semibold tracking-widest text-sm uppercase mb-6"
            style={{ color: "rgba(12,26,13,0.55)" }}
          >
            Doe mee
          </p>

          <h2
            className="font-display font-black text-pitch-dark leading-tight"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          >
            DRAAG BIJ.
          </h2>
          <p
            className="font-display font-black italic mt-2 leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "rgba(12,26,13,0.55)",
            }}
          >
            Want Football is Life.
          </p>

          <p
            className="text-lg mt-6 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(12,26,13,0.7)" }}
          >
            € 20 = een voetbal voor een kind in Soweto.
            <br />
            Iedere bijdrage bouwt mee aan de community.
          </p>

          {/* Donation amounts */}
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {donationAmounts.map((a) => (
              <Link
                key={a}
                href="/doneren"
                className="px-6 py-3 rounded-full font-bold text-lg border-2 transition-all duration-200"
                style={{
                  borderColor: "rgba(12,26,13,0.25)",
                  color: "var(--pitch-dark)",
                }}
              >
                {a}
              </Link>
            ))}
            <Link
              href="/doneren"
              className="px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 hover:opacity-90"
              style={{
                background: "var(--pitch-dark)",
                color: "var(--amber)",
              }}
            >
              Eigen bedrag →
            </Link>
          </div>

          <p
            className="text-xs mt-6"
            style={{ color: "rgba(12,26,13,0.4)" }}
          >
            ANBI-erkend stichting · Donaties fiscaal aftrekbaar
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ───────────────────────────────────────── */
function Footer() {
  return (
    <footer
      className="border-t py-16 px-6"
      style={{
        background: "var(--background)",
        borderColor: "var(--glass-border)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display font-black text-foreground text-2xl tracking-tight">
            FOOTBALL IS LIFE
          </p>
          <p className="text-foreground/40 text-sm mt-2 leading-relaxed">
            Stichting Football is Life
            <br />
            Pass it on!
            <br />
            ANBI · RSIN 868370873
          </p>
        </div>

        {/* Bestuur */}
        <div>
          <p className="text-foreground/35 text-xs font-semibold tracking-widest uppercase mb-4">
            Bestuur
          </p>
          <ul className="space-y-2 text-foreground/55 text-sm">
            {[
              { name: "Paul van Zwam", role: "Voorzitter" },
              { name: "Ivo Spanjersberg", role: "Secretaris" },
              { name: "Mano Radema", role: "Penningmeester" },
            ].map((m) => (
              <li key={m.name}>
                <strong className="text-foreground/75">{m.name}</strong>
                <span className="mx-1.5 opacity-40">—</span>
                {m.role}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-foreground/35 text-xs font-semibold tracking-widest uppercase mb-4">
            Contact
          </p>
          <address className="not-italic text-foreground/55 text-sm leading-relaxed">
            Dobbelmannweg 128
            <br />
            6531 KZ Nijmegen
          </address>
          <div className="mt-6 flex gap-4">
            <Link
              href="/project"
              className="text-foreground/40 text-sm hover:text-foreground transition-colors"
            >
              Project
            </Link>
            <Link
              href="/over-ons"
              className="text-foreground/40 text-sm hover:text-foreground transition-colors"
            >
              Over ons
            </Link>
            <Link
              href="/doneren"
              className="text-amber text-sm font-semibold hover:opacity-75 transition-opacity"
            >
              Doneren
            </Link>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto mt-12 pt-8 border-t flex items-center justify-between"
        style={{ borderColor: "var(--glass-border)" }}
      >
        <p className="text-foreground/25 text-xs">
          © Football is Life. Pass it on!
        </p>
        <p className="text-foreground/20 text-xs">
          Onbezoldigd bestuur · Alle inkomsten gaan naar het project
        </p>
      </div>
    </footer>
  );
}

/* ─── Page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Mission />
        <Stats />
        <Project />
        <DonateCTA />
      </main>
      <Footer />
    </>
  );
}
