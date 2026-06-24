# Design — Editorial (default)

`data-theme="editorial"` · the original shipped look.

**Mood:** neutral, calm, paper-white. Low-contrast editorial magazine. No brand
color leads; warm-grey neutrals with muted pastel accents. No hero glow.

> Structure, typography scale, layout, and component anatomy are shared across
> all three designs — see [README.md](./README.md). This file documents only
> what is **specific** to Editorial: its color values and atmosphere.

## Colors

### Canvas & text
| Variable | Value | Use |
|---|---|---|
| `--background` | `#F7F7F7` | App canvas |
| `--foreground` | `#1A1A1A` | Primary text / inverse button fill |
| `--card-bg` | `#FFFFFF` | Card surface |
| `--card-border` | `#E8E8E8` | Hairline border |
| `--text-muted` | `#6B6B6B` | Secondary text |
| `--text-subtle` | `#999999` | Captions / tertiary |

### Accents (muted pastels)
| Variable | Value | Role |
|---|---|---|
| `--accent-slate` | `#64748B` | Info / water |
| `--accent-sage` | `#7B9E87` | Positive / green |
| `--accent-emerald` | `#3D7A5A` | Positive (strong) |
| `--accent-rose` | `#C9A0A0` | Security / pink |
| `--accent-red` | `#B45454` | Danger |
| `--accent-amber` | `#B8860B` | Warning |
| `--accent-warm` | `#C4A882` | Sand |

### Surfaces & nav
| Variable | Value |
|---|---|
| `--sidebar-bg` | `#FAFAFA` |
| `--sidebar-border` | `#EBEBEB` |
| `--sidebar-glow` | `none` |
| `--mobile-nav-bg` | `rgba(255,255,255,0.95)` |
| `--progress-track` | `#F0F0F0` |
| `--nav-active-bg` | `rgba(26,26,26,0.04)` (neutral) |
| `--nav-hover-bg` | `rgba(26,26,26,0.02)` |
| `--nav-active-indicator` | `#1A1A1A` |
| `--nav-active-icon` | `#1A1A1A` |

### Elevation
| Variable | Value |
|---|---|
| `--card-shadow` | `0 1px 3px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.03)` |
| `--card-shadow-hover` | `0 2px 8px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.05)` |

## Atmosphere
- `--bloom-1` (top-right, sand): `rgba(196,168,130,0.08)` — very faint.
- `--bloom-2` (bottom-left, sage): `rgba(123,158,135,0.06)` — very faint.
- `--gradient-illume`: `none` — **no** hero backlight; the welcome card is a plain white card.
- Nav active state is **neutral** (dark-on-paper), not maroon — this is the one place Editorial deliberately stays color-free.

## Notes
- `color-scheme: light` (browser form controls / scrollbars render light).
- Primary button: `#1A1A1A` fill, `#F7F7F7` text.
- This theme's values are byte-identical to the app's original design — treat it as the stable baseline.
