import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

export const metadata: Metadata = {
  title: "Lokale Partners — Football is Life",
  description:
    "UNGWERU en St. Patrick's Missionary Society: de lokale partners in Mzuzu, Malawi die samen met Football is Life het communityproject dragen.",
};

const localTeam = [
  {
    name: "Crief",
    role: "Coordinator",
    desc: "Crief coordineert de dagelijkse activiteiten in Soweto en is het eerste aanspreekpunt voor de community. Hij bewaakt de voortgang en zorgt voor verbinding tussen alle betrokkenen.",
    photoLabel: "(Foto: Crief)",
    photoDesc: "Crief — coordinator in Mzuzu",
  },
  {
    name: "Isaac",
    role: "Coach",
    desc: "Isaac leidt de voetbaltrainingen en combineert sport met persoonlijke begeleiding van jongeren. Als coach is hij het dagelijkse rolmodel op het veld.",
    photoLabel: "(Foto: Isaac)",
    photoDesc: "Isaac — coach op het veld",
  },
  {
    name: "Sam",
    role: "Begeleider",
    desc: "Sam begeleidt jongeren individueel en organiseert de wekelijkse life skills sessies. Hij kent de thuissituatie van de deelnemers en signaleert waar extra aandacht nodig is.",
    photoLabel: "(Foto: Sam)",
    photoDesc: "Sam — begeleider jongeren",
  },
  {
    name: "Leo",
    role: "Adviseur",
    desc: "Leo adviseert het team over lokale context en helpt bij de verbinding met scholen en organisaties. Zijn ervaring en netwerk zijn onmisbaar voor de verankering van het programma.",
    photoLabel: "(Foto: Leo)",
    photoDesc: "Leo — lokaal adviseur",
  },
];

const partnershipSteps = [
  {
    n: "01",
    actor: "UNGWERU",
    title: "Lokale verankering en coordinatie",
    desc: "UNGWERU zorgt voor de dagelijkse aansturing, selectie van deelnemers, monitoring en rapportage. Zij kennen de community van binnenuit.",
  },
  {
    n: "02",
    actor: "St. Patrick",
    title: "Community-verbinding en schooltoegang",
    desc: "St. Patrick legt de verbinding met scholen, kerken en buurtbewoners. Zij openen deuren die voor buitenstaanders gesloten blijven.",
  },
  {
    n: "03",
    actor: "Football is Life",
    title: "Methodiek, opleiding en financiering",
    desc: "Football is Life brengt de voetbalmethodiek, het Trainer Coach 1-programma, de financiering en twee jaar intensieve begeleiding.",
  },
  {
    n: "04",
    actor: "Samen",
    title: "Gedeeld eigenaarschap",
    desc: "Alle beslissingen worden samen genomen. Het model is geen overdracht van kennis, maar een gezamenlijke ontwikkeling die lokaal geworteld blijft.",
  },
];

const ungweruPrograms = [
  { title: "Education", desc: "Onderwijsprogramma's voor kinderen en jongeren in rurale gemeenschappen" },
  { title: "Livelihoods & Food Security", desc: "Bestaanszekerheid en voedselzekerheid voor kwetsbare gezinnen" },
  { title: "Health", desc: "Gezondheidsprogramma's gericht op preventie en bewustwording" },
  { title: "Water & Sanitation", desc: "Toegang tot schoon water en sanitaire voorzieningen" },
  { title: "Youth Development", desc: "Het SELL-programma: empowerment van jongeren via sport, educatie en mentorship" },
];

