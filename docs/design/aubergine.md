# Design — Aubergine (Design System · Dark)

`data-theme="aubergine"` · the moody dark theme from the BlueJay Malgudi design
system.

**Mood:** dark, warm, illuminated. A deep **aubergine / maroon** canvas with
*raised, illuminated* surfaces, rose-tinted text, and a warm sand backlight.
Moody but never cold — the warmth of the crest carried into the dark.

> Structure, typography, layout, and component anatomy are shared across all
> three designs — see [README.md](./README.md). This file documents only what
> is **specific** to Aubergine.

## Colors

### Canvas & text
| Variable | Value | Use |
|---|---|---|
| `--background` | `#2A0F13` | Aubergine-black canvas |
| `--foreground` | `#F7ECE9` | Light rose-cream text / inverse fill |
| `--card-bg` | `#2F151A` | Illuminated maroon card surface |
| `--card-border` | `rgba(233,201,201,0.14)` | Rose hairline |
| `--text-muted` | `#C2A6A8` | Secondary (rose-tinted) |
| `--text-subtle` | `#9C8084` | Captions / tertiary |

### Accents (lightened for dark)
| Variable | Value | Role |
|---|---|---|
| `--accent-slate` | `#9DB0C4` | Info / water |
| `--accent-sage` / `--accent-emerald` | `#93B49B` | Green / positive |
| `--accent-rose` | `#DB908C` | Security / rose-maroon |
| `--accent-red` | `#DB908C` | Danger |
| `--accent-amber` | `#D8BC8C` | Warning |
| `--accent-warm` | `#D8BC8C` | Sand |
| **Brand maroon (dark)** | `#DB908C` | Rose-maroon — nav active, emphasis |

> In dark mode the brand steps *up* the maroon scale to a rose (`maroon-300
> #DB908C`) so it reads on the aubergine canvas. Surfaces step the maroon family
> *down* into aubergine (`#2A0F13`→`#3E1D24`).

### Surfaces & nav (raised + illuminated, subtle maroon)
| Variable | Value |
|---|---|
| `--sidebar-bg` | `linear-gradient(180deg,#3E1D24 0%,#341820 55%,#2A1318 100%)` — **raised** (lighter than canvas) = illuminated nav |
| `--sidebar-border` | `rgba(233,201,201,0.16)` |
| `--sidebar-glow` | `radial-gradient(135% 70% at 12% 0%, rgba(216,188,140,0.16) 0%, rgba(168,48,47,0.12) 38%, transparent 66%)` — warm backlight at the top of the nav |
| `--mobile-nav-bg` | `rgba(47,21,26,0.92)` |
| `--progress-track` | `rgba(233,201,201,0.12)` |
| `--nav-active-bg` | `color-mix(in srgb, #DB908C 15%, transparent)` — subtle maroon glow pill |
| `--nav-hover-bg` | `color-mix(in srgb, #F7ECE9 5%, transparent)` |
| `--nav-active-indicator` | `#DB908C` (rose-maroon left bar) |
| `--nav-active-icon` | `#DB908C` (rose-maroon icon) |

### Elevation (deep, for dark)
| Variable | Value |
|---|---|
| `--card-shadow` | `0 1px 3px rgba(0,0,0,.40), 0 4px 12px rgba(0,0,0,.28)` |
| `--card-shadow-hover` | `0 2px 10px rgba(0,0,0,.50), 0 14px 32px rgba(0,0,0,.40)` |

## Atmosphere (the key to the "modern, illuminated" feel)
- `--bloom-1` (top-right, **sand**): `rgba(196,168,130,0.42)` — strong warm glow, the signature dark-mode highlight (~2× the light themes).
- `--bloom-2` (bottom-left, **maroon**): `rgba(168,48,47,0.30)`.
- `--gradient-illume` (hero backlight): `radial-gradient(70% 62% at 50% 0%, color-mix(in srgb, #D8BC8C 46%, transparent) 0%, transparent 72%)` — warm sand glow behind the welcome card (sand, **not** maroon, even in dark).
- The sidebar uses the **raised** surface + a warm top backlight so the nav reads as illuminated rather than a flat dark slab.

## Notes
- `color-scheme: dark` (browser controls/scrollbars render dark).
- Primary button: light `#F7ECE9` fill with **dark `#2A0F13` text** — never `white` text (that was the original contrast bug; always use `text-background`).
- Form inputs use `bg-background` (`#2A0F13`) with rose hairline and light text — already dark-aware.
- Keep the warmth: glows are sand/maroon, never blue-grey. The dark is *aubergine*, not slate.
