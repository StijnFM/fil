import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Project Soweto — Football is Life",
  description:
    "Communityproject in Soweto, de armste wijk van Mzuzu (Malawi). Via lokale coaches, life skills en een voetbalveld geven we jongeren duurzaam meer perspectief.",
};

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
          <PitchDecor id="grass-proj-hero" opacity={0.09} stroke="white" />
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
                className="px-7 py-3.5 rounded-full font-semibold text-base btn-primary"
                style={{ background: "var(--orange)", color: "white" }}
              >
                Help mee bouwen →
              </Link>
              <Link
                href="/over-ons"
                className="px-7 py-3.5 rounded-full font-semibold text-base border btn-secondary"
                style={{ color: "rgba(246,241,232,0.75)", borderColor: "rgba(246,241,232,0.18)" }}
              >
                Over de stichting
              </Link>
            </div>
          <div className="mt-10">
            <ImagePlaceholder
              label="(Afb G)"
              description="Luchtfoto: Soweto, de armste wijk van Mzuzu"
              aspect="21/9"
              className="rounded-xl"
              src="/images/photos/afb-g.jpg"
            />
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
                Malawi kent een extreem jonge bevolking — de gemiddelde leeftijd
                ligt rond de 18 jaar. Veel jongeren groeien op zonder structuur,
                begeleiding en perspectief.
              </p>
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

              <blockquote
                className="my-8 py-6 px-8 rounded-2xl"
                style={{
                  background: "var(--green-pale)",
                  borderLeft: "4px solid var(--green)",
                }}
              >
                <p
                  className="font-display font-bold text-lg md:text-xl leading-relaxed italic"
                  style={{ color: "var(--green)" }}
                >
                  &ldquo;We willen niet de zoveelste betweterige westerlingen zijn die wel even komen vertellen hoe het moet.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold" style={{ color: "var(--stone)" }}>
                  Paul van Zwam en Ivo Spanjersberg, oprichters
                </p>
              </blockquote>
            </div>

            {/* Full-width image spanning both columns */}
            <div className="md:col-span-2 mt-8">
              <ImagePlaceholder
                label="(Afb H)"
                description="De community van Soweto: kinderen spelen"
                aspect="2/1"
                dark={false}
                src="/images/photos/afb-h.jpg"
              />
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
              <Link
                href="/partners"
                className="mt-3 inline-flex text-sm font-semibold hover:opacity-70 transition-opacity"
                style={{ color: "var(--orange)" }}
              >
                Meer over onze partners →
              </Link>
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
                  className="rounded-2xl p-7 card-hover"
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

        {/* ── Team in Malawi ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Het team</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                De mensen achter het project.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                In Malawi wordt het programma gedragen door lokale professionals
                die de community kennen en het vertrouwen hebben.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Crief", role: "Coördinator", desc: "Dagelijkse aansturing en community contact" },
                { name: "Isaac", role: "Coach", desc: "Ervaren trainer en rolmodel voor jongeren" },
                { name: "Sam", role: "Begeleider", desc: "Verbinding tussen programma en community" },
                { name: "Leo", role: "Adviseur", desc: "Strategisch advies en kennisoverdracht" },
              ].map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl p-6 card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #2D6B52, #183828)" }}
                  >
                    <span
                      className="font-display font-bold text-sm"
                      style={{ color: "rgba(246,241,232,0.50)" }}
                    >
                      {person.name[0]}
                    </span>
                  </div>
                  <p className="font-bold text-base mb-0.5" style={{ color: "var(--charcoal)" }}>
                    {person.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mb-2"
                    style={{ color: "var(--orange)" }}
                  >
                    {person.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {person.desc}
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
              {pillars.map((p, i) => (
                <div
                  key={p.n}
                  className="rounded-2xl p-7 card-hover"
                  style={{
                    background: i === 0 ? "var(--green)" : "var(--white)",
                    border: i === 0 ? "1px solid var(--green-dark)" : "1px solid var(--border)",
                    boxShadow: i === 0 ? "var(--shadow-md)" : "var(--shadow-card)",
                  }}
                >
                  <p
                    className="font-display font-bold text-5xl leading-none mb-4"
                    style={{ color: i === 0 ? "rgba(246,241,232,0.20)" : "var(--green)", opacity: i === 0 ? 1 : 0.15 }}
                  >
                    {p.n}
                  </p>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: i === 0 ? "rgba(246,241,232,0.95)" : "var(--charcoal)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: i === 0 ? "rgba(246,241,232,0.60)" : "var(--stone)" }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
        <div className="mt-10 grid grid-cols-2 gap-4">
          <ImagePlaceholder
            label="(Afb I)"
            description="Voetbalveld aanleg in Soweto"
            aspect="3/2"
            src="/images/photos/afb-i.jpg"
          />
          <ImagePlaceholder
            label="(Afb J)"
            description="Coaches tijdens opleiding"
            aspect="3/2"
            src="/images/photos/afb-j.jpg"
          />
        </div>
          </div>
        </section>

        {/* ── Trainer Coach 1 ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <Label>Opleiding</Label>
                <h2
                  className="font-display font-extrabold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                    color: "var(--green)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Trainer Coach 1.
                </h2>
                <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
                  Football is Life ontwikkelt samen met UNGWERU een gecertificeerd
                  opleidingsprogramma voor lokale coaches. Na een driedaagse opleiding
                  ontvangen trainers het certificaat &quot;Trainer Coach 1&quot;.
                </p>
                <Link
                  href="/opleiding"
                  className="mt-4 inline-flex text-sm font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  Alles over de opleiding →
                </Link>
                <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "Samenwerken",
                    desc: "Oefenvormen gericht op verbinding, teamwork en gezamenlijke doelen bereiken — op en buiten het veld.",
                  },
                  {
                    title: "Leiderschap",
                    desc: "Spel- en balvormen met rollen, keuzes maken, instructies geven en evalueren. Initiatief en invloed met respect.",
                  },
                  {
                    title: "Verantwoordelijkheid nemen",
                    desc: "Voor jezelf, voor elkaar en voor de omgeving. Gedrag zichtbaar maken, afspraken nakomen, samen verbeteren.",
                  },
                ].map((theme) => (
                  <div
                    key={theme.title}
                    className="flex gap-4 py-4 border-b last:border-0"
                    style={{ borderColor: "rgba(33,77,58,0.12)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ background: "var(--orange)" }}
                    />
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--charcoal)" }}>
                        {theme.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {theme.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification details */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: "3", label: "Dagen opleiding", sub: "intensief & praktijkgericht" },
                { value: "15", label: "Oefenvormen", sub: "in het werkboek" },
                { value: "3", label: "Kernthema's", sub: "samenwerken, leiderschap, verantwoordelijkheid" },
                { value: "Certificaat", label: "Trainer Coach 1", sub: "erkende kwalificatie" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-5 text-center card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.10)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <p
                    className="font-display font-bold text-2xl leading-none mb-2"
                    style={{ color: "var(--green)" }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--charcoal)" }}>
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
                  className="rounded-2xl p-5 stat-card"
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
                className="mt-6 inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-base text-white btn-primary"
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

        {/* ── Voortgang ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <Label>Voortgang</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              Tweederde van het doel bereikt.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--stone)" }}>
              Van de benodigde 15.000 euro is inmiddels tweederde opgehaald via sponsors, donaties en veilingen. Het project nadert de uitvoeringsfase.
            </p>

            <div className="mt-8 max-w-xl">
              <div className="flex justify-between text-sm mb-2">
                <span style={{ color: "var(--stone)" }}>Opgehaald</span>
                <span className="font-semibold" style={{ color: "var(--green)" }}>~€10.000 van €15.000</span>
              </div>
              <div
                className="h-3 rounded-full overflow-hidden"
                style={{ background: "rgba(33,77,58,0.12)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ background: "var(--green)", width: "66%" }}
                />
              </div>
              <p className="mt-2 text-xs" style={{ color: "var(--stone)" }}>
                Tweederde van het projectdoel
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-4 font-semibold" style={{ color: "var(--charcoal)" }}>
                Help ons het laatste deel bereiken
              </p>
              <Link
                href="/doneren"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-base text-white btn-primary"
                style={{ background: "var(--orange)" }}
              >
                Doneer nu →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Toekomst ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--ivory)" }}>
          <div className="max-w-6xl mx-auto">
            <Label>Toekomst</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              Soweto als blauwdruk.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--stone)" }}>
              Het project in Soweto is het begin. De slogan &lsquo;Football is Life, Pass it on&rsquo; is niet alleen een kreet, maar een aanpak: kennis overdragen, lokaal verankeren en doorgroeien. Er is al interesse vanuit Noord-Ghana en Tanzania voor vergelijkbare initiatieven.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Fase 2: Uitbreiding Mzuzu",
                  desc: "Na het succes van FC Soweto groeien we naar andere wijken in Mzuzu. Hetzelfde model, aangepast aan de lokale context.",
                },
                {
                  title: "Fase 3: Rumphi en Nkhata Bay",
                  desc: "Het diocees kent meer gebieden waar jongeren baat hebben bij structuur en begeleiding via sport.",
                },
                {
                  title: "Internationaal",
                  desc: "Noord-Ghana en Tanzania hebben al interesse getoond. De methodiek is ontworpen om overdraagbaar te zijn.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <h3
                    className="font-display font-bold text-base mb-3"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Volg de voortgang ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto">
            <Label>Volg de voortgang</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              FC Soweto in beeld.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--stone)" }}>
              Volg de voortgang van het project via onze kanalen.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { freq: "6x per jaar", label: "Videoreeks" },
                { freq: "3-4x per jaar", label: "Faciliteitenupdate" },
                { freq: "5x per jaar", label: "Lokale verhalen" },
                { freq: "Maandelijks", label: "Football Shirt Challenge" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="font-display font-bold text-lg leading-snug mb-2"
                    style={{ color: "var(--green)" }}
                  >
                    {item.freq}
                  </p>
                  <p className="text-xs" style={{ color: "var(--stone)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/in-de-media"
                className="font-semibold hover:opacity-70 transition-opacity"
                style={{ color: "var(--orange)" }}
              >
                Bekijk onze mediapagina →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor id="grass-proj-cta" opacity={0.22} stroke="white" />
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
              className="mt-8 inline-flex items-center px-9 py-4 rounded-full font-semibold text-lg text-white btn-primary"
              style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
            >
              Doneer nu →
            </Link>
            <div className="mt-8">
              <ImagePlaceholder
                label="(Afb K)"
                description="Jongeren vieren een doelpunt"
                aspect="16/9"
                className="rounded-xl max-w-md mx-auto"
                src="/images/photos/afb-k.jpg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
