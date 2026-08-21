const BASE = 'https://grcp.ac.in'

// ─── Examination Branch ───────────────────────────────────────────────────────

export const examBranchFunctions = [
  'Conduction of sessional examinations for B.Pharmacy and M.Pharmacy programmes',
  'Answer script evaluation and marks entry into the university portal',
  'SMS notifications to students for absentees and result announcements',
  'Conduct of end-semester practical examinations',
  'Result analysis for both sessional and end-semester examinations',
  'Preparation and maintenance of documentation for accreditation bodies – OU, PCI, NBA, MoE & Governing body meetings.',
]

export const ugSessionalCommittee = [
  { sno: 1, name: 'Dr. M. Ganga Raju',    designation: 'Professor & Principal',   position: 'Chairperson',     email: 'ganga8000@grcp.ac.in'              },
  { sno: 2, name: 'Mrs. Ch. Soujanya',    designation: 'Assistant Professor',     position: 'Co-ordinator – 1', email: 'soujanya8056@grcp.ac.in'           },
  { sno: 3, name: 'Mrs. K. Lalitha',      designation: 'Assistant Professor',     position: 'Co-ordinator – 2', email: 'kalakotalalitha8094@grcp.ac.in'    },
  { sno: 4, name: 'Dr. Sree Lakshmi',     designation: 'Assistant Professor',     position: 'Member',           email: 'lakshmi8064@grcp.ac.in'            },
  { sno: 5, name: 'Dr. Nisha Shri',       designation: 'Associate Professor',     position: 'Member',           email: 'nisha8091@grcp.ac.in'              },
]

export const pgSessionalCommittee = [
  { sno: 1, name: 'Dr. M. Ganga Raju',           designation: 'Professor & Principal',       position: 'Chairperson',  email: 'ganga8000@grcp.ac.in'       },
  { sno: 2, name: 'Dr. M. Lakshmi Madhuri',       designation: 'Assistant Professor',         position: 'Co-ordinator', email: 'madhuri8072@grcp.ac.in'     },
  { sno: 3, name: 'Dr. NVL Suvarchala Reddy V',   designation: 'Professor & HOD',             position: 'Member',       email: 'suvarchala8018@grcp.ac.in'  },
  { sno: 4, name: 'Dr. Monika Nijawan',           designation: 'Professor & HOD',             position: 'Member',       email: 'monika8009@grcp.ac.in'      },
  { sno: 5, name: 'Dr. Pani Kumar Anumolu',       designation: 'Associate Professor & HOD',   position: 'Member',       email: 'durga8017@grcp.ac.in'       },
  { sno: 6, name: 'Dr. Shashikala Metri',         designation: 'Associate Professor',         position: 'Member',       email: 'shashikala8052@grcp.ac.in'  },
]

export const ouExamCell = [
  { sno: 1, name: 'Dr. M. Ganga Raju',           designation: 'Professor & Principal',  position: 'Chairperson',  email: 'ganga8000@grcp.ac.in'       },
  { sno: 2, name: 'Mrs. M. Mamtha',              designation: 'Assistant Professor',    position: 'Co-ordinator', email: 'mamatha8069@grcp.ac.in'     },
  { sno: 3, name: 'Mrs. Shabnam Kumari Thakur',  designation: 'Assistant Professor',    position: 'Member',       email: 'shabnam8079@grcp.ac.in'     },
  { sno: 4, name: 'Dr. M. Lakshmi Madhuri',      designation: 'Assistant Professor',    position: 'Member',       email: 'madhuri8072@grcp.ac.in'     },
  { sno: 5, name: 'Mr. B. Satyanarayana Raju',   designation: 'Admin Assistant',        position: 'Member',       email: 'rajusatish1977@gmail.com'   },
  { sno: 6, name: 'Mr. DVN Siva Rama Raju',      designation: 'System Admin',           position: 'Member',       email: 'dvnsrr80@gmail.com'         },
  { sno: 7, name: 'Mr. P. Gopi',                 designation: 'Stores In-charge',       position: 'Member',       email: 'grcpstore@gmail.com'        },
]

// ─── Sessional Timetables ─────────────────────────────────────────────────────

