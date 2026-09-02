import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import { patents2024, patents2021_2023, patents2025 } from '../data/researchData';

const primary = college.primaryColor;
const accent = college.greenAccent;

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

function InfoCallout({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-3 mt-8"
      style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
    >
      <svg
        className="w-5 h-5 flex-shrink-0 mt-0.5"
        style={{ color: accent }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <p className="font-body text-type-body text-[#4B5563]">{children}</p>
    </div>
  );
}

function DataTable({ rows, columns, totalRow }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-display font-semibold text-type-ui-sm text-white px-5 py-3.5 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-body text-type-body px-5 py-3.5 align-top"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {row[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
          {totalRow && (
            <tr style={{ backgroundColor: `${primary}0D` }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-body font-semibold text-type-body px-5 py-3.5"
                  style={{ color: primary }}
                >
                  {totalRow[col.key] ?? ''}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }) {
  const s = status?.toLowerCase();
  const style =
    s === 'ongoing' || s === 'granted'
      ? { bg: '#F0FDF4', text: '#15803D' }
      : s === 'applied' || s === 'published'
      ? { bg: '#EFF6FF', text: '#1D4ED8' }
      : { bg: '#F3F4F6', text: '#6B7280' };
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full font-display font-semibold text-type-cap tracking-wide"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {status}
    </span>
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
  } else if (lower.includes('co-ordinator') || lower.includes('coordinator') || lower.includes('convener') || lower.includes('secretary')) {
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

function YearTabs({ compositions, contactHeader }) {
  const [activeYear, setActiveYear] = useState(compositions[0]?.year);
  const active = compositions.find(c => c.year === activeYear) ?? compositions[0];
  const contactCol = active?.contactHeader || contactHeader;
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5">
        {compositions.map(c => (
          <button
            key={c.year}
            onClick={() => setActiveYear(c.year)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={activeYear === c.year
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
                {['S.No.', 'Name', 'Designation', 'Position', contactCol || 'Email'].map((h) => (
                  <th key={h} className="font-display font-semibold text-type-ui text-white text-left px-5 py-3.5">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {active.members.map((m, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}>
                  <td className="font-body text-type-body text-[#474747] px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}>{m.sno || i + 1}</td>
                  <td className="font-display font-semibold text-type-body px-5 py-3 border-b" style={{ color: primary, borderColor: `${primary}10` }}>{m.name}</td>
                  <td className="font-body text-type-body text-[#474747] px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}>{m.designation}</td>
                  <td className="px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}><RoleBadge role={m.position || m.role} /></td>
                  <td className="px-5 py-3 border-b" style={{ borderColor: `${primary}10` }}>
                    {(m.email || m.contact || m.phone)
                      ? <span className="font-body text-type-body text-[#374151]">{m.email || m.contact || m.phone}</span>
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

// ── Sticky right-side quick nav ────────────────────────────────────────────────

const RESEARCH_BRANCH_LINKS = [
  { key: 'arc',              label: 'Academic Research Committee (ARC)',      href: '/research/arc' },
  { key: 'iaec',             label: 'Institutional Animal Ethics Committee',  href: '/research/iaec' },
  { key: 'bio-medical-waste',label: 'Bio-Medical Waste Management Committee',href: '/research/bio-medical-waste' },
];

const INNOVATION_BRANCH_LINKS = [
  { key: 'iic',    label: "Institution's Innovation Council (IIC)", href: '/research/iic' },
  { key: 'e-cell', label: 'Entrepreneurship Cell (E-Cell)',          href: '/research/e-cell' },
];

const TOP_LEVEL_LINKS = [
  { key: 'research',   label: 'Research@GRCP',            href: '/research/research-at-grcp' },
  { key: 'innovation', label: 'Innovation/E-Cell@GRCP',    href: '/research/innovation-ecell' },
];

const QUICKNAV_HEADER = '#4A1428';

function QuickNavRow({ label, href, active, variant = 'sub' }) {
  const isTop = variant === 'top';
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
          width: active || isTop ? 10 : 8,
          height: active || isTop ? 10 : 8,
          backgroundColor: color,
        }}
      />
      <span
        className="font-display text-type-ui-sm"
        style={{ color, fontWeight: active || isTop ? 700 : 600 }}
      >
        {label}
      </span>
    </Link>
  );
}

function ResearchQuickNav({ branch, activeKey }) {
  const isResearch = branch !== 'innovation';
  const currentTop = isResearch ? TOP_LEVEL_LINKS[0] : TOP_LEVEL_LINKS[1];
  const otherTop = isResearch ? TOP_LEVEL_LINKS[1] : TOP_LEVEL_LINKS[0];
  const branchLinks = branch === 'innovation' ? INNOVATION_BRANCH_LINKS : RESEARCH_BRANCH_LINKS;

  return (
    <aside className="w-full lg:w-[280px] lg:flex-shrink-0">
      <div
        className="lg:sticky lg:top-24 rounded-2xl overflow-hidden border shadow-sm"
        style={{ borderColor: '#E5E7EB' }}
      >
        <Link
          to={currentTop.href}
          className="block font-display font-bold text-type-body px-5 py-4"
          style={{ backgroundColor: QUICKNAV_HEADER, color: '#fff' }}
        >
          {currentTop.label}
        </Link>
        <div className="flex flex-col divide-y divide-gray-100">
          <QuickNavRow label={otherTop.label} href={otherTop.href} active={false} variant="top" />
          {branchLinks.map((item) => (
            <QuickNavRow key={item.key} label={item.label} href={item.href} active={item.key === activeKey} variant="sub" />
          ))}
        </div>
      </div>
    </aside>
  );
}

// ── Section: Research @ GRCP (Overview) ───────────────────────────────────────

function OverviewSection() {
  const depts = college.research.depts;
  const [activeTab, setActiveTab] = useState(depts[0]?.id ?? '');
  const activeDept = depts.find((d) => d.id === activeTab) ?? depts[0];

  return (
    <div className="space-y-12">
      {/* Overview */}
      <section>
        <SectionHeader label="Research at GRCP" title="Research @ GRCP" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          {college.research.overview}
        </p>
      </section>

      {/* Stats strip */}
      <section>
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: primary }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {college.research.highlights.map((h, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-6 py-10"
                style={{
                  borderRight: i < college.research.highlights.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                }}
              >
                <span className="font-display font-bold text-type-h2 leading-none text-white">{h.count}</span>
                <span className="font-display text-type-ui-sm text-white/70 uppercase tracking-[0.12em] mt-2">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dept tabs */}
      <section>
        <SubHeading>Research Areas by Department</SubHeading>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {depts.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
              style={
                activeTab === dept.id
                  ? { backgroundColor: primary, color: '#fff' }
                  : { backgroundColor: `${primary}0D`, color: primary }
              }
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Dept content */}
        {activeDept && (
          <div
            className="rounded-xl p-6 space-y-5"
            style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
          >
            <h4
              className="font-display font-semibold text-type-body"
              style={{ color: accent }}
            >
              {activeDept.label}
            </h4>

            {/* Intro paragraph */}
            {activeDept.intro && (
              <p className="font-body text-type-body text-[#374151]">
                {activeDept.intro}
              </p>
            )}

            {/* Research areas */}
            {activeDept.researchAreas?.length > 0 && (
              <div>
                <p className="font-display font-semibold text-type-ui-sm uppercase tracking-wide mb-3" style={{ color: accent }}>
                  Research Areas
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeDept.researchAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0 mt-[9px]"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="font-body text-type-body text-[#374151]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dept images */}
            {activeDept.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {activeDept.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${activeDept.label} research ${i + 1}`}
                    className="rounded-lg object-cover object-top w-full h-56"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      <InfoCallout>
        Faculty and postgraduate students interested in collaborative research may contact the Research
        Cell through the Principal's office at <strong>{college.phone}</strong>.
      </InfoCallout>
    </div>
  );
}

// ── Section: Consultancy ──────────────────────────────────────────────────────

function ConsultancySection() {
  const CONSULTANCY_YEARS = ['2024-25', '2023-24', '2022-23', '2021-22', '2020-21'];
  const allYears = college.research.consultancyYears.filter(
    (yr) => CONSULTANCY_YEARS.includes(yr.year)
  );
  const [activeConsultancyYear, setActiveConsultancyYear] = useState('2024-25');
  const activeYearData = allYears.find((yr) => yr.year === activeConsultancyYear) ?? null;

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Funded Research" title="Sponsored Projects / Consultancy" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          GRCP faculty have secured research grants from government and industry funding bodies for
          sponsored / consultancy projects in pharmaceutical sciences. These projects strengthen the
          research culture and contribute to societal healthcare needs.
        </p>
      </section>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {CONSULTANCY_YEARS.map((yr) => (
          <button
            key={yr}
            onClick={() => setActiveConsultancyYear(yr)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activeConsultancyYear === yr
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {yr}
          </button>
        ))}
      </div>

      {activeYearData ? (
        <section>
          <SubHeading>{activeYearData.year}</SubHeading>
          <DataTable
            rows={activeYearData.projects}
            columns={[
              { key: 'title',         label: 'Project Title', accent: true },
              { key: 'pi',            label: 'Principal Investigator' },
              { key: 'duration',      label: 'Duration' },
              { key: 'fundingAgency', label: 'Funding Agency' },
              { key: 'amount',        label: 'Amount' },
            ]}
          />
          {activeYearData.grandTotal && (
            <p className="font-display font-semibold text-type-body mt-3 text-right" style={{ color: primary }}>
              Grand Total: {activeYearData.grandTotal}
            </p>
          )}
        </section>
      ) : (
        <div
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
        >
          <p className="font-body text-type-body text-[#6B7280]">
            Data for <strong>{activeConsultancyYear}</strong> will be available shortly.
          </p>
        </div>
      )}

      <InfoCallout>
        Faculty interested in applying for research grants (DST, SERB, ICMR, AICTE, etc.) may contact the
        Research Cell for guidance on proposal preparation and submission.
      </InfoCallout>
    </div>
  );
}

// ── Section: PhD Guideships ───────────────────────────────────────────────────

function PhdGuideships() {
  const guides = college.research.phdGuides;
  const scholars = college.research.phdScholars;

  // Flatten universities array to a comma-separated string for display
  const guideRows = guides.map((g) => ({
    sno: g.sno,
    name: g.name,
    universities: Array.isArray(g.universities) ? g.universities.join(', ') : g.universities,
  }));

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Doctoral Research" title="Ph.D Guideships" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          GRCP faculty recognised as Ph.D guides at multiple universities actively supervise doctoral
          scholars across departments. Below are the details of recognised guides and the Ph.D scholar
          statistics.
        </p>
      </section>

      <section>
        <SubHeading>Faculty with Ph.D Guideships</SubHeading>
        <DataTable
          rows={guideRows}
          columns={[
            { key: 'sno',          label: 'S.No.' },
            { key: 'name',         label: 'Name', accent: true },
            { key: 'universities', label: 'University / Universities' },
          ]}
        />
      </section>

      <section>
        <SubHeading>Ph.D Scholars Statistics</SubHeading>
        <DataTable
          rows={scholars}
          columns={[
            { key: 'guide',     label: 'Guide Name', accent: true },
            { key: 'awarded',   label: 'Awarded' },
            { key: 'submitted', label: 'Thesis Submitted' },
            { key: 'ongoing',   label: 'Ongoing' },
            { key: 'total',     label: 'Total' },
          ]}
        />
      </section>

      <InfoCallout>
        Scholars interested in pursuing Ph.D research under GRCP faculty may contact the Research Cell.
        Eligibility is as per the respective university Ph.D regulations.
      </InfoCallout>
    </div>
  );
}

// ── Section: Publications ─────────────────────────────────────────────────────

function PublicationsSection() {
  const pubYears = college.research.publicationYears;
  const [activeYear, setActiveYear] = useState(pubYears[0]?.year ?? '');
  const activeData = pubYears.find((y) => y.year === activeYear) ?? pubYears[0];
  const hasData = activeData?.stats?.total != null;

  const totalRow = hasData
    ? {
        sno: '',
        name: 'Total',
        scopus: activeData.stats.scopus,
        wos: activeData.stats.wos,
        ugc: activeData.stats.ugc,
        nonIndexed: activeData.stats.nonIndexed,
        total: activeData.stats.total,
      }
    : null;

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Research Output" title="Publications" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          GRCP faculty and postgraduate students publish research in reputed national and international
          pharmaceutical journals. Select an academic year below to view publication statistics.
        </p>
      </section>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {pubYears.map((py) => (
          <button
            key={py.year}
            onClick={() => setActiveYear(py.year)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activeYear === py.year
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {py.year}
          </button>
        ))}
      </div>

      {hasData ? (
        <section>
          {/* Stats summary chips */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Total',       value: activeData.stats.total },
              { label: 'Scopus',      value: activeData.stats.scopus },
              { label: 'Web of Sci.', value: activeData.stats.wos },
              { label: 'UGC',         value: activeData.stats.ugc },
              { label: 'Non-Indexed', value: activeData.stats.nonIndexed },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}14` }}
              >
                <span className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 block" style={{ color: primary }}>{s.value}</span>
                <span className="font-display text-type-cap uppercase tracking-wide" style={{ color: accent }}>{s.label}</span>
              </div>
            ))}
          </div>

          <SubHeading>Faculty-wise Publications {activeYear}</SubHeading>
          <DataTable
            rows={activeData.faculty}
            columns={[
              { key: 'sno',        label: 'S.No.' },
              { key: 'name',       label: 'Faculty', accent: true },
              { key: 'scopus',     label: 'Scopus' },
              { key: 'wos',        label: 'Web of Science' },
              { key: 'ugc',        label: 'UGC' },
              { key: 'nonIndexed', label: 'Non-Indexed' },
              { key: 'total',      label: 'Total' },
            ]}
            totalRow={totalRow}
          />
        </section>
      ) : (
        <div
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
        >
          <p className="font-body text-type-body text-[#6B7280]">
            Data for <strong>{activeYear}</strong> will be available shortly.
          </p>
        </div>
      )}

      <InfoCallout>
        A complete list of publications with DOI links is available in the GRCP IQAC report and upon
        request from the Research Cell. Faculty are encouraged to publish in SCOPUS / WoS-indexed journals.
      </InfoCallout>
    </div>
  );
}

// ── Section: Patents ──────────────────────────────────────────────────────────

const PATENT_COLS = [
  { key: 'sno',        label: 'S.No.' },
  { key: 'appNo',      label: 'Application No.' },
  { key: 'title',      label: 'Title', accent: true },
  { key: 'inventors',  label: 'Inventors' },
  { key: 'date',       label: 'Date' },
  { key: 'status',     label: 'Status' },
  { key: 'proof',      label: 'Attachment' },
];

function PatentTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {PATENT_COLS.map((col) => (
              <th
                key={col.key}
                className="text-left font-display font-semibold text-type-ui-sm text-white px-4 py-3.5 tracking-wide"
                style={col.key === 'title' ? { minWidth: 260 } : col.key === 'inventors' ? { minWidth: 180 } : {}}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {PATENT_COLS.map((col) => (
                <td
                  key={col.key}
                  className="font-body text-type-body px-4 py-3.5 align-top"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {col.key === 'status' ? <StatusBadge status={row[col.key]} />
                    : col.key === 'proof' ? (
                      row.proof
                        ? <a href={row.proof} target="_blank" rel="noopener noreferrer" className="font-display font-semibold hover:underline" style={{ color: primary }}>View ↗</a>
                        : <span className="text-[#9CA3AF]">—</span>
                    )
                    : (row[col.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PatentSummaryBadge({ label }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mt-4"
      style={{ backgroundColor: `${accent}14`, border: `1px solid ${accent}40` }}
    >
      <svg className="w-4 h-4 flex-shrink-0" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="font-display font-semibold text-type-ui-sm" style={{ color: primary }}>{label}</span>
    </div>
  );
}

function PatentsSection() {
  const patentTabs = [
    {
      id: '2025',
      label: '2025',
      rows: patents2025,
      summary: `Total: ${patents2025.length} patents in 2025 (${patents2025.filter(p => p.status === 'Granted').length} Granted + ${patents2025.filter(p => p.status === 'Published').length} Published)`,
      count: `${patents2025.length} patents`,
    },
    {
      id: '2024',
      label: '2024',
      rows: patents2024,
      summary: `Total: ${patents2024.length} patents in 2024 (${patents2024.filter(p => p.status === 'Granted').length} Granted + ${patents2024.filter(p => p.status === 'Published').length} Published)`,
      count: `${patents2024.length} patents`,
    },
    {
      id: '2022-23',
      label: '2022-23',
      rows: patents2021_2023,
      summary: `Total: ${patents2021_2023.length} patents in 2022-23 (${patents2021_2023.filter(p => p.status === 'Granted').length} Granted + ${patents2021_2023.filter(p => p.status === 'Published').length} Published)`,
      count: `${patents2021_2023.length} patents`,
    },
  ];
  const [activePatentTab, setActivePatentTab] = useState('2025');
  const activePatentData = patentTabs.find((t) => t.id === activePatentTab) ?? patentTabs[0];

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Intellectual Property" title="Patents" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          GRCP faculty and researchers have filed patents for novel pharmaceutical inventions, contributing
          to the intellectual property portfolio of the institution.
        </p>
      </section>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {patentTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePatentTab(tab.id)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activePatentTab === tab.id
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section>
        <SubHeading>
          Patents {activePatentData.label}{' '}
          <span className="font-body font-normal text-type-body text-[#6B7280] ml-2">({activePatentData.count})</span>
        </SubHeading>
        <PatentTable rows={activePatentData.rows} />
        <PatentSummaryBadge label={activePatentData.summary} />
      </section>

      <InfoCallout>
        GRCP encourages faculty to file patents for research outcomes. The institution provides support
        for IP filing through the administration office in coordination with the affiliated university.
      </InfoCallout>
    </div>
  );
}

// ── Section: Academic Research Committee (ARC) ────────────────────────────────

function ArcSection() {
  const d = college.research.arc;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Academic Research Committee (ARC)" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Roles &amp; Responsibilities of Academic Research Committee (ARC)</SubHeading>
      <BulletList items={d.responsibilities} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Institutional Animal Ethics Committee (IAEC) ─────────────────────

function ResearchIaecSection() {
  const d = college.administration.iaec;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Institutional Animal Ethics Committee (IAEC)" />
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-display font-semibold text-type-ui-sm" style={{ backgroundColor: `${primary}10`, color: primary }}>
        CPCSEA Registration: {d.cpcsea}
      </div>
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Roles &amp; Responsibilities</SubHeading>
      <BulletList items={d.responsibilities} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Bio-Medical Waste Management Committee ───────────────────────────

function BioMedicalWasteSection() {
  const d = college.research.bioMedicalWaste;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Bio-Medical Waste Management Committee" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Innovation/E-Cell @ GRCP (overview) ───────────────────────────────

function InnovationEcellOverview() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Innovation & Entrepreneurship" title="Innovation/E-Cell @ GRCP" />
      <p className="font-body text-type-body text-[#474747]">
        GRCP fosters a culture of innovation and entrepreneurship through two dedicated bodies —
        the Institution's Innovation Council (IIC), which drives innovation activities under the
        Ministry of Education's Innovation Cell, and the Entrepreneurship Cell (E-Cell), which supports
        student-led startup ideas. Use the links on the right to explore each.
      </p>
    </div>
  );
}

// ── Section: Institution's Innovation Council (IIC) ────────────────────────────

function ResearchIicSection() {
  const d = college.administration.iic;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Institution's Innovation Council (IIC)" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Core Roles &amp; Responsibilities</SubHeading>
      <BulletList items={d.objectives} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Entrepreneurship Cell (E-Cell) ────────────────────────────────────

function ECellSection() {
  const d = college.research.eCell;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Entrepreneurship Cell (E-Cell)" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Roles and Responsibilities of E-Cell @ GRCP</SubHeading>
      <BulletList items={d.responsibilities} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Data Pooling Center ───────────────────────────────────────────────

function DataPoolingCenterSection() {
  const d = college.research.dataPoolingCenter;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Data Pooling Center" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Roles &amp; Responsibilities</SubHeading>
      <BulletList items={d.responsibilities} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section config ─────────────────────────────────────────────────────────────

const sectionConfig = {
  'research-at-grcp': {
    title: 'Research @ GRCP',
    subtitle: 'Advancing pharmaceutical sciences through collaborative and applied research',
    breadcrumb: ['Research', 'Research @ GRCP'],
    content: <OverviewSection />,
    quickNav: { branch: 'research', activeKey: 'research-at-grcp' },
  },
  arc: {
    title: 'Academic Research Committee (ARC)',
    subtitle: 'Overseeing and supporting research activities at GRCP',
    breadcrumb: ['Research', 'Research @ GRCP', 'Academic Research Committee'],
    content: <ArcSection />,
    quickNav: { branch: 'research', activeKey: 'arc' },
  },
  iaec: {
    title: 'Institutional Animal Ethics Committee (IAEC)',
    subtitle: 'Ensuring humane and ethical use of animals in research — CPCSEA compliant',
    breadcrumb: ['Research', 'Research @ GRCP', 'IAEC'],
    content: <ResearchIaecSection />,
    quickNav: { branch: 'research', activeKey: 'iaec' },
  },
  'bio-medical-waste': {
    title: 'Bio-Medical Waste Management Committee',
    subtitle: 'Safe collection, segregation, and disposal of bio-medical waste at GRCP',
    breadcrumb: ['Research', 'Research @ GRCP', 'Bio-Medical Waste Management Committee'],
    content: <BioMedicalWasteSection />,
    quickNav: { branch: 'research', activeKey: 'bio-medical-waste' },
  },
  'innovation-ecell': {
    title: 'Innovation/E-Cell @ GRCP',
    subtitle: "Fostering a culture of innovation and entrepreneurship at GRCP",
    breadcrumb: ['Research', 'Innovation/E-Cell @ GRCP'],
    content: <InnovationEcellOverview />,
    quickNav: { branch: 'innovation', activeKey: 'innovation-ecell' },
  },
  iic: {
    title: "Institution's Innovation Council (IIC)",
    subtitle: 'Fostering a culture of innovation and entrepreneurship at GRCP',
    breadcrumb: ['Research', 'Innovation/E-Cell @ GRCP', "Institution's Innovation Council"],
    content: <ResearchIicSection />,
    quickNav: { branch: 'innovation', activeKey: 'iic' },
  },
  'e-cell': {
    title: 'Entrepreneurship Cell (E-Cell)',
    subtitle: 'Fostering innovation, creativity, and entrepreneurial thinking at GRCP',
    breadcrumb: ['Research', 'Innovation/E-Cell @ GRCP', 'Entrepreneurship Cell'],
    content: <ECellSection />,
    quickNav: { branch: 'innovation', activeKey: 'e-cell' },
  },
  'data-pooling-center': {
    title: 'Data Pooling Center',
    subtitle: 'Centralizing institutional academic, research, and administrative data',
    breadcrumb: ['Research', 'Data Pooling Center'],
    content: <DataPoolingCenterSection />,
  },
  'phd-guideships': {
    title: 'Ph.D Guideships',
    subtitle: 'Faculty-led doctoral research across multiple universities',
    breadcrumb: ['Research', 'Ph.D Guideships'],
    content: <PhdGuideships />,
  },
  publications: {
    title: 'Publications',
    subtitle: 'Research publications in indexed and peer-reviewed journals',
    breadcrumb: ['Research', 'Publications'],
    content: <PublicationsSection />,
  },
  patents: {
    title: 'Patents',
    subtitle: 'Intellectual property filed by GRCP faculty and researchers',
    breadcrumb: ['Research', 'Patents'],
    content: <PatentsSection />,
  },
  consultancy: {
    title: 'Sponsored Projects / Consultancy',
    subtitle: 'Government and industry funded research projects at GRCP',
    breadcrumb: ['Research', 'Sponsored Projects / Consultancy'],
    content: <ConsultancySection />,
  },
};

// ── Page component ─────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const { section } = useParams();
  const location = useLocation();
  const activeSection = section || 'research-at-grcp';
  const config = sectionConfig[activeSection] || sectionConfig['research-at-grcp'];

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
            <ResearchQuickNav branch={config.quickNav.branch} activeKey={config.quickNav.activeKey} />
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
