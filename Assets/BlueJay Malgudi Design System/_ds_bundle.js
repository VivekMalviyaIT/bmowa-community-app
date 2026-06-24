/* @ds-bundle: {"format":3,"namespace":"BlueJayMalgudiDesignSystem_8a1bfb","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"eb31ad06a07f","components/core/Badge.jsx":"6a9f9af43f81","components/core/Button.jsx":"fe6b60c4f80a","components/core/Card.jsx":"424411e3dfd2","components/core/SectionHeader.jsx":"b5c9d1e414ae","components/data/ProgressBar.jsx":"aa7e02e455f4","components/data/StatCard.jsx":"0c165ab5fe87","components/forms/Input.jsx":"4bc5f7797580","components/forms/Select.jsx":"e476f1f352e3","components/forms/Textarea.jsx":"98262dfc240b","ui_kits/community-app/Events.jsx":"4c8642047e2f","ui_kits/community-app/Feedback.jsx":"c88347aab7eb","ui_kits/community-app/Services.jsx":"8d9795f90a9f","ui_kits/community-app/Sidebar.jsx":"f1d88a8a1cfa","ui_kits/community-app/Spotlight.jsx":"8277e8c0d0a6","ui_kits/community-app/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlueJayMalgudiDesignSystem_8a1bfb = window.BlueJayMalgudiDesignSystem_8a1bfb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * BlueJay Malgudi — Avatar
 * Resident/staff avatar. Falls back to serif initials on a warm tinted
 * disc. `src` shows a photo. `tone` picks the fallback tint.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  tone = 'maroon',
  style = {}
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const tones = {
    maroon: {
      bg: 'var(--brand-soft)',
      fg: 'var(--brand)'
    },
    garden: {
      bg: 'var(--green-100)',
      fg: 'var(--green-700)'
    },
    sand: {
      bg: 'var(--sand-100)',
      fg: 'var(--sand-700)'
    }
  };
  const t = tones[tone] || tones.maroon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: src ? 'transparent' : t.bg,
      border: '1px solid var(--border-hairline)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      color: t.fg,
      fontSize: size * 0.42,
      lineHeight: 1
    }
  }, initials || '·'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlueJay Malgudi — Badge
 * Small pill label for categories, statuses and priorities. Soft tinted
 * fill with matching text. `dot` adds a status indicator dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--bg-subtle)',
      fg: 'var(--text-muted)',
      dotc: 'var(--ink-400)'
    },
    brand: {
      bg: 'var(--brand-soft)',
      fg: 'var(--brand)',
      dotc: 'var(--brand)'
    },
    success: {
      bg: 'var(--success-soft)',
      fg: 'var(--success)',
      dotc: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-soft)',
      fg: 'var(--warning)',
      dotc: 'var(--warning)'
    },
    danger: {
      bg: 'var(--danger-soft)',
      fg: 'var(--danger)',
      dotc: 'var(--danger)'
    },
    info: {
      bg: 'var(--info-soft)',
      fg: 'var(--info)',
      dotc: 'var(--info)'
    },
    sand: {
      bg: 'var(--sand-100)',
      fg: 'var(--sand-700)',
      dotc: 'var(--sand-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      padding: dot ? '0.25rem 0.65rem 0.25rem 0.55rem' : '0.25rem 0.7rem',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: '1px solid color-mix(in srgb, ' + t.fg + ' 16%, transparent)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dotc,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlueJay Malgudi — Button
 * Pill-shaped, editorial. Maroon brand fill, sand & green accents,
 * quiet ghost/outline variants. Gentle lift on hover, subtle press.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.4rem 0.9rem',
      fontSize: 'var(--text-sm)',
      gap: '0.4rem'
    },
    md: {
      padding: '0.65rem 1.4rem',
      fontSize: 'var(--text-base)',
      gap: '0.5rem'
    },
    lg: {
      padding: '0.85rem 1.9rem',
      fontSize: 'var(--text-md)',
      gap: '0.6rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--gradient-maroon)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-heading)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    green: {
      background: 'var(--gradient-garden)',
      color: '#F4F8F5',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1px solid color-mix(in srgb, var(--brand) 40%, transparent)',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: sizes[size].fontSize,
      lineHeight: 1,
      padding: sizes[size].padding,
      width: fullWidth ? '100%' : 'auto',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-normal) var(--ease-editorial), filter var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary' || variant === 'green') e.currentTarget.style.filter = 'brightness(1.06)';
      if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'var(--brand-soft)';
      if (variant === 'secondary') e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
      if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'transparent';
      if (variant === 'secondary') e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlueJay Malgudi — Card
 * The editorial surface: soft cream/white, hairline border, 24px radius,
 * low gentle shadow. Hover lifts it 2px. `tone` swaps the surface to a
 * brand/garden/sand gradient wash for feature cards.
 */
