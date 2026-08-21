import { useState } from 'react';
import { useParams } from 'react-router-dom';
import college from '../theme';
import { idmcIntro } from '../data/administrationData';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';
import AdminSidebarLayout from '../components/AdminSidebarLayout';

const pc = college.primaryColor;   // #2D7A50
const ac = college.greenAccent;    // #C72235

// ── Section config ────────────────────────────────────────────────────────────

const sectionConfig = {
  chairman: {
    title: 'Chairman',
    subtitle: 'Leadership & Vision at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Chairman'],
  },
  'vice-president': {
    title: 'Vice President',
    subtitle: 'Leadership & Vision at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Vice President'],
  },
  principal: {
    title: 'Principal',
    subtitle: 'Academic Leadership at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Principal'],
  },
  'governing-body': {
    title: 'Governing Body',
    subtitle: 'Governance structure of Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Governing Body'],
  },
  idmc: {
    title: 'IDMC',
    subtitle: 'Institutional Development and Monitoring Committee',
    breadcrumb: ['Administration', 'IDMC'],
  },
  'org-chart': {
    title: 'Organizational Chart',
    subtitle: 'Administrative hierarchy of Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'Organizational Chart'],
  },
  'anti-ragging': {
    title: 'Anti-Ragging / Discipline Committee',
    subtitle: 'Zero tolerance policy against ragging — GRCP campus safety',
    breadcrumb: ['Administration', 'Anti-Ragging / Discipline'],
  },
  'anti-harassment': {
    title: 'Anti-Sexual Harassment / ICC / Women Development',
    subtitle: 'Internal Complaints Committee — safe and dignified campus environment',
    breadcrumb: ['Administration', 'Anti-Sexual Harassment / ICC'],
  },
  grievance: {
    title: 'Grievance Redressal Committee',
    subtitle: 'Transparent and fair mechanism for addressing student, faculty, and staff concerns',
    breadcrumb: ['Administration', 'Grievance Redressal Committee'],
  },
  iiic: {
    title: 'Industry Institute Interaction Committee (IIIC)',
    subtitle: 'Bridging academia and industry at Gokaraju Rangaraju College of Pharmacy',
    breadcrumb: ['Administration', 'IIIC'],
  },
  iic: {
    title: "Institution's Innovation Council (IIC)",
    subtitle: "Fostering a culture of innovation and entrepreneurship at GRCP",
    breadcrumb: ['Administration', "Institution's Innovation Council"],
  },
  'sc-st': {
    title: 'SC / ST Committee',
    subtitle: 'Safeguarding the welfare and interests of SC/ST students and staff at GRCP',
    breadcrumb: ['Administration', 'SC / ST Committee'],
  },
  iaec: {
    title: 'Institutional Animal Ethics Committee (IAEC)',
    subtitle: 'Ensuring humane and ethical use of animals in research — CPCSEA compliant',
    breadcrumb: ['Administration', 'IAEC'],
  },
  'mentor-mentee': {
    title: 'Mentor Mentee Committee',
    subtitle: 'Structured mentoring for holistic student support at GRCP',
    breadcrumb: ['Administration', 'Mentor Mentee Committee'],
  },
  'equal-opportunity': {
    title: 'Equal Opportunity Cell Committee',
    subtitle: 'Promoting inclusive and equitable access to education at GRCP',
    breadcrumb: ['Administration', 'Equal Opportunity Cell Committee'],
  },
  'other-committees': {
    title: 'Other Committees',
    subtitle: 'Statutory and non-statutory committees supporting GRCP operations',
    breadcrumb: ['Administration', 'Other Committees'],
  },
  'professional-associations': {
    title: 'Professional Associations / Societies',
    subtitle: 'GRCP faculty and students in leading pharmaceutical professional bodies',
    breadcrumb: ['Achievements', 'Professional Associations / Societies'],
  },
  'student-achievements': {
    title: 'Student Achievements',
    subtitle: 'Academic excellence, research, and professional accomplishments of GRCP students',
    breadcrumb: ['Achievements', 'Student Achievements'],
  },
};

