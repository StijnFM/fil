# Website Enrichment Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enrich 5 existing pages with deeper content from article/research/docs, add 3 new pages (/ambassadeurs, /ons-verhaal, /in-de-media), and update navigation.

**Architecture:** Content-driven changes to a Next.js 16 site using existing design system (CSS variables, Label/ImagePlaceholder/PitchDecor components, Motion animations). No new dependencies. All pages follow the established section pattern with alternating backgrounds.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Motion v12, existing component library.

**Style rule:** Avoid excessive em dashes in all text content. Use commas, periods and short sentences instead.

**Spec:** `docs/superpowers/specs/2026-03-10-website-enrichment-design.md`

---

## Chunk 1: Navigation + New Pages

### Task 1: Update Navbar and Footer with new links

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update navLinks array in Navbar.tsx**

Change the `navLinks` array (line 7-15) to include `/ambassadeurs` and reorder. The new primary links are the first 4, the rest go in "Meer" dropdown:

```typescript
const navLinks = [
  { href: "/over-ons", label: "Over ons" },
  { href: "/project", label: "Project" },
  { href: "/opleiding", label: "Opleiding" },
  { href: "/ambassadeurs", label: "Ambassadeurs" },
  { href: "/partners", label: "Partners" },
  { href: "/malawi", label: "Malawi" },
  { href: "/meedoen", label: "Meedoen" },
  { href: "/ons-verhaal", label: "Ons verhaal" },
  { href: "/in-de-media", label: "In de media" },
  { href: "/transparantie", label: "Transparantie" },
];
```

Also change `primaryLinks` from `slice(0, 3)` to `slice(0, 4)` on line 33.

- [ ] **Step 2: Update Footer with new links**

In `src/components/Footer.tsx`, update the "Organisatie" column (line 91-113) to include new pages:

```typescript
{[
  { href: "/over-ons", label: "Over ons" },
  { href: "/ambassadeurs", label: "Ambassadeurs" },
  { href: "/ons-verhaal", label: "Ons verhaal" },
  { href: "/in-de-media", label: "In de media" },
  { href: "/transparantie", label: "Transparantie & ANBI" },
  { href: "/meedoen", label: "Meedoen" },
  { href: "/doneren", label: "Doneren" },
].map((link) => (
```

Keep the special styling for the `/doneren` link.