export const sessionalTimetableSections = [
  {
    heading: 'B.Pharmacy',
    programme: 'B.Pharmacy',
    items: [
      {
        label: 'B.Pharmacy III, V, VII Sem – Second Sessional (Theory) Exam TT 25-26',
        href: `${BASE}/media/6983ee0a3c0d8B.Pharm-III,V&VIIsem-II-SessionalTT(T).pdf`,
      },
      {
        label: 'B.Pharmacy III, V, VII Sem – Second Sessional (Practical) Exam TT 25-26',
        href: `${BASE}/media/6983ef1f971ddB.Pharm-III,V&VIIsem-II-SessionalTT(P).pdf`,
      },
      {
        label: 'B.Pharmacy I Sem – First Sessional (Theory & Practical) Exam TT 25-26',
        href: `${BASE}/media/6983f09e6dccbB.Pharm-Isem-I-SessionalTT(T&PR).pdf`,
      },
    ],
  },
  {
    heading: 'M.Pharmacy',
    programme: 'M.Pharmacy',
    items: [
      {
        label: 'M.Pharmacy III Sem – Second Sessional (Theory) Exam TT',
        href: `${BASE}/media/69e1f6c8a1bbdMPhaRM3SEM25-26.pdf`,
      },
      {
        label: 'M.Pharmacy I Sem – Second Sessional (Theory) Exam TT',
        href: `${BASE}/media/69b929059c97eM.Pharmfirstsem2sessionaltimetable25-26.pdf`,
      },
    ],
  },
  {
    heading: 'M.Pharmacy',
    programme: 'M.Pharmacy',
    items: [
      {
        label: 'M.Pharmacy III Sem – Second Sessional (Theory) Exam TT',
        href: `${BASE}/media/6849e2c7638d7iiisemises.jpg`,
      },
      {
        label: 'M.Pharmacy III Sem – First Sessional (Theory) Exam TT',
        href: `${BASE}/media/6849e29c0f84aiiisemises.jpg`,
      },
      {
        label: 'M.Pharmacy I Sem – Second Sessional (Theory) Exam TT',
        href: `${BASE}/media/6849e3142b872M.PharmacyIsemIIsessional(theory)examTT24-25.pdf.pdf`,
      },
    ],
  },
]

// ─── OU Timetables ────────────────────────────────────────────────────────────

export const ouTimetableSections = [
  {
    heading: 'B.Pharmacy',
    programme: 'B.Pharmacy',
    items: [
      {
        label: 'B.Pharmacy (PCI) Main & Backlog Examinations, February March-2026',
        href: `${BASE}/media/69828dcf96d64B.Pharmacy (PCI) Main & Backlog Examinations, February March-2026.pdf`,
      },
      {
        label: 'B.Pharmacy (Non-CBCS) IV-Year II-Semester One Time Chance (Backlog) Examinations, Dec-2025 Jan-2026',
        href: `${BASE}/media/69828de7e69ceB.Pharmacy (Non-CBCS) IV-Year II-Semeser One Time Chance (Backlog) Examinations, Dec-2025Jan-2026.pdf`,
      },
      {
        label: 'Revised Time Table – B.Pharmacy (Non-CBCS) One Time Chance Examinations, Dec-2025 Jan-2026',
        href: `${BASE}/media/69828dfc4867eRevised Time Table of B.Pharmacy (non-BCS) One Time Chance Examinations, Dec-25Jan-2026.pdf`,
      },
      {
        label: 'B.Pharmacy (PCI CBCS & Non-CBCS) One Time Chance Backlog Examinations, Dec-2025 – January-2026',
        href: `${BASE}/media/69829025cf474B.Pharmacy (PCI CBCS & Non-CBCS) One Time Chance Backlog Examinations, Dec-2025January-2026.pdf`,
      },
      {
        label: 'Revised Time Table – B.Pharmacy (PCI) VIII-Semester (Make-Up) Examinations, October-2025',
        href: `${BASE}/media/69828f72d336dRevised Time Table of B.Pharmacy (PCI) VIII-Semester (Make-Up) Examinations, October-2025.pdf`,
      },
      {
        label: 'B.Pharmacy (PCI) Regular and Backlog Examinations, Sep-Oct-2025',
        href: `${BASE}/media/6982903f6916eB.Pharmacy (PCI) Regular and Backlog Examiantions, SepOct-2025.pdf`,
      },
    ],
  },
  {
    heading: 'M.Pharmacy',
    programme: 'M.Pharmacy',
    items: [
      {
        label: 'Revised Time Table – M.Pharmacy II-Semester (PCI) (Main & Backlog) Examinations, December-2025',
        href: `${BASE}/media/6982921154b7bRevised Time Table of M.Pharmacy II-Semester (PCI) (Main & Backlog) Examinations, December-2025.pdf`,
      },
      {
        label: 'M.Pharmacy (PCI) Main & Backlog Examinations, December-2025',
        href: `${BASE}/media/6982922751634M.Pharmacy (PCI) Main & Backlog Examinations, December-2025.pdf`,
      },
      {
        label: 'M.Pharmacy (PCI) Main & Backlog Examinations, June-2025',
        href: `${BASE}/media/6982924b07db2M.Pharmacy (PCI) Main & Backlog Examinations, June-2025 (2).pdf`,
      },
      {
        label: 'M.Pharmacy II-Semester (Non-CBCS, CBCS & PCI) One Time Chance Backlog Examinations, March-2025',
        href: `${BASE}/media/6982925ccd3ffM.Pharmacy II-Semester (Non-CBCS, CBCS & PCI) One Time Chance Backlog Examinations, March-2025 (2).pdf`,
      },
    ],
  },
]

