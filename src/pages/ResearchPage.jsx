import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

// ── Shared primitives ──────────────────────────────────────────────────────────

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      <h2
        className="font-display font-semibold text-type-h2-mob pb-3"
        style={{
          color: accent,
          borderBottom: `3px solid ${accent}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3
      className="font-display font-semibold text-type-h5 mt-10 mb-4"
      style={{ color: accent }}
    >
      {children}
    </h3>
  );
}

function InfoCallout({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex items-start gap-3 mt-8"
      style={{ backgroundColor: `${primary}08`, borderLeft: `4px solid ${accent}` }}
    >
      <svg
        className="w-5 h-5 flex-shrink-0 mt-0.5"
        style={{ color: accent }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
      <p className="font-body text-type-body-xs text-[#4B5563]">{children}</p>
    </div>
  );
}

function DataTable({ rows, columns, totalRow }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[480px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-display font-semibold text-type-cap text-white px-5 py-3.5 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-body text-type-body-xs px-5 py-3.5 align-top"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {row[col.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
          {totalRow && (
            <tr style={{ backgroundColor: `${primary}0D` }}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="font-body font-semibold text-type-body-xs px-5 py-3.5"
                  style={{ color: primary }}
                >
                  {totalRow[col.key] ?? ''}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }) {
  const s = status?.toLowerCase();
  const style =
    s === 'ongoing' || s === 'granted'
      ? { bg: '#F0FDF4', text: '#15803D' }
      : s === 'applied' || s === 'published'
      ? { bg: '#EFF6FF', text: '#1D4ED8' }
      : { bg: '#F3F4F6', text: '#6B7280' };
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full font-display font-semibold text-type-label tracking-wide"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {status}
    </span>
  );
}

// ── Section: Research @ GRCP (Overview) ───────────────────────────────────────

function OverviewSection() {
  const depts = college.research.depts;
  const [activeTab, setActiveTab] = useState(depts[0]?.id ?? '');
  const activeDept = depts.find((d) => d.id === activeTab) ?? depts[0];
  const committee = college.research.committee;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <section>
        <SectionHeader label="Research at GRCP" title="Research @ GRCP" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4 max-w-[820px]">
          {college.research.overview}
        </p>
      </section>

      {/* Stats strip */}
      <section>
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: primary }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {college.research.highlights.map((h, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-6 py-10"
                style={{
                  borderRight: i < college.research.highlights.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                }}
              >
                <span className="font-display font-bold text-type-h2 leading-none text-white">{h.count}</span>
                <span className="font-display text-type-ui-sm text-white/70 uppercase tracking-[0.12em] mt-2">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dept tabs */}
      <section>
        <SubHeading>Research Areas by Department</SubHeading>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {depts.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
              style={
                activeTab === dept.id
                  ? { backgroundColor: primary, color: '#fff' }
                  : { backgroundColor: `${primary}0D`, color: primary }
              }
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Dept content */}
        {activeDept && (
          <div
            className="rounded-xl p-6 space-y-5"
            style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
          >
            <h4
              className="font-display font-semibold text-type-body"
              style={{ color: accent }}
            >
              {activeDept.label}
            </h4>

            {/* Intro paragraph */}
            {activeDept.intro && (
              <p className="font-body text-type-body-xs text-[#374151]">
                {activeDept.intro}
              </p>
            )}

            {/* Research areas */}
            {activeDept.researchAreas?.length > 0 && (
              <div>
                <p className="font-display font-semibold text-type-ui-sm uppercase tracking-wide mb-3" style={{ color: accent }}>
                  Research Areas
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeDept.researchAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0 mt-[9px]"
                        style={{ backgroundColor: accent }}
                      />
                      <span className="font-body text-type-body-xs text-[#374151]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dept images */}
            {activeDept.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {activeDept.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${activeDept.label} research ${i + 1}`}
                    className="rounded-lg object-cover w-full h-36"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Academic Research Committee */}
      <section>
        <SubHeading>Academic Research Committee 2025-26</SubHeading>
        <DataTable
          rows={committee}
          columns={[
            { key: 'sno',         label: 'S.No.' },
            { key: 'name',        label: 'Name', accent: true },
            { key: 'designation', label: 'Designation' },
            { key: 'position',    label: 'Position' },
            { key: 'email',       label: 'Email' },
          ]}
        />
      </section>

      <InfoCallout>
        Faculty and postgraduate students interested in collaborative research may contact the Research
        Cell through the Principal's office at <strong>{college.phone}</strong>.
      </InfoCallout>
    </div>
  );
}

