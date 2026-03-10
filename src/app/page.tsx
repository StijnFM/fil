"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Pitch background with grass stripes + field markings ── */
function PitchDecor({
  opacity = 0.18,
  stroke = "white",
  stripes = true,
}: {
  opacity?: number;
  stroke?: string;
  stripes?: boolean;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 120 80"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {stripes && (
          <pattern id="grass" x="0" y="0" width="10" height="80" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="80" fill="rgba(255,255,255,0.028)" />
            <rect x="5" y="0" width="5" height="80" fill="rgba(0,0,0,0.018)" />
          </pattern>
        )}
      </defs>
      {stripes && <rect width="120" height="80" fill="url(#grass)" />}
      <g stroke={stroke} strokeWidth="0.7" fill="none" style={{ opacity }}>
        {/* Outer boundary */}
        <rect x="4" y="4" width="112" height="72" />
        {/* Centre line */}
        <line x1="60" y1="4" x2="60" y2="76" />
        {/* Centre circle */}
        <circle cx="60" cy="40" r="10" />
        <circle cx="60" cy="40" r="1.1" fill={stroke} stroke="none" />
        {/* Left penalty area */}
        <rect x="4" y="21" width="18" height="38" />
        <rect x="4" y="29" width="7" height="22" />
        <circle cx="16" cy="40" r="1.1" fill={stroke} stroke="none" />
        <path d="M 22 29 A 11 11 0 0 1 22 51" />
        {/* Right penalty area */}
        <rect x="98" y="21" width="18" height="38" />
        <rect x="109" y="29" width="7" height="22" />
        <circle cx="104" cy="40" r="1.1" fill={stroke} stroke="none" />
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

/* ── Section label ──────────────────────────────────── */
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

