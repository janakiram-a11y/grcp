import { useState, useCallback } from 'react';
import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import AccreditationSection from '../components/AccreditationSection';
import AcademicPrograms from '../components/AcademicPrograms';
import CareerOutcomes from '../components/CareerOutcomes';
import ResearchSection from '../components/ResearchSection';
import CampusLife from '../components/CampusLife';
import AdmissionsCTA from '../components/AdmissionsCTA';
import AntiRaggingModal from '../components/AntiRaggingModal';
import QuickLinks from '../components/QuickLinks';

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

  return (
    <>
      {modalVisible && <AntiRaggingModal onClose={closeModal} />}

      <CollegeLayout college={college}>
        <Hero college={college} />
        <QuickLinks />
        <WhyChooseUs college={college} />
        <AccreditationSection college={college} />
        <AcademicPrograms college={college} />
        <CareerOutcomes college={college} />
        <ResearchSection college={college} />
        <CampusLife college={college} />
        <AdmissionsCTA college={college} />
      </CollegeLayout>
    </>
  );
}