- [ ] **Step 3: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/components/Footer.tsx
git commit -m "feat: update navigation with ambassadeurs, ons-verhaal, in-de-media links"
```

---

### Task 2: Create /ambassadeurs page

**Files:**
- Create: `src/app/ambassadeurs/page.tsx`

- [ ] **Step 1: Create the ambassadeurs page**

Create `src/app/ambassadeurs/page.tsx` as a server component with metadata. Follow the exact patterns from existing pages (over-ons/page.tsx as reference).

**Sections:**
1. **Hero** (green background + PitchDecor): "Onze Ambassadeurs" title. Subtitle: "Voetbal verbindt. Onze ambassadeurs zetten hun naam en netwerk in om Football is Life zichtbaar te maken in de sport- en zakenwereld."
2. **Peter Bosz profile** (ivory background): Full-width layout with large ImagePlaceholder (aspect 2:3, label "(Foto: Peter Bosz)", desc "Peter Bosz, voetbalambassadeur Football is Life"). Content:
   - Name: Peter Bosz
   - Role tag: Voetbalambassadeur
   - Bio: "Peter Bosz is een van de meest ervaren Nederlandse voetbaltrainers. Met een carriere die hem langs Ajax, Borussia Dortmund, Bayer Leverkusen en PSV voerde, kent hij de internationale voetbalwereld van binnenuit."
   - Career highlights as a timeline/list:
     - AGOVV: kampioen amateurklasse (2002)
     - Heracles Almelo: promotie naar Eredivisie (2005)
     - Feyenoord: technisch directeur
     - Vitesse: hoofdtrainer
     - Ajax: Europa League-finale (2017)
     - Borussia Dortmund: hoofdtrainer Bundesliga
     - Bayer Leverkusen: hoofdtrainer (2018-2021)
     - PSV: Eredivisiekampioen 2024 en 2025
   - Quote placeholder: "Placeholder voor quote Peter Bosz over jeugdontwikkeling via voetbal"
3. **Bryan Linssen profile** (sand-light background): Same layout mirrored. ImagePlaceholder (aspect 2:3, label "(Foto: Bryan Linssen)").
   - Name: Bryan Linssen
   - Role tag: Voetbalambassadeur
   - Bio: "Bryan Linssen is een profvoetballer met ruime Eredivisie-ervaring. Als aanvaller en buitenspeler speelde hij voor acht clubs in Nederland, Japan en internationaal."
   - Career highlights:
     - Fortuna Sittard: jeugdopleiding en profdebuut (2008)
     - VVV-Venlo en Heracles Almelo: doorbraak in de Eredivisie
     - FC Groningen: vaste waarde
     - Vitesse: 47 goals en 20 assists in 113 wedstrijden
     - Feyenoord: twee seizoenen in de Kuip (2020-2022)
     - Urawa Red Diamonds: avontuur in Japan (2022-2024)
     - NEC: huidige club (sinds 2025)
   - Quote placeholder: "Placeholder voor quote Bryan Linssen over zijn betrokkenheid bij Football is Life"
4. **VVCS partnership** (green-pale background): Card-style section explaining:
   - "De VVCS (Vereniging van Contractspelers) is de belangenorganisatie voor profvoetballers in Nederland. Via de VVCS ontvangen wij trainingskleding en sportmateriaal voor ons project in Soweto."
   - "De samenwerking met de VVCS maakt een directe verbinding tussen de professionele voetbalwereld en grassroots-ontwikkeling in Malawi."
   - ImagePlaceholder (16:9, label "(Afb: VVCS materiaal)", desc "Trainingskleding en materiaal van de VVCS")
5. **Word ambassadeur CTA** (ivory background): Three open positions in card grid:
   - Sport & netwerk: "Zet je in voor de zichtbaarheid van Football is Life binnen de professionele sportwereld."
   - Bedrijfsleven: "Verbind bedrijven aan de missie en help bij het werven van structurele sponsoring."
   - Community & media: "Vergroot het bereik via media, evenementen en persoonlijke inzet."
   - Contact CTA: link to mailto:info@footballislife.nl
6. **CTA section** (green background + PitchDecor): "Steun het project" with doneer button.

Use motion animations: fade-up with stagger delays, whileInView with once:true.

- [ ] **Step 2: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/ambassadeurs/page.tsx
git commit -m "feat: add ambassadeurs page with Peter Bosz and Bryan Linssen profiles"
```

---

### Task 3: Create /ons-verhaal page

**Files:**
- Create: `src/app/ons-verhaal/page.tsx`

- [ ] **Step 1: Create the ons-verhaal page**

Create `src/app/ons-verhaal/page.tsx` as a server component with metadata.

