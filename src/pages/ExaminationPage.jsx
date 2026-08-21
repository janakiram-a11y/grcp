import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-bold text-type-h2-mob pb-3"
        style={{
          color: college.greenAccent,
          borderBottom: `3px solid ${college.greenAccent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// ─── Committee Table ──────────────────────────────────────────────────────────

function CommitteeTable({ members }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full" style={{ borderCollapse: 'collapse', border: `1px solid ${college.primaryColor}20` }}>
        <thead>
          <tr style={{ backgroundColor: college.greenAccent }}>
            {['S.No.', 'Name', 'Designation', 'Position', 'Email'].map((h, i) => (
              <th
                key={h}
                className="font-display font-semibold text-type-ui-sm text-white px-4 py-3"
                style={{ textAlign: i === 0 ? 'center' : 'left', whiteSpace: 'nowrap', border: `1px solid ${college.primaryColor}30` }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={m.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              <td className="font-body text-type-body-xs text-[#474747] px-4 py-3" style={{ textAlign: 'center', border: `1px solid ${college.primaryColor}10` }}>
                {m.sno}
              </td>
              <td className="font-display font-semibold text-type-body-xs px-4 py-3" style={{ color: college.primaryColor, border: `1px solid ${college.primaryColor}10` }}>
                {m.name}
              </td>
              <td className="font-body text-type-body-xs text-[#474747] px-4 py-3" style={{ border: `1px solid ${college.primaryColor}10` }}>
                {m.designation}
              </td>
              <td className="px-4 py-3" style={{ border: `1px solid ${college.primaryColor}10` }}>
                <span
                  className="font-display font-semibold text-type-cap px-2.5 py-1 rounded"
                  style={{
                    backgroundColor:
                      m.position === 'Chairperson' ? college.primaryColor
                      : m.position.startsWith('Co-ordinator') ? '#002a6f'
                      : `${college.primaryColor}15`,
                    color:
                      m.position === 'Member' ? college.primaryColor : '#fff',
                  }}
                >
                  {m.position}
                </span>
              </td>
              <td className="font-body text-type-body-xs px-4 py-3" style={{ border: `1px solid ${college.primaryColor}10` }}>
                <a href={`mailto:${m.email}`} className="underline" style={{ color: college.primaryColor }}>
                  {m.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Doc Link List ────────────────────────────────────────────────────────────

function DocLinkList({ items, buttonLabel = 'View / Download' }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-xl border px-5 py-4 gap-4"
          style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
        >
          <div className="flex items-center gap-4 min-w-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: college.primaryColor }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#fff" strokeWidth="1.8">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display font-semibold text-type-body text-[#383838]">{item.label}</span>
          </div>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-semibold text-type-ui-sm text-white px-5 py-2 rounded flex-shrink-0 transition-opacity hover:opacity-80"
            style={{ backgroundColor: college.primaryColor, whiteSpace: 'nowrap' }}
          >
            {buttonLabel}
          </a>
        </div>
      ))}
    </div>
  );
}

// ─── Section Heading Pill ─────────────────────────────────────────────────────

function SectionPill({ title }) {
  return (
    <div className="mb-3">
      <span
        className="font-display font-bold text-type-body text-white px-4 py-1.5 rounded inline-block"
        style={{ backgroundColor: college.primaryColor }}
      >
        {title}
      </span>
      <hr style={{ borderColor: `${college.primaryColor}20`, marginTop: '10px' }} />
    </div>
  );
}

// ─── Examination Branch Section ───────────────────────────────────────────────

function ExaminationBranchSection() {
  const { functions: fns, contact, ugSessionalCommittee, pgSessionalCommittee, ouExamCell } = college.examination;

  return (
    <div className="space-y-10">
      <SectionHeader label="Examination" title="Examination Branch @ GRCP" />

      {/* Functions list */}
      <section>
        <h3 className="font-display font-semibold text-type-h6 mb-4" style={{ color: college.primaryColor }}>
          Functions of the Examination Branch
        </h3>
        <ol className="space-y-2 max-w-[760px]">
          {fns.map((fn, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-type-cap text-white mt-0.5"
                style={{ backgroundColor: college.greenAccent }}
              >
                {i + 1}
              </span>
              <span className="font-body text-type-body text-[#474747]">{fn}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section>
        <h3 className="font-display font-semibold text-type-h6 mb-4" style={{ color: college.primaryColor }}>
          Contact
        </h3>
        <div
          className="rounded-xl px-6 py-4 flex flex-wrap gap-4 max-w-[760px] text-type-body-xs font-body font-medium text-[#383838]"
          style={{ backgroundColor: '#f8f9fa', border: `1px solid ${college.primaryColor}20`, borderLeft: `4px solid ${college.primaryColor}` }}
        >
          <span>
            <strong style={{ color: college.primaryColor }}>Email:</strong>{' '}
            <a href={`mailto:${contact.email}`} className="underline" style={{ color: college.primaryColor }}>{contact.email}</a>
          </span>
          <span style={{ color: '#dee2e6' }}>|</span>
          <span><strong style={{ color: college.primaryColor }}>Phone:</strong> {contact.phone}</span>
          <span style={{ color: '#dee2e6' }}>|</span>
          <span><strong style={{ color: college.primaryColor }}>UG Coordinators:</strong> Mrs. Ch. Soujanya, Mrs. K. Lalitha</span>
          <span style={{ color: '#dee2e6' }}>|</span>
          <span><strong style={{ color: college.primaryColor }}>PG Coordinator:</strong> Dr. M. Lakshmi Madhuri</span>
        </div>
      </section>

      {/* UG Committee */}
      <section>
        <h3 className="font-display font-semibold text-type-h6 mb-1" style={{ color: college.primaryColor }}>
          UG – Sessional Exam Committee (2025–2026)
        </h3>
        <hr className="mb-4" style={{ borderColor: `${college.primaryColor}20` }} />
        <CommitteeTable members={ugSessionalCommittee} />
      </section>

      {/* PG Committee */}
      <section>
        <h3 className="font-display font-semibold text-type-h6 mb-1" style={{ color: college.primaryColor }}>
          PG – Sessional Exam Committee (2025–2026)
        </h3>
        <hr className="mb-4" style={{ borderColor: `${college.primaryColor}20` }} />
        <CommitteeTable members={pgSessionalCommittee} />
      </section>

      {/* OU Exam Cell */}
      <section>
        <h3 className="font-display font-semibold text-type-h6 mb-1" style={{ color: college.primaryColor }}>
          Osmania University Examination Cell (2025–2026)
        </h3>
        <hr className="mb-4" style={{ borderColor: `${college.primaryColor}20` }} />
        <CommitteeTable members={ouExamCell} />
      </section>
    </div>
  );
}

// ─── Sessional Timetable Section ──────────────────────────────────────────────

function SessionalTimetableSection() {
  const sections = college.examination.sessionalTimetables;
  return (
    <div className="space-y-8">
      <SectionHeader label="Internal Exams" title="Sessional Time Table" />
      {sections.map((section, i) => (
        <div key={i} className="mb-8">
          <SectionPill title={section.heading} />
          <div className="mt-4">
            <DocLinkList items={section.items} buttonLabel="View / Download" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── OU Timetables Section ────────────────────────────────────────────────────

function OuTimetablesSection() {
  const sections = college.examination.ouTimetables;
  return (
    <div className="space-y-8">
      <SectionHeader label="Osmania University" title="OU Time Tables" />
      {sections.map((section, i) => (
        <div key={i} className="mb-8">
          <SectionPill title={section.heading} />
          <div className="mt-4">
            <DocLinkList items={section.items} buttonLabel="View / Download" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── OU Notifications Section ─────────────────────────────────────────────────

const NOTIF_TABS = [
  { id: 'bPharm', label: 'B.Pharmacy' },
  { id: 'mPharm', label: 'M.Pharmacy' },
];

function OuNotificationsSection() {
  const [active, setActive] = useState('bPharm');
  const notifications = college.examination.ouNotifications;

  return (
    <div className="space-y-6">
      <SectionHeader label="Updates" title="OU Notifications" />
      <div style={{ display: 'flex', gap: '4px', borderBottom: `2px solid ${college.primaryColor}` }}>
        {NOTIF_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="font-display font-semibold text-type-body-xs px-6 py-2 rounded-t"
            style={{
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
              backgroundColor: active === tab.id ? college.primaryColor : '#f8f9fa',
              color: active === tab.id ? '#fff' : '#383838',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="rounded-b-xl p-6"
        style={{ border: `1px solid ${college.primaryColor}18`, borderTop: 'none', backgroundColor: '#fff' }}
      >
        <DocLinkList items={notifications[active]} buttonLabel="Download" />
      </div>
    </div>
  );
}

// ─── Results Section ──────────────────────────────────────────────────────────

const RESULTS_TABS = [
  { id: 'bPharm', label: 'B.Pharmacy' },
  { id: 'mPharm', label: 'M.Pharmacy' },
];

function ResultsSection() {
  const [active, setActive] = useState('bPharm');
  const results = college.examination.results;

  return (
    <div className="space-y-6">
      <SectionHeader label="Exam Outcomes" title="Results" />
      <div style={{ display: 'flex', gap: '4px', borderBottom: `2px solid ${college.primaryColor}` }}>
        {RESULTS_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="font-display font-semibold text-type-body-xs px-6 py-2 rounded-t"
            style={{
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
              backgroundColor: active === tab.id ? college.primaryColor : '#f8f9fa',
              color: active === tab.id ? '#fff' : '#383838',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="rounded-b-xl p-6"
        style={{ border: `1px solid ${college.primaryColor}18`, borderTop: 'none', backgroundColor: '#fff' }}
      >
        <DocLinkList items={results[active]} buttonLabel="View / Download" />
      </div>
    </div>
  );
}

// ─── Question Papers Section ──────────────────────────────────────────────────

const QP_TABS = [
  { id: 'bPharm', label: 'B.Pharmacy' },
  { id: 'mPharm', label: 'M.Pharmacy' },
];

function PdfBtn({ href }) {
  if (!href) return <span className="font-display text-type-cap text-[#adb5bd]">—</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-display font-semibold text-type-cap text-white px-3 py-1.5 rounded transition-opacity hover:opacity-80"
      style={{ backgroundColor: college.primaryColor }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="2">
        <path d="M8 2v8M5 7l3 3 3-3M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Download
    </a>
  );
}

function QuestionPapersSection() {
  const [active, setActive] = useState('bPharm');
  const { bPharmQP, mPharmQP } = college.examination;

  return (
    <div className="space-y-6">
      <SectionHeader label="Past Papers" title="Question Papers" />

      <div style={{ display: 'flex', gap: '4px', borderBottom: `2px solid ${college.primaryColor}` }}>
        {QP_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="font-display font-semibold text-type-body-xs px-6 py-2 rounded-t"
            style={{
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
              backgroundColor: active === tab.id ? college.primaryColor : '#f8f9fa',
              color: active === tab.id ? '#fff' : '#383838',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="rounded-b-xl p-6"
        style={{ border: `1px solid ${college.primaryColor}18`, borderTop: 'none', backgroundColor: '#fff' }}
      >
        {/* B.Pharmacy */}
        {active === 'bPharm' && (
          <>
            <h3 className="font-display font-semibold text-type-body mb-4" style={{ color: college.primaryColor }}>
              B.Pharmacy (PCI) Question Papers — Osmania University
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse', border: `1px solid ${college.primaryColor}20` }}>
                <thead>
                  <tr style={{ backgroundColor: college.greenAccent }}>
                    <th className="font-display font-semibold text-type-ui-sm text-white px-4 py-3 text-left" style={{ minWidth: '120px', border: `1px solid ${college.primaryColor}30` }}>
                      Semester
                    </th>
                    {bPharmQP.years.map(yr => (
                      <th key={yr} className="font-display font-semibold text-type-ui-sm text-white px-4 py-3 text-center" style={{ whiteSpace: 'nowrap', border: `1px solid ${college.primaryColor}30` }}>
                        {yr}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bPharmQP.semesters.map((row, i) => (
                    <tr key={row.sem} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                      <td className="font-display font-semibold text-type-body-xs px-4 py-3" style={{ color: college.primaryColor, border: `1px solid ${college.primaryColor}10` }}>
                        {row.sem}
                      </td>
                      {row.links.map((link, j) => (
                        <td key={j} className="px-4 py-3 text-center" style={{ border: `1px solid ${college.primaryColor}10` }}>
                          <PdfBtn href={link.href} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* M.Pharmacy */}
        {active === 'mPharm' && (
          <div className="space-y-8">
            {mPharmQP.map(spec => (
              <div key={spec.specialisation}>
                <SectionPill title={spec.specialisation} />
                <div className="overflow-x-auto mt-3">
                  <table className="bg-white" style={{ borderCollapse: 'collapse', border: `1px solid ${college.primaryColor}20`, maxWidth: '480px' }}>
                    <thead>
                      <tr style={{ backgroundColor: college.greenAccent }}>
                        <th className="font-display font-semibold text-type-ui-sm text-white px-4 py-3 text-left" style={{ minWidth: '140px', border: `1px solid ${college.primaryColor}30` }}>
                          Semester
                        </th>
                        <th className="font-display font-semibold text-type-ui-sm text-white px-4 py-3 text-center" style={{ border: `1px solid ${college.primaryColor}30` }}>
                          Question Paper
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {spec.semesters.map((s, i) => (
                        <tr key={s.sem} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                          <td className="font-display font-semibold text-type-body-xs px-4 py-3" style={{ color: college.primaryColor, border: `1px solid ${college.primaryColor}10` }}>
                            {s.sem}
                          </td>
                          <td className="px-4 py-3 text-center" style={{ border: `1px solid ${college.primaryColor}10` }}>
                            <PdfBtn href={s.href} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Config & Page ────────────────────────────────────────────────────────────

const sectionConfig = {
  'examination-branch': {
    title: 'Examination Branch @ GRCP',
    subtitle: 'Transparent, timely, and fair coordination of all examination activities',
    breadcrumb: ['Examination', 'Examination Branch @ GRCP'],
  },
  'sessional-timetable': {
    title: 'Sessional Time Table',
    subtitle: 'Internal mid-term examination schedules for B.Pharmacy and M.Pharmacy',
    breadcrumb: ['Examination', 'Sessional Time Table'],
  },
  'ou-timetables': {
    title: 'OU Time Tables',
    subtitle: 'Osmania University examination timetables for theory and practical exams',
    breadcrumb: ['Examination', 'OU Time Tables'],
  },
  'ou-notifications': {
    title: 'OU Notifications',
    subtitle: 'Latest examination notifications from Osmania University',
    breadcrumb: ['Examination', 'OU Notifications'],
  },
  results: {
    title: 'Results',
    subtitle: 'University and internal sessional examination results',
    breadcrumb: ['Examination', 'Results'],
  },
  'question-papers': {
    title: 'Question Papers',
    subtitle: 'Previous year question papers for university examinations',
    breadcrumb: ['Examination', 'Question Papers'],
  },
};

const sectionContent = {
  'examination-branch': <ExaminationBranchSection />,
  'sessional-timetable': <SessionalTimetableSection />,
  'ou-timetables': <OuTimetablesSection />,
  'ou-notifications': <OuNotificationsSection />,
  results: <ResultsSection />,
  'question-papers': <QuestionPapersSection />,
};

export default function ExaminationPage() {
  const { section } = useParams();
  const activeSection = section || 'examination-branch';
  const config = sectionConfig[activeSection] || sectionConfig['examination-branch'];
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

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
        <div className="max-w-[1200px] mx-auto">
          {sectionContent[activeSection] || sectionContent['examination-branch']}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