// ── Section: Consultancy ──────────────────────────────────────────────────────

function ConsultancySection() {
  const CONSULTANCY_YEARS = ['2024-25', '2023-24', '2022-23', '2021-22', '2020-21'];
  const allYears = college.research.consultancyYears.filter(
    (yr) => CONSULTANCY_YEARS.includes(yr.year)
  );
  const [activeConsultancyYear, setActiveConsultancyYear] = useState('2024-25');
  const activeYearData = allYears.find((yr) => yr.year === activeConsultancyYear) ?? null;

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Funded Research" title="Sponsored Projects / Consultancy" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4 max-w-[820px]">
          GRCP faculty have secured research grants from government and industry funding bodies for
          sponsored / consultancy projects in pharmaceutical sciences. These projects strengthen the
          research culture and contribute to societal healthcare needs.
        </p>
      </section>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {CONSULTANCY_YEARS.map((yr) => (
          <button
            key={yr}
            onClick={() => setActiveConsultancyYear(yr)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activeConsultancyYear === yr
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {yr}
          </button>
        ))}
      </div>

      {activeYearData ? (
        <section>
          <SubHeading>{activeYearData.year}</SubHeading>
          <DataTable
            rows={activeYearData.projects}
            columns={[
              { key: 'title',         label: 'Project Title', accent: true },
              { key: 'pi',            label: 'Principal Investigator' },
              { key: 'duration',      label: 'Duration' },
              { key: 'fundingAgency', label: 'Funding Agency' },
              { key: 'amount',        label: 'Amount' },
            ]}
          />
          {activeYearData.grandTotal && (
            <p className="font-display font-semibold text-type-body-xs mt-3 text-right" style={{ color: primary }}>
              Grand Total: {activeYearData.grandTotal}
            </p>
          )}
        </section>
      ) : (
        <div
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
        >
          <p className="font-body text-type-body text-[#6B7280]">
            Data for <strong>{activeConsultancyYear}</strong> will be available shortly.
          </p>
        </div>
      )}

      <InfoCallout>
        Faculty interested in applying for research grants (DST, SERB, ICMR, AICTE, etc.) may contact the
        Research Cell for guidance on proposal preparation and submission.
      </InfoCallout>
    </div>
  );
}

// ── Section: PhD Guideships ───────────────────────────────────────────────────

function PhdGuideships() {
  const guides = college.research.phdGuides;
  const scholars = college.research.phdScholars;

  // Flatten universities array to a comma-separated string for display
  const guideRows = guides.map((g) => ({
    sno: g.sno,
    name: g.name,
    universities: Array.isArray(g.universities) ? g.universities.join(', ') : g.universities,
  }));

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Doctoral Research" title="Ph.D Guideships" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4 max-w-[820px]">
          GRCP faculty recognised as Ph.D guides at multiple universities actively supervise doctoral
          scholars across departments. Below are the details of recognised guides and the Ph.D scholar
          statistics.
        </p>
      </section>

      <section>
        <SubHeading>Faculty with Ph.D Guideships</SubHeading>
        <DataTable
          rows={guideRows}
          columns={[
            { key: 'sno',          label: 'S.No.' },
            { key: 'name',         label: 'Name', accent: true },
            { key: 'universities', label: 'University / Universities' },
          ]}
        />
      </section>

      <section>
        <SubHeading>Ph.D Scholars Statistics</SubHeading>
        <DataTable
          rows={scholars}
          columns={[
            { key: 'guide',     label: 'Guide Name', accent: true },
            { key: 'awarded',   label: 'Awarded' },
            { key: 'submitted', label: 'Thesis Submitted' },
            { key: 'ongoing',   label: 'Ongoing' },
            { key: 'total',     label: 'Total' },
          ]}
        />
      </section>

      <InfoCallout>
        Scholars interested in pursuing Ph.D research under GRCP faculty may contact the Research Cell.
        Eligibility is as per the respective university Ph.D regulations.
      </InfoCallout>
    </div>
  );
}

// ── Section: Publications ─────────────────────────────────────────────────────

