// BlueJay Malgudi — Services screen
function Services() {
  const { Card, Badge, SectionHeader } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const services = [
    { title: 'Water Supply — 6-Step Process', icon: '💧', status: 'operational', details: 'Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing', cat: 'Infrastructure' },
    { title: 'Borewell System', icon: '🕳️', status: 'operational', details: '3 active borewells • Regular yield monitoring', cat: 'Infrastructure' },
    { title: 'Waste Management', icon: '🗑️', status: 'operational', details: 'Wet & dry segregation • BBMP pickup daily', cat: 'Infrastructure' },
    { title: 'CCTV Surveillance', icon: '📹', status: 'degraded', details: '11/16 cameras active • 5 down • 5-day storage only', cat: 'Security' },
    { title: 'Security Staff', icon: '🛡️', status: 'operational', details: '24/7 main gate • Patrol rounds every 2 hours', cat: 'Security' },
    { title: 'STP (Sewage Treatment)', icon: '♻️', status: 'degraded', details: 'Operational but outdated • ECO STP upgrade recommended', cat: 'Maintenance' },
    { title: 'Housekeeping', icon: '🧹', status: 'operational', details: 'Daily common-area cleaning • Staircases alternate days', cat: 'Maintenance' },
    { title: 'Electrical Maintenance', icon: '⚡', status: 'operational', details: 'On-call electrician • DG backup for common areas', cat: 'Maintenance' },
  ];
  const map = {
    operational: { tone: 'success', label: 'Operational' },
    degraded: { tone: 'warning', label: 'Needs Attention' },
    down: { tone: 'danger', label: 'Non-Functional' },
  };
  const cats = [...new Set(services.map((s) => s.cat))];
  const count = (st) => services.filter((s) => s.status === st).length;

  return (
    <div>
      <SectionHeader title="Services" subtitle="Community services & infrastructure status" />
      <div style={{ marginTop: 36 }}>
        <Card padding="18px 22px">
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}><i style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--success)' }} />{count('operational')} Operational</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}><i style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--warning)' }} />{count('degraded')} Degraded</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}><i style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--danger)' }} />{count('down')} Down</span>
          </div>
        </Card>
      </div>
      {cats.map((cat) => (
        <div key={cat} style={{ marginTop: 36 }}>
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-subtle)', marginBottom: 16 }}>{cat}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {services.filter((s) => s.cat === cat).map((s) => {
              const m = map[s.status];
              return (
                <Card key={s.title} padding="20px">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1.25 }}>{s.title}</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{s.details}</p>
                  <Badge tone={m.tone} dot>{m.label}</Badge>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
window.Services = Services;