**Sections:**
1. **Hero** (green background + PitchDecor): "Hoe het begon." title. Subtitle: "Van leiderschapstraining in Afrika naar een stichting die voetbal gebruikt als middel voor verandering."
2. **Intro** (ivory): Two-column layout. Left: Label "Ons verhaal" + heading "Van Libre Foundation naar Football is Life." Right: narrative text about how Paul and Ivo, both working at Libre Foundation providing leadership training in developing countries, came into contact with UNGWERU in Mzuzu and saw the need in Soweto.
3. **Timeline** (sand-light): Vertical timeline with alternating left/right items. Each item has:
   - A year/period marker
   - Title
   - Description
   - Small ImagePlaceholder (1:1 ratio, alternating dark/light)

   Timeline items:
   - "Libre Foundation": "Paul van Zwam en Ivo Spanjersberg werken als trainers bij Libre Foundation. De organisatie verzorgt gratis leiderschaps- en communicatietrainingen voor lokale organisaties in ontwikkelingslanden."
   - "Malawi": "Via Libre Foundation komen ze in contact met UNGWERU in Mzuzu. Een lokale NGO die sinds 2004 werkt aan onderwijs, gezondheidszorg en jeugdontwikkeling."
   - "Soweto": "In de armste wijk van Mzuzu zien ze de realiteit: geen sportfaciliteiten, geen buurthuizen, geen georganiseerde activiteiten voor jongeren. Maar wel een enorme energie en behoefte."
   - "Het idee": "De overtuiging is simpel: voetbal maakt jongeren zichtbaar en biedt een veilige ingang. Via goed opgeleide coaches leren deelnemers direct levensvaardigheden."
   - "De oprichting": "Stichting Football is Life, Pass it on wordt opgericht. ANBI-erkend, volledig onbezoldigd bestuur, gericht op een kleinschalige en persoonlijke aanpak."
   - "Ambassadeurs": "Peter Bosz en Bryan Linssen sluiten zich aan als voetbalambassadeurs. Hun betrokkenheid opent deuren in de sportwereld."
   - "VVCS": "De Vereniging van Contractspelers levert trainingskleding en sportmateriaal. Een directe brug tussen profvoetbal en het project."
   - "Eerste reis": "In februari 2026 vertrekken de oprichters naar Malawi om de samenwerking met UNGWERU te formaliseren en de Trainer Coach 1-opleiding voor te bereiden."
   - "Toekomst": "Soweto is de blauwdruk. Er is al interesse vanuit Noord-Ghana en Tanzania voor vergelijkbare projecten."

4. **Kernwaarden** (green-pale): Grid of 6 value cards (from marketingplan):
   - Lokale verankering
   - Trots op samenwerking
   - Jongens en meisjes
   - Structuur en discipline
   - Hoop en perspectief
   - Professionaliteit

5. **Quote block** (ivory): Large centered quote: "We willen niet de zoveelste betweterige westerlingen zijn die wel even komen vertellen hoe het moet." Attribution: Paul van Zwam en Ivo Spanjersberg, oprichters.

6. **CTA** (green + PitchDecor): "Schrijf mee aan dit verhaal" with doneer + meedoen buttons.

- [ ] **Step 2: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 3: Commit**

```bash
git add src/app/ons-verhaal/page.tsx
git commit -m "feat: add ons-verhaal page with origin story timeline"
```

---

### Task 4: Create /in-de-media page

**Files:**
- Create: `src/app/in-de-media/page.tsx`

- [ ] **Step 1: Create the in-de-media page**

Create `src/app/in-de-media/page.tsx` as a server component with metadata.

**Sections:**
1. **Hero** (green background + PitchDecor): "In de Media." title. Subtitle: "Publicaties, persaandacht en onze contentstrategie."
2. **Artikelen** (ivory): Card grid.
   - First card (real): SportKnowHowXL article. ImagePlaceholder (16:9, label "(Afb: SportKnowHowXL)", desc "Screenshot artikel SportKnowHowXL"). Title: "Nieuwe stichting zet in op voetbal bij kwetsbare gemeenschappen in Malawi." Source: SportKnowHowXL. Date: 12 februari 2026. Author: Emilie Maclaine Pont. Short excerpt from article. External link to the article URL.
   - 2-3 placeholder cards with light gradient ImagePlaceholder, text "Binnenkort meer", muted styling.
3. **Contentstrategie** (sand-light): From marketingplan. Grid of 4 content types:
   - Videoreeks: "Zes keer per jaar publiceren we een korte video waarin voetballende jongeren centraal staan. Zij dragen Football is Life-shirts en worden begeleid door goed opgeleide trainers."
   - Faciliteitenupdate FC Soweto: "Drie tot vier keer per jaar geven we een korte update van de voortgang bij FC Soweto."
   - Lokale verhalen: "In korte video's brengen we de mensen in beeld die het werk in Malawi uitvoeren: Crief, Isaac, Sam en Leo."
   - Football Shirt Challenge: "Elke maand verloten we een voetbalshirt van een bekende speler onder de donateurs."
