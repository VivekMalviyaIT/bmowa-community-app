# BlueJay Malgudi — Design System

The app ships **three interchangeable designs**, chosen from the low-profile
selector pinned bottom-left. All three share the **exact same structure**
(layout, logo, masthead, navigation, components, typography scale) and differ
**only in color and atmosphere**.

| Design | `data-theme` | Mood | Doc |
|---|---|---|---|
| **Editorial** | `editorial` (default) | Neutral, calm, paper-white | [editorial.md](./editorial.md) |
| **Cream** | `cream` | Warm, sunlit, Claude-cream + Malgudi maroon | [cream.md](./cream.md) |
| **Aubergine** | `aubergine` | Moody, dark, illuminated maroon | [aubergine.md](./aubergine.md) |

---

## How theming works (apply this anywhere)

Theming is driven by a single attribute on `<html>` and a set of **CSS custom
properties**. Components never hardcode colors — they read variables, so the
same markup recolors automatically when the theme changes.

```
<html data-theme="editorial | cream | aubergine">
```

- The selected theme is stored in `localStorage` under `bmowa-theme` and applied
  **before first paint** by an inline script in `src/app/layout.tsx` (no flash).
- `src/components/ThemeProvider.tsx` holds the current theme in React context and
  writes the attribute on change.
- `src/components/ThemeSelector.tsx` renders the bottom-left switcher.
- All token values live in `src/app/globals.css` — `:root` is Editorial, and
  `:root[data-theme="cream"]` / `:root[data-theme="aubergine"]` override the
  same variable **names** with new values.

**To style a new component:** use the variable names below (or the Tailwind
utilities that map to them). Never write a raw hex value for anything that
should follow the theme.

### Tailwind ↔ CSS variable map (`@theme inline` in globals.css)

| Tailwind utility | CSS variable | Meaning |
|---|---|---|
| `bg-background` / `text-background` | `--background` | App canvas |
| `text-foreground` / `bg-foreground` | `--foreground` | Primary text / inverse fill |
| `bg-card-bg` | `--card-bg` | Card surface |
| `border-card-border` | `--card-border` | Hairline border |
| `text-text-muted` | `--text-muted` | Secondary text |
| `text-text-subtle` | `--text-subtle` | Tertiary / captions |
| `text-accent-slate` | `--accent-slate` | Info / water |
| `text-accent-sage` / `-emerald` | `--accent-sage` / `--accent-emerald` | Positive / green |
| `text-accent-rose` | `--accent-rose` | Security / pink-maroon |
| `text-accent-red` | `--accent-red` | Danger |
| `text-accent-amber` | `--accent-amber` | Warning |
| `text-accent-warm` | `--accent-warm` | Sand |

Non-Tailwind variables used directly in CSS / inline styles:

| Variable | Meaning |
|---|---|
| `--sidebar-bg`, `--sidebar-border`, `--sidebar-glow` | Left nav surface + backlight |
| `--mobile-nav-bg` | Mobile bottom bar surface |
| `--nav-active-bg`, `--nav-active-indicator`, `--nav-active-icon`, `--nav-hover-bg` | Nav active/hover states |
| `--progress-track` | Progress bar track |
| `--bloom-1`, `--bloom-2` | Atmospheric blooms (top-right sand, bottom-left maroon) |
| `--gradient-illume` | Radial backlight behind hero cards |
| `--card-shadow`, `--card-shadow-hover` | Card elevation |

---

## Shared structure (identical across all three)

### Typography
- **Display / headings:** `Instrument Serif` (regular weight, tight tracking; italic available). Used for page titles, card titles, the masthead wordmark.
- **UI / body:** `Inter` (300–700). Labels, body, buttons, nav.
- **Signature move:** serif headline over sans body. Eyebrows/labels are `Inter`, **UPPERCASE**, letter-spaced (`tracking-wider`/`widest`), `text-[10px]`–`text-xs`.
- Scale (as used): page title `text-4xl lg:text-5xl`; card title `text-xl`–`text-2xl`; metric value `text-2xl`–`text-3xl` semibold; body `text-sm`; caption `text-[11px]`–`text-xs`.

### Layout
- Desktop: fixed **240px** left sidebar (`w-60`) + centered editorial column (`max-w-5xl`, generous padding `lg:px-16 lg:py-16`).
- Mobile (`<lg`): sidebar hidden, **bottom tab bar** with all 7 sections; content padding `px-6 py-12`.
- Masthead (all themes): crest logo (`/malgudi-logo.png`, 36px) + serif **"BlueJay Malgudi"** + uppercase **"Community Journal"**.
- Footer: **"Established 2026"**, centered, `text-[10px]`, above the design selector.

### Navigation (`src/components/Sidebar.tsx`)
- Items: Spotlight ✦ · Snapshot ◎ · Initiatives ◆ · Handbook ▣ · Services ⚙ · Events ◈ · Feedback ✎
- **Active:** pill `--nav-active-bg`, 3×18px left bar `--nav-active-indicator`, icon `--nav-active-icon`, label `--foreground` weight 600.
- **Hover (inactive):** `--nav-hover-bg`; label brightens to `--foreground`.

### Radii & spacing
- Radii: controls 12–16px, cards 24px (`rounded-3xl`), hero/feature 32px, pills `rounded-full`.
- Spacing: 4px base; sections separated 48–64px (`mb-16`); cards padded 24–32px.

### Components
- **Card** (`.editorial-card`): `--card-bg` surface, 1px `--card-border`, `--card-shadow`, lifts to `--card-shadow-hover` on hover.
- **Primary button:** `bg-foreground text-background`, `rounded-full`, `py-3.5`, weight 600 (inverse fill — readable in every theme).
- **Secondary/ghost button:** `bg-foreground/[0.04]` + `text-foreground` + `border-card-border`.
- **Inputs / select / textarea:** `bg-background`, 1px `--card-border`, `rounded-xl`, `px-4 py-3`, `text-sm`; focus → 2px `foreground/10` ring + `foreground/20` border.
- **Segmented control (priority):** soft tinted active state in the relevant accent (`accent-red`/`accent-amber`/`accent-emerald` at ~8% fill, 20% border).
- **Badge / "Live" pill:** accent at 10% fill + accent text, `rounded-full`, `text-[10px]`.
- **Progress bar:** 4px track `--progress-track`, fill in the metric's accent, animates width over ~1s.

### Illumination / atmosphere
- **Atmospheric blooms** (`.atmospheric-blooms`): fixed, behind content — sand glow top-right (`--bloom-1`), maroon glow bottom-left (`--bloom-2`).
- **Hero illume** (`.hero-glow`): radial `--gradient-illume` behind the welcome card (Cream/Aubergine only; hidden in Editorial).
- **Sidebar backlight** (`.sidebar-editorial::before`): soft `--sidebar-glow` at the top of the nav (Cream/Aubergine).

### Motion
- Entrances: fade + rise 8–16px. Easing `cubic-bezier(0.25,0.46,0.45,0.94)` (editorial) or `(0.16,1,0.3,1)` (out). Durations 0.15 / 0.25 / 0.5s.
- Cards lift 2px on hover; buttons scale 0.98 on tap; progress sweeps width ~1s. No bounce, no infinite loops on content.