function Card({
  children,
  tone = 'plain',
  hover = false,
  padding = 'var(--space-8)',
  style = {},
  ...rest
}) {
  const tones = {
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    maroon: {
      background: 'var(--gradient-maroon)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent'
    },
    garden: {
      background: 'var(--gradient-garden)',
      color: '#F1F6F2',
      border: '1px solid transparent'
    },
    sand: {
      background: 'var(--gradient-dawn)',
      color: 'var(--text-body)'
    },
    glow: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      backgroundImage: 'var(--gradient-illume)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      transition: 'box-shadow var(--dur-normal) var(--ease-editorial), transform var(--dur-normal) var(--ease-editorial)',
      cursor: hover ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    },
    onMouseEnter: e => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
/**
 * BlueJay Malgudi — SectionHeader / PageHeader
 * Serif title with optional eyebrow + subtitle and the signature
 * short rule beneath. Use atop every screen and major section.
 */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  rule = true,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-subtle)',
      marginBottom: '0.6rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-tight)',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-muted)',
      marginTop: '0.75rem',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, subtitle), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 1,
      background: 'color-mix(in srgb, var(--text-heading) 22%, transparent)',
      marginTop: 'var(--space-6)',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
/**
 * BlueJay Malgudi — ProgressBar
 * Thin rounded track with a gradient fill. Tone picks the fill gradient.
 */
function ProgressBar({
  value = 0,
  tone = 'maroon',
  showLabel = false,
  height = 5,
  style = {}
}) {
  const v = Math.max(0, Math.min(100, value));
  const fills = {
    maroon: 'var(--gradient-maroon)',
    garden: 'var(--gradient-garden)',
    sand: 'linear-gradient(90deg, var(--sand-300), var(--sand-500))',
    info: 'linear-gradient(90deg, #6E84A0, var(--info))'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      background: 'var(--bg-subtle)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v + '%',
      height: '100%',
      background: fills[tone] || fills.maroon,
      borderRadius: 'var(--radius-pill)',
      transition: 'width 1s var(--ease-out)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '0.4rem',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, v, "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/**
 * BlueJay Malgudi — StatCard
 * The "community health" metric tile: icon, live badge, big value, caption,
 * optional progress. Used across Spotlight & Snapshot.
 */
function StatCard({
  icon,
  title,
  value,
  subtitle,
  progress,
  tone = 'maroon',
  live = false,
  style = {}
}) {
  const valueColor = {
    maroon: 'var(--brand)',
    garden: 'var(--accent-green)',
    sand: 'var(--sand-600)',
    info: 'var(--info)'
  }[tone] || 'var(--brand)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      minWidth: 220,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-4)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.5rem',
      lineHeight: 1
    }
  }, icon), live && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)',
      marginBottom: '0.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)',
      color: valueColor,
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.1
    }
  }, value), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)',
      marginTop: '0.35rem'
    }
  }, subtitle), typeof progress === 'number' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: progress,
    tone: tone,
    showLabel: true
  })));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlueJay Malgudi — Input
 * Text field with optional uppercase tracked label. Quiet cream-sunk
 * fill, hairline border, maroon focus ring.
 */
