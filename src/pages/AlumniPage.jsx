import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

// ── Design tokens ──────────────────────────────────────────────────────────────

const primaryColor = '#2D7A50';
const greenAccent = '#C72235';

const thStyle = {
  backgroundColor: greenAccent,
  color: '#ffffff',
  padding: '11px 16px',
  fontFamily: 'inherit',
  fontWeight: 600,
  textAlign: 'left',
  borderRight: '1px solid rgba(255,255,255,0.15)',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '10px 16px',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  borderRight: '1px solid #e5e7eb',
};

// ── Shared sub-components ──────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-8">
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

function InfoBox({ children }) {
  return (
    <div
      className="font-body text-type-ui px-5 py-4 rounded mb-6"
      style={{
        backgroundColor: `${primaryColor}0D`,
        borderLeft: `4px solid ${primaryColor}`,
        color: '#374151',
      }}
    >
      {children}
    </div>
  );
}

function PositionBadge({ position }) {
  let style = {};
  if (position === 'President') {
    style = { backgroundColor: primaryColor, color: '#ffffff' };
  } else if (position === 'Coordinator') {
    style = { backgroundColor: greenAccent, color: '#ffffff' };
  } else {
    style = { backgroundColor: `${primaryColor}1A`, color: primaryColor };
  }
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-type-label font-semibold font-display"
      style={style}
    >
      {position}
    </span>
  );
}

// ── Section: Enrollment / Overview ────────────────────────────────────────────

