import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const PRIMARY = college.primaryColor; // #2D7A50
const ACCENT  = college.greenAccent;  // #C72235

// ─── Shared helpers ───────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 pb-3"
        style={{
          color: ACCENT,
          borderBottom: `3px solid ${ACCENT}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function StripedTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: `${PRIMARY}18` }}>
      <table className="w-full min-w-[560px]">
        <thead>
          <tr style={{ backgroundColor: ACCENT }}>
            {headers.map((h) => (
              <th
                key={h}
                className="font-display font-semibold text-type-ui-sm text-white text-left px-5 py-3.5"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr
              key={i}
              className="border-t"
              style={{
                borderColor: `${PRIMARY}10`,
                backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA',
              }}
            >
              {cells.map((cell, j) => (
                <td
                  key={j}
                  className="font-display text-type-ui px-5 py-3.5"
                  style={{ color: j === 0 ? PRIMARY : '#474747' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function committeeRows(members) {
  return members.map((m) => [
    m.sno,
    m.name,
    m.designation,
    m.position,
    m.email ? (
      <a key={m.email} href={`mailto:${m.email}`} className="underline" style={{ color: PRIMARY }}>
        {m.email}
      </a>
    ) : (
      <span style={{ color: '#9CA3AF' }}>—</span>
    ),
  ]);
}

function CommitteeYearTabs({ compositions }) {
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
                ? { backgroundColor: PRIMARY, color: '#fff' }
                : { backgroundColor: `${PRIMARY}0D`, color: PRIMARY }
            }
          >
            {c.label || c.year}
          </button>
        ))}
      </div>
      {active && (
        <StripedTable
          headers={['S.No.', 'Name', 'Designation', 'Position', 'Email']}
          rows={committeeRows(active.members)}
        />
      )}
    </div>
  );
}

// ─── Placement Cell Overview ──────────────────────────────────────────────────

function OverviewSection() {
  const { overview, stats, functions: fns, committee, recruiters, careerGuidance } = college.placements;

  return (
    <div className="space-y-14">

      {/* 1. Overview paragraph */}
      <section>
        <SectionHeader label="Placements" title="Placement Cell @ GRCP" />
        <p className="font-body text-type-body text-[#474747] mt-4">
          {overview}
        </p>
      </section>

      {/* 2. Stats row */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center border"
              style={{ borderColor: `${PRIMARY}18`, backgroundColor: '#FAFAFA' }}
            >
              <p
                className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 leading-none mb-1"
                style={{ color: PRIMARY }}
              >
                {s.value}
              </p>
              <p className="font-display text-type-ui-sm text-[#6B7280] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Functions of the Placement Cell */}
      <section>
        <h3
          className="font-display font-semibold text-type-h5 mb-5"
          style={{ color: ACCENT }}
        >
          Functions of the Placement Cell
        </h3>
        <ol className="space-y-3">
          {fns.map((fn, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-type-cap mt-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                {i + 1}
              </span>
              <span className="font-body text-type-body text-[#474747]">{fn}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Placement Committee */}
      <section>
        <h3
          className="font-display font-semibold text-type-h5 mb-5"
          style={{ color: ACCENT }}
        >
          Placement Committee
        </h3>
        <CommitteeYearTabs compositions={committee} />
      </section>

      {/* 4b. Career Guidance Committee */}
      <section>
        <h3
          className="font-display font-semibold text-type-h5 mb-5"
          style={{ color: ACCENT }}
        >
          Career Guidance Committee
        </h3>
        <p className="font-body text-type-body text-[#474747] mb-5">
          {careerGuidance.description}
        </p>
        <h4 className="font-display font-semibold text-type-body mb-3" style={{ color: PRIMARY }}>
          Roles &amp; Responsibilities
        </h4>
        <ul className="space-y-2.5 mb-6">
          {careerGuidance.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="font-body text-type-body text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
        <CommitteeYearTabs compositions={careerGuidance.yearlyCompositions} />
      </section>

      {/* 5. Key Recruiters */}
      <section>
        <h3
          className="font-display font-semibold text-type-h5 mb-5"
          style={{ color: ACCENT }}
        >
          Key Recruiters
        </h3>
        <div className="flex flex-wrap gap-3">
          {recruiters.map((r, i) => (
            <span
              key={i}
              className="font-display text-type-ui-sm font-semibold px-4 py-2 rounded-full border"
              style={{
                color: PRIMARY,
                borderColor: `${PRIMARY}40`,
                backgroundColor: `${PRIMARY}08`,
              }}
            >
              {r.name}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}

// ─── Placement Status ─────────────────────────────────────────────────────────

function PlacementStatusSection() {
  const years = college.placements.years;
  const [activeYear, setActiveYear] = useState(years[0]?.year || '');
  const [activeProgramme, setActiveProgramme] = useState('bPharm');

  const yearData = years.find((y) => y.year === activeYear);
  const isFirstYear = activeYear === years[0]?.year;
  const tableData = isFirstYear
    ? activeProgramme === 'bPharm'
      ? yearData?.bPharm
      : yearData?.mPharm
    : null;

  const programmeLabel = { bPharm: 'B.Pharmacy', mPharm: 'M.Pharmacy' };

  return (
    <div className="space-y-8">
      <SectionHeader label="Placements" title="Placement Status" />

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {years.map((y) => (
          <button
            key={y.year}
            onClick={() => setActiveYear(y.year)}
            className="font-display font-semibold text-type-ui-sm px-5 py-2.5 rounded-lg border transition-colors"
            style={
              activeYear === y.year
                ? { backgroundColor: PRIMARY, color: '#fff', borderColor: PRIMARY }
                : { backgroundColor: '#fff', color: PRIMARY, borderColor: `${PRIMARY}40` }
            }
          >
            {y.year}
          </button>
        ))}
      </div>

      {isFirstYear ? (
        <>
          {/* Programme tabs */}
          <div className="flex gap-2">
            {['bPharm', 'mPharm'].map((prog) => (
              <button
                key={prog}
                onClick={() => setActiveProgramme(prog)}
                className="font-display font-semibold text-type-ui-sm px-5 py-2.5 rounded-lg border transition-colors"
                style={
                  activeProgramme === prog
                    ? { backgroundColor: ACCENT, color: '#fff', borderColor: ACCENT }
                    : { backgroundColor: '#fff', color: ACCENT, borderColor: `${ACCENT}40` }
                }
              >
                {programmeLabel[prog]}
              </button>
            ))}
          </div>

          {/* Data table */}
          {tableData && tableData.length > 0 ? (
            <StripedTable
              headers={['S.No.', 'Name', 'Roll No.', 'Discipline', 'Year of Passing', 'Employer']}
              rows={tableData.map((row) => [
                row.sno,
                row.name,
                row.rollNo,
                row.discipline,
                row.year,
                row.employer,
              ])}
            />
          ) : (
            <div
              className="rounded-2xl p-8 text-center border"
              style={{ borderColor: `${PRIMARY}18`, backgroundColor: '#FAFAFA' }}
            >
              <p className="font-body text-type-body text-[#6B7280]">
                No placement data available for this programme.
              </p>
            </div>
          )}
        </>
      ) : (
        /* Other years placeholder */
        <div
          className="rounded-2xl p-10 text-center border"
          style={{ borderColor: `${PRIMARY}18`, backgroundColor: '#FAFAFA' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: `${PRIMARY}12` }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={PRIMARY} strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-display font-semibold text-type-body-lg mb-2" style={{ color: PRIMARY }}>
            {activeYear} Placement Data
          </p>
          <p className="font-body text-type-ui text-[#6B7280]">
            Data will be available shortly.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Industry Connect: IIPC ───────────────────────────────────────────────────

function IipcSection() {
  const d = college.placements.iipc;
  return (
    <div className="space-y-8">
      <SectionHeader label="Industry Connect" title="Industry – Institute Partnership Cell (IIPC)" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <div>
        <h3 className="font-display font-semibold text-type-h5 mb-4" style={{ color: ACCENT }}>
          Roles and Responsibilities of IIPC @ GRCP
        </h3>
        <ul className="space-y-2.5">
          {d.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="font-body text-type-body text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display font-semibold text-type-h5 mb-5" style={{ color: ACCENT }}>
          Committee Composition
        </h3>
        <CommitteeYearTabs compositions={d.yearlyCompositions} />
      </div>
    </div>
  );
}

// ─── Industry Connect: Student Training & Internship Cell ────────────────────

function StudentTrainingInternshipSection() {
  const d = college.placements.studentTrainingInternshipCell;
  return (
    <div className="space-y-8">
      <SectionHeader label="Industry Connect" title="Student Training & Internship Cell" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <div>
        <h3 className="font-display font-semibold text-type-h5 mb-4" style={{ color: ACCENT }}>
          Role and Responsibilities of the Student Training and Internship Committee
        </h3>
        <ol className="space-y-2.5">
          {d.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-type-cap mt-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                {i + 1}
              </span>
              <span className="font-body text-type-body text-[#474747]">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="font-display font-semibold text-type-h5 mb-5" style={{ color: ACCENT }}>
          Committee Composition
        </h3>
        <CommitteeYearTabs compositions={d.yearlyCompositions} />
      </div>
    </div>
  );
}

// ─── Page config ──────────────────────────────────────────────────────────────

const sectionConfig = {
  'placement-cell': {
    title: 'Placement Cell @ GRCP',
    subtitle: 'Bridging pharmaceutical education and professional careers since inception',
    breadcrumb: ['Placements', 'Placement Cell @ GRCP'],
  },
  'placement-status': {
    title: 'Placement Status',
    subtitle: 'Year-wise placement records for B.Pharmacy and M.Pharmacy graduates',
    breadcrumb: ['Placements', 'Placement Status'],
  },
  iipc: {
    title: 'Industry – Institute Partnership Cell (IIPC)',
    subtitle: 'Bridging industry and institute for GRCP students',
    breadcrumb: ['Placements', 'Industry Connect', 'IIPC'],
  },
  'student-training-internship-cell': {
    title: 'Student Training & Internship Cell',
    subtitle: 'Planning, coordinating, and monitoring internship activities for pharmacy students',
    breadcrumb: ['Placements', 'Industry Connect', 'Student Training & Internship Cell'],
  },
};

// ─── Default export ───────────────────────────────────────────────────────────

export default function PlacementsPage() {
  const { section = 'placement-cell' } = useParams();
  const activeSection = section;
  const config = sectionConfig[activeSection] || sectionConfig['placement-cell'];
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const content =
    activeSection === 'placement-status' ? <PlacementStatusSection />
    : activeSection === 'iipc' ? <IipcSection />
    : activeSection === 'student-training-internship-cell' ? <StudentTrainingInternshipSection />
    : <OverviewSection />;

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
        <div>{content}</div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
