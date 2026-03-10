import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

export const metadata: Metadata = {
  title: "Transparantie — Football is Life",
  description:
    "ANBI-informatie, bestuurssamenstelling, financiele verantwoording en beleid van Stichting Football is Life. Volledig transparant, conform wettelijke vereisten.",
};

const anbiData = [
  { label: "Naam instelling", value: "Stichting Football is Life" },
  { label: "Rechtsvorm", value: "Stichting" },
  { label: "RSIN / fiscaal nummer", value: "868370873" },
  /* TODO: KvK-nummer opvragen bij Kamer van Koophandel */
  { label: "KvK-nummer", value: "Wordt aangevuld" },
  { label: "ANBI-status", value: "ANBI-erkend" },
  { label: "Adres", value: "Dobbelmannweg 128, 6531 KZ Nijmegen" },
  { label: "Telefoon", value: "+31 6 39 47 84 88" },
];

const bestuur = [
  {
    name: "Paul van Zwam",
    role: "Voorzitter",
    desc: "Paul voert naast zijn bestuursrol ook operationele taken uit. Hij is het gezicht van Football is Life in het veld en in het netwerk van de professionele sport.",
  },
  {
    name: "Ivo Spanjersberg",
    role: "Secretaris",
    desc: "Ivo verzorgt de communicatie, documentatie en coordinatie. Samen met Paul draagt hij operationele verantwoordelijkheid voor de dagelijkse gang van zaken.",
  },
  {
    name: "Mano Radema",
    role: "Penningmeester",
    desc: "Mano bewaakt de financien en zorgt dat elke gedoneerde euro transparant en verantwoord wordt besteed conform ANBI-voorwaarden.",
  },
];

const fundingSources = [
  {
    label: "Structurele particuliere donaties",
    desc: "Vaste donateurs die de stichting langdurig steunen met periodieke bijdragen.",
  },
  {
    label: "Sponsoring vanuit het bedrijfsleven",
    desc: "Bedrijven die zich verbinden aan de missie van Football is Life.",
  },
  {
    label: "Fondsenwervende evenementen",
    desc: "Activiteiten gericht op zichtbaarheid en fondsenwerving.",
  },
  {
    label: "Bijdragen vanuit het trainingsbureau",
    desc: "Interne bijdragen van de oprichters vanuit hun professionele activiteiten.",
  },
  {
    label: "Eenmalige giften",
    desc: "Van vermogende particulieren en het netwerk van de oprichters.",
  },
  {
    label: "Toekomstig: impactreizen",
    desc: "Bezoekers nemen zelf deel aan het project ter plaatse en dragen financieel bij.",
  },
];

const costBreakdown = [
  {
    item: "Aanleg voetbalveld",
    detail: "Grondwerk, doelen, afrastering en markeringen",
  },
  {
    item: "Sportmateriaal",
    detail: "Voetballen, hesjes, pionnen en trainingsmateriaal",
  },
  {
    item: "Trainersopleiding",
    detail: "Trainer Coach 1 — opleiding en begeleiding van lokale coaches",
  },
  {
    item: "2 jaar projectbegeleiding",
    detail: "Football is Life ter plaatse in Mzuzu",
  },
];

