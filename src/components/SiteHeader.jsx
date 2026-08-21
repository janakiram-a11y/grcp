/**
 * SiteHeader — Shared 4-section header for all inner pages.
 *
 * Renders the complete header stack in the correct order:
 *  1. AnnouncementBar  (scrolling ticker — scrolls away)
 *  2. Topbar           (utility nav + search — scrolls away)
 *  3. Navbar           (logo + accreditation — scrolls away)
 *  4. NavStrip         (primary nav — sticky top-0)
 *
 * Import this single component instead of importing Navbar + NavStrip
 * individually in every page file.
 */

import Topbar from './Topbar';
import Navbar from './Navbar';
import NavStrip from './NavStrip';

export default function SiteHeader({ college }) {
  return (
    <>
      <Topbar college={college} />
      <Navbar college={college} />
      <NavStrip college={college} />
    </>
  );
}