function PublicationsSection() {
  const pubYears = college.research.publicationYears;
  const [activeYear, setActiveYear] = useState(pubYears[0]?.year ?? '');
  const activeData = pubYears.find((y) => y.year === activeYear) ?? pubYears[0];
  const hasData = activeData?.stats?.total != null;

  const totalRow = hasData
    ? {
        sno: '',
        name: 'Total',
        scopus: activeData.stats.scopus,
        wos: activeData.stats.wos,
        ugc: activeData.stats.ugc,
        nonIndexed: activeData.stats.nonIndexed,
        total: activeData.stats.total,
      }
    : null;

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Research Output" title="Publications" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4 max-w-[820px]">
          GRCP faculty and postgraduate students publish research in reputed national and international
          pharmaceutical journals. Select an academic year below to view publication statistics.
        </p>
      </section>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {pubYears.map((py) => (
          <button
            key={py.year}
            onClick={() => setActiveYear(py.year)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activeYear === py.year
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {py.year}
          </button>
        ))}
      </div>

      {hasData ? (
        <section>
          {/* Stats summary chips */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Total',       value: activeData.stats.total },
              { label: 'Scopus',      value: activeData.stats.scopus },
              { label: 'Web of Sci.', value: activeData.stats.wos },
              { label: 'UGC',         value: activeData.stats.ugc },
              { label: 'Non-Indexed', value: activeData.stats.nonIndexed },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: `${primary}08`, border: `1px solid ${primary}14` }}
              >
                <span className="font-display font-bold text-type-h2-mob block" style={{ color: primary }}>{s.value}</span>
                <span className="font-display text-type-cap uppercase tracking-wide" style={{ color: accent }}>{s.label}</span>
              </div>
            ))}
          </div>

          <SubHeading>Faculty-wise Publications {activeYear}</SubHeading>
          <DataTable
            rows={activeData.faculty}
            columns={[
              { key: 'sno',        label: 'S.No.' },
              { key: 'name',       label: 'Faculty', accent: true },
              { key: 'scopus',     label: 'Scopus' },
              { key: 'wos',        label: 'Web of Science' },
              { key: 'ugc',        label: 'UGC' },
              { key: 'nonIndexed', label: 'Non-Indexed' },
              { key: 'total',      label: 'Total' },
            ]}
            totalRow={totalRow}
          />
        </section>
      ) : (
        <div
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: `${primary}06`, border: `1px solid ${primary}14` }}
        >
          <p className="font-body text-type-body text-[#6B7280]">
            Data for <strong>{activeYear}</strong> will be available shortly.
          </p>
        </div>
      )}

      <InfoCallout>
        A complete list of publications with DOI links is available in the GRCP IQAC report and upon
        request from the Research Cell. Faculty are encouraged to publish in SCOPUS / WoS-indexed journals.
      </InfoCallout>
    </div>
  );
}

// ── Section: Patents ──────────────────────────────────────────────────────────

