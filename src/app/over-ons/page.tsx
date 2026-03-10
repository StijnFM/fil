"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const board = [
  {
    name: "Paul van Zwam",
    role: "Voorzitter",
    initials: "PZ",
    desc: "Paul voert naast zijn bestuursrol ook operationele taken uit. Hij is het gezicht van Football is Life in het veld en in het netwerk.",
    expertise: ["Operationele leiding", "Netwerk professionele sport", "Veldwerk"],
    photoLabel: "(Foto: Paul)",
    photoDesc: "Paul van Zwam — voorzitter Football is Life",
  },
  {
    name: "Ivo Spanjersberg",
    role: "Secretaris",
    initials: "IS",
    desc: "Ivo verzorgt de interne communicatie, documentatie en coördinatie. Samen met Paul draagt hij operationele verantwoordelijkheid.",
    expertise: ["Communicatie", "Documentatie", "Coördinatie"],
    photoLabel: "(Foto: Ivo)",
    photoDesc: "Ivo Spanjersberg — secretaris",
  },
  {
    name: "Mano Radema",
    role: "Penningmeester",
    initials: "MR",
    desc: "Mano bewaakt de financiën en zorgt dat elke gedoneerde euro transparant en verantwoord wordt besteed conform ANBI-voorwaarden.",
    expertise: ["Financiën", "ANBI-verantwoording", "Transparantie"],
    photoLabel: "(Foto: Mano)",
    photoDesc: "Mano Radema — penningmeester",
  },
];

const malawiTeam = [
  {
    name: "Crief",
    role: "Coördinator",
    initials: "C",
    desc: "Crief coördineert de dagelijkse activiteiten in Soweto en is het eerste aanspreekpunt voor de community.",
    photoLabel: "(Foto: Crief)",
    photoDesc: "Crief — coördinator in Mzuzu",
  },
  {
    name: "Isaac",
    role: "Coach",
    initials: "I",
    desc: "Isaac leidt de voetbaltrainingen en combineert sport met persoonlijke begeleiding van jongeren.",
    photoLabel: "(Foto: Isaac)",
    photoDesc: "Isaac — coach op het veld",
  },
  {
    name: "Sam",
    role: "Begeleider",
    initials: "S",
    desc: "Sam begeleidt jongeren individueel en organiseert de wekelijkse life skills sessies.",
    photoLabel: "(Foto: Sam)",
    photoDesc: "Sam — begeleider jongeren",
  },
  {
    name: "Leo",
    role: "Adviseur",
    initials: "L",
    desc: "Leo adviseert het team over lokale context en helpt bij de verbinding met scholen en organisaties.",
    photoLabel: "(Foto: Leo)",
    photoDesc: "Leo — lokaal adviseur",
  },
];

const ambassadors = [
  {
    name: "Ambassadeur 1",
    title: "Sport & netwerk",
    initials: "A1",
    desc: "Zet zich in voor de zichtbaarheid van Football is Life binnen de professionele sportwereld en opent deuren bij sportclubs en organisaties.",
    photoLabel: "(Foto: Ambassadeur)",
    photoDesc: "Ambassadeur — sport & netwerk",
    tags: ["Professionele sport", "Netwerk"],
  },
  {
    name: "Ambassadeur 2",
    title: "Bedrijfsleven",
    initials: "A2",
    desc: "Verbindt bedrijven aan de missie van Football is Life en helpt bij het werven van structurele sponsoring en partnerschappen.",
    photoLabel: "(Foto: Ambassadeur)",
    photoDesc: "Ambassadeur — bedrijfsleven",
    tags: ["Sponsoring", "Partnerschappen"],
  },
  {
    name: "Ambassadeur 3",
    title: "Community & media",
    initials: "A3",
    desc: "Vergroot het bereik van de stichting via media, evenementen en persoonlijke inzet. Deelt het verhaal van Football is Life met een breed publiek.",
    photoLabel: "(Foto: Ambassadeur)",
    photoDesc: "Ambassadeur — community & media",
    tags: ["Media", "Evenementen", "Zichtbaarheid"],
  },
];