// ─── OU Notifications ─────────────────────────────────────────────────────────

export const ouNotifications = {
  bPharm: [
    {
      label: 'Revaluation and Photocopy details of B.Pharmacy (PCI) Main & Backlog Examinations, September October-2024',
      href: `${BASE}/media/67762affe48deRevaluation and Photocopy details of B.Pharmacy (PCI) Main & Backlog Examinations, September October-2024.pdf`,
    },
    {
      label: 'B.Pharmacy (PCI) VIII-Semester (Make-Up) Examinations, Oct Nov-2024',
      href: `${BASE}/media/67762a80b5c67B.Pharmacy (PCI) VIII-Semester (Make-Up) Examinations, Oct Nov-2024.pdf`,
    },
    {
      label: 'Revaluation and Photocopy details of B.Pharmacy (PCI) VII-Semester (Backlog) Examinations, July-2024',
      href: `${BASE}/media/67762bafa324bRevaluation and Photocopy details of B.Pharmacy (PCI) VII -Semester (Backlog) Examinations, July-2024.pdf`,
    },
    {
      label: 'B.Pharmacy (PCI) II, IV & VI Semesters Regular and All Semesters Backlog Examinations, August/September 2024',
      href: `${BASE}/media/67762d41bf657press august september 2024.pdf`,
    },
    {
      label: 'Revised Notification of B.Pharmacy (PCI) (Main & Backlog) Examinations, June/July-2024',
      href: `${BASE}/media/677626a9df94bRevised Notification of B.Pharmacy (PCI) (Main & Backlog) Examinations, JuneJuly-2024.pdf`,
    },
    {
      label: 'Revaluation and Photocopy details of B.Pharmacy (PCI) (Main & Backlog) Examinations, March April-2024',
      href: `${BASE}/media/67762501c7dc2Revaluation and photocopy details of B.Pharmacy (PCI) (Main & Backlog) Examinations, March April-2024.pdf`,
    },
    {
      label: 'B.Pharmacy (PCI) VIII-Sem (Main & Backlog) Examinations, June 2024',
      href: `${BASE}/media/677624282e04eB.Pharmacy (PCI) VIII-Sem (Main & Backlog) Examinations, June-2024.pdf`,
    },
  ],
  mPharm: [
    {
      label: 'M.Pharmacy (PCI) IV-Semester (Regular) All Specializations Project Dissertation Examinations, November-2024',
      href: `${BASE}/media/673325a9cc6f7M.Pharmacy (PCI) IV-Semester (Regular) All Specializations Project Dissertation Examinations, November-2024.pdf`,
    },
    {
      label: 'M.Pharmacy (PCI) (All Specialization) II-Semester (Main & Backlog) and I & III-Semester (Backlog) Examinations, November December-2024',
      href: `${BASE}/media/67762ddaa279cM.Pharmacy (PCI) (All Specialization) II-Semester (Main & Backlog) and I-Semester & III-Semester (Backlog) Examinations, November December-2024.pdf`,
    },
    {
      label: 'M.Pharmacy One Time Chance Examinations, August-2024',
      href: `${BASE}/media/67762f8c28942M.Pharmacy One Time Chance Examinations, August-2024.pdf`,
    },
    {
      label: 'M.Pharmacy (PCI) (All Specializations) I & III Semesters (Main & Backlog) and II Semester (Backlog) Examinations, April/May-2024',
      href: `${BASE}/media/6646dd4922337M1.pdf`,
    },
    {
      label: 'Revaluation and Photocopy details of M.Pharmacy (PCI) (Main & Backlog) Examinations, October/November-2023',
      href: `${BASE}/media/6646dd5ac2f7dM2.pdf`,
    },
  ],
}

