# Design — Cream (Design System · Light)

`data-theme="cream"` · the warm, sunlit light theme from the BlueJay Malgudi
design system.

**Mood:** warm, editorial, sunlit. Claude-inspired **cream** canvas, **Malgudi
maroon** as the brand accent (drawn from the crest), **garden green** and
**sand** in support. Soft illumination and a subtle maroon nav.

> Structure, typography, layout, and component anatomy are shared across all
> three designs — see [README.md](./README.md). This file documents only what
> is **specific** to Cream.

## Colors

### Canvas & text
| Variable | Value | Use |
|---|---|---|
| `--background` | `#F7F4EC` | Cream canvas (Claude-ish) |
| `--foreground` | `#2A2622` | Warm near-black text / inverse fill |
| `--card-bg` | `#FFFFFF` | Card surface |
| `--card-border` | `#E3DCCB` | Cream hairline |
| `--text-muted` | `#756E64` | Secondary text |
| `--text-subtle` | `#9B9488` | Captions / tertiary |

### Accents
| Variable | Value | Role |
|---|---|---|
| `--accent-slate` | `#51687E` | Info / water |
| `--accent-sage` / `--accent-emerald` | `#3C6B4E` | Garden green / positive |
| `--accent-rose` | `#C5615E` | Security / soft maroon |
| `--accent-red` | `#B0322E` | Danger (kin to maroon) |
| `--accent-amber` | `#B8860B` | Warning |
| `--accent-warm` | `#B08E5E` | Sand |
| **Brand maroon** | `#8C2D33` | Crest red — nav active, key emphasis |

Full brand scale (for new work): maroon `50 #FBF1F0 · 100 #F6DDDB · 300 #DB908C · 500 #A8302F · 600 #8C2D33 · 700 #73262C · 900 #3F171C`. Green `300 #93B49B · 600 #3C6B4E`. Sand `300 #D8BC8C · 400 #C4A882 · 500 #B08E5E`.

### Surfaces & nav (the maroon + illuminated nav)
| Variable | Value |
|---|---|
| `--sidebar-bg` | `linear-gradient(180deg,#FFFFFF 0%,#FCFBF7 55%,#F7F4EC 100%)` (raised, faintly backlit) |
| `--sidebar-border` | `#E7DFCF` |
| `--sidebar-glow` | `radial-gradient(130% 75% at 0% 0%, rgba(196,168,130,0.20) 0%, transparent 58%)` |
| `--mobile-nav-bg` | `rgba(252,251,247,0.95)` |
| `--progress-track` | `#EFEADD` |
| `--nav-active-bg` | `color-mix(in srgb, #8C2D33 9%, transparent)` — subtle maroon pill |
| `--nav-hover-bg` | `color-mix(in srgb, #2A2622 4%, transparent)` |
| `--nav-active-indicator` | `#8C2D33` (maroon left bar) |
| `--nav-active-icon` | `#8C2D33` (maroon icon) |

### Elevation (warm-tinted shadows)
| Variable | Value |
|---|---|
| `--card-shadow` | `0 1px 3px rgba(42,38,34,.05), 0 4px 12px rgba(42,38,34,.03)` |
| `--card-shadow-hover` | `0 2px 8px rgba(42,38,34,.06), 0 12px 28px rgba(42,38,34,.06)` |

## Atmosphere
- `--bloom-1` (top-right, **sand**): `rgba(196,168,130,0.24)` — warm glow, clearly visible.
- `--bloom-2` (bottom-left, **maroon**): `rgba(168,48,47,0.13)`.
- `--gradient-illume` (hero backlight): `radial-gradient(60% 60% at 50% 0%, color-mix(in srgb, #D8BC8C 55%, transparent) 0%, transparent 70%)` — warm sand bloom behind the welcome card.
- Sidebar top carries a faint sand backlight; nav active state ties to the maroon crest.

## Notes
- `color-scheme: light`.
- Primary button: `#2A2622` fill, cream text.
- Eyebrow over the hero reads **"WELCOME HOME"**; title **"Welcome to BlueJay Malgudi"**.
- Keep gradients/glows reserved for brand moments (hero, sidebar top, progress fills); body surfaces stay flat cream.