4. **Social media** (green-pale): LinkedIn and Instagram as primary channels. ImagePlaceholder for embedded feed. Links to social profiles (placeholder URLs).
5. **Perscontact** (ivory): Contact info for media inquiries. Email: info@footballislife.nl. Phone: +31 6 39 47 84 88.
6. **CTA** (green + PitchDecor): "Deel ons verhaal" with social share suggestion + doneer button.

- [ ] **Step 2: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 3: Commit**

```bash
git add src/app/in-de-media/page.tsx
git commit -m "feat: add in-de-media page with press coverage and content strategy"
```

---

## Chunk 2: Enrich Existing Pages

### Task 5: Enrich Over Ons page

**Files:**
- Modify: `src/app/over-ons/page.tsx`

- [ ] **Step 1: Update board member descriptions**

In the `board` array (line 13-41), update descriptions for Paul and Ivo:

Paul van Zwam:
```
desc: "Sportpsycholoog sinds 1998 met ervaring bij sc Heerenveen, Feyenoord, Ajax, PSV, Chelsea FC, Leeds United en de KNVB. Expert in teamontwikkeling en mentale coaching. Werkzaam bij Libre Foundation, een organisatie die gratis leiderschapstrainingen verzorgt voor lokale organisaties in ontwikkelingslanden.",
expertise: ["Sportpsychologie", "Teamontwikkeling", "Libre Foundation", "Operationele leiding"],
```

Ivo Spanjersberg:
```
desc: "Senior sport- en prestatiepsycholoog. Specialist in communicatie, effectief gedrag en omgang met agressie. Werkzaam bij Libre Foundation als trainer en coach. Samen met Paul verantwoordelijk voor de methodiek achter de Trainer Coach 1-opleiding.",
expertise: ["Prestatiepsychologie", "Communicatie", "Libre Foundation", "Coordinatie"],
```

- [ ] **Step 2: Replace ambassador placeholder section with teaser linking to /ambassadeurs**

Replace the current `ambassadors` array (line 78-106) with real ambassador data:

```typescript
const ambassadors = [
  {
    name: "Peter Bosz",
    title: "Voetbalambassadeur",
    initials: "PB",
    desc: "Toptrainer met internationale ervaring bij Ajax, Borussia Dortmund, Bayer Leverkusen en PSV. Tweevoudig Eredivisiekampioen.",
    photoLabel: "(Foto: Peter Bosz)",
    photoDesc: "Peter Bosz, voetbalambassadeur",
    tags: ["Topvoetbal", "Internationaal netwerk"],
  },
  {
    name: "Bryan Linssen",
    title: "Voetbalambassadeur",
    initials: "BL",
    desc: "Profvoetballer met ruime Eredivisie-ervaring. Speelde onder meer voor Vitesse, Feyenoord en Urawa Red Diamonds. Momenteel actief bij NEC.",
    photoLabel: "(Foto: Bryan Linssen)",
    photoDesc: "Bryan Linssen, voetbalambassadeur",
    tags: ["Profvoetbal", "Zichtbaarheid"],
  },
];
```

Update the section heading from "Gezichten van de missie." to "Onze ambassadeurs."

After the ambassador cards, replace the "Word jij onze volgende ambassadeur?" text (line 508-524) with a link:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.3 }}
  className="mt-8 text-center"
>
  <Link
    href="/ambassadeurs"
    className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-85"
    style={{ background: "var(--white)", color: "var(--green)", border: "1px solid rgba(33,77,58,0.15)", boxShadow: "var(--shadow-sm)" }}
  >
    Bekijk alle ambassadeurs →
  </Link>
</motion.div>
```

- [ ] **Step 3: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/app/over-ons/page.tsx
git commit -m "feat: enrich over-ons with founder backgrounds and real ambassador profiles"
```

---

### Task 6: Enrich Partners page

**Files:**
- Modify: `src/app/partners/page.tsx`

- [ ] **Step 1: Read full partners page**

Read `src/app/partners/page.tsx` to understand exact structure and line numbers.

