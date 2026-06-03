# Planzo — MVP marketing website

Eén Nederlandstalige single-page marketing site voor Planzo, gebouwd op de gekozen "Modern lifestyle startup"-richting met de gevraagde aanpassingen: **midnight-navy interface, zachte pastelgradiënten, glassmorphism, soft blobs en bouncy micro-interactions**. Lime (#BEF264) en paars (#A78BFA) als accenten op een diepe navy (#0B1020) basis.

## Design tokens (in `src/styles.css`)

- Background: midnight navy `oklch(0.16 0.04 270)` met radiale pastel-blob gradients (paars + lime + sky) als achtergrond op de body
- Surface/glass: `rgba(255,255,255,0.06)` met `backdrop-blur-xl` en 1px witte hairline border (`border-white/10`)
- Accenten: brand-purple `#A78BFA`, brand-lime `#BEF264`, soft-pink `#F9A8D4` voor blobs
- Tekst: bijna-wit `oklch(0.97 0.01 270)` + muted `oklch(0.72 0.02 270)`
- Typografie: Plus Jakarta Sans (via `<link>` in `__root.tsx`) — heading extrabold/italic, body regular
- Radius: 2xl–3xl voor cards, `rounded-full` voor CTA's
- Motion: `framer-motion` voor fade-in-up bij scroll, spring "bouncy" hover/tap op buttons en cards

## Pagina-structuur (één route `/`)

Alle secties op `src/routes/index.tsx` met losse componenten in `src/components/planzo/`:

1. **Nav** — Glass top bar, "Planzo." logo, "Start nu" CTA
2. **Hero** — Eyebrow chip, H1 "Groepsuitjes regelen zonder stress.", subtitel, 3 CTA's (Plan een uitje, Bekijk activiteiten, Voor bedrijven), zwevende soft blobs op achtergrond
3. **Vibe-carousel** — Horizontale scroll met voorbeelduitjes (Sushi+Bowlen, Pizza+Arcade, Dinner+Escape, Karaoke+Cocktails, Boottocht+BBQ) — gegenereerde afbeeldingen
4. **Probleem → Oplossing** — Glass card met bulletpoints (groepsapp-pijnpunten) en lime accent-zin "→ Planzo neemt het over."
5. **Hoe werkt het** — 4-stappen tijdslijn met genummerde glass dots
6. **Activiteiten-categorieën** — Grid met 6 cards: Eten & drinken, Actief, Chill, Premium, School & groepen, Bedrijfsuitjes (icoon + voorbeelden)
7. **Plan-formulier** — Volledig veldenpakket (naam, e-mail, telefoon, aantal, stad, budget, datum, type uitje radio, voor-wie chips, speciale wensen). Zod-gevalideerd, toont succesbevestiging "Binnen 24 uur ontvang je 2 tot 3 passende opties." Geen backend — payload wordt in `console.log` gezet met duidelijke `TODO`-marker zodat later koppelen aan Sheets/WhatsApp/Cloud triviaal is
8. **Voor bedrijven** — Glass-panel met copy + 4 pakket-tiles (Team Dinner / Activity Night / Full Experience / Custom Event) + CTA "Vraag een voorstel aan"
9. **Pricing** — Twee blokken: "Voor vrienden" (Easy Plan €9,99 / Book It €24,99 populair / Full Night €39,99) en "Voor bedrijven" (Team Basic €75 / Team Plus €149 / Custom vanaf €250)
10. **Groepspoll-teaser** — Paarse glass-card met mock poll-UI en "Binnenkort"-label
11. **Social proof** — 5 trust-bullets + 2 dummy reviews in glass cards
12. **Contact** — Compact form (naam, e-mail, bericht) met begeleidende tekst
13. **Footer** — Logo, navlinks (anchors), social placeholders, copyright, "Mede mogelijk gemaakt door Van Appiah VA" → klikbaar naar `http://vanappiah.com`

## Tech-details

- TanStack Start; alles op `src/routes/index.tsx` + componenten onder `src/components/planzo/`
- `head()` SEO meta: NL title, description, og-tags
- `framer-motion` installeren voor spring/whileHover/whileTap en in-view fades
- `react-hook-form` + `zod` voor formuliervalidatie (al beschikbaar in shadcn-stack indien aanwezig, anders toevoegen)
- 3 hero/vibe-afbeeldingen via `imagegen` (Sushi+Bowlen, Pizza+Arcade, Dinner+Escape) in `src/assets/`
- Volledig responsive (mobile-first → desktop max-w container vanaf md)
- Smooth scroll naar anchors voor nav-links
- Geen Lovable Cloud nodig voor MVP (form is front-end only met duidelijke uitbreidingshaken)

## Wat ik later eenvoudig kan aansluiten

`onSubmit` in `PlanForm.tsx` krijgt één duidelijk gemarkeerde plek waar later een `fetch('/api/...')` of `createServerFn` ingehaakt wordt — daarmee is koppeling aan Google Sheets, WhatsApp Business of een database een minimale wijziging.
