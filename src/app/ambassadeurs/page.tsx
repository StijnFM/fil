"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const boszCareer = [
  { year: "2002", achievement: "Kampioen amateurklasse met AGOVV" },
  { year: "2005", achievement: "Promotie naar Eredivisie met Heracles Almelo" },
  { year: "2006", achievement: "Technisch directeur Feyenoord" },
  { year: "2013", achievement: "Hoofdtrainer Vitesse, daarna Maccabi Tel Aviv" },
  { year: "2017", achievement: "Europa League-finale met Ajax" },
  { year: "2017", achievement: "Hoofdtrainer Borussia Dortmund" },
  { year: "2018", achievement: "Hoofdtrainer Bayer Leverkusen tot 2021" },
  { year: "2024", achievement: "Tweevoudig Eredivisiekampioen met PSV" },
];

const linssenCareer = [
  { year: "2008", achievement: "Profdebuut bij Fortuna Sittard" },
  { year: "2010", achievement: "VVV-Venlo, Heracles Almelo, FC Groningen" },
  { year: "2017", achievement: "Vitesse, 47 goals en 20 assists in 113 wedstrijden" },
  { year: "2020", achievement: "Feyenoord, twee seizoenen in De Kuip" },
  { year: "2022", achievement: "Urawa Red Diamonds, avontuur in Japan" },
  { year: "2025", achievement: "NEC" },
];

const vvcsPoints = [
  "Trainingskleding en sportmateriaal voor coaches en jongeren",
  "Verbinding tussen profvoetbal en grassroots-ontwikkeling",
  "Maatschappelijke betrokkenheid van de spelersvereniging",
];

const wordAmbassadeurCards = [
  {
    title: "Sport & netwerk",
    desc: "Zet je in voor de zichtbaarheid van Football is Life binnen de professionele sportwereld en open deuren bij sportclubs en organisaties.",
  },
  {
    title: "Bedrijfsleven",
    desc: "Verbind bedrijven aan de missie en help bij het werven van structurele sponsoring en partnerschappen.",
  },
  {
    title: "Community & media",
    desc: "Vergroot het bereik via media, evenementen en persoonlijke inzet. Deel het verhaal met een breed publiek.",
  },
];

