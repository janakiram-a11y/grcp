import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import PageHero from './PageHero';
import AdmissionsCTA from './AdmissionsCTA';
import Footer from './Footer';

export default function AdminSidebarLayout({
  college,
  pageTitle,
  pageSubtitle,
  pageBreadcrumb = [],
  currentSection,
}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumb={pageBreadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {currentSection?.content}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
