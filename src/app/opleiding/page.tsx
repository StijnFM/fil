import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

export const metadata: Metadata = {
  title: "Opleiding Trainer Coach 1 — Football is Life",
  description:
    "Driedaagse praktijkopleiding voor lokale coaches in Malawi. Samenwerken, leiderschap en verantwoordelijkheid — ontwikkeld met UNGWERU in Mzuzu.",
};

const themes = [
  {
    n: "01",
    title: "Samenwerken",
    subtitle: "Collaboration",
    desc: "Oefenvormen gericht op verbinding, teamwork en gezamenlijke doelen bereiken. Coaches leren hoe ze samenwerking zichtbaar maken in het spel: afspraken nakomen, rollen verdelen, samen beslissen. De reflectievragen helpen jongeren om samenwerking ook buiten het veld te herkennen.",
    detail:
      "Deel 1 behandelt de basis: samen een doel bereiken, luisteren, aanpassen. Deel 2 gaat dieper: omgaan met meningsverschillen, verantwoordelijkheid delen, feedback geven en ontvangen.",
  },
  {
    n: "02",
    title: "Leiderschap",
    subtitle: "Leadership",
    desc: "Spel- en balvormen waarbij deelnemers rollen krijgen, keuzes moeten maken, instructies geven en evalueren. Leiderschap betekent hier niet de baas spelen, maar initiatief tonen met respect voor anderen.",
    detail:
      "Coaches leren het verschil herkennen tussen leidinggeven en domineren. In de oefenvormen draait het om invloed met respect: hoe geef je richting zonder de ander klein te maken? Hoe evalueer je eerlijk?",
  },
  {
    n: "03",
    title: "Verantwoordelijkheid nemen",
    subtitle: "Taking responsibility",
    desc: "Verantwoordelijkheid in drie lagen: voor jezelf, voor elkaar en voor de omgeving. Gedrag zichtbaar maken, afspraken nakomen, samen verbeteren.",
    detail:
      "De oefenvormen dwingen keuzes af: wat doe je als iemand zich niet aan de afspraak houdt? Hoe zorg je voor materiaal? Hoe laat je zien dat je er bent voor je team? Coaches leren dit gedrag te benoemen en te versterken.",
  },
];

const dayProgram = [
  {
    day: "Dag 1",
    title: "Fundament: coachrol en communicatie",
    blocks: [
      {
        label: "Ochtend",
        items: [
          "Opening en kennismaking",
          "De rol van de coach: voorbeeldgedrag en veiligheid",
          "Communicatie in de training: duidelijke uitleg, feedback geven, omgaan met lastige situaties",
        ],
      },
      {
        label: "Middag",
        items: [
          "Praktijkblok: oefenvormen Samenwerken (deel 1)",
          "Feedbackrondes in kleine groepen",
          "Reflectie en afsluiting dag 1",
        ],
      },
    ],
  },
  {
    day: "Dag 2",
    title: "Teambuilding en samenwerking",
    blocks: [
      {
        label: "Ochtend",
        items: [
          "Teambuilding: afspraken, rollen, gezamenlijke doelen",
          "Samenwerking zichtbaar maken in oefenvormen",
          "Praktijkblok: oefenvormen Samenwerken (deel 2) + feedback",
        ],
      },
      {
        label: "Middag",
        items: [
          "Introductie Leiderschap in het spel",
          "Praktijkblok: oefenvormen Leiderschap (deel 1)",
          "Feedbackrondes en reflectie",
        ],
      },
    ],
  },
  {
    day: "Dag 3",
    title: "Leiderschap en verantwoordelijkheid",
    blocks: [
      {
        label: "Ochtend",
        items: [
          "Wat is leiderschap — en wat niet",
          "Verantwoordelijkheid in 3 lagen: jezelf, elkaar, omgeving",
          "Praktijkblok: oefenvormen Leiderschap (deel 2) + Verantwoordelijkheid",
        ],
      },
      {
        label: "Middag",
        items: [
          "Laatste feedbackrondes",
          "Afsluitende praktijktoets",
          "Certificaatuitreiking: Trainer Coach 1 — Voetbal is Life",
        ],
      },
    ],
  },
];

