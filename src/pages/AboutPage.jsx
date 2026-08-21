import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-semibold text-type-h2-mob pb-3"
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

function SectionDesc({ text }) {
  return (
    <p className="font-body font-normal text-type-body text-[#474747]">
      {text}
    </p>
  );
}

function ObjectivesList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 mt-[9px]"
            style={{ backgroundColor: college.greenAccent }}
          />
          <span className="font-body text-type-body text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OUAdminCard({ person }) {
  return (
    <div
      className="flex flex-row items-stretch rounded-xl overflow-hidden bg-white"
      style={{
        border: `1px solid ${college.primaryColor}16`,
        boxShadow: '0 1px 8px rgba(45,122,80,0.07), 0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      {/* Left — portrait image */}
      <div className="flex-shrink-0 overflow-hidden" style={{ width: 200 }}>
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover object-top"
            style={{ minHeight: 200 }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `${college.primaryColor}0A`, minHeight: 200 }}
          >
            <svg className="w-16 h-16 opacity-20" style={{ color: college.primaryColor }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>

      {/* Right — info */}
      <div className="flex flex-col justify-center gap-2 px-6 py-5 flex-1">
        {/* Role */}
        <p className="font-display font-bold text-type-body" style={{ color: '#1A1A2E' }}>
          {person.role}
        </p>

        {/* Name */}
        <h3 className="font-display font-bold text-type-h5 leading-snug" style={{ color: college.primaryColor }}>
          {person.name}
        </h3>

        {/* Qualification */}
        {person.qualification && (
          <p className="font-body text-type-ui-sm" style={{ color: '#6B7280' }}>
            {person.qualification}
          </p>
        )}

        {/* Divider */}
        <div className="w-10 h-[2px] rounded-full my-1" style={{ backgroundColor: college.greenAccent }} />

        {/* Description */}
        <p className="font-body text-type-body" style={{ color: '#474747' }}>
          {person.description}
        </p>
      </div>
    </div>
  );
}

function AboutSection() {
  const vmCards = [
    {
      label: 'Our Vision',
      title: 'Vision',
      content: (
        <p className="font-body font-normal text-type-body-xs text-[#474747]">{college.vision}</p>
      ),
    },
    {
      label: 'Our Mission',
      title: 'Mission',
      content: (
        <ul className="space-y-2">
          {college.mission.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                style={{ backgroundColor: college.greenAccent }}
              />
              <span className="font-body font-normal text-type-body-xs text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Our Standard',
      title: 'Quality Policy',
      content: (
        <p className="font-body font-normal text-type-body-xs text-[#474747]">{college.qualityPolicy}</p>
      ),
    },
    {
      label: 'Our Approach',
      title: 'Strategies',
      content: (
        <ul className="space-y-2">
          {college.strategies.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                style={{ backgroundColor: college.greenAccent }}
              />
              <span className="font-body font-normal text-type-body-xs text-[#474747]">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-14">

      {/* ── About Inspirer ─────────────────────────────────────────────── */}
      <section>
        <SectionHeader label="Founding Legacy" title="About Inspirer" />
        <div className="mt-4">
          <SectionDesc text={college.aboutInspirer} />
        </div>
      </section>

      {/* ── The Promoter ───────────────────────────────────────────────── */}
      <section>
        <SectionHeader label="Leadership" title="The Promoter" />
        <div className="mt-4">
          <SectionDesc text={college.aboutPromoter} />
        </div>
      </section>

      {/* ── The Sponsoring Society ─────────────────────────────────────── */}
      <section>
        <SectionHeader label="Institution" title="The Sponsoring Society" />
        <div className="mt-4">
          <p className="font-body font-normal text-type-body text-[#474747]">
            Dr. Gokaraju Ganga Raju started{' '}
            <strong className="font-semibold" style={{ color: college.primaryColor }}>
              Gokaraju Rangaraju Educational Society
            </strong>{' '}
            in fond memory of his father late Shri Gokaraju Rangaraju with a motto to &ldquo;Promote modern and scientific education and to help develop the character of the younger generation of all castes, communities and religions&rdquo;.
          </p>
        </div>
      </section>

      {/* ── About GRCP ─────────────────────────────────────────────────── */}
      <section>
        <SectionHeader label="Our College" title="About GRCP" />
        <div className="mt-4 space-y-4">
          {college.aboutDetailedParagraphs.map((para, i) => (
            <SectionDesc key={i} text={para} />
          ))}
        </div>
      </section>

      {/* ── Osmania University Administration ─────────────────────────── */}
      <section>
        <SectionHeader label="Affiliating University" title="Osmania University Administration" />
        <p className="font-body text-type-body text-[#474747] mt-2 mb-6">
          Gokaraju Rangaraju College of Pharmacy is affiliated to Osmania University, Hyderabad.
          The university is led by the following administrators.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <OUAdminCard person={college.ouAdmin.vc} />
          <OUAdminCard person={college.ouAdmin.registrar} />
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}18` }} />

      {/* ── Vision & Mission ───────────────────────────────────────────── */}
      <section>
        <SectionHeader label="Values & Direction" title="Vision & Mission" />
        <div className="mt-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vmCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-7 bg-white"
                style={{ border: '1px solid rgba(0,90,40,0.10)' }}
              >
                <h3 className="font-display font-semibold text-type-h3-mob mb-3" style={{ color: college.greenAccent }}>{card.title}</h3>
                <div
                  className="w-8 h-[3px] mb-4 rounded-full"
                  style={{ backgroundColor: college.greenAccent }}
                />
                {card.content}
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-8"
            style={{ backgroundColor: '#EEF7F1' }}
          >
            <div className="mb-7 text-center">
              <h3 className="font-display font-semibold text-type-h3-mob" style={{ color: college.greenAccent }}>Core Values</h3>
              <div
                className="w-10 h-[3px] rounded-full mx-auto mt-3"
                style={{ backgroundColor: college.greenAccent }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {college.coreValues.map((value) => (
                <div
                  key={value.name}
                  className="bg-white rounded-xl p-5"
                  style={{ border: '1px solid rgba(0,90,40,0.10)', borderLeftWidth: '4px', borderLeftColor: college.primaryColor }}
                >
                  <h4 className="font-display font-medium text-type-body-xs mb-1.5" style={{ color: college.primaryColor }}>{value.name}</h4>
                  <p className="font-body text-type-ui-sm text-[#474747]">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PeoSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <SectionHeader label="About PEOs" title="Programme Educational Objectives" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          Programme Educational Objectives are broad statements that describe what graduates are expected
          to achieve within a few years after graduation.
        </p>
      </div>

      {/* Table layout matching reference image */}
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${college.primaryColor}20` }}>
        <table className="w-full border-collapse">
          <tbody>
            {college.peo.map((item, i) => (
              <tr
                key={item.code}
                style={{ borderBottom: i < college.peo.length - 1 ? `1px solid ${college.primaryColor}15` : 'none' }}
              >
                {/* PEO code cell */}
                <td
                  className="font-display font-bold text-type-body align-top whitespace-nowrap px-6 py-5"
                  style={{
                    color: college.primaryColor,
                    borderRight: `1px solid ${college.primaryColor}15`,
                    width: '80px',
                    backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#fff',
                  }}
                >
                  {item.code.replace(' ', ' ')}
                </td>
                {/* Description cell */}
                <td
                  className="font-body font-normal text-type-body text-[#474747] px-6 py-5 align-top"
                  style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#fff' }}
                >
                  {item.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PosSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <SectionHeader label="About POs" title="Programme Outcomes" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4">
          Programme Outcomes describe what students are expected to know, understand, and be able to do
          by the time of graduation.
        </p>
      </div>

      {/* Table layout — title left, description right */}
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: `${college.primaryColor}20` }}>
        <table className="w-full border-collapse">
          <tbody>
            {college.pos.map((item, i) => (
              <tr
                key={item.title}
                style={{ borderBottom: i < college.pos.length - 1 ? `1px solid ${college.primaryColor}15` : 'none' }}
              >
                {/* Title cell */}
                <td
                  className="font-display font-bold text-type-body align-top whitespace-nowrap px-6 py-5"
                  style={{
                    color: college.primaryColor,
                    borderRight: `1px solid ${college.primaryColor}15`,
                    width: '200px',
                    backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#fff',
                  }}
                >
                  {item.title}:
                </td>
                {/* Description cell */}
                <td
                  className="font-body font-normal text-type-body text-[#474747] px-6 py-5 align-top"
                  style={{ backgroundColor: i % 2 === 0 ? '#FAFAFA' : '#fff' }}
                >
                  {item.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const sectionConfig = {
  about: {
    title: 'About GRCP',
    subtitle: 'Our heritage, founding society, vision, mission, and core values',
    breadcrumb: ['About Us', 'About GRCP'],
  },
  peo: {
    title: 'Programme Educational Objectives',
    subtitle: 'Broad goals defining what our graduates will achieve in their professional careers',
    breadcrumb: ['About Us', 'PEO'],
  },
  pos: {
    title: 'Programme Outcomes',
    subtitle: 'Competencies and skills that every GRCP graduate will possess upon completion',
    breadcrumb: ['About Us', 'POs'],
  },
};

const sectionContent = {
  about: <AboutSection />,
  peo: <PeoSection />,
  pos: <PosSection />,
};

export default function AboutPage({ section = 'about' }) {
  const config = sectionConfig[section] || sectionConfig.about;
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
          {sectionContent[section] || sectionContent.about}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
