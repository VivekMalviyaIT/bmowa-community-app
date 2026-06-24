# BlueJay Malgudi Community — Design System

A warm, editorial design system for **BlueJay Malgudi**, a gated villa community in Bangalore (~60–80 individual homes; the "Earthen Villas"). The brand feeling is **peaceful, leafy, sunlit, unhurried** — lots of greenery, air and light. The system pairs the maroon "Earthen Villas" crest with garden green and a Claude-inspired cream canvas, then layers in gentle gradients and "backlit" glows for a quiet, modern finish.

The resident app presents itself as a **Community Journal** — an editorial publication for the neighbourhood, not a dashboard.

---

## Sources

- **Logo:** `uploads/MalgudiLogo.png` → `assets/malgudi-logo.png` (the Malgudi / Earthen Villas crest; warm terracotta-maroon ~#A8302F).
- **Codebase:** `bmowa-community-app/` — Next.js 16 + Tailwind 4 + Framer Motion resident app (mounted read-only). Typography and the warm editorial palette were taken from `src/app/globals.css`; component patterns from `src/components/*` and the page routes in `src/app/*`.
  - Note: the app's `README.md` describes an older "deep navy glassmorphism" direction; the **actual** shipped CSS is the cream editorial style this system is built on.
- **Data:** the app reads live community data from Google Sheets (sheet id in the codebase README). Not used here beyond representative sample copy.
- **Other Assets:** `bmowa-community-app/Assets/` also holds a letterhead `.docx`, a finances `.xlsx`, and third-party design reference docs (apple/claude/vercel/…) — not brand assets, not ingested.

BMOWA = **B**lueJay **M**algudi **O**wners **W**elfare **A**ssociation.

---

## CONTENT FUNDAMENTALS

**Voice — an editorial community journal.** Calm, warm, neighbourly, lightly formal. It reads like a well-kept neighbourhood publication, not a SaaS dashboard.

- **Person:** addresses the resident as **you** ("Your community at a glance"), refers to the association as **BMOWA / the committee** in the third person.
- **Tone:** reassuring and factual. Status is stated plainly ("Everything is running smoothly today"), problems named without drama ("5 CCTV cameras currently non-operational").
- **Casing:**
  - Page & card titles: **Title Case** in serif ("Community Health", "Annual General Meeting").
  - Eyebrows / labels / field labels: **UPPERCASE**, widely letter-spaced ("LIVE STATUS", "FLAT NUMBER").
  - Body: sentence case.
- **Length:** headlines short (1–4 words); supporting copy one calm sentence. Captions are terse, often `date · category · location`.
- **Numbers & units:** human and specific — "80k L", "of 100k Litres capacity", "99.95%", "12 Guards", "8 spots left". Reference IDs in mono ("BMOWA-2406-A14").
- **Emoji:** used sparingly and functionally as section/metric icons in the resident app (💧 🛡️ 🛗 ⚙ 📹) and a single confirming ✓. Not decorative, never in headlines. For production UI prefer the icon set in ICONOGRAPHY.
- **Examples:**
  - Eyebrow + title: "GOOD MORNING," → "Welcome to BlueJay Malgudi"
  - Announcement: "Water tank cleaning and lift servicing will be conducted this Saturday from 8 AM to 2 PM."
  - Empty/success: "Thank You — Your feedback has been recorded. The BMOWA committee will review it shortly."

Avoid: hype words ("blazing", "supercharge"), exclamation marks, ALL-CAPS sentences, jargon.

---

## VISUAL FOUNDATIONS

**Overall:** warm, editorial, low-contrast, generous whitespace. A single calm cream canvas; content lives in soft white cards with hairline borders. Maroon is the accent of record; green and sand support; gradients and glows are used lightly to feel modern, never loud.

- **Color:**
  - *Primary* — **Malgudi Maroon** (`--maroon-*`, brand = 600 `#8C2D33`), drawn from the crest.
  - *Secondary* — **Garden Green** (`--green-*`, 600 `#3C6B4E`) for greenery/positive.
  - *Tertiary* — **Sand/Clay** (`--sand-*`) for sunlight and warm gradients.
  - *Neutrals* — **Cream** canvas (`--cream-100 #F7F4EC`, Claude-inspired) and **warm ink** text (`--ink-900 #2A2622`).
  - *Semantic* — success (green), warning (amber `#B8860B`), danger (`#B0322E`, kin to maroon), info (slate). Each has a soft tinted fill.
  - Every hue ships a 50→900/950 scale; see the Colors cards.
- **Light & dark:** Light is the default cream world. **Dark** (`<html data-theme="dark">`) turns the maroon family down into an **aubergine canvas** (`#2A0F13`) with illuminated maroon surfaces and rose-tinted text — moody but still warm.
- **Type:** **Instrument Serif** for all headings (regular weight, tight tracking, italic available) over **Inter** for UI/body (300–700). **JetBrains Mono** for IDs and data. The serif/sans contrast is the signature editorial move.
- **Spacing:** 4px base scale. Comfortable, airy — sections separated by 48–64px, cards padded 20–32px.
- **Backgrounds:** flat cream — *no* photography or full-bleed imagery in-product. Modernity comes from **gradients** (maroon, sunset, garden, dawn, dusk) and a soft **radial "illume" bloom** placed behind hero content (`--gradient-illume`), plus quiet decorative atmospheric blooms (very low opacity). No textures, no patterns.
- **Gradients:** reserved for brand moments — primary buttons (maroon), feature cards, progress fills, and backlight blooms. Body surfaces stay flat.
- **Illumination / "backlit":** `--glow-*` shadows give a colored halo to key chips/cards; the illume radial sits behind greetings and success states.
- **Cards:** white (`--surface-card`) or cream, **1px hairline border** (`--border-hairline`), **24px radius** (`--radius-xl`), soft low shadow (`--shadow-sm`). Feature cards may take a `tone` gradient wash.
- **Corner radii:** soft throughout — 12–16px controls, 24px cards, 32px hero, full pills for buttons/badges/chips.
- **Shadows:** soft, warm-tinted, low-contrast (`rgba(42,38,34,…)`), four steps xs→lg. Never harsh.
- **Borders:** 1px hairlines in cream tones; strong border for emphasis. The signature **short rule** (48×1px at ~22% ink) sits under page titles.
- **Animation:** gentle and brief. Entrances fade + rise 8–16px; easing `cubic-bezier(0.25,0.46,0.45,0.94)` ("editorial") or `(0.16,1,0.3,1)` ("out"). Durations 0.15/0.25/0.5s. Progress bars sweep width over ~1s. No bounce, no infinite loops on content.
- **Hover:** cards lift 2px and deepen shadow; list rows nudge ~3px right; buttons brighten ~6% (gradients) or pick up a soft brand tint (ghost/outline). Quiet, never flashy.
- **Press:** buttons scale to 0.97. Segmented controls fill with `--brand-soft`.
- **Focus:** maroon border + 3px `--brand-ring` halo on inputs.
- **Transparency & blur:** used lightly — mobile bottom nav uses a translucent surface + backdrop blur; `color-mix` alpha tints for soft fills. Not a glassmorphism system.
- **Imagery vibe:** if photos are ever introduced, keep them warm, sunlit, and leafy — gardens, villas, golden hour — to match the canvas. None ship today.
- **Layout:** desktop = fixed 240px left masthead sidebar + centered editorial column (max ~1024px). Mobile = translucent bottom nav. Content is single-column and reads top-to-bottom like a page.

---

## ICONOGRAPHY

- **Current product reality:** the resident app uses **emoji** as functional metric/section icons (💧 water, 🛡️ security, 🛗 lift, 📹 CCTV, ♻️ STP, 🧹 housekeeping, ⚡ electrical, 🗑️ waste) and **Unicode glyphs** for sidebar nav (✦ Spotlight, ◎ Snapshot, ◆ Initiatives, ▣ Handbook, ⚙ Services, ◈ Events, ✎ Feedback). A single ✓ confirms success. These are preserved in the UI kit for fidelity.
- **Recommendation for production:** adopt **[Lucide](https://lucide.dev)** (1.5px stroke, rounded — matches the soft, calm aesthetic) via CDN, mapping each emoji to a line icon (droplet, shield, etc.). Render in `currentColor` so icons inherit text/semantic colors. This was **not** auto-applied — flagged for your decision (keep the warm emoji, or move to line icons?).
- **No** custom icon font or SVG sprite ships in the codebase. The only raster asset is the logo crest.
- Do not hand-draw icons as SVG in new work — use Lucide or the existing emoji set.

---

## VISUAL ASSETS

- `assets/malgudi-logo.png` — the Malgudi "Earthen Villas" crest (small source, 85×73; transparent PNG). Use at small sizes; request a high-resolution / vector version for hero use (see CAVEATS).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for downloading into Claude Code.

**Tokens** (`tokens/`, all reached from `styles.css`)
- `fonts.css` — webfont loading (Instrument Serif, Inter, JetBrains Mono via Google Fonts).
- `colors.css` — full palette + light/dark semantic aliases.
- `typography.css` — families, type scale, weights, tracking.
- `spacing.css` — spacing, radii, shadows, glows, gradients, motion, layout.
- `base.css` — light element resets + a few utility classes.

**Components** (`components/`, namespace `BlueJayMalgudiDesignSystem_8a1bfb`)
- `core/` — `Button`, `Card`, `Badge`, `Avatar`, `SectionHeader`
- `forms/` — `Input`, `Textarea`, `Select`
- `data/` — `StatCard`, `ProgressBar`

**UI Kits** (`ui_kits/`)
- `community-app/` — the BlueJay Malgudi Community Journal (Spotlight, Services, Events, Feedback + Sidebar). Open `index.html`.

**Specimen cards** (`guidelines/`) — power the Design System tab (Colors, Type, Spacing, Brand).

---

## CAVEATS

- **Fonts load from Google Fonts CDN** (`@import` in `tokens/fonts.css`) rather than self-hosted binaries, so the compiler reports 0 bundled fonts. They render correctly anywhere with network access. If you need offline/self-hosted `.woff2` files, ask and I'll vendor them.
- **Logo is low-resolution** (85×73, raster). Fine for small marks; please share a **vector (SVG) or high-res** crest for hero/print use.
- The **navy/glassmorphism** described in the codebase's own README was *not* used — the shipped cream editorial CSS was treated as source of truth. Tell me if you actually want the navy direction instead.
- **Dark mode** is a designed extrapolation from the logo (aubergine/maroon) — there's no dark mode in the codebase to match. Please review the dark palette.
- **Iconography** still uses emoji (faithful to the app). Decide whether to migrate to Lucide line icons.
