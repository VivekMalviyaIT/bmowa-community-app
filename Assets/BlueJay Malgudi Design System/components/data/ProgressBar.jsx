import React from 'react';

/**
 * BlueJay Malgudi — ProgressBar
 * Thin rounded track with a gradient fill. Tone picks the fill gradient.
 */
export function ProgressBar({ value = 0, tone = 'maroon', showLabel = false, height = 5, style = {} }) {
  const v = Math.max(0, Math.min(100, value));
  const fills = {
    maroon: 'var(--gradient-maroon)',
    garden: 'var(--gradient-garden)',
    sand: 'linear-gradient(90deg, var(--sand-300), var(--sand-500))',
    info: 'linear-gradient(90deg, #6E84A0, var(--info))',
  };
  return (
    <div style={{ width: '100%', ...style }}>
      <div style={{
        width: '100%', height, background: 'var(--bg-subtle)',
        borderRadius: 'var(--radius-pill)', overflow: 'hidden',
      }}>
        <div style={{
          width: v + '%', height: '100%', background: fills[tone] || fills.maroon,
          borderRadius: 'var(--radius-pill)',
          transition: 'width 1s var(--ease-out)',
        }} />
      </div>
      {showLabel && (
        <div style={{ textAlign: 'right', marginTop: '0.4rem', fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>
          {v}%
        </div>
      )}
    </div>
  );
}