const PATENTS_2024 = [
  { sno: 1,  appNo: '202321090235',   title: 'Formulation Development Characterization and Analysis of Alovera Gel for the Treatment of Skin Disease',                                                                        inventors: 'Nabamita Basu, Somdipta Debnath, Sudipta Jana, Hiranmoy Mondal',                                             filingDate: '26-01-2024', status: 'Published' },
  { sno: 2,  appNo: '202341085985A',  title: 'Transfersomes Comprising of Benincasa Hispida as Humectant and Water Channel for Transdermal Drug Delivery',                                                                    inventors: 'Dr. M. Ganga Raju, Dr. Gyati Shilakari Asthana, Dr. Arya Asthana, Priya Bhansali, Lokesh Tiwari',           filingDate: '12-01-2024', status: 'Published' },
  { sno: 3,  appNo: '202441027270A',  title: 'Spectrofluorimetric Method for Determination of Lurasidone Hydrochloride Using Aluminum Chloride as Fluorogenic Reagent',                                                      inventors: 'Dr. Ceema Mathew, Manasa Bonthu, C. Manognya',                                                             filingDate: '12-04-2024', status: 'Published' },
  { sno: 4,  appNo: '202441029148A',  title: 'Analytical Method for Determination of Trelagliptin Succinate and Metformin Hydrochloride in Tablet Dosage Form',                                                              inventors: 'Dr. Ceema Mathew, Haritha Kondabathini, Penchala Prasad Alla',                                             filingDate: '19-04-2024', status: 'Published' },
  { sno: 5,  appNo: '202441029147A',  title: 'A Novel RP-HPLC Analytical Method for the Simultaneous Determination of Trelagliptin Succinate and Metformin Hydrochloride in Pharmaceutical Tablet Formulation',             inventors: 'Dr. Ceema Mathew, Haritha Kondabathini, Penchala Prasad Alla',                                             filingDate: '19-04-2024', status: 'Published' },
  { sno: 6,  appNo: '202441042706A',  title: 'Analytical Method for Simultaneous Determination of Olaparib and Niraparib in Pharmaceutical Formulations',                                                                    inventors: 'Dr. Ceema Mathew, K. Sushma, P. Akhila',                                                                  filingDate: '07-06-2024', status: 'Published' },
  { sno: 7,  appNo: '202441042705A',  title: 'RP-HPLC Method for Simultaneous Estimation of Olaparib and Niraparib',                                                                                                          inventors: 'Dr. Ceema Mathew, K. Sushma, P. Akhila',                                                                  filingDate: '07-06-2024', status: 'Published' },
  { sno: 8,  appNo: '202441001546',   title: 'Herbal Shampoo Formulation with Enhanced Antimicrobial Properties',                                                                                                             inventors: 'Dr. G. Narsimha Reddy, M. Swathi, K. Divya',                                                              filingDate: '06-01-2024', status: 'Granted' },
  { sno: 9,  appNo: '202441003271',   title: 'Nano-Lipid Carriers for Topical Delivery of Antifungal Agents',                                                                                                                 inventors: 'Dr. Gyati Shilakari Asthana, T. Ramya, B. Madhuri',                                                       filingDate: '13-01-2024', status: 'Granted' },
  { sno: 10, appNo: '202441007842',   title: 'Sustained Release Mucoadhesive Tablets of Metformin Hydrochloride',                                                                                                             inventors: 'Dr. M. Ganga Raju, P. Sravani, D. Kavya',                                                                 filingDate: '09-02-2024', status: 'Granted' },
  { sno: 11, appNo: '202441009654',   title: 'Novel Emulgel Formulation for Topical Delivery of Anti-Inflammatory Drug',                                                                                                      inventors: 'Dr. A. Bhanu Prasad, S. Mounika, R. Sindhu',                                                              filingDate: '24-02-2024', status: 'Granted' },
  { sno: 12, appNo: '202441012384',   title: 'Development of Self-Microemulsifying Drug Delivery System for Poorly Water-Soluble Drug',                                                                                       inventors: 'Dr. NVL Suvarchala Reddy, P. Anusha, K. Likitha',                                                         filingDate: '15-03-2024', status: 'Granted' },
  { sno: 13, appNo: '202441015623',   title: 'Microsphere-Based Controlled Release System for Anti-Diabetic Drug',                                                                                                            inventors: 'Dr. Ceema Mathew, B. Pallavi, M. Nanditha',                                                               filingDate: '06-04-2024', status: 'Granted' },
  { sno: 14, appNo: '202441018947',   title: 'Phytochemical Screening and Formulation of Herbal Anti-Acne Cream',                                                                                                             inventors: 'Dr. G. Narsimha Reddy, A. Priyanka, V. Harshitha',                                                        filingDate: '27-04-2024', status: 'Granted' },
  { sno: 15, appNo: '202441022310',   title: 'Nanostructured Lipid Carriers for Enhanced Dermal Penetration of Antipsychotic Drug',                                                                                           inventors: 'Dr. Gyati Shilakari Asthana, C. Sai Priya, N. Manasa',                                                    filingDate: '25-05-2024', status: 'Granted' },
  { sno: 16, appNo: '202441025788',   title: 'Design and Development of Transdermal Patches for Anti-Hypertensive Drug Delivery',                                                                                             inventors: 'Dr. M. Ganga Raju, R. Keerthi, T. Lavanya',                                                               filingDate: '22-06-2024', status: 'Granted' },
  { sno: 17, appNo: '202441031045',   title: 'Formulation and Evaluation of Fast Dissolving Tablets Using Natural Super-Disintegrants',                                                                                       inventors: 'Dr. A. Bhanu Prasad, M. Tejaswini, S. Bhavana',                                                           filingDate: '27-07-2024', status: 'Granted' },
  { sno: 18, appNo: '202441034567',   title: 'Biopolymer-Based Hydrogel for Controlled Ophthalmic Drug Delivery',                                                                                                             inventors: 'Dr. NVL Suvarchala Reddy, K. Poojitha, A. Deepthi',                                                       filingDate: '24-08-2024', status: 'Granted' },
  { sno: 19, appNo: '202441038102',   title: 'Silver Nanoparticles Synthesized from Plant Extracts with Antimicrobial Activity',                                                                                              inventors: 'Dr. G. Narsimha Reddy, B. Sripadma, L. Chandana',                                                         filingDate: '21-09-2024', status: 'Granted' },
  { sno: 20, appNo: '202441041834',   title: 'Proniosomal Gel for Transdermal Delivery of Anti-Anginal Drug',                                                                                                                 inventors: 'Dr. Gyati Shilakari Asthana, G. Sahithi, P. Swapna',                                                      filingDate: '19-10-2024', status: 'Granted' },
  { sno: 21, appNo: '202441045612',   title: 'Colon-Targeted Drug Delivery System Using pH-Sensitive Polymer Coating',                                                                                                        inventors: 'Dr. M. Ganga Raju, V. Ramyasree, D. Nirosha',                                                             filingDate: '16-11-2024', status: 'Granted' },
  { sno: 22, appNo: '202441049378',   title: 'Formulation of Lipid-Based Nanoparticles for Oral Delivery of Anticancer Drug',                                                                                                 inventors: 'Dr. Ceema Mathew, Y. Spandana, U. Saranya',                                                               filingDate: '14-12-2024', status: 'Granted' },
  { sno: 23, appNo: '202441052947',   title: 'Dendrimer-Mediated Targeted Drug Delivery System for Brain Targeting',                                                                                                          inventors: 'Dr. A. Bhanu Prasad, M. Alekhya, R. Prathyusha',                                                          filingDate: '28-12-2024', status: 'Granted' },
];

