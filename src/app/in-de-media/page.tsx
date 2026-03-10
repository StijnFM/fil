"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contentStrategy = [
  {
    num: "01",
    title: "Voetballende jongeren",
    desc: "Zes keer per jaar publiceren we een korte video waarin voetballende jongeren centraal staan. Zij dragen Football is Life-shirts en worden begeleid door goed opgeleide trainers. Elke video eindigt met: Football is Life, Pass it on!",
    freq: "6x per jaar",
  },
  {
    num: "02",
    title: "FC Soweto updates",
    desc: "Drie tot vier keer per jaar geven we een korte update van de voortgang bij FC Soweto. Van grondwerk tot eerste training.",
    freq: "3-4x per jaar",
  },
  {
    num: "03",
    title: "Mensen achter het project",
    desc: "In korte video's brengen we Crief, Isaac, Sam en Leo in beeld. Zij vertellen waarom empowerment essentieel is en hoe voetbal helpt om jongeren te bereiken.",
    freq: "5x per jaar",
  },
  {
    num: "04",
    title: "Maandelijkse verloting",
    desc: "Elke maand verloten we een voetbalshirt van een bekende speler onder de donateurs. Voor betrokkenheid en communityvorming.",
    freq: "Maandelijks",
  },
];

export default function InDeMediaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* Hero */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" id="grass-media" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Media
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
              In de Media.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-5 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Publicaties, persaandacht en onze contentstrategie.
            </motion.p>
          </div>
        </section>

        {/* Artikelen */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <Label>Publicaties</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                In het nieuws.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1 — real article */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease }}
                className="rounded-2xl overflow-hidden card-hover"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <ImagePlaceholder
                  label="(Afb: SportKnowHowXL)"
                  description="Screenshot artikel SportKnowHowXL"
                  aspect="16/9"
                  className="rounded-none"
                  dark
                />
                <div className="p-6">
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mb-2"
                    style={{ color: "var(--orange)" }}
                  >
                    SportKnowHowXL
                  </p>
                  <h3 className="font-display font-bold text-base leading-snug mb-2" style={{ color: "var(--charcoal)" }}>
                    Nieuwe stichting zet in op voetbal bij kwetsbare gemeenschappen in Malawi
                  </h3>
                  <p className="text-xs mb-1" style={{ color: "var(--stone)" }}>
                    12 februari 2026 &middot; Emilie Maclaine Pont
                  </p>
                  <p className="text-sm leading-relaxed mt-3 mb-4" style={{ color: "var(--stone)" }}>
                    Football is Life wil op lokaal niveau een duurzame bijdrage leveren aan de verbetering van samenlevingen in Afrika. Oprichters Paul van Zwam en Ivo Spanjersberg vertrokken onlangs naar Malawi.
                  </p>
                  <a
                    href="https://www.sportknowhowxl.nl/nieuws/nieuwe-stichting-zet-in-op-voetbal-bij-kwetsbare-gemeenschappen-in-malawi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: "var(--orange)" }}
                  >
                    Lees het volledige artikel &rarr;
                  </a>
                </div>
              </motion.div>

              {/* Card 2 — placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                  opacity: 0.55,
                }}
              >
                <ImagePlaceholder
                  label="(Afb: Artikel 2)"
                  description="Toekomstige publicatie"
                  aspect="16/9"
                  className="rounded-none"
                  dark={false}
                />
                <div className="p-6">
                  <p
                    className="font-display font-bold text-base leading-snug mb-2"
                    style={{ color: "var(--charcoal)" }}
                  >
                    Binnenkort meer
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    Nieuwe publicaties worden hier gedeeld.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 — placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                  opacity: 0.55,
                }}
              >
                <ImagePlaceholder
                  label="(Afb: Artikel 3)"
                  description="Toekomstige publicatie"
                  aspect="16/9"
                  className="rounded-none"
                  dark={false}
                />
                <div className="p-6">
                  <p
                    className="font-display font-bold text-base leading-snug mb-2"
                    style={{ color: "var(--charcoal)" }}
                  >
                    Binnenkort meer
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    Nieuwe publicaties worden hier gedeeld.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contentstrategie */}
        <section style={{ background: "var(--sand-light)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <Label>Contentstrategie</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Hoe we ons verhaal vertellen.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Structureel laten zien wat er daadwerkelijk gebeurt op het veld en daarbuiten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {contentStrategy.map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="rounded-2xl p-6 card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span
                      className="font-display font-bold text-xs"
                      style={{ color: "var(--orange)" }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "var(--green-pale)",
                        color: "var(--green)",
                        border: "1px solid rgba(33,77,58,0.12)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.freq}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section style={{ background: "var(--green-pale)" }} className="py-16 md:py-24 px-4 sm:px-6">
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
                LinkedIn en Instagram.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease }}
              >
                <p className="leading-relaxed mb-8" style={{ color: "var(--stone)" }}>
                  Onze primaire kanalen zijn LinkedIn en Instagram. We publiceren vanuit Nederland om kwaliteit en consistentie te waarborgen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.linkedin.com/company/football-is-life-foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity"
                    style={{
                      background: "var(--white)",
                      color: "var(--charcoal)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/footballislife.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity"
                    style={{
                      background: "var(--white)",
                      color: "var(--charcoal)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
              >
                <ImagePlaceholder
                  label="(Afb: Social Feed)"
                  description="Instagram en LinkedIn feed Football is Life"
                  aspect="4/3"
                  dark={false}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Perscontact */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="mb-10"
            >
              <Label>Pers</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Contact voor media.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="max-w-md"
            >
              <p className="mb-6" style={{ color: "var(--stone)" }}>
                Voor interviews, persverzoeken of samenwerkingen:
              </p>
              <address className="not-italic space-y-3">
                <a
                  href="mailto:info@footballislife.nl"
                  className="block font-semibold text-base hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  info@footballislife.nl
                </a>
                <a
                  href="tel:+31639478488"
                  className="block font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--charcoal)" }}
                >
                  +31 6 39 47 84 88
                </a>
                <p style={{ color: "var(--stone)" }}>
                  Dobbelmannweg 128
                  <br />
                  6531 KZ Nijmegen
                </p>
              </address>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.18} stroke="white" id="grass-media-cta" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
            >
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                  color: "rgba(246,241,232,0.95)",
                  letterSpacing: "-0.025em",
                }}
              >
                Deel ons verhaal.
              </h2>
              <p
                className="mt-4 max-w-lg mx-auto text-lg leading-relaxed"
                style={{ color: "rgba(246,241,232,0.58)" }}
              >
                Ken je iemand die dit moet zien? Deel ons verhaal via social media of stuur een bericht.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/doneren"
                  className="btn-primary px-7 py-3 rounded-full font-semibold text-white"
                  style={{ background: "var(--orange)" }}
                >
                  Doneer nu &rarr;
                </Link>
                <Link
                  href="/project"
                  className="px-7 py-3 rounded-full font-semibold border btn-secondary"
                  style={{ color: "rgba(246,241,232,0.75)", borderColor: "rgba(246,241,232,0.18)" }}
                >
                  Bekijk het project &rarr;
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
