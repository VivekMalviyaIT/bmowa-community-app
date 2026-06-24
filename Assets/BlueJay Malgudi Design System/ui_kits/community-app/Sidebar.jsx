// BlueJay Malgudi — Community App · Sidebar (editorial masthead nav)
const NAV = [
  { name: 'Spotlight', icon: '✦' },
  { name: 'Services', icon: '⚙' },
  { name: 'Events', icon: '◈' },
  { name: 'Feedback', icon: '✎' },
];

function Sidebar({ active, onNavigate }) {
  return (
    <aside style={{
      width: 'var(--sidebar-w)', flexShrink: 0, alignSelf: 'stretch',
      background: 'var(--surface-raised)', borderRight: '1px solid var(--border-hairline)',
      padding: '40px 24px', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44 }}>
        <img src="../../assets/malgudi-logo.png" alt="Malgudi" style={{ width: 36, height: 'auto' }} />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-heading)', lineHeight: 1 }}>BlueJay Malgudi</div>
          <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-subtle)', marginTop: 4 }}>Community Journal</div>
        </div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {NAV.map((item) => {
          const on = active === item.name;
          return (
            <button key={item.name} onClick={() => onNavigate(item.name)} style={{
              position: 'relative', display: 'flex', alignItems: 'center', gap: 12,
              padding: '11px 14px', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
              background: on ? 'color-mix(in srgb, var(--brand) 9%, transparent)' : 'transparent',
              textAlign: 'left', transition: 'background var(--dur-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'color-mix(in srgb, var(--text-heading) 4%, transparent)'; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
              {on && <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 18, borderRadius: 999, background: 'var(--brand)' }} />}
              <span style={{ fontSize: 13, color: on ? 'var(--brand)' : 'var(--text-subtle)', opacity: on ? 1 : 0.7 }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: on ? 600 : 500, color: on ? 'var(--text-heading)' : 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>{item.name}</span>
            </button>
          );
        })}
      </nav>
      <div style={{ paddingTop: 20, borderTop: '1px solid var(--border-hairline)', fontSize: 10, color: 'var(--text-subtle)', textAlign: 'center', letterSpacing: '0.04em' }}>
        Est. 2024 · Editorial Edition
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
