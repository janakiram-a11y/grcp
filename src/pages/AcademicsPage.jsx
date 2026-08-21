import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import college from '../theme';
import AdminSidebarLayout from '../components/AdminSidebarLayout';
import { facultyList as facultyListWithCV } from '../data/academicsData';

const CV_MAP = Object.fromEntries(facultyListWithCV.map(f => [f.name.trim(), f.cv]));

const primary = college.primaryColor; // #2D7A50
const accent  = college.greenAccent;  // #C72235

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h2 className="font-display font-bold text-type-h2-mob" style={{ color: accent }}>
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="font-display font-semibold text-type-body-lg mb-5 mt-8 first:mt-0" style={{ color: primary }}>
      {children}
    </h3>
  );
}

function InfoCallout({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-3 mt-6"
      style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
    >
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <p className="font-body text-type-body-xs text-[#4B5563]">{children}</p>
    </div>
  );
}

function DataTable({ rows, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide"
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
                  className="font-body text-type-body-xs px-5 py-3.5"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {row[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DownloadIconButton() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
    </svg>
  );
}

function DownloadBtn({ href, label = 'Download' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-download"
    >
      <DownloadIconButton />
      {label}
    </a>
  );
}

// ── Section: Syllabus ─────────────────────────────────────────────────────────

const BPHARM_SEMESTERS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

const MPHARM_SPECIALIZATIONS = [
  {
    name: 'Pharmaceutical Chemistry',
    slug: 'Pharmaceutical_Chemistry',
    semesters: ['I', 'II'],
  },
  {
    name: 'Pharmacognosy',
    slug: 'Pharmacognosy',
    semesters: ['I', 'II'],
  },
  {
    name: 'Pharmaceutics',
    slug: 'Pharmaceutics',
    semesters: ['I', 'II'],
  },
  {
    name: 'Pharmacy Practice',
    slug: 'Pharmacy_Practice',
    semesters: ['I', 'II'],
  },
  {
    name: 'Pharmacology',
    slug: 'Pharmacology',
    semesters: ['I', 'II'],
  },
  {
    name: 'Pharmaceutical Analysis',
    slug: 'Pharmaceutical_Analysis',
    semesters: ['I', 'II'],
  },
  {
    name: 'Regulatory Affairs',
    slug: 'Regulatory_Affairs',
    semesters: ['I', 'II'],
  },
  {
    name: 'Pharmaceutical Quality Assurance',
    slug: 'Pharmaceutical_Quality_Assurance',
    semesters: ['I', 'II'],
  },
];

function SyllabusContent() {
  return (
    <>
      <SectionHeader label="Curriculum Documents" title="Syllabus (UG / PG)" />

      {/* B.Pharmacy Card */}
      <div
        className="rounded-2xl border bg-white p-6 mb-8"
        style={{ borderColor: `${primary}18` }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${primary}0F` }}
          >
            <svg className="w-5 h-5" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-type-body-lg" style={{ color: primary }}>B.Pharmacy Syllabus</h3>
            <p className="font-display text-type-cap" style={{ color: `${primary}70` }}>Osmania University — Semester-wise Download</p>
          </div>
        </div>

        <div className="flex flex-col gap-0 rounded-xl overflow-hidden border border-[#E5E7EB] mb-4">
          {BPHARM_SEMESTERS.map((sem, i) => (
            <div
              key={sem}
              className="flex items-center justify-between gap-4 px-5 py-3 border-b last:border-0"
              style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA', borderColor: '#F3F4F6' }}
            >
              <span className="font-body text-type-body-xs text-[#374151]">Semester {sem}</span>
              <DownloadBtn href={`https://grcp.ac.in/downloads/syllabus/${sem} SEM.pdf`} />
            </div>
          ))}
        </div>

        <a
          href="https://grcp.ac.in/downloads/syllabus/B_Pharm_PCI_Rules.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-type-ui-sm font-semibold underline"
          style={{ color: accent }}
        >
          B.Pharm PCI Rules &amp; Regulations
        </a>
      </div>

      {/* M.Pharmacy Card */}
      <div
        className="rounded-2xl border bg-white p-6"
        style={{ borderColor: `${primary}18` }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${primary}0F` }}
          >
            <svg className="w-5 h-5" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-type-body-lg" style={{ color: primary }}>M.Pharmacy Syllabus</h3>
            <p className="font-display text-type-cap" style={{ color: `${primary}70` }}>Specialization-wise Semester Downloads</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MPHARM_SPECIALIZATIONS.map((spec) => (
            <div
              key={spec.slug}
              className="rounded-xl border p-4"
              style={{ borderColor: `${primary}18`, backgroundColor: `${primary}04` }}
            >
              <p className="font-display font-semibold text-type-ui-sm mb-3" style={{ color: primary }}>
                {spec.name}
              </p>
              <div className="flex gap-2 flex-wrap">
                {spec.semesters.map((sem) => (
                  <DownloadBtn
                    key={sem}
                    href={`https://grcp.ac.in/downloads/syllabus/M_Pharma/${spec.slug}_${sem}_SEM.pdf`}
                    label={`Sem ${sem}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <InfoCallout>
        Syllabi are subject to revision by Osmania University. Students are advised to refer to the latest
        official notifications from the university website or the GRCP examination branch.
      </InfoCallout>
    </>
  );
}

// ── Section: Academic Calendar ────────────────────────────────────────────────

function CalendarContent() {
  const downloads = [
    {
      title: 'B Pharmacy Almanac 2025–2026',
      href: 'https://grcp.ac.in/downloads/B_Pharmacy_almanac_2025-2026.pdf',
    },
    {
      title: 'M Pharmacy Almanac 2025–2026',
      href: 'https://grcp.ac.in/downloads/M_Pharmacy_almanac_2025-2026.pdf',
    },
  ];

  return (
    <>
      <SectionHeader label="Academic Schedule" title="Academic Calendar 2025–26" />
      <p className="font-body text-type-body text-[#474747] mb-8">
        The Academic Calendar for GRCP is prepared in accordance with the Osmania University almanac and
        PCI norms. Download the official almanac documents below for B.Pharmacy and M.Pharmacy programs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {downloads.map((d, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 flex flex-col gap-4 border bg-white hover:shadow-md transition-shadow"
            style={{ borderColor: `${primary}18` }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primary}0F` }}
              >
                <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-type-body leading-snug" style={{ color: primary }}>
                  {d.title}
                </h3>
                <p className="font-body text-type-cap text-[#6B7280] mt-1">Official Academic Almanac — PDF</p>
              </div>
            </div>
            <DownloadBtn href={d.href} label="Download PDF" />
          </div>
        ))}
      </div>

      <InfoCallout>
        Academic calendar dates are subject to revision as per Osmania University notifications or government orders.
        Students are advised to check the official college notice board and GRCP website for the latest updates.
      </InfoCallout>
    </>
  );
}

// ── Section: Time Tables ──────────────────────────────────────────────────────

