import React from 'react';

/**
 * BlueJay Malgudi — Avatar
 * Resident/staff avatar. Falls back to serif initials on a warm tinted
 * disc. `src` shows a photo. `tone` picks the fallback tint.
 */
export function Avatar({ src, name = '', size = 40, tone = 'maroon', style = {} }) {
  const initials = name.split(' ').map((p) => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const tones = {
    maroon: { bg: 'var(--brand-soft)', fg: 'var(--brand)' },
    garden: { bg: 'var(--green-100)', fg: 'var(--green-700)' },
    sand: { bg: 'var(--sand-100)', fg: 'var(--sand-700)' },
  };
  const t = tones[tone] || tones.maroon;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      background: src ? 'transparent' : t.bg,
      border: '1px solid var(--border-hairline)',
      ...style,
    }}>
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{
          fontFamily: 'var(--font-display)', color: t.fg,
          fontSize: size * 0.42, lineHeight: 1,
        }}>{initials || '·'}</span>
      )}
    </div>
  );
}
