"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";
import { Footer } from "@/components/Footer";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];


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
              className="btn-primary px-7 py-3.5 rounded-full font-semibold text-white text-base"
              style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
            >
              Doneer nu
            </Link>
            <Link
              href="/project"
              className="btn-secondary px-7 py-3.5 rounded-full font-semibold text-base border"
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
              src="/images/photos/afb-a.jpg"
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
    "Football is Life — Pass it on!",
    "Coaching",
    "Life Skills",
    "Soweto · Malawi",
    "UNGWERU",
    "St. Patrick",
    "Lokale coaches",
    "Community",
    "ANBI-erkend",
    "Jongens én meisjes",
    "Empowerment",
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
            src="/images/photos/afb-b.jpg"
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
            <p className="mt-4 text-sm" style={{ color: "var(--stone)" }}>
              Voor jongens én meisjes — gelijkwaardig en samen.
            </p>
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
              Malawi kent een extreem jonge bevolking — de gemiddelde leeftijd
              ligt rond de 18 jaar. Veel jongeren groeien op zonder structuur,
              begeleiding en perspectief.
            </p>
            <p>
              Maar op een veldje in Soweto, Mzuzu, zagen we iets
              bijzonders: tientallen jongeren — jongens én meisjes —
              op een veld dat eigenlijk geen veld mag heten. Ze lachen,
              ze spelen, ze genieten.
            </p>
            <p>
              Die kracht is zó groot, dat we besloten hebben er iets
              blijvends mee te doen. Zo is{" "}
              <strong style={{ color: "var(--charcoal)" }}>
                Football is Life
              </strong>{" "}
              ontstaan — met als overtuiging dat voetbal een veilige
              ingang biedt naar empowerment en educatie.
            </p>
            <p>
              We communiceren niet dat we &lsquo;arme kinderen helpen&rsquo;. We bouwen{" "}
              <strong style={{ color: "var(--green)" }}>
                samen met lokale partners aan toekomstkansen
              </strong>{" "}
              via voetbal en empowerment.
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
          {steps.map((step, i) => {
            const featured = i === 0;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className={`rounded-2xl p-6 card-hover ${featured ? "col-span-2 lg:col-span-1" : ""}`}
                style={{
                  background: featured ? "var(--green)" : "var(--white)",
                  border: featured ? "1px solid var(--green-dark)" : "1px solid var(--border)",
                  boxShadow: featured ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                <p
                  className="font-display font-bold text-4xl leading-none mb-4"
                  style={{ color: featured ? "rgba(246,241,232,0.25)" : "var(--green)", opacity: featured ? 1 : 0.18 }}
                >
                  {step.n}
                </p>
                <h3
                  className="font-display font-bold text-base leading-snug mb-2"
                  style={{ color: featured ? "rgba(246,241,232,0.95)" : "var(--charcoal)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: featured ? "rgba(246,241,232,0.60)" : "var(--stone)" }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
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
              className="btn-primary px-6 py-3 rounded-full font-semibold text-white text-sm"
              style={{ background: "var(--green)", boxShadow: "var(--glow-green)" }}
            >
              Meer over dit project →
            </Link>
            <Link
              href="/doneren"
              className="btn-secondary px-6 py-3 rounded-full font-semibold text-sm border"
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
            src="/images/photos/afb-c.jpeg"
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
              className="rounded-2xl p-7 card-hover"
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
            src="/images/photos/afb-e.jpg"
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
          {metrics.map((m, i) => {
            const featured = i === 0;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease }}
                className={`rounded-2xl p-5 text-center stat-card ${featured ? "col-span-2 sm:col-span-1 md:row-span-1" : ""}`}
                style={{
                  background: featured ? "var(--green)" : "var(--green-pale)",
                  border: featured ? "1px solid var(--green-dark)" : "1px solid rgba(33,77,58,0.10)",
                  boxShadow: featured ? "var(--shadow-md)" : "none",
                }}
              >
                <p
                  className="font-display font-bold leading-none mb-2"
                  style={{
                    fontSize: featured ? "clamp(1.8rem, 3vw, 2.4rem)" : "clamp(1.4rem, 2.5vw, 1.9rem)",
                    color: featured ? "rgba(246,241,232,0.95)" : "var(--green)",
                  }}
                >
                  {m.value}
                </p>
                <p
                  className="text-xs font-semibold leading-snug mb-1"
                  style={{ color: featured ? "rgba(246,241,232,0.75)" : "var(--charcoal)" }}
                >
                  {m.label}
                </p>
                <p className="text-xs" style={{ color: featured ? "rgba(246,241,232,0.45)" : "var(--stone)" }}>
                  {m.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Roadmap / Groeipad ────────────────────────────── */
const roadmap = [
  {
    phase: "Fase 1",
    period: "2025–2026",
    loc: "Soweto, Mzuzu",
    status: "In uitvoering",
    statusColor: "var(--orange)",
    desc: "Eerste communityproject: coaches opleiden, life skills programma starten, veld verbeteren. Dit wordt de blauwdruk.",
    milestones: ["4–6 coaches opgeleid", "60–80 jongeren bereikt", "Wekelijkse life skills"],
    active: true,
  },
  {
    phase: "Fase 2",
    period: "2026–2027",
    loc: "Mzuzu breed",
    status: "Gepland",
    statusColor: "var(--green)",
    desc: "Uitbreiding naar andere wijken in Mzuzu met het bewezen model en opgeleide coaches uit fase 1.",
    milestones: ["2e locatie operationeel", "Lokale coaches leiden zelf op", "Impactreizen starten"],
    active: false,
  },
  {
    phase: "Fase 3",
    period: "2027–2028",
    loc: "Rumphi & Nkhata Bay",
    status: "Toekomst",
    statusColor: "var(--blue-grey)",
    desc: "Doorgroei naar andere regio's in noordelijk Malawi. Het model is bewezen, de coaches staan klaar.",
    milestones: ["Regionale uitbreiding", "Partnerschappen met scholen", "Zelfstandig lokaal bestuur"],
    active: false,
  },
  {
    phase: "Fase 4",
    period: "2028+",
    loc: "Landelijk & regionaal",
    status: "Visie",
    statusColor: "var(--blue-grey)",
    desc: "Football is Life als model dat door lokale teams zelfstandig wordt uitgerold in Malawi en daarbuiten.",
    milestones: ["Landelijke dekking", "Kennisdeling met andere organisaties", "Zelfdragend model"],
    active: false,
  },
];

function Roadmap() {
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
          <Label>Roadmap</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Van blauwdruk naar beweging.
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
            We beginnen klein, grondig en lokaal verankerd. Elk project levert kennis
            en coaches op die de basis vormen voor de volgende stap.
          </p>
        </motion.div>

        {/* Timeline connector */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div
            className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5"
            style={{ background: "rgba(33,77,58,0.12)" }}
          />

          <div className="space-y-6 md:space-y-0">
            {roadmap.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${i > 0 ? "md:mt-8" : ""}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 w-4 h-4 rounded-full items-center justify-center"
                    style={{
                      background: item.active ? "var(--orange)" : "var(--sand-light)",
                      border: `2px solid ${item.active ? "var(--orange)" : "rgba(33,77,58,0.20)"}`,
                      boxShadow: item.active ? "var(--glow-orange)" : "none",
                    }}
                  >
                    {item.active && (
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "white" }}
                      />
                    )}
                  </div>

                  {/* Card - alternating sides on desktop */}
                  <div className={`${isLeft ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div
                      className={`rounded-2xl p-6 ${item.active ? "card-hover" : ""}`}
                      style={{
                        background: item.active ? "var(--white)" : "rgba(246,241,232,0.6)",
                        border: item.active
                          ? "1px solid rgba(33,77,58,0.18)"
                          : "1px solid var(--border)",
                        boxShadow: item.active ? "var(--shadow-md)" : "none",
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span
                            className="font-display font-bold text-xs tracking-wider uppercase"
                            style={{ color: item.active ? "var(--green)" : "var(--stone)" }}
                          >
                            {item.phase}
                          </span>
                          <span
                            className="text-xs ml-2"
                            style={{ color: "var(--stone)", opacity: 0.6 }}
                          >
                            {item.period}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: item.active
                              ? "rgba(201,107,44,0.10)"
                              : "rgba(102,112,106,0.08)",
                            color: item.statusColor,
                          }}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3
                        className="font-display font-bold text-lg leading-snug mb-1"
                        style={{ color: item.active ? "var(--green)" : "var(--stone)" }}
                      >
                        {item.loc}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                        {item.desc}
                      </p>

                      {/* Milestones */}
                      <div className="space-y-1.5">
                        {item.milestones.map((ms) => (
                          <div key={ms} className="flex items-center gap-2">
                            <div
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{
                                background: item.active ? "var(--orange)" : "var(--blue-grey)",
                              }}
                            />
                            <span
                              className="text-xs"
                              style={{
                                color: item.active ? "var(--charcoal)" : "var(--stone)",
                              }}
                            >
                              {ms}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Social Media Feed ──────────────────────────────── */
const instagramPosts = [
  {
    label: "(IG Post 1)",
    desc: "Trainingsdag in Soweto",
    date: "2 weken geleden",
  },
  {
    label: "(IG Post 2)",
    desc: "Coaches in opleiding",
    date: "3 weken geleden",
  },
  {
    label: "(IG Post 3)",
    desc: "Life skills sessie met jongeren",
    date: "1 maand geleden",
  },
  {
    label: "(IG Post 4)",
    desc: "Community dag in Mzuzu",
    date: "1 maand geleden",
  },
];

const linkedInPosts = [
  {
    title: "Eerste coaches afgestudeerd",
    excerpt: "Trots op onze eerste lichting coaches die het Trainer Coach 1 certificaat hebben behaald in Soweto...",
    date: "Maart 2026",
    author: "Paul van Zwam",
  },
  {
    title: "Samenwerking UNGWERU versterkt",
    excerpt: "Vandaag hebben we de samenwerking met UNGWERU formeel bekrachtigd. Samen bouwen we aan structureel...",
    date: "Februari 2026",
    author: "Football is Life",
  },
  {
    title: "Football Shirt Challenge",
    excerpt: "Doneer je oude voetbalshirt en geef het een tweede leven in Malawi. Elk shirt vindt een nieuw thuis...",
    date: "Januari 2026",
    author: "Ivo Spanjersberg",
  },
];

function SocialFeed() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-12"
        >
          <Label>Volg ons</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Direct vanuit het veld.
          </h2>
          <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
            Volg onze reis op Instagram en LinkedIn voor updates, verhalen
            en beelden uit Soweto.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            {/* Instagram icon */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-sm" style={{ color: "var(--charcoal)" }}>
                @footballislife.nl
              </p>
              <p className="text-xs" style={{ color: "var(--stone)" }}>Instagram</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {instagramPosts.map((post, i) => (
              <motion.div
                key={post.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <ImagePlaceholder
                  label={post.label}
                  description={post.desc}
                  aspect="1/1"
                  className="rounded-xl"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 rounded-xl"
                  style={{
                    background: "linear-gradient(to top, rgba(31,36,33,0.75) 0%, transparent 60%)",
                  }}
                >
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "rgba(246,241,232,0.90)" }}>
                      {post.desc}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(246,241,232,0.50)" }}>
                      {post.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LinkedIn Posts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <div className="flex items-center gap-3 mb-5">
            {/* LinkedIn icon */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#0A66C2" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-sm" style={{ color: "var(--charcoal)" }}>
                Football is Life
              </p>
              <p className="text-xs" style={{ color: "var(--stone)" }}>LinkedIn</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {linkedInPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                className="rounded-xl p-5 card-hover group cursor-pointer"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "var(--green-pale)",
                      color: "var(--green)",
                    }}
                  >
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "var(--charcoal)" }}>
                      {post.author}
                    </p>
                    <p className="text-xs" style={{ color: "var(--stone)", opacity: 0.6 }}>
                      {post.date}
                    </p>
                  </div>
                </div>
                <h4
                  className="font-display font-bold text-sm leading-snug mb-2 group-hover:underline underline-offset-2"
                  style={{ color: "var(--green)" }}
                >
                  {post.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--stone)" }}>
                  {post.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #F58529, #DD2A7B)",
              color: "white",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
            </svg>
            Volg op Instagram
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{
              background: "#0A66C2",
              color: "white",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Volg op LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Ontdek meer ────────────────────────────────────── */
const exploreLinks = [
  {
    href: "/opleiding",
    label: "Trainer Coach 1",
    desc: "Het driedaagse opleidingsprogramma dat lokale coaches klaarstoomt voor de toekomst.",
  },
  {
    href: "/partners",
    label: "Partners in Malawi",
    desc: "UNGWERU en St. Patrick — de organisaties die het programma lokaal dragen.",
  },
  {
    href: "/malawi",
    label: "Over Malawi",
    desc: "Waarom juist hier? Context over het land, Mzuzu en de wijk Soweto.",
  },
  {
    href: "/meedoen",
    label: "Meedoen",
    desc: "Ambassadeur worden, sponsoring, de Football Shirt Challenge en meer.",
  },
  {
    href: "/transparantie",
    label: "Transparantie",
    desc: "ANBI-informatie, financiële verantwoording en onze bestuurssamenstelling.",
  },
];

function OntdekMeer() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--ivory)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <Label>Ontdek meer</Label>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: "var(--green)",
              letterSpacing: "-0.02em",
            }}
          >
            Alles over Football is Life.
          </h2>
          <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
            Van de opleiding en onze partners tot financiële transparantie —
            alles staat open.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exploreLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <Link
                href={link.href}
                className="block rounded-2xl p-6 card-hover group h-full"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <h3
                  className="font-display font-bold text-base mb-2 group-hover:underline underline-offset-2"
                  style={{ color: "var(--green)" }}
                >
                  {link.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                  {link.desc}
                </p>
                <span
                  className="inline-block mt-3 text-sm font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: "var(--orange)" }}
                >
                  Lees meer →
                </span>
              </Link>
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
      <PitchDecor opacity={0.22} stroke="white" id="grass-home" />

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
            className="mt-7 inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-base btn-primary"
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
              src="/images/photos/afb-d.jpeg"
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
              className="flex items-center justify-between rounded-2xl p-5 donation-tile group"
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
            className="flex items-center justify-between rounded-2xl p-5 donation-tile group"
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
        <Roadmap />
        <SocialFeed />
        <OntdekMeer />
        <DoneerSectie />
      </main>
      <Footer />
    </>
  );
}
