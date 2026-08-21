import { Link } from 'react-router-dom';

const links = [
  {
    label: 'Mandatory Disclosures',
    href: '/mandatory-disclosures',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: 'NBA',
    href: '/nba',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: 'Events',
    href: '/events',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Alumni',
    href: '/alumni-association',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#F3DAB2', borderBottom: '1px solid rgba(199,34,53,0.12)' }}
    >
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ height: 90 }}>
          {links.map(({ label, href, icon }, idx) => (
            <Link
              key={label}
              to={href}
              className="group flex flex-row items-center justify-center gap-3 transition-all duration-200"
              style={{
                borderRight: idx < links.length - 1 ? '1px solid rgba(74,20,40,0.18)' : 'none',
                borderLeft: idx === 0 ? 'none' : undefined,
                color: '#4A1428',
              }}
            >
              <span
                className="w-6 h-6 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ color: '#4A1428' }}
              >
                {icon}
              </span>
              <span
                className="font-display font-bold uppercase tracking-widest text-center transition-colors duration-200 group-hover:text-[var(--green,#C72235)]"
                style={{ letterSpacing: '0.12em', fontSize: '16px' }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
