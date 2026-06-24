import React from 'react';

/**
 * BlueJay Malgudi — SectionHeader / PageHeader
 * Serif title with optional eyebrow + subtitle and the signature
 * short rule beneath. Use atop every screen and major section.
 */
export function SectionHeader({ eyebrow, title, subtitle, rule = true, align = 'left', style = {} }) {
  return (
    <div style={{ textAlign: align, ...style }}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-subtle)',
          marginBottom: '0.6rem',
        }}>{eyebrow}</div>
      )}
      <h1 style={{
        fontFamily: 'var(--font-display)', color: 'var(--text-heading)',
        fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-regular)',
        letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)', margin: 0,
      }}>{title}</h1>
      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-light)',
          color: 'var(--text-muted)', marginTop: '0.75rem', letterSpacing: 'var(--tracking-wide)',
        }}>{subtitle}</p>
      )}
      {rule && (
        <div style={{
          width: 48, height: 1, background: 'color-mix(in srgb, var(--text-heading) 22%, transparent)',
          marginTop: 'var(--space-6)', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0,
        }} />
      )}
    </div>
  );
}