- [ ] **Step 2: Add VVCS and Libre Foundation partner sections**

After the existing St. Patrick's section and before "Hoe het partnerschap werkt", add two new partner sections:

**VVCS section** (ivory background):
- Label: "Partner in Nederland"
- Heading: "VVCS — Vereniging van Contractspelers"
- Description: "De VVCS is de belangenorganisatie voor profvoetballers in Nederland. Naast juridische ondersteuning, carrierebegeleiding en mentale gezondheidszorg zet de VVCS zich in voor maatschappelijke projecten. Via de VVCS ontvangen wij trainingskleding en sportmateriaal voor het project in Soweto."
- Key points in a small grid:
  - "Trainingskleding en sportmateriaal voor coaches en jongeren"
  - "Verbinding tussen profvoetbal en grassroots-ontwikkeling"
  - "Maatschappelijke betrokkenheid van de spelersvereniging"
- ImagePlaceholder (16:9, label "(Afb: VVCS)", desc "VVCS trainingsmateriaal voor het project")

**Libre Foundation section** (sand-light background):
- Label: "Trainingspartner"
- Heading: "Libre Foundation"
- Description: "Libre Foundation verzorgt gratis leiderschaps- en communicatietrainingen voor lokale organisaties in ontwikkelingslanden. In 2023 faciliteerden zij 13 tweedaagse trainingen in Afrika en Azie en 7 in Latijns-Amerika. Paul van Zwam en Ivo Spanjersberg werken als trainers bij Libre Foundation. Vanuit deze ervaring is Football is Life ontstaan."
- Key points:
  - "Gratis leiderschapstraining voor CBO's in ontwikkelingslanden"
  - "Actief in Afrika, Azie en Latijns-Amerika"
  - "Directe methodische basis voor de Trainer Coach 1-opleiding"
- ImagePlaceholder

- [ ] **Step 3: Enrich UNGWERU section with deeper content**

Find the UNGWERU section and add:
- Founded 2004 by Bishop John Ryan as CBO, registered NGO 2009
- 5 program lines: Education, Livelihoods & Food Security, Health, Water & Sanitation, Youth Development
- SELL Programme (Sharing Education and Learning for Life)
- Youth Development Unit (YDU): workshops on SRH, mentorship, justice education
- Lusekelo School of Computing and Tailoring
- Location: behind Tahit Filling Station, next to Mzuzu University, Luwinga

- [ ] **Step 4: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 5: Commit**

```bash
git add src/app/partners/page.tsx
git commit -m "feat: add VVCS and Libre Foundation as partners, deepen UNGWERU content"
```

---

### Task 7: Enrich Opleiding page

**Files:**
- Modify: `src/app/opleiding/page.tsx`

- [ ] **Step 1: Read full opleiding page**

Read `src/app/opleiding/page.tsx` to understand exact structure.

- [ ] **Step 2: Add content from Praatstuk document**

Enrich existing sections with details from the Praatstuk:
- Add to the intro/hero area: "Sport maakt kinderen en jongvolwassenen zichtbaar en biedt een veilige ingang. Via Ungweru kan dit leiden tot bredere ondersteuning in gezondheidszorg, educatie en empowerment. De coach maakt het verschil."
- Enhance the workbook section with the 7 format elements per exercise: Doel, Benodigdheden, Opzet stap voor stap, Coachtaal (voorbeeldzinnen), Variaties (makkelijker/moeilijker), Reflectievraag, Observatiepunten
- Add preparation section: "Trainers krijgen vooraf 1 of 2 oefenvormen toegewezen. Ze bereiden coachzinnen voor, kiezen variaties en formuleren het leerdoel."
- Add "leren door doen" methodology note: "De opleiding is praktijkgericht. Trainers voeren oefenvormen uit op elkaar in kleine groepjes. Na elke uitvoering volgt directe feedback."
- Add implementation after certification: "Na certificering draaien trainers het programma zelfstandig. Na 6 tot 8 weken volgt een terugkommoment voor uitwisseling van ervaringen, aanscherping van het werkboek en extra coaching."
- Add UNGWERU alignment section: "In overleg met UNGWERU stemmen we af over doelgroep, logistiek, culturele aansluiting en de koppeling met het empowermentprogramma."

