/**
 * Site-wide search index.
 * Each entry: { title, desc, route, category }
 * Matched against query using title + desc (case-insensitive).
 */
const searchIndex = [
  /* ── Pages ──────────────────────────────────────────────────────────── */
  { title: 'Home',                    desc: 'GRCP homepage, overview, admissions',            route: '/',                              category: 'Page' },
  { title: 'About GRCP',              desc: 'About college history founders vision mission',   route: '/about',                         category: 'Page' },
  { title: 'Vision & Mission',        desc: 'Vision mission PEO POs objectives',              route: '/about',                         category: 'Page' },
  { title: 'PEO',                     desc: 'Program educational objectives',                 route: '/about/peo',                     category: 'Page' },
  { title: 'POs',                     desc: 'Program outcomes graduate attributes',            route: '/about/pos',                     category: 'Page' },
  { title: 'Administration',          desc: 'Principal management staff administration',       route: '/administration',                category: 'Page' },
  { title: 'IQAC',                    desc: 'Internal quality assurance cell committee',       route: '/administration/iqac',           category: 'Page' },
  { title: 'Anti-Ragging Committee',  desc: 'Anti ragging discipline committee members',      route: '/administration/anti-ragging',   category: 'Page' },
  { title: 'Admissions',              desc: 'Admissions procedure eligibility fee structure',  route: '/admissions',                    category: 'Page' },
  { title: 'Admission Procedure',     desc: 'How to apply admission process steps',           route: '/admissions/admission-procedure',category: 'Admissions' },
  { title: 'Fee Structure',           desc: 'Tuition fee structure B.Pharm M.Pharm 2025',     route: '/admissions/fee-structure',      category: 'Admissions' },
  { title: 'Scholarships',            desc: 'Scholarship grants financial aid students',       route: '/admissions/scholarships',       category: 'Admissions' },
  { title: 'Programmes',              desc: 'B.Pharmacy M.Pharmacy courses offered',           route: '/programmes',                    category: 'Page' },
  { title: 'B.Pharmacy',              desc: 'Bachelor of pharmacy 4 year undergraduate PCI NBA', route: '/programmes/b-pharmacy',      category: 'Programme' },
  { title: 'M.Pharmacy',              desc: 'Master of pharmacy postgraduate specialization', route: '/programmes/m-pharmacy',         category: 'Programme' },
  { title: 'M.Pharm Pharmaceutics',   desc: 'Pharmaceutics specialization postgraduate',      route: '/programmes/m-pharmacy/pharmaceutics',    category: 'Programme' },
  { title: 'M.Pharm Pharmaceutical Analysis', desc: 'Pharmaceutical analysis specialization', route: '/programmes/m-pharmacy/pharmaceutical-analysis', category: 'Programme' },
  { title: 'M.Pharm Pharmacology',    desc: 'Pharmacology specialization postgraduate',       route: '/programmes/m-pharmacy/pharmacology',     category: 'Programme' },
  { title: 'Academics',               desc: 'Academics syllabus timetable calendar library',  route: '/academics',                     category: 'Page' },
  { title: 'Syllabus',                desc: 'B.Pharm M.Pharm syllabus PDF download semester', route: '/academics/syllabus',            category: 'Academics' },
  { title: 'Academic Calendar',       desc: 'Academic calendar timetable schedule 2025',      route: '/academics/academic-calendar',   category: 'Academics' },
  { title: 'Library',                 desc: 'Library resources books journals digital',        route: '/academics/library',             category: 'Academics' },
  { title: 'Laboratories',            desc: 'Lab facilities pharmaceutics pharmacology',       route: '/academics/laboratories',        category: 'Academics' },
  { title: 'Research',                desc: 'Research publications projects faculty students', route: '/research',                      category: 'Page' },
  { title: 'Research Publications',   desc: 'Faculty research papers journals publications',  route: '/research/publications',         category: 'Research' },
  { title: 'Examination',             desc: 'Examination schedule results hall ticket',        route: '/examination',                   category: 'Page' },
  { title: 'Exam Schedule',           desc: 'Examination timetable dates B.Pharm M.Pharm',    route: '/examination/schedule',          category: 'Examination' },
  { title: 'Results',                 desc: 'Examination results marks grade card',            route: '/examination/results',           category: 'Examination' },
  { title: 'Hall Ticket',             desc: 'Hall ticket admit card download examination',     route: '/examination/hall-ticket',       category: 'Examination' },
  { title: 'Placements',              desc: 'Placements careers job recruiters salary package',route: '/placements',                    category: 'Page' },
  { title: 'Alumni',                  desc: 'Alumni network graduates past students',          route: '/alumni',                        category: 'Page' },
  { title: 'Alumni Association',      desc: 'Alumni association membership register',          route: '/alumni-association',            category: 'Page' },
  { title: 'Contact Us',              desc: 'Contact address phone email location map',        route: '/contact',                       category: 'Page' },
  { title: 'NBA',                      desc: 'NBA accreditation national board of accreditation B.Pharmacy', route: '/nba',              category: 'Page' },
  { title: 'Mandatory Disclosures',   desc: 'Mandatory disclosures AICTE PCI compliance',     route: '/mandatory-disclosures',         category: 'Page' },
  { title: 'Events',                  desc: 'College events activities seminars workshops',    route: '/events',                        category: 'Page' },
  { title: 'Downloads',               desc: 'Download forms documents brochures PDF',          route: '/downloads',                     category: 'Page' },
  { title: 'GRCP E-Bulletin',         desc: 'E-bulletin student magazine newsletter',          route: '/e-bulletin',                    category: 'Page' },

  /* ── Quick topics ────────────────────────────────────────────────────── */
  { title: 'NBA Accreditation',       desc: 'NBA accredited B.Pharmacy 2025 2028 national board', route: '/about',                    category: 'Accreditation' },
  { title: 'PCI Approval',            desc: 'Pharmacy council of India approved programs',    route: '/about',                         category: 'Accreditation' },
  { title: 'Osmania University',       desc: 'Affiliated Osmania University Hyderabad',        route: '/about',                         category: 'Affiliation' },
  { title: 'Fees 2025–26',            desc: 'Fee structure tuition special NBA fee 2025',      route: '/admissions/fee-structure',      category: 'Admissions' },
  { title: 'Apply Now',               desc: 'Apply for admission B.Pharm M.Pharm 2025',        route: '/admissions/admission-procedure',category: 'Admissions' },
  { title: 'TG PGECET',              desc: 'TG PGECET counselling code GRCP1 M.Pharmacy',     route: '/admissions',                    category: 'Admissions' },
  { title: 'Hostel',                  desc: 'Hostel accommodation residential facilities',     route: '/about',                         category: 'Facilities' },
  { title: 'Herbal Garden',           desc: 'Herbal garden medicinal plants campus',           route: '/about',                         category: 'Facilities' },
  { title: 'Canteen & Cafeteria',     desc: 'Campus canteen food facilities',                  route: '/about',                         category: 'Facilities' },
];

export default searchIndex;
