import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function MapPinIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <path d="M3 5a2 2 0 012-2h2.28l2.72 6.1-1.67 1.67a12 12 0 005.88 5.88l1.67-1.67L22 19.28V22a2 2 0 01-2 2A20 20 0 012 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon({ color }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none" />
    </svg>
  );
}


function ContactInfoCards() {
  const cards = [
    {
      Icon: MapPinIcon,
      heading: 'Our Address',
      content: (
        <p className="font-body text-type-body-xs text-[#474747]">
          {college.address}
        </p>
      ),
    },
    {
      Icon: PhoneIcon,
      heading: 'Phone',
      content: (
        <div className="space-y-1.5">
          <a
            href={`tel:${college.phone}`}
            className="font-display text-type-body-xs block underline"
            style={{ color: college.primaryColor }}
          >
            {college.phone}
          </a>
          <p className="font-display text-type-ui-sm text-[#6B7280]">Admissions:</p>
          <a
            href={`tel:${college.admissionsPhone}`}
            className="font-display text-type-body-xs block underline"
            style={{ color: college.primaryColor }}
          >
            {college.admissionsPhone}
          </a>
          <p className="font-body text-type-cap text-[#6B7280]">{college.admissionsLabel}</p>
        </div>
      ),
    },
    {
      Icon: EmailIcon,
      heading: 'Email',
      content: (
        <a
          href={`mailto:${college.email}`}
          className="font-display text-type-body-xs underline break-all"
          style={{ color: college.primaryColor }}
        >
          {college.email}
        </a>
      ),
    },
    {
      Icon: InstagramIcon,
      heading: 'Instagram',
      content: (
        <a
          href="https://www.instagram.com/grcp_offic"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-type-body-xs underline break-all"
          style={{ color: college.primaryColor }}
        >
          @grcp_offic
        </a>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white border rounded-2xl p-7"
          style={{ borderColor: `${college.primaryColor}18` }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: `${college.primaryColor}10` }}
          >
            <card.Icon color={college.primaryColor} />
          </div>
          <h3
            className="font-display font-semibold text-type-body mb-3"
            style={{ color: college.greenAccent }}
          >
            {card.heading}
          </h3>
          {card.content}
        </div>
      ))}
    </section>
  );
}

