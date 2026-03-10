import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

export const metadata: Metadata = {
  title: "Doe mee — Football is Life",
  description:
    "Er zijn veel manieren om bij te dragen aan Football is Life. Doneer, word ambassadeur, sponsor, deel ons verhaal of sluit je aan bij de Football Shirt Challenge.",
};

const ways = [
  {
    n: "01",
    title: "Doneren",
    desc: "Directe financiele steun aan het project. ANBI-erkend en fiscaal aftrekbaar.",
    href: "/doneren",
  },
  {
    n: "02",
    title: "Ambassadeur worden",
    desc: "Verbind jouw netwerk en reputatie aan de missie van Football is Life.",
    href: "#ambassadeurs",
  },
  {
    n: "03",
    title: "Bedrijfssponsoring",
    desc: "Structurele partnerschappen en gedeelde impactrapportages.",
    href: "#sponsoring",
  },
  {
    n: "04",
    title: "Football Shirt Challenge",
    desc: "Maandelijkse verloting onder donateurs. Win een shirt van een bekende speler.",
    href: "#shirt-challenge",
  },
  {
    n: "05",
    title: "Impactreizen",
    desc: "Toekomstig: bezoek het project ter plaatse en ervaar de impact zelf.",
    href: "#impactreizen",
  },
  {
    n: "06",
    title: "Delen op social media",
    desc: "Vergroot ons bereik door het verhaal te delen met jouw netwerk.",
    href: "#delen",
  },
];

const impactTiers = [
  { amount: "\u20AC 10", impact: "1 jongere, 1 jaar betere begeleiding" },
  { amount: "\u20AC 50", impact: "Bijdrage aan coachontwikkeling" },
  { amount: "\u20AC 100", impact: "Trainingen en life skills" },
];

const ambassadorSpots = [
  {
    title: "Sport & netwerk",
    desc: "Zet zich in voor zichtbaarheid binnen de professionele sportwereld. Opent deuren bij sportclubs, bonden en organisaties.",
    tags: ["Professionele sport", "Netwerk", "Zichtbaarheid"],
    photoLabel: "(Foto: Ambassadeur)",
    photoDesc: "Ambassadeur — sport & netwerk",
  },
  {
    title: "Bedrijfsleven",
    desc: "Verbindt bedrijven aan de missie van Football is Life. Helpt bij het werven van structurele sponsoring en partnerschappen.",
    tags: ["Sponsoring", "Partnerschappen", "MVO"],
    photoLabel: "(Foto: Ambassadeur)",
    photoDesc: "Ambassadeur — bedrijfsleven",
  },
  {
    title: "Community & media",
    desc: "Vergroot het bereik via media, evenementen en persoonlijke inzet. Deelt het verhaal van Football is Life met een breed publiek.",
    tags: ["Media", "Evenementen", "Storytelling"],
    photoLabel: "(Foto: Ambassadeur)",
    photoDesc: "Ambassadeur — community & media",
  },
];

const sponsorBenefits = [
  {
    title: "Verbinding met de missie",
    desc: "Jouw bedrijf wordt direct gekoppeld aan een tastbaar communityproject in Malawi.",
  },
  {
    title: "Gedeelde impactrapportage",
    desc: "Ontvang kwartaalrapportages met concrete resultaten die je intern en extern kunt delen.",
  },
  {
    title: "Logo placement",
    desc: "Zichtbaarheid op de website, in communicatie en bij evenementen van Football is Life.",
  },
  {
    title: "MVO-verhaal",
    desc: "Versterk je maatschappelijk verantwoord ondernemen met een authentiek en persoonlijk verhaal.",
  },
];

