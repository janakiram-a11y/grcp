import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent  = college.greenAccent;

function SectionHeader({ label, title }) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <h2 className="font-display font-bold text-type-h2-mob" style={{ color: accent }}>
        {title}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

function PdfIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </svg>
  );
}

function PdfLink({ href, label }) {
  return (
    <li className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: '#F3F4F6' }}>
      <PdfIcon />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-display text-type-ui font-medium transition-colors hover:underline"
        style={{ color: primary }}
      >
        {label}
      </a>
    </li>
  );
}

function DocSection({ title, links }) {
  return (
    <section className="mb-10">
      <h3 className="font-display font-semibold text-type-h5 mb-4" style={{ color: accent }}>
        {title}
      </h3>
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${primary}18` }}>
        <ul className="px-5 py-2">
          {links.map((l, i) => (
            <PdfLink key={i} href={l.href} label={l.label} />
          ))}
        </ul>
      </div>
    </section>
  );
}

const ACCREDITATION_STATS = [
  { label: 'Programme',      value: 'B.Pharmacy' },
  { label: 'Validity',       value: '2025 – 2028' },
  { label: 'Grade',          value: 'Accredited' },
  { label: 'Awarded by',     value: 'NBA, New Delhi' },
];

export default function NbaPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="NBA Accreditation"
        subtitle="National Board of Accreditation — GRCP's commitment to quality pharmaceutical education"
        breadcrumb={['NBA']}
        bgImage={college.heroBgImage}
      />

      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto space-y-14">

          {/* About NBA */}
          <section>
            <SectionHeader label="Accreditation" title="About NBA" />
            <div className="max-w-[780px] space-y-4">
              <p className="font-body text-type-body text-[#474747]">
                The National Board of Accreditation (NBA) is an autonomous body under the Ministry of Education,
                Government of India, established to evaluate the quality of technical and professional education
                in the country. NBA accreditation is a mark of excellence recognizing that an institution meets
                defined standards of education quality, infrastructure, and outcomes.
              </p>
              <p className="font-body text-type-body text-[#474747]">
                Gokaraju Rangaraju College of Pharmacy has achieved NBA accreditation for its B.Pharmacy programme,
                affirming its commitment to delivering high-quality pharmaceutical education aligned with industry
                and academic standards. The accreditation validates the institution's academic processes, faculty
                qualifications, laboratory facilities, and student outcomes.
              </p>
            </div>
          </section>

          {/* Accreditation status cards */}
          <section>
            <SectionHeader label="Status" title="Accreditation Details" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {ACCREDITATION_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 flex flex-col gap-1 border"
                  style={{ borderColor: `${primary}18`, backgroundColor: `${primary}04` }}
                >
                  <span className="font-display text-type-label font-bold uppercase tracking-[0.1em]" style={{ color: `${primary}70` }}>
                    {stat.label}
                  </span>
                  <span className="font-display font-bold text-type-h5" style={{ color: primary }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Info callout */}
            <div
              className="rounded-xl p-5 flex items-start gap-3"
              style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
            >
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="font-body text-type-body-xs text-[#4B5563]">
                GRCP's B.Pharmacy programme has been accredited by the National Board of Accreditation (NBA),
                New Delhi for the period 2025–2028. This accreditation is a testament to the institution's
                dedication to academic excellence, quality infrastructure, and student outcomes.
              </p>
            </div>
          </section>

          {/* Documents */}
          <section>
            <SectionHeader label="Downloads" title="NBA Documents" />

            <DocSection
              title="Accreditation Certificate"
              links={[
                { label: 'NBA Accreditation Certificate — B.Pharmacy (2025–2028)', href: 'https://grcp.ac.in/downloads/NBA%20Accreditation.pdf' },
                { label: 'NBA Certificate 2022',                                    href: 'https://grcp.ac.in/downloads/Certificate%202022.pdf' },
              ]}
            />

            <DocSection
              title="Self-Assessment Reports (SAR)"
              links={[
                { label: 'SAR — B.Pharmacy Programme 2024–25', href: 'https://grcp.ac.in/downloads/NBA%20Accreditation.pdf' },
              ]}
            />

            <DocSection
              title="Programme Outcomes & Attainment"
              links={[
                { label: 'Programme Educational Objectives (PEO)', href: '/about/peo' },
                { label: 'Programme Outcomes (POs)',                href: '/about/pos' },
              ]}
            />
          </section>

          {/* NBA benefits */}
          <section>
            <SectionHeader label="Benefits" title="Why NBA Accreditation Matters" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  ),
                  title: 'Quality Education',
                  desc: 'Confirms that the programme meets defined quality benchmarks in curriculum, faculty, and infrastructure.',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  ),
                  title: 'Industry Recognition',
                  desc: 'Graduates from NBA-accredited programmes are preferred by top pharmaceutical companies and hospitals.',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ),
                  title: 'Global Equivalence',
                  desc: 'Facilitates recognition of qualifications for higher studies and employment opportunities abroad.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-5 rounded-xl border bg-white"
                  style={{ borderColor: `${primary}18` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primary}0F`, color: primary }}
                  >
                    {item.icon}
                  </div>
                  <p className="font-display font-semibold text-type-body" style={{ color: accent }}>
                    {item.title}
                  </p>
                  <p className="font-body text-type-ui-sm text-[#6B7280]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
