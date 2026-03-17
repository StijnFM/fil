import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Label } from "@/components/Label";
import { PitchDecor } from "@/components/PitchDecor";

export const metadata: Metadata = {
  title: "Malawi — Football is Life",
  description:
    "Waarom Malawi, Mzuzu en Soweto? Achtergrond over het land, de stad en de wijk waar Football is Life jongeren duurzaam meer perspectief biedt via voetbal.",
};

const stats = [
  {
    value: "17,8",
    label: "Mediane leeftijd",
    sub: "Een van de jongste bevolkingen ter wereld",
  },
  {
    value: "~21 mln",
    label: "Inwoners",
    sub: "Bevolking Malawi (schatting 2024)",
  },
  {
    value: "46%",
    label: "Onder 15 jaar",
    sub: "Ruim de helft is jonger dan 18 jaar",
  },
  {
    value: ">50%",
    label: "Onder armoedegrens",
    sub: "Meer dan de helft leeft in armoede",
  },
];

const youthChallenges = [
  {
    title: "Onderwijs onder druk",
    desc: "De jeugdgeletterdheid steeg naar circa 73% in 2015, maar er is nog een lange weg te gaan. Veel jongeren verlaten school voortijdig door gebrek aan middelen of begeleiding.",
  },
  {
    title: "Werkloosheid en structuur",
    desc: "Circa 80% van de bevolking werkt in de landbouw. De economische mogelijkheden voor jongeren zijn daardoor beperkt. Weinigen vinden werk buiten de informele sector.",
  },
  {
    title: "Gebrek aan faciliteiten",
    desc: "In wijken als Soweto ontbreken sportfaciliteiten, buurthuizen en georganiseerde activiteiten. Jongeren hebben letterlijk geen plek om naartoe te gaan.",
  },
  {
    title: "Rolmodellen en begeleiding",
    desc: "Zonder zichtbare voorbeelden en structurele begeleiding is het voor jongeren moeilijk om perspectief te ontwikkelen. Coaches kunnen die rol vervullen.",
  },
];

const sportDevPoints = [
  {
    title: "Sociale integratie",
    desc: "Voetbal brengt mensen samen, ongeacht achtergrond, etniciteit of religie. Op het veld is iedereen gelijk.",
  },
  {
    title: "Leiderschap en samenwerking",
    desc: "Sport leert jongeren om verantwoordelijkheid te nemen, samen te werken en beslissingen te nemen onder druk.",
  },
  {
    title: "Gezondheid en welzijn",
    desc: "Een actieve leefstijl verbetert fysieke en mentale gezondheid, juist in omgevingen waar gezondheidszorg beperkt is.",
  },
  {
    title: "Bewezen in Mzuzu",
    desc: "Onderzoek uit het Verenigd Koninkrijk bevestigt dat sport-for-development programma's in Mzuzu effectief bijdragen aan empowerment van jongeren.",
  },
];

const mzuzuFacts = [
  {
    value: "221.272+",
    label: "Inwoners",
    sub: "Plus ca. 20.000 universitaire forenzen",
  },
  {
    value: "3e",
    label: "Grootste stad",
    sub: "Hoofdstad van de Northern Region",
  },
  { value: "15.000", label: "Stadioncapaciteit", sub: "Mzuzu Stadium" },
  { value: "263", label: "Basisscholen", sub: "Onder het Bisdom Mzuzu" },
];

