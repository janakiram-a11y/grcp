import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

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

const committee = [
  { sno: 1, name: 'Dr. M. Ganga Raju', designation: 'Professor & Principal', position: 'President', email: 'ganga8000@grcp.ac.in' },
  { sno: 2, name: 'Mrs. B. Karuna Devi', designation: 'Assistant Professor', position: 'Coordinator', email: 'karuna8062@grcp.ac.in' },
  { sno: 3, name: 'Dr. N V L Suvarchala Reddy V', designation: 'Professor', position: 'Member', email: 'suvarchala8018@grcp.ac.in' },
  { sno: 4, name: 'Dr. A. D. Pani Kumar', designation: 'Associate Professor', position: 'Member', email: 'durga8017@grcp.ac.in' },
  { sno: 5, name: 'Dr. Monika Nijhawan', designation: 'Professor', position: 'Member', email: 'monika8009@grcp.ac.in' },
  { sno: 6, name: 'Mrs. M. Mamatha', designation: 'Assistant Professor', position: 'Member', email: 'mamatha8069@grcp.ac.in' },
  { sno: 7, name: 'Mrs. B. Prathyusha', designation: 'Assistant Professor', position: 'Member', email: 'prathyusha8083@grcp.ac.in' },
  { sno: 8, name: 'Mrs. Shabnam Kumari Thakur', designation: 'Assistant Professor', position: 'Member', email: 'shabnam8079@grcp.ac.in' },
  { sno: 9, name: 'P. Nikhitha', designation: 'Student', position: 'Member', email: '' },
  { sno: 10, name: 'Nimitha. M', designation: 'Student', position: 'Member', email: '' },
];

const alumniLinks = [
  { label: 'Alumni Registration', desc: 'Download the registration form (PDF)', href: 'https://grcp.ac.in/downloads/Alumni%20Registration.pdf', external: true },
  { label: 'Executive Members', desc: 'View the Alumni Association Executive Committee', href: '/alumni/executive-members', external: false },
  { label: 'Alumni Enrollment', desc: 'Enroll via Google Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfL0hUx4UpdzxPTn1gdZyCSyJtVuZ83au7Tg5jJRNHn16Q5jg/viewform', external: true },
  { label: 'List of Alumni', desc: 'Browse the full list of 272+ registered alumni', href: '/alumni/list-of-alumni', external: false },
  { label: 'Distinguished Alumni', desc: 'View distinguished alumni (PDF)', href: 'https://grcp.ac.in/downloads/Distinguished%20Alumni.pdf', external: true },
  { label: 'Alumni Contribution', desc: 'Alumni lecture series and contributions', href: '/alumni/alumni-contribution', external: false },
];

function PositionBadge({ position }) {
  let bg;
  if (position === 'President') bg = primary;
  else if (position === 'Coordinator') bg = accent;
  else bg = `${primary}18`;
  const color = position === 'Member' ? primary : '#fff';
  return (
    <span
      className="font-display font-semibold text-type-cap px-3 py-1 rounded-full inline-block"
      style={{ backgroundColor: bg, color }}
    >
      {position}
    </span>
  );
}

export default function AlumniAssociationPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Alumni Association"
        subtitle="Connecting GRCP graduates across the pharmaceutical and healthcare world"
        breadcrumb={['Alumni Association']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto space-y-14">

          {/* About */}
          <section>
            <SectionHeader label="About" title="GRCP Alumni Association" />
            <div className="max-w-[780px] space-y-4">
              <p className="font-body text-type-body text-[#474747]">
                Gokaraju Rangaraju College of Pharmacy Alumni Association was established in the year 2007.
                The Alumni Association of GRCP maintains a healthy relationship between the institute and its
                alumni, students, and other stakeholders. The association organizes annual alumni meets every
                year during the month of February at the Nizampet campus.
              </p>
              <p className="font-body text-type-body text-[#474747]">
                The association aims to strengthen the bond between alumni, current students, and the institution
                while providing a platform for career guidance, networking, and knowledge sharing with the
                pharmaceutical community.
              </p>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <SectionHeader label="Navigation" title="Alumni Links" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {alumniLinks.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 p-5 rounded-xl border bg-white hover:shadow-sm transition-shadow"
                  style={{ borderColor: `${primary}20`, borderLeft: `4px solid ${accent}` }}
                >
                  <p className="font-display font-semibold text-type-body" style={{ color: primary }}>
                    {item.label}
                  </p>
                  <p className="font-body text-type-ui-sm text-[#6B7280] flex-1">
                    {item.desc}
                  </p>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-type-ui-sm underline mt-1"
                      style={{ color: accent }}
                    >
                      Open ↗
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="font-display font-semibold text-type-ui-sm underline mt-1"
                      style={{ color: primary }}
                    >
                      View →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Executive Committee */}
          <section>
            <SectionHeader label="Leadership" title="Executive Committee 2025–26" />
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${primary}18` }}>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: accent }}>
                    {['S.No.', 'Name', 'Designation', 'Position', 'Email'].map((h) => (
                      <th
                        key={h}
                        className="font-display font-semibold text-type-cap text-white text-left px-5 py-3.5 tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {committee.map((row, i) => (
                    <tr
                      key={row.sno}
                      style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}
                    >
                      <td className="font-body text-type-ui text-[#374151] px-5 py-3.5">{row.sno}</td>
                      <td className="font-display font-semibold text-type-ui px-5 py-3.5" style={{ color: primary }}>{row.name}</td>
                      <td className="font-body text-type-ui text-[#374151] px-5 py-3.5">{row.designation}</td>
                      <td className="px-5 py-3.5"><PositionBadge position={row.position} /></td>
                      <td className="px-5 py-3.5">
                        {row.email ? (
                          <a
                            href={`mailto:${row.email}`}
                            className="font-display text-type-ui-sm underline"
                            style={{ color: primary }}
                          >
                            {row.email}
                          </a>
                        ) : (
                          <span className="font-body text-type-ui-sm text-[#9CA3AF]">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact strip */}
          <div
            className="rounded-xl p-5 flex items-center gap-3"
            style={{ backgroundColor: `${accent}10`, border: `1px solid ${accent}30`, borderLeft: `4px solid ${accent}` }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke={accent} strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-body text-type-ui text-[#474747]">
              For alumni related queries, contact us at{' '}
              <a href="mailto:alumni@grcp.ac.in" className="font-semibold underline" style={{ color: accent }}>
                alumni@grcp.ac.in
              </a>
            </p>
          </div>

        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
