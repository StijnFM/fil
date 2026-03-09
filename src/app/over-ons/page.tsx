import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

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
    desc: "Paul voert naast zijn bestuursrol ook operationele taken uit. Hij is het gezicht van Football is Life in het veld.",
  },
  {
    name: "Ivo Spanjersberg",
    role: "Secretaris",
    initials: "IS",
    desc: "Ivo verzorgt de interne communicatie, documentatie en coördinatie. Samen met Paul draagt hij operationele verantwoordelijkheid.",
  },
  {
    name: "Mano Radema",
    role: "Penningmeester",
    initials: "MR",
    desc: "Mano bewaakt de financiën en zorgt dat elke gedoneerde euro transparant en verantwoord wordt besteed.",
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
        <section className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden pt-16">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 120 80"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            style={{ opacity: 0.09 }}
          >
            <g stroke="white" strokeWidth="0.5" fill="none">
              <rect x="4" y="4" width="112" height="72" />
              <circle cx="60" cy="40" r="10" />
              <line x1="60" y1="4" x2="60" y2="76" />
            </g>
          </svg>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-[100px] pointer-events-none"
            style={{ background: "var(--amber)", opacity: 0.10 }}
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "var(--amber)" }}
            >
              Stichting · Nijmegen · ANBI
            </p>
            <h1
              className="font-display font-black text-foreground leading-[0.85]"
              style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
            >
              OVER ONS.
            </h1>
            <p
              className="font-display font-black italic mt-3"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)",
                color: "rgba(254,249,240,0.4)",
              }}
            >
              Football is Life. Pass it on.
            </p>
          </div>
        </section>

        {/* ── Mission (cream) ── */}
        <section style={{ background: "var(--cream)" }} className="py-24 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(12,26,13,0.4)" }}
              >
                Missie
              </p>
              <h2
                className="font-display font-black leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "var(--pitch-dark)",
                }}
              >
                Voetbal als middel. Community als doel.
              </h2>
              <div
                className="w-14 h-1 mt-5 rounded-full"
                style={{ background: "var(--primary)" }}
              />
            </div>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(12,26,13,0.70)" }}
            >
              <p>
                Die kracht is zó groot, dat we besloten hebben er iets blijvends
                mee te doen. Zo is{" "}
                <strong style={{ color: "var(--pitch-dark)" }}>
                  Football is Life
                </strong>{" "}
                ontstaan.
              </p>
              <p>
                Met deze stichting gebruiken we voetbal als middel om{" "}
                <strong style={{ color: "var(--primary)" }}>
                  communities te bouwen
                </strong>
                . Om mensen te verbinden. Om hoop, structuur en toekomst te
                brengen op plekken waar dat niet vanzelfsprekend is.
              </p>
              <p>
                De stichting kiest voor een{" "}
                <strong style={{ color: "var(--pitch-dark)" }}>
                  kleinschalige, persoonlijke en transparante aanpak
                </strong>
                , gericht op duurzame relaties met betrokken donateurs. In het
                eerste jaar werken we aan een eerste voorbeeldproject in Mzuzu,
                dat als blauwdruk dient voor verdere uitbreiding.
              </p>
            </div>
          </div>
        </section>

        {/* ── Board ── */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--amber)" }}
            >
              Bestuur
            </p>
            <h2
              className="font-display font-black text-foreground mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Drie mensen. Één missie.
            </h2>
            <p
              className="mb-12 max-w-xl"
              style={{ color: "rgba(254,249,240,0.5)" }}
            >
              Het bestuur werkt volledig onbezoldigd. Alleen werkelijk gemaakte
              onkosten worden gedeclareerd, conform de ANBI-voorwaarden.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {board.map((member) => (
                <div
                  key={member.name}
                  className="glass-card rounded-2xl p-8"
                >
                  {/* Avatar */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-xl mb-6"
                    style={{
                      background: "rgba(245,166,35,0.15)",
                      border: "2px solid rgba(245,166,35,0.3)",
                      color: "var(--amber)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <p
                    className="font-bold text-foreground text-lg leading-tight"
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mt-1 mb-4"
                    style={{ color: "var(--amber)" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(254,249,240,0.5)" }}
                  >
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Funding ── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--amber)" }}
              >
                Financiering
              </p>
              <h2
                className="font-display font-black text-foreground leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Hoe we onze middelen verkrijgen.
              </h2>
              <p style={{ color: "rgba(254,249,240,0.55)" }} className="leading-relaxed">
                Football is Life financiert haar activiteiten door middel van
                donaties, fondsenwerving en sponsorschap. Primair binnen het
                netwerk van de oprichters in de professionele sport en het
                bedrijfsleven.
              </p>
            </div>
            <ul className="space-y-4">
              {fundingSources.map((source, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: "var(--glass-border)" }}
                >
                  <span
                    className="font-display font-black text-sm flex-shrink-0 mt-1"
                    style={{ color: "var(--amber)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {source.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(254,249,240,0.38)" }}
                    >
                      {source.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── ANBI & Contact ── */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* ANBI */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "var(--amber)" }}
              >
                Transparantie & ANBI
              </p>
              <div className="space-y-3">
                {anbiInfo.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between py-3 border-b"
                    style={{ borderColor: "var(--glass-border)" }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "rgba(254,249,240,0.45)" }}
                    >
                      {row.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="mt-6 text-xs leading-relaxed"
                style={{ color: "rgba(254,249,240,0.3)" }}
              >
                Als ANBI-erkende instelling zijn donaties aan Football is Life
                fiscaal aftrekbaar. Alle financiële informatie is beschikbaar op
                verzoek via het bestuur.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "var(--amber)" }}
              >
                Contact
              </p>
              <address className="not-italic space-y-3">
                <p className="font-bold text-foreground text-lg">
                  Stichting Football is Life
                </p>
                <p style={{ color: "rgba(254,249,240,0.55)" }}>
                  Dobbelmannweg 128
                  <br />
                  6531 KZ Nijmegen
                </p>
                <a
                  href="tel:+31639478488"
                  className="block font-semibold hover:opacity-75 transition-opacity"
                  style={{ color: "var(--amber)" }}
                >
                  +31 6 39 47 84 88
                </a>
              </address>

              <div
                className="mt-8 pt-8 border-t"
                style={{ borderColor: "var(--glass-border)" }}
              >
                <p
                  className="text-sm mb-4"
                  style={{ color: "rgba(254,249,240,0.45)" }}
                >
                  Wil je bijdragen aan het project in Soweto?
                </p>
                <Link
                  href="/doneren"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-opacity"
                >
                  Doneer nu →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ambassadors note ── */}
        <section
          className="py-16 px-6 border-t"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-sm leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(254,249,240,0.38)" }}
            >
              De stichting werkt met{" "}
              <strong style={{ color: "rgba(254,249,240,0.6)" }}>
                ambassadeurs
              </strong>
              : mensen met een sterke reputatie of specifiek netwerk in de sport-
              of zakenwereld, die zich belangeloos inzetten voor de zichtbaarheid
              en impact van de stichting. Elke ambassadeur heeft een specifieke
              taak.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