export default function TransparantiePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* ── 1. Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor opacity={0.22} stroke="white" id="grass-transparantie" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              ANBI-verantwoording
            </span>
            <h1
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Transparantie.
            </h1>
            <p
              className="mt-5 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Stichting Football is Life is ANBI-erkend. Op deze pagina vind je
              alle wettelijk vereiste informatie over ons bestuur, beleid en
              financiele verantwoording.
            </p>
          </div>
        </section>

        {/* ── 2. ANBI-gegevens ── */}
        <section
          style={{ background: "var(--ivory)" }}
          className="py-16 md:py-24 px-4 sm:px-6"
        >
          <div className="max-w-4xl mx-auto">
            <Label>Gegevens</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight mb-2"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              ANBI-informatie.
            </h2>
            <p
              className="mb-8 max-w-lg leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              Onderstaande gegevens zijn verplicht voor ANBI-erkende
              instellingen en worden actueel gehouden.
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {anbiData.map((row, i) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4"
                  style={{
                    borderBottom:
                      i < anbiData.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span
                    className="text-sm mb-1 sm:mb-0"
                    style={{ color: "var(--stone)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color:
                        row.value === "Wordt aangevuld"
                          ? "var(--stone)"
                          : "var(--charcoal)",
                      opacity: row.value === "Wordt aangevuld" ? 0.55 : 1,
                      fontStyle:
                        row.value === "Wordt aangevuld" ? "italic" : "normal",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Bestuur ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--sand-light)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Bestuur</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Bestuurssamenstelling.
              </h2>
              <p
                className="mt-3 max-w-lg"
                style={{ color: "var(--stone)" }}
              >
                Het bestuur van Stichting Football is Life bestaat uit drie
                leden die gezamenlijk verantwoordelijk zijn voor beleid,
                uitvoering en toezicht.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {bestuur.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-7 card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-5 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #2D6B52, #183828)",
                    }}
                  >
                    <span
                      className="font-display font-bold text-sm"
                      style={{ color: "rgba(246,241,232,0.50)" }}
                    >
                      {member.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                  <p
                    className="font-display font-bold text-lg"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mt-1 mb-3"
                    style={{ color: "var(--orange)" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--stone)" }}
                  >
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Beloningsbeleid ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Beloningsbeleid</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Volledig onbezoldigd.
              </h2>
              <div
                className="w-12 h-1 mt-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
            </div>
            <div
              className="space-y-4 leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              <p>
                Alle bestuursleden van Stichting Football is Life werken{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  volledig onbezoldigd
                </strong>
                . Er worden geen vacatiegelden, vergoedingen of salarissen
                uitgekeerd aan het bestuur.
              </p>
              <p>
                Uitsluitend werkelijk gemaakte en aantoonbare onkosten worden
                gedeclareerd, conform de ANBI-voorwaarden. Dit geldt voor
                alle bestuursleden en vrijwilligers.
              </p>
              <p>
                Hiermee garanderen we dat{" "}
                <strong style={{ color: "var(--green)" }}>
                  elke gedoneerde euro
                </strong>{" "}
                direct ten goede komt aan het project en de jongeren in
                Malawi.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Doelstelling ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--green-pale)" }}
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>Doelstelling</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Voetbal als middel voor empowerment.
              </h2>
              <div
                className="w-12 h-1 mt-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
            </div>
            <div
              className="space-y-4 leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              <p>
                Stichting Football is Life zet{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  voetbal in als toegangspoort
                </strong>{" "}
                tot coaching, life skills en persoonlijke ontwikkeling voor
                jongeren in Malawi.
              </p>
              <p>
                De stichting richt zich op het creeren van duurzame
                programma&apos;s waarin lokale coaches worden opgeleid, jongeren
                structuur en begeleiding krijgen, en communities worden
                versterkt van binnenuit.
              </p>
              <p>
                Wij communiceren niet dat wij &apos;arme kinderen helpen&apos;.
                Wij bouwen{" "}
                <strong style={{ color: "var(--green)" }}>
                  samen met lokale partners
                </strong>{" "}
                aan toekomstkansen via voetbal en empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. Beleidsplan ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--sand-light)" }}
        >
          <div className="max-w-4xl mx-auto">
            <Label>Beleidsplan</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight mb-6"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              Van blauwdruk naar groei.
            </h2>

            <div className="space-y-0">
              {[
                {
                  title: "Fase 1 — Soweto als blauwdruk",
                  desc: "In het eerste jaar ontwikkelen we een volledig communityproject in Soweto, Mzuzu. Dit project dient als bewezen model: aanleg voetbalveld, trainersopleiding (Trainer Coach 1), wekelijkse life skills sessies en 2 jaar begeleiding.",
                },
                {
                  title: "Fase 2 — Uitbreiding binnen Mzuzu",
                  desc: "Na succesvolle afronding van het Soweto-project breiden we uit naar andere wijken in Mzuzu, op basis van dezelfde methodiek en lokale partnerschappen.",
                },
                {
                  title: "Fase 3 — Rumphi en Nkhata Bay",
                  desc: "Op langere termijn groeien we naar de regio's Rumphi en Nkhata Bay. Steeds met dezelfde principes: lokaal ingebed, kleinschalig, duurzaam en transparant.",
                },
              ].map((phase, i) => (
                <div
                  key={phase.title}
                  className="flex gap-4 py-5 border-b last:border-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="font-display font-bold text-xs flex-shrink-0 mt-1 w-5"
                    style={{ color: "var(--orange)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {phase.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--stone)" }}
                    >
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Financiering ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
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
              <p
                className="mt-4 leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
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
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {source.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--stone)" }}
                    >
                      {source.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 8. Kostenopbouw ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--ivory)" }}
        >
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
                &euro; 15.000
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                Totaal benodigd voor het Soweto-project: aanleg voetbalveld,
                trainersopleiding en 2 jaar begeleiding ter plaatse in Mzuzu.
              </p>
            </div>

            <div>
              <Label>Bestedingsoverzicht</Label>
              <div className="space-y-0">
                {costBreakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-b last:border-0"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="font-display font-bold text-sm flex-shrink-0 mt-0.5 w-6 text-right"
                      style={{ color: "var(--orange)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {item.item}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--stone)" }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Jaarverslag & financiele stukken ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--sand-light)" }}
        >
          <div className="max-w-4xl mx-auto">
            <Label>Documenten</Label>
            <h2
              className="font-display font-extrabold leading-tight tracking-tight mb-4"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "var(--green)",
                letterSpacing: "-0.02em",
              }}
            >
              Jaarverslag en financiele verantwoording.
            </h2>
            <p
              className="mb-8 max-w-lg leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              Conform ANBI-vereisten publiceren we jaarlijks een verslag van
              de uitgeoefende activiteiten en een financiele verantwoording.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Verslag van activiteiten",
                  desc: "Jaarlijks overzicht van uitgevoerde projecten, bereikte resultaten en voortgang van het programma.",
                  status: "Beschikbaar na afsluiting eerste boekjaar",
                },
                {
                  title: "Financiele verantwoording",
                  desc: "Balans, staat van baten en lasten met toelichting. Inzicht in hoe elke euro is besteed.",
                  status: "Beschikbaar na afsluiting eerste boekjaar",
                },
              ].map((doc) => (
                <div
                  key={doc.title}
                  className="rounded-2xl p-7 card-hover"
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
                    {doc.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--stone)" }}
                  >
                    {doc.desc}
                  </p>
                  <span
                    className="inline-block text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--green-pale)",
                      color: "var(--green)",
                      border: "1px solid rgba(33,77,58,0.12)",
                    }}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="mt-6 text-sm leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              Wil je nu al inzage in onze financien of heb je vragen over ons
              beleid? Neem contact op met het bestuur via{" "}
              <a
                href="tel:+31639478488"
                className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--orange)" }}
              >
                +31 6 39 47 84 88
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── 10. Contact ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <Label>Contact</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight mb-6"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Neem contact op.
              </h2>
              <address className="not-italic space-y-3">
                <p
                  className="font-bold text-lg"
                  style={{ color: "var(--charcoal)" }}
                >
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
            </div>
            <div
              className="rounded-2xl p-7"
              style={{
                background: "var(--green-pale)",
                border: "1px solid rgba(33,77,58,0.10)",
              }}
            >
              <p
                className="font-display font-bold text-base mb-3"
                style={{ color: "var(--green)" }}
              >
                ANBI-voordeel voor donateurs
              </p>
              <div
                className="space-y-3 text-sm leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                <p>
                  Als ANBI-erkende instelling zijn donaties aan Stichting
                  Football is Life{" "}
                  <strong style={{ color: "var(--charcoal)" }}>
                    fiscaal aftrekbaar
                  </strong>
                  . Dit geldt zowel voor eenmalige als periodieke giften.
                </p>
                <p>
                  Bij een periodieke gift (minimaal 5 jaar vastgelegd) is het
                  volledige bedrag aftrekbaar, zonder drempelbedrag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. CTA ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor
            id="grass-transparantie-cta"
            opacity={0.22}
            stroke="white"
          />
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Vertrouwen begint bij transparantie.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Elke euro wordt verantwoord besteed. Het bestuur werkt
              onbezoldigd. Donaties zijn fiscaal aftrekbaar.
            </p>
            <Link
              href="/doneren"
              className="mt-8 inline-flex items-center px-9 py-4 rounded-full font-semibold text-lg text-white btn-primary"
              style={{
                background: "var(--orange)",
                boxShadow: "var(--glow-orange)",
              }}
            >
              Doneer nu →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