const assessmentCriteria = [
  {
    title: "Voorbereiding",
    desc: "Werkboek gelezen, oefenvorm voorbereid en materiaal klaargelegd. Een goede coach bereidt zich voor.",
  },
  {
    title: "Praktische uitvoering",
    desc: "Veilig, duidelijk en in het juiste tempo. De oefenvorm wordt correct opgezet en begeleid, met oog voor de groep.",
  },
  {
    title: "Coachtaal",
    desc: "Respectvol, motiverend en waar nodig corrigerend. Taal die jongeren helpt groeien, niet klein maakt.",
  },
  {
    title: "Reflectiemoment",
    desc: "Een korte, gerichte koppeling aan het thema. De coach verbindt de oefenvorm aan het grotere doel.",
  },
];

const workbookElements = [
  { label: "Doel", desc: "Koppeling aan het thema: wat leert de deelnemer door deze oefenvorm?" },
  { label: "Benodigdheden", desc: "Welke spullen heb je nodig? Bal, hesjes, pionnen en meer." },
  { label: "Opzet stap voor stap", desc: "Stapsgewijze opbouw van de oefenvorm: van simpel naar complex." },
  { label: "Coachtaal", desc: "Voorbeeldzinnen die trainers direct kunnen gebruiken tijdens de oefening." },
  { label: "Variaties", desc: "Aanpassingen voor makkelijker of moeilijker, inclusief leeftijdsaanpassingen." },
  { label: "Reflectievraag", desc: "1 tot 2 korte vragen na afloop die het thema koppelen aan het dagelijks leven." },
  { label: "Observatiepunten", desc: "Waar let de trainer op tijdens de oefenvorm? Concrete aandachtspunten." },
];