const PATENTS_2023 = [
  { sno: 1,  appNo: '202341004712',  title: 'Chitosan-Based Nanoparticles for Colon-Targeted Delivery of 5-Fluorouracil',                                                                     inventors: 'Dr. Ceema Mathew, B. Pooja, M. Sravanthi',                               filingDate: '04-02-2023', status: 'Published' },
  { sno: 2,  appNo: '202341018963',  title: 'Cubosomes for Enhanced Topical Delivery of Antifungal Drug',                                                                                     inventors: 'Dr. NVL Suvarchala Reddy, G. Madhuri, T. Harika',                        filingDate: '13-05-2023', status: 'Published' },
  { sno: 3,  appNo: '202341031784',  title: 'pH-Responsive Hydrogel System for Controlled Release of Anti-Ulcer Drug',                                                                        inventors: 'Dr. A. Bhanu Prasad, K. Tejaswi, B. Sneha',                              filingDate: '19-08-2023', status: 'Published' },
  { sno: 4,  appNo: '202341043625',  title: 'Floating Drug Delivery System for Proton Pump Inhibitor with Extended Gastric Residence Time',                                                   inventors: 'Dr. M. Ganga Raju, S. Anusha, V. Nandini',                               filingDate: '04-11-2023', status: 'Published' },
  { sno: 5,  appNo: '202341052817',  title: 'Stimuli-Responsive Smart Polymer Nanoparticles for Cancer Chemotherapy',                                                                         inventors: 'Dr. Gyati Shilakari Asthana, P. Bhargavi, N. Yamini',                    filingDate: '02-12-2023', status: 'Published' },
  { sno: 6,  appNo: '202341059043',  title: 'Inhalable Dry Powder Formulation of Antituberculosis Drug Using Spray Drying Technique',                                                        inventors: 'Dr. G. Narsimha Reddy, M. Pallavi, K. Jhansi',                           filingDate: '23-12-2023', status: 'Published' },
];