// ─── Results ──────────────────────────────────────────────────────────────────

export const examResults = {
  bPharm: [
    {
      label: 'B.Pharmacy Result Analysis',
      href: `${BASE}/media/65867b76c628fB. Pharmacy Resulty Analysis.pdf`,
    },
  ],
  mPharm: [
    {
      label: 'M.Pharmacy Pharmaceutics – Pass Percentage Data',
      href: `${BASE}/media/67f09efb0d17cM Pharmacy Pharmaceutics pass percentage data.pdf`,
    },
    {
      label: 'M.Pharmacy Pharmaceutical Analysis – Pass Percentage Data',
      href: `${BASE}/media/67e02e1090fdbM Pharmacy Pharmaceutical Analysis pass percentage data.pdf`,
    },
    {
      label: 'M.Pharmacy Pharmacology – Pass Percentage Data',
      href: `${BASE}/media/67e02e325cf51M Pharmacy Pharmacology pass percentage data data.pdf`,
    },
  ],
}

// ─── Question Papers ──────────────────────────────────────────────────────────

const QP = 'https://grcp.ac.in/downloads/question-papers'

export const bPharmQP = {
  years: ['2021-2023', '2024', '2025'],
  semesters: [
    {
      sem: 'Semester I',
      links: [
        { href: `${QP}/1. I SEM PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm I Semester.pdf` },
        { href: `${QP}/2025/B. Pharmacy 1 sem.pdf` },
      ],
    },
    {
      sem: 'Semester II',
      links: [
        { href: `${QP}/2. II SEM PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm II Semester.pdf` },
        { href: `${QP}/2025/bpharm II sem.pdf` },
      ],
    },
    {
      sem: 'Semester III',
      links: [
        { href: `${QP}/3. III Sem PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm III Semester.pdf` },
        { href: `${QP}/2025/B.Pharm III sem.pdf` },
      ],
    },
    {
      sem: 'Semester IV',
      links: [
        { href: `${QP}/4. IV SEM PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm IV Semester.pdf` },
        { href: `${QP}/2025/B.Pharm IV sem.pdf` },
      ],
    },
    {
      sem: 'Semester V',
      links: [
        { href: `${QP}/5. V sem PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm V Semester.pdf` },
        { href: `${QP}/2025/B.Pharm V sem.pdf` },
      ],
    },
    {
      sem: 'Semester VI',
      links: [
        { href: `${QP}/6. VI PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm VI Semester.pdf` },
        { href: `${QP}/2025/B.Pharm VI sem.pdf` },
      ],
    },
    {
      sem: 'Semester VII',
      links: [
        { href: `${QP}/7. VII sem PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm VII Semester.pdf` },
        { href: `${QP}/2025/B.Pharm VII sem.pdf` },
      ],
    },
    {
      sem: 'Semester VIII',
      links: [
        { href: `${QP}/8. VIII SEM PCI (2021-2023).pdf` },
        { href: `${QP}/2024/B. Pharm VIII Semester.pdf` },
        { href: `${QP}/2025/B.HARM VIII sem.pdf` },
      ],
    },
  ],
}

export const mPharmQP = [
  {
    specialisation: 'Pharmaceutics',
    semesters: [
      { sem: 'Semester I',   href: `${QP}/m-pharma/Pharmaceutics I sem.pdf` },
      { sem: 'Semester II',  href: `${QP}/m-pharma/Pharmaceutics II sem.pdf` },
      { sem: 'Semester III', href: `${QP}/m-pharma/III Sem.pdf` },
    ],
  },
  {
    specialisation: 'Pharmacology',
    semesters: [
      { sem: 'Semester I',  href: `${QP}/m-pharma/Pharmacology I Sem.pdf` },
      { sem: 'Semester II', href: `${QP}/m-pharma/Pharmacology II Sem.pdf` },
    ],
  },
  {
    specialisation: 'Pharmaceutical Analysis',
    semesters: [
      { sem: 'Semester I',  href: `${QP}/m-pharma/Pharmaceutical Analysis I Sem.pdf` },
      { sem: 'Semester II', href: `${QP}/m-pharma/Pharmaceutical analysis IIsem.pdf` },
    ],
  },
]