export default function MeedoenPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">

        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" id="grass-meedoen" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Betrokkenheid
            </span>
            <h1
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Doe mee.
            </h1>
            <p
              className="mt-5 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Er zijn veel manieren om bij te dragen aan Football is Life.
              Niet alleen financieel — ook met je netwerk, je tijd of je
              verhaal maak je verschil.
            </p>
            <div className="mt-10">
              <ImagePlaceholder
                label="(Afb O)"
                description="Community in actie — jongeren en vrijwilligers samen"
                aspect="21/9"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── Overview cards ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Overzicht</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Zes manieren om impact te maken.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                Van een eenmalige donatie tot ambassadeurschap — elke bijdrage
                telt en wordt gewaardeerd.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ways.map((way) => (
                <a
                  key={way.n}
                  href={way.href}
                  className="rounded-2xl p-6 card-hover transition-shadow"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span
                    className="font-display font-bold text-xs"
                    style={{ color: "var(--orange)" }}
                  >
                    {way.n}
                  </span>
                  <p
                    className="font-display font-extrabold text-lg mt-2 mb-2"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {way.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {way.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Doneren ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green)" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <Label>Doneren</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "rgba(246,241,232,0.95)",
                  letterSpacing: "-0.02em",
                }}
              >
                Elke euro telt.
                <br />
                Elke euro komt aan.
              </h2>
              <div className="w-12 h-1 mt-5 rounded-full" style={{ background: "var(--orange)" }} />
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "rgba(246,241,232,0.58)" }}
              >
                Jouw donatie gaat rechtstreeks naar coaches, trainingen en
                life skills voor jongeren in Soweto. Het bestuur werkt
                volledig onbezoldigd — geen overhead, alleen impact.
              </p>
              <p
                className="mt-3 text-sm"
                style={{ color: "rgba(246,241,232,0.42)" }}
              >
                ANBI-erkend. Donaties zijn fiscaal aftrekbaar.
              </p>

              <div className="mt-8">
                <Link
                  href="/doneren"
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white btn-primary"
                  style={{ background: "var(--orange)" }}
                >
                  Doneer nu
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {impactTiers.map((tier) => (
                <div
                  key={tier.amount}
                  className="rounded-xl p-5 flex items-center gap-5"
                  style={{
                    background: "rgba(246,241,232,0.05)",
                    border: "1px solid rgba(246,241,232,0.09)",
                  }}
                >
                  <span
                    className="font-display font-extrabold text-2xl flex-shrink-0"
                    style={{ color: "rgba(201,107,44,0.90)", minWidth: "4.5rem" }}
                  >
                    {tier.amount}
                  </span>
                  <p
                    className="text-sm leading-snug"
                    style={{ color: "rgba(246,241,232,0.55)" }}
                  >
                    {tier.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ambassadeurs ── */}
        <section
          id="ambassadeurs"
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--sand-light)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Ambassadeurs</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Zet jouw naam achter de missie.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Onze ambassadeurs zijn mensen met een sterke reputatie in de
                sport- of zakenwereld. Zij zetten zich belangeloos in voor de
                zichtbaarheid en impact van Football is Life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {ambassadorSpots.map((spot, i) => (
                <div
                  key={spot.title}
                  className="rounded-2xl overflow-hidden card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <ImagePlaceholder
                    label={spot.photoLabel}
                    description={spot.photoDesc}
                    aspect="4/3"
                    className="rounded-none"
                    dark={false}
                  />
                  <div className="p-6">
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: "var(--orange)" }}
                    >
                      Ambassadeur — {spot.title}
                    </p>
                    <p
                      className="font-display font-bold text-lg mb-3"
                      style={{ color: "var(--charcoal)" }}
                    >
                      Spot open
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                      {spot.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.tags.map((tag) => (
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
                </div>
              ))}
            </div>

            <p
              className="mt-8 text-sm text-center"
              style={{ color: "var(--stone)" }}
            >
              Interesse om ambassadeur te worden?{" "}
              <a
                href="mailto:info@footballislife.nl"
                className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--orange)" }}
              >
                Neem contact op via info@footballislife.nl
              </a>
            </p>
          </div>
        </section>

        {/* ── Bedrijfssponsoring ── */}
        <section
          id="sponsoring"
          className="py-16 md:py-24 px-4 sm:px-6 bg-background"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Bedrijfssponsoring</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Verbind jouw bedrijf aan impact.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
                Football is Life zoekt bedrijven die zich structureel willen
                verbinden aan de missie. Geen eenmalige cheque, maar een
                partnerschap met gedeelde impact en zichtbaarheid.
              </p>
              <p className="mt-3 text-sm" style={{ color: "var(--stone)", opacity: 0.7 }}>
                Voor meer informatie over sponsormogelijkheden, neem contact op
                met het bestuur via{" "}
                <a
                  href="mailto:info@footballislife.nl"
                  className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  info@footballislife.nl
                </a>
              </p>
            </div>

            <div className="space-y-0">
              {sponsorBenefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 py-4 border-b last:border-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="font-display font-bold text-xs flex-shrink-0 mt-1 w-5"
                    style={{ color: "var(--orange)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                      {benefit.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--stone)" }}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Football Shirt Challenge ── */}
        <section
          id="shirt-challenge"
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--green)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(201,107,44,0.80)" }}
              >
                Maandelijkse actie
              </span>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "rgba(246,241,232,0.95)",
                  letterSpacing: "-0.02em",
                }}
              >
                Football Shirt Challenge.
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ color: "rgba(246,241,232,0.58)" }}
              >
                Elke maand verloten we onder de donateurs een voetbalshirt
                van een bekende speler. Doneer en maak kans — en steun
                tegelijkertijd het project in Soweto.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Selectie: hoogste donatie van de maand",
                  "Of: de 10e donateur van de maand",
                  "Of: willekeurige trekking onder alle donateurs",
                ].map((rule) => (
                  <div key={rule} className="flex gap-3 items-start">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ background: "var(--orange)" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(246,241,232,0.50)" }}
                    >
                      {rule}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="mt-6 text-xs font-semibold"
                style={{ color: "rgba(246,241,232,0.35)" }}
              >
                Volg ons op LinkedIn en Instagram voor de maandelijkse
                bekendmaking.
              </p>
            </div>

            <ImagePlaceholder
              label="(Afb P)"
              description="Voetbalshirts van bekende spelers — de prijzen van de Football Shirt Challenge"
              aspect="4/3"
              className="rounded-xl"
            />
          </div>
        </section>

        {/* ── Impactreizen ── */}
        <section
          id="impactreizen"
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--sand-light)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <ImagePlaceholder
              label="(Afb Q)"
              description="Bezoekers ervaren het project in Soweto — impactreizen"
              aspect="4/3"
              className="rounded-xl"
              dark={false}
            />
            <div>
              <Label>Toekomstig</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Impactreizen.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
                In de toekomst biedt Football is Life de mogelijkheid om het
                project ter plaatse te bezoeken. Ervaar de impact zelf, ontmoet
                de jongeren en coaches, en draag bij aan het project op locatie.
              </p>
              <p className="mt-3 text-sm" style={{ color: "var(--stone)", opacity: 0.7 }}>
                Dit onderdeel is nog in ontwikkeling. Heb je interesse? Laat
                het ons weten — dan houden we je op de hoogte.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:info@footballislife.nl?subject=Interesse%20impactreizen"
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm border-2 hover:opacity-80 transition-opacity"
                  style={{
                    color: "var(--green)",
                    borderColor: "var(--green)",
                  }}
                >
                  Interesse melden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social media / Delen ── */}
        <section
          id="delen"
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--green-pale)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Label>Delen</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              Deel het verhaal. Vergroot de impact.
            </h2>
            <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--stone)" }}>
              Niet iedereen kan financieel bijdragen, en dat hoeft ook niet.
              Door het verhaal van Football is Life te delen met jouw netwerk
              help je ons enorm. Elke nieuwe volger, elk gedeeld bericht
              vergroot het bereik.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {[
                { platform: "LinkedIn", desc: "Deel met je professionele netwerk" },
                { platform: "Instagram", desc: "Volg ons voor updates uit het veld" },
              ].map((channel) => (
                <div
                  key={channel.platform}
                  className="rounded-xl p-5 text-center card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.12)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <p
                    className="font-display font-bold text-base mb-1"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {channel.platform}
                  </p>
                  <p className="text-xs" style={{ color: "var(--stone)" }}>
                    {channel.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <Label>Contact</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Neem contact op.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--stone)" }}>
                Heb je vragen over hoe je kunt bijdragen? Wil je meer weten
                over sponsoring, ambassadeurschap of het project? Het bestuur
                staat voor je klaar.
              </p>
            </div>

            <div>
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
                <a
                  href="mailto:info@footballislife.nl"
                  className="block font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--orange)" }}
                >
                  info@footballislife.nl
                </a>
              </address>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="space-y-2">
                  {[
                    { name: "Paul van Zwam", role: "Voorzitter" },
                    { name: "Ivo Spanjersberg", role: "Secretaris" },
                    { name: "Mano Radema", role: "Penningmeester" },
                  ].map((person) => (
                    <div key={person.name} className="flex justify-between py-2">
                      <span className="text-sm font-semibold" style={{ color: "var(--charcoal)" }}>
                        {person.name}
                      </span>
                      <span className="text-sm" style={{ color: "var(--stone)" }}>
                        {person.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.12} stroke="white" id="grass-cta-meedoen" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.02em",
              }}
            >
              Elke bijdrage maakt verschil.
            </h2>
            <p
              className="mt-4 max-w-md mx-auto leading-relaxed"
              style={{ color: "rgba(246,241,232,0.55)" }}
            >
              Of je nu doneert, je netwerk inzet of ons verhaal deelt —
              samen bouwen we aan meer kansen voor jongeren in Soweto.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/doneren"
                className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-white btn-primary"
                style={{ background: "var(--orange)" }}
              >
                Doneer nu
              </Link>
              <a
                href="mailto:info@footballislife.nl"
                className="inline-flex items-center px-7 py-3 rounded-full font-semibold border-2 hover:opacity-80 transition-opacity"
                style={{
                  color: "rgba(246,241,232,0.85)",
                  borderColor: "rgba(246,241,232,0.25)",
                }}
              >
                Neem contact op
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
