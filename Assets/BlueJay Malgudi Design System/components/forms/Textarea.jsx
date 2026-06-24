import React from 'react';

/** BlueJay Malgudi — Textarea. Multiline counterpart to Input. */
export function Textarea({ label, hint, id, rows = 4, style = {}, ...rest }) {
  const inputId = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)',
        }}>{label}</label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        style={{
          width: '100%', boxSizing: 'border-box', resize: 'vertical',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-heading)',
          lineHeight: 'var(--leading-normal)',
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