- [ ] **Step 3: Add new "Onze Methodiek" section**

Add a new section after the existing program content, before the CTA:

Label: "Methodiek"
Heading: "Gebouwd op sportpsychologie en ervaringsleren."

Content in two-column layout:
- Left column: explanation of the methodological foundation
  - "De Trainer Coach 1-opleiding is ontwikkeld door Paul van Zwam en Ivo Spanjersberg, beiden sport- en prestatiepsychologen met jarenlange ervaring in het topvoetbal en bij Libre Foundation."
  - Paul's 7 characteristics of successful teams, adapted for youth work:
    1. Duidelijke ambitie: weten waar je naartoe werkt
    2. Plezier en humor: een veilige sfeer waarin je durft te proberen
    3. Vertrouwen: directe communicatie en eerlijke feedback
    4. Optimaal benutten van talent: iedereen heeft een rol
    5. Een eigen kracht: ontdek waar je goed in bent
    6. Professioneel karakter: afspraken nakomen, respect tonen
    7. Voortdurende verbetering: elke training een stap vooruit
- Right column: how this translates to the training
  - "Deze principes vormen de basis van elke oefenvorm in het werkboek. Coaches leren niet alleen wat ze moeten doen, maar begrijpen waarom het werkt."
  - Libre Foundation methodology: experiential learning, practical skills, direct feedback
  - Positioning quote: "Wij communiceren niet dat wij 'arme kinderen helpen'. Wij bouwen samen met lokale partners aan toekomstkansen via voetbal en empowerment."

ImagePlaceholder at the bottom (21:9, label "(Afb: Methodiek)", desc "Trainers tijdens een oefenvorm op het veld").

- [ ] **Step 4: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 5: Commit**

```bash
git add src/app/opleiding/page.tsx
git commit -m "feat: enrich opleiding with praatstuk content and methodiek section"
```

---

### Task 8: Enrich Malawi page

**Files:**
- Modify: `src/app/malawi/page.tsx`

- [ ] **Step 1: Read full malawi page**

Read `src/app/malawi/page.tsx` to understand exact structure.

- [ ] **Step 2: Add St. Patrick's Missionary Society and Diocese context**

Add a new section after the existing city/district sections, before the photo gallery:

Label: "Historische context"
Heading: "Mzuzu Diocese en de Ierse missionarissen."

Content:
- "De eerste katholieke missie in het noorden van Malawi werd in 1938 gevestigd door de White Fathers (later Missionaries of Africa)."
- "In 1970 arriveerden de eerste priesters van St. Patrick's Missionary Society: Fathers Alfie Byrne, Frank Morris, Padraig O Maille en Pat McGivern."
- "Sindsdien heeft het diocees een uitgebreid onderwijsnetwerk opgebouwd: 263 basisscholen, 5 middelbare scholen en 3 colleges."

Add Bishop Ryan subsection:
- "Bishop John Ryan, lid van St. Patrick's Missionary Society, speelt een bijzondere rol. Naast zijn pastorale werk doceert hij wiskunde aan Mzuzu University. In 2004 richtte hij UNGWERU op als community-based organisatie. Vandaag is UNGWERU een geregistreerde NGO en een van de belangrijkste partners van Football is Life."
- "Deze combinatie van onderwijs, gemeenschapswerk en sport vormt het fundament waarop het FIL-project is gebouwd."

ImagePlaceholder (16:9, label "(Afb: Diocese Mzuzu)", desc "Onderwijsnetwerk Mzuzu Diocese").

