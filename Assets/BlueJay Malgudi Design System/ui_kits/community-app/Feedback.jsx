// BlueJay Malgudi — Feedback screen (interactive form → success state)
function Feedback() {
  const { Card, SectionHeader, Input, Select, Textarea, Button } = window.BlueJayMalgudiDesignSystem_8a1bfb;
  const [priority, setPriority] = React.useState('Medium');
  const [submitted, setSubmitted] = React.useState(false);
  const [ref, setRef] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    setRef('BMOWA-' + Math.floor(1000 + Math.random() * 9000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <SectionHeader title="Feedback" subtitle="Share your thoughts with the community" />
        <div style={{ marginTop: 40 }}>
          <Card tone="glow" padding="48px" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 44, color: 'var(--success)' }}>✓</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-heading)', margin: '12px 0' }}>Thank You</h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', maxWidth: 380, margin: '0 auto 8px' }}>Your feedback has been recorded. The BMOWA committee will review it shortly.</p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--info)', marginBottom: 24 }}>Reference: <span style={{ fontFamily: 'var(--font-mono)' }}>{ref}</span></p>
            <Button variant="secondary" onClick={() => setSubmitted(false)}>Submit Another</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title="Feedback Corner" subtitle="Share your thoughts, suggestions & concerns with BMOWA" />
      <div style={{ marginTop: 40 }}>
        <Card padding="36px">
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <Input label="Your Name (Optional)" placeholder="e.g., Resident" />
              <Input label="Flat Number (Optional)" placeholder="e.g., A-101" />
            </div>
            <Select label="Category *" defaultValue="">
              <option value="" disabled>Select a category</option>
              <option>Water Supply</option>
              <option>Security & CCTV</option>
              <option>Parking</option>
              <option>Maintenance</option>
              <option>Amenities</option>
              <option>Suggestion</option>
            </Select>
            <Input label="Subject *" placeholder="Brief description of your feedback" />
            <Textarea label="Details *" rows={5} placeholder="Describe in detail…" />
            <div>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: 10 }}>Priority</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Low', 'Medium', 'High'].map((p) => (
                  <button key={p} type="button" onClick={() => setPriority(p)} style={{
                    flex: 1, padding: '10px 0', fontSize: 'var(--text-sm)', fontWeight: 500, cursor: 'pointer',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid ' + (priority === p ? 'color-mix(in srgb, var(--brand) 35%, transparent)' : 'var(--border-hairline)'),
                    background: priority === p ? 'var(--brand-soft)' : 'var(--surface-sunk)',
                    color: priority === p ? 'var(--brand)' : 'var(--text-muted)',
                  }}>{p}</button>
                ))}
              </div>
            </div>
            <Button variant="primary" fullWidth type="submit">Submit Feedback</Button>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', textAlign: 'center' }}>Your feedback is submitted to the BMOWA committee and logged for review.</p>
          </form>
        </Card>
      </div>
    </div>
  );
}
window.Feedback = Feedback;
