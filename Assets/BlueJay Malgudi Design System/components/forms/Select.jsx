import React from 'react';

/** BlueJay Malgudi — Select. Native select with brand chevron + focus ring. */
export function Select({ label, hint, id, children, style = {}, ...rest }) {
  const inputId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', width: '100%' }}>
        <select
          id={inputId}
          style={{
            width: '100%', boxSizing: 'border-box', appearance: 'none', WebkitAppearance: 'none',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-heading)',
            background: 'var(--surface-sunk)', border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-md)', padding: '0.7rem 2.2rem 0.7rem 0.9rem', outline: 'none',
            cursor: 'pointer',
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
            ...style,
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-ring)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-hairline)'; e.currentTarget.style.boxShadow = 'none'; }}
          {...rest}
        >
          {children}
        </select>
        <span style={{
          position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '0.7rem',
        }}>▼</span>
      </div>
      {hint && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>{hint}</span>}
    </div>
  );
}