- [ ] **Step 3: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/app/malawi/page.tsx
git commit -m "feat: add diocese and St. Patrick's historical context to malawi page"
```

---

### Task 9: Enrich Project page

**Files:**
- Modify: `src/app/project/page.tsx`

- [ ] **Step 1: Read full project page**

Read `src/app/project/page.tsx` to understand exact structure.

- [ ] **Step 2: Add quote, FC Soweto branding, and fundraising progress**

Enhancements to add:
- In the hero or intro section, add the quote as a styled blockquote: "We willen niet de zoveelste betweterige westerlingen zijn die wel even komen vertellen hoe het moet."
- Reference "FC Soweto" as the club name where appropriate (from marketingplan)
- Add fundraising progress after the cost breakdown section:
  - Label: "Voortgang"
  - Heading: "Tweederde van het doel bereikt."
  - "Van de benodigde 15.000 euro is inmiddels tweederde opgehaald via sponsors, donaties en veilingen. Het project nadert de uitvoeringsfase."
  - Simple progress bar visual (CSS-only, no JS needed)
  - CTA: "Help ons het laatste deel bereiken" with doneer link

- [ ] **Step 3: Add future perspective section**

After the fundraising progress, add:
- Label: "Toekomst"
- Heading: "Soweto als blauwdruk."
- "Het project in Soweto is het begin. Er is al interesse vanuit Noord-Ghana en Tanzania voor vergelijkbare initiatieven. De slogan 'Football is Life, Pass it on' is niet alleen een kreet, maar een aanpak: kennis overdragen, lokaal verankeren en doorgroeien."
- Three future items in a small grid:
  - Fase 2: Uitbreiding binnen Mzuzu
  - Fase 3: Rumphi en Nkhata Bay
  - Internationaal: Noord-Ghana en Tanzania
- ImagePlaceholder

- [ ] **Step 4: Add content strategy preview**

Small section showing the planned content output (from marketingplan):
- "Volg de voortgang van FC Soweto via onze kanalen."
- 4 items in a row: "6x per jaar video", "3-4x faciliteitenupdate", "5x lokale verhalen", "Maandelijkse Football Shirt Challenge"
- Link to /in-de-media

- [ ] **Step 5: Verify build**

Run: `cd /home/stijn/coding/fil && npx next build 2>&1 | tail -20`

- [ ] **Step 6: Commit**

```bash
git add src/app/project/page.tsx
git commit -m "feat: add quote, fundraising progress, future plans to project page"
```

---

## Task Dependencies

```
Task 1 (Nav) ──→ Tasks 2-9 (all independent, can run in parallel)
```

Task 1 must complete first so navigation links work. Tasks 2-9 have no dependencies on each other and can be executed in parallel via subagents.

## Design System Reference

All tasks should use these patterns from `src/app/globals.css`:
- **Section pattern:** `<section style={{ background: "var(--color)" }} className="py-16 md:py-24 px-4 sm:px-6"><div className="max-w-6xl mx-auto">`
- **Background cycle:** ivory → green → sand-light → green-pale (alternating)
- **Label component:** `<Label>Section name</Label>` (orange uppercase)
- **Heading:** `font-display font-extrabold` with `fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)"`, `color: "var(--green)"`, `letterSpacing: "-0.02em"`
- **Body text:** `style={{ color: "var(--stone)" }}`
- **Cards:** `rounded-2xl overflow-hidden card-hover` with `background: "var(--white)"`, `border: "1px solid var(--border)"`, `boxShadow: "var(--shadow-card)"`
- **Animation:** `motion.div` with `initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-60px" }}`, `transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}`
- **Stagger:** `delay: i * 0.1` in mapped lists
- **ImagePlaceholder:** `<ImagePlaceholder label="(Afb X)" description="..." aspect="3/2" />` (dark default, `dark={false}` for light)
- **CTA button:** `className="btn-primary px-7 py-3 rounded-full"` with `background: "var(--orange)"`
- **PitchDecor:** Only in hero/CTA sections on green backgrounds
- **New pages** are server components (no "use client") with `export const metadata: Metadata = { ... }`
- **Over Ons** is a client component ("use client") because it uses motion directly — new pages should follow the server component pattern where possible, using motion via `whileInView` which works in server components when motion is imported
