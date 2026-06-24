---
name: bluejay-malgudi-design
description: Use this skill to generate well-branded interfaces and assets for the BlueJay Malgudi Community (an editorial, warm "community journal" for a leafy Bangalore villa community), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** BlueJay Malgudi — "Earthen Villas", a peaceful gated villa community in Bangalore. Voice: a warm editorial *community journal* (calm, neighbourly, "you" + "the BMOWA committee").
- **Color:** primary Malgudi Maroon (`--maroon-600 #8C2D33`, from the crest), secondary Garden Green, tertiary Sand; Claude-style **cream** canvas (`--cream-100`), warm ink text. Dark mode = aubergine/maroon. Soft gradients + backlit glows for a modern feel.
- **Type:** Instrument Serif (headlines) + Inter (UI/body) + JetBrains Mono (IDs). Uppercase tracked eyebrow labels.
- **Shape:** soft — 24px cards, pill buttons/badges, hairline cream borders, soft low-contrast shadows, a 48×1px rule under titles.
- **Tokens:** link `styles.css`; everything is a CSS custom property.
- **Components:** `window.BlueJayMalgudiDesignSystem_8a1bfb` → Button, Card, Badge, Avatar, SectionHeader, Input, Textarea, Select, StatCard, ProgressBar.
- **UI kit:** `ui_kits/community-app/` — the resident Community Journal app.
- **Assets:** `assets/malgudi-logo.png`.

Keep it calm, warm, and editorial. Maroon leads; green and sand support; gradients are accents, not wallpaper.