// ── Shared sub-components ─────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-bold text-type-h2-mob pb-3"
        style={{
          color: ac,
          borderBottom: `3px solid ${ac}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// ── Profile card (matches Recreated AdminProfile.jsx) ─────────────────────────

function ProfileCard({ person, institution, qualifications, bio }) {
  const name = person?.fullName || person?.name || '';
  const title = person?.title || '';
  const imgSrc = person?.img || null;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${pc}18`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      {/* Photo + header info */}
      <div className="flex flex-col md:flex-row gap-8 p-8 items-start">
        {/* Photo */}
        <div className="flex-shrink-0">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={name}
              style={{
                width: 220,
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 12,
                border: `2px solid ${pc}20`,
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 12,
              border: `2px solid ${pc}20`,
              backgroundColor: `${pc}18`,
              display: imgSrc ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
              fontWeight: 700,
              color: pc,
              fontFamily: 'Hind, sans-serif',
            }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Name / title / qualifications */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-display font-bold text-type-h2-mob mb-1"
            style={{ color: pc }}
          >
            {name}
          </h3>
          {title && (
          <p
            className="font-display font-semibold text-type-body mb-1"
            style={{ color: ac }}
          >
            {title}
          </p>
          )}
          {institution && (
            <p className="font-body text-type-ui text-[#555] mb-3">
              {institution}
            </p>
          )}
          {qualifications && qualifications.length > 0 && (
            <ul className="space-y-1 mt-3">
              {qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                    style={{ backgroundColor: pc }}
                  />
                  <span className="font-body text-type-ui text-[#474747]">{q}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: `${pc}18`, marginLeft: 32, marginRight: 32 }} />

      {/* Bio paragraphs */}
      <div className="p-8 space-y-4">
        {bio.map((para, i) => (
          <p key={i} className="font-body text-type-body text-[#474747]">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Section: Chairman ─────────────────────────────────────────────────────────

function ChairmanSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Administration" title="Chairman" />
      <ProfileCard
        person={college.administration.chairman}
        institution="Gokaraju Rangaraju College of Pharmacy"
        qualifications={[]}
        bio={college.administration.chairman.bio}
      />
    </div>
  );
}

// ── Section: Vice President ───────────────────────────────────────────────────

function VicePresidentSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Administration" title="Vice President" />
      <ProfileCard
        person={college.administration.vicePresident}
        qualifications={['Chemical Engineer']}
        bio={college.administration.vicePresident.bio}
      />
    </div>
  );
}

// ── Section: Principal ────────────────────────────────────────────────────────

function PrincipalSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Administration" title="Principal" />
      <ProfileCard
        person={college.administration.principal}
        qualifications={[
          'B.Pharm (2000) – Mangalore University',
          'M.Pharm (2003) – Rajiv Gandhi University of Health Sciences',
          'Ph.D. (2011) – Andhra University',
          'CMI Level 5 Certificate in Management and Leadership – Chartered Management Institute, U.K.',
        ]}
        bio={college.administration.principal.bio}
      />
    </div>
  );
}

// ── Section: Governing Body ───────────────────────────────────────────────────

function GoverningBodySection() {
  const { governingBody } = college.administration;
  return (
    <div className="space-y-6">
      <SectionHeader label="Governance" title="Governing Body" />

      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: ac }}>
              {['S.No.', 'Photo', 'Name', 'Designation', 'Category'].map((h) => (
                <th
                  key={h}
                  className="font-display font-semibold text-type-ui-sm text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {governingBody.members.map((m, i) => (
              <tr
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}
              >
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.no}
                </td>
                <td className="px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.photo && (
                    <img
                      src={m.photo}
                      alt={m.name}
                      style={{ width: 70, height: 80, objectFit: 'cover', borderRadius: 4, display: 'block' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </td>
                <td className="px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  <span className="font-display font-semibold text-type-ui" style={{ color: pc }}>
                    {m.name}
                  </span>
                  {(m.org || m.details) && (
                    <span className="block font-body text-type-cap text-[#6A7282] mt-0.5 whitespace-pre-line">
                      {m.org || m.details}
                    </span>
                  )}
                </td>
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.role}
                </td>
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b align-middle" style={{ borderColor: `${pc}10` }}>
                  {m.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Section: IDMC ─────────────────────────────────────────────────────────────

const IDMC_INTRO = 'The Institutional Development and Monitoring Committee (IDMC) shall be the principal academic body of the institute and shall, in addition to all other powers and duties vested in it, have the following powers and duties.';

const IDMC_POINTS = [
  'To exercise general supervision over the academic activities of the college and to give directions regarding methods of instruction, evaluation, research, or improvements in academic standards.',
  'To consider matters of academic interest, either on its own initiative or at the instance of the governing body, and to take proper action thereon.',
  'To make arrangements for the conduct of examinations in conformity with the laws of Osmania University.',
  'To maintain proper standards of the examinations.',
  'To promote research within the institute, acquire reports on such research activities from time to time.',
  'To suggest measures for co-ordination for individual classes.',
];

const IDMC_RECOMMENDATIONS = [
  'Measure the improvement of standards of teaching, training, and research.',
  'Institute fellowships, travelling fellowships, scholarships, medals, prizes, etc.',
  'Establish or abolish departments/centers, and bye-laws covering the academic functioning of the college, discipline, admissions, examinations, award of fellowships, studentships, concessions, attendance, etc.',
];

const IDMC_POINTS_AFTER = [
  'To make a periodic review of the activities of the college, and to take appropriate action (including the making of recommendations to the governing body), to maintain and improve the standards of instruction.',
  'To exercise such other powers, and perform such other duties, as may be conferred or imposed upon it, by the rules and by-laws.',
  'To recommend teaching posts of professors, associate professors, and assistant professors to the governing body of the college.',
];

function IdmcSection() {
  const { idmc } = college.administration;
  return (
    <div className="space-y-6">
      <SectionHeader label="Institutional Committee" title="IDMC" />

      {/* Intro paragraph */}
      <p className="font-body text-type-body text-[#474747]">{IDMC_INTRO}</p>

      {/* Main bullet points */}
      <ul className="space-y-2.5">
        {IDMC_POINTS.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: pc }} />
            <span className="font-body text-type-body text-[#474747]">{point}</span>
          </li>
        ))}

        {/* "To make recommendations..." item with sub-list */}
        <li className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: pc }} />
          <div className="flex-1">
            <span className="font-body text-type-body text-[#474747]">To make recommendations to the board of management on:</span>
            <ul className="mt-2 space-y-2 ml-4">
              {IDMC_RECOMMENDATIONS.map((rec, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: `${pc}80` }} />
                  <span className="font-body text-type-body text-[#474747]">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Remaining points */}
        {IDMC_POINTS_AFTER.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: pc }} />
            <span className="font-body text-type-body text-[#474747]">{point}</span>
          </li>
        ))}
      </ul>
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: ac }}>
              {['S.No.', 'Name', 'Designation', 'Position', 'Email'].map((h) => (
                <th
                  key={h}
                  className="font-display font-semibold text-type-ui-sm text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {idmc.members.map((m, i) => (
              <tr
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}
              >
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {i + 1}.
                </td>
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.name}
                </td>
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.designation}
                </td>
                <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.role}
                </td>
                <td className="px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.email ? (
                    <a
                      href={`mailto:${m.email}`}
                      className="font-display text-type-ui-sm underline"
                      style={{ color: pc }}
                    >
                      {m.email}
                    </a>
                  ) : (
                    <span className="font-body text-type-ui text-[#474747]">&mdash;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Section: Org Chart ────────────────────────────────────────────────────────

function OrgChartSection() {
  return (
    <div className="space-y-6">
      <SectionHeader label="Structure" title="Organizational Chart" />
      <div>
        <img
          src="https://grcp.ac.in/images/Organizational_Chart.png?v=0.1"
          alt="Organizational Chart"
          style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.createElement('p');
            fallback.style.cssText = 'font-family:DM Sans,sans-serif;font-size:15px;color:#474747;text-align:center;padding:40px 0;';
            fallback.textContent = 'Organizational chart image is currently unavailable.';
            e.currentTarget.parentNode.appendChild(fallback);
          }}
        />
      </div>
    </div>
  );
}

