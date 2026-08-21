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
      <h2 className="font-display font-bold text-type-h5" style={{ color: accent }}>
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

function DisclosureSection({ title, links }) {
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

export default function MandatoryDisclosuresPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Mandatory Disclosures"
        subtitle="Regulatory approvals, accreditations, and institutional transparency documents"
        breadcrumb={['Mandatory Disclosures']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          <DisclosureSection
            title="AICTE Disclosures"
            links={[
              { label: 'Approval Process 2021-22', href: 'https://grcp.ac.in/downloads/AICTE%20EOA%202021-22.pdf' },
              { label: 'Approval Process 2022-23', href: 'https://grcp.ac.in/downloads/AICTE%20EOA%202022-23.pdf' },
            ]}
          />

          <DisclosureSection
            title="NBA Disclosures"
            links={[
              { label: 'NBA Accreditation', href: 'https://grcp.ac.in/downloads/NBA%20Accreditation.pdf' },
              { label: 'Certificate 2022', href: 'https://grcp.ac.in/downloads/Certificate%202022.pdf' },
            ]}
          />


          <DisclosureSection
            title="OU Disclosures"
            links={[
              { label: 'OU Affiliation 2025-2026', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202025-2026.pdf' },
              { label: 'OU Affiliation 2024-2025', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202024-2025.pdf' },
              { label: 'OU Affiliation 2023-2024', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202023-2024.pdf' },
              { label: 'OU Affiliation 2022-2023', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202022-2023.pdf' },
              { label: 'OU Affiliation 2021-2022', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202021-22.pdf' },
              { label: 'OU Affiliation 2020-2021', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202020-21.pdf' },
            ]}
          />

          <DisclosureSection
            title="PCI Disclosures"
            links={[
              { label: 'Decision Letter — PCI for Academic Session 2025-2026', href: 'https://grcp.ac.in/downloads/Decision%20Letter_PCI_%20for%20Academic%20Session%282025-2026%29.pdf' },
              { label: 'Decision Letter — PCI for Academic Session 2021-2022', href: 'https://grcp.ac.in/downloads/Decision%20Letter_PCI_%20for%20Academic%20Session%282021-2022%29.pdf' },
              { label: 'Final SIF Report 2021-22', href: 'https://grcp.ac.in/downloads/Final%20SIF%20Report%2021-22.pdf' },
            ]}
          />

          <DisclosureSection
            title="Audit Reports"
            links={[
              { label: 'GRCP Audit Report 2024-25', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20report%202024-25.pdf' },
              { label: 'GRCP Audit Report 2023-24', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20report%202023-24.pdf' },
              { label: 'GRCP Audit Report 2022-23', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20Report%202022-2023.pdf' },
              { label: 'GRCP Audit Report 2020-21', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20Report%202020-21.pdf' },
              { label: 'GRCP Audit Report 2019-20', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20Report%202019-20.pdf' },
              { label: 'GRCP Audit Report 2018-19', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20report%202018-19.pdf' },
            ]}
          />

        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
