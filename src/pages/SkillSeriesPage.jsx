import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

const skillSeries = [
  {
    title: 'Communication Skills',
    desc: 'Developing verbal and written communication skills for professional settings including presentations, report writing, and interpersonal communication.',
  },
  {
    title: 'Personality Development',
    desc: 'Building confidence, leadership, and interpersonal skills through structured activities and workshops.',
  },
  {
    title: 'Pharmaceutical Industry Orientation',
    desc: 'Insights into pharmaceutical industry operations, regulatory affairs, quality control, and career pathways.',
  },
  {
    title: 'Research Methodology',
    desc: 'Training in scientific research methods, data analysis, literature review, and academic writing.',
  },
  {
    title: 'Entrepreneurship and Innovation',
    desc: 'Awareness programs on entrepreneurship, startup culture, and innovation opportunities in the pharmaceutical sector.',
  },
  {
    title: 'Digital Skills and Computer Applications',
    desc: 'Hands-on training in software tools, data analysis programs, and digital communication platforms used in pharmacy practice.',
  },
  {
    title: 'Clinical Pharmacy Skills',
    desc: 'Practical exposure to patient counseling, drug information services, and clinical pharmacy practice.',
  },
  {
    title: 'Regulatory Affairs',
    desc: 'Understanding drug regulatory requirements, documentation, and compliance with national and international guidelines.',
  },
];

export default function SkillSeriesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Skill Series"
        subtitle="Structured skill development programs to prepare pharmacy graduates for professional excellence"
        breadcrumb={['Skill Series']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto space-y-12">

          {/* Intro */}
          <div className="max-w-[760px]">
            <p className="font-body text-type-body-lg text-[#474747] leading-relaxed">
              The Skill Series at GRCP is a structured program designed to bridge the gap between academic learning and industry requirements. Through a series of focused workshops, seminars, and hands-on sessions, students acquire practical skills that complement their pharmaceutical education and enhance their employability.
            </p>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillSeries.map((skill, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-4"
                style={{
                  border: `1px solid ${primary}14`,
                  backgroundColor: i % 2 === 0 ? `${primary}05` : `${accent}06`,
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-type-h5 text-white"
                  style={{ backgroundColor: i % 2 === 0 ? primary : accent }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-type-body mb-2"
                    style={{ color: i % 2 === 0 ? primary : accent }}
                  >
                    {skill.title}
                  </h3>
                  <p className="font-body text-type-body text-[#474747]">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
          >
            <h2
              className="font-display font-bold text-type-h5 mb-5"
              style={{ color: primary }}
            >
              Program Objectives
            </h2>
            <ul className="space-y-3">
              {[
                'Enhance employability and career readiness of pharmacy graduates.',
                'Bridge the gap between theoretical knowledge and practical industry needs.',
                'Develop soft skills, leadership, and communication abilities.',
                'Expose students to emerging trends and technologies in pharmaceutical sciences.',
                'Foster entrepreneurial thinking and innovation mindset.',
                'Prepare students for national and international career opportunities.',
              ].map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[10px]"
                    style={{ backgroundColor: primary }}
                  />
                  <span className="font-body text-type-body text-[#474747]">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
