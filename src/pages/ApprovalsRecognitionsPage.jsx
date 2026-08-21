import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

export default function ApprovalsRecognitionsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Approvals and Recognitions"
        subtitle="Regulatory approvals, accreditations, and institutional recognitions of GRCP"
        breadcrumb={['Approvals and Recognitions']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: `${college.primaryColor}18`, minHeight: 800 }}
          >
            <iframe
              src="/approvals-and-recognitions.pdf"
              title="GRCP Approvals and Recognitions"
              className="w-full"
              style={{ height: '80vh', minHeight: 700, border: 'none' }}
            />
          </div>
          <div className="mt-6 flex justify-end">
            <a
              href="/approvals-and-recognitions.pdf"
              download
              className="btn-primary"
            >
              Download PDF
            </a>
          </div>
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