// ── Shared: Committee Member Table ────────────────────────────────────────────

function CommitteeMemberTable({ members, cols }) {
  const columns = cols || ['S.No.', 'Name', 'Designation', 'Position', 'Email'];
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ backgroundColor: ac }}>
            {columns.map((h) => (
              <th key={h} className="font-display font-semibold text-type-ui-sm text-white text-left px-5 py-3.5 first:rounded-tl-xl last:rounded-tr-xl">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}>
              <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>{m.sno || i + 1}</td>
              <td className="font-display font-semibold text-type-ui px-5 py-3.5 border-b" style={{ color: pc, borderColor: `${pc}10` }}>{m.name}</td>
              <td className="font-body text-type-ui text-[#474747] px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>{m.designation}</td>
              {m.position !== undefined && (
                <td className="px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  <RoleBadge role={m.position} />
                </td>
              )}
              {m.email !== undefined && (
                <td className="px-5 py-3.5 border-b" style={{ borderColor: `${pc}10` }}>
                  {m.email ? (
                    <a href={`mailto:${m.email}`} className="font-display text-type-ui-sm underline" style={{ color: pc }}>{m.email}</a>
                  ) : <span className="text-[#9CA3AF]">—</span>}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
      className="inline-block font-display font-semibold text-type-ui-sm px-2.5 py-0.5 rounded-full whitespace-nowrap"
      style={{ backgroundColor: bg, color }}
    >
      {role}
    </span>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]" style={{ backgroundColor: pc }} />
          <span className="font-body text-type-body text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
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
              ? { backgroundColor: pc, color: '#fff' }
              : { backgroundColor: `${pc}0D`, color: pc }
            }
          >
            {c.label || c.year}
          </button>
        ))}
      </div>
      {active && (
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: ac }}>
                {['S.No.', 'Name', 'Designation', 'Position', contactCol || 'Email'].map((h) => (
                  <th key={h} className="font-display font-semibold text-type-ui-sm text-white text-left px-5 py-3.5">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {active.members.map((m, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}>
                  <td className="font-body text-type-ui text-[#474747] px-5 py-3 border-b" style={{ borderColor: `${pc}10` }}>{m.sno || i + 1}</td>
                  <td className="font-display font-semibold text-type-ui px-5 py-3 border-b" style={{ color: pc, borderColor: `${pc}10` }}>{m.name}</td>
                  <td className="font-body text-type-ui text-[#474747] px-5 py-3 border-b" style={{ borderColor: `${pc}10` }}>{m.designation}</td>
                  <td className="px-5 py-3 border-b" style={{ borderColor: `${pc}10` }}><RoleBadge role={m.position || m.role} /></td>
                  <td className="px-5 py-3 border-b" style={{ borderColor: `${pc}10` }}>
                    {(m.email || m.contact || m.phone)
                      ? <span className="font-body text-type-ui-sm text-[#374151]">{m.email || m.contact || m.phone}</span>
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

function SubHeading({ children }) {
  return (
    <h3 className="font-display font-semibold text-type-h5 mt-8 mb-3" style={{ color: pc }}>{children}</h3>
  );
}

// ── Section: Anti-Ragging ─────────────────────────────────────────────────────

function AntiRaggingSection() {
  const d = college.administration.antiRagging;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Anti-Ragging / Discipline Committee" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Core Responsibilities of the Anti-Ragging Committee</SubHeading>
      <BulletList items={d.measures} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Anti-Sexual Harassment ──────────────────────────────────────────

function AntiHarassmentSection() {
  const d = college.administration.antiHarassment;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Anti-Sexual Harassment / ICC / Women Development" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Roles &amp; Responsibilities of the ICC</SubHeading>
      <BulletList items={d.functions} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.iccYears} />

      <SubHeading>Women's Development Cell — Objectives</SubHeading>
      <BulletList items={d.wdcObjectives} />

      <SubHeading>Women's Development Cell Composition</SubHeading>
      <YearTabs compositions={d.wdcYears} />
    </div>
  );
}

// ── Section: Grievance Redressal ──────────────────────────────────────────────

function GrievanceSection() {
  const d = college.administration.grievance;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Grievance Redressal Committee" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Objectives / Functions</SubHeading>
      <BulletList items={d.objectives} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: IIIC ─────────────────────────────────────────────────────────────

function IiicSection() {
  const d = college.administration.iiic;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Industry Institute Interaction Committee (IIIC)" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Objectives</SubHeading>
      <BulletList items={d.objectives} />

      <SubHeading>Key Activities</SubHeading>
      <BulletList items={d.activities} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: IIC ──────────────────────────────────────────────────────────────

function IicSection() {
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

// ── Section: SC/ST Committee ──────────────────────────────────────────────────

function ScStSection() {
  const d = college.administration.scSt;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="SC / ST Committee" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Roles &amp; Responsibilities</SubHeading>
      <BulletList items={d.rolesAndResponsibilities} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: IAEC ─────────────────────────────────────────────────────────────

function IaecSection() {
  const d = college.administration.iaec;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Institutional Animal Ethics Committee (IAEC)" />
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-display font-semibold text-type-ui-sm" style={{ backgroundColor: `${pc}10`, color: pc }}>
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

// ── Section: Mentor-Mentee ────────────────────────────────────────────────────

function MentorMenteeSection() {
  const d = college.administration.mentorMentee;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Mentor Mentee Committee" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl p-5" style={{ backgroundColor: `${pc}06`, border: `1px solid ${pc}14` }}>
          <p className="font-display font-semibold text-type-body mb-3" style={{ color: pc }}>Mentor Responsibilities</p>
          <ol className="space-y-2.5">
            {d.mentorResponsibilities.map((item, i) => (
              <li key={i} className="font-body text-type-body text-[#474747]">{item}</li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: `${ac}08`, border: `1px solid ${ac}20` }}>
          <p className="font-display font-semibold text-type-body mb-3" style={{ color: ac }}>Mentee Responsibilities</p>
          <ol className="space-y-2.5">
            {d.menteeResponsibilities.map((item, i) => (
              <li key={i} className="font-body text-type-body text-[#474747]">{item}</li>
            ))}
          </ol>
        </div>
      </div>

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Equal Opportunity Cell ──────────────────────────────────────────

function EqualOpportunitySection() {
  const d = college.administration.equalOpportunity;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committee" title="Equal Opportunity Cell Committee" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      <SubHeading>Core Objectives</SubHeading>
      <BulletList items={d.objectives} />

      <SubHeading>Future Plans</SubHeading>
      <BulletList items={d.futurePlans} />

      <SubHeading>Committee Composition</SubHeading>
      <YearTabs compositions={d.yearlyCompositions} />
    </div>
  );
}

// ── Section: Other Committees ─────────────────────────────────────────────────

function OtherCommitteesSection() {
  const committees = college.administration.otherCommittees;
  return (
    <div className="space-y-6">
      <SectionHeader label="Committees" title="Other Committees" />
      <div className="space-y-8">
        {committees.map((c, idx) => (
          <div key={idx} className="rounded-2xl p-6" style={{ border: `1px solid ${pc}18`, backgroundColor: '#FAFAFA' }}>
            <h3 className="font-display font-bold text-type-h5 mb-4" style={{ color: pc }}>{c.name}</h3>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${pc}18` }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: ac }}>
                    {['S.No.', 'Name', 'Designation', 'Position'].map((h) => (
                      <th key={h} className="font-display font-semibold text-type-ui-sm text-white text-left px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.members.map((m, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                      <td className="font-body text-type-ui text-[#474747] px-4 py-3 border-b" style={{ borderColor: `${pc}10` }}>{i + 1}</td>
                      <td className="font-display font-semibold text-type-ui px-4 py-3 border-b" style={{ color: pc, borderColor: `${pc}10` }}>{m.name}</td>
                      <td className="font-body text-type-ui text-[#474747] px-4 py-3 border-b" style={{ borderColor: `${pc}10` }}>{m.designation}</td>
                      <td className="font-body text-type-ui text-[#474747] px-4 py-3 border-b" style={{ borderColor: `${pc}10` }}>{m.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Professional Associations ───────────────────────────────────────

function ProfessionalAssociationsSection() {
  const assocs = college.administration.professionalAssociations;
  return (
    <div className="space-y-6">
      <SectionHeader label="Achievements" title="Professional Associations / Societies" />
      <div className="space-y-4">
        {assocs.map((a, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl px-5 py-4 border" style={{ borderColor: `${pc}18`, backgroundColor: '#fff' }}>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: ac }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-type-ui text-[#374151]">{a.name}</span>
            </div>
            {a.pdfHref && (
              <a
                href={a.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-80 flex-shrink-0 ml-4"
                style={{ backgroundColor: pc }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
                </svg>
                Download
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Student Achievements ────────────────────────────────────────────

function StudentAchievementsSection() {
  const d = college.administration.studentAchievements;
  return (
    <div className="space-y-6">
      <SectionHeader label="Achievements" title="Student Achievements" />
      <p className="font-body text-type-body text-[#474747]">{d.description}</p>

      {/* Highlights strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {d.highlights.map((h, i) => (
          <div key={i} className="rounded-xl p-5 text-center" style={{ backgroundColor: `${pc}08`, border: `1px solid ${pc}14` }}>
            <span className="font-display font-bold text-type-h2-mob block" style={{ color: pc }}>{h.count}</span>
            <span className="font-display text-type-cap uppercase tracking-wide block" style={{ color: ac }}>{h.label}</span>
            <span className="font-body text-type-cap text-[#6B7280] block mt-0.5">{h.year}</span>
          </div>
        ))}
      </div>

      <SubHeading>Achievement Categories</SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {d.categories.map((cat, i) => (
          <div key={i} className="rounded-2xl p-5" style={{ border: `1px solid ${pc}18`, backgroundColor: '#FAFAFA' }}>
            <h3 className="font-display font-bold text-type-body mb-2" style={{ color: pc }}>{cat.title}</h3>
            <p className="font-body text-type-body-xs text-[#474747] mb-3">{cat.desc}</p>
            {cat.href && (
              <a
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display font-semibold text-type-ui-sm transition-colors"
                style={{ color: ac }}
                onMouseEnter={(e) => (e.currentTarget.style.color = pc)}
                onMouseLeave={(e) => (e.currentTarget.style.color = ac)}
              >
                View Records ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const sectionRegistry = {
  chairman: { label: 'Chairman', content: <ChairmanSection /> },
  'vice-president': { label: 'Vice President', content: <VicePresidentSection /> },
  principal: { label: 'Principal', content: <PrincipalSection /> },
  'governing-body': { label: 'Governing Body', content: <GoverningBodySection /> },
  idmc: { label: 'IDMC', content: <IdmcSection /> },
  'org-chart': { label: 'Organizational Chart', content: <OrgChartSection /> },
  'anti-ragging': { label: 'Anti-Ragging / Discipline', content: <AntiRaggingSection /> },
  'anti-harassment': { label: 'Anti-Sexual Harassment / ICC', content: <AntiHarassmentSection /> },
  grievance: { label: 'Grievance Redressal', content: <GrievanceSection /> },
  iiic: { label: 'IIIC', content: <IiicSection /> },
  iic: { label: "Institution's Innovation Council", content: <IicSection /> },
  'sc-st': { label: 'SC / ST Committee', content: <ScStSection /> },
  iaec: { label: 'IAEC', content: <IaecSection /> },
  'mentor-mentee': { label: 'Mentor Mentee', content: <MentorMenteeSection /> },
  'equal-opportunity': { label: 'Equal Opportunity Cell', content: <EqualOpportunitySection /> },
  'other-committees': { label: 'Other Committees', content: <OtherCommitteesSection /> },
  'professional-associations': { label: 'Professional Associations', content: <ProfessionalAssociationsSection /> },
  'student-achievements': { label: 'Student Achievements', content: <StudentAchievementsSection /> },
};

export default function AdministrationPage() {
  const { section = 'chairman' } = useParams();
  const currentSection = sectionRegistry[section] || sectionRegistry.chairman;
  const config = sectionConfig[section] || sectionConfig.chairman;

  return (
    <AdminSidebarLayout
      college={college}
      pageTitle={config.title}
      pageSubtitle={config.subtitle}
      pageBreadcrumb={config.breadcrumb}
      currentSection={currentSection}
    />
  );
}