function Input({
  label,
  hint,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      background: 'var(--surface-sunk)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '0.7rem 0.9rem',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** BlueJay Malgudi — Select. Native select with brand chevron + focus ring. */
function Select({
  label,
  hint,
  id,
  children,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      background: 'var(--surface-sunk)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '0.7rem 2.2rem 0.7rem 0.9rem',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '0.9rem',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '0.7rem'
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** BlueJay Malgudi — Textarea. Multiline counterpart to Input. */
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--leading-normal)',
      background: 'var(--surface-sunk)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '0.7rem 0.9rem',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community-app/Events.jsx
try { (() => {
// BlueJay Malgudi — Events screen
function Events() {
  const {
    Card,
    Badge,
    SectionHeader,
    Button
  } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const events = [{
    title: 'Summer Camp for Kids',
    date: 'Jun 10–20',
    time: '9:00 AM – 12:00 PM',
    loc: 'Community Hall',
    spots: '8 spots left',
    tone: 'warning'
  }, {
    title: 'Annual General Meeting',
    date: 'Jun 15',
    time: '6:00 PM – 8:00 PM',
    loc: 'Clubhouse',
    spots: 'All welcome',
    tone: 'success'
  }, {
    title: 'Yoga & Meditation',
    date: 'Every Sunday',
    time: '6:30 – 7:30 AM',
    loc: 'Garden Area',
    spots: 'Open',
    tone: 'success'
  }, {
    title: 'Movie Night',
    date: 'Jun 22',
    time: '7:00 PM',
    loc: 'Terrace',
    spots: '25 spots left',
    tone: 'warning'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Events",
    subtitle: "Upcoming community events & gatherings"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      marginTop: 40
    }
  }, events.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.title,
    hover: true,
    padding: "26px 28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--text-heading)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\uD83D\uDCC5 ", e.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)'
    }
  }, "\uD83D\uDD50 ", e.time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)'
    }
  }, "\uD83D\uDCCD ", e.loc))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone
  }, e.spots), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "RSVP")))))));
}
window.Events = Events;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community-app/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community-app/Feedback.jsx
try { (() => {
// BlueJay Malgudi — Feedback screen (interactive form → success state)
function Feedback() {
  const {
    Card,
    SectionHeader,
    Input,
    Select,
    Textarea,
    Button
  } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const [priority, setPriority] = React.useState('Medium');
  const [submitted, setSubmitted] = React.useState(false);
  const [ref, setRef] = React.useState('');
  const submit = e => {
    e.preventDefault();
    setRef('BMOWA-' + Math.floor(1000 + Math.random() * 9000));
    setSubmitted(true);
  };
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      title: "Feedback",
      subtitle: "Share your thoughts with the community"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "glow",
      padding: "48px",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 44,
        color: 'var(--success)'
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.75rem',
        color: 'var(--text-heading)',
        margin: '12px 0'
      }
    }, "Thank You"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-base)',
        color: 'var(--text-muted)',
        maxWidth: 380,
        margin: '0 auto 8px'
      }
    }, "Your feedback has been recorded. The BMOWA committee will review it shortly."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--info)',
        marginBottom: 24
      }
    }, "Reference: ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, ref)), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSubmitted(false)
    }, "Submit Another"))));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Feedback Corner",
    subtitle: "Share your thoughts, suggestions & concerns with BMOWA"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "36px"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your Name (Optional)",
    placeholder: "e.g., Resident"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Flat Number (Optional)",
    placeholder: "e.g., A-101"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Category *",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a category"), /*#__PURE__*/React.createElement("option", null, "Water Supply"), /*#__PURE__*/React.createElement("option", null, "Security & CCTV"), /*#__PURE__*/React.createElement("option", null, "Parking"), /*#__PURE__*/React.createElement("option", null, "Maintenance"), /*#__PURE__*/React.createElement("option", null, "Amenities"), /*#__PURE__*/React.createElement("option", null, "Suggestion")), /*#__PURE__*/React.createElement(Input, {
    label: "Subject *",
    placeholder: "Brief description of your feedback"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Details *",
    rows: 5,
    placeholder: "Describe in detail\u2026"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Priority"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['Low', 'Medium', 'High'].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => setPriority(p),
    style: {
      flex: 1,
      padding: '10px 0',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (priority === p ? 'color-mix(in srgb, var(--brand) 35%, transparent)' : 'var(--border-hairline)'),
      background: priority === p ? 'var(--brand-soft)' : 'var(--surface-sunk)',
      color: priority === p ? 'var(--brand)' : 'var(--text-muted)'
    }
  }, p)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    type: "submit"
  }, "Submit Feedback"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)',
      textAlign: 'center'
    }
  }, "Your feedback is submitted to the BMOWA committee and logged for review.")))));
}
window.Feedback = Feedback;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community-app/Feedback.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community-app/Services.jsx
try { (() => {
// BlueJay Malgudi — Services screen
function Services() {
  const {
    Card,
    Badge,
    SectionHeader
  } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const services = [{
    title: 'Water Supply — 6-Step Process',
    icon: '💧',
    status: 'operational',
    details: 'Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing',
    cat: 'Infrastructure'
  }, {
    title: 'Borewell System',
    icon: '🕳️',
    status: 'operational',
    details: '3 active borewells • Regular yield monitoring',
    cat: 'Infrastructure'
  }, {
    title: 'Waste Management',
    icon: '🗑️',
    status: 'operational',
    details: 'Wet & dry segregation • BBMP pickup daily',
    cat: 'Infrastructure'
  }, {
    title: 'CCTV Surveillance',
    icon: '📹',
    status: 'degraded',
    details: '11/16 cameras active • 5 down • 5-day storage only',
    cat: 'Security'
  }, {
    title: 'Security Staff',
    icon: '🛡️',
    status: 'operational',
    details: '24/7 main gate • Patrol rounds every 2 hours',
    cat: 'Security'
  }, {
    title: 'STP (Sewage Treatment)',
    icon: '♻️',
    status: 'degraded',
    details: 'Operational but outdated • ECO STP upgrade recommended',
    cat: 'Maintenance'
  }, {
    title: 'Housekeeping',
    icon: '🧹',
    status: 'operational',
    details: 'Daily common-area cleaning • Staircases alternate days',
    cat: 'Maintenance'
  }, {
    title: 'Electrical Maintenance',
    icon: '⚡',
    status: 'operational',
    details: 'On-call electrician • DG backup for common areas',
    cat: 'Maintenance'
  }];
  const map = {
    operational: {
      tone: 'success',
      label: 'Operational'
    },
    degraded: {
      tone: 'warning',
      label: 'Needs Attention'
    },
    down: {
      tone: 'danger',
      label: 'Non-Functional'
    }
  };
  const cats = [...new Set(services.map(s => s.cat))];
  const count = st => services.filter(s => s.status === st).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Services",
    subtitle: "Community services & infrastructure status"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "18px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--success)'
    }
  }), count('operational'), " Operational"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--warning)'
    }
  }), count('degraded'), " Degraded"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--danger)'
    }
  }), count('down'), " Down")))), cats.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat,
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-subtle)',
      marginBottom: 16
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 16
    }
  }, services.filter(s => s.cat === cat).map(s => {
    const m = map[s.status];
    return /*#__PURE__*/React.createElement(Card, {
      key: s.title,
      padding: "20px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, s.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--text-heading)',
        lineHeight: 1.25
      }
    }, s.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        marginBottom: 14
      }
    }, s.details), /*#__PURE__*/React.createElement(Badge, {
      tone: m.tone,
      dot: true
    }, m.label));
  })))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community-app/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community-app/Sidebar.jsx