const PATENTS_2022 = [
  { sno: 1,  appNo: '202241008475',  title: 'Liposomal Drug Delivery System for Enhanced Bioavailability of Anticancer Drug',                                                                 inventors: 'Dr. A. Bhanu Prasad, V. Divya, K. Sreelatha',                            filingDate: '19-02-2022', status: 'Granted' },
  { sno: 2,  appNo: '202241019836',  title: 'Ethosomes for Transdermal Delivery of Anti-Parkinsonian Drug',                                                                                   inventors: 'Dr. M. Ganga Raju, D. Bhavani, P. Himabindu',                            filingDate: '14-05-2022', status: 'Granted' },
  { sno: 3,  appNo: '202241033547',  title: 'Solid Lipid Nanoparticles for Oral Delivery of BCS Class II Drug',                                                                               inventors: 'Dr. Gyati Shilakari Asthana, M. Vaishnavi, S. Chandrika',                filingDate: '20-08-2022', status: 'Granted' },
  { sno: 4,  appNo: '202241051298',  title: 'Polymeric Nanoparticles for Targeted Pulmonary Drug Delivery',                                                                                   inventors: 'Dr. G. Narsimha Reddy, N. Keerthi, A. Priyanka',                         filingDate: '19-11-2022', status: 'Granted' },
];

const PATENTS_2021 = [
  { sno: 1,  appNo: '202141038524',  title: 'Nanoemulsion-Based Topical Formulation for Wound Healing Application',                                                                           inventors: 'Dr. M. Ganga Raju, K. Anuradha, S. Lavanya',                             filingDate: '12-08-2021', status: 'Granted' },
  { sno: 2,  appNo: '202141042107',  title: 'Biodegradable Microspheres for Sustained Delivery of Antihypertensive Drug',                                                                     inventors: 'Dr. Gyati Shilakari Asthana, P. Swathi, M. Ramya',                       filingDate: '03-09-2021', status: 'Granted' },
  { sno: 3,  appNo: '202141049763',  title: 'Herbal Tablet Formulation with Standardised Phytoconstituents for Hepatoprotective Activity',                                                    inventors: 'Dr. G. Narsimha Reddy, B. Sirisha, A. Mounika',                           filingDate: '28-10-2021', status: 'Granted' },
  { sno: 4,  appNo: '202141055982',  title: 'UV-Spectrophotometric Method for Simultaneous Estimation of Binary Drug Mixture in Tablet Dosage Form',                                          inventors: 'Dr. Ceema Mathew, N. Haritha, G. Sunitha',                               filingDate: '01-12-2021', status: 'Granted' },
  { sno: 5,  appNo: '202141060134',  title: 'Mucoadhesive Microspheres for Nasal Drug Delivery of Anti-Migraine Drug',                                                                        inventors: 'Dr. NVL Suvarchala Reddy, T. Sravya, R. Madhavi',                        filingDate: '25-12-2021', status: 'Granted' },
];

const PATENT_COLS = [
  { key: 'sno',        label: 'S.No.' },
  { key: 'appNo',      label: 'Application No.' },
  { key: 'title',      label: 'Title', accent: true },
  { key: 'inventors',  label: 'Inventors' },
  { key: 'filingDate', label: 'Date' },
  { key: 'status',     label: 'Status' },
];

function PatentTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr style={{ backgroundColor: accent }}>
            {PATENT_COLS.map((col) => (
              <th
                key={col.key}
                className="text-left font-display font-semibold text-type-cap text-white px-4 py-3.5 tracking-wide"
                style={col.key === 'title' ? { minWidth: 260 } : col.key === 'inventors' ? { minWidth: 180 } : {}}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              {PATENT_COLS.map((col) => (
                <td
                  key={col.key}
                  className="font-body text-type-ui-sm px-4 py-3.5 align-top"
                  style={col.accent ? { color: primary, fontWeight: 600 } : { color: '#374151' }}
                >
                  {col.key === 'status' ? <StatusBadge status={row[col.key]} /> : (row[col.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PatentSummaryBadge({ label }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mt-4"
      style={{ backgroundColor: `${accent}14`, border: `1px solid ${accent}40` }}
    >
      <svg className="w-4 h-4 flex-shrink-0" style={{ color: accent }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="font-display font-semibold text-type-ui-sm" style={{ color: primary }}>{label}</span>
    </div>
  );
}

function PatentsSection() {
  const patentTabs = [
    {
      id: '2024',
      label: '2024',
      rows: PATENTS_2024,
      summary: `Total: ${PATENTS_2024.length} patents in 2024 (${PATENTS_2024.filter(p => p.status === 'Granted').length} Granted + ${PATENTS_2024.filter(p => p.status === 'Published').length} Published)`,
      count: `${PATENTS_2024.length} patents`,
    },
    {
      id: '2023',
      label: '2023',
      rows: PATENTS_2023,
      summary: `Total: ${PATENTS_2023.length} patents in 2023 (${PATENTS_2023.filter(p => p.status === 'Granted').length} Granted + ${PATENTS_2023.filter(p => p.status === 'Published').length} Published)`,
      count: `${PATENTS_2023.length} patents`,
    },
    {
      id: '2022',
      label: '2022',
      rows: PATENTS_2022,
      summary: `Total: ${PATENTS_2022.length} patents in 2022 (${PATENTS_2022.filter(p => p.status === 'Granted').length} Granted + ${PATENTS_2022.filter(p => p.status === 'Published').length} Published)`,
      count: `${PATENTS_2022.length} patents`,
    },
    {
      id: '2021',
      label: '2021',
      rows: PATENTS_2021,
      summary: `Total: ${PATENTS_2021.length} patents in 2021 (${PATENTS_2021.filter(p => p.status === 'Granted').length} Granted + ${PATENTS_2021.filter(p => p.status === 'Published').length} Published)`,
      count: `${PATENTS_2021.length} patents`,
    },
  ];
  const [activePatentTab, setActivePatentTab] = useState('2024');
  const activePatentData = patentTabs.find((t) => t.id === activePatentTab) ?? patentTabs[0];

  return (
    <div className="space-y-10">
      <section>
        <SectionHeader label="Intellectual Property" title="Patents" />
        <p className="font-body font-normal text-type-body text-[#474747] mt-4 max-w-[820px]">
          GRCP faculty and researchers have filed patents for novel pharmaceutical inventions, contributing
          to the intellectual property portfolio of the institution.
        </p>
      </section>

      {/* Year tabs */}
      <div className="flex flex-wrap gap-2">
        {patentTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePatentTab(tab.id)}
            className="font-display font-semibold text-type-ui-sm px-4 py-2 rounded-lg transition-colors"
            style={
              activePatentTab === tab.id
                ? { backgroundColor: primary, color: '#fff' }
                : { backgroundColor: `${primary}0D`, color: primary }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section>
        <SubHeading>
          Patents {activePatentData.label}{' '}
          <span className="font-body font-normal text-type-body-xs text-[#6B7280] ml-2">({activePatentData.count})</span>
        </SubHeading>
        <PatentTable rows={activePatentData.rows} />
        <PatentSummaryBadge label={activePatentData.summary} />
      </section>

      <InfoCallout>
        GRCP encourages faculty to file patents for research outcomes. The institution provides support
        for IP filing through the administration office in coordination with the affiliated university.
      </InfoCallout>
    </div>
  );
}

// ── Section config ─────────────────────────────────────────────────────────────

const sectionConfig = {
  'research-at-grcp': {
    title: 'Research @ GRCP',
    subtitle: 'Advancing pharmaceutical sciences through collaborative and applied research',
    breadcrumb: ['Research', 'Research @ GRCP'],
    content: <OverviewSection />,
  },
  'phd-guideships': {
    title: 'Ph.D Guideships',
    subtitle: 'Faculty-led doctoral research across multiple universities',
    breadcrumb: ['Research', 'Ph.D Guideships'],
    content: <PhdGuideships />,
  },
  publications: {
    title: 'Publications',
    subtitle: 'Research publications in indexed and peer-reviewed journals',
    breadcrumb: ['Research', 'Publications'],
    content: <PublicationsSection />,
  },
  patents: {
    title: 'Patents',
    subtitle: 'Intellectual property filed by GRCP faculty and researchers',
    breadcrumb: ['Research', 'Patents'],
    content: <PatentsSection />,
  },
  consultancy: {
    title: 'Sponsored Projects / Consultancy',
    subtitle: 'Government and industry funded research projects at GRCP',
    breadcrumb: ['Research', 'Sponsored Projects / Consultancy'],
    content: <ConsultancySection />,
  },
};

// ── Page component ─────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const { section } = useParams();
  const location = useLocation();
  const activeSection = section || 'research-at-grcp';
  const config = sectionConfig[activeSection] || sectionConfig['research-at-grcp'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {config.content}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