export default function AmbassadeursPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" id="grass-ambassadeurs" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <Label>Ambassadeurs</Label>
            </motion.div>

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
              Onze Ambassadeurs.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-5 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Voetbal verbindt. Onze ambassadeurs zetten hun naam en netwerk in
              om Football is Life zichtbaar te maken in de sport- en zakenwereld.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10"
            >
              <ImagePlaceholder
                label="(Afb V1)"
                description="Peter Bosz en Bryan Linssen, ambassadeurs Football is Life"
                aspect="21/9"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* ── Peter Bosz Profile ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">

            {/* Left: Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              <ImagePlaceholder
                label="(Foto: Peter Bosz)"
                description="Peter Bosz, voetbalambassadeur Football is Life"
                aspect="3/4"
                className="rounded-2xl"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="flex flex-col gap-6"
            >
              <div>
                <Label>Voetbalambassadeur</Label>
                <h2
                  className="font-display font-extrabold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--green)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Peter Bosz
                </h2>
                <div className="w-12 h-1 mt-4 rounded-full" style={{ background: "var(--orange)" }} />
              </div>

              <p className="leading-relaxed" style={{ color: "var(--stone)" }}>
                Peter Bosz is een van de meest ervaren Nederlandse voetbaltrainers.
                Met een carriere die hem langs Ajax, Borussia Dortmund, Bayer Leverkusen
                en PSV voerde, kent hij de internationale voetbalwereld van binnenuit.
              </p>

              {/* Career highlights */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "var(--charcoal)", opacity: 0.5 }}
                >
                  Loopbaan
                </p>
                <ul className="space-y-0">
                  {boszCareer.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 py-3 border-b last:border-0"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <span
                        className="font-display font-bold text-sm flex-shrink-0 w-10"
                        style={{ color: "var(--orange)" }}
                      >
                        {item.year}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {item.achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote
                className="border-l-4 pl-5 py-2 italic leading-relaxed"
                style={{
                  borderColor: "var(--orange)",
                  color: "var(--stone)",
                  background: "rgba(201,107,44,0.05)",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <p className="text-sm">
                  &ldquo;Placeholder voor quote Peter Bosz over jeugdontwikkeling via voetbal.&rdquo;
                </p>
                <footer
                  className="mt-2 text-xs font-semibold not-italic"
                  style={{ color: "var(--orange)" }}
                >
                  Peter Bosz
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* ── Bryan Linssen Profile ── */}
        <section style={{ background: "var(--sand-light)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-col gap-6"
            >
              <div>
                <Label>Voetbalambassadeur</Label>
                <h2
                  className="font-display font-extrabold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--green)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Bryan Linssen
                </h2>
                <div className="w-12 h-1 mt-4 rounded-full" style={{ background: "var(--orange)" }} />
              </div>

              <p className="leading-relaxed" style={{ color: "var(--stone)" }}>
                Bryan Linssen is een profvoetballer met ruime Eredivisie-ervaring.
                Als aanvaller en buitenspeler speelde hij voor acht clubs in Nederland,
                Japan en internationaal.
              </p>

              {/* Career highlights */}
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "var(--charcoal)", opacity: 0.5 }}
                >
                  Loopbaan
                </p>
                <ul className="space-y-0">
                  {linssenCareer.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 py-3 border-b last:border-0"
                      style={{ borderColor: "rgba(33,77,58,0.12)" }}
                    >
                      <span
                        className="font-display font-bold text-sm flex-shrink-0 w-10"
                        style={{ color: "var(--orange)" }}
                      >
                        {item.year}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                        {item.achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote
                className="border-l-4 pl-5 py-2 italic leading-relaxed"
                style={{
                  borderColor: "var(--orange)",
                  color: "var(--stone)",
                  background: "rgba(201,107,44,0.05)",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                <p className="text-sm">
                  &ldquo;Placeholder voor quote Bryan Linssen over zijn betrokkenheid bij Football is Life.&rdquo;
                </p>
                <footer
                  className="mt-2 text-xs font-semibold not-italic"
                  style={{ color: "var(--orange)" }}
                >
                  Bryan Linssen
                </footer>
              </blockquote>
            </motion.div>

            {/* Right: Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <ImagePlaceholder
                label="(Foto: Bryan Linssen)"
                description="Bryan Linssen, voetbalambassadeur Football is Life"
                aspect="3/4"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* ── VVCS Partnership ── */}
        <section style={{ background: "var(--green-pale)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              <Label>Partner</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                VVCS: de brug tussen profvoetbal en Soweto.
              </h2>
              <div className="w-12 h-1 mt-5 mb-6 rounded-full" style={{ background: "var(--orange)" }} />

              <p className="leading-relaxed mb-8" style={{ color: "var(--stone)" }}>
                De VVCS (Vereniging van Contractspelers) is de belangenorganisatie
                voor profvoetballers in Nederland. Via de VVCS ontvangen wij
                trainingskleding en sportmateriaal voor ons project in Soweto.
                De samenwerking maakt een directe verbinding tussen de professionele
                voetbalwereld en grassroots-ontwikkeling in Malawi.
              </p>

              <ul className="space-y-0">
                {vvcsPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 py-4 border-b last:border-0"
                    style={{ borderColor: "rgba(33,77,58,0.12)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: "var(--orange)" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <ImagePlaceholder
                label="(Afb: VVCS materiaal)"
                description="Trainingskleding en materiaal van de VVCS"
                aspect="16/9"
                className="rounded-2xl"
                dark={false}
              />
            </motion.div>
          </div>
        </section>

        {/* ── Word ambassadeur ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <Label>Meedoen</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Word ambassadeur.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Wij zoeken mensen die zich belangeloos inzetten voor de zichtbaarheid
                en groei van Football is Life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {wordAmbassadeurCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="rounded-2xl overflow-hidden card-hover p-7"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "var(--green-pale)" }}
                  >
                    <span
                      className="font-display font-bold text-sm"
                      style={{ color: "var(--green)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-sm mb-2" style={{ color: "var(--stone)" }}>
                Geinteresseerd? Neem contact op via{" "}
                <a
                  href="mailto:info@footballislife.nl"
                  className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  info@footballislife.nl
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 text-center"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.18} stroke="white" id="grass-cta-amb" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Steun het project in Soweto.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/doneren"
                className="btn-primary px-7 py-3 rounded-full font-semibold text-white"
                style={{ background: "var(--orange)" }}
              >
                Doneer nu →
              </Link>
              <Link
                href="/project"
                className="px-7 py-3 rounded-full font-semibold border-2 transition-opacity hover:opacity-80"
                style={{
                  color: "rgba(246,241,232,0.90)",
                  borderColor: "rgba(246,241,232,0.35)",
                }}
              >
                Bekijk het project →
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