/* ── Hero ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-background pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20 grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px] gap-8 md:gap-14 items-center">
        {/* Text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "var(--orange)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              Stichting · ANBI · Nijmegen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="font-display font-extrabold leading-[1.0] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Voetbal als
            <br />
            ingang naar
            <br />
            ontwikkeling.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
            className="mt-6 text-lg leading-relaxed max-w-lg"
            style={{ color: "var(--stone)" }}
          >
            Football is Life geeft jongeren die buiten beeld blijven via lokale
            coaches toegang tot begeleiding, life skills en nieuwe kansen. In
            Soweto, Malawi — en verder.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.38, ease }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <Link
              href="/doneren"
              className="px-7 py-3.5 rounded-full font-semibold text-white text-base hover:opacity-85 transition-opacity"
              style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
            >
              Doneer nu
            </Link>
            <Link
              href="/project"
              className="px-7 py-3.5 rounded-full font-semibold text-base border transition-colors"
              style={{
                color: "var(--green)",
                borderColor: "rgba(33,77,58,0.25)",
                background: "transparent",
              }}
            >
              Bekijk project →
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="mt-5 text-xs"
            style={{ color: "var(--stone)" }}
          >
            ANBI-erkende stichting · Donaties fiscaal aftrekbaar · RSIN 868370873
          </motion.p>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease }}
        >
          <div className="relative">
            <ImagePlaceholder
              label="(Afb A)"
              description="Jongeren voetballen in Soweto"
              aspect="4/5"
              className="md:rounded-3xl"
            />

            {/* Floating info card */}
            <div
              className="absolute -bottom-4 -left-4 md:-left-6 rounded-2xl p-4 pr-6"
              style={{
                background: "var(--white)",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-display font-bold text-2xl leading-none"
                style={{ color: "var(--green)" }}
              >
                € 15.000
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--stone)" }}>
                projectdoel fase 1
              </p>
              <div className="flex gap-1.5 mt-3">
                {["UNGWERU", "St. Patrick"].map((p) => (
                  <span
                    key={p}
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                    style={{
                      background: "var(--green-pale)",
                      color: "var(--green)",
                      border: "1px solid rgba(33,77,58,0.12)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Location badge */}
            <div
              className="absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
              style={{
                background: "rgba(31,36,33,0.70)",
                color: "rgba(246,241,232,0.85)",
              }}
            >
              Soweto, Mzuzu — Malawi
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Marquee ─────────────────────────────────────────── */
function Marquee() {
  const items = [
    "Football is Life",
    "Coaching",
    "Life Skills",
    "Soweto · Malawi",
    "UNGWERU",
    "St. Patrick",
    "Lokale coaches",
    "Community",
    "ANBI-erkend",
    "Mzuzu",
  ];
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden py-3.5 border-y"
      style={{ background: "var(--green)", borderColor: "var(--green-dark)" }}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-bold text-sm tracking-wider mx-5"
            style={{ color: "rgba(246,241,232,0.65)" }}
          >
            {item}
            <span className="mx-5 opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Verhaal — full-width visual storytelling ──────── */
function Verhaal() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease }}
        >
          <ImagePlaceholder
            label="(Afb B)"
            description="Panorama: het voetbalveld en de community in Soweto"
            aspect="21/9"
            className="mb-12"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
          >
            <Label>Ons verhaal</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              De kracht
              <br />
              van voetbal.
            </h2>
            <div
              className="w-12 h-1 mt-5 rounded-full"
              style={{ background: "var(--orange)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="space-y-4 leading-relaxed"
            style={{ color: "var(--stone)" }}
          >
            <p>
              Stel je voor: tientallen jongeren — allemaal op een veld dat
              eigenlijk geen veld mag heten. Ze lachen, ze spelen, ze genieten.
            </p>
            <p>
              Die kracht is zó groot, dat we besloten hebben er iets blijvends
              mee te doen. Zo is{" "}
              <strong style={{ color: "var(--charcoal)" }}>
                Football is Life
              </strong>{" "}
              ontstaan.
            </p>
            <p>
              Met deze stichting gebruiken we voetbal als middel om{" "}
              <strong style={{ color: "var(--green)" }}>
                communities te bouwen
              </strong>
              . Om mensen te verbinden. Om hoop, structuur en toekomst te
              brengen op plekken waar dat niet vanzelfsprekend is.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Hoe het werkt (mobile: section label + 2-col grid) ─ */
const steps = [
  {
    n: "01",
    title: "Voetbal opent de deur",
    desc: "Het voetbalveld trekt jongeren aan en creëert een veilige, vertrouwde ontmoetingsplek. Hier begint alles.",
  },
  {
    n: "02",
    title: "Coaches bouwen vertrouwen",
    desc: "Lokale jongeren worden geselecteerd en opgeleid als coach. Zij zijn rolmodellen uit de eigen community.",
  },
  {
    n: "03",
    title: "Life skills geven richting",
    desc: "Naast voetbal is er wekelijks ruimte voor gezondheid, samenwerken en persoonlijke ontwikkeling.",
  },
  {
    n: "04",
    title: "Lokaal eigenaarschap",
    desc: "Football is Life blijft 2 jaar aanwezig. Daarna staat het lokale team er zelf voor — duurzaam verankerd.",
  },
];

function HoeHetWerkt() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-12"
        >
          <Label>Onze aanpak</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight max-w-xl"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Zo werkt het model.
          </h2>
          <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
            Voetbal is de ingang — coaching en life skills zijn de inhoud.
            Lokale partners zijn de dragers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="rounded-2xl p-6"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p
                className="font-display font-bold text-4xl leading-none mb-4"
                style={{ color: "var(--green)", opacity: 0.18 }}
              >
                {step.n}
              </p>
              <h3
                className="font-display font-bold text-base leading-snug mb-2"
                style={{ color: "var(--charcoal)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Project Soweto ──────────────────────────────────── */
function ProjectSoweto() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <Label>Huidig project</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Communityproject
            <br />
            in Soweto.
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
            In Soweto — de armste wijk van Mzuzu, Malawi — bouwen we samen met
            lokale partners een voetbalveld, leiden we coaches op en brengen we
            life skills naar jongeren die dat het hardst nodig hebben.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--stone)", opacity: 0.75 }}>
            In samenwerking met{" "}
            <strong style={{ color: "var(--charcoal)" }}>UNGWERU</strong> en{" "}
            <strong style={{ color: "var(--charcoal)" }}>St. Patrick</strong>{" "}
            — twee lokaal gewortelde partners die de uitvoering dragen.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/project"
              className="px-6 py-3 rounded-full font-semibold text-white text-sm hover:opacity-85 transition-opacity"
              style={{ background: "var(--green)" }}
            >
              Meer over dit project →
            </Link>
            <Link
              href="/doneren"
              className="px-6 py-3 rounded-full font-semibold text-sm border transition-colors"
              style={{
                color: "var(--orange)",
                borderColor: "rgba(201,107,44,0.30)",
              }}
            >
              Steun het project
            </Link>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="space-y-4"
        >
          <ImagePlaceholder
            label="(Afb C)"
            description="Coaches trainen jongeren op het veld"
            aspect="4/3"
          />

          {/* Quick stats below image */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: "€ 15.000", l: "Projectdoel" },
              { v: "2 jaar", l: "Begeleiding" },
              { v: "60–80", l: "Jongeren" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl p-3 text-center"
                style={{
                  background: "var(--green-pale)",
                  border: "1px solid rgba(33,77,58,0.10)",
                }}
              >
                <p
                  className="font-bold text-sm leading-none"
                  style={{ color: "var(--green)" }}
                >
                  {s.v}
                </p>
                <p
                  className="text-xs mt-1 leading-tight"
                  style={{ color: "var(--stone)" }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Lokale partners ─────────────────────────────────── */
const partners = [
  {
    name: "UNGWERU",
    role: "Lokale verankering & coördinatie",
    desc: "Diepgewortelde kennis van de gemeenschap in Soweto. UNGWERU zorgt voor lokale verankering en draagt de dagelijkse coördinatie van het project.",
  },
  {
    name: "St. Patrick",
    role: "Community & scholen",
    desc: "Legt de verbinding met buurtbewoners, coaches en scholen in en rondom Soweto. Onmisbaar voor draagvlak en lokaal vertrouwen.",
  },
];

function LokalePartners() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <Label>Lokale partners</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Geworteld in de community.
          </h2>
          <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
            UNGWERU en St. Patrick zijn geen footnoot — zij zijn de dragers van
            het model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="rounded-2xl p-7"
              style={{
                background: "var(--white)",
                border: "1px solid rgba(33,77,58,0.12)",
                boxShadow: "var(--shadow-sm)",
                borderLeft: "3px solid var(--green)",
              }}
            >
              <p
                className="font-display font-bold text-xl mb-1"
                style={{ color: "var(--green)" }}
              >
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
            </motion.div>
          ))}
        </div>

        {/* Partner image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-8"
        >
          <ImagePlaceholder
            label="(Afb E)"
            description="Lokale samenwerking: UNGWERU en St. Patrick in actie"
            aspect="21/9"
            dark={false}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Impact meting ───────────────────────────────────── */
const metrics = [
  { value: "60–80", label: "Jongeren bereikt", sub: "doelstelling fase 1" },
  { value: "4–6", label: "Coaches opgeleid", sub: "lokale rolmodellen" },
  { value: "3×", label: "Trainingen p/week", sub: "per groep" },
  { value: "Wekelijks", label: "Life skills sessies", sub: "naast training" },
  { value: "2 jaar", label: "Begeleiding", sub: "ter plaatse" },
];

function ImpactMeting() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 grid md:grid-cols-2 gap-8 items-end"
        >
          <div>
            <Label>Impact</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              Zo meten we impact.
            </h2>
          </div>
          <p className="text-sm leading-relaxed md:text-right" style={{ color: "var(--stone)" }}>
            We meten wat we beloven. Onderstaande indicatoren zijn de
            doelstellingen voor fase 1 van het project in Soweto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="rounded-2xl p-5 text-center"
              style={{
                background: "var(--green-pale)",
                border: "1px solid rgba(33,77,58,0.10)",
              }}
            >
              <p
                className="font-display font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  color: "var(--green)",
                }}
              >
                {m.value}
              </p>
              <p
                className="text-xs font-semibold leading-snug mb-1"
                style={{ color: "var(--charcoal)" }}
              >
                {m.label}
              </p>
              <p className="text-xs" style={{ color: "var(--stone)" }}>
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Groeipad ────────────────────────────────────────── */
const growth = [
  {
    loc: "Soweto",
    city: "Mzuzu, Malawi",
    status: "In uitvoering",
    statusColor: "var(--orange)",
    desc: "Ons eerste project. Dit wordt de blauwdruk voor wat volgt.",
    active: true,
  },
  {
    loc: "Mzuzu",
    city: "Malawi",
    status: "Groeiplan",
    statusColor: "var(--blue-grey)",
    desc: "Uitbreiding binnen Mzuzu met het bewezen model en lokale coaches.",
    active: false,
  },
  {
    loc: "Rumphi & Nkhata Bay",
    city: "Malawi",
    status: "Toekomst",
    statusColor: "var(--blue-grey)",
    desc: "Verdere doorgroei naar andere regio's in Malawi.",
    active: false,
  },
];

function Groeipad() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <Label>Groeipad</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Stap voor stap verder.
          </h2>
          <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
            We beginnen klein, grondig en lokaal verankerd. Daarna groeien we.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {growth.map((g, i) => (
            <motion.div
              key={g.loc}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="rounded-2xl p-6 relative"
              style={{
                background: g.active ? "var(--white)" : "rgba(246,241,232,0.6)",
                border: g.active
                  ? "1px solid rgba(33,77,58,0.18)"
                  : "1px solid var(--border)",
                boxShadow: g.active ? "var(--shadow-md)" : "none",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="font-display font-bold text-3xl leading-none"
                  style={{ color: g.active ? "var(--green)" : "var(--stone)", opacity: 0.22 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: g.active
                      ? "rgba(201,107,44,0.10)"
                      : "rgba(102,112,106,0.10)",
                    color: g.statusColor,
                  }}
                >
                  {g.status}
                </span>
              </div>
              <h3
                className="font-display font-bold text-lg leading-snug mb-1"
                style={{ color: g.active ? "var(--green)" : "var(--stone)" }}
              >
                {g.loc}
              </h3>
              <p
                className="text-xs font-semibold mb-3"
                style={{ color: "var(--orange)", opacity: g.active ? 1 : 0.5 }}
              >
                {g.city}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                {g.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Doneer sectie ───────────────────────────────────── */
const donationTiles = [
  { amount: 10, impact: "1 jongere, 1 jaar betere begeleiding" },
  { amount: 50, impact: "Bijdrage aan coachontwikkeling" },
  { amount: 100, impact: "Trainingen en life skills" },
];

function DoneerSectie() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "var(--green)" }}
    >
      <PitchDecor opacity={0.22} stroke="white" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(246,241,232,0.50)" }}
          >
            Doe mee
          </p>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              color: "rgba(246,241,232,0.95)",
              letterSpacing: "-0.02em",
            }}
          >
            Bouw mee aan
            <br />
            Soweto.
          </h2>
          <p
            className="mt-5 text-base leading-relaxed"
            style={{ color: "rgba(246,241,232,0.60)" }}
          >
            Elke bijdrage versterkt het lokale team, de coaches en de jongeren
            die meedoen. Word partner of doneer een eenmalig bedrag.
          </p>
          <Link
            href="/doneren"
            className="mt-7 inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-base hover:opacity-85 transition-opacity"
            style={{ background: "var(--orange)", color: "white" }}
          >
            Ga naar de donatietools →
          </Link>

          <div className="mt-8">
            <ImagePlaceholder
              label="(Afb D)"
              description="Close-up: blije jongeren na een training"
              aspect="16/9"
              className="rounded-xl"
            />
          </div>
        </motion.div>

        {/* Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="space-y-3"
        >
          {donationTiles.map((tile, i) => (
            <Link
              key={tile.amount}
              href="/doneren"
              className="flex items-center justify-between rounded-2xl p-5 transition-all duration-200 group"
              style={{
                background: "rgba(246,241,232,0.06)",
                border: "1px solid rgba(246,241,232,0.10)",
              }}
            >
              <div>
                <p
                  className="font-display font-bold text-xl leading-none"
                  style={{ color: "rgba(246,241,232,0.92)" }}
                >
                  € {tile.amount}
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "rgba(246,241,232,0.50)" }}
                >
                  {tile.impact}
                </p>
              </div>
              <span
                className="text-lg group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: "rgba(246,241,232,0.35)" }}
              >
                →
              </span>
            </Link>
          ))}
          <Link
            href="/doneren"
            className="flex items-center justify-between rounded-2xl p-5 transition-all duration-200 group"
            style={{
              background: "rgba(201,107,44,0.15)",
              border: "1px solid rgba(201,107,44,0.25)",
            }}
          >
            <div>
              <p
                className="font-display font-bold text-xl leading-none"
                style={{ color: "rgba(246,241,232,0.92)" }}
              >
                Eigen bedrag
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "rgba(201,107,44,0.70)" }}
              >
                Voor partners en sponsors
              </p>
            </div>
            <span
              className="text-lg group-hover:translate-x-1 transition-transform duration-200"
              style={{ color: "rgba(201,107,44,0.60)" }}
            >
              →
            </span>
          </Link>
          <p
            className="text-xs text-center pt-1"
            style={{ color: "rgba(246,241,232,0.28)" }}
          >
            ANBI-erkend · Donaties fiscaal aftrekbaar
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      className="border-t pt-14 pb-8 px-4 sm:px-6"
      style={{ background: "var(--charcoal)", borderColor: "rgba(246,241,232,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top: brand + CTA */}
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center pb-10 mb-10 border-b" style={{ borderColor: "rgba(246,241,232,0.08)" }}>
          <div>
            <p
              className="font-display font-extrabold text-2xl tracking-tight"
              style={{ color: "rgba(246,241,232,0.90)" }}
            >
              Football is Life
            </p>
            <p
              className="text-sm italic mt-1"
              style={{ color: "rgba(201,107,44,0.65)" }}
            >
              Pass it on.
            </p>
          </div>
          <Link
            href="/doneren"
            className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-85"
            style={{ background: "var(--orange)" }}
          >
            Steun het project →
          </Link>
        </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Info */}
        <div className="md:col-span-2">
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(246,241,232,0.40)" }}
          >
            Stichting Football is Life gebruikt voetbal als ingang naar
            coaching, life skills en ontwikkeling voor jongeren in Malawi.
          </p>
          <p
            className="text-xs mt-4"
            style={{ color: "rgba(246,241,232,0.22)" }}
          >
            ANBI-erkend · RSIN 868370873 · KvK Nijmegen
          </p>
        </div>

        {/* Bestuur */}
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(246,241,232,0.28)" }}
          >
            Bestuur
          </p>
          <ul className="space-y-2 text-sm" style={{ color: "rgba(246,241,232,0.45)" }}>
            {[
              { name: "Paul van Zwam", role: "Voorzitter" },
              { name: "Ivo Spanjersberg", role: "Secretaris" },
              { name: "Mano Radema", role: "Penningmeester" },
            ].map((m) => (
              <li key={m.name}>
                <span style={{ color: "rgba(246,241,232,0.70)" }}>{m.name}</span>
                <span className="mx-1.5 opacity-30">—</span>
                {m.role}
              </li>
            ))}
          </ul>
          <p
            className="text-xs mt-3"
            style={{ color: "rgba(246,241,232,0.20)" }}
          >
            Onbezoldigd bestuur
          </p>
        </div>

        {/* Links + contact */}
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(246,241,232,0.28)" }}
          >
            Contact
          </p>
          <address
            className="not-italic text-sm leading-relaxed mb-4"
            style={{ color: "rgba(246,241,232,0.45)" }}
          >
            Dobbelmannweg 128
            <br />
            6531 KZ Nijmegen
          </address>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/project"
              className="hover:opacity-75 transition-opacity"
              style={{ color: "rgba(246,241,232,0.40)" }}
            >
              Project Soweto
            </Link>
            <Link
              href="/over-ons"
              className="hover:opacity-75 transition-opacity"
              style={{ color: "rgba(246,241,232,0.40)" }}
            >
              Over ons
            </Link>
            <Link
              href="/doneren"
              className="font-semibold hover:opacity-75 transition-opacity"
              style={{ color: "var(--orange)" }}
            >
              Doneren →
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mt-12 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        style={{ borderColor: "rgba(246,241,232,0.07)" }}
      >
        <p className="text-xs" style={{ color: "rgba(246,241,232,0.18)" }}>
          © {new Date().getFullYear()} Football is Life
        </p>
        <p className="text-xs" style={{ color: "rgba(246,241,232,0.14)" }}>
          Alle inkomsten gaan naar het project
        </p>
      </div>
      </div>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Verhaal />
        <HoeHetWerkt />
        <ProjectSoweto />
        <LokalePartners />
        <ImpactMeting />
        <Groeipad />
        <DoneerSectie />
      </main>
      <Footer />
    </>
  );
}
