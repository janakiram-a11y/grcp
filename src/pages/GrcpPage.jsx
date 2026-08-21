import { useState, useCallback, useEffect } from 'react';
import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import CampusIntro from '../components/CampusIntro';
import WhyChooseUs from '../components/WhyChooseUs';
import AccreditationSection from '../components/AccreditationSection';
import AcademicPrograms from '../components/AcademicPrograms';
import CareerOutcomes from '../components/CareerOutcomes';
import ResearchSection from '../components/ResearchSection';
import CampusLife from '../components/CampusLife';
import AdmissionsCTA from '../components/AdmissionsCTA';
import AntiRaggingModal from '../components/AntiRaggingModal';
import QuickLinks from '../components/QuickLinks';
import ThemeVersionToggle from '../components/ThemeVersionToggle';
import { ThemeVersionContext } from '../ThemeVersionContext';

const THEME_STORAGE_KEY = 'grcp-home-theme-version';

/**
 * Module-level flag — lives in the JS module scope for the lifetime of this
 * browser session's JavaScript execution context.
 */
let antiRaggingShownThisLoad = false;

export default function GrcpPage() {
  const [modalVisible, setModalVisible] = useState(() => {
    if (!antiRaggingShownThisLoad) {
      antiRaggingShownThisLoad = true;
      return true;
    }
    return false;
  });

  const closeModal = useCallback(() => setModalVisible(false), []);

  // Home-page-only Version 1 / Version 2 color toggle. The version lives in
  // a data-theme-version attribute on <html>, which is what index.css's
  // [data-theme-version="v2"] token block keys off of — nothing here reads
  // or writes any state that other pages depend on, and the attribute is
  // cleared on unmount so leaving the home page always leaves this in the
  // default (Version 1) state.
  const [version, setVersion] = useState(() => {
    if (typeof window === 'undefined') return 'v1';
    return window.localStorage.getItem(THEME_STORAGE_KEY) === 'v2' ? 'v2' : 'v1';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-version', version);
    window.localStorage.setItem(THEME_STORAGE_KEY, version);
    return () => {
      document.documentElement.removeAttribute('data-theme-version');
    };
  }, [version]);

  return (
    <ThemeVersionContext.Provider value={{ version, setVersion }}>
      <ThemeVersionToggle />

      {modalVisible && <AntiRaggingModal onClose={closeModal} />}

      <CollegeLayout college={college}>
        <Hero college={college} />
        <QuickLinks />
        <CampusIntro college={college} />
        <WhyChooseUs college={college} />
        <AccreditationSection college={college} />
        <AcademicPrograms college={college} />
        <CareerOutcomes college={college} />
        <ResearchSection college={college} />
        <CampusLife college={college} />
        <AdmissionsCTA college={college} />
      </CollegeLayout>
    </ThemeVersionContext.Provider>
  );
}
