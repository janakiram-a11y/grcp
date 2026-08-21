import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

function PdfIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </svg>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="mb-5">
      <h2 className="font-display font-bold text-type-h5" style={{ color: primary }}>
        {title}
      </h2>
      <div className="w-10 h-[3px] rounded-full mt-2" style={{ backgroundColor: accent }} />
    </div>
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

function NirfSection({ title, links }) {
  return (
    <section className="mb-10">
      <SectionHeader title={title} />
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

export default function NirfPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="NIRF"
        subtitle="National Institutional Ranking Framework — GRCP submissions and rankings"
        breadcrumb={['NIRF']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          <div
            className="rounded-xl p-5 mb-10 flex items-start gap-3"
            style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
          >
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="font-body text-type-body-xs text-[#4B5563]">
              The National Institutional Ranking Framework (NIRF) was approved by the MHRD (now Ministry of
              Education) and launched in September 2015. The methodology draws from the overall recommendations
              broad understanding arrived at by a Core Committee set up by MHRD.
            </p>
          </div>

          <NirfSection
            title="NIRF 2026"
            links={[
              { label: 'NIRF — SDG Institution', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Overall.pdf' },
              { label: 'NIRF — Pharmacy', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Pharmacy.pdf' },
              { label: 'NIRF — Innovation', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Innovation.pdf' },
              { label: 'NIRF — Overall', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Overall.pdf' },
            ]}
          />

          <NirfSection
            title="NIRF 2025"
            links={[
              { label: 'NIRF — SDG Institution', href: 'https://grcp.ac.in/downloads/NIRF-SDG%20institution%202025.pdf' },
              { label: 'NIRF — Pharmacy', href: 'https://grcp.ac.in/downloads/NIRF-Pharmacy%202025.pdf' },
              { label: 'NIRF — Innovation', href: 'https://grcp.ac.in/downloads/NIRF-Innovation%202025.pdf' },
              { label: 'NIRF — Overall', href: 'https://grcp.ac.in/downloads/NIRF-Overall%202025.pdf' },
            ]}
          />

          <NirfSection
            title="Historical NIRF Submissions"
            links={[
              { label: 'Certificate 2022', href: 'https://grcp.ac.in/downloads/Certificate%202022.pdf' },
              { label: 'NIRF Innovation', href: 'https://grcp.ac.in/downloads/NIRF-innovation.pdf' },
              { label: 'Data Submitted by Institution for India Rankings 2024', href: 'https://grcp.ac.in/downloads/Gokaraju%20Rangaraju%20College%20of%20Pharmacy20240127-.pdf' },
              { label: 'Data Submitted by Institution for India Rankings 2023', href: 'https://grcp.ac.in/downloads/NIRF_Data_2023.pdf' },
              { label: 'Data Submitted by Institution for India Rankings 2022', href: 'https://grcp.ac.in/downloads/Data%20Submitted%20by%20Institution%20for%20India%20Rankings2022.pdf' },
            ]}
          />

        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
