import React from 'react';

/**
 * BlueJay Malgudi — Card
 * The editorial surface: soft cream/white, hairline border, 24px radius,
 * low gentle shadow. Hover lifts it 2px. `tone` swaps the surface to a
 * brand/garden/sand gradient wash for feature cards.
 */
export function Card({
  children,
  tone = 'plain',
  hover = false,
  padding = 'var(--space-8)',
  style = {},
  ...rest
}) {
  const tones = {
    plain: { background: 'var(--surface-card)', color: 'var(--text-body)' },
    maroon: { background: 'var(--gradient-maroon)', color: 'var(--text-on-brand)', border: '1px solid transparent' },
    garden: { background: 'var(--gradient-garden)', color: '#F1F6F2', border: '1px solid transparent' },
    sand: { background: 'var(--gradient-dawn)', color: 'var(--text-body)' },
    glow: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      backgroundImage: 'var(--gradient-illume)',
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-sm)',
        padding,
        transition: 'box-shadow var(--dur-normal) var(--ease-editorial), transform var(--dur-normal) var(--ease-editorial)',
        cursor: hover ? 'pointer' : 'default',
        ...tones[tone],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