const fundingSources = [
  { label: "Structurele particuliere donaties", desc: "Vaste donateurs die de stichting langdurig steunen" },
  { label: "Sponsoring vanuit het bedrijfsleven", desc: "Bedrijven die zich verbinden aan de missie" },
  { label: "Fondsenwervende evenementen", desc: "Activiteiten voor zichtbaarheid en fondsenwerving" },
  { label: "Bijdragen vanuit het trainingsbureau", desc: "Interne bijdragen van de oprichters" },
  { label: "Eenmalige giften", desc: "Van vermogende particulieren en netwerk van oprichters" },
  { label: "Toekomstig: impactreizen", desc: "Bezoekers nemen zelf deel aan het project ter plaatse" },
];

const anbiInfo = [
  { label: "Rechtsvorm", value: "Stichting" },
  { label: "RSIN", value: "868370873" },
  { label: "Status", value: "ANBI-erkend" },
  { label: "Beloning bestuur", value: "Onbezoldigd" },
  { label: "KvK", value: "Nijmegen" },
];

export default function OverOnsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" id="grass-about" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Stichting · Nijmegen · ANBI
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease }}
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Over ons.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-5 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Een jonge stichting met serieuze uitvoeringskracht. Kleinschalig,
              persoonlijk en volledig transparant.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10"
            >
              <ImagePlaceholder
                label="(Afb L)"
                description="Het bestuur van Football is Life"
                aspect="21/9"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* ── Missie ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              <Label>Missie</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Voetbal als middel.
                <br />
                Community als doel.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
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
                Die kracht is zo groot, dat we besloten hebben er iets blijvends
                mee te doen. Zo is{" "}
                <strong style={{ color: "var(--charcoal)" }}>Football is Life</strong>{" "}
                ontstaan.
              </p>
              <p>
                Met deze stichting gebruiken we voetbal als middel om{" "}
                <strong style={{ color: "var(--green)" }}>communities te bouwen</strong>.
                Om mensen te verbinden. Om hoop, structuur en toekomst te brengen
                op plekken waar dat niet vanzelfsprekend is.
              </p>
              <p>
                De stichting kiest voor een{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  kleinschalige, persoonlijke en transparante aanpak
                </strong>
                , gericht op duurzame relaties met betrokken donateurs. In het
                eerste jaar werken we aan een eerste voorbeeldproject in Soweto,
                Mzuzu — dat als blauwdruk dient voor verdere uitbreiding.
              </p>
              <p>
                Wij communiceren niet dat wij &apos;arme kinderen helpen&apos;. Wij
                communiceren dat wij samen met lokale partners bouwen aan
                toekomstkansen via voetbal en empowerment.
              </p>
            </motion.div>
            <div className="md:col-span-2 mt-6">
              <ImagePlaceholder
                label="(Afb M)"
                description="Voetbal verbindt: jongeren en coaches samen"
                aspect="2.5/1"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ── Bestuur — with large photo placeholders ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <Label>Bestuur</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Drie mensen. Eén missie.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                Het bestuur werkt volledig onbezoldigd. Alleen werkelijk gemaakte
                onkosten worden gedeclareerd, conform de ANBI-voorwaarden.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {board.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="rounded-2xl overflow-hidden card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {/* Large photo placeholder */}
                  <ImagePlaceholder
                    label={member.photoLabel}
                    description={member.photoDesc}
                    aspect="4/3"
                    className="rounded-none"
                  />
                  <div className="p-6">
                    <p className="font-display font-bold text-lg" style={{ color: "var(--charcoal)" }}>
                      {member.name}
                    </p>
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mt-1 mb-3"
                      style={{ color: "var(--orange)" }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                      {member.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: "var(--green-pale)",
                            color: "var(--green)",
                            border: "1px solid rgba(33,77,58,0.12)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team in Malawi — with photo placeholders ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-10"
            >
              <Label>In Malawi</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Lokale uitvoering door lokale mensen.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                De dagelijkse uitvoering in Mzuzu wordt gedragen door een team
                dat de community van binnenuit kent.
              </p>
            </motion.div>

            {/* Group photo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-8"
            >
              <ImagePlaceholder
                label="(Afb N)"
                description="Het team in Malawi samen op het veld in Soweto"
                aspect="21/9"
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {malawiTeam.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ambassadeurs ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <Label>Ambassadeurs</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Gezichten van de missie.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Onze ambassadeurs zijn mensen met een sterke reputatie of specifiek
                netwerk in de sport- of zakenwereld. Zij zetten zich belangeloos in
                voor de zichtbaarheid en impact van Football is Life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {ambassadors.map((amb, i) => (
                <motion.div
                  key={amb.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="rounded-2xl overflow-hidden card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.12)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <ImagePlaceholder
                    label={amb.photoLabel}
                    description={amb.photoDesc}
                    aspect="4/3"
                    className="rounded-none"
                    dark={false}
                  />
                  <div className="p-6">
                    <p className="font-display font-bold text-lg" style={{ color: "var(--charcoal)" }}>
                      {amb.name}
                    </p>
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mt-1 mb-3"
                      style={{ color: "var(--orange)" }}
                    >
                      {amb.title}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                      {amb.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {amb.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: "var(--orange-pale)",
                            color: "var(--orange)",
                            border: "1px solid rgba(201,107,44,0.15)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 text-sm text-center"
              style={{ color: "var(--stone)" }}
            >
              Word jij onze volgende ambassadeur?{" "}
              <a
                href="mailto:info@footballislife.nl"
                className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--orange)" }}
              >
                Neem contact op
              </a>
            </motion.p>
          </div>
        </section>

        {/* ── Hoe we werken ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              <Label>Werkwijze</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Kleinschalig, persoonlijk,
                transparant.
              </h2>
            </motion.div>
            <div className="space-y-5">
              {[
                {
                  title: "Lokaal ingebed",
                  desc: "We werken altijd met en via lokale partners. Zij kennen de community — wij ondersteunen en borgen de aanpak.",
                },
                {
                  title: "Persoonlijk contact",
                  desc: "Donateurs krijgen directe updates van het veld. Geen bulkmails, maar echte betrokkenheid bij het project.",
                },
                {
                  title: "Verantwoord besteden",
                  desc: "Alle middelen gaan naar het project. Het bestuur werkt onbezoldigd. Transparante financiële verantwoording.",
                },
                {
                  title: "Schaalbaar model",
                  desc: "We beginnen met Soweto als blauwdruk. Daarna groeien we naar Mzuzu, Rumphi en Nkhata Bay.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  className="flex gap-4 py-4 border-b last:border-0"
                  style={{ borderColor: "var(--border)" }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Financiering ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Financiering</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Hoe we onze middelen verkrijgen.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
                Football is Life financiert haar activiteiten door middel van
                donaties, fondsenwerving en sponsorschap. Primair binnen het
                netwerk van de oprichters in de professionele sport en het
                bedrijfsleven.
              </p>
            </div>
            <ul className="space-y-0">
              {fundingSources.map((source, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b last:border-0"
                  style={{ borderColor: "rgba(33,77,58,0.12)" }}
                >
                  <span
                    className="font-display font-bold text-xs flex-shrink-0 mt-1 w-5"
                    style={{ color: "var(--orange)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                      {source.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--stone)" }}>
                      {source.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── ANBI & Contact ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <Label>Transparantie & ANBI</Label>
              <div className="space-y-0">
                {anbiInfo.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between py-3.5 border-b stat-card"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--stone)" }}>
                      {row.label}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "var(--charcoal)" }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed" style={{ color: "var(--stone)", opacity: 0.75 }}>
                Als ANBI-erkende instelling zijn donaties aan Football is Life
                fiscaal aftrekbaar. Alle financiele informatie is beschikbaar op
                verzoek via het bestuur.
              </p>
            </div>

            <div>
              <Label>Contact</Label>
              <address className="not-italic space-y-3">
                <p className="font-bold text-lg" style={{ color: "var(--charcoal)" }}>
                  Stichting Football is Life
                </p>
                <p style={{ color: "var(--stone)" }}>
                  Dobbelmannweg 128
                  <br />
                  6531 KZ Nijmegen
                </p>
                <a
                  href="tel:+31639478488"
                  className="block font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  +31 6 39 47 84 88
                </a>
              </address>

              <div
                className="mt-8 pt-8 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-sm mb-4" style={{ color: "var(--stone)" }}>
                  Wil je bijdragen aan het project in Soweto?
                </p>
                <Link
                  href="/doneren"
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white btn-primary"
                  style={{ background: "var(--orange)" }}
                >
                  Doneer nu →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
