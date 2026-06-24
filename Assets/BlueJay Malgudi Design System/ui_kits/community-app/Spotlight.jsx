// BlueJay Malgudi — Spotlight (home) screen
function Spotlight() {
  const { Card, StatCard, Badge, SectionHeader, Button } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const announcements = [
    { title: 'Monthly Maintenance Scheduled', desc: 'Water tank cleaning and lift servicing this Saturday, 8 AM – 2 PM.', date: '2 Jun 2026', cat: 'Maintenance', tone: 'danger' },
    { title: 'New Gym Equipment Arrived', desc: 'New treadmills and weight stations now open for all residents.', date: '1 Jun 2026', cat: 'Amenities', tone: 'warning' },
    { title: 'Annual General Meeting', desc: 'AGM on June 15th at 6 PM in the community hall. All homeowners welcome.', date: '30 May 2026', cat: 'Meeting', tone: 'danger' },
    { title: 'Parking Zones Repainted', desc: 'Basement zones repainted — please park in your designated slot only.', date: '28 May 2026', cat: 'Notice', tone: 'success' },
  ];
  return (
    <div>
      <SectionHeader eyebrow="Good morning," title="Spotlight" subtitle="Your community at a glance" />

      <div style={{ marginTop: 40, marginBottom: 56 }}>
        <Card tone="glow" padding="32px">
          <div style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-subtle)' }}>Welcome home</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-heading)', margin: '8px 0 0' }}>Welcome to BlueJay Malgudi</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginTop: 10, fontWeight: 300 }}>Everything is running smoothly today ✓</p>
        </Card>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', color: 'var(--text-heading)' }}>Community Health</h3>
        <Badge tone="success" dot>Live Status</Badge>
      </div>
      <div style={{ display: 'flex', gap: 18, overflowX: 'auto', paddingBottom: 8, marginBottom: 56 }}>
        <StatCard icon="💧" title="Water Supply" value="80k L" subtitle="of 100k Litres capacity" progress={80} tone="info" live />
        <StatCard icon="🛡️" title="Security Staff" value="12 Guards" subtitle="All positions covered" progress={100} tone="garden" live />
        <StatCard icon="🛗" title="Lift Uptime" value="99.95%" subtitle="Last 30 days average" progress={99.95} tone="maroon" live />
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', color: 'var(--text-heading)' }}>Announcements</h3>
        <Button variant="ghost" size="sm">View All →</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {announcements.map((a) => (
          <Card key={a.title} hover padding="20px 22px">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Badge tone={a.tone}>{a.cat}</Badge>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>{a.date}</span>
                </div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-heading)' }}>{a.title}</div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.6 }}>{a.desc}</p>
              </div>
              <span style={{ color: 'var(--text-subtle)', fontSize: 18 }}>›</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.Spotlight = Spotlight;
