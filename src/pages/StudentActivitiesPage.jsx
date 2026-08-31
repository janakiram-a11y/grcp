import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

const COMMITTEES = college.studentActivities.committees;

// ── Shared primitives ──────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 pb-3"
        style={{
          color: accent,
          borderBottom: `3px solid ${accent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3
      className="font-display font-semibold text-type-h5 mt-10 mb-4"
      style={{ color: accent }}
    >
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: primary }} />
          <span className="font-body text-type-body text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleBadge({ role }) {
  if (!role) return <span className="text-[#9CA3AF]">—</span>;
  const lower = role.toLowerCase();
  let bg, color;
  if (lower.includes('chairperson') || lower.includes('president') || lower.includes('chairman')) {
    bg = '#FEF2F2'; color = '#B91C1C';
  } else if (lower.includes('co-ordinator') || lower.includes('coordinator') || lower.includes('convener') || lower.includes('secretary') || lower.includes('program officer')) {
    bg = '#F0FDF4'; color = '#166534';
  } else {
    bg = '#F3F4F6'; color = '#374151';
  }
  return (
    <span
      className="inline-block font-display font-semibold text-type-ui px-2.5 py-0.5 rounded-full whitespace-nowrap"
      style={{ backgroundColor: bg, color }}
    >
      {role}
    </span>
  );
}

function YearTabs({ compositions }) {
  const [activeYear, setActiveYear] = useState(compositions[0]?.year);
  const active = compositions.find((c) => c.year === activeYear) ?? compositions[0];
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5">
        {compositions.map((c) => (
          <button
            key={c.year}
            onClick={() => setActiveYear(c.year)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activeYear === c.year
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {c.label || c.year}
          </button>
        ))}
      </div>
      {active && (
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${primary}18` }}>
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: accent }}>
                {['S.No.', 'Name', 'Designation', 'Position', 'Email'].map((h) => (
                  <th key={h} className="font-display font-semibold text-type-ui text-white text-left px-5 py-3.5">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {active.members.map((m, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}>
                  <td className="font-body text-type-body-sm text-[#474747] px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}>{m.sno || i + 1}</td>
                  <td className="font-display font-semibold text-type-body-sm px-5 py-3 border-b" style={{ color: primary, borderColor: `${primary}10` }}>{m.name}</td>
                  <td className="font-body text-type-body-sm text-[#474747] px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}>{m.designation}</td>
                  <td className="px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}><RoleBadge role={m.position || m.role} /></td>
                  <td className="px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}>
                    {m.email
                      ? <a href={`mailto:${m.email}`} className="font-body text-type-ui underline" style={{ color: primary }}>{m.email}</a>
                      : <span className="text-[#9CA3AF]">—</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Sticky left-side quick nav ─────────────────────────────────────────────────

const QUICKNAV_HEADER = '#4A1428';

function QuickNavRow({ label, href, active }) {
  const color = active ? accent : '#222222';
  return (
    <Link
      to={href}
      className="flex items-center gap-3 px-5 py-3.5 transition-colors"
      style={{ backgroundColor: active ? `${QUICKNAV_HEADER}0D` : '#fff' }}
    >
      <span
        className="rounded-full flex-shrink-0 transition-all"
        style={{
          width: active ? 10 : 8,
          height: active ? 10 : 8,
          backgroundColor: color,
        }}
      />
      <span
        className="font-display text-type-ui-sm"
        style={{ color, fontWeight: active ? 700 : 600 }}
      >
        {label}
      </span>
    </Link>
  );
}

function StudentActivitiesQuickNav({ activeKey }) {
  return (
    <aside className="w-full lg:w-[280px] lg:flex-shrink-0">
      <div
        className="lg:sticky lg:top-24 rounded-2xl overflow-hidden border shadow-sm"
        style={{ borderColor: '#E5E7EB' }}
      >
        <Link
          to="/student-activities"
          className="block font-display font-bold text-type-body px-5 py-4"
          style={{ backgroundColor: QUICKNAV_HEADER, color: '#fff' }}
        >
          Student Activities
        </Link>
        <div className="flex flex-col divide-y divide-gray-100">
          {COMMITTEES.map((c) => (
            <QuickNavRow key={c.key} label={c.name} href={`/student-activities/${c.key}`} active={c.key === activeKey} />
          ))}
        </div>
      </div>
    </aside>
  );
}

// ── Section: Overview (landing) ────────────────────────────────────────────────

function OverviewSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Student Life" title="Student Activities" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {COMMITTEES.map((c) => (
          <div
            key={c.key}
            className="flex flex-col gap-3 p-6 rounded-2xl border bg-white"
            style={{ borderColor: `${primary}18` }}
          >
            <h3 className="font-display font-bold text-type-body-lg" style={{ color: primary }}>
              {c.name}
            </h3>
            {c.description && c.description[0] && (
              <p className="font-body text-type-body text-[#474747]">
                {c.description[0]}{' '}
                <Link
                  to={`/student-activities/${c.key}`}
                  className="font-display font-semibold whitespace-nowrap"
                  style={{ color: accent }}
                >
                  Read more…
                </Link>
              </p>
            )}
            {!c.description && (
              <Link
                to={`/student-activities/${c.key}`}
                className="font-display font-semibold"
                style={{ color: accent }}
              >
                Read more…
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: individual committee ──────────────────────────────────────────────

function CommitteeSection({ committee: c }) {
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title={c.name} />

      {c.description && c.description.map((para, i) => (
        <p key={i} className="font-body text-type-body text-[#474747]">{para}</p>
      ))}

      {c.objectives && (
        <>
          <SubHeading>Objectives of the Committee</SubHeading>
          {c.objectivesIntro && (
            <p className="font-body text-type-body text-[#474747] mb-3">{c.objectivesIntro}</p>
          )}
          <BulletList items={c.objectives} />
        </>
      )}

      {c.responsibilities && (
        <>
          <SubHeading>Roles &amp; Responsibilities</SubHeading>
          <BulletList items={c.responsibilities} />
        </>
      )}

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={c.yearlyCompositions} />
    </div>
  );
}

// ── Section config ─────────────────────────────────────────────────────────────

const sectionConfig = {
  overview: {
    title: 'Student Activities',
    subtitle: 'Committees and clubs shaping student life at GRCP',
    breadcrumb: ['Student Activities'],
    content: <OverviewSection />,
    quickNav: { activeKey: 'overview' },
  },
  ...Object.fromEntries(
    COMMITTEES.map((c) => [
      c.key,
      {
        title: c.name,
        subtitle: 'Student Activities',
        breadcrumb: ['Student Activities', c.name],
        content: <CommitteeSection committee={c} />,
        quickNav: { activeKey: c.key },
      },
    ])
  ),
};

// ── Page component ─────────────────────────────────────────────────────────────

export default function StudentActivitiesPage() {
  const { section } = useParams();
  const location = useLocation();
  const activeSection = section || 'overview';
  const config = sectionConfig[activeSection] || sectionConfig.overview;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        {config.quickNav ? (
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <StudentActivitiesQuickNav activeKey={config.quickNav.activeKey} />
            <div className="min-w-0 flex-1">{config.content}</div>
          </div>
        ) : (
          <div>{config.content}</div>
        )}
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