try { (() => {
// BlueJay Malgudi — Community App · Sidebar (editorial masthead nav)
const NAV = [{
  name: 'Spotlight',
  icon: '✦'
}, {
  name: 'Services',
  icon: '⚙'
}, {
  name: 'Events',
  icon: '◈'
}, {
  name: 'Feedback',
  icon: '✎'
}];
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flexShrink: 0,
      alignSelf: 'stretch',
      background: 'var(--surface-raised)',
      borderRight: '1px solid var(--border-hairline)',
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/malgudi-logo.png",
    alt: "Malgudi",
    style: {
      width: 36,
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--text-heading)',
      lineHeight: 1
    }
  }, "BlueJay Malgudi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-subtle)',
      marginTop: 4
    }
  }, "Community Journal"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, NAV.map(item => {
    const on = active === item.name;
    return /*#__PURE__*/React.createElement("button", {
      key: item.name,
      onClick: () => onNavigate(item.name),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'color-mix(in srgb, var(--brand) 9%, transparent)' : 'transparent',
        textAlign: 'left',
        transition: 'background var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'color-mix(in srgb, var(--text-heading) 4%, transparent)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 3,
        height: 18,
        borderRadius: 999,
        background: 'var(--brand)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: on ? 'var(--brand)' : 'var(--text-subtle)',
        opacity: on ? 1 : 0.7
      }
    }, item.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: on ? 600 : 500,
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)'
      }
    }, item.name));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20,
      borderTop: '1px solid var(--border-hairline)',
      fontSize: 10,
      color: 'var(--text-subtle)',
      textAlign: 'center',
      letterSpacing: '0.04em'
    }
  }, "Est. 2024 \xB7 Editorial Edition"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community-app/Spotlight.jsx
