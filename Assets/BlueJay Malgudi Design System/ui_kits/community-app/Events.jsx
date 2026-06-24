// BlueJay Malgudi — Events screen
function Events() {
  const { Card, Badge, SectionHeader, Button } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const events = [
    { title: 'Summer Camp for Kids', date: 'Jun 10–20', time: '9:00 AM – 12:00 PM', loc: 'Community Hall', spots: '8 spots left', tone: 'warning' },
    { title: 'Annual General Meeting', date: 'Jun 15', time: '6:00 PM – 8:00 PM', loc: 'Clubhouse', spots: 'All welcome', tone: 'success' },
    { title: 'Yoga & Meditation', date: 'Every Sunday', time: '6:30 – 7:30 AM', loc: 'Garden Area', spots: 'Open', tone: 'success' },
    { title: 'Movie Night', date: 'Jun 22', time: '7:00 PM', loc: 'Terrace', spots: '25 spots left', tone: 'warning' },
  ];
  return (
    <div>
      <SectionHeader title="Events" subtitle="Upcoming community events & gatherings" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 40 }}>
        {events.map((e) => (
          <Card key={e.title} hover padding="26px 28px">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-heading)' }}>{e.title}</h3>
                <div style={{ display: 'flex', gap: 18, marginTop: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>📅 {e.date}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>🕐 {e.time}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>📍 {e.loc}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
                <Badge tone={e.tone}>{e.spots}</Badge>
                <Button variant="outline" size="sm">RSVP</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.Events = Events;