const differentiators = [
  {
    traditional: "Westerse organisatie stuurt, lokale partners voeren uit",
    ours: "Lokale partners zijn mede-eigenaar van het model en sturen mee",
  },
  {
    traditional: "Korte projectcyclus, daarna vertrek",
    ours: "Twee jaar intensieve begeleiding na oplevering, gericht op zelfstandigheid",
  },
  {
    traditional: "Kennis wordt geimporteerd",
    ours: "Kennis wordt lokaal ontwikkeld en verankerd via het Trainer Coach 1-programma",
  },
  {
    traditional: "Rapportage aan donoren als doel",
    ours: "Rapportage als middel — het doel is lokale capaciteit die blijft",
  },
  {
    traditional: "Schaalvergroting vanuit het Westen",
    ours: "Groei alleen als het lokale fundament staat en het team er klaar voor is",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.09} stroke="white" id="grass-partners-hero" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(24,56,40,0.8) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Mzuzu, Northern Malawi
            </span>
            <h1
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Lokale partners.
            </h1>
            <p
              className="mt-5 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Zonder lokale verankering werkt geen enkel programma. UNGWERU en
              St. Patrick zijn geen uitvoerders — zij zijn mede-eigenaren van
              het model.
            </p>
            <div className="mt-10">
              <ImagePlaceholder
                label="(Afb P1)"
                description="UNGWERU en Football is Life — partnerschap in Mzuzu"
                aspect="21/9"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── Partnership Philosophy ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Filosofie</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Partnerschap,
                <br />
                geen afhankelijkheid.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
            </div>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--stone)" }}>
              <p>
                Football is Life werkt niet met lokale uitvoerders die onze
                instructies opvolgen. Wij werken met partners die het project
                mede vormgeven, mede sturen en uiteindelijk zelfstandig dragen.
              </p>
              <p>
                Dit begint bij de keuze van partners. In Mzuzu werken we samen met{" "}
                <strong style={{ color: "var(--green)" }}>UNGWERU</strong> en{" "}
                <strong style={{ color: "var(--green)" }}>St. Patrick&apos;s Missionary Society</strong>
                {" "} — twee organisaties met diepe wortels in de regio, jarenlange
                ervaring en het vertrouwen van de gemeenschap.
              </p>
              <p>
                Ons model is bewust gebouwd op{" "}
                <strong style={{ color: "var(--charcoal)" }}>gedeeld eigenaarschap</strong>.
                De kennis die wij inbrengen — voetbalmethodiek, trainersopleiding,
                monitoring — wordt niet overgedragen als pakket, maar samen
                ontwikkeld in de lokale context. Zodat het blijft als wij vertrekken.
              </p>
            </div>
            <div className="md:col-span-2 mt-6">
              <ImagePlaceholder
                label="(Afb P2)"
                description="Overleg tussen Football is Life en lokale partners in Mzuzu"
                aspect="2.5/1"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── UNGWERU ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Partner</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                UNGWERU Organisation.
              </h2>
              <p className="mt-3 max-w-2xl" style={{ color: "var(--stone)" }}>
                Lokale NGO in Mzuzu, Northern Malawi. Opgericht als Community
                Based Organisation in 2004 door Bishop John Ryan van het Mzuzu
                Catholic Diocese, en geregistreerd als NGO in 2009 onder de
                Trustee&apos;s Incorporation Act van Malawi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* History and context */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-4"
                  style={{ color: "var(--orange)" }}
                >
                  Achtergrond
                </p>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                  <p>
                    UNGWERU werkt met rurale en peri-urbane gemeenschappen in het
                    Mzimba District. De organisatie richt zich op duurzame
                    ontwikkeling via vijf programmalijnen, met bijzondere aandacht
                    voor jongeren en kwetsbare groepen.
                  </p>
                  <p>
                    De{" "}
                    <strong style={{ color: "var(--charcoal)" }}>Youth Development Unit (YDU)</strong>{" "}
                    van UNGWERU voert het SELL Programme uit — Sharing Education
                    and Learning for Life. Dit programma vindt zijn oorsprong in
                    Nigeria in de jaren tachtig en werd in 2002 doorontwikkeld door
                    Noel McGeeney en Leo Traynor.
                  </p>
                  <p>
                    De YDU richt zich op Sexual and Reproductive Health workshops
                    voor jongeren van 16 tot 24 jaar, gecombineerd met justice
                    education, mentorship en safeguarding. Dit sluit nauw aan bij
                    de doelen van Football is Life.
                  </p>
                </div>
              </div>

              {/* Photo */}
              <div>
                <ImagePlaceholder
                  label="(Afb P3)"
                  description="UNGWERU teamleden in Mzuzu"
                  aspect="4/3"
                />
              </div>
            </div>

            {/* Programs grid */}
            <div className="mt-8">
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-4"
                style={{ color: "var(--orange)" }}
              >
                Programmalijnen
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {ungweruPrograms.map((prog) => (
                  <div
                    key={prog.title}
                    className="rounded-2xl p-5 card-hover"
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <p className="font-semibold text-sm mb-1.5" style={{ color: "var(--charcoal)" }}>
                      {prog.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--stone)" }}>
                      {prog.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Role in partnership */}
            <div
              className="mt-8 rounded-2xl p-7"
              style={{
                background: "var(--green)",
                border: "1px solid var(--green-dark)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-3"
                style={{ color: "rgba(201,107,44,0.80)" }}
              >
                Rol in het partnerschap
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(246,241,232,0.75)" }}>
                UNGWERU is de lokale ankerorganisatie van Football is Life in
                Mzuzu. Zij verzorgen de coordinatie, het dagelijks toezicht op
                het programma, de selectie en begeleiding van deelnemers, en de
                monitoring van voortgang. Hun kennis van de gemeenschap in Soweto
                en het Mzimba District is de basis waarop het programma gebouwd is.
              </p>
              <p className="mt-3 text-sm" style={{ color: "rgba(246,241,232,0.45)" }}>
                ungweru.org
              </p>
            </div>
          </div>
        </section>

        {/* ── St. Patrick ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Partner</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                St. Patrick&apos;s Missionary Society.
              </h2>
              <p className="mt-3 max-w-2xl" style={{ color: "var(--stone)" }}>
                Sinds 16 maart 1970 aanwezig in het Mzuzu Diocese. Met diepe
                wortels in de gemeenschap en een breed netwerk van scholen en
                lokale instituties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Photo */}
              <div>
                <ImagePlaceholder
                  label="(Afb P4)"
                  description="St. Patrick's Missionary Society — community in Northern Malawi"
                  aspect="4/3"
                />
              </div>

              {/* Details */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-4"
                  style={{ color: "var(--orange)" }}
                >
                  Achtergrond
                </p>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                  <p>
                    St. Patrick&apos;s Missionaries kwamen in 1970 naar het Mzuzu
                    Diocese en zijn sindsdien diep verweven met het dagelijks leven
                    in Northern Malawi. In 1987 werd Monsignor John Roche benoemd
                    tot Apostolisch Administrator van het Diocese.
                  </p>
                  <p>
                    Het Mzuzu Catholic Diocese beheert een omvangrijk
                    onderwijsnetwerk:{" "}
                    <strong style={{ color: "var(--charcoal)" }}>263 basisscholen</strong>,{" "}
                    <strong style={{ color: "var(--charcoal)" }}>5 middelbare scholen</strong>,{" "}
                    <strong style={{ color: "var(--charcoal)" }}>2 beroepsopleidingen</strong> en{" "}
                    <strong style={{ color: "var(--charcoal)" }}>1 lerarenopleiding</strong>.
                    Dit netwerk biedt Football is Life directe toegang tot scholen
                    en jongeren in de regio.
                  </p>
                  <p>
                    De verbinding met St. Patrick gaat verder dan logistiek.
                    Hun decennialange aanwezigheid heeft een vertrouwensbasis
                    gecreeerd die voor geen enkele buitenlandse organisatie te
                    repliceren is. Dat vertrouwen is de voorwaarde waaronder
                    het programma kan functioneren.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: "1970", label: "Aanwezig in Mzuzu", sub: "meer dan 55 jaar" },
                { value: "263", label: "Basisscholen", sub: "in het Diocese" },
                { value: "5", label: "Middelbare scholen", sub: "in het netwerk" },
                { value: "3", label: "Colleges", sub: "beroeps- en lerarenopleiding" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-5 text-center card-hover"
                  style={{
                    background: "var(--green-pale)",
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

            {/* Role card */}
            <div
              className="mt-8 rounded-2xl p-7"
              style={{
                background: "var(--green)",
                border: "1px solid var(--green-dark)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-3"
                style={{ color: "rgba(201,107,44,0.80)" }}
              >
                Rol in het partnerschap
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(246,241,232,0.75)" }}>
                St. Patrick biedt de community-verbinding die het programma
                mogelijk maakt. Via hun schoolnetwerk, lokale contacten en
                jarenlange aanwezigheid zorgen zij voor draagvlak, vertrouwen
                en directe toegang tot de jongeren die het programma wil bereiken.
              </p>
            </div>
          </div>
        </section>

        {/* ── How the Partnership Works ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Label>Samenwerking</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Zo werkt het partnerschap.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Drie organisaties, elk met een eigen rol, verbonden door
                gedeeld eigenaarschap en een gezamenlijk doel.
              </p>
            </div>

            {/* Visual flow */}
            <div className="relative">
              <div
                className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
                style={{ background: "rgba(33,77,58,0.15)" }}
              />

              <div className="space-y-0">
                {partnershipSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-6 pb-8 last:pb-0">
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 relative"
                        style={{
                          background: i === 3 ? "var(--green)" : "var(--white)",
                          border: `2px solid ${i === 3 ? "var(--green)" : "rgba(33,77,58,0.18)"}`,
                          color: i === 3 ? "white" : "var(--stone)",
                        }}
                      >
                        {step.n}
                      </div>
                    </div>
                    <div className="pt-1.5">
                      <span
                        className="inline-block text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full mb-2"
                        style={{
                          background: i === 3 ? "rgba(201,107,44,0.12)" : "var(--green-pale)",
                          color: i === 3 ? "var(--orange)" : "var(--green)",
                          border: i === 3 ? "1px solid rgba(201,107,44,0.20)" : "1px solid rgba(33,77,58,0.12)",
                        }}
                      >
                        {step.actor}
                      </span>
                      <h3
                        className="font-semibold text-base leading-snug mb-1"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership diagram */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { name: "UNGWERU", role: "Verankering", color: "var(--green)" },
                { name: "St. Patrick", role: "Verbinding", color: "var(--green)" },
                { name: "Football is Life", role: "Methodiek", color: "var(--orange)" },
              ].map((org) => (
                <div
                  key={org.name}
                  className="rounded-2xl p-5 text-center card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ background: org.color }}
                  >
                    <span
                      className="font-display font-bold text-xs"
                      style={{ color: "rgba(246,241,232,0.60)" }}
                    >
                      {org.name[0]}
                    </span>
                  </div>
                  <p className="font-display font-bold text-sm" style={{ color: "var(--charcoal)" }}>
                    {org.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mt-1"
                    style={{ color: "var(--orange)" }}
                  >
                    {org.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ImagePlaceholder
                label="(Afb P5)"
                description="Gezamenlijk overleg: UNGWERU, St. Patrick en Football is Life"
                aspect="21/9"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── The Local Team ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Het lokale team</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                De mensen op de grond.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                Het dagelijkse programma in Soweto wordt gedragen door een team
                dat de community van binnenuit kent. Zij zijn geen ingehuurde
                krachten — zij zijn de community.
              </p>
            </div>

            {/* Group photo */}
            <div className="mb-8">
              <ImagePlaceholder
                label="(Afb P6)"
                description="Het lokale team samen op het veld in Soweto"
                aspect="21/9"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {localTeam.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl overflow-hidden card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <ImagePlaceholder
                    label={person.photoLabel}
                    description={person.photoDesc}
                    aspect="1/1"
                    className="rounded-none"
                  />
                  <div className="p-4 text-center">
                    <p className="font-bold text-base" style={{ color: "var(--charcoal)" }}>
                      {person.name}
                    </p>
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mt-0.5 mb-2"
                      style={{ color: "var(--orange)" }}
                    >
                      {person.role}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--stone)" }}>
                      {person.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Makes This Different ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Onderscheidend</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Lokaal eigenaarschap,
                <br />
                niet traditionele hulp.
              </h2>
              <p className="mt-3 max-w-2xl" style={{ color: "var(--stone)" }}>
                Het verschil tussen een project dat verdwijnt na financiering en
                een programma dat blijft bestaan, zit in wie het draagt. Bij
                Football is Life zijn dat de lokale partners.
              </p>
            </div>

            <div className="space-y-0">
              {/* Table header */}
              <div
                className="grid grid-cols-2 gap-4 py-4 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--stone)" }}>
                  Traditioneel model
                </p>
                <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--green)" }}>
                  Football is Life
                </p>
              </div>

              {differentiators.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-4 py-4 border-b last:border-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)", opacity: 0.7 }}>
                    {row.traditional}
                  </p>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--charcoal)" }}>
                    {row.ours}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-4">
              <ImagePlaceholder
                label="(Afb P7)"
                description="Lokale coaches leiden de training"
                aspect="3/2"
              />
              <ImagePlaceholder
                label="(Afb P8)"
                description="Jongeren in Soweto tijdens empowermentsessie"
                aspect="3/2"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor id="grass-partners-cta" opacity={0.22} stroke="white" />
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Bouw mee aan lokaal
              <br />
              eigenaarschap.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Elke donatie versterkt niet alleen het programma,
              maar ook de lokale organisaties die het dragen.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="/doneren"
                className="px-9 py-4 rounded-full font-semibold text-lg text-white btn-primary"
                style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
              >
                Doneer nu
              </Link>
              <Link
                href="/project"
                className="px-9 py-4 rounded-full font-semibold text-lg border btn-secondary"
                style={{ color: "rgba(246,241,232,0.75)", borderColor: "rgba(246,241,232,0.18)" }}
              >
                Bekijk het project
              </Link>
            </div>
            <div className="mt-8">
              <ImagePlaceholder
                label="(Afb P9)"
                description="Partners samen op het veld — de toekomst van het programma"
                aspect="16/9"
                className="rounded-xl max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