const BPHARM_TT = [
  { sno: '1', semester: 'II Sem', section: 'A', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_II_Sem_A_2025-26.pdf' },
  { sno: '2', semester: 'II Sem', section: 'B', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_II_Sem_B_2025-26.pdf' },
  { sno: '3', semester: 'III Sem', section: 'A', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_III_Sem_A_2025-26.pdf' },
  { sno: '4', semester: 'III Sem', section: 'B', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_III_Sem_B_2025-26.pdf' },
  { sno: '5', semester: 'V Sem', section: 'A', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_V_Sem_A_2025-26.pdf' },
  { sno: '6', semester: 'V Sem', section: 'B', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_V_Sem_B_2025-26.pdf' },
  { sno: '7', semester: 'VII Sem', section: 'A', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_VII_Sem_A_2025-26.pdf' },
  { sno: '8', semester: 'VII Sem', section: 'B', href: 'https://grcp.ac.in/downloads/timetable/B_Pharma_VII_Sem_B_2025-26.pdf' },
];

const MPHARM_TT = [
  { sno: '1', specialisation: 'Pharmaceutical Analysis', semester: 'I Sem', href: 'https://grcp.ac.in/downloads/timetable/M_Pharma_Pharmaceutical_Analysis_I_Sem_2025-27.pdf' },
  { sno: '2', specialisation: 'Pharmacology', semester: 'I Sem', href: 'https://grcp.ac.in/downloads/timetable/M_Pharma_Pharmacology_I_Sem_2025-27.pdf' },
  { sno: '3', specialisation: 'Pharmaceutics', semester: 'I Sem', href: 'https://grcp.ac.in/downloads/timetable/M_Pharma_Pharmaceutics_I_Sem_2025-27.pdf' },
];

function TimetableRow({ row, columns }) {
  return (
    <tr style={{ backgroundColor: parseInt(row.sno) % 2 === 0 ? '#FAFAFA' : '#fff' }}>
      {columns.map((col) =>
        col.key === 'download' ? (
          <td key="download" className="px-5 py-3.5">
            <DownloadBtn href={row.href} />
          </td>
        ) : (
          <td
            key={col.key}
            className="font-body text-type-body-xs px-5 py-3.5"
            style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
          >
            {row[col.key] ?? '—'}
          </td>
        )
      )}
    </tr>
  );
}

function TTTable({ rows, columns }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TimetableRow key={row.sno} row={row} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimetablesContent() {
  const [activeProgram, setActiveProgram] = React.useState('bpharm');

  const programTabs = [
    { key: 'bpharm', label: 'B.Pharmacy' },
    { key: 'mpharm', label: 'M.Pharmacy' },
  ];

  return (
    <>
      <SectionHeader label="Class & Lab Schedules" title="Time Tables" />

      {/* Program tab bar */}
      <div className="flex gap-2 mb-8">
        {programTabs.map((tab) => {
          const isActive = activeProgram === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveProgram(tab.key)}
              className="px-4 py-2 rounded-full font-display text-type-ui-sm font-semibold border transition-all duration-150"
              style={
                isActive
                  ? { backgroundColor: primary, borderColor: primary, color: '#fff' }
                  : { backgroundColor: '#fff', borderColor: '#D1D5DB', color: '#6B7280' }
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeProgram === 'bpharm' && (
        <>
          <SubHeading>B.Pharmacy</SubHeading>
          <TTTable
            rows={BPHARM_TT}
            columns={[
              { key: 'sno',      label: 'S.No.' },
              { key: 'semester', label: 'Semester', accent: true },
              { key: 'section',  label: 'Section' },
              { key: 'download', label: 'Download' },
            ]}
          />
        </>
      )}

      {activeProgram === 'mpharm' && (
        <>
          <SubHeading>M.Pharmacy</SubHeading>
          <TTTable
            rows={MPHARM_TT}
            columns={[
              { key: 'sno',           label: 'S.No.' },
              { key: 'specialisation', label: 'Specialisation', accent: true },
              { key: 'semester',      label: 'Semester' },
              { key: 'download',      label: 'Download' },
            ]}
          />
        </>
      )}

      <InfoCallout>
        Timetables are updated each semester. Contact the college office at{' '}
        <strong>{college.phone}</strong> or visit the notice board for the latest schedules.
      </InfoCallout>
    </>
  );
}

// ── Section: Library ──────────────────────────────────────────────────────────

const LIBRARY_RULES = [
  'Before entering the Library the borrowers should leave all their personal belongings (bags, issued books & printed materials) in the property rack near the entrance door of the Library.',
  'He/She must produce his/her identity card at the security counter.',
  'All the Staff & Students should sign in users register after entering the Library.',
  'Only one note book is allowed into the library.',
  'Books should be returned on completion of semester exams.',
  'In addition, two reference books are allowed to borrow for a period of 7 days. One time renewal is allowed subject to availability of books.',
  'The librarian has a right to recall any book from any borrowers at any time and the borrowers should strictly obey this.',
  'The borrowers are advised to take utmost care about of their borrowed books.',
  'Reference books, newspapers, magazines and journals should not be taken out of the Library.',
  'In case of loss of books, the borrower must immediately inform the librarian of same in writing.',
  'Library books should be used very carefully. Writing/marking marks in the books is strictly forbidden, pages should not be folded to be as book marks.',
  'Tearing off pages is a serious offence. Any person found in the act/evidence of such action will be seriously dealt with.',
  'Mobile phones shall be either switch off or in a silent mode.',
  'Library Membership may be withdrawn / cancelled if a member is found taking books out of Library without proper authorization, disfiguring and mutilating books in any way.',
  'Any kind of edibles is not allowed inside the Library. Smoking/chewing and other kind of intoxicants is strictly prohibited inside the Library premises.',
  'All the borrowers should return all the books at the end of each semester. If the books are lost/damaged, then the borrower shall replace the books of the same edition or latest edition or pay the compensation decided by the principal/librarian based on the cost of latest edition of the book plus additional charges.',
  'After completion of their course students should obtain "NO DUES" certificate from the library after returning all the books.',
];

const LIBRARY_OBJECTIVES = [
  'Be the knowledge hub of the college and disseminate knowledge as widely as possible.',
  'Facilitate optimal use of knowledge by all staff and students.',
  'Ensure easy access to the facilities available to all staff and students.',
  'Encourage reading habit among students.',
  'Serve as the center of information for the college and provide easy access to national and global knowledge to all staff and students.',
  'Offer an inviting and attractive physical space with proper seating arrangements and other amenities.',
  'Ensure the staff and students are treated with courtesy and offered all assistance in their pursuit of knowledge.',
  'Optimize its potential to provide access to information and knowledge to all by proper display, categorization of resource materials.',
  'Help all the users to develop the skills to make optimum use of all the facilities.',
  'Improve the collection and services on a continuing basis in consultation with stake holders.',
  'Workout a program in consultation with teachers for the effective use of all types of library materials.',
  'Undertake activities to foster an interest in books and increase involvement in the library.',
];

const LIBRARY_COMMITTEE = [
  { sno: '1',  name: 'Dr. M. Ganga Raju',            designation: 'Professor & Principal',     position: 'President',    email: 'ganga8000@grcp.ac.in' },
  { sno: '2',  name: 'Mr. I. Lakshmana Rao',          designation: 'Librarian',                 position: 'Co-ordinator', email: 'grcplibrary@gmail.com' },
  { sno: '3',  name: 'Dr. A. Seetha Devi',            designation: 'Professor',                 position: 'Member',       email: 'seethadevi8090@grcp.ac.in' },
  { sno: '4',  name: 'Dr. N.V.L. Suvarchala Reddy V', designation: 'Professor & HoD',           position: 'Member',       email: 'suvarchala8018@grcp.ac.in' },
  { sno: '5',  name: 'Dr. A. D. Pani Kumar',          designation: 'Associate Professor & HoD', position: 'Member',       email: 'durga8017@grcp.ac.in' },
  { sno: '6',  name: 'Dr. Monika Nijhawan',           designation: 'Professor & HoD',           position: 'Member',       email: 'monika8009@grcp.ac.in' },
  { sno: '7',  name: 'Mrs. K. Lalitha',              designation: 'Assistant Professor',        position: 'Member',       email: 'kalakotalalitha8094@grcp.ac.in' },
  { sno: '8',  name: 'Dr. C. Nisha Shri',            designation: 'Associate Professor',        position: 'Member',       email: 'nisha8091@grcp.ac.in' },
  { sno: '9',  name: 'Mrs. Ch. Soujanya',            designation: 'Assistant Professor',        position: 'Member',       email: 'soujanya8056@grcp.ac.in' },
  { sno: '10', name: 'Mr. K. Eswara Raju',           designation: 'Assistant Librarian',        position: 'Member',       email: 'keraju1993@gmail.com' },
];

const LIBRARY_STATS = [
  { label: 'Volumes',          value: '12,962' },
  { label: 'Titles',           value: '1,779' },
  { label: 'National Journals', value: '34' },
  { label: 'e-Journals',       value: '380' },
];


function LibraryContent() {
  const subsections = [
    {
      title: 'About Library',
      href: '/academics/library',
      desc: 'History, vision, and general overview of the GRCP Library and its role in pharmaceutical education.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: 'Information Center',
      href: '/academics/library/information-center',
      desc: 'Access to pharmaceutical databases, digital catalogs, and reference management tools.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
      ),
    },
    {
      title: 'E-Journals',
      href: '/academics/library/e-journals',
      desc: 'Subscribed e-journal list from pharmaceutical and life sciences publishers including PCI and WHO resources.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      title: 'Daily Newspapers',
      href: '/academics/library/daily-news-papers',
      desc: 'National and regional newspapers available in the library reading room for students and staff.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      ),
    },
    {
      title: 'Statistics 2025-26',
      href: '/academics/library/statistics',
      desc: 'Annual library usage statistics: borrowing records, visit counts, and collection growth data.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: 'Titles & Volumes 2025-26',
      href: '/academics/library/title-volumes',
      desc: 'Complete catalog of books, volumes, and titles available in the GRCP Library collection.',
      icon: (
        <svg className="w-6 h-6" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SectionHeader label="Knowledge Resources" title="Library @ GRCP" />

      {/* Stats pills */}
      <div className="flex flex-wrap gap-3 mb-6">
        {LIBRARY_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border"
            style={{ borderColor: `${primary}25`, backgroundColor: `${primary}07` }}
          >
            <span className="font-display font-bold text-type-body-lg" style={{ color: primary }}>{stat.value}</span>
            <span className="font-display text-type-cap text-[#6B7280]">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="font-body text-type-body text-[#474747] mb-10">
        The GRCP Library is a well-equipped resource centre designed to support the academic and research needs of students and faculty. With a collection of 12,962 volumes and 1,779 distinct titles, the library offers extensive resources across a range of disciplines. It subscribes to 34 national journals and provides access to 380 international online journals, enriching the academic experience with diverse and high-quality research material. Additionally, the library has a Delnet subscription, which expands the resources available to users through a network of shared materials. To streamline access and enhance user experience, the library is fully automated using Koha software, a robust library management system that simplifies cataloging, circulation, and online access. This automation allows users to efficiently search for and access resources, both on-campus and remotely. Additionally, the GRCP Library offers a book bank facility, allowing students to borrow textbooks for the entire semester and return them after completing their semester exams, supporting continuous learning and reducing the need for additional book purchases.
      </p>

      {/* Subsection cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {subsections.map((sub, i) => (
          <a
            key={i}
            href={sub.href}
            className="flex flex-col gap-3 p-6 rounded-2xl border bg-white hover:shadow-md transition-shadow group"
            style={{ borderColor: `${primary}18` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${primary}0F` }}
            >
              {sub.icon}
            </div>
            <div>
              <h3
                className="font-display font-bold text-type-body mb-1.5 group-hover:underline"
                style={{ color: primary }}
              >
                {sub.title}
              </h3>
              <p className="font-body text-type-ui-sm text-[#6B7280]">{sub.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Library Rules */}
      <div className="mb-12">
        <SectionHeader label="Usage Policy" title="Library Rules" />
        <ol className="list-decimal list-outside ml-5 space-y-3">
          {LIBRARY_RULES.map((rule, i) => (
            <li key={i} className="font-body text-type-body-xs text-[#374151] pl-1">
              {rule}
            </li>
          ))}
        </ol>
      </div>

      {/* Library Objectives */}
      <div className="mb-12">
        <SectionHeader label="Mission & Goals" title="Library Objectives" />
        <ol className="list-decimal list-outside ml-5 space-y-3">
          {LIBRARY_OBJECTIVES.map((obj, i) => (
            <li key={i} className="font-body text-type-body-xs text-[#374151] pl-1">
              {obj}
            </li>
          ))}
        </ol>
      </div>

      {/* Library Committee Table */}
      <div className="mb-8">
        <SectionHeader label="Governance" title="Composition of Library Committee (2025-26)" />
        <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr style={{ backgroundColor: accent }}>
                {['Sl.No.', 'Name', 'Designation', 'Position', 'Email'].map((col) => (
                  <th
                    key={col}
                    className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIBRARY_COMMITTEE.map((row, i) => (
                <tr key={row.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                  <td className="font-body text-type-body-xs px-5 py-3.5 text-[#374151]">{row.sno}</td>
                  <td className="font-body text-type-body-xs px-5 py-3.5 font-semibold" style={{ color: primary }}>{row.name}</td>
                  <td className="font-body text-type-body-xs px-5 py-3.5 text-[#374151]">{row.designation}</td>
                  <td className="font-body text-type-body-xs px-5 py-3.5 text-[#374151]">{row.position}</td>
                  <td className="font-body text-type-ui-sm px-5 py-3.5">
                    <a href={`mailto:${row.email}`} className="underline" style={{ color: primary }}>{row.email}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InfoCallout>
        For library membership, borrowing privileges, or e-resource access, contact the Library at the college
        office during working hours: Monday to Saturday, 9:00 AM - 5:00 PM.
      </InfoCallout>
    </>
  );
}

// ── Section: Faculty ──────────────────────────────────────────────────────────

const GRCP_MEDIA = 'https://grcp.ac.in/media/';

const FACULTY_DATA = [
  { sno: '1',  name: 'Dr. M. Ganga Raju',               designation: 'Professor and Principal',         dept: 'Pharmacology',             qual: 'M. Pharm., Ph.D',         exp: '22.5 years', email: 'mgr8000@grcp.ac.in',                   photo: `${GRCP_MEDIA}635a7da25727d8000.jpg` },
  { sno: '2',  name: 'Dr. N.V.L Suvarchala Reddy V',    designation: 'Professor and HOD',               dept: 'Pharmacology',             qual: 'M. Pharm., Ph.D',         exp: '19.7 years', email: 'suvarchala8018@grcp.ac.in',             photo: `${GRCP_MEDIA}635c9fd69db668018.jpg` },
  { sno: '3',  name: 'Dr. Monika Nijhawan',             designation: 'Professor and HOD',               dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '21.6 years', email: 'monika8009@grcp.ac.in',                photo: `${GRCP_MEDIA}635c020cd27048009.jpg` },
  { sno: '4',  name: 'Dr. Ceema Mathew',                designation: 'Professor',                        dept: 'Pharmaceutical Analysis',  qual: 'M. Pharm., Ph.D',         exp: '22 years',   email: 'ceema8003@grcp.ac.in',                 photo: `${GRCP_MEDIA}635ca0bfee3db8003.jpg` },
  { sno: '5',  name: 'Dr. A. Seetha Devi',              designation: 'Professor',                        dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '24.8 years', email: 'seethadevi8090@grcp.ac.in',            photo: `${GRCP_MEDIA}666813811105cASD Photo.jpg` },
  { sno: '6',  name: 'Dr. Gyati Shilakari Asthana',     designation: 'Professor',                        dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '22.5 years', email: 'gyati8061@grcp.ac.in',                 photo: `${GRCP_MEDIA}635ca67f5f45cphoto - Dr. Gyati Shilakari Asthana.jpg` },
  { sno: '7',  name: 'Dr. Jagadeesh Induru',            designation: 'Associate Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '29 years',   email: 'jagadeesh8002@grcp.ac.in',             photo: `${GRCP_MEDIA}635ca199d221bIj photo22kb.jpg` },
  { sno: '8',  name: 'Dr. A D Panikumar',               designation: 'Associate Professor and HOD',     dept: 'Pharmaceutical Analysis',  qual: 'M. Pharm., Ph.D',         exp: '18 years',   email: 'durga8017@grcp.ac.in',                 photo: `${GRCP_MEDIA}635c00af3199e8017.jpg` },
  { sno: '9',  name: 'Dr. Shashikala Metri',            designation: 'Associate Professor',              dept: 'Pharmacognosy',            qual: 'M. Pharm., Ph.D',         exp: '17.2 years', email: 'shashikala8052@grcp.ac.in',            photo: `${GRCP_MEDIA}635bfe83a52baShasikala Photo.jpg` },
  { sno: '10', name: 'Dr. P. Veeresh Babu',             designation: 'Associate Professor',              dept: 'Pharmacology',             qual: 'M. Pharm., Ph.D',         exp: '15 years',   email: 'veeresh8034@grcp.ac.in',               photo: `${GRCP_MEDIA}635bfd7862c3f8034.jpg` },
  { sno: '11', name: 'Dr. Nisha Shri Chengama Raju',    designation: 'Associate Professor',              dept: 'Pharmacology',             qual: 'M. Pharm., Ph.D.',        exp: '12 years',   email: 'nisha8091@grcp.ac.in',                 photo: `${GRCP_MEDIA}66ed40d209d85Dr Nisha pic.jpg` },
  { sno: '12', name: 'Dr. G. Sailaja',                  designation: 'Associate Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '16.5 years', email: 'sailaja8082@grcp.ac.in',               photo: `${GRCP_MEDIA}635bf1feeda94Sailaja.jpeg` },
  { sno: '13', name: 'Dr. Talat Farheen Mohammed Aref', designation: 'Associate Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '13 years',   email: 'talatfarheen8097@grcp.ac.in',          photo: `${GRCP_MEDIA}6900be941c496Talat image.jpg` },
  { sno: '14', name: 'Dr. M. Lakshmi Madhuri',          designation: 'Associate Professor',              dept: 'Pharmaceutical Chemistry', qual: 'M. Pharm., Ph.D',         exp: '7.11 years', email: 'madhuri8072@grcp.ac.in',               photo: `${GRCP_MEDIA}635aa214ee4928072.jpg` },
  { sno: '15', name: 'Dr. N. Sree Lakshmi',             designation: 'Associate Professor',              dept: 'Pharmacology',             qual: 'M. Pharm., Ph.D',         exp: '11.3 years', email: 'lakshmi8064@grcp.ac.in',               photo: `${GRCP_MEDIA}635be9481e59b8064.jpg` },
  { sno: '16', name: 'Dr. K. Lalitha',                  designation: 'Associate Professor',              dept: 'Pharmacology',             qual: 'M. Pharm., Ph.D',         exp: '17.5 years', email: 'kalakotalalitha8094@grcp.ac.in',        photo: `${GRCP_MEDIA}680a7a63e83dak lalitha jpg.jpg` },
  { sno: '17', name: 'Dr. Venna R Surya Anusha',        designation: 'Assistant Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '10.3 years', email: 'vrsanusha8088@grcp.ac.in',             photo: `${GRCP_MEDIA}6623fe57313d7Dr Rajeshwari anusha pic.jpg` },
  { sno: '18', name: 'Dr. K. Mamatha',                  designation: 'Assistant Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharm., Ph.D',         exp: '16.3 years', email: 'kolamamatha8074@grcp.ac.in',            photo: `${GRCP_MEDIA}635be7e094ce08074.jpg` },
  { sno: '19', name: 'Mr. Vivek Kumar Tiwari',          designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharm., (Ph.D)',       exp: '11 years',   email: 'vivek8033@grcp.ac.in',                 photo: `${GRCP_MEDIA}635be68a7e15b8033.jpg` },
  { sno: '20', name: 'Mrs. Ch. Soujanya',               designation: 'Assistant Professor',              dept: 'Pharmaceutical Chemistry', qual: 'M. Pharm., (Ph.D)',       exp: '11 years',   email: 'soujanya8056@grcp.ac.in',              photo: `${GRCP_MEDIA}635be170a123a8056.jpg` },
  { sno: '21', name: 'Mrs. B. Karuna Devi',             designation: 'Assistant Professor',              dept: 'Pharmaceutical Chemistry', qual: 'M. Pharm., (Ph.D)',       exp: '15.1 years', email: 'karuna8062@grcp.ac.in',                photo: `${GRCP_MEDIA}635abdb818147Karuna.jpg` },
  { sno: '22', name: 'Mrs. M. Mamatha',                 designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharmacy',             exp: '5.1 years',  email: 'mamatha8069@grcp.ac.in',               photo: `${GRCP_MEDIA}635abb417a18a8069.jpg` },
  { sno: '23', name: 'Mrs. G. Kinnera Ratna Sri',       designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharmacy',             exp: '3.7 years',  email: 'kinnera8077@grcp.ac.in',               photo: `${GRCP_MEDIA}635a9d3bed53f8077.jpg` },
  { sno: '24', name: 'Mrs. Shabnam Kumari Thakur',      designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharmacy',             exp: '3.8 years',  email: 'shabnam8079@grcp.ac.in',               photo: `${GRCP_MEDIA}635a96d7cb2568079.jpg` },
  { sno: '25', name: 'Mrs. Nabamita Basu',              designation: 'Assistant Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharm., (Ph.D)',       exp: '5 years',    email: 'nabamita8080@grcp.ac.in',              photo: `${GRCP_MEDIA}635a9bb4e32aa8080.jpg` },
  { sno: '26', name: 'Mrs. Kabita Banik',               designation: 'Assistant Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharmacy',             exp: '10 years',   email: 'kabita8092@grcp.ac.in',                photo: `${GRCP_MEDIA}67440217977e6kabita photo.jpg` },
  { sno: '27', name: 'Mrs. Syed Sara Afreen',           designation: 'Assistant Professor',              dept: 'Pharmaceutical Analysis',  qual: 'M. Pharmacy',             exp: '4.3 years',  email: 'sara8073@grcp.ac.in',                  photo: `${GRCP_MEDIA}635abeb2b84098073.JPG` },
  { sno: '28', name: 'Mrs. D. Vijaya Durga',            designation: 'Assistant Professor',              dept: 'Pharmaceutical Analysis',  qual: 'M. Pharmacy',             exp: '15.5 years', email: 'vijayadurga8076@grcp.ac.in',           photo: `${GRCP_MEDIA}635aa055673508076.jpg` },
  { sno: '29', name: 'Mrs. Rupali Rupasmita Rout',      designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharm., (Ph.D)',       exp: '5.5 years',  email: 'rupali8096@grcp.ac.in',                photo: `${GRCP_MEDIA}68c7e56eb326eRupali_pic.png` },
  { sno: '30', name: 'Mrs. B. Prathyusha',              designation: 'Assistant Professor',              dept: 'Pharmaceutics',            qual: 'M. Pharmacy',             exp: '3 years',    email: 'prathyusha8083@grcp.ac.in',            photo: `${GRCP_MEDIA}64df24c93b92aprathyusha.jpeg` },
  { sno: '31', name: 'Mrs. P. A D G Lakshmi',          designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharmacy',             exp: '2 years',    email: 'ahalyapati8087@grcp.ac.in',            photo: `${GRCP_MEDIA}66222d789b8b4ahalya pic.jpg` },
  { sno: '32', name: 'Mrs. S.L.S. Mounica Pratyusha',  designation: 'Assistant Professor',              dept: 'Pharmaceutical Analysis',  qual: 'M. Pharm., (Ph.D)',       exp: '3.7 years',  email: 'slsmounicapratyusha8093@grcp.ac.in',   photo: `${GRCP_MEDIA}67fb8290e0f47monica prathyusha.jpg` },
  { sno: '33', name: 'Mrs. K. Sudha Rani',             designation: 'Assistant Professor',              dept: 'Pharmaceutical Chemistry', qual: 'M. Pharmacy',             exp: '10.9 years', email: 'sudharani8095@grcp.ac.in',             photo: `${GRCP_MEDIA}6899b0c588789k sudharani pic.jpg` },
  { sno: '34', name: 'Mrs. Vishnu Priya Kadiyala',     designation: 'Assistant Professor',              dept: 'Pharmacognosy',            qual: 'M. Pharmacy',             exp: '—',          email: 'vishnupriya8098@grcp.ac.in',           photo: `${GRCP_MEDIA}697f7ce874670vishnu priya_page-0001.jpg` },
  { sno: '35', name: 'Mrs. Azhar Sulthana Inkollu',    designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharmacy',             exp: '1.5 years',  email: 'azharsulthana8099@grcp.ac.in',         photo: `${GRCP_MEDIA}69828391c29ecazra sulthana pic.jpeg` },
  { sno: '36', name: 'Mrs. P. Naveena',                designation: 'Assistant Professor',              dept: 'Pharmaceutical Analysis',  qual: 'M. Pharm., (Ph.D)',       exp: '10 years',   email: '',                                     photo: `${GRCP_MEDIA}6a0ff620797ceP. Naveena JPG.jpeg` },
  { sno: '37', name: 'Mrs. K. Pavani',                 designation: 'Assistant Professor',              dept: 'Pharmacology',             qual: 'M. Pharmacy',             exp: '3 years',    email: 'pavani8071@grcp.ac.in',                photo: null },
  { sno: '38', name: 'Mrs. K. Aruna',                  designation: 'Assistant Professor',              dept: 'General Studies',          qual: 'M.A English Literature',  exp: '24 years',   email: 'arunakavuru5@gmail.com',               photo: `${GRCP_MEDIA}662e76f2c4368aruna pic.jpg` },
  { sno: '39', name: 'Dr. Venkata Krishna Sarma. S',   designation: 'Asst. Professor (part-time)',      dept: 'General Studies',          qual: 'M.Sc., Ph.D.',            exp: '18 years',   email: 'sarma.krishna1@gmail.com',             photo: `${GRCP_MEDIA}679a496c1601f63788802-6d67-42b8-908a-54cdf4842487.jpg` },
  { sno: '40', name: 'Mr. Ravikrishna Bursu',          designation: 'Asst. Professor (part-time)',      dept: 'General Studies',          qual: 'M. Tech',                 exp: '10 years',   email: 'ravikrishnab@griet.ac.in',             photo: `${GRCP_MEDIA}69eb090bb61b0ravi krishna .jpeg` },
];

const DEPT_COLORS = {
  'Pharmacology':             { bg: '#EEF6FF', border: '#BFDBFE', text: '#1D4ED8' },
  'Pharmaceutics':            { bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D' },
  'Pharmaceutical Analysis':  { bg: '#FFF7ED', border: '#FED7AA', text: '#C2410C' },
  'Pharmaceutical Chemistry': { bg: '#FDF4FF', border: '#E9D5FF', text: '#7E22CE' },
  'Pharmacognosy':            { bg: '#FFFBEB', border: '#FDE68A', text: '#92400E' },
  'General Studies':          { bg: '#F1F5F9', border: '#CBD5E1', text: '#475569' },
};

function getInitials(name) {
  return name
    .replace(/^(Dr\.|Mrs\.|Mr\.|Ms\.)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function getDesignationTier(designation) {
  const d = designation.toLowerCase();
  if (d.includes('principal')) return { color: accent };
  if (d.includes('hod')) return { color: primary };
  if (d.includes('professor') && !d.includes('associate') && !d.includes('assistant') && !d.includes('asst')) return { color: primary };
  if (d.includes('associate')) return { color: `${primary}BB` };
  return { color: '#6B7280' };
}

function FacultyCard({ member }) {
  const initials = getInitials(member.name);
  const deptStyle = DEPT_COLORS[member.dept] ?? DEPT_COLORS['General Studies'];
  const tier = getDesignationTier(member.designation);
  const cv = CV_MAP[member.name?.trim()] || '';

  return (
    <div
      className="group relative flex flex-col rounded-2xl border bg-white overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      style={{ borderColor: `${primary}18` }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: tier.color }} />

      {/* Sequential number badge */}
      <div
        className="absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10"
        style={{ backgroundColor: primary }}
      >
        <span className="font-display font-bold text-white text-type-label" style={{ lineHeight: 1 }}>{member.sno}</span>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Avatar + name */}
        <div className="flex items-center gap-4">
          <div
            className="w-24 h-24 rounded-2xl flex-shrink-0 overflow-hidden shadow-sm"
            style={{ backgroundColor: `${tier.color}22`, border: `2px solid ${tier.color}33` }}
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div
              className="w-full h-full items-center justify-center font-display font-bold text-type-h6 select-none"
              style={{ display: member.photo ? 'none' : 'flex', color: tier.color }}
            >
              {initials}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-type-body leading-snug" style={{ color: primary }}>
              {member.name}
            </h3>
            <p className="font-display text-type-cap text-[#6B7280] mt-0.5">
              {member.designation}
            </p>
            <p
              className="font-display font-semibold text-type-cap mt-1"
              style={{ color: deptStyle.text }}
            >
              {member.dept}
            </p>
          </div>
        </div>

        {/* Qualification + Experience */}
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="flex items-start gap-2">
            <span className="font-display text-type-label font-semibold uppercase tracking-wide text-[#9CA3AF] w-14 flex-shrink-0 pt-0.5">Qual.</span>
            <span className="font-body text-type-ui-sm text-[#374151] leading-snug">{member.qual}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-type-label font-semibold uppercase tracking-wide text-[#9CA3AF] w-14 flex-shrink-0">Exp.</span>
            <span className="font-body text-type-ui-sm text-[#374151]">{member.exp}</span>
          </div>
        </div>

        {/* Email + CV */}
        <div className="mt-auto pt-3 border-t flex items-center justify-between gap-2 flex-wrap" style={{ borderColor: `${primary}10` }}>
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1.5 font-display text-type-cap truncate transition-opacity hover:opacity-70 min-w-0"
              style={{ color: primary }}
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="truncate">{member.email}</span>
            </a>
          ) : (
            <span className="font-display text-type-cap text-[#9CA3AF]">—</span>
          )}
          {cv && (
            <a
              href={`https://grcp.ac.in/${cv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-display text-type-cap font-semibold flex-shrink-0 transition-opacity hover:opacity-70"
              style={{ color: primary }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
              </svg>
              CV
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const ALL_DEPTS = ['All', ...Array.from(new Set(FACULTY_DATA.map((f) => f.dept)))];

function FacultyContent() {
  const [activeDept, setActiveDept] = React.useState('All');

  const filtered = activeDept === 'All'
    ? FACULTY_DATA
    : FACULTY_DATA.filter((f) => f.dept === activeDept);

  return (
    <>
      <SectionHeader label="Academic Staff" title="Faculty List" />
      <p className="font-body text-type-body text-[#474747] mb-6">
        GRCP has a team of 40 highly qualified and experienced faculty members across all departments.
        The listing below reflects the teaching staff as maintained by the administration.
      </p>

      {/* Department filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {ALL_DEPTS.map((dept) => {
          const count = dept === 'All' ? FACULTY_DATA.length : FACULTY_DATA.filter((f) => f.dept === dept).length;
          const isActive = activeDept === dept;
          return (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className="px-3.5 py-1.5 rounded-full font-display text-type-cap font-semibold border transition-all duration-150"
              style={
                isActive
                  ? { backgroundColor: primary, borderColor: primary, color: '#fff' }
                  : { backgroundColor: '#fff', borderColor: `${primary}25`, color: '#6B7280' }
              }
            >
              {dept}
              <span className="ml-1.5 opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Faculty card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {filtered.map((member) => (
          <FacultyCard key={member.sno} member={member} />
        ))}
      </div>

      <InfoCallout>
        The complete faculty list with photographs and detailed profiles is available at the college office
        and on the NAAC / NBA submission portal. For specific faculty contact details, please call{' '}
        <strong>{college.phone}</strong>.
      </InfoCallout>
    </>
  );
}

// ── Section: Non-Teaching Staff ───────────────────────────────────────────────

const NTS_DATA = [
  { sno: '1',  name: 'Mrs. B. Manju',             designation: 'Office Assistant' },
  { sno: '2',  name: 'Mrs. Ch. Swapna',           designation: 'Office Assistant' },
  { sno: '3',  name: 'Mr. K. Jagadish',           designation: 'Office Assistant' },
  { sno: '4',  name: 'Mr. I. Lakshmana Rao',      designation: 'Librarian' },
  { sno: '5',  name: 'Mr. K. Eswara Raju',        designation: 'Library Assistant' },
  { sno: '6',  name: 'Mr. D.V.N. Siva Rama Raju', designation: 'System Admin' },
  { sno: '7',  name: 'Mr. D. Srinivasa Rao',      designation: 'Health Asst.' },
  { sno: '8',  name: 'Mr. P. Gopi',               designation: 'Lab-Technician' },
  { sno: '9',  name: 'Mrs. G. Vijaya Laxmi',      designation: 'Lab-Technician' },
  { sno: '10', name: 'Mr. B. Murali Kiran Raju',  designation: 'Lab-Technician' },
  { sno: '11', name: 'Mrs. B. Sunitha',           designation: 'Lab-Technician' },
  { sno: '12', name: 'Ms. M. Priyanka',           designation: 'Lab-Technician' },
  { sno: '13', name: 'Mrs. M. Madhavi',           designation: 'Lab-Technician' },
  { sno: '14', name: 'Mr. K. Rama Raju',          designation: 'Office Attender' },
  { sno: '15', name: 'Mr. B. Satyanarayana Raju', designation: 'Office Assistant' },
  { sno: '16', name: 'D. Padma Sundari',          designation: 'Accountant' },
];

const HOUSEKEEPING_DATA = [
  { sno: '1',  name: 'Animi. Bhargavi',    designation: 'Sweeper' },
  { sno: '2',  name: 'B. Swapna',          designation: 'Sweeper' },
  { sno: '3',  name: 'K. Kanthamma',       designation: 'Sweeper' },
  { sno: '4',  name: 'G. Lavanya',         designation: 'Sweeper' },
  { sno: '5',  name: 'Musva Bhagya Laxmi', designation: 'Sweeper' },
  { sno: '6',  name: 'L. Naga Laxmi',      designation: 'Sister' },
  { sno: '7',  name: 'B. Lavanya',         designation: 'Sweeper' },
  { sno: '8',  name: 'M. Bala Kumari',     designation: 'Sweeper' },
  { sno: '9',  name: 'T. Sneha',           designation: 'Sweeper' },
  { sno: '10', name: 'Talari. Sujatha',    designation: 'Sweeper' },
  { sno: '11', name: 'E. Renuka',          designation: 'Sweeper' },
  { sno: '12', name: 'Geddapu Lakshmi',    designation: 'Sweeper' },
  { sno: '13', name: 'K. Padma',           designation: 'Sweeper' },
  { sno: '14', name: 'Dasari Laxmi',       designation: 'Sweeper' },
  { sno: '15', name: 'Srinivas',           designation: 'Security' },
  { sno: '16', name: 'P. Venkataiah',      designation: 'Scavenger' },
  { sno: '17', name: 'G. Saiamma',         designation: 'Scavenger' },
];

function NonTeachingContent() {
  return (
    <>
      <SectionHeader label="Support Staff" title="Non-Teaching Staff" />
      <p className="font-body text-type-body text-[#474747] mb-8">
        GRCP's non-teaching staff provide essential support across laboratories, administration, library,
        and other departments — ensuring smooth day-to-day operations of the institution.
      </p>

      <SubHeading>Non-Teaching Staff</SubHeading>
      <DataTable
        rows={NTS_DATA}
        columns={[
          { key: 'sno',         label: 'S.No.' },
          { key: 'name',        label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
        ]}
      />

      <SubHeading>Housekeeping Staff</SubHeading>
      <DataTable
        rows={HOUSEKEEPING_DATA}
        columns={[
          { key: 'sno',         label: 'S.No.' },
          { key: 'name',        label: 'Name', accent: true },
          { key: 'designation', label: 'Designation' },
        ]}
      />

      <InfoCallout>
        The complete non-teaching staff register is available with the administrative office. For queries
        related to specific departments, please contact the college at{' '}
        <strong>{college.phone}</strong>.
      </InfoCallout>
    </>
  );
}

// ── Library Sub-page Content ──────────────────────────────────────────────────

function InformationCenterContent() {
  const linkStyle = { color: primary, textDecoration: 'underline' };
  return (
    <>
      <SectionHeader label="Library" title="Information Center @ GRCP" />
      <div className="space-y-8 max-w-[820px]">
        <div className="rounded-xl p-6 border" style={{ borderColor: `${primary}18`, backgroundColor: '#FAFAFA' }}>
          <h3 className="font-display font-semibold text-type-body-lg mb-3" style={{ color: primary }}>Librarian Contact</h3>
          <p className="font-body text-type-body-xs text-[#474747]">Lakshmana Rao Indurthi</p>
          <p className="font-body text-type-body-xs text-[#474747]">Phone: 9441080112</p>
          <a href="mailto:grcplibrary@gmail.com" className="font-body text-type-body-xs" style={{ color: primary }}>grcplibrary@gmail.com</a>
        </div>
        <div>
          <h3 className="font-display font-semibold text-type-body-lg mb-3" style={{ color: primary }}>OPAC (Online Public Access Catalogue)</h3>
          <a href="http://grcph.bestbookbuddies.com" target="_blank" rel="noopener noreferrer" className="font-body text-type-body-xs underline" style={{ color: primary }}>http://grcph.bestbookbuddies.com</a>
        </div>
        <div>
          <h3 className="font-display font-semibold text-type-body-lg mb-3" style={{ color: primary }}>Subscribed Databases</h3>
          <ul className="space-y-2">
            {[{ name: 'DELNET eJournals', url: 'https://discovery.delnet.in' }, { name: 'Science Direct', url: 'https://www.sciencedirect.com' }].map((db) => (
              <li key={db.name} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                <a href={db.url} target="_blank" rel="noopener noreferrer" className="font-body text-type-ui" style={linkStyle}>{db.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-type-body-lg mb-3" style={{ color: primary }}>Open Access Resources</h3>
          <ul className="space-y-2">
            {[
              { name: 'National Digital Library',           url: 'https://ndl.iitkgp.ac.in' },
              { name: 'National Digital Repository',        url: 'http://www.egyankosh.ac.in' },
              { name: 'Free online Education/SWAYAM',       url: 'https://swayam.gov.in' },
              { name: 'European Collections',               url: 'http://www.europeana.eu' },
              { name: 'Free eBooks',                        url: 'http://www.gutenberg.org' },
              { name: 'E-books',                            url: 'http://www.pdfdrive.net' },
              { name: 'Open Access Books',                  url: 'http://www.doabooks.org' },
              { name: 'Top Collections at the Archive',     url: 'https://archive.org' },
              { name: 'Open Library',                       url: 'http://openlibrary.org' },
              { name: 'Open Textbooks',                     url: 'http://open.umn.edu/opentextbooks' },
              { name: 'Education',                          url: 'http://openstaxcollege.org' },
              { name: 'Medknow journals',                   url: 'http://www.medknow.com' },
              { name: 'US National Library of Medicine',    url: 'http://www.ncbi.nlm.nih.gov/pmc' },
              { name: 'Open Access Repositories',           url: 'http://www.opendoar.org' },
              { name: 'Open Access Library',                url: 'http://www.oalib.com' },
              { name: 'Khan Academy',                       url: 'http://www.khanacademy.org' },
              { name: 'Open Educational Resources',         url: 'http://doer.col.org' },
            ].map((r) => (
              <li key={r.name} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-body text-type-ui" style={linkStyle}>{r.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-type-body-lg mb-3" style={{ color: primary }}>Thesis Resources</h3>
          <ul className="space-y-2">
            {[
              { name: 'Thesis',                url: 'http://shodhganga.inflibnet.ac.in' },
              { name: 'Global ETD Search',      url: 'http://www.theses.org' },
              { name: 'Open Access Thesis',     url: 'http://oatd.org' },
            ].map((r) => (
              <li key={r.name} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-body text-type-ui" style={linkStyle}>{r.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const EJOURNALS_LIST = [
  'Acta Chimica and Pharmaceutica Indica', 'Acta Pharmaceutica', 'Acta Pharmaceutica Sinica B',
  'Addiction Science & Clinical Practice', 'Adolescent Health, Medicine and Therapeutics',
  'Advanced Techniques in Biology & Medicine', 'Advances in Medicine',
  'Advances in Pharmacoepidemiology & Drug Safety', 'Advances in Pharmacological and Pharmaceutical Sciences',
  'Advances in Pharmacological Sciences', 'Advances in Preventive Medicine', 'Advances in Rheumatology',
  'African Journal of Emergency Medicine', 'African Journal of Pharmacy and Pharmacology',
  'African Journal of Traditional Complementary and Alternative Medicine', 'AIDS Research and Treatment',
  'Alimentary Pharmacology & Therapeutics', 'Allergies', 'Alternative & Integrative Medicine',
  'American Journal of Ethnomedicine', 'American Journal of Pharmaceutical Education',
  'American Journal of Pharmacology and Pharmacotherapeutics',
  'American Journal of Phytomedicine and Clinical Therapeutics', 'Anesthesiology Research and Practice',
  'Annals of Medicine & Surgery', 'Antibiotics', 'Antibodies', 'Antioxidants', 'Applied Sciences',
  'Arabian Journal of Medicinal and Aromatic Plants', 'Archives of Forensic Medicine and Criminology',
  'Archives of Medicine', 'Archives of Psychiatry Research',
  'Asian Journal of Pharmaceutical and Clinical Research', 'Asian Journal of Pharmaceutical and Health Sciences',
  'Asian Journal of Pharmaceutical Sciences', 'Asian Journal of Pharmaceutics',
  'Austin Journal of Pharmacology and Therapeutics', 'Autoimmune Diseases', 'Avicenna Journal of Medicine',
  'B.M.C infectious Diseases', 'Bangladesh Journal of Pharmacology', 'Bioceramics Development and Applications',
  'Biochemistry & Pharmacology', 'Bioelectronic Medicine', 'Bioengineering', 'Biologics',
  'Biology and Medicine', 'BioMed Research International', 'Biomedical Dermatology', 'Biomedicines',
  'BioMedInformatics', 'Biomolecules', 'BioPsychoSocial Medicine',
  'Blood and Lymphatic Cancer: Targets and Therapy', 'BMC Anesthesiology', 'BMC Cancer',
  'BMC Complementary Medicine and Therapies', 'BMC Dermatology', 'BMC Emergency Medicine',
  'BMC Family Practice', 'BMC Medicine', 'BMC Nephrology', 'BMC Palliative Care',
  'BMC Pharmacology and Toxicology', 'BMC Pulmonary Medicine', 'BMC Sports Science, Medicine and Rehabilitation',
  'Borneo Journal of Pharmacy', 'Brain Sciences', 'Brazilian Journal of Pharmaceutical Sciences',
  'Breast Cancer: Targets and Therapy', 'British Journal of Pharmacology and Toxicology', 'Burns Open',
  'Canadian Journal of Infectious Diseases and Medical Microbiology', 'Cancer Nanotechnology',
  'Cancer Research, Statistics, and Treatment', 'Cancers', 'Cardiogenetics', 'Cardiovascular Pharmacology',
  'Case Reports in Anesthesiology', 'Case Reports in Cardiology', 'Cellular & Molecular Medicine',
  'Chemotherapy', 'Chronic Diseases and Translational Medicine',
  'Chronic Obstructive Pulmonary Disease: Journal of the COPD Foundation',
  'Clinical and Translational Gastroenterology', 'Clinical Pharmacology & Biopharmaceutics',
  'Clinical Pharmacology: Advances and Applications', 'ClinicoEconomics', 'Clinics and Practice',
  'Contraception and Reproductive Medicine', 'Current Gerontology and Geriatrics Research',
  'Current issues on Pharmacy and Medical Sciences', 'Current Oncology', 'Current Research: Integrative Medicine',
  'DARU: Journal of Pharmaceutical Sciences', 'Der Pharma Chemica', 'Der Pharmacia Lettre', 'Der Pharmacia Sinica',
  'Diabetes, Metabolic Syndrome and Obesity: Targets and Therapy', 'Diagnostic and Therapeutics Endoscopy',
  'Drug Design, Development and Therapy', 'Drug Designing', 'Drug Development and Therapeutics',
  'Drug, Healthcare and Patient Safety', 'Drug: Real world outcomes', 'EBiomedicine',
  'Egyptian Pharmaceutical Journal', 'Emergency Medicine', 'Emerging Microbes and Infections',
  'European Journal of Biomedical and Pharmaceutical Sciences',
  'European Journal of Case Reports in Internal Medicine', 'European Medical Journal Gastroenterology',
  'European Medical Journal Neurology', 'European Medical Journal Rheumatology',
  'European Pharmaceutical Journal', 'European Respiratory Journal',
  'Family Medicine & Medical Science Research', 'Frontiers in Dental Medicine', 'Frontiers in Neuroscience',
  'Future Journal of Pharmaceutical Sciences', 'General Medicine',
  'Global Journal of Pharmacy & Pharmaceutical Science', 'Gomal Journal of Medical Sciences', 'Healthcare',
  'Hemato', 'Hepatic Medicine: Evidence and Research', 'Herbal Medicine', 'Herbal Medicines Journal',
  'HIV/AIDS-Research and Palliative Care', 'Hong Kong Journal of Emergency Medicine',
  'Immunity, Inflammation and Disease', 'Immunome Research', 'ImmunoTargets and Therapy',
  'Indian Journal of Health Sciences and Biomedical Research', 'Indian Journal of Neonatal Medicine and Research',
  'Indian Journal of Pharmaceutical Sciences', 'Indian Journal of Pharmacology',
  'Indian Journal of Pharmacy Practice', 'Indian Journal of Research in Homeopathy',
  'Indo Global Journal of Pharmaceutical Sciences', 'Indonesian Journal of Pharmacy',
  'Infection and Drug Resistance', 'Infectious Disease Reports', 'Infectious Diseases and Therapy',
  'Innovations in Pharmacy', 'Insights in Biomedicine', 'Integrated Pharmacy Research and Practice',
  'Integrative Medicine Research', 'Interdisciplinary Approaches to Medicine',
  'Internal Journal of Clinical Pharmacy', 'Internal Medicine', "International Journal of Alzheimer's Disease",
  'International Journal of Anesthesiology & Pain Medicine',
  'International Journal of Basic & Clinical Pharmacology',
  'International Journal of Cardiology: Heart & Vasculature',
  'International Journal of Chemical and Pharmaceutical Sciences',
  'International Journal of Drug Development & Research', 'International Journal of Green Pharmacy',
  'International Journal of Hepatology', 'International Journal of Medical Toxicology and Forensic Medicine',
  'International Journal of Pharma Sciences and Research',
  'International Journal of Pharmaceutical and Phytopharmacological Research',
  'International Journal of Pharmaceutical Investigation',
  'International Journal of Pharmaceutical Sciences & Research',
  'International Journal of Pharmaceutical Sciences: Review and Research',
  'International Journal of Pharmacological Research', 'International Journal of Pharmacology and Clinical Sciences',
  'International Journal of Pharmacy and Biological Sciences', 'International Journal of Pharmacy and Technology',
  'International Journal of Physical Medicine & Rehabilitation',
  'International Journal of Research and Development in Pharmacy & Life Sciences',
  'International Journal of Research in Ayurveda and Pharmacy',
  'International Journal of Scientific Research in Dental and Medical Sciences',
  'International Journal on General Medicine', 'International Research Journal of Pharmacy',
  'Iranian Journal of Pharmaceutical Research', 'Journal of Advanced Pharmaceutical Technology & Research',
  'Journal of AIDS and HIV Infections', 'Journal of Alcoholism & Drug Dependence',
  'Journal of Anaesthesiology Clinical Pharmacology', 'Journal of Analytical Research in Clinical Medicine',
  'Journal of Anesthesia and Patient Care', 'Journal of Applied Pharmaceutical Science',
  'Journal of Applied Pharmaceutical Sciences', 'Journal of Applied Pharmacy',
  'Journal of Arthropod-Borne Diseases', 'Journal of Asthma and Allergy',
  'Journal of Basic & Clinical Pharmacy', 'Journal of Basic and Applied Pharmaceutical Sciences',
  'Journal of Bioanalysis & Biomedicine', 'Journal of Biomedicine and Translational Research',
  'Journal of Blood Disorders & Transfusion', 'Journal of Blood Medicine',
  'Journal of Cancer Research in Therapeutics', 'Journal of Cancer Science & Therapy',
  'Journal of Cancer Science and Clinical Oncology', 'Journal of Cancer Therapeutics & Research',
  'Journal of Carcinogenesis', 'Journal of Carcinogenesis & Mutagenesis',
  'Journal of Cellular and Molecular Pharmacology', 'Journal of Chinese Pharmaceutical Sciences',
  'Journal of Clinical & Experimental Pharmacology', 'Journal of Clinical Chemistry and Laboratory Medicine',
  'Journal of Clinical Medicine', 'Journal of Clinical Ophthalmology and Research',
  'Journal of Community Hospital Internal Medicine Perspectives',
  'Journal of Community Medicine & Health Education', 'Journal of Current Chemical and Pharmaceutical Sciences',
  'Journal of Dental Pathology and Medicine', 'Journal of Dentistry and Oral Care Medicine',
  'Journal of Developing Drugs', 'Journal of Diabetic Complications & Medicine', 'Journal of Drug Delivery',
  'Journal of Drug Metabolism & Toxicology', 'Journal of Ethnopharmacology',
  'Journal of Evidence Based Medicine and Healthcare', 'Journal of Experimental Pharmacology',
  'Journal of Fertilization: In Vitro - IVF-Worldwide, Reproductive Medicine, Genetics & Stem Cell Biology',
  'Journal of Food and Drug Analysis', 'Journal of Forensic Medicine',
  'Journal of Forensic Toxicology & Pharmacology', 'Journal of Healthcare Leadership',
  'Journal of Herbal Drugs', 'Journal of Immunology & Infectious Disease',
  'Journal of In Silico & In Vitro Pharmacology', 'Journal of Infection in Developing Countries',
  'Journal of Infectious Diseases & Preventive Medicine', 'Journal of Infectious Diseases and Medicine',
  'Journal of Korean Society for Clinical Pharmacology and Therapeutics',
  'Journal of Management and Pharmacy Practice', 'Journal of Medical Toxicology and Clinical Forensic Medicine',
  'Journal of Molecular Pharmaceutics & Organic Process Research',
  'Journal of Nanomedicine & Biotherapeutic Discovery', 'Journal of Nanomedicine & Nanotechnology',
  'Journal of Neuroscience and Neuropharmacology', 'Journal of Nuclear Medicine & Radiation Therapy',
  'Journal of Nutrition and Health Sciences', 'Journal of Obesity and Overweight',
  'Journal of Occupational Medicine and Toxicology', 'Journal of Oncology Medicine & Practice',
  'Journal of Ophthalmology', 'Journal of Orthopaedics and Allied Sciences', 'Journal of Osteoporosis',
  'Journal of Paediatric Medicine & Surgery', 'Journal of Pain Management & Medicine',
  'Journal of Palliative Care & Medicine', 'Journal of Pediatric Neurology and Medicine',
  'Journal of Perioperative Medicine', 'Journal of Personalized Medicine', 'Journal of Pharma Research',
  'Journal of Pharmaceutical Analysis', 'Journal of Pharmaceutical Care',
  'Journal of Pharmaceutical Care & Health Systems', 'Journal of Pharmaceutical Health Care and Sciences',
  'Journal of Pharmaceutical Microbiology', 'Journal of Pharmaceutical Negative Results',
  'Journal of Pharmaceutical Policy and Practice', 'Journal of Pharmaceutical Science and Bio scientific Research',
  'Journal of Pharmaceutical Sciences & Emerging Drugs', 'Journal of Pharmaceutics',
  'Journal of Pharmaceutics & Drug Delivery Research', 'Journal of Pharmaceutics and Drug Development',
  'Journal of Pharmacogenomics & Pharmacoproteomics', 'Journal of Pharmacognosy & Natural Products',
  'Journal of Pharmacokinetics & Experimental Therapeutics', 'Journal of Pharmacological Reports',
  'Journal of Pharmacological Sciences', 'Journal of Pharmacology & Clinical Toxicology',
  'Journal of Pharmacology & Pharmacotherapeutics', 'Journal of Pharmacovigilance',
  'Journal of Pharmacy & Pharmacognosy Research', 'Journal of Pharmacy and Bioallied Sciences',
  'Journal of Pharmacy and Pharmaceutical Sciences', 'Journal of Pharmacy Practice and Community Medicine',
  'Journal of Preventive Medicine', 'Journal of Pulmonary & Respiratory Medicine',
  'Journal of Pulmonary Medicine', 'Journal of Regenerative Medicine',
  'Journal of Research in Applied and Basic Medical Sciences', 'Journal of Research in Pharmacy Practice',
  'Journal of Respiration', 'Journal of Scientific Innovation in Medicine',
  'Journal of Sports Medicine & Doping Studies', 'Journal of Surgery and Emergency Medicine',
  'Journal of Surgery and Operative Care', 'Journal of Traditional Medicine & Clinical Naturopathy',
  'Journal of Tropical Diseases & Public Health', 'Journal of Tropical Pharmacy and Chemistry',
  'Journal of Vascular Medicine & Surgery', 'Journal of Veterinary Medicine and Allied Science',
  'Journal of Veterinary Medicine and Health', 'Journal of Xenobiotics', 'Journal of Young Pharmacists',
  'Kidney & Blood Pressure Research', 'Malaria Journal', 'Marine Drugs', 'Medical Sciences', 'Medicina',
  'Medicine in Drug Discovery', 'Medicines', 'Metabolites', 'Microbiology Research', 'Microorganisms',
  'Military Medical Research', 'Modern Medicine', 'Molecular Genetics and Metabolism Reports',
  'Molecular Medicine', 'National Journal of Physiology, Pharmacy and Pharmacology',
  'Neonatal and Pediatric Medicine', 'Neonatal Medicine', 'Occupational Medicine & Health Affairs', 'OHBM',
  'Organics', 'Osteology', 'Parasitologia', 'Pathogens', 'Pathophysiology',
  'Pediatric Emergency Care and Medicine', 'Pediatric Health, Medicine and Therapeutics', 'Pediatric Reports',
  'Pharmaceutica Analytica Acta', 'Pharmaceutical Analytical Chemistry',
  'Pharmaceutical and Biomedical Research', 'Pharmaceutical Bioprocessing', 'Pharmaceutical Regulatory Affairs',
  'Pharmaceutical Sciences', 'Pharmaceutical Technology in Hospital Pharmacy', 'Pharmaceuticals',
  'Pharmaceutics', 'Pharmacogenomics and Personalized Medicine', 'Pharmacology & Therapeutics',
  'Pharmacology and Clinical Pharmacy Research', 'Pharmacology and Pharmacy', 'Pharmacy', 'Pharmacy Practice',
  'Plasma', 'Radiation Medicine and Protection', 'Radiation Oncology',
  'Reproductive Biology and Endocrinology', 'Reproductive Medicine', 'Reproductive Medicine and Biology',
  'Research & Reviews in Pharmacy and Pharmaceutical Sciences',
  'Research & Reviews: Journal of Hospital and Clinical Pharmacy',
  'Research & Reviews: Journal of Pharmaceutical Analysis',
  'Research & Reviews: Journal of Pharmaceutics and Nanotechnology',
  'Research & Reviews: Journal of Pharmacognosy and Phytochemistry',
  'Research & Reviews: Journal of Pharmacology and Toxicological Studies',
  'Research and Reports in Neonatology', 'Research Journal of Pharmacognosy',
  'Robotic Surgery: Research and Reviews',
  'Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine', 'Scientia Pharmaceutica',
  'Sinusitis', 'Southern Med Review', 'Surgeries', 'The Journal of Headache and Pain',
  'The Moldovan Medical Journal', 'The Open Biomarkers Journal (Bentham)',
  'The Open Biotechnology Journal (Bentham)', 'The Open Infectious Diseases Journal',
  'The Open Medicinal Chemistry Journal (Bentham)', 'The Open Pain Journal (Bentham)',
  'Theoretical Biology and Medical Modelling', 'Therapeutics and Clinical Risk Management', 'Toxicology',
  'Toxicology Journal', 'Traditional Medicine Journal', 'Translational Biomedicine', 'Translational Medicine',
  'Translational Medicine Communications', 'Trauma Case Reports', 'Trends in Pharmaceutical Sciences',
  'Tropical Diseases, Travel Medicine and Vaccines', 'Tropical Journal of Pharmaceutical Research',
  'Tropical Medicine & Surgery', 'Tropical Medicine and Health', 'Tropical Medicine and Infectious Disease',
  'Universal Journal of Pharmacy', 'Urological Science', 'Vaccines',
  'Veterinary Medicine: Research and Reviews', 'Veterinary Sciences', 'Viruses', 'Vitae',
  "Women's Midlife Health", 'World Journal of Gastrointestinal Pharmacology and Therapeutics',
  'World Journal of Pharmacology and Toxicology', 'Zanco Journal of Medical Sciences',
];

function EJournalsContent() {
  return (
    <>
      <SectionHeader label="Library" title="E-Journals List (393 journals)" />
      <div className="rounded-xl border p-5" style={{ borderColor: `${primary}22` }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {EJOURNALS_LIST.map((journal, idx) => (
            <div key={idx} className="flex items-start gap-1.5 py-1 border-b" style={{ borderColor: `${primary}10` }}>
              <span className="font-display text-type-ui-sm font-semibold flex-shrink-0 w-7 text-right" style={{ color: primary }}>{idx + 1}.</span>
              <span className="font-body text-type-ui-sm text-[#333333] leading-snug">{journal}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DailyNewsPapersContent() {
  return (
    <>
      <SectionHeader label="Library" title="Daily Newspapers" />
      <p className="font-body text-type-body text-[#474747] mb-8 max-w-[720px]">
        The GRCP Library subscribes to the following newspapers. Physical copies are available in the library reading room.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[760px]">
        {NEWSPAPERS.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="rounded-xl p-5 border flex items-center gap-3 hover:shadow-sm transition-shadow" style={{ borderColor: `${primary}18`, backgroundColor: '#FAFAFA' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${primary}10` }}>
              <svg className="w-5 h-5" style={{ color: primary }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
            </div>
            <p className="font-display font-semibold text-type-body" style={{ color: primary }}>{p.name}</p>
          </a>
        ))}
      </div>
    </>
  );
}

const PROG_BOOK_STATS = [
  { programme: 'B.Pharmacy',                            volumes: '11,760', titles: '1,096', journals: '195' },
  { programme: 'M.Pharm – Pharmaceutics',               volumes: '583',    titles: '200',   journals: '55' },
  { programme: 'M.Pharm – Pharmaceutical Analysis',     volumes: '598',    titles: '302',   journals: '60' },
  { programme: 'M.Pharm – Pharmacology',                volumes: '438',    titles: '223',   journals: '101' },
  { programme: 'Total',                                  volumes: '13,379', titles: '1,821', journals: '411' },
];

const NATIONAL_JOURNALS = [
  { name: 'CIMS',                                                         freq: 'Quarterly' },
  { name: 'Competition Success Review',                                    freq: 'Monthly' },
  { name: 'Resonance',                                                     freq: 'Monthly' },
  { name: 'Indian Journal of Pharmaceutical Educational Research (IJPER)', freq: 'Quarterly' },
  { name: 'Future Journal of Pharmaceutical Sciences',                     freq: 'Quarterly' },
  { name: 'Pharma Times',                                                  freq: 'Monthly' },
  { name: 'International Journal of Green Pharmacy (IJGP)',                freq: 'Quarterly' },
  { name: 'Asian Journal of Pharmaceutics (AJP)',                          freq: 'Quarterly' },
  { name: 'The Indian Journal of Hospital Pharmacy',                       freq: 'Bimonthly' },
  { name: 'International Journal of Phytopharmacology',                    freq: 'Quarterly' },
  { name: 'Journal of Scientific & Industrial Research',                   freq: 'Monthly' },
  { name: 'Indian Journal of Chemistry',                                   freq: 'Monthly' },
  { name: 'Indian Journal of Experimental Biology',                        freq: 'Monthly' },
  { name: 'Indian Journal of Biochemistry & Biophysics',                   freq: 'Monthly' },
  { name: 'Indian Journal of Traditional Knowledge',                       freq: 'Quarterly' },
  { name: 'Indian Journal of Natural Products and Resources',              freq: 'Quarterly' },
  { name: 'Asian Journal of Pharmaceutical Research',                      freq: 'Quarterly' },
  { name: 'Asian Journal of Research in Chemistry',                        freq: 'Bimonthly' },
  { name: 'Indian Journal of Physiology & Pharmacology',                   freq: 'Quarterly' },
  { name: 'International Journal of Applied Pharmaceutics',                freq: 'Bimonthly' },
  { name: 'International Journal of Experimental Pharmacology',            freq: 'Half Yearly' },
  { name: 'Pharma Analysis & Quality Assurance',                           freq: 'Quarterly' },
  { name: 'Inventi Impact: Cosmaceuticals',                                freq: 'Quarterly' },
  { name: 'DELNET Online e-Journals',                                      freq: 'Yearly' },
];

function LibraryStatisticsContent() {
  const stats = [
    { label: 'Volumes',                  value: '13,379' },
    { label: 'Titles',                   value: '1,821' },
    { label: 'National Print Journals',  value: '24' },
    { label: 'International e-Journals', value: '380' },
  ];
  return (
    <>
      <SectionHeader label="Library" title="Library Statistics 2025–26" />

      {/* Stat pills */}
      <div className="flex flex-wrap gap-3 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full border" style={{ borderColor: `${primary}25`, backgroundColor: `${primary}07` }}>
            <span className="font-display font-bold text-type-body-lg" style={{ color: primary }}>{s.value}</span>
            <span className="font-display text-type-cap text-[#6B7280]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Programme-wise Book Statistics */}
      <h3 className="font-display font-semibold text-type-body-lg mb-4" style={{ color: primary }}>Programme-wise Book Statistics 2025-26</h3>
      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] mb-10">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr style={{ backgroundColor: accent }}>
              {['Programme', 'Volumes', 'Titles', 'Journals'].map((col) => (
                <th key={col} className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROG_BOOK_STATS.map((row, i) => (
              <tr key={row.programme} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="font-body text-type-body-xs px-5 py-3.5" style={{ color: row.programme === 'Total' ? primary : '#374151', fontWeight: row.programme === 'Total' ? 700 : 400 }}>{row.programme}</td>
                <td className="font-body text-type-body-xs px-5 py-3.5" style={{ color: row.programme === 'Total' ? primary : '#374151', fontWeight: row.programme === 'Total' ? 700 : 400 }}>{row.volumes}</td>
                <td className="font-body text-type-body-xs px-5 py-3.5" style={{ color: row.programme === 'Total' ? primary : '#374151', fontWeight: row.programme === 'Total' ? 700 : 400 }}>{row.titles}</td>
                <td className="font-body text-type-body-xs px-5 py-3.5" style={{ color: row.programme === 'Total' ? primary : '#374151', fontWeight: row.programme === 'Total' ? 700 : 400 }}>{row.journals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* National Print Journals */}
      <h3 className="font-display font-semibold text-type-body-lg mb-4" style={{ color: primary }}>National Print Journals</h3>
      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr style={{ backgroundColor: accent }}>
              <th className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide w-8">#</th>
              <th className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide">Name</th>
              <th className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {NATIONAL_JOURNALS.map((j, i) => (
              <tr key={j.name} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="font-body text-type-ui-sm px-5 py-3 text-[#9CA3AF]">{i + 1}</td>
                <td className="font-body text-type-body-xs px-5 py-3 text-[#374151]">{j.name}</td>
                <td className="font-body text-type-body-xs px-5 py-3 text-[#374151]">{j.freq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const TITLE_VOLUMES_DATA = [
  { acc: '12841-42',  title: 'The Handbook of Clinically Tested Herbal Remedies, Vol-1',            author: 'Barrett Marolyn',          subject: 'Pharmacognosy',           edition: '1',  publisher: 'CBS',                  year: '2007', copies: 2 },
  { acc: '12843-44',  title: 'Natural Products: Chemistry & Bioactivity',                            author: 'Kapoor V K',               subject: 'Chemistry',               edition: '1',  publisher: 'Vallabh Prakashan',     year: '2024', copies: 2 },
  { acc: '12845-64',  title: 'Herbal Drug Technology',                                               author: 'Sharada Deore L',          subject: 'Pharmacognosy',           edition: '1',  publisher: 'PharmaMed Press',       year: '2023', copies: 20 },
  { acc: '12865-67',  title: 'Principles of Pharmacology, 4/ed',                                    author: 'Sharma H L',               subject: 'Pharmacology',            edition: '4',  publisher: 'Paras',                 year: '2023', copies: 3 },
  { acc: '12868',     title: 'Lippincott Illustrated Review: Pharmacology, 2/ed',                   author: 'Karen Whalen',             subject: 'Pharmacology',            edition: '2',  publisher: 'Wolters Kluwer',        year: '2023', copies: 1 },
  { acc: '12869-83',  title: 'Hand Book of Experimental Pharmacology, 4/ed',                        author: 'Kulkarni S K',             subject: 'Pharmacology',            edition: '4',  publisher: 'Vallabh Prakashan',     year: '2023', copies: 15 },
  { acc: '12884-88',  title: 'Social and Preventive Pharmacy',                                       author: 'Jain N K',                 subject: 'Pharmacology',            edition: '1',  publisher: 'CBS',                  year: '2023', copies: 5 },
  { acc: '12889-93',  title: 'Industrial Pharmacy-II',                                              author: 'Tripathi D K',             subject: 'Pharmaceutics',           edition: '1',  publisher: 'PharmaMed Press',       year: '2022', copies: 5 },
  { acc: '12894-98',  title: 'Biopharmaceutics & Pharmacokinetics, 2ed',                            author: 'Venkateswarlu',            subject: 'Pharmaceutics',           edition: '2',  publisher: 'BSP',                  year: '2024', copies: 5 },
  { acc: '12899',     title: 'Computer-Aided Applications in Pharmaceutical Technology, 2ed',       author: 'Jelena Djuris',            subject: 'Pharmaceutics',           edition: '2',  publisher: 'Wood Head',             year: '2024', copies: 1 },
  { acc: '12900',     title: 'Cosmetic Formulation Principles and Practice',                         author: 'Heather Benson',           subject: 'Pharmaceutics',           edition: '1',  publisher: 'CRC',                  year: '2019', copies: 1 },
  { acc: '12901-05',  title: 'Advanced Biopharmaceutics and Pharmacokinetics, 1ed',                 author: 'Subrahmanyam C V S',       subject: 'Pharmaceutics',           edition: '1',  publisher: 'Vallabh Prakashan',     year: '2024', copies: 5 },
  { acc: '12906-10',  title: 'Modern Pharmaceutics: The Formulation Approach, 1ed',                 author: 'Subrahmanyam C V S',       subject: 'Pharmaceutics',           edition: '1',  publisher: 'Vallabh Prakashan',     year: '2024', copies: 5 },
  { acc: '12911-12',  title: 'Handbook on Cosmetics: Processes, Formulae with Testing Methods, 1ed', author: 'Singh S K',              subject: 'Pharmaceutics',           edition: '1',  publisher: 'APBP',                 year: '2022', copies: 2 },
  { acc: '12913-14',  title: 'Herbal Cosmetics Handbook, 4ed',                                      author: 'Himadri Panda',            subject: 'Pharmaceutics',           edition: '4',  publisher: 'APBP',                 year: '2021', copies: 2 },
  { acc: '12915-19',  title: 'Drug Regulatory Affairs',                                              author: 'Papiya Biogoniya',         subject: 'Pharmaceutics',           edition: '1',  publisher: 'CBS',                  year: '2020', copies: 5 },
  { acc: '12920-21',  title: 'Microwave Assisted Chemistry Experiments',                             author: 'Prashantha Kumar',         subject: 'Pharmaceutical Analysis', edition: '1',  publisher: 'PharmaMed Press',       year: '2022', copies: 2 },
  { acc: '12922-26',  title: 'Organic Chemistry, 7/ed',                                             author: 'Morrison Robert Thornton', subject: 'Chemistry',               edition: '7',  publisher: 'Pearson',               year: '2023', copies: 5 },
  { acc: '12927-36',  title: 'Textbook of Pharmaceutical Quality Assurance',                         author: 'Tripathi D K',             subject: 'Pharmaceutical Analysis', edition: '1',  publisher: 'Vallabh Prakashan',     year: '2021', copies: 10 },
  { acc: '12937-51',  title: 'Instrumental Methods of Analysis',                                     author: 'Badwaik Hemant',           subject: 'Pharmaceutical Analysis', edition: '1',  publisher: 'Vallabh Prakashan',     year: '2021', copies: 15 },
  { acc: '12952-56',  title: 'Modern Methods of Pharmaceutical Analysis, Vol-1, 2ed',               author: 'Beckett A H',              subject: 'Pharmaceutical Analysis', edition: '2',  publisher: 'CBS',                  year: '2021', copies: 5 },
  { acc: '12957-61',  title: 'Practical Pharmaceutical Chemistry, Part-1, 4ed',                     author: 'Beckett A H',              subject: 'Pharmaceutical Analysis', edition: '4',  publisher: 'CBS',                  year: '2021', copies: 5 },
  { acc: '12962-66',  title: 'Pharmaceutical Analysis: A Textbook for Pharmacy Students and Pharmaceutical Chemists', author: 'Watson D G', subject: 'Pharmaceutical Analysis', edition: '3', publisher: 'Elsevier',            year: '2022', copies: 5 },
  { acc: '12967-71',  title: 'Pharmaceutical Analysis, 4ed',                                        author: 'Kasture A V',              subject: 'Pharmaceutical Analysis', edition: '4',  publisher: 'Nirali Prakashan',      year: '2021', copies: 5 },
  { acc: '12972-76',  title: 'Quality Assurance in Analytical Chemistry, 2ed',                      author: 'Funk W',                   subject: 'Pharmaceutical Analysis', edition: '2',  publisher: 'Wiley-VCH',            year: '2007', copies: 5 },
  { acc: '12977-81',  title: 'Medicinal Natural Products: A Biosynthetic Approach, 3ed',            author: 'Dewick Paul M',            subject: 'Pharmacognosy',           edition: '3',  publisher: 'Wiley',                 year: '2009', copies: 5 },
  { acc: '12982-86',  title: 'Pharmacognosy and Phytochemistry-II',                                 author: 'Kokate C K',               subject: 'Pharmacognosy',           edition: '1',  publisher: 'Nirali Prakashan',      year: '2023', copies: 5 },
  { acc: '12987-91',  title: 'Phytotherapy: A Quick Reference to Herbal Medicine',                  author: 'Morazzoni P',              subject: 'Pharmacognosy',           edition: '1',  publisher: 'Springer',              year: '2004', copies: 5 },
  { acc: '12992-96',  title: 'Text Book of Pharmacognosy',                                          author: 'Trease G E',               subject: 'Pharmacognosy',           edition: '15', publisher: 'Elsevier',              year: '2002', copies: 5 },
  { acc: '12997-13001', title: 'Biochemistry, 9ed',                                                 author: 'Stryer Lubert',            subject: 'Biochemistry',            edition: '9',  publisher: 'Macmillan',             year: '2019', copies: 5 },
  { acc: '13002-06',  title: "Harper's Illustrated Biochemistry, 31ed",                             author: 'Victor W Rodwell',         subject: 'Biochemistry',            edition: '31', publisher: 'McGraw Hill',           year: '2018', copies: 5 },
  { acc: '13007-11',  title: 'Textbook of Biochemistry for Medical Students, 9ed',                  author: 'DM Vasudevan',             subject: 'Biochemistry',            edition: '9',  publisher: 'Jaypee',                year: '2019', copies: 5 },
  { acc: '13012-16',  title: 'Lehninger Principles of Biochemistry, 7ed',                           author: 'Nelson David L',           subject: 'Biochemistry',            edition: '7',  publisher: 'Macmillan',             year: '2017', copies: 5 },
  { acc: '13017-21',  title: 'Microbiology: An Introduction, 13ed',                                 author: 'Tortora G J',              subject: 'Microbiology',            edition: '13', publisher: 'Pearson',               year: '2019', copies: 5 },
  { acc: '13022-26',  title: "Prescott's Microbiology, 11ed",                                       author: 'Willey Joanne M',          subject: 'Microbiology',            edition: '11', publisher: 'McGraw Hill',           year: '2020', copies: 5 },
  { acc: '13027-31',  title: 'Pharmaceutical Microbiology, 8ed',                                    author: 'Hugo W B',                 subject: 'Microbiology',            edition: '8',  publisher: 'Wiley-Blackwell',       year: '2011', copies: 5 },
  { acc: '13032-36',  title: "Ansel's Pharmaceutical Dosage Forms and Drug Delivery Systems, 11ed", author: 'Loyd Allen Jr',           subject: 'Pharmaceutics',           edition: '11', publisher: 'Wolters Kluwer',        year: '2018', copies: 5 },
  { acc: '13037-41',  title: 'Remington: The Science and Practice of Pharmacy, 22ed',               author: 'Loyd Allen Jr',            subject: 'Pharmaceutics',           edition: '22', publisher: 'Pharmaceutical Press',   year: '2013', copies: 5 },
  { acc: '13042-46',  title: 'Theory and Practice of Industrial Pharmacy, 4ed',                     author: 'Lachman Leon',             subject: 'Pharmaceutics',           edition: '4',  publisher: 'CBS',                  year: '2013', copies: 5 },
  { acc: '13047-51',  title: "Goodman & Gilman's: The Pharmacological Basis of Therapeutics, 13ed", author: 'Brunton Laurence L',      subject: 'Pharmacology',            edition: '13', publisher: 'McGraw Hill',           year: '2018', copies: 5 },
  { acc: '13052-56',  title: 'Clinical Pharmacology, 11ed',                                         author: 'Bennett P N',              subject: 'Pharmacology',            edition: '11', publisher: 'Churchill Livingstone',  year: '2012', copies: 5 },
  { acc: '13057-61',  title: "Katzung's Basic and Clinical Pharmacology, 15ed",                     author: 'Trevor Anthony J',         subject: 'Pharmacology',            edition: '15', publisher: 'McGraw Hill',           year: '2021', copies: 5 },
  { acc: '13062-66',  title: 'Essentials of Medical Pharmacology, 8ed',                             author: 'Tripathi K D',             subject: 'Pharmacology',            edition: '8',  publisher: 'Jaypee',                year: '2019', copies: 5 },
  { acc: '13067-71',  title: 'Organic Chemistry, 12ed',                                             author: 'McMurry John',             subject: 'Chemistry',               edition: '12', publisher: 'Cengage',               year: '2020', copies: 5 },
  { acc: '13072-76',  title: "March's Advanced Organic Chemistry, 7ed",                             author: 'March Jerry',              subject: 'Chemistry',               edition: '7',  publisher: 'Wiley',                 year: '2013', copies: 5 },
  { acc: '13077-81',  title: 'Medicinal Chemistry, 4ed',                                            author: 'Burger Alfred',            subject: 'Chemistry',               edition: '4',  publisher: 'John Wiley',            year: '2010', copies: 5 },
  { acc: '13082-86',  title: "Wilson and Gisvold's Textbook of Organic Medicinal and Pharmaceutical Chemistry, 12ed", author: 'Block John H', subject: 'Chemistry', edition: '12', publisher: 'Lippincott',          year: '2011', copies: 5 },
  { acc: '13087-91',  title: 'Introduction to Spectroscopy, 5ed',                                   author: 'Pavia Donald L',           subject: 'Pharmaceutical Analysis', edition: '5',  publisher: 'Cengage',               year: '2015', copies: 5 },
  { acc: '13092-96',  title: 'Principles of Instrumental Analysis, 7ed',                            author: 'Skoog Douglas A',          subject: 'Pharmaceutical Analysis', edition: '7',  publisher: 'Cengage',               year: '2018', copies: 5 },
  { acc: '13097-01',  title: 'Quantitative Chemical Analysis, 10ed',                                author: 'Harris Daniel C',          subject: 'Pharmaceutical Analysis', edition: '10', publisher: 'Macmillan',             year: '2020', copies: 5 },
  { acc: '13102-06',  title: 'Clinical Pharmacy and Therapeutics, 6ed',                             author: 'Walker Roger',             subject: 'Pharmacy Practice',       edition: '6',  publisher: 'Churchill Livingstone',  year: '2014', copies: 5 },
  { acc: '13107-11',  title: 'Applied Therapeutics: The Clinical Use of Drugs, 11ed',               author: 'Alldredge Brian K',        subject: 'Pharmacy Practice',       edition: '11', publisher: 'Wolters Kluwer',        year: '2018', copies: 5 },
  { acc: '13112-16',  title: 'Pharmacotherapy: A Pathophysiologic Approach, 11ed',                  author: 'DiPiro Joseph T',          subject: 'Pharmacy Practice',       edition: '11', publisher: 'McGraw Hill',           year: '2020', copies: 5 },
  { acc: '13117-21',  title: 'Anatomy and Physiology for Health Professionals, 2ed',                author: 'Colbert Bruce J',          subject: 'Anatomy & Physiology',    edition: '2',  publisher: 'Pearson',               year: '2015', copies: 5 },
  { acc: '13122-26',  title: 'Human Anatomy & Physiology, 11ed',                                    author: 'Marieb Elaine N',          subject: 'Anatomy & Physiology',    edition: '11', publisher: 'Pearson',               year: '2019', copies: 5 },
  { acc: '13127-31',  title: 'Anatomy and Physiology in Health and Illness, 12ed',                  author: 'Waugh Anne',               subject: 'Anatomy & Physiology',    edition: '12', publisher: 'Churchill Livingstone',  year: '2014', copies: 5 },
  { acc: '13132-36',  title: 'Pharmaceutical Jurisprudence, 1ed',                                   author: 'Mittal B K',               subject: 'Jurisprudence',           edition: '1',  publisher: 'CBS',                  year: '2020', copies: 5 },
  { acc: '13137-41',  title: 'Drug Store and Business Management, 1ed',                             author: 'Mehta R M',                subject: 'Jurisprudence',           edition: '1',  publisher: 'CBS',                  year: '2020', copies: 5 },
  { acc: '13142-46',  title: 'Dispensing Pharmacy, 1ed',                                            author: 'Mehta R M',                subject: 'Pharmacy Practice',       edition: '1',  publisher: 'CBS',                  year: '2021', copies: 5 },
  { acc: '13147-51',  title: 'Hospital Pharmacy, 1ed',                                              author: 'Hassan W E',               subject: 'Pharmacy Practice',       edition: '1',  publisher: 'CBS',                  year: '2021', copies: 5 },
  { acc: '13152-56',  title: 'Biopharmaceutics and Pharmacokinetics, 1ed',                          author: 'Brahmankar D M',           subject: 'Pharmaceutics',           edition: '1',  publisher: 'Vallabh Prakashan',     year: '2022', copies: 5 },
  { acc: '13157-61',  title: 'Controlled Drug Delivery: Fundamentals and Applications, 2ed',        author: 'Robinson J R',             subject: 'Pharmaceutics',           edition: '2',  publisher: 'Marcel Dekker',         year: '2008', copies: 5 },
  { acc: '13162-66',  title: 'Pharmaceutical Preformulation and Formulation, 2ed',                  author: 'Gibson Mark',              subject: 'Pharmaceutics',           edition: '2',  publisher: 'CRC Press',             year: '2009', copies: 5 },
  { acc: '13167-71',  title: 'Pharmaceutical Statistics: Practical and Clinical Applications, 5ed', author: 'Bolton Sanford',           subject: 'Pharmaceutical Analysis', edition: '5',  publisher: 'Marcel Dekker',         year: '2009', copies: 5 },
  { acc: '13172-76',  title: 'Statistics for Analytical Chemistry, 6ed',                            author: 'Miller Jane C',            subject: 'Pharmaceutical Analysis', edition: '6',  publisher: 'Pearson',               year: '2018', copies: 5 },
  { acc: '13177-81',  title: 'Drug Information: A Guide for Pharmacists, 6ed',                      author: 'Malone Patrick M',         subject: 'Pharmacy Practice',       edition: '6',  publisher: 'McGraw Hill',           year: '2018', copies: 5 },
  { acc: '13182-86',  title: 'Physical Pharmacy: Physical Chemical Principles in the Pharmaceutical Sciences, 4ed', author: 'Martin Alfred N', subject: 'Pharmaceutics', edition: '4', publisher: 'Lippincott',          year: '2011', copies: 5 },
  { acc: '13187-91',  title: "Aulton's Pharmaceutics: The Design and Manufacture of Medicines, 5ed", author: 'Aulton Michael E',       subject: 'Pharmaceutics',           edition: '5',  publisher: 'Elsevier',              year: '2018', copies: 5 },
  { acc: '13192-96',  title: 'Pharmaceutical Compounding and Dispensing, 2ed',                      author: 'Marriott John F',          subject: 'Pharmaceutics',           edition: '2',  publisher: 'Pharmaceutical Press',   year: '2010', copies: 5 },
  { acc: '13197-01',  title: 'Spectroscopy of Organic Compounds, 6ed',                              author: 'Silverstein Robert M',     subject: 'Chemistry',               edition: '6',  publisher: 'Wiley',                 year: '2014', copies: 5 },
  { acc: '13202-06',  title: 'Pharmacology, 5ed',                                                   author: 'Rang H P',                 subject: 'Pharmacology',            edition: '5',  publisher: 'Churchill Livingstone',  year: '2007', copies: 5 },
  { acc: '13207-11',  title: 'Clinical Pharmacokinetics: Concepts and Applications, 3ed',           author: 'Rowland Malcolm',          subject: 'Pharmaceutics',           edition: '3',  publisher: 'Lippincott',            year: '1995', copies: 5 },
  { acc: '13212-16',  title: 'Drug Metabolism: Chemical and Enzymatic Aspects, 1ed',                author: 'Testa Bernard',            subject: 'Pharmacology',            edition: '1',  publisher: 'Marcel Dekker',         year: '1976', copies: 5 },
  { acc: '13217-21',  title: 'Introduction to Pharmacokinetics and Pharmacodynamics, 1ed',          author: 'Tozer Thomas N',           subject: 'Pharmaceutics',           edition: '1',  publisher: 'Lippincott',            year: '2006', copies: 5 },
  { acc: '13222-26',  title: 'Plant Tissue Culture, 3ed',                                           author: 'Razdan M K',               subject: 'Pharmacognosy',           edition: '3',  publisher: 'Oxford & IBH',          year: '2003', copies: 5 },
  { acc: '13227-31',  title: 'Pharmacognosy, 16ed',                                                 author: 'Trease G E',               subject: 'Pharmacognosy',           edition: '16', publisher: 'Elsevier',              year: '2009', copies: 5 },
  { acc: '13232-36',  title: 'Phytochemical Methods, 3ed',                                          author: 'Harborne J B',             subject: 'Pharmacognosy',           edition: '3',  publisher: 'Springer',              year: '1998', copies: 5 },
  { acc: '13237-41',  title: 'Principles and Practice of Phytotherapy, 2ed',                        author: 'Mills Simon',              subject: 'Pharmacognosy',           edition: '2',  publisher: 'Churchill Livingstone',  year: '2013', copies: 5 },
  { acc: '13242-46',  title: 'Plant Secondary Metabolites, Vol-1, 1ed',                             author: 'Crozier Alan',              subject: 'Pharmacognosy',           edition: '1',  publisher: 'Blackwell',             year: '2006', copies: 5 },
  { acc: '13247-51',  title: 'Stereochemistry of Organic Compounds, 1ed',                           author: 'Eliel Ernest L',            subject: 'Chemistry',               edition: '1',  publisher: 'Wiley',                 year: '1994', copies: 5 },
  { acc: '13252-56',  title: 'Introduction to Medicinal Chemistry, 6ed',                            author: 'Graham Patrick',           subject: 'Chemistry',               edition: '6',  publisher: 'Oxford',                year: '2017', copies: 5 },
  { acc: '13257-61',  title: 'Pharmaceutical Chemistry, Vol-1, 1ed',                                author: 'Ashutosh Kar',             subject: 'Chemistry',               edition: '1',  publisher: 'New Age International', year: '2017', copies: 5 },
  { acc: '13262-66',  title: 'Drug Design: A Casebook and Introduction, 1ed',                       author: 'Perun Thomas J',           subject: 'Chemistry',               edition: '1',  publisher: 'Marcel Dekker',         year: '1989', copies: 5 },
  { acc: '13267-71',  title: "Vogel's Textbook of Quantitative Chemical Analysis, 5ed",             author: 'Jeffery G H',              subject: 'Pharmaceutical Analysis', edition: '5',  publisher: 'Longman',               year: '2002', copies: 5 },
  { acc: '13272-76',  title: "Clarke's Analysis of Drugs and Poisons, 4ed",                         author: 'Moffat A C',               subject: 'Pharmaceutical Analysis', edition: '4',  publisher: 'Pharmaceutical Press',   year: '2011', copies: 5 },
  { acc: '13277-81',  title: 'A Practical Guide to Quality Management in Clinical Trial Research, 1ed', author: 'Morin Patricia Grob',  subject: 'Pharmaceutical Analysis', edition: '1',  publisher: 'CRC Press',             year: '2007', copies: 5 },
  { acc: '13282-86',  title: 'ICH Quality Guidelines: An Implementation Guide, 1ed',                author: 'Teasdale Andrew',          subject: 'Pharmaceutical Analysis', edition: '1',  publisher: 'Wiley',                 year: '2017', copies: 5 },
  { acc: '13287-91',  title: 'Regulatory Affairs in the Pharmaceutical Industry, 1ed',              author: 'Gad Shayne C',             subject: 'Pharmaceutics',           edition: '1',  publisher: 'Academic Press',        year: '2008', copies: 5 },
];

function TitleVolumesContent() {
  return (
    <>
      <SectionHeader label="Library" title="Titles &amp; Volumes 2025–26" />
      <p className="font-body text-type-body text-[#474747] mb-2 max-w-[900px]">
        New books added to the GRCP Library collection in 2025-26.
      </p>
      <p className="font-body text-type-ui-sm text-[#6B7280] mb-6 max-w-[900px]">
        Total: 83 new titles added in 2025-26 (539 total volumes)
      </p>
      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr style={{ backgroundColor: accent }}>
              {['Acc. No.', 'Title', 'Author', 'Subject', 'Edition', 'Publisher', 'Year', 'Copies'].map((col) => (
                <th key={col} className="text-left font-display font-semibold text-type-label text-white px-4 py-3 tracking-wide whitespace-nowrap">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TITLE_VOLUMES_DATA.map((row, i) => (
              <tr key={row.acc} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="font-body text-type-cap px-4 py-3 whitespace-nowrap" style={{ color: primary, fontWeight: 600 }}>{row.acc}</td>
                <td className="font-body text-type-ui-sm px-4 py-3 text-[#374151] max-w-[280px]">{row.title}</td>
                <td className="font-body text-type-ui-sm px-4 py-3 text-[#374151] whitespace-nowrap">{row.author}</td>
                <td className="font-body text-type-cap px-4 py-3 whitespace-nowrap text-[#6B7280]">{row.subject}</td>
                <td className="font-body text-type-ui-sm px-4 py-3 text-center text-[#374151]">{row.edition}</td>
                <td className="font-body text-type-cap px-4 py-3 whitespace-nowrap text-[#374151]">{row.publisher}</td>
                <td className="font-body text-type-ui-sm px-4 py-3 text-[#374151]">{row.year}</td>
                <td className="font-body text-type-ui-sm px-4 py-3 text-center font-semibold" style={{ color: primary }}>{row.copies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const LIBRARY_SUB_PAGES = {
  'information-center': <InformationCenterContent />,
  'e-journals':         <EJournalsContent />,
  'daily-news-papers':  <DailyNewsPapersContent />,
  statistics:           <LibraryStatisticsContent />,
  'title-volumes':      <TitleVolumesContent />,
};

// ── Section registry ──────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'syllabus-b-pharmacy',  path: '/academics/syllabus-b-pharmacy',  label: 'B.Pharmacy Syllabus',       content: <SyllabusContent /> },
  { id: 'syllabus-m-pharmacy',  path: '/academics/syllabus-m-pharmacy',  label: 'M.Pharmacy Syllabus',       content: <SyllabusContent /> },
  { id: 'academic-calendar',    path: '/academics/academic-calendar',    label: 'Academic Calendar 2025–26', content: <CalendarContent /> },
  { id: 'time-tables',          path: '/academics/time-tables',          label: 'Time Tables',               content: <TimetablesContent /> },
  { id: 'library',              path: '/academics/library',              label: 'Library @ GRCP',            content: <LibraryContent /> },
  { id: 'faculty',              path: '/academics/faculty',              label: 'Faculty List',              content: <FacultyContent /> },
  { id: 'non-teaching-staff',   path: '/academics/non-teaching-staff',   label: 'Non-Teaching Staff',        content: <NonTeachingContent /> },
];

// ── Page component ────────────────────────────────────────────────────────────

export default function AcademicsPage() {
  const { section, sub } = useParams();
  const activeId = section || 'syllabus-b-pharmacy';

  // Library sub-page routing
  if (activeId === 'library' && sub && LIBRARY_SUB_PAGES[sub]) {
    const subLabels = {
      'information-center': 'Information Center',
      'e-journals':         'E-Journals List',
      'daily-news-papers':  'Daily Newspapers',
      statistics:           'Statistics 2025–26',
      'title-volumes':      'Titles & Volumes 2025–26',
    };
    const librarySection = {
      label: subLabels[sub] || sub,
      content: LIBRARY_SUB_PAGES[sub],
    };
    return (
      <AdminSidebarLayout
        college={college}
        pageTitle="Library @ GRCP"
        pageSubtitle="Knowledge resources for students, faculty, and researchers"
        pageBreadcrumb={['Academics', 'Library', librarySection.label]}
        sections={SECTIONS}
        currentSection={librarySection}
      />
    );
  }

  const currentSection = SECTIONS.find((s) => s.id === activeId);

  if (!currentSection) {
    return <Navigate to="/academics/syllabus-b-pharmacy" replace />;
  }

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle="Academics"
      pageSubtitle="Syllabus, academic calendar, timetables, library, and faculty information"
      pageBreadcrumb={['Academics', currentSection.label]}
      sections={SECTIONS}
      currentSection={currentSection}
    />
  );
}
