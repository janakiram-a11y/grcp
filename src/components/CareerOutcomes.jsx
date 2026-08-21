export default function CareerOutcomes({ college }) {
  return (
    <section className="w-full section-pad" style={{ backgroundColor: 'var(--cream, #F0F7F3)' }}>
      <div className="max-w-[1200px] mx-auto flex items-center gap-24">
        <div className="flex flex-col flex-1 gap-6">
          <div>
            <h2 className="font-display font-semibold text-type-h2-mob lg:text-type-h2 mb-4" style={{ color: 'var(--maroon, #C72235)' }}>
              {college.careerHeading}
            </h2>
            <p className="font-body font-normal text-type-body text-[#4B5563] max-w-[512px]">
              {college.careerDesc}
            </p>
          </div>

          <div className="flex">
            <div className="flex-1 pl-6 border-l-2 flex flex-col gap-1" style={{ borderColor: 'var(--maroon, #2D7A50)' }}>
              <span className="font-display font-bold text-type-h2-mob text-[#222222]">{college.careerHighestPackage}</span>
              <span className="font-display font-bold text-type-label uppercase tracking-[0.12em] text-[#4B5563]">
                HIGHEST PACKAGE
              </span>
            </div>
            <div className="flex-1 pl-6 border-l-2 flex flex-col gap-1" style={{ borderColor: 'var(--maroon, #C72235)' }}>
              <span className="font-display font-bold text-type-h2-mob text-[#222222]">{college.careerOffersCount}</span>
              <span className="font-display font-bold text-type-label uppercase tracking-[0.12em] text-[#4B5563]">
                OFFERS MADE
              </span>
            </div>
          </div>

          <div
            className="border border-[rgba(229,231,235,0.5)] rounded-sm bg-white px-[14px] py-4 flex flex-col gap-3"
          >
            <p className="font-display font-bold text-type-cap uppercase tracking-[0.12em] text-[#222222] opacity-70">
              Top Recruiters
            </p>
            <div className="flex items-center gap-10 opacity-60">
              {college.careerRecruiters.map(r => (
                <span key={r} className="font-display font-bold text-type-sub text-[#222222]">{r}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[548px] flex-shrink-0">
          <img
            src={college.careerImage}
            alt="Career Outcomes"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