export default function MalawiPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* ── Hero ── */}
        <section
          className="relative pt-16 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor id="grass-malawi-hero" opacity={0.09} stroke="white" />
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
              Context &middot; Achtergrond &middot; Waarom hier
            </span>

            <h1
              className="font-display font-extrabold leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Malawi.
              <br />
              <span style={{ color: "rgba(246,241,232,0.50)" }}>
                The Warm Heart
              </span>
              <br />
              <span style={{ color: "rgba(246,241,232,0.50)" }}>
                of Africa.
              </span>
            </h1>
            <p
              className="mt-5 max-w-xl text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.60)" }}
            >
              Een land met een van de jongste bevolkingen ter wereld. Meer dan
              de helft leeft onder de armoedegrens. Toch is er warmte,
              veerkracht en een enorme honger naar perspectief.
            </p>
          </div>
        </section>

        {/* ── Key Statistics Grid ── */}
        <section
          style={{ background: "var(--ivory)" }}
          className="py-16 md:py-24 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Kerncijfers</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Een land van jongeren.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                Malawi telt circa 21 miljoen inwoners. De mediane leeftijd is
                17,8 jaar en bijna de helft van de bevolking is jonger dan 15.
                Deze cijfers vertellen het verhaal van een land waar investeren
                in jongeren geen luxe is, maar noodzaak.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 stat-card"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.10)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <p
                    className="font-display font-bold leading-none mb-2"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      color: "var(--green)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "var(--stone)" }}
                  >
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--green-pale)",
                  border: "1px solid rgba(33,77,58,0.08)",
                }}
              >
                <p
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "var(--green)" }}
                >
                  ~80%
                </p>
                <p className="text-sm" style={{ color: "var(--stone)" }}>
                  van de bevolking werkt in de landbouw
                </p>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--green-pale)",
                  border: "1px solid rgba(33,77,58,0.08)",
                }}
              >
                <p
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "var(--green)" }}
                >
                  ~73%
                </p>
                <p className="text-sm" style={{ color: "var(--stone)" }}>
                  jeugdgeletterdheid in 2015 (15-24 jaar)
                </p>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--green-pale)",
                  border: "1px solid rgba(33,77,58,0.08)",
                }}
              >
                <p
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "var(--green)" }}
                >
                  51%
                </p>
                <p className="text-sm" style={{ color: "var(--stone)" }}>
                  van de bevolking is jonger dan 18 jaar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Mzuzu ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--green-pale)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>De stad</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Mzuzu. Hoofdstad van het noorden.
              </h2>
              <div
                className="w-12 h-1 mt-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
            </div>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              <p>
                Mzuzu is de derde stad van Malawi en de hoofdstad van de
                Northern Region. Met ruim 221.000 inwoners, aangevuld met
                zo&apos;n 20.000 universitaire forenzen, is het een levendig
                regionaal centrum.
              </p>
              <p>
                De stad is thuisbasis van Mzuzu University en het Mzuzu Stadium
                (capaciteit ca. 15.000). Etnisch divers: Tumbuka is de meest
                gesproken taal, naast Chewa en Tonga.
              </p>
              <p>
                Het Bisdom Mzuzu speelt een grote rol in onderwijs en
                gemeenschapsopbouw, met 263 basisscholen en 5 middelbare
                scholen. De grootste religieuze denominatie is de Church of
                Central Africa Presbyterian (28%), gevolgd door de katholieke
                kerk (17%).
              </p>
              <p>
                Mzuzu groeit snel en trekt steeds meer jongeren aan. Maar
                voorzieningen als onderwijs, gezondheidszorg en sport houden die
                groei niet bij. Vooral in de armere wijken is de nood het
                grootst.
              </p>
            </div>

            <div className="md:col-span-2 mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mzuzuFacts.map((f) => (
                  <div
                    key={f.label}
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
                      {f.value}
                    </p>
                    <p
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {f.label}
                    </p>
                    <p className="text-xs" style={{ color: "var(--stone)" }}>
                      {f.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <ImagePlaceholder
                label="(Afb P)"
                description="Panorama van Mzuzu: de derde stad van Malawi"
                aspect="21/9"
                dark={false}
                src="/images/photos/afb-p-malawi.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── About Soweto ── */}
        <section
          style={{ background: "var(--sand-light)" }}
          className="py-16 md:py-24 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Label>De wijk</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Soweto. Waarom juist hier.
              </h2>
              <div
                className="w-12 h-1 mt-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                Soweto is de armste wijk van Mzuzu. Jongeren groeien hier op
                zonder faciliteiten, zonder begeleiding en zonder zichtbare
                rolmodellen. Er zijn geen sportaccommodaties, geen buurthuizen,
                geen georganiseerde activiteiten.
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                Football is Life kiest bewust voor Soweto, omdat dit de plek is
                waar de nood het grootst is. Niet als eenmalige actie, maar als
                een{" "}
                <strong style={{ color: "var(--charcoal)" }}>
                  duurzaam programma dat lokaal geworteld is
                </strong>{" "}
                en lokaal wordt gedragen.
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                In samenwerking met lokale partners UNGWERU en St. Patrick
                bouwen we aan iets wat blijft: een voetbalveld, opgeleide
                coaches en een structuur die jongeren houvast biedt.
              </p>
            </div>
            <div className="space-y-4">
              <ImagePlaceholder
                label="(Afb Q)"
                description="Het dagelijks leven in Soweto, Mzuzu"
                aspect="4/3"
                src="/images/photos/afb-q.jpg"
              />
              <ImagePlaceholder
                label="(Afb R)"
                description="Jongeren in Soweto — de wijk zonder faciliteiten"
                aspect="4/3"
                dark={false}
                src="/images/photos/afb-r.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── Historische context ── */}
        <section
          style={{ background: "var(--sand-light)" }}
          className="py-16 md:py-24 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Historische context</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Mzuzu Diocese en de Ierse missionarissen.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-14 items-start">
              {/* Left column: narrative text */}
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                <p>
                  De eerste katholieke missie in het noorden van Malawi werd in
                  1938 gevestigd door de White Fathers, later bekend als
                  Missionaries of Africa. Zij legden de basis voor het
                  onderwijsnetwerk dat het diocees vandaag kenmerkt.
                </p>
                <p>
                  In 1970 arriveerden de eerste priesters van St. Patrick&apos;s
                  Missionary Society: Fathers Alfie Byrne, Frank Morris, Padraig
                  O Maille en Pat McGivern. Sindsdien heeft het diocees een
                  uitgebreid netwerk opgebouwd van 263 basisscholen, 5
                  middelbare scholen en 3 colleges.
                </p>
                <p>
                  Bishop John Ryan, lid van St. Patrick&apos;s Missionary
                  Society, speelt een bijzondere rol in dit verhaal. Naast zijn
                  pastorale werk doceert hij wiskunde aan Mzuzu University. In
                  2004 richtte hij UNGWERU op als community-based organisatie,
                  die in 2009 officieel werd geregistreerd als NGO. Vandaag is
                  UNGWERU een van de belangrijkste partners van Football is
                  Life.
                </p>
              </div>

              {/* Right column: key facts + image */}
              <div className="space-y-6">
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--white)",
                    border: "1px solid rgba(33,77,58,0.10)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="space-y-3">
                    {[
                      "263 basisscholen onder het diocees",
                      "5 middelbare scholen",
                      "3 colleges",
                      "Sinds 1970: St. Patrick\u2019s Missionary Society",
                      "UNGWERU opgericht in 2004 door Bishop John Ryan",
                    ].map((fact) => (
                      <div key={fact} className="flex gap-4 items-start">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: "var(--orange)" }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--stone)" }}
                        >
                          {fact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <ImagePlaceholder
                  label="(Afb: Diocese Mzuzu)"
                  description="Onderwijsnetwerk en gemeenschapswerk in Mzuzu Diocese"
                  aspect="3/2"
                  dark={false}
                  src="/images/photos/afb-diocese.jpg"
                />
              </div>
            </div>

            {/* Closing paragraph full-width */}
            <p
              className="mt-12 max-w-3xl text-base leading-relaxed"
              style={{ color: "var(--stone)" }}
            >
              Deze combinatie van onderwijs, gemeenschapswerk en sport vormt het
              fundament waarop het Football is Life-project is gebouwd. De
              infrastructuur en het vertrouwen dat in decennia is opgebouwd,
              maakt ons werk mogelijk.
            </p>
          </div>
        </section>

        {/* ── Sport for Development ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <Label>Sport for Development</Label>
                <h2
                  className="font-display font-extrabold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                    color: "var(--green)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Waarom voetbal werkt als instrument.
                </h2>
                <div
                  className="w-12 h-1 mt-5 rounded-full"
                  style={{ background: "var(--orange)" }}
                />
                <p
                  className="mt-6 leading-relaxed"
                  style={{ color: "var(--stone)" }}
                >
                  Voetbal is de populairste sport in Malawi. Het is
                  laagdrempelig, verbindend en overal speelbaar. Maar voetbal is
                  meer dan een spel: het is een bewezen instrument voor sociale
                  ontwikkeling.
                </p>
                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--stone)" }}
                >
                  Sport-for-development programma&apos;s gebruiken sport als
                  middel om jongeren te bereiken die via traditionele kanalen
                  onbereikbaar zijn. Het veld wordt een klaslokaal, de coach
                  wordt een mentor, en de training wordt een moment van
                  persoonlijke groei.
                </p>
              </div>

              <div className="space-y-5">
                {sportDevPoints.map((item) => (
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
                      <p
                        className="font-semibold text-sm mb-1"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--stone)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <ImagePlaceholder
                label="(Afb S)"
                description="Voetbal als verbindend middel: training in Mzuzu"
                aspect="21/9"
                src="/images/photos/afb-s.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── Youth Challenges ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--ivory)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Label>Uitdagingen</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Waar jongeren in Malawi tegenaan lopen.
              </h2>
              <p className="mt-3 max-w-xl" style={{ color: "var(--stone)" }}>
                De jonge bevolking van Malawi staat voor structurele
                uitdagingen. Zonder gerichte interventie blijven miljoenen
                jongeren achter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {youthChallenges.map((challenge, i) => (
                <div
                  key={challenge.title}
                  className="rounded-2xl p-7 card-hover"
                  style={{
                    background: i === 0 ? "var(--green)" : "var(--white)",
                    border:
                      i === 0
                        ? "1px solid var(--green-dark)"
                        : "1px solid var(--border)",
                    boxShadow:
                      i === 0 ? "var(--shadow-md)" : "var(--shadow-card)",
                  }}
                >
                  <p
                    className="font-display font-bold text-5xl leading-none mb-4"
                    style={{
                      color:
                        i === 0 ? "rgba(246,241,232,0.20)" : "var(--green)",
                      opacity: i === 0 ? 1 : 0.15,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{
                      color:
                        i === 0 ? "rgba(246,241,232,0.95)" : "var(--charcoal)",
                    }}
                  >
                    {challenge.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color:
                        i === 0 ? "rgba(246,241,232,0.60)" : "var(--stone)",
                    }}
                  >
                    {challenge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Map / Location Context ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--green-pale)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start mb-10">
              <div>
                <Label>Locatie</Label>
                <h2
                  className="font-display font-extrabold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                    color: "var(--green)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Midden in het hart van Zuidoost-Afrika.
                </h2>
              </div>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "var(--stone)" }}
              >
                <p>
                  Malawi is een langgerekt binnenland in Zuidoost-Afrika,
                  grenzend aan Mozambique, Tanzania en Zambia. Het Malawimeer,
                  een van de grootste meren van Afrika, domineert de oostgrens.
                </p>
                <p>
                  Mzuzu ligt in het noorden, op zo&apos;n 370 kilometer van de
                  hoofdstad Lilongwe. De stad is een belangrijk knooppunt voor
                  handel, onderwijs en transport in de Northern Region.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              label="(Afb T)"
              description="Kaart: Malawi met Mzuzu en Soweto gemarkeerd"
              aspect="16/9"
              dark={false}
            />
          </div>
        </section>

        {/* ── Photo Gallery ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "var(--sand-light)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <Label>Beelden</Label>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  color: "var(--green)",
                  letterSpacing: "-0.02em",
                }}
              >
                Het leven in Mzuzu en Soweto.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ImagePlaceholder
                label="(Afb U1)"
                description="Straatbeeld Mzuzu centrum"
                aspect="4/3"
                src="/images/photos/afb-u1.jpg"
              />
              <ImagePlaceholder
                label="(Afb U2)"
                description="Kinderen op weg naar school in Soweto"
                aspect="4/3"
                dark={false}
                src="/images/photos/afb-u2.jpg"
              />
              <ImagePlaceholder
                label="(Afb U3)"
                description="De markt van Mzuzu"
                aspect="4/3"
                src="/images/photos/afb-u3.jpg"
              />
              <ImagePlaceholder
                label="(Afb U4)"
                description="Voetballende jongeren op een onverhard veld"
                aspect="4/3"
                dark={false}
                src="/images/photos/afb-u4.jpg"
              />
              <ImagePlaceholder
                label="(Afb U5)"
                description="Mzuzu University campus"
                aspect="4/3"
                src="/images/photos/afb-u5.jpg"
              />
              <ImagePlaceholder
                label="(Afb U6)"
                description="Gemeenschapsleven in Soweto"
                aspect="4/3"
                dark={false}
                src="/images/photos/afb-u6.jpg"
              />
            </div>

            <div className="mt-4">
              <ImagePlaceholder
                label="(Afb U7)"
                description="Panorama: de heuvels rondom Mzuzu bij zonsondergang"
                aspect="21/9"
                src="/images/photos/afb-u7.jpg"
              />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <PitchDecor id="grass-malawi-cta" opacity={0.22} stroke="white" />
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2
              className="font-display font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "rgba(246,241,232,0.95)",
                letterSpacing: "-0.025em",
              }}
            >
              Dit is waarom we hier zijn.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(246,241,232,0.58)" }}
            >
              Soweto, Mzuzu, Malawi. Een plek waar jongeren niet om hulp vragen,
              maar waar kansen maken het verschil maakt.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href="/project"
                className="px-7 py-3.5 rounded-full font-semibold text-base border btn-secondary"
                style={{
                  color: "rgba(246,241,232,0.75)",
                  borderColor: "rgba(246,241,232,0.18)",
                }}
              >
                Bekijk het project
              </Link>
              <Link
                href="/doneren"
                className="px-9 py-3.5 rounded-full font-semibold text-base text-white btn-primary"
                style={{
                  background: "var(--orange)",
                  boxShadow: "var(--glow-orange)",
                }}
              >
                Doneer nu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
