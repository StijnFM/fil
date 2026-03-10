"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const timelineItems = [
  {
    title: "Libre Foundation",
    desc: "Paul van Zwam en Ivo Spanjersberg werken als trainers bij Libre Foundation. De organisatie verzorgt gratis leiderschaps- en communicatietrainingen voor lokale organisaties in ontwikkelingslanden.",
    dark: true,
    label: "(Afb T1)",
  },
  {
    title: "Malawi",
    desc: "Via Libre Foundation komen ze in contact met UNGWERU in Mzuzu. Een lokale NGO die sinds 2004 werkt aan onderwijs, gezondheidszorg en jeugdontwikkeling.",
    dark: false,
    label: "(Afb T2)",
  },
  {
    title: "Soweto",
    desc: "In de armste wijk van Mzuzu zien ze de realiteit: geen sportfaciliteiten, geen buurthuizen, geen georganiseerde activiteiten voor jongeren. Maar wel een enorme energie en behoefte.",
    dark: true,
    label: "(Afb T3)",
  },
  {
    title: "Het idee",
    desc: "De overtuiging is simpel: voetbal maakt jongeren zichtbaar en biedt een veilige ingang. Via goed opgeleide coaches leren deelnemers direct levensvaardigheden.",
    dark: false,
    label: "(Afb T4)",
  },
  {
    title: "De oprichting",
    desc: "Stichting Football is Life, Pass it on wordt opgericht. ANBI-erkend, volledig onbezoldigd bestuur, gericht op een kleinschalige en persoonlijke aanpak.",
    dark: true,
    label: "(Afb T5)",
  },
  {
    title: "Ambassadeurs",
    desc: "Peter Bosz en Bryan Linssen sluiten zich aan als voetbalambassadeurs. Hun betrokkenheid opent deuren in de sportwereld.",
    dark: false,
    label: "(Afb T6)",
  },
  {
    title: "VVCS",
    desc: "De Vereniging van Contractspelers levert trainingskleding en sportmateriaal. Een directe brug tussen profvoetbal en het project.",
    dark: true,
    label: "(Afb T7)",
  },
  {
    title: "Eerste reis",
    desc: "In februari 2026 vertrekken de oprichters naar Malawi om de samenwerking met UNGWERU te formaliseren en de Trainer Coach 1-opleiding voor te bereiden.",
    dark: false,
    label: "(Afb T8)",
  },
  {
    title: "Toekomst",
    desc: "Soweto is de blauwdruk. Er is al interesse vanuit Noord-Ghana en Tanzania voor vergelijkbare projecten.",
    dark: true,
    label: "(Afb T9)",
  },
];

const kernwaarden = [
  {
    title: "Lokale verankering",
    desc: "We werken altijd met en via lokale partners die de community kennen.",
  },
  {
    title: "Trots op samenwerking",
    desc: "Partnerschap, geen afhankelijkheid. Samen bouwen, samen groeien.",
  },
  {
    title: "Jongens en meisjes",
    desc: "Gendergelijkheid is geen bijzaak. Beide groepen krijgen gelijke kansen.",
  },
  {
    title: "Structuur en discipline",
    desc: "Voetbaltraining als bron van regelmaat, afspraken en verantwoordelijkheid.",
  },
  {
    title: "Hoop en perspectief",
    desc: "Elke training is een stap richting een toekomst met meer mogelijkheden.",
  },
  {
    title: "Professionaliteit",
    desc: "Een klein team met serieuze uitvoeringskracht en volledige transparantie.",
  },
];

