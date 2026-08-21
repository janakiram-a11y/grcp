import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

const BASE = 'https://grcp.ac.in/downloads/';

const categories = [
  {
    id: 'downloads',
    label: 'Downloads',
    files: [
      { name: 'GRCP Student ID Card Application Form', file: 'GRCP%20Student%20ID%20Card%20Application%20Form.docx', type: 'word' },
      { name: 'Application Form for Faculty Positions', file: 'APPLICATION%20FORM%20FOR%20FACULTY%20POSITIONS.docx', type: 'word' },
    ],
  },
];

function FileIcon({ type }) {
  if (type === 'word') {
    return (
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#2B579A' }}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path d="M14 2v6h6" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: accent }}>
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
    </svg>
  );
}

function CategoryBlock({ cat }) {
  return (
    <div className="mb-8">
      <div
        className="font-display font-bold text-type-ui-sm tracking-wide uppercase text-white px-5 py-3 rounded-t-xl"
        style={{ backgroundColor: accent }}
      >
        {cat.label}
      </div>
      <div className="rounded-b-xl border overflow-hidden" style={{ borderColor: `${primary}18`, borderTop: 'none' }}>
        <table className="w-full">
          <tbody>
            {cat.files.map((file, idx) => (
              <tr
                key={idx}
                className="border-b last:border-0"
                style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#FAFAFA', borderColor: '#F3F4F6' }}
              >
                <td className="font-display text-type-ui-sm text-[#9CA3AF] px-5 py-3.5 w-10 text-center">
                  {idx + 1}
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <FileIcon type={file.type} />
                    <span className="font-body text-type-ui text-[#374151]">{file.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 w-[130px] text-right">
                  <a
                    href={BASE + file.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-download"
                  >
                    <DownloadIcon />
                    Download
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

export default function DownloadsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Downloads"
        subtitle="Official documents, application forms, and institutional reports"
        breadcrumb={['Downloads']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">

          <div className="mb-8">
            <h2 className="font-display font-bold text-type-h2-mob lg:text-type-h2 mb-2" style={{ color: accent }}>
              Document Repository
            </h2>
            <div className="w-14 h-[3px] rounded-full mb-6" style={{ backgroundColor: accent }} />
            <p className="font-body text-type-body text-[#474747] max-w-[720px]">
              Download official documents and application forms from Gokaraju Rangaraju College of Pharmacy.
              Click the <strong>Download</strong> button next to any file to open or save it.
            </p>
          </div>

          {categories.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} />
          ))}

        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
