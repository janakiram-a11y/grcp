import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primaryColor = '#2D7A50';
const greenAccent = '#C72235';

// ─── Shared UI ────────────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-semibold text-type-h2-mob pb-3"
        style={{
          color: greenAccent,
          borderBottom: `3px solid ${greenAccent}`,
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
      className="font-display font-semibold text-type-h5 mb-3 mt-8"
      style={{ color: greenAccent }}
    >
      {children}
    </h3>
  );
}

function CommitteeTable({ rows, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
      <table className="w-full text-type-ui">
        <thead>
          <tr style={{ backgroundColor: greenAccent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="font-display text-left px-4 py-3 text-white font-semibold uppercase tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col) => (
                <td key={col.key} className="font-body px-4 py-3 text-[#474747]">
                  {col.key === 'email' ? (
                    <a
                      href={`mailto:${row[col.key]}`}
                      className="hover:underline"
                      style={{ color: primaryColor }}
                    >
                      {row[col.key]}
                    </a>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── B.Pharmacy ───────────────────────────────────────────────────────────────

function BPharmacyContent() {
  const bp = college.programmes.bPharmacy;

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3">
        {[bp.duration, bp.intake, bp.affiliation, bp.approval].map((badge, i) => (
          <span
            key={i}
            className="inline-block px-4 py-1.5 rounded-full text-type-ui-sm font-display font-medium border"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            {badge}
          </span>
        ))}
      </div>

      <section>
        <SectionHeader label="B.Pharmacy" title="Program Overview" />
        <div className="space-y-4 mt-4">
          {bp.overview.map((para, i) => (
            <p key={i} className="font-body text-type-body text-[#474747]">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="Accreditation" title="Approvals & Recognitions" />
        <ul className="mt-4 space-y-2">
          {bp.approvals.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: greenAccent }}
              />
              <span className="font-body text-type-body text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeader label="Careers" title="Scope & Career Opportunities" />
        <p className="mt-4 mb-4 font-body text-type-body text-[#474747]">
          Graduates of B.Pharmacy are equipped for diverse roles across pharmaceutical manufacturing,
          clinical practice, regulatory affairs, and academia. Some of the career paths include:
        </p>
        <ol className="space-y-2 pl-2">
          {bp.careerPaths.map((path, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="font-display font-bold text-type-body-xs w-6 flex-shrink-0"
                style={{ color: greenAccent }}
              >
                {i + 1}.
              </span>
              <span className="font-body text-type-body text-[#474747]">{path}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <SectionHeader label="Committee" title="UG Program Committee (2025-26)" />
        <div className="mt-4">
          <CommitteeTable
            rows={bp.ugCommittee}
            columns={[
              { key: 'sno', label: 'S.No.' },
              { key: 'name', label: 'Name' },
              { key: 'designation', label: 'Designation' },
              { key: 'position', label: 'Position' },
              { key: 'email', label: 'Email' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

// ─── M.Pharmacy Overview ──────────────────────────────────────────────────────

function MPharmacyOverview() {
  const mp = college.programmes.mPharmacy;

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3">
        {[mp.duration, mp.approval].map((badge, i) => (
          <span
            key={i}
            className="inline-block px-4 py-1.5 rounded-full text-type-ui-sm font-display font-medium border"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            {badge}
          </span>
        ))}
      </div>

      <section>
        <SectionHeader label="M.Pharmacy" title="Program Overview" />
        <p className="mt-4 font-body text-type-body text-[#474747] max-w-[780px]">
          {mp.about}
        </p>
      </section>

      <section>
        <SubHeading>Specializations Offered</SubHeading>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {mp.specializations.map((spec, i) => (
            <Link
              key={i}
              to={spec.href}
              className="group rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col"
            >
              <div
                className="px-6 py-5 flex-1"
                style={{ borderTop: `4px solid ${greenAccent}` }}
              >
                <h3
                  className="font-display font-semibold text-type-h6 mb-2 group-hover:underline"
                  style={{ color: greenAccent }}
                >
                  {spec.name}
                </h3>
                <p className="font-body text-type-body-xs text-[#474747] mb-4">
                  {spec.desc}
                </p>
                <div className="flex gap-4 text-type-ui-sm text-[#888] font-display">
                  <span>Est. {spec.established}</span>
                  <span>|</span>
                  <span>Intake: {spec.intake}</span>
                </div>
              </div>
              <div
                className="px-6 py-3 text-type-ui-sm font-display font-semibold"
                style={{ backgroundColor: '#f6faf8', color: primaryColor }}
              >
                View Details →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── M.Pharmacy Specialization ────────────────────────────────────────────────

function MPharmSpec({ specializationSlug }) {
  const mp = college.programmes.mPharmacy;
  const spec = mp.specializations.find(
    (s) => s.href === `/programmes/m-pharmacy/${specializationSlug}`
  );

  if (!spec) {
    return (
      <div className="py-20 text-center text-[#474747] font-body text-type-body">
        Specialization not found.
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3">
        {[`Est. ${spec.established}`, `Intake: ${spec.intake} Students`, mp.approval].map(
          (badge, i) => (
            <span
              key={i}
              className="inline-block px-4 py-1.5 rounded-full text-type-ui-sm font-display font-medium border"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              {badge}
            </span>
          )
        )}
      </div>

      <section>
        <SectionHeader label="M.Pharmacy" title={`${spec.name} – Overview`} />
        <div className="space-y-4 mt-4">
          {spec.overview.map((para, i) => (
            <p key={i} className="font-body text-type-body text-[#474747]">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="Research" title="Research Focus Areas" />
        <ul className="mt-4 space-y-2">
          {spec.researchAreas.map((area, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: greenAccent }}
              />
              <span className="font-body text-type-body text-[#474747]">{area}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeader label="Careers" title="Career Opportunities" />
        <ul className="mt-4 space-y-2">
          {spec.careerOptions.map((career, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              />
              <span className="font-body text-type-body text-[#474747]">{career}</span>
            </li>
          ))}
        </ul>
      </section>

      {spec.achievements && spec.achievements.length > 0 && (
        <section>
          <SectionHeader label="Highlights" title="Achievements" />
          <ul className="mt-4 space-y-2">
            {spec.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: greenAccent }}
                />
                <span className="font-body text-type-body text-[#474747]">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div>
        <Link
          to="/programmes/m-pharmacy"
          className="inline-flex items-center gap-2 font-display text-type-ui font-semibold hover:underline"
          style={{ color: primaryColor }}
        >
          ← Back to M.Pharmacy Overview
        </Link>
      </div>
    </div>
  );
}

// ─── PG Committee ─────────────────────────────────────────────────────────────

function PgCommitteeContent() {
  const { pgCommittee } = college.programmes.mPharmacy;

  return (
    <div className="space-y-8">
      <SectionHeader label="M.Pharmacy" title="PG Program Committee" />
      <CommitteeTable
        rows={pgCommittee}
        columns={[
          { key: 'sno', label: 'Sl.No.' },
          { key: 'name', label: 'Name' },
          { key: 'designation', label: 'Designation' },
          { key: 'position', label: 'Position' },
          { key: 'email', label: 'Email' },
        ]}
      />
      <div>
        <Link
          to="/programmes/m-pharmacy"
          className="inline-flex items-center gap-2 font-display text-type-ui font-semibold hover:underline"
          style={{ color: primaryColor }}
        >
          ← Back to M.Pharmacy Overview
        </Link>
      </div>
    </div>
  );
}

// ─── Route Config ─────────────────────────────────────────────────────────────

const routeConfig = {
  'b-pharmacy': {
    title: 'B.Pharmacy Program',
    subtitle: 'PCI Approved | NBA Accredited | Affiliated to Osmania University',
    breadcrumb: ['Programmes', 'B.Pharmacy'],
  },
  'm-pharmacy': {
    title: 'M.Pharmacy Program',
    subtitle: 'Postgraduate Pharmaceutical Education with Three Specializations',
    breadcrumb: ['Programmes', 'M.Pharmacy'],
  },
  'm-pharmacy/pharmaceutics': {
    title: 'M.Pharmacy – Pharmaceutics',
    subtitle: 'Advanced Drug Delivery & Pharmaceutical Technology',
    breadcrumb: ['Programmes', 'M.Pharmacy', 'Pharmaceutics'],
  },
  'm-pharmacy/pharmaceutical-analysis': {
    title: 'M.Pharmacy – Pharmaceutical Analysis',
    subtitle: 'Analytical Methods, QC, and Validation in Pharmaceutical Sciences',
    breadcrumb: ['Programmes', 'M.Pharmacy', 'Pharmaceutical Analysis'],
  },
  'm-pharmacy/pharmacology': {
    title: 'M.Pharmacy – Pharmacology',
    subtitle: 'Advanced Pharmacology, Molecular Biology & Preclinical Research',
    breadcrumb: ['Programmes', 'M.Pharmacy', 'Pharmacology'],
  },
  'm-pharmacy/pg-committee': {
    title: 'PG Program Committee',
    subtitle: 'M.Pharmacy Program Governance Committee (2025-26)',
    breadcrumb: ['Programmes', 'M.Pharmacy', 'PG Committee'],
  },
  'pg-program-committee': {
    title: 'PG Program Committee',
    subtitle: 'M.Pharmacy Program Governance Committee (2025-2026)',
    breadcrumb: ['Programmes', 'PG Program Committee'],
  },
};

const defaultConfig = {
  title: 'Programmes',
  subtitle: 'Pharmaceutical Education at GRCP',
  breadcrumb: ['Programmes'],
};

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ProgrammesPage() {
  const { programme, specialization } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const routeKey = specialization
    ? `${programme}/${specialization}`
    : programme === 'pg-program-committee'
    ? 'pg-program-committee'
    : programme || '';
  const config = routeConfig[routeKey] || defaultConfig;

  let content = null;
  if (routeKey === 'b-pharmacy') {
    content = <BPharmacyContent />;
  } else if (routeKey === 'm-pharmacy') {
    content = <MPharmacyOverview />;
  } else if (routeKey === 'm-pharmacy/pg-committee' || routeKey === 'pg-program-committee') {
    content = <PgCommitteeContent />;
  } else if (
    programme === 'm-pharmacy' &&
    ['pharmaceutics', 'pharmaceutical-analysis', 'pharmacology'].includes(specialization)
  ) {
    content = <MPharmSpec specializationSlug={specialization} />;
  } else {
    content = (
      <div className="py-20 text-center font-body text-type-body text-[#474747]">
        Programme not found. Please navigate using the menu.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">{content}</div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
