import React from 'react';

/**
 * BlueJay Malgudi — Badge
 * Small pill label for categories, statuses and priorities. Soft tinted
 * fill with matching text. `dot` adds a status indicator dot.
 */
export function Badge({ children, tone = 'neutral', dot = false, style = {}, ...rest }) {
  const tones = {
    neutral: { bg: 'var(--bg-subtle)', fg: 'var(--text-muted)', dotc: 'var(--ink-400)' },
    brand:   { bg: 'var(--brand-soft)', fg: 'var(--brand)', dotc: 'var(--brand)' },
    success: { bg: 'var(--success-soft)', fg: 'var(--success)', dotc: 'var(--success)' },
    warning: { bg: 'var(--warning-soft)', fg: 'var(--warning)', dotc: 'var(--warning)' },
    danger:  { bg: 'var(--danger-soft)', fg: 'var(--danger)', dotc: 'var(--danger)' },
    info:    { bg: 'var(--info-soft)', fg: 'var(--info)', dotc: 'var(--info)' },
    sand:    { bg: 'var(--sand-100)', fg: 'var(--sand-700)', dotc: 'var(--sand-500)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dotc, flexShrink: 0 }} />
      )}
      {children}
    </span>
  );
}