export default function OpleidingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor id="grass-opl-hero" opacity={0.09} stroke="white" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(24,56,40,0.8) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
              style={{ borderColor: "rgba(201,107,44,0.35)", background: "rgba(201,107,44,0.10)" }}
            >
              <span className="text-sm font-semibold" style={{ color: "rgba(201,107,44,0.90)" }}>
                Opleiding — 3-daags praktijkprogramma
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
              Trainer
              <br />
              Coach 1.
            </h1>
            <p
              className="mt-5 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.60)" }}
            >
              Een intensieve driedaagse opleiding voor lokale coaches in Mzuzu.
              Praktijkgericht, compact en gericht op toepassing — ontwikkeld
              samen met UNGWERU.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/doneren"
                className="px-7 py-3.5 rounded-full font-semibold text-base btn-primary"
                style={{ background: "var(--orange)", color: "white" }}
              >
                Steun de opleiding →
              </Link>
              <Link
                href="/project"
                className="px-7 py-3.5 rounded-full font-semibold text-base border btn-secondary"
                style={{ color: "rgba(246,241,232,0.75)", borderColor: "rgba(246,241,232,0.18)" }}
              >
                Bekijk het project
              </Link>
            </div>

            <div className="mt-10">
              <ImagePlaceholder
                src="/images/photos/coaches-tijdens-opleiding.jpg"
                label="(Foto: Coaches tijdens opleiding)"
                description="Lokale coaches oefenen op het veld in Mzuzu"
                aspect="21/9"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── Key figures ── */}
        <section style={{ background: "var(--ivory)" }} className="py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "3", label: "Dagen opleiding", sub: "intensief en praktijkgericht" },
              { value: "15", label: "Oefenvormen", sub: "in het werkboek" },
              { value: "3", label: "Kernthema's", sub: "samenwerken, leiderschap, verantwoordelijkheid" },
              { value: "Certificaat", label: "Trainer Coach 1", sub: "Voetbal is Life" },
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
        </section>

        {/* ── Waarom deze opleiding ── */}
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
                Waarom deze opleiding ertoe doet.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
            </div>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--stone)" }}>
              <p>
                In Malawi is de gemiddelde leeftijd rond de 18 jaar. Miljoenen
                jongeren groeien op zonder structuur, zonder begeleiding en
                zonder volwassenen die hen richting geven. Niet omdat die
                volwassenen er niet zijn — maar omdat ze zelf nooit geleerd
                hebben hoe.
              </p>
              <p>
                Voetbal is in Malawi overal. Het is de taal die iedereen spreekt.
                Maar een voetbalveld zonder goede coach is een gemiste kans.
                Een coach die niet alleen techniek leert, maar ook{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  samenwerking, leiderschap en verantwoordelijkheid
                </strong>{" "}
                — die maakt het verschil.
              </p>
              <p>
                De Trainer Coach 1-opleiding is gebouwd op die overtuiging.
                Niet vanuit theorie, maar vanuit de praktijk. Samen met{" "}
                <strong style={{ color: "var(--green)" }}>UNGWERU</strong>{" "}
                — een lokale NGO in Mzuzu met diepe wortels in de community —
                ontwikkelden we een programma dat past bij de realiteit ter
                plaatse.
              </p>
              <blockquote
                className="mt-5 pl-4 py-3 text-sm leading-relaxed italic"
                style={{
                  borderLeft: "3px solid var(--orange)",
                  color: "var(--stone)",
                  background: "var(--green-pale)",
                  borderRadius: "0 0.5rem 0.5rem 0",
                  paddingRight: "1rem",
                }}
              >
                &ldquo;Sport maakt kinderen en jongvolwassenen zichtbaar en biedt een veilige ingang. Via Ungweru kan dit leiden tot bredere ondersteuning in gezondheidszorg, educatie en empowerment. De coach maakt het verschil.&rdquo;
              </blockquote>
            </div>

            <div className="md:col-span-2 mt-4">
              <ImagePlaceholder
                src="/images/photos/jongeren-op-het-veld-in-mzuzu.jpg"
                label="(Foto: Jongeren op het veld in Mzuzu)"
                description="Trainingsmoment met lokale coaches en jongeren"
                aspect="2/1"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── De drie kernthema's ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Kernthema&apos;s</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Drie thema&apos;s, vijftien oefenvormen.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Elk thema wordt vertaald naar concrete oefenvormen die coaches
                direct kunnen inzetten. Geen abstracte theorie — maar
                herkenbare situaties op het veld.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {themes.map((t, i) => (
                <div
                  key={t.n}
                  className="rounded-2xl p-7 card-hover"
                  style={{
                    background: i === 0 ? "var(--green)" : "var(--white)",
                    border: i === 0 ? "none" : "1px solid rgba(33,77,58,0.12)",
                    boxShadow: i === 0 ? "var(--shadow-md)" : "var(--shadow-card)",
                  }}
                >
                  <p
                    className="font-display font-bold text-5xl leading-none mb-4"
                    style={{
                      color: i === 0 ? "rgba(246,241,232,0.20)" : "var(--green)",
                      opacity: i === 0 ? 1 : 0.15,
                    }}
                  >
                    {t.n}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mb-2"
                    style={{ color: i === 0 ? "rgba(201,107,44,0.90)" : "var(--orange)" }}
                  >
                    {t.subtitle}
                  </p>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: i === 0 ? "rgba(246,241,232,0.95)" : "var(--charcoal)" }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: i === 0 ? "rgba(246,241,232,0.60)" : "var(--stone)" }}
                  >
                    {t.desc}
                  </p>
                  <div
                    className="w-full h-px mb-4"
                    style={{
                      background: i === 0
                        ? "rgba(246,241,232,0.12)"
                        : "rgba(33,77,58,0.10)",
                    }}
                  />
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: i === 0 ? "rgba(246,241,232,0.45)" : "var(--stone)", opacity: i === 0 ? 1 : 0.75 }}
                  >
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <ImagePlaceholder
                src="/images/photos/foto-samenwerken.jpg"
                label="(Foto: Samenwerken)"
                description="Oefenvorm teamwork op het veld"
                aspect="4/3"
              />
              <ImagePlaceholder
                label="(Foto: Leiderschap)"
                description="Coach geeft instructie aan groep"
                aspect="4/3"
                src="/images/photos/foto-leiderschap.jpg"
              />
              <ImagePlaceholder
                label="(Foto: Verantwoordelijkheid)"
                description="Jongeren ruimen samen materiaal op"
                aspect="4/3"
                src="/images/photos/foto-verantwoordelijkheid.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── Het werkboek ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Het werkboek</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Compact, praktisch, gericht op toepassing.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
              <p className="mt-5 leading-relaxed" style={{ color: "var(--stone)" }}>
                Het werkboek bevat 15 oefenvormen, verdeeld over de drie
                kernthema&apos;s. Elke oefenvorm volgt dezelfde heldere structuur
                zodat coaches direct aan de slag kunnen. Weinig theorie, veel
                duidelijke stappen.
              </p>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--stone)" }}>
                Het werkboek is niet bedoeld als leesboek, maar als gereedschap.
                Coaches gebruiken het voor, tijdens en na de training. Na de
                opleiding blijft het werkboek eigendom van de coach. Een
                praktisch naslagwerk voor iedere training.
              </p>
              <div
                className="mt-6 rounded-xl p-5"
                style={{
                  background: "var(--green-pale)",
                  border: "1px solid rgba(33,77,58,0.12)",
                }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--green)" }}>
                  Voorbereiding
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                  Trainers krijgen vooraf 1 of 2 oefenvormen toegewezen. Ze bereiden coachzinnen voor, kiezen variaties en formuleren het leerdoel. Zo start de opleiding niet bij nul, maar bij voorbereiding.
                </p>
              </div>
              <div
                className="mt-4 rounded-xl p-5"
                style={{
                  background: "var(--sand-light)",
                  border: "1px solid rgba(33,77,58,0.08)",
                }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--green)" }}>
                  Leren door doen
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                  De opleiding is volledig praktijkgericht: leren door doen. Trainers voeren oefenvormen uit op elkaar in kleine groepjes. Na elke uitvoering volgt directe feedback op uitleg, veiligheid, coachtaal en de koppeling aan het thema.
                </p>
              </div>
            </div>

            <div>
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-5"
                style={{ color: "var(--orange)" }}
              >
                Elke oefenvorm bevat
              </p>
              <div className="space-y-0">
                {workbookElements.map((el, i) => (
                  <div
                    key={el.label}
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
                        {el.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--stone)" }}>
                        {el.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <ImagePlaceholder
                label="(Foto: Werkboek in gebruik)"
                description="Coach bereidt oefenvorm voor met werkboek"
                aspect="21/9"
                src="/images/photos/foto-werkboek.jpg"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── Driedaags programma (timeline) ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <Label>Het programma</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Drie dagen, van fundament tot certificaat.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Elke dag bouwt voort op de vorige. De opleiding combineert
                korte theoriemomenten met uitgebreide praktijkblokken en
                feedbackrondes.
              </p>
              <div
                className="mt-6 max-w-xl rounded-xl p-4 flex gap-3"
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(201,107,44,0.20)",
                  borderLeft: "3px solid var(--orange)",
                }}
              >
                <div>
                  <p className="font-semibold text-xs mb-1" style={{ color: "var(--orange)" }}>
                    Vóór de eerste dag
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    Trainers krijgen vooraf oefenvormen toegewezen. Ze bereiden coachzinnen voor, kiezen variaties en formuleren het leerdoel. Zo start de opleiding niet bij nul, maar bij voorbereiding.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {dayProgram.map((day, dayIdx) => (
                <div
                  key={day.day}
                  className="rounded-2xl overflow-hidden card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {/* Day header */}
                  <div
                    className="px-7 py-5"
                    style={{
                      background: dayIdx === 2 ? "var(--green)" : "var(--green-pale)",
                      borderBottom: dayIdx === 2 ? "none" : "1px solid rgba(33,77,58,0.10)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mb-1"
                      style={{ color: dayIdx === 2 ? "rgba(201,107,44,0.90)" : "var(--orange)" }}
                    >
                      {day.day}
                    </p>
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: dayIdx === 2 ? "rgba(246,241,232,0.95)" : "var(--green)" }}
                    >
                      {day.title}
                    </h3>
                  </div>

                  {/* Blocks */}
                  <div className="grid md:grid-cols-2 divide-x" style={{ borderColor: "var(--border)" }}>
                    {day.blocks.map((block) => (
                      <div key={block.label} className="px-7 py-5">
                        <p
                          className="text-xs font-semibold tracking-wide uppercase mb-3"
                          style={{ color: "var(--stone)" }}
                        >
                          {block.label}
                        </p>
                        <ul className="space-y-2.5">
                          {block.items.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <div
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                                style={{ background: "var(--orange)" }}
                              />
                              <span className="text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <ImagePlaceholder
                label="(Foto: Praktijkblok)"
                description="Coaches oefenen met kleine groepen"
                aspect="3/2"
                src="/images/photos/foto-praktijkblok.jpg"
              />
              <ImagePlaceholder
                label="(Foto: Feedbackronde)"
                description="Coaches bespreken de oefenvorm na"
                aspect="3/2"
                src="/images/photos/foto-feedbackronde.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── Beoordeling & certificering ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Certificering</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Beoordeling op vier criteria.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Aan het eind van dag 3 volgt een afsluitende praktijktoets.
                Coaches die slagen ontvangen het certificaat
                &quot;Trainer Coach 1 — Voetbal is Life&quot;. De beoordeling is
                helder en transparant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {assessmentCriteria.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-2xl p-7 card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.12)",
                    boxShadow: "var(--shadow-sm)",
                    borderLeft: "3px solid var(--green)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-display font-bold text-3xl leading-none flex-shrink-0"
                      style={{ color: "var(--green)", opacity: 0.18 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display font-bold text-base mb-2" style={{ color: "var(--charcoal)" }}>
                        {c.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <ImagePlaceholder
                label="(Foto: Certificaatuitreiking)"
                description="Coaches ontvangen hun Trainer Coach 1-certificaat"
                aspect="21/9"
                src="/images/photos/foto-certificaat.jpg"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── Na de opleiding ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Na de opleiding</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Het begint pas na het certificaat.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
              <p className="mt-5 leading-relaxed" style={{ color: "var(--stone)" }}>
                Na het behalen van het certificaat gaan coaches zelfstandig aan
                de slag in hun eigen groepen. Het werkboek vormt de basis, de
                opleiding het fundament. Maar daarmee stopt het niet.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Zelfstandig aan de slag",
                  desc: "Coaches draaien het programma in hun eigen groepen. De 15 oefenvormen uit het werkboek vormen de rode draad door hun trainingen.",
                },
                {
                  title: "Follow-up na 6-8 weken",
                  desc: "Na certificering draaien trainers het programma zelfstandig in hun eigen groepen. Na 6 tot 8 weken volgt een terugkommoment voor uitwisseling van ervaringen, aanscherping van het werkboek en extra coaching.",
                },
                {
                  title: "Doorlopende coaching",
                  desc: "Coaches staan er niet alleen voor. Via UNGWERU en Football is Life is er doorlopend contact, ondersteuning en monitoring. Het doel: kwaliteit borgen en coaches laten groeien.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 py-4 border-b last:border-0"
                  style={{ borderColor: "rgba(33,77,58,0.12)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: "var(--orange)" }}
                  />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--charcoal)" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 mt-4 grid grid-cols-2 gap-4">
              <ImagePlaceholder
                label="(Foto: Coach in actie)"
                description="Gecertificeerde coach leidt een training"
                aspect="3/2"
                src="/images/photos/foto-coach-actie.jpg"
              />
              <ImagePlaceholder
                label="(Foto: Follow-up sessie)"
                description="Coaches delen ervaringen na 6 weken"
                aspect="3/2"
                src="/images/photos/foto-followup.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── Verbinding met UNGWERU ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Lokale verankering</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Verbonden met UNGWERU empowerment.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
            </div>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--stone)" }}>
              <p>
                De Trainer Coach 1-opleiding staat niet op zichzelf. Het
                programma is direct verbonden met de bredere empowermentprogramma&apos;s
                van UNGWERU in Mzuzu.
              </p>
              <p>
                Wanneer coaches signalen opvangen — een jongere die thuisproblemen
                heeft, iemand die extra ondersteuning nodig heeft — kunnen zij
                doorverwijzen naar UNGWERU. Die samenwerking is ingebouwd in het
                programma: coaches weten wat ze zelf kunnen doen, en wanneer ze
                moeten schakelen.
              </p>
              <p>
                Zo ontstaat een netwerk rondom de jongere. Voetbal als ingang,{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  empowerment als doel
                </strong>
                . Niet als losse activiteiten naast elkaar, maar als een
                samenhangend geheel waarin de coach een sleutelrol speelt.
              </p>
              <p>
                In overleg met UNGWERU stemmen we af over doelgroep, logistiek, culturele aansluiting, selectie van oefenvormen en de koppeling met het empowermentprogramma.
              </p>
            </div>

            <div className="md:col-span-2">
              <div
                className="rounded-2xl p-7 md:p-10"
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(33,77,58,0.12)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Signaleren",
                      desc: "Coaches zijn getraind om signalen te herkennen: gedragsverandering, afwezigheid, spanning in de groep. Ze weten waar ze op moeten letten.",
                    },
                    {
                      title: "Doorverwijzen",
                      desc: "Via een korte, laagdrempelige lijn naar UNGWERU kunnen coaches jongeren koppelen aan aanvullende ondersteuning. Geen bureaucratie, directe actie.",
                    },
                    {
                      title: "Samenwerken",
                      desc: "UNGWERU en de coaches werken samen aan het welzijn van jongeren. Periodiek overleg, terugkoppeling en bijsturing zorgen voor continuiteit.",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <p
                        className="font-display font-bold text-base mb-2"
                        style={{ color: "var(--green)" }}
                      >
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Onze Methodiek ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Methodiek</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Gebouwd op sportpsychologie en ervaringsleren.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-14">
              {/* Left column */}
              <div>
                <p className="text-base leading-relaxed mb-7" style={{ color: "var(--stone)" }}>
                  De Trainer Coach 1-opleiding is ontwikkeld door Paul van Zwam en Ivo Spanjersberg, beiden sport- en prestatiepsychologen met jarenlange ervaring in het topvoetbal en bij Libre Foundation.
                </p>
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-5"
                  style={{ color: "var(--orange)" }}
                >
                  Kenmerken van succesvolle teams
                </p>
                <ol className="space-y-4">
                  {[
                    { title: "Duidelijke ambitie", desc: "Weten waar je naartoe werkt." },
                    { title: "Plezier en humor", desc: "Een veilige sfeer waarin je durft te proberen." },
                    { title: "Vertrouwen", desc: "Directe communicatie en eerlijke feedback." },
                    { title: "Optimaal benutten van talent", desc: "Iedereen heeft een rol." },
                    { title: "Een eigen kracht", desc: "Ontdek waar je goed in bent." },
                    { title: "Professioneel karakter", desc: "Afspraken nakomen, respect tonen." },
                    { title: "Voortdurende verbetering", desc: "Elke training een stap vooruit." },
                  ].map((item, i) => (
                    <li key={item.title} className="flex gap-4 items-start">
                      <span
                        className="font-display font-bold text-sm flex-shrink-0 w-6 text-right mt-0.5"
                        style={{ color: "var(--orange)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                          {item.title}
                        </span>
                        {" "}
                        <span className="text-sm" style={{ color: "var(--stone)" }}>
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right column */}
              <div className="space-y-5">
                <p className="text-base leading-relaxed" style={{ color: "var(--stone)" }}>
                  Deze principes vormen de basis van elke oefenvorm in het werkboek. Coaches leren niet alleen wat ze moeten doen, maar begrijpen waarom het werkt.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--stone)" }}>
                  De methodiek van Libre Foundation, gebaseerd op ervaringsleren en directe feedback, is vertaald naar een programma dat werkt in de context van Mzuzu. Praktisch, haalbaar en cultureel passend.
                </p>
                <blockquote
                  className="rounded-xl p-5 text-sm leading-relaxed italic"
                  style={{
                    background: "var(--white)",
                    borderLeft: "3px solid var(--green)",
                    color: "var(--stone)",
                    boxShadow: "var(--shadow-sm)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  &ldquo;Wij communiceren niet dat wij &apos;arme kinderen helpen&apos;. Wij bouwen samen met lokale partners aan toekomstkansen via voetbal en empowerment.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="mt-10">
              <ImagePlaceholder
                label="(Afb: Methodiek)"
                description="Trainers tijdens een oefenvorm op het veld"
                aspect="21/9"
                src="/images/photos/afb-methodiek.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor id="grass-opl-cta" opacity={0.22} stroke="white" />
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Investeer in coaches.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Een opgeleide coach bereikt tientallen jongeren.
              <br />
              Jouw bijdrage maakt dat mogelijk.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="/doneren"
                className="px-9 py-4 rounded-full font-semibold text-lg text-white btn-primary"
                style={{ background: "var(--orange)", boxShadow: "var(--glow-orange)" }}
              >
                Doneer nu →
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
                label="(Foto: Coaches en jongeren samen)"
                description="Het resultaat: gemotiveerde coaches en betrokken jongeren"
                aspect="16/9"
                src="/images/photos/foto-coaches-jongeren.jpg"
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
