/**
 * CollegeLayout — page shell for the homepage.
 *
 * Renders the exact same SiteHeader used by every inner page (Topbar +
 * sticky Navbar/NavStrip) so the logo bar and navbar have one single
 * implementation site-wide — never duplicate that header markup here.
 */

import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';

export default function CollegeLayout({ college, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFC] font-display overflow-x-clip">
      <SiteHeader college={college} />

      <main className="flex-1">
        {children}
      </main>

      <Footer college={college} />
    </div>
  );
}
