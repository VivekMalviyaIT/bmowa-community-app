import React from 'react';

/**
 * BlueJay Malgudi — Button
 * Pill-shaped, editorial. Maroon brand fill, sand & green accents,
 * quiet ghost/outline variants. Gentle lift on hover, subtle press.
 */
export function Button({
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
    sm: { padding: '0.4rem 0.9rem', fontSize: 'var(--text-sm)', gap: '0.4rem' },
    md: { padding: '0.65rem 1.4rem', fontSize: 'var(--text-base)', gap: '0.5rem' },
    lg: { padding: '0.85rem 1.9rem', fontSize: 'var(--text-md)', gap: '0.6rem' },
  };

  const variants = {
    primary: {
      background: 'var(--gradient-maroon)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-heading)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)',
    },
    green: {
      background: 'var(--gradient-garden)',
      color: '#F4F8F5',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1px solid color-mix(in srgb, var(--brand) 40%, transparent)',
      boxShadow: 'none',
    },
  };

  return (
    <button
      disabled={disabled}
      style={{
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
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary' || variant === 'green') e.currentTarget.style.filter = 'brightness(1.06)';
        if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'var(--brand-soft)';
        if (variant === 'secondary') e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.filter = 'none';
        if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'transparent';
        if (variant === 'secondary') e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
