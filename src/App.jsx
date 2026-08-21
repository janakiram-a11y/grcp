import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GrcpPage from './pages/GrcpPage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ProgrammesPage from './pages/ProgrammesPage';
import AcademicsPage from './pages/AcademicsPage';
import ResearchPage from './pages/ResearchPage';
import ExaminationPage from './pages/ExaminationPage';
import PlacementsPage from './pages/PlacementsPage';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/ContactPage';
import AlumniAssociationPage from './pages/AlumniAssociationPage';
import MandatoryDisclosuresPage from './pages/MandatoryDisclosuresPage';
import NbaPage from './pages/NbaPage';
import EventsPage from './pages/EventsPage';
import EBulletinPage from './pages/EBulletinPage';
import DownloadsPage from './pages/DownloadsPage';
import ApprovalsRecognitionsPage from './pages/ApprovalsRecognitionsPage';
import TeachingLearningMethodsPage from './pages/TeachingLearningMethodsPage';
import StudentSupportPage from './pages/StudentSupportPage';
import RulesRegulationsPage from './pages/RulesRegulationsPage';
import SkillSeriesPage from './pages/SkillSeriesPage';
import GalleryPage from './pages/GalleryPage';
import InfrastructurePage from './pages/InfrastructurePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<GrcpPage />} />

        {/* About — uses prop-based section, not URL params */}
        <Route path="/about" element={<AboutPage section="about" />} />
        <Route path="/about/peo" element={<AboutPage section="peo" />} />
        <Route path="/about/pos" element={<AboutPage section="pos" />} />
        <Route path="/peo" element={<Navigate to="/about/peo" replace />} />
        <Route path="/pos" element={<Navigate to="/about/pos" replace />} />

        {/* Administration — dynamic :section passes param correctly */}
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/administration/:section" element={<AdministrationPage />} />

        {/* Admissions — dynamic :section passes param correctly */}
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/:section" element={<AdmissionsPage />} />

        {/* Programmes — :programme and :specialization pass params correctly */}
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/programmes/:programme" element={<ProgrammesPage />} />
        <Route path="/programmes/:programme/:specialization" element={<ProgrammesPage />} />

        {/* Academics — :section and :sub pass params correctly */}
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/:section" element={<AcademicsPage />} />
        <Route path="/academics/:section/:sub" element={<AcademicsPage />} />

        {/* Research — dynamic :section passes param correctly */}
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/research/:section" element={<ResearchPage />} />

        {/* Examination — dynamic :section passes param correctly */}
        <Route path="/examination" element={<ExaminationPage />} />
        <Route path="/examination/:section" element={<ExaminationPage />} />

        {/* Placements — dynamic :section passes param correctly */}
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/placements/:section" element={<PlacementsPage />} />

        {/* Alumni — dynamic :section passes param correctly */}
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/alumni/:section" element={<AlumniPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<ContactPage />} />

        {/* Standalone pages */}
        <Route path="/alumni-association" element={<AlumniAssociationPage />} />
        <Route path="/mandatory-disclosures" element={<MandatoryDisclosuresPage />} />
        <Route path="/nba" element={<NbaPage />} />
        <Route path="/nirf" element={<NbaPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/e-bulletin" element={<EBulletinPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />

        {/* New standalone pages */}
        <Route path="/approvals-recognitions" element={<ApprovalsRecognitionsPage />} />
        <Route path="/teaching-learning-methods" element={<TeachingLearningMethodsPage />} />
        <Route path="/student-support" element={<StudentSupportPage />} />
        <Route path="/rules-regulations" element={<RulesRegulationsPage />} />
        <Route path="/skill-series" element={<SkillSeriesPage />} />
        <Route path="/gallery/:category" element={<GalleryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />

        {/* Fallback */}
        <Route path="*" element={<GrcpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
