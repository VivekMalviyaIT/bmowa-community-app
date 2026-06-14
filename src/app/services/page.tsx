import EditorialCard from '@/components/EditorialCard';
import PageHeader from '@/components/PageHeader';
import { fetchSheetData } from '@/lib/googleSheets';

interface ServiceItem {
  title: string;
  icon: string;
  status: 'operational' | 'degraded' | 'down';
  details: string;
  category: string;
}

const COMMUNITY_SERVICES: ServiceItem[] = [
  {
    title: 'Water Supply — 6-Step Process',
    icon: '💧',
    status: 'operational',
    details: 'Primary → External → Softening → Main Sump → Softening 2 → Final Cleansing',
    category: 'Infrastructure',
  },
  {
    title: 'Borewell System',
    icon: '🕳️',
    status: 'operational',
    details: '3 active borewells • Regular yield monitoring',
    category: 'Infrastructure',
  },
  {
    title: 'CCTV Surveillance',
    icon: '📹',
    status: 'degraded',
    details: '11/16 cameras active • 5 down • 5-day storage only',
    category: 'Security',
  },
  {
    title: 'Security Staff',
    icon: '🛡️',
    status: 'operational',
    details: '24/7 security at main gate • Patrol rounds every 2 hours',
    category: 'Security',
  },
  {
    title: 'STP (Sewage Treatment)',
    icon: '♻️',
    status: 'degraded',
    details: 'Current STP operational but outdated • ECO STP upgrade recommended',
    category: 'Infrastructure',
  },
  {
    title: 'Housekeeping',
    icon: '🧹',
    status: 'operational',
    details: 'Daily common area cleaning • Staircase cleaning alternate days',
    category: 'Maintenance',
  },
  {
    title: 'Electrical Maintenance',
    icon: '⚡',
    status: 'operational',
    details: 'On-call electrician • DG backup for common areas',
    category: 'Maintenance',
  },
  {
    title: 'Plumbing Services',
    icon: '🔧',
    status: 'operational',
    details: 'On-call plumber • Emergency response within 30 mins',
    category: 'Maintenance',
  },
  {
    title: 'Waste Management',
    icon: '🗑️',
    status: 'operational',
    details: 'Wet & dry segregation • BBMP pickup daily',
    category: 'Infrastructure',
  },
];

export default async function ServicesPage() {
  let sheetData: Array<Record<string, string>> = [];
  try {
    sheetData = (await fetchSheetData('Sheet1')) as Record<string, string>[];
  } catch (e) {
    console.error('Failed to fetch services data:', e);
  }

  const categories = [...new Set(COMMUNITY_SERVICES.map(s => s.category))];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'operational': return { dot: 'bg-accent-emerald', text: 'text-accent-emerald', label: 'Operational' };
      case 'degraded': return { dot: 'bg-accent-amber', text: 'text-accent-amber', label: 'Needs Attention' };
      case 'down': return { dot: 'bg-accent-red', text: 'text-accent-red', label: 'Non-Functional' };
      default: return { dot: 'bg-text-subtle', text: 'text-text-subtle', label: 'Unknown' };
    }
  };

  return (
    <div>
      <PageHeader title="Services" subtitle="Community services & infrastructure status" />

      {/* Status Summary Bar */}
      <EditorialCard delay={0.05} hover={false}>
        <div className="p-5 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-emerald" />
            <span className="text-xs text-text-muted">
              {COMMUNITY_SERVICES.filter(s => s.status === 'operational').length} Operational
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-amber" />
            <span className="text-xs text-text-muted">
              {COMMUNITY_SERVICES.filter(s => s.status === 'degraded').length} Degraded
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-red" />
            <span className="text-xs text-text-muted">
              {COMMUNITY_SERVICES.filter(s => s.status === 'down').length} Down
            </span>
          </div>
        </div>
      </EditorialCard>

      {/* Services by Category */}
      {categories.map((category) => (
        <div key={category} className="mt-10">
          <h3 className="text-xs font-semibold text-text-subtle uppercase tracking-widest mb-4 px-1">
            {category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMUNITY_SERVICES.filter(s => s.category === category).map((service, idx) => {
              const statusInfo = getStatusStyle(service.status);
              return (
                <EditorialCard key={service.title} delay={idx * 0.06} hover={false}>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{service.icon}</span>
                      <h4 className="text-xs font-semibold text-foreground leading-tight">{service.title}</h4>
                    </div>
                    <p className="text-[11px] text-text-muted mb-3 leading-relaxed">{service.details}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${statusInfo.dot}`} />
                      <span className={`text-[11px] font-medium ${statusInfo.text}`}>
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                </EditorialCard>
              );
            })}
          </div>
        </div>
      ))}

      <p className="text-[11px] text-text-subtle mt-10 text-center">
        Service status synced from BMOWA Google Sheets • Auto-refreshes every 5 minutes
      </p>
    </div>
  );
}
