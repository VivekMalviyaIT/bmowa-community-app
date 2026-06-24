import React from 'react';

/**
 * BlueJay Malgudi — Input
 * Text field with optional uppercase tracked label. Quiet cream-sunk
 * fill, hairline border, maroon focus ring.
 */
export function Input({ label, hint, id, style = {}, ...rest }) {
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <input
        id={inputId}
        style={{
          width: '100%', boxSizing: 'border-box',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-heading)',
          background: 'var(--surface-sunk)', border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-md)', padding: '0.7rem 0.9rem', outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          ...style,
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-hairline)'; e.currentTarget.style.boxShadow = 'none'; }}
        {...rest}
      />
      {hint && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>{hint}</span>}
    </div>
  );
}