function WorkingHoursCard() {
  return (
    <section>
      <div
        className="rounded-2xl p-7 border"
        style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${college.primaryColor}10` }}
          >
            <ClockIcon color={college.primaryColor} />
          </div>
          <div className="flex-1">
            <h3
              className="font-display font-semibold text-type-body-lg mb-4"
              style={{ color: college.greenAccent }}
            >
              Working Hours
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mb-4">
              <div className="flex justify-between font-display text-type-body-xs">
                <span className="text-[#6B7280]">Monday – Saturday</span>
                <span className="font-semibold text-[#474747]">9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between font-display text-type-body-xs">
                <span className="text-[#6B7280]">2nd Saturday</span>
                <span className="font-semibold text-[#474747]">Holiday</span>
              </div>
              <div className="flex justify-between font-display text-type-body-xs">
                <span className="text-[#6B7280]">Sunday</span>
                <span className="font-semibold text-[#474747]">Closed</span>
              </div>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: `${college.primaryColor}08`, border: `1px solid ${college.primaryColor}18` }}
            >
              <p className="font-body text-type-ui-sm text-[#474747]">
                <span className="font-semibold">Ragging Helpline (24×7):</span>{' '}
                <a
                  href="tel:18001805522"
                  className="underline font-semibold"
                  style={{ color: college.primaryColor }}
                >
                  1800-180-5522
                </a>
                {' '}— National Anti-Ragging Helpline (Toll Free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const inputClass =
    'w-full font-display text-type-body-xs text-[#474747] border rounded-lg px-4 py-2.5 outline-none bg-white focus:ring-2 transition-shadow';
  const borderStyle = { borderColor: `${college.primaryColor}28` };

  return (
    <section>
      <div
        className="bg-white rounded-2xl border shadow-sm p-8"
        style={{ borderColor: `${college.primaryColor}18` }}
      >
        <h2
          className="font-display font-bold text-type-h2-mob mb-1"
          style={{ color: college.greenAccent }}
        >
          Get In Touch
        </h2>
        <p className="font-body text-type-body-xs text-[#6B7280] mb-7">
          Send us a message and we'll get back to you within 1–2 working days.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="font-display font-semibold text-type-ui-sm text-[#474747] block mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className={inputClass}
              style={borderStyle}
            />
          </div>
          <div>
            <label className="font-display font-semibold text-type-ui-sm text-[#474747] block mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className={inputClass}
              style={borderStyle}
            />
          </div>
          <div>
            <label className="font-display font-semibold text-type-ui-sm text-[#474747] block mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
              style={borderStyle}
            />
          </div>
          <div>
            <label className="font-display font-semibold text-type-ui-sm text-[#474747] block mb-1.5">
              Programme Interested In
            </label>
            <select
              className={inputClass}
              style={borderStyle}
              defaultValue=""
            >
              <option value="" disabled>Select a programme</option>
              <option>B.Pharmacy</option>
              <option>M.Pharmacy – Pharmaceutics</option>
              <option>M.Pharmacy – Pharmaceutical Analysis</option>
              <option>M.Pharmacy – Pharmacology</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="font-display font-semibold text-type-ui-sm text-[#474747] block mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message or query here..."
              className={inputClass + ' resize-none'}
              style={borderStyle}
            />
          </div>
        </div>
        <button
          className="font-display font-semibold text-type-ui text-white px-8 py-3 rounded-lg transition-opacity hover:opacity-85 tracking-[0.02em]"
          style={{ backgroundColor: college.greenAccent }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

function HowToReachSection() {
  const options = [
    {
      mode: 'By Road',
      desc: 'GRCP is accessible via Nizampet Bachupally Road. Well-connected by TSRTC buses, auto-rickshaws, and app-based cabs from all major parts of Hyderabad.',
    },
    {
      mode: 'From JNTU',
      desc: 'Located just 4 km from JNTU Kukatpally — easily reachable by shared autos and buses that ply the Kukatpally–Bachupally route.',
    },
    {
      mode: 'Metro',
      desc: 'Nearest metro station is JNTU College (Hyderabad Metro Blue Line). From there, take a cab or auto to reach GRCP in approximately 10 minutes.',
    },
  ];

  return (
    <section>
      <h2
        className="font-display font-bold text-type-h2-mob mb-6"
        style={{ color: college.greenAccent }}
      >
        How to Reach Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {options.map((o, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 border"
            style={{ borderColor: `${college.primaryColor}18`, backgroundColor: '#FAFAFA' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: college.greenAccent }}
            >
              <span className="font-display font-bold text-type-ui-sm text-white">{i + 1}</span>
            </div>
            <h4
              className="font-display font-semibold text-type-body mb-2"
              style={{ color: college.greenAccent }}
            >
              {o.mode}
            </h4>
            <p className="font-body text-type-ui-sm text-[#474747]">{o.desc}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-5 rounded-xl p-5 border"
        style={{ borderColor: `${college.greenAccent}30`, backgroundColor: `${college.greenAccent}0D` }}
      >
        <p className="font-body text-type-body-xs text-[#474747]">
          <span className="font-semibold">Landmark:</span> GRCP is situated on Nizampet Bachupally Road, Kukatpally. The college is easily identifiable
          from the main road and has adequate parking for visitors.
        </p>
      </div>
    </section>
  );
}

function GoogleMapSection() {
  return (
    <section>
      <h2
        className="font-display font-bold text-type-h2-mob mb-6"
        style={{ color: college.greenAccent }}
      >
        Our Location
      </h2>
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: `${college.primaryColor}18` }}
      >
        <iframe
          title="GRCP Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234!2d78.3890!3d17.5090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGokaraju+Rangaraju+College+of+Pharmacy!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          className="px-5 py-3 font-display text-type-ui-sm"
          style={{ backgroundColor: '#FAFAFA', borderTop: `1px solid ${college.primaryColor}18`, color: '#6B7280' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <MapPinIcon color={college.primaryColor} />
            Survey No. 288, Nizampet Bachupally Road, Bachupally, Kukatpally, Hyderabad – 500090
          </span>
        </div>
      </div>
    </section>
  );
}

function GrievanceSection() {
  return (
    <section>
      <h2
        className="font-display font-bold text-type-h2-mob mb-4"
        style={{ color: college.greenAccent }}
      >
        Grievance Redressal
      </h2>
      <div
        className="p-6"
        style={{
          backgroundColor: `${college.primaryColor}08`,
          borderTop: `1px solid ${college.primaryColor}20`,
          borderRight: `1px solid ${college.primaryColor}20`,
          borderBottom: `1px solid ${college.primaryColor}20`,
          borderLeft: `4px solid ${college.primaryColor}`,
          borderRadius: '12px',
        }}
      >
        <p
          className="font-display font-semibold text-type-body mb-2"
          style={{ color: college.primaryColor }}
        >
          Student / Faculty / Parent Grievances
        </p>
        <p className="font-body text-type-body-xs text-[#474747]">
          For any academic or administrative grievances, students may contact the Grievance Redressal
          Committee at{' '}
          <a
            href="mailto:grievance@grcp.ac.in"
            className="underline font-semibold"
            style={{ color: college.primaryColor }}
          >
            grievance@grcp.ac.in
          </a>{' '}
          or drop a written complaint at the Principal's office. You may also reach us at{' '}
          <a
            href="mailto:info@grcp.ac.in"
            className="underline font-semibold"
            style={{ color: college.primaryColor }}
          >
            info@grcp.ac.in
          </a>{' '}
          or call{' '}
          <a
            href="tel:7095271271"
            className="underline font-semibold"
            style={{ color: college.primaryColor }}
          >
            7095271271
          </a>
          . All grievances will be addressed within 7 working days.
        </p>
      </div>
    </section>
  );
}

function CounsellingCodesStrip() {
  const items = [
    {
      label: 'Working Hours',
      value: 'Mon – Sat  |  9:00 AM – 4:00 PM',
      note: 'Second Saturday holiday',
    },
    {
      label: 'TG EAPCET Code',
      value: 'GRCP',
    },
    {
      label: 'TG PGECET Code',
      value: 'GRCP1',
    },
  ];

  return (
    <section>
      <div
        className="rounded-2xl flex flex-wrap gap-6 px-7 py-5"
        style={{ backgroundColor: college.primaryColor }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-stretch gap-6">
            {i > 0 && (
              <div className="w-px self-stretch" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
            )}
            <div>
              <p
                className="font-display font-bold text-type-cap uppercase tracking-[0.12em] mb-1"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {item.label}
              </p>
              <p
                className="font-display font-bold text-type-body"
                style={{ color: item.label === 'Working Hours' ? '#fff' : '#7fffd4' }}
              >
                {item.value}
              </p>
              {item.note && (
                <p className="font-display text-type-cap" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {item.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us for admissions, academic queries, or general information."
        breadcrumb={['Contact Us']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <ContactInfoCards />
          <WorkingHoursCard />
          <GoogleMapSection />
          <ContactForm />
          <HowToReachSection />
          <GrievanceSection />
          <CounsellingCodesStrip />
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
