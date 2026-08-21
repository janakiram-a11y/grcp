import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

const editions = [
  {
    id: 1,
    volume: 'Volume 1',
    year: '2025',
    period: 'January – April 2025',
    title: 'GRCP E-Bulletin',
    theme: 'First Light: Igniting Ideas, Inspiring Impact',
    description:
      'The inaugural volume of the GRCP E-Bulletin documents the rich institutional activities, academic milestones, student achievements, research highlights, and faculty accomplishments of the January–April 2025 semester. It captures the vibrant academic life at Gokaraju Rangaraju College of Pharmacy.',
    pdfUrl: 'https://grcp.ac.in/downloads/GRCP%20E-Bulletin%20Jan-April%2025.pdf',
    badge: 'NEW',
    color: accent,
  },
  {
    id: 2,
    volume: 'Special Edition',
    year: '2023',
    period: '2023',
    title: 'GRCP Insights',
    theme: 'Empowering Minds, Inspiring Futures',
    description:
      'The GRCP Insights Special Edition 2023 is a student magazine that celebrates the creative, academic, and extracurricular endeavors of GRCP students and faculty. It showcases articles, research snippets, event coverage, and inspirational stories from the GRCP community.',
    pdfUrl: 'https://grcp.ac.in/downloads/GRCP%20Special%20edition%202023.pdf',
    badge: null,
    color: primary,
  },
];

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
    </svg>
  );
}

function EditionCard({ edition }) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden border shadow-sm"
      style={{ borderColor: `${primary}18` }}
    >
      {/* Cover strip */}
      <div
        className="relative flex flex-col gap-3 p-8"
        style={{ backgroundColor: edition.color, minHeight: '200px' }}
      >
        {/* Watermark */}
        <svg
          className="absolute right-5 bottom-4 w-24 h-24 opacity-[0.08]"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>

        <div className="flex items-center gap-2">
          <span
            className="font-display font-bold text-type-label tracking-[0.12em] uppercase px-2.5 py-1 rounded text-white"
            style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
          >
            {edition.volume}
          </span>
          {edition.badge && (
            <span
              className="font-display font-bold text-type-label px-2 py-0.5 rounded text-white"
              style={{ backgroundColor: '#F59E0B' }}
            >
              {edition.badge}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-type-h2-mob text-white">{edition.title}</h3>
        <p className="font-display text-type-ui-sm italic text-white/80">"{edition.theme}"</p>
        <p className="font-display font-semibold text-type-cap text-white/65">{edition.period}</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 p-7 bg-white flex-1">
        <p className="font-body text-type-body-xs text-[#474747] flex-1">
          {edition.description}
        </p>
        <a
          href={edition.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <DownloadIcon />
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default function EBulletinPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="E-Bulletin"
        subtitle="Official institutional publications of Gokaraju Rangaraju College of Pharmacy"
        breadcrumb={['E-Bulletin']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          {/* About */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-type-h2-mob lg:text-type-h2 mb-2" style={{ color: accent }}>
              About the E-Bulletin
            </h2>
            <div className="w-14 h-[3px] rounded-full mb-6" style={{ backgroundColor: accent }} />
            <p className="font-body text-type-body text-[#474747] max-w-[780px]">
              The GRCP E-Bulletin is an official institutional publication of Gokaraju Rangaraju College of
              Pharmacy, Hyderabad. It documents academic achievements, research activities, student
              accomplishments, faculty contributions, events, and other highlights from the college community.
              The E-Bulletin serves as a platform to communicate the vibrant intellectual and extracurricular
              life at GRCP to students, alumni, parents, and stakeholders.
            </p>
          </div>

          {/* Editions */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-type-h5 mb-2" style={{ color: accent }}>
              Editions
            </h2>
            <div className="w-10 h-[3px] rounded-full mb-6" style={{ backgroundColor: accent }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
            {editions.map((ed) => (
              <EditionCard key={ed.id} edition={ed} />
            ))}
          </div>

          {/* Info callout */}
          <div
            className="rounded-xl p-5 flex items-start gap-3"
            style={{ backgroundColor: `${accent}10`, borderLeft: `4px solid ${accent}` }}
          >
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke={accent} strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-body text-type-body-xs text-[#474747]">
              For editorial queries or to contribute to the next edition of the GRCP E-Bulletin, contact us at{' '}
              <a
                href="mailto:info@grcp.ac.in"
                className="font-semibold underline"
                style={{ color: accent }}
              >
                info@grcp.ac.in
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