try { (() => {
// BlueJay Malgudi — Spotlight (home) screen
function Spotlight() {
  const {
    Card,
    StatCard,
    Badge,
    SectionHeader,
    Button
  } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const announcements = [{
    title: 'Monthly Maintenance Scheduled',
    desc: 'Water tank cleaning and lift servicing this Saturday, 8 AM – 2 PM.',
    date: '2 Jun 2026',
    cat: 'Maintenance',
    tone: 'danger'
  }, {
    title: 'New Gym Equipment Arrived',
    desc: 'New treadmills and weight stations now open for all residents.',
    date: '1 Jun 2026',
    cat: 'Amenities',
    tone: 'warning'
  }, {
    title: 'Annual General Meeting',
    desc: 'AGM on June 15th at 6 PM in the community hall. All homeowners welcome.',
    date: '30 May 2026',
    cat: 'Meeting',
    tone: 'danger'
  }, {
    title: 'Parking Zones Repainted',
    desc: 'Basement zones repainted — please park in your designated slot only.',
    date: '28 May 2026',
    cat: 'Notice',
    tone: 'success'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Good morning,",
    title: "Spotlight",
    subtitle: "Your community at a glance"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "glow",
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-subtle)'
    }
  }, "Welcome home"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.75rem',
      color: 'var(--text-heading)',
      margin: '8px 0 0'
    }
  }, "Welcome to BlueJay Malgudi"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      marginTop: 10,
      fontWeight: 300
    }
  }, "Everything is running smoothly today \u2713"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      color: 'var(--text-heading)'
    }
  }, "Community Health"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Live Status")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      overflowX: 'auto',
      paddingBottom: 8,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCA7",
    title: "Water Supply",
    value: "80k L",
    subtitle: "of 100k Litres capacity",
    progress: 80,
    tone: "info",
    live: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Security Staff",
    value: "12 Guards",
    subtitle: "All positions covered",
    progress: 100,
    tone: "garden",
    live: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDED7",
    title: "Lift Uptime",
    value: "99.95%",
    subtitle: "Last 30 days average",
    progress: 99.95,
    tone: "maroon",
    live: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      color: 'var(--text-heading)'
    }
  }, "Announcements"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "View All \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, announcements.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    hover: true,
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone
  }, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, a.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 6,
      lineHeight: 1.6
    }
  }, a.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontSize: 18
    }
  }, "\u203A"))))));
}
window.Spotlight = Spotlight;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community-app/Spotlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community-app/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community-app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