function EnrollmentSection() {
  const benefits = [
    'Access to a growing network of 272+ pharmacy professionals across industry, academia, and research',
    'Exclusive alumni lecture series and industry interaction sessions',
    'Mentorship opportunities for current students from experienced alumni',
    'Career guidance, job referrals, and placement assistance through alumni network',
    'Invitations to annual alumni meets, reunions, and special events',
    'Digital newsletter with college updates, research highlights, and alumni achievements',
    'Priority access to continuing education programs and workshops',
    'Recognition through Distinguished Alumni awards',
  ];

  const steps = [
    { step: '1', title: 'Download the Form', desc: 'Download the Alumni Registration form from the Downloads section or click the registration link.' },
    { step: '2', title: 'Fill in Your Details', desc: 'Complete the form with your personal, academic, and professional information.' },
    { step: '3', title: 'Submit the Form', desc: 'Submit the completed form by email to alumni@grcp.ac.in or in person at the college office.' },
    { step: '4', title: 'Receive Confirmation', desc: 'You will receive a confirmation email with your alumni membership details.' },
  ];

  return (
    <div>
      <SectionHeader label="GRCP Alumni Association" title="Alumni Enrollment" />

      <p className="font-body text-type-body text-gray-600 mb-6">
        {college.alumni.overview} We welcome all graduates to register and stay connected with your alma mater, contribute to the growth of the institution, and support the next generation of pharmacy professionals.
      </p>

      <div className="mb-10">
        <h3 className="font-display font-bold text-type-h5 mb-5" style={{ color: primaryColor }}>
          Enrollment Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 p-5 rounded-lg border"
              style={{ borderColor: `${primaryColor}33` }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-type-body text-white"
                style={{ backgroundColor: primaryColor }}
              >
                {s.step}
              </div>
              <div>
                <p className="font-display font-semibold text-type-body mb-1" style={{ color: primaryColor }}>
                  {s.title}
                </p>
                <p className="font-body text-type-ui-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="/alumni/alumni-registration"
            className="btn-green"
          >
            Register Now
          </a>
          <a
            href="mailto:alumni@grcp.ac.in"
            className="btn-ghost"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-type-h5 mb-5" style={{ color: primaryColor }}>
          Benefits of Membership
        </h3>
        <ul className="space-y-3">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-type-body-xs text-gray-700">
              <span
                className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-type-label font-bold"
                style={{ backgroundColor: greenAccent }}
              >
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Section: Registration ──────────────────────────────────────────────────────

function RegistrationSection() {
  return (
    <div>
      <SectionHeader label="GRCP Alumni" title="Alumni Registration" />

      <p className="font-body text-type-body text-gray-600 mb-8">
        Register with the GRCP Alumni Association to stay connected with your college, access exclusive benefits, and contribute to the growth of our pharmacy community. Registration is free and open to all graduates of GRCP.
      </p>

      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-xl border mb-8"
        style={{ borderColor: `${primaryColor}33`, backgroundColor: `${primaryColor}05` }}
      >
        <div
          className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white text-2xl"
          style={{ backgroundColor: greenAccent }}
        >
          📄
        </div>
        <div className="flex-1">
          <p className="font-display font-bold text-type-body mb-1" style={{ color: primaryColor }}>
            Alumni Registration Form
          </p>
          <p className="font-body text-type-ui-sm text-gray-500 mb-3">
            Download the official registration form (PDF). Fill in your details and submit to the college office or via email.
          </p>
          <a
            href="https://grcp.ac.in/downloads/Alumni%20Registration.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            Download PDF
          </a>
        </div>
      </div>

      <InfoBox>
        <strong>How to submit:</strong> After filling the form, email it to{' '}
        <a href="mailto:alumni@grcp.ac.in" style={{ color: primaryColor, textDecoration: 'underline' }}>
          alumni@grcp.ac.in
        </a>{' '}
        or deliver it in person to the Alumni Coordinator at the college office. You will receive a confirmation within 5 working days.
      </InfoBox>

      <div className="mt-8">
        <h3 className="font-display font-bold text-type-h6 mb-4" style={{ color: primaryColor }}>
          What Information is Required?
        </h3>
        <ul className="space-y-2 font-body text-type-body-xs text-gray-700 list-disc list-inside">
          <li>Full name and contact details (phone, email, address)</li>
          <li>Year of passing and programme (B. Pharm / M. Pharm)</li>
          <li>Hall Ticket / Register number</li>
          <li>Current employer, designation, and work location</li>
          <li>Areas of expertise and interest</li>
          <li>Willingness to mentor current students (optional)</li>
        </ul>
      </div>

      <div
        className="mt-8 p-5 rounded-lg"
        style={{ backgroundColor: `${greenAccent}0D`, borderLeft: `4px solid ${greenAccent}` }}
      >
        <p className="font-body text-type-body-xs" style={{ color: '#374151' }}>
          <strong style={{ color: greenAccent }}>Alumni Coordinator:</strong> Mrs. B. Karuna Devi, Assistant Professor &mdash;{' '}
          <a href="mailto:karuna8062@grcp.ac.in" style={{ color: primaryColor, textDecoration: 'underline' }}>
            karuna8062@grcp.ac.in
          </a>
        </p>
      </div>
    </div>
  );
}

// ── Section: Executive Members ─────────────────────────────────────────────────

function ExecutiveMembersSection() {
  const members = college.alumni.execCommittee;

  return (
    <div>
      <SectionHeader label="Alumni Association" title="Executive Committee" />

      <p className="font-body text-type-body text-gray-600 mb-8">
        The GRCP Alumni Association is governed by an executive committee comprising faculty members and student representatives dedicated to fostering alumni engagement and institutional growth.
      </p>

      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-type-ui-sm" style={{ ...thStyle, width: '60px' }}>S.No.</th>
              <th className="text-type-ui-sm" style={thStyle}>Name</th>
              <th className="text-type-ui-sm" style={thStyle}>Designation</th>
              <th className="text-type-ui-sm" style={thStyle}>Position</th>
              <th className="text-type-ui-sm" style={{ ...thStyle, borderRight: 'none' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr
                key={m.sno}
                style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}
              >
                <td className="text-type-ui-sm" style={{ ...tdStyle, textAlign: 'center', fontWeight: 600, color: primaryColor }}>
                  {m.sno}
                </td>
                <td className="font-body text-type-ui-sm" style={{ ...tdStyle, fontWeight: 500 }}>{m.name}</td>
                <td className="font-body text-type-ui-sm" style={tdStyle}>{m.designation}</td>
                <td className="text-type-ui-sm" style={tdStyle}>
                  <PositionBadge position={m.position} />
                </td>
                <td className="font-body text-type-ui-sm" style={{ ...tdStyle, borderRight: 'none' }}>
                  <a
                    href={`mailto:${m.email}`}
                    className="hover:underline"
                    style={{ color: primaryColor }}
                  >
                    {m.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Section: Alumni List ───────────────────────────────────────────────────────

const sampleAlumni = [
  { name: 'Shruthi Challa', course: 'B Pharmacy', batch: '2004-2008', workingDetails: 'Regulatory Affairs Manager, Grifols Australia' },
  { name: 'Satish Dabbeta', course: 'B Pharmacy', batch: '2004-2008', workingDetails: 'Medical Coder at University Hospital Sharjah' },
  { name: 'Gangadhar M', course: 'B Pharmacy', batch: '2005-09', workingDetails: 'Novartis Health care pvt. Ltd. Hyderabad' },
  { name: 'Bhukya Jagadeesh', course: 'B Pharmacy', batch: '2014-2018', workingDetails: 'Research associate, Sailife sciences' },
  { name: 'Vasavi Pachakantha', course: 'M Pharmacy', batch: '2012-14', workingDetails: 'Medical writer in Novartis Hyderabad' },
];

function AlumniListSection() {
  const [search, setSearch] = useState('');
  const [filterYear, setFilterYear] = useState('');

  return (
    <div>
      <SectionHeader label="GRCP Alumni" title="List of Alumni" />

      {/* Count badge + description */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-display font-bold text-type-h3-mob text-white shadow"
          style={{ backgroundColor: primaryColor }}
        >
          272+ Registered Alumni
        </span>
        <span
          className="inline-block px-3 py-1 rounded-full font-display font-semibold text-type-cap"
          style={{ backgroundColor: `${greenAccent}15`, color: greenAccent }}
        >
          B. Pharm &amp; M. Pharm
        </span>
      </div>

      <InfoBox>
        The GRCP Alumni network spans <strong>272+ registered alumni</strong> across B. Pharmacy and M. Pharmacy programs. Our graduates are making an impact in pharmaceutical companies, hospitals, research institutions, and regulatory bodies across India and worldwide.
      </InfoBox>

      {/* Search/filter UI (decorative - full database requires backend) */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border rounded font-display text-type-ui outline-none focus:ring-2"
          style={{ borderColor: '#d1d5db' }}
        />
        <input
          type="text"
          placeholder="Filter by batch year..."
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          className="w-full sm:w-48 px-4 py-2.5 border rounded font-display text-type-ui outline-none focus:ring-2"
          style={{ borderColor: '#d1d5db' }}
        />
      </div>

      {/* Sample alumni table */}
      <div className="mb-8">
        <h3 className="font-display font-bold text-type-h6 mb-3" style={{ color: primaryColor }}>
          Sample Alumni Entries
        </h3>
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-type-ui-sm" style={{ ...thStyle, width: '40px' }}>#</th>
                <th className="text-type-ui-sm" style={thStyle}>Name</th>
                <th className="text-type-ui-sm" style={thStyle}>Course</th>
                <th className="text-type-ui-sm" style={thStyle}>Batch</th>
                <th className="text-type-ui-sm" style={{ ...thStyle, borderRight: 'none' }}>Working Details</th>
              </tr>
            </thead>
            <tbody>
              {sampleAlumni.map((a, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td className="text-type-ui-sm" style={{ ...tdStyle, textAlign: 'center', fontWeight: 600, color: primaryColor }}>{i + 1}</td>
                  <td className="font-body text-type-ui-sm" style={{ ...tdStyle, fontWeight: 500, color: primaryColor }}>{a.name}</td>
                  <td className="font-body text-type-ui-sm" style={tdStyle}>{a.course}</td>
                  <td className="font-body text-type-ui-sm" style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{a.batch}</td>
                  <td className="font-body text-type-ui-sm" style={{ ...tdStyle, borderRight: 'none' }}>{a.workingDetails}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-type-cap text-gray-400 mt-2 italic">
          Showing 5 sample entries. The full database contains 272+ alumni records.
        </p>
      </div>

      {/* Distinguished Alumni PDF download */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border mb-6"
        style={{ borderColor: `${primaryColor}33`, backgroundColor: `${primaryColor}05` }}
      >
        <div className="flex-1">
          <p className="font-display font-semibold text-type-body mb-1" style={{ color: primaryColor }}>
            Distinguished Alumni List (PDF)
          </p>
          <p className="font-body text-type-ui-sm text-gray-500">
            Download the complete list of distinguished alumni recognised by GRCP.
          </p>
        </div>
        <a
          href="https://grcp.ac.in/downloads/Distinguished%20Alumni.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded font-display font-semibold text-type-ui-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: primaryColor }}
        >
          Download PDF
        </a>
      </div>

      {/* Contact note for full list */}
      <div
        className="p-5 rounded-lg border-l-4 font-body text-type-body-xs"
        style={{ backgroundColor: '#fefce8', borderLeftColor: '#eab308', color: '#713f12' }}
      >
        <p className="font-semibold mb-1">Access the Complete Alumni Database</p>
        <p>
          For the complete alumni database, please contact{' '}
          <a href="mailto:alumni@grcp.ac.in" style={{ color: primaryColor, textDecoration: 'underline' }}>
            alumni@grcp.ac.in
          </a>
          . You may also visit the college administrative office during working hours.
        </p>
      </div>
    </div>
  );
}

// ── Section: Distinguished Alumni ─────────────────────────────────────────────

function DistinguishedSection() {
  const alumni = college.alumni.distinguished;

  function getInitials(name) {
    return name
      .split(' ')
      .filter((w) => w.length > 2)
      .slice(0, 2)
      .map((w) => w[0])
      .join('');
  }

  return (
    <div>
      <SectionHeader label="GRCP Alumni" title="Distinguished Alumni" />

      <p className="font-body text-type-body text-gray-600 mb-8">
        GRCP takes pride in its distinguished alumni who have made significant contributions to the pharmaceutical and healthcare sectors nationally and internationally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((a, i) => (
          <div
            key={i}
            className="rounded-xl border p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            style={{ borderColor: `${primaryColor}22` }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-type-h6 text-white flex-shrink-0"
                style={{ backgroundColor: i % 2 === 0 ? primaryColor : greenAccent }}
              >
                {getInitials(a.name)}
              </div>
              <div>
                <p className="font-display font-bold text-type-body leading-tight" style={{ color: primaryColor }}>
                  {a.name}
                </p>
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded text-type-label font-display font-semibold"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  Batch {a.batch}
                </span>
              </div>
            </div>

            <div>
              <p className="font-body text-type-ui-sm font-semibold text-gray-700 mb-1">{a.currentRole}</p>
              <p className="font-body text-type-ui-sm text-gray-500">{a.achievement}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <InfoBox>
          To nominate an alumnus for the Distinguished Alumni award, please write to{' '}
          <a href="mailto:alumni@grcp.ac.in" style={{ color: primaryColor, textDecoration: 'underline' }}>
            alumni@grcp.ac.in
          </a>{' '}
          with the nominee's details and their contributions to the field.
        </InfoBox>
      </div>
    </div>
  );
}

// ── Section: Alumni Contribution (Lecture Series) ──────────────────────────────

function ContributionSection() {
  const lectures = college.alumni.lectures;

  return (
    <div>
      <SectionHeader label="Alumni Contributions" title="Alumni Lecture Series" />

      <p className="font-body text-type-body text-gray-600 mb-8">
        The GRCP Alumni Association organises an annual lecture series where distinguished alumni share their industry experience, research insights, and career guidance with current students. Below is a record of all sessions conducted.
      </p>

      {lectures.map((yearGroup) => (
        <div key={yearGroup.year} className="mb-10">
          <h3
            className="font-display font-bold text-type-h6 mb-4 px-4 py-2 rounded"
            style={{ color: '#ffffff', backgroundColor: primaryColor }}
          >
            Academic Year: {yearGroup.year}
          </h3>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-type-ui-sm" style={thStyle}>Speaker</th>
                  <th className="text-type-ui-sm" style={thStyle}>Qualification / Current Role</th>
                  <th className="text-type-ui-sm" style={thStyle}>Topic</th>
                  <th className="text-type-ui-sm" style={{ ...thStyle, borderRight: 'none' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {yearGroup.items.map((item, i) => (
                  <tr
                    key={i}
                    style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}
                  >
                    <td className="font-body text-type-ui-sm" style={{ ...tdStyle, fontWeight: 500, color: primaryColor }}>{item.name}</td>
                    <td className="font-body text-type-ui-sm" style={tdStyle}>{item.qualification || '—'}</td>
                    <td className="font-body text-type-ui-sm" style={tdStyle}>{item.topic}</td>
                    <td className="font-body text-type-ui-sm" style={{ ...tdStyle, borderRight: 'none', whiteSpace: 'nowrap' }}>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section config ─────────────────────────────────────────────────────────────

const sectionConfig = {
  'alumni-registration': {
    title: 'Alumni Registration',
    subtitle: 'Register with the GRCP Alumni Association and stay connected with your alma mater',
    breadcrumb: ['Alumni', 'Alumni Registration'],
  },
  'executive-members': {
    title: 'Executive Members',
    subtitle: 'Meet the team driving the GRCP Alumni Association',
    breadcrumb: ['Alumni', 'Executive Members'],
  },
  'list-of-alumni': {
    title: 'List of Alumni',
    subtitle: '272+ registered alumni connected through the GRCP Alumni Network',
    breadcrumb: ['Alumni', 'List of Alumni'],
  },
  'distinguished-alumni': {
    title: 'Distinguished Alumni',
    subtitle: 'Honouring GRCP graduates who have made exceptional contributions to their fields',
    breadcrumb: ['Alumni', 'Distinguished Alumni'],
  },
  'alumni-contribution': {
    title: 'Alumni Contribution',
    subtitle: 'Alumni lecture series and industry interaction sessions for current students',
    breadcrumb: ['Alumni', 'Alumni Contribution'],
  },
};

const sectionContent = {
  'alumni-registration': <RegistrationSection />,
  'executive-members': <ExecutiveMembersSection />,
  'list-of-alumni': <AlumniListSection />,
  'distinguished-alumni': <DistinguishedSection />,
  'alumni-contribution': <ContributionSection />,
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AlumniPage() {
  const { section = 'alumni-registration' } = useParams();
  const location = useLocation();
  const config = sectionConfig[section] || sectionConfig['alumni-registration'];

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
          {sectionContent[section] || sectionContent['alumni-registration']}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
