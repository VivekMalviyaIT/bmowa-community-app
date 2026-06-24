import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';
import { Badge } from '../core/Badge.jsx';

/**
 * BlueJay Malgudi — StatCard
 * The "community health" metric tile: icon, live badge, big value, caption,
 * optional progress. Used across Spotlight & Snapshot.
 */
export function StatCard({
  icon, title, value, subtitle, progress, tone = 'maroon', live = false, style = {},
}) {
  const valueColor = {
    maroon: 'var(--brand)', garden: 'var(--accent-green)',
    sand: 'var(--sand-600)', info: 'var(--info)',
  }[tone] || 'var(--brand)';

  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)', minWidth: 220, ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
        {icon && <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{icon}</span>}
        {live && <Badge tone="success" dot>Live</Badge>}
      </div>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
        textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)',
        marginBottom: '0.5rem',
      }}>{title}</div>
      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)', color: valueColor, fontFamily: 'var(--font-sans)', lineHeight: 1.1 }}>
        {value}
      </div>
      {subtitle && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)', marginTop: '0.35rem' }}>{subtitle}</div>}
      {typeof progress === 'number' && (
        <div style={{ marginTop: 'var(--space-4)' }}>
          <ProgressBar value={progress} tone={tone} showLabel />
        </div>
      )}
    </div>
  );
}
