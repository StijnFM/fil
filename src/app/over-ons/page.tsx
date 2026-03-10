import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

export const metadata: Metadata = {
  title: "Over ons — Football is Life",
  description:
    "Stichting Football is Life wordt bestuurd door een onbezoldigd bestuur van drie leden. ANBI-erkend, RSIN 868370873, gevestigd in Nijmegen.",
};

const board = [
  {
    name: "Paul van Zwam",
    role: "Voorzitter",
    initials: "PZ",
    desc: "Paul voert naast zijn bestuursrol ook operationele taken uit. Hij is het gezicht van Football is Life in het veld en in het netwerk.",
    expertise: ["Operationele leiding", "Netwerk professionele sport", "Veldwerk"],
  },
  {
    name: "Ivo Spanjersberg",
    role: "Secretaris",
    initials: "IS",
    desc: "Ivo verzorgt de interne communicatie, documentatie en coördinatie. Samen met Paul draagt hij operationele verantwoordelijkheid.",
    expertise: ["Communicatie", "Documentatie", "Coördinatie"],
  },
  {
    name: "Mano Radema",
    role: "Penningmeester",
    initials: "MR",
    desc: "Mano bewaakt de financiën en zorgt dat elke gedoneerde euro transparant en verantwoord wordt besteed conform ANBI-voorwaarden.",
    expertise: ["Financiën", "ANBI-verantwoording", "Transparantie"],
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
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "rgba(201,107,44,0.80)" }}
            >
              Stichting · Nijmegen · ANBI
            </span>
            <h1
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Over ons.
            </h1>
            <p
              className="mt-5 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Een jonge stichting met serieuze uitvoeringskracht. Kleinschalig,
              persoonlijk en volledig transparant.
            </p>
            <div className="mt-10">
              <ImagePlaceholder
                label="(Afb L)"
                description="Het bestuur van Football is Life"
                aspect="21/9"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── Missie ── */}
        <section style={{ background: "var(--ivory)" }} className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
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
            </div>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--stone)" }}>
              <p>
                Die kracht is zó groot, dat we besloten hebben er iets blijvends
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
            </div>
            {/* Mission image spanning both columns */}
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

        {/* ── Bestuur ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--sand-light)" }}>
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
                Drie mensen. Één missie.
              </h2>
              <p className="mt-3 max-w-lg" style={{ color: "var(--stone)" }}>
                Het bestuur werkt volledig onbezoldigd. Alleen werkelijk gemaakte
                onkosten worden gedeclareerd, conform de ANBI-voorwaarden.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {board.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-7 card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {/* Photo placeholder */}
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden mb-5 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #2D6B52, #183828)",
                    }}
                  >
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: "rgba(246,241,232,0.50)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <p className="font-bold text-base" style={{ color: "var(--charcoal)" }}>
                    {member.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mt-1 mb-4"
                    style={{ color: "var(--orange)" }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--stone)" }}>
                    {member.desc}
                  </p>
                  {/* Expertise tags */}
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
              ))}
            </div>
          </div>
        </section>

        {/* ── Team in Malawi ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
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
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Crief", role: "Coördinator", initials: "C" },
                { name: "Isaac", role: "Coach", initials: "I" },
                { name: "Sam", role: "Begeleider", initials: "S" },
                { name: "Leo", role: "Adviseur", initials: "L" },
              ].map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl p-6 text-center card-hover"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #2D6B52, #183828)" }}
                  >
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: "rgba(246,241,232,0.50)" }}
                    >
                      {person.initials}
                    </span>
                  </div>
                  <p className="font-bold text-base" style={{ color: "var(--charcoal)" }}>
                    {person.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mt-1"
                    style={{ color: "var(--orange)" }}
                  >
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hoe we werken ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
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
            </div>
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
              ].map((item) => (
                <div
                  key={item.title}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Financiering ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: "var(--green-pale)" }}>
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
            {/* ANBI */}
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
                fiscaal aftrekbaar. Alle financiële informatie is beschikbaar op
                verzoek via het bestuur.
              </p>
            </div>

            {/* Contact */}
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

        {/* ── Ambassadeurs ── */}
        <section
          className="py-14 px-6 border-t"
          style={{ borderColor: "var(--border)", background: "var(--sand-light)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--stone)" }}>
              De stichting werkt met{" "}
              <strong style={{ color: "var(--charcoal)" }}>ambassadeurs</strong>
              : mensen met een sterke reputatie of specifiek netwerk in de sport- of
              zakenwereld, die zich belangeloos inzetten voor de zichtbaarheid en
              impact van de stichting. Elke ambassadeur heeft een specifieke taak.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
