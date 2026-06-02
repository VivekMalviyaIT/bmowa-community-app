import GlassCard from '@/components/GlassCard';
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
    sheetData = await fetchSheetData('Sheet1');
  } catch (e) {
    console.error('Failed to fetch services data:', e);
  }

  // Group services by category
  const categories = [...new Set(COMMUNITY_SERVICES.map(s => s.category))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-emerald-400';
      case 'degraded': return 'bg-amber-400';
      case 'down': return 'bg-red-400';
      default: return 'bg-white/40';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'degraded': return 'Needs Attention';
      case 'down': return 'Non-Functional';
      default: return 'Unknown';
    }
  };

  return (
    <div>
      <PageHeader title="Services" subtitle="Community services & infrastructure status" />

      {/* Status Summary */}
      <GlassCard delay={0.05}>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-white/50">
                {COMMUNITY_SERVICES.filter(s => s.status === 'operational').length} Operational
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-[10px] text-white/50">
                {COMMUNITY_SERVICES.filter(s => s.status === 'degraded').length} Degraded
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-[10px] text-white/50">
                {COMMUNITY_SERVICES.filter(s => s.status === 'down').length} Down
              </span>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Services by Category */}
      {categories.map((category) => (
        <div key={category} className="mt-6">
          <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 px-1">
            {category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COMMUNITY_SERVICES.filter(s => s.category === category).map((service, idx) => (
              <GlassCard key={service.title} delay={idx * 0.08}>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{service.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white/90 truncate">{service.title}</h4>
                    </div>
                  </div>
                  <p className="text-[10px] text-white/40 mb-2">{service.details}</p>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(service.status)}`} />
                    <span className={`text-[10px] ${
                      service.status === 'operational' ? 'text-emerald-400/70' :
                      service.status === 'degraded' ? 'text-amber-400/70' : 'text-red-400/70'
                    }`}>
                      {getStatusText(service.status)}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      ))}

      <p className="text-[10px] text-white/20 mt-6 text-center">
        Service status synced from BMOWA Google Sheets • Last refresh: auto every 5 mins
      </p>
    </div>
  );
}
