import { Link } from 'react-router-dom';

/* ── Social icons ─────────────────────────────────────────────────────────── */
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

/* ── Contact icons ────────────────────────────────────────────────────────── */
const PinIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.6">
    <path d="M10 1.667A5.833 5.833 0 014.167 7.5c0 4.375 5.833 10.833 5.833 10.833S15.833 11.875 15.833 7.5A5.833 5.833 0 0010 1.667z" strokeLinejoin="round" />
    <circle cx="10" cy="7.5" r="2" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0" stroke="currentColor" strokeWidth="1.6">
    <path d="M2.5 3.333a.833.833 0 01.833-.833h1.5a.833.833 0 01.817.7l.558 3.333a.833.833 0 01-.45.883l-1.166.583a8.25 8.25 0 004.5 4.5l.583-1.166a.833.833 0 01.883-.45l3.333.558a.833.833 0 01.7.817v1.5a.833.833 0 01-.833.833C6.75 14.59 2.5 10.34 2.5 5.167v-1.5z" strokeLinejoin="round" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0" stroke="currentColor" strokeWidth="1.6">
    <rect x="1.667" y="4.167" width="16.667" height="11.667" rx="1.5" strokeLinejoin="round" />
    <path d="M1.667 6.667l8.333 5 8.333-5" strokeLinecap="round" />
  </svg>
);

const socialList = [
  { Icon: TwitterIcon,   label: 'X (Twitter)', href: 'https://twitter.com/grcp_pharmacy' },
  { Icon: LinkedInIcon,  label: 'LinkedIn',    href: 'https://www.linkedin.com/school/gokaraju-rangaraju-college-of-pharmacy' },
  { Icon: InstagramIcon, label: 'Instagram',   href: 'https://www.instagram.com/grcp_pharmacy' },
  { Icon: FacebookIcon,  label: 'Facebook',    href: 'https://www.facebook.com/grcp.pharmacy' },
];

/* ── Shared sub-components ────────────────────────────────────────────────── */
function ColHeading({ children }) {
  return (
    <p className="font-display font-bold text-type-body mb-5" style={{ color: '#1A1A2E' }}>
      {children}
    </p>
  );
}

function FLink({ href, external, college, children }) {
  const cls = 'font-display text-type-ui leading-relaxed transition-colors duration-150';
  const style = { color: '#4B5563' };
  const hoverIn  = (e) => (e.currentTarget.style.color = college.greenAccent);
  const hoverOut = (e) => (e.currentTarget.style.color = '#4B5563');

  if (external || href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className={cls} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={cls} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      {children}
    </Link>
  );
}

function LinkList({ items, college }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => {
        const label = item.label || item;
        const href  = item.href  || '#';
        return (
          <li key={label}>
            <FLink href={href} external={item.external} college={college}>{label}</FLink>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Main footer ──────────────────────────────────────────────────────────── */
export default function Footer({ college }) {
  return (
    <footer className="w-full" style={{ backgroundColor: '#F8FAF8', borderTop: '1px solid rgba(45,122,80,0.14)' }}>

      {/* ── Brand strip — logo + tagline + socials ───────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[120px] pt-12 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex flex-col gap-2">
            <img
              src={college.logo}
              alt={`${college.shortName} Logo`}
              className="h-14 w-auto object-contain object-left"
            />
            <p className="font-body text-type-body-xs" style={{ color: '#6B7280', maxWidth: 400 }}>
              {college.tagline}
            </p>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialList.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                style={{ backgroundColor: 'rgba(45,122,80,0.08)', color: '#2D7A50', border: '1px solid rgba(45,122,80,0.14)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C72235'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#C72235'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(45,122,80,0.08)'; e.currentTarget.style.color = '#2D7A50'; e.currentTarget.style.borderColor = 'rgba(45,122,80,0.14)'; }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Thin divider ─────────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[120px]">
        <div style={{ height: 1, backgroundColor: 'rgba(45,122,80,0.10)' }} />
      </div>

      {/* ── Main columns ─────────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[120px] pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* ── Col 1: Committees ─────────────────────────────────────────── */}
          <div className="md:col-span-4">
            <ColHeading>Committees</ColHeading>
            <LinkList items={college.footerCommittees} college={college} />
          </div>

          {/* ── Col 2: Achievements + Quick Links ────────────────────────── */}
          <div className="md:col-span-4">
            <ColHeading>Achievements</ColHeading>
            <LinkList items={college.footerAchievements} college={college} />

            <div className="mt-8">
              <ColHeading>Quick Links</ColHeading>
              <LinkList items={college.footerQuickLinks} college={college} />
            </div>
          </div>

          {/* ── Col 3: Contact + QR code ──────────────────────────────────── */}
          <div className="md:col-span-4">
            <ColHeading>Contact us</ColHeading>
            <ul className="flex flex-col gap-3.5">

              {/* College name */}
              <li>
                <p className="font-display font-semibold text-type-body" style={{ color: '#1A1A2E' }}>
                  {college.fullName}
                </p>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <span style={{ color: '#2D7A50' }}><PinIcon /></span>
                <span className="font-display text-type-ui leading-relaxed" style={{ color: '#4B5563' }}>
                  {college.address}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span style={{ color: '#2D7A50' }}><PhoneIcon /></span>
                <a href={`tel:${college.phone}`}
                  className="font-display text-type-ui transition-colors" style={{ color: '#4B5563' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C72235')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
                >
                  {college.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span style={{ color: '#2D7A50' }}><MailIcon /></span>
                <a href={`mailto:${college.email}`}
                  className="font-display text-type-ui transition-colors" style={{ color: '#4B5563' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C72235')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
                >
                  {college.email}
                </a>
              </li>
            </ul>

            {/* QR code section */}
            <div className="mt-6">
              <p className="font-display font-semibold text-type-ui mb-3" style={{ color: '#C72235' }}>
                Scan this QR Code to reach the college
              </p>
              <img
                src="https://grcp.ac.in/images/qr1666778877694.png"
                alt="GRCP Location QR Code"
                className="rounded-lg border"
                style={{ width: 140, height: 140, objectFit: 'contain', borderColor: 'rgba(45,122,80,0.15)' }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[120px]">
        <div style={{ height: 1, backgroundColor: 'rgba(45,122,80,0.12)' }} />
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[120px] py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-display text-type-ui-sm" style={{ color: '#6B7280' }}>
            © {new Date().getFullYear()} {college.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { text: 'Privacy Policy',   href: '/mandatory-disclosures' },
              { text: 'Terms of Service', href: '/mandatory-disclosures' },
              { text: 'Contact Us',       href: '/contact' },
            ].map(({ text, href }) => (
              <Link key={text} to={href}
                className="font-display text-type-ui-sm transition-colors" style={{ color: '#6B7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C72235')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
