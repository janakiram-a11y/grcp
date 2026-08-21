/**
 * CollegeLayout — 4-section header structure
 *
 * ┌─────────────────────────────────────────────┐
 * │  1. AnnouncementBar  (scrolling ticker)      │  ← scrolls away
 * ├─────────────────────────────────────────────┤
 * │  2. Topbar  (utility nav + search)           │  ← scrolls away
 * ├─────────────────────────────────────────────┤
 * │  3. Navbar  (logo + accreditation)           │  ← sticky top-0
 * ├─────────────────────────────────────────────┤
 * │  4. NavStrip  (primary navigation menu)      │  ← sticky below logo
 * └─────────────────────────────────────────────┘
 * │  {children}  (page content)                  │
 * │  Footer                                       │
 */

import AnnouncementBar from './components/AnnouncementBar';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import NavStrip from './components/NavStrip';
import Footer from './components/Footer';

export default function CollegeLayout({ college, children }) {
  return (
    <div
      className="bg-[#FFFDFC] font-display"
      style={{
        '--college-primary': college.primaryColor,
        '--college-accent': college.accentColor,
      }}
    >
      {/* ── Section 2: Utility Navigation Bar (quick links + search) ─────── */}
      <Topbar college={college} />

      {/* ── Section 3: Logo & Accreditation Area ─────────────────────────── */}
      <Navbar college={college} />

      {/* ── Section 4: Primary Navigation Bar ───────────────────────────── */}
      <NavStrip college={college} />

      {/* ── Page Content ─────────────────────────────────────────────────── */}
      {children}

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <Footer college={college} />
    </div>
  );
}
