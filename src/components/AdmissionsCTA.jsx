export default function AdmissionsCTA({ college }) {
  return (
    <section className="w-full section-pad" style={{ background: 'var(--cream, linear-gradient(135deg, #1E5C3A 0%, #2D7A50 60%, #1A4D33 100%))' }}>
      <div className="flex flex-col items-center">
        <h2 className="font-display font-bold text-type-h2-mob md:text-type-h2-tab lg:text-type-h2 text-center mb-6" style={{ color: 'var(--maroon, #ffffff)' }}>
          {college.ctaHeading}
        </h2>
        <p className="font-body font-normal text-type-body sm:text-type-body-lg lg:text-type-sub text-center max-w-[672px] mb-10" style={{ color: 'var(--ink-soft, rgba(255,255,255,0.90))' }}>
          {college.ctaDesc}
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href={college.ctaCTAHref}
            target={college.ctaCTAHref.startsWith('http') ? '_blank' : undefined}
            rel={college.ctaCTAHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="btn-red btn-lg"
            style={{ backgroundColor: 'var(--maroon, #C72235)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon-deep, #B01E2D)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--maroon, #C72235)'; }}
          >
            {college.ctaCTALabel}
          </a>
        </div>
      </div>
    </section>
  )
}