export default function OnsVerhaalPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" id="grass-verhaal" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <Label>Ons verhaal</Label>
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
              Hoe het begon.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-5 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Van leiderschapstraining in Afrika naar een stichting die voetbal
              gebruikt als middel voor verandering.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10"
            >
              <ImagePlaceholder
                label="(Afb V2)"
                description="De oprichters in Malawi"
                aspect="21/9"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              <Label>Het begin</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Van Libre Foundation naar Football is Life.
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
                Paul van Zwam en Ivo Spanjersberg werken als sportpsychologen en
                trainers bij Libre Foundation. Die organisatie verzorgt gratis
                leiderschaps- en communicatietrainingen voor lokale organisaties
                in ontwikkelingslanden.
              </p>
              <p>
                Via dat werk kwamen ze in contact met UNGWERU, een lokale NGO in
                Mzuzu, Malawi. Ze zagen de enorme energie van jongeren in Soweto,
                de armste wijk van de stad. Maar ook het gebrek aan faciliteiten,
                begeleiding en perspectief.
              </p>
              <p>
                De overtuiging werd simpel en krachtig: voetbal maakt jongeren
                zichtbaar en biedt een veilige ingang. Via goed opgeleide coaches
                leren deelnemers direct levensvaardigheden. Zo ontstond Football
                is Life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section style={{ background: "var(--sand-light)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-14 text-center"
            >
              <Label>Tijdlijn</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Van idee naar uitvoering.
              </h2>
            </motion.div>

            {/* Timeline container */}
            <div className="relative">
              {/* Vertical center line (desktop only) */}
              <div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ background: "rgba(33,77,58,0.18)" }}
              />
              {/* Mobile left line */}
              <div
                className="md:hidden absolute left-4 top-0 bottom-0 w-px"
                style={{ background: "rgba(33,77,58,0.18)" }}
              />

              <div className="space-y-10 md:space-y-0">
                {timelineItems.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: 0.05, ease }}
                      className={`relative flex items-start gap-6 md:gap-0 md:grid md:grid-cols-2 ${i > 0 ? "md:mt-[-2rem]" : ""}`}
                    >
                      {/* Mobile layout: dot + content side by side */}
                      {/* Desktop: alternating left/right */}

                      {/* Dot (mobile: left aligned; desktop: center) */}
                      <div
                        className="relative z-10 flex-shrink-0 w-8 h-8 md:hidden rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: "var(--green)",
                          color: "var(--ivory)",
                          marginLeft: "0",
                        }}
                      >
                        {i + 1}
                      </div>

                      {/* Desktop left slot */}
                      <div
                        className={`hidden md:flex py-8 ${isLeft ? "pr-12 justify-end" : "pr-12 justify-end opacity-0 pointer-events-none"}`}
                      >
                        {isLeft && (
                          <div className="max-w-sm w-full">
                            <div
                              className="rounded-2xl p-6"
                              style={{
                                background: "var(--white)",
                                border: "1px solid var(--border)",
                                boxShadow: "var(--shadow-card)",
                              }}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <span
                                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                                >
                                  {i + 1}
                                </span>
                                <p
                                  className="font-display font-bold text-base"
                                  style={{ color: "var(--charcoal)" }}
                                >
                                  {item.title}
                                </p>
                              </div>
                              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                                {item.desc}
                              </p>
                              <ImagePlaceholder
                                label={item.label}
                                description={item.title}
                                aspect="1/1"
                                dark={item.dark}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Desktop center dot */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 z-10">
                        <div
                          className="w-4 h-4 rounded-full border-2"
                          style={{
                            background: "var(--green)",
                            borderColor: "var(--sand-light)",
                            boxShadow: "0 0 0 3px rgba(33,77,58,0.20)",
                          }}
                        />
                      </div>

                      {/* Desktop right slot */}
                      <div
                        className={`hidden md:flex py-8 ${!isLeft ? "pl-12 justify-start" : "pl-12 justify-start opacity-0 pointer-events-none"}`}
                      >
                        {!isLeft && (
                          <div className="max-w-sm w-full">
                            <div
                              className="rounded-2xl p-6"
                              style={{
                                background: "var(--white)",
                                border: "1px solid var(--border)",
                                boxShadow: "var(--shadow-card)",
                              }}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <span
                                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                                  style={{ background: "var(--green)", color: "var(--ivory)" }}
                                >
                                  {i + 1}
                                </span>
                                <p
                                  className="font-display font-bold text-base"
                                  style={{ color: "var(--charcoal)" }}
                                >
                                  {item.title}
                                </p>
                              </div>
                              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                                {item.desc}
                              </p>
                              <ImagePlaceholder
                                label={item.label}
                                description={item.title}
                                aspect="1/1"
                                dark={item.dark}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Mobile content */}
                      <div
                        className="md:hidden flex-1 pb-8"
                        style={{ paddingLeft: "0.5rem" }}
                      >
                        <div
                          className="rounded-2xl p-5"
                          style={{
                            background: "var(--white)",
                            border: "1px solid var(--border)",
                            boxShadow: "var(--shadow-card)",
                          }}
                        >
                          <p
                            className="font-display font-bold text-base mb-2"
                            style={{ color: "var(--charcoal)" }}
                          >
                            {item.title}
                          </p>
                          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                            {item.desc}
                          </p>
                          <ImagePlaceholder
                            label={item.label}
                            description={item.title}
                            aspect="1/1"
                            dark={item.dark}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Kernwaarden ── */}
        <section style={{ background: "var(--green-pale)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <Label>Kernwaarden</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Waar we voor staan.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {kernwaarden.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.12)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "var(--green-pale)", border: "1px solid rgba(33,77,58,0.15)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--orange)" }}
                    />
                  </div>
                  <p
                    className="font-display font-bold text-base mb-2"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="text-center"
            >
              <div
                className="inline-block mb-6 text-4xl leading-none"
                style={{ color: "var(--orange)", opacity: 0.4, fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </div>
              <blockquote
                className="font-display font-extrabold leading-tight tracking-tight italic"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                We willen niet de zoveelste betweterige westerlingen zijn die wel
                even komen vertellen hoe het moet.
              </blockquote>
              <p
                className="mt-6 text-sm font-semibold tracking-wide"
                style={{ color: "var(--stone)" }}
              >
                Paul van Zwam en Ivo Spanjersberg, oprichters
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.18} stroke="white" id="grass-verhaal-cta" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
            >
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "rgba(246,241,232,0.95)",
                  letterSpacing: "-0.025em",
                }}
              >
                Schrijf mee aan dit verhaal.
              </h2>
              <p
                className="mt-4 max-w-md mx-auto text-lg leading-relaxed"
                style={{ color: "rgba(246,241,232,0.58)" }}
              >
                Elk verhaal heeft mensen nodig die het dragen. Word donateur,
                vrijwilliger of partner.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/doneren"
                  className="btn-primary px-7 py-3 rounded-full font-semibold text-white inline-flex items-center justify-center"
                  style={{ background: "var(--orange)" }}
                >
                  Doneer nu &rarr;
                </Link>
                <Link
                  href="/meedoen"
                  className="px-7 py-3 rounded-full font-semibold inline-flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{
                    color: "rgba(246,241,232,0.90)",
                    border: "1.5px solid rgba(246,241,232,0.30)",
                    background: "transparent",
                  }}
                >
                  Doe mee &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
