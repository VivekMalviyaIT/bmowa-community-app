# Community App — UI Kit

A high-fidelity recreation of the **BlueJay Malgudi Community Journal** app — the resident-facing Next.js app in `bmowa-community-app/`. Editorial "journal" layout: cream canvas, serif headlines, soft cards, a left masthead sidebar.

## Screens
- **Spotlight** (`Spotlight.jsx`) — home. Greeting card (sand glow), Community Health stat row, Announcements list.
- **Services** (`Services.jsx`) — infrastructure status grouped by category with status badges.
- **Events** (`Events.jsx`) — upcoming events with RSVP.
- **Feedback** (`Feedback.jsx`) — interactive form → success/reference state.
- **Sidebar** (`Sidebar.jsx`) — masthead logo + editorial nav (active = maroon rule + tint).

`index.html` wires them with in-app navigation. Open it to click through.

## Built from
`bmowa-community-app/src/app/*` and `src/components/*` (EditorialCard, HealthCard, PageHeader, Sidebar, AnnouncementList). Components are composed from the design-system bundle (`Card`, `StatCard`, `Badge`, `Button`, `Input`, `Select`, `Textarea`, `SectionHeader`) — not re-implemented.

## Notes
- The original app uses emoji (💧 🛡️ ⚙) and Unicode glyphs (✦ ◈ ✎) as icons — preserved here for fidelity. See readme.md → ICONOGRAPHY for the production recommendation (Lucide).
- The real app pulls live data from Google Sheets; here values are representative samples.
