// admissionsData.js — content for all Admissions section pages

// ── Admission Procedure ───────────────────────────────────────────────────────

export const bPharmProcedure = {
  intake: '100 seats | 4-year duration',
  firstYear: {
    heading: 'First Year Admission',
    items: [
      {
        label: 'a)',
        text: 'A pass at the Intermediate Examination of Telangana State Intermediate Board with Physics, Chemistry and Mathematics / Biology, or equivalent.',
      },
      {
        label: 'b)',
        text: 'Qualifying at the Entrance Examination (EAPCET) conducted by the Telangana State Council for Higher Education, Hyderabad.',
      },
    ],
    notes: [
      '70% of seats are allocated by EAPCET merit.',
      '30% of seats are reserved for Management / NRI candidates.',
    ],
  },
  lateralEntry: {
    heading: 'Second Year (Lateral Entry) Admission',
    items: [
      {
        label: 'a)',
        text: 'A pass at D. Pharmacy course (ER-91) with I class.',
      },
      {
        label: 'b)',
        text: 'Qualifying at the Entrance Examination (E-CET) conducted by the Telangana State Council for Higher Education, Hyderabad.',
      },
    ],
  },
}

export const mPharmProcedure = {
  intake: 'Pharmaceutics: 15 seats | Pharmaceutical Analysis: 15 seats | Pharmacology: 15 seats | 2-year duration',
  firstYear: {
    heading: 'First Year Admission',
    items: [
      {
        label: '1)',
        text: 'A pass at B. Pharm degree examination of Osmania University, or any other examination recognized as equivalent, along with qualifying in GPAT.',
      },
      {
        label: '2)',
        text: 'For remaining vacancies: B. Pharm graduates with a minimum of 55% aggregate marks who qualify in TGPGECET are eligible.',
      },
    ],
    notes: [
      '70% of seats are allocated by GPAT / TGPGECET merit.',
      '30% of seats are reserved for Management / NRI candidates.',
    ],
  },
}

// ── Course Fees ───────────────────────────────────────────────────────────────

export const BPHARM_FEE_HEADERS = ['Component', 'I Year', 'II Year', 'III Year', 'IV Year']
export const MPHARM_FEE_HEADERS = ['Component', 'I Year', 'II Year']

export const bPharmFees = [
  {
    title: 'Year of admission 2025-26 (Four Years Duration)',
    headers: BPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 84,000/-', '₹ 84,000/-', '₹ 84,000/-', '₹ 84,000/-'] },
      { label: 'Special Fee', values: ['₹ 5,500',   '₹ 2,500',   '₹ 2,500',   '₹ 2,500'] },
      { label: 'NBA Fee',     values: ['₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-'] },
    ],
  },
  {
    title: 'Year of admission 2024-25 (Four Years Duration)',
    headers: BPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 75,000/-', '₹ 75,000/-', '₹ 75,000/-', '₹ 75,000/-'] },
      { label: 'Special Fee', values: ['₹ 5,500',   '₹ 2,500',   '₹ 2,500',   '₹ 2,500'] },
      { label: 'NBA Fee',     values: ['₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-'] },
    ],
  },
  {
    title: 'Year of admission 2023-24 (Four Years Duration)',
    headers: BPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 75,000/-', '₹ 75,000/-', '₹ 75,000/-', '₹ 75,000/-'] },
      { label: 'Special Fee', values: ['₹ 5,500',   '₹ 2,500',   '₹ 2,500',   '₹ 2,500'] },
      { label: 'NBA Fee',     values: ['₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-'] },
    ],
  },
  {
    title: 'Year of admission 2022-23 (Four Years Duration)',
    headers: BPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 75,000/-', '₹ 75,000/-', '₹ 75,000/-', '₹ 75,000/-'] },
      { label: 'Special Fee', values: ['₹ 5,500',   '₹ 2,500',   '₹ 2,500',   '₹ 2,500'] },
      { label: 'NBA Fee',     values: ['₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-'] },
    ],
  },
  {
    title: 'Year of admission 2021-22 (Four Years Duration)',
    headers: BPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 65,000/-', '₹ 65,000/-', '₹ 65,000/-', '₹ 65,000/-'] },
      { label: 'Special Fee', values: ['₹ 5,500',   '₹ 2,500',   '₹ 2,500',   '₹ 2,500'] },
      { label: 'NBA Fee',     values: ['₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-'] },
    ],
  },
  {
    title: 'Year of admission 2020-21 (Four Years Duration)',
    headers: BPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 65,000/-', '₹ 65,000/-', '₹ 65,000/-', '₹ 65,000/-'] },
      { label: 'Special Fee', values: ['₹ 5,500',   '₹ 2,500',   '₹ 2,500',   '₹ 2,500'] },
      { label: 'NBA Fee',     values: ['₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-', '₹ 3,000/-'] },
    ],
  },
]

export const mPharmFees = [
  {
    title: 'Year of admission 2025-26 (Two Years Duration)',
    headers: MPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 1,10,000/-', '₹ 1,10,000/-'] },
      { label: 'Special Fee', values: ['₹ 7,500',      '₹ 4,500'] },
    ],
  },
  {
    title: 'Year of admission 2024-25 (Two Years Duration)',
    headers: MPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 1,10,000/-', '₹ 1,10,000/-'] },
      { label: 'Special Fee', values: ['₹ 7,500',      '₹ 4,500'] },
    ],
  },
  {
    title: 'Year of admission 2023-24 (Two Years Duration)',
    headers: MPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 1,10,000/-', '₹ 1,10,000/-'] },
      { label: 'Special Fee', values: ['₹ 7,500',      '₹ 4,500'] },
    ],
  },
  {
    title: 'Year of admission 2022-23 (Two Years Duration)',
    headers: MPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 1,10,000/-', '₹ 1,10,000/-'] },
      { label: 'Special Fee', values: ['₹ 7,500',      '₹ 4,500'] },
    ],
  },
  {
    title: 'Year of admission 2021-22 (Two Years Duration)',
    headers: MPHARM_FEE_HEADERS,
    rows: [
      { label: 'Tuition Fee', values: ['₹ 1,10,000/-', '₹ 1,10,000/-'] },
      { label: 'Special Fee', values: ['₹ 7,500',      '₹ 4,500'] },
    ],
  },
]

// ── EAMCET Last Ranks ─────────────────────────────────────────────────────────
// Columns (original order): Stream | OC | BC-A | BC-B | BC-C | BC-D | BC-E | SC | ST
// Fields: stream, OC, BCA, BCB, BCC, BCD, BCE, SC, ST

export const eamcetYears = [
  {
    year: '2025-26',
    rows: [
      { stream: 'Bi.P.C – Boys',  OC: '4,005',          BCA: '59,920',         BCB: '7,173 – 9,840',  BCC: '—',            BCD: '6,709 – 7,948',  BCE: '—',             SC: '9,575 – 14,552',  ST: '9,414 – 14,884'  },
      { stream: 'Bi.P.C – Girls', OC: '2,026 – 13,112', BCA: '9,328 – 14,525', BCB: '5,689 – 11,775', BCC: '24,634',       BCD: '5,777 – 10,362', BCE: '3,208 – 11,707', SC: '8,086 – 20,752',  ST: '11,918 – 14,669' },
      { stream: 'M.P.C – Boys',   OC: '—',              BCA: '—',              BCB: '—',              BCC: '—',            BCD: '—',              BCE: '—',             SC: '—',               ST: '—'               },
      { stream: 'M.P.C – Girls',  OC: '—',              BCA: '—',              BCB: '—',              BCC: '—',            BCD: '—',              BCE: '—',             SC: '—',               ST: '—'               },
    ],
  },
  {
    year: '2024-25',
    rows: [
      { stream: 'Bi.P.C – Boys',  OC: '16,661 – 18,136', BCA: '8,859',          BCB: '9,801 – 15,148', BCC: '—',            BCD: '—',              BCE: '18,039 – 18,233', SC: '10,029 – 21,031', ST: '14,125 – 24,165' },
      { stream: 'Bi.P.C – Girls', OC: '2,017 – 25,838',  BCA: '14,470 – 21,359',BCB: '5,564 – 37,252', BCC: '—',            BCD: '9,818 – 16,093', BCE: '6,800 – 12,391',  SC: '4,125 – 21,689',  ST: '22,193 – 31,392' },
      { stream: 'M.P.C – Boys',   OC: '—',               BCA: '—',              BCB: '—',              BCC: '—',            BCD: '—',              BCE: '—',              SC: '—',               ST: '—'               },
      { stream: 'M.P.C – Girls',  OC: '—',               BCA: '—',              BCB: '—',              BCC: '—',            BCD: '—',              BCE: '—',              SC: '—',               ST: '—'               },
    ],
  },
  {
    year: '2023-24',
    rows: [
      { stream: 'Bi.P.C – Boys',  OC: '7,085 – 13,997', BCA: '16,895 – 19,182', BCB: '9,923 – 19,559', BCC: '—',           BCD: '6,857 – 9,983',  BCE: '—',              SC: '10,651 – 22,419', ST: '26,098'          },
      { stream: 'Bi.P.C – Girls', OC: '4,402 – 14,582', BCA: '11,974 – 16,668', BCB: '5,117 – 20,560', BCC: '—',           BCD: '6,975 – 14,256', BCE: '7,694 – 16,085', SC: '11,615 – 67,636', ST: '12,755 – 28,416' },
      { stream: 'M.P.C – Boys',   OC: '—',              BCA: '—',               BCB: '—',              BCC: '—',           BCD: '—',              BCE: '—',              SC: '—',               ST: '—'               },
      { stream: 'M.P.C – Girls',  OC: '—',              BCA: '—',               BCB: '—',              BCC: '—',           BCD: '—',              BCE: '—',              SC: '—',               ST: '—'               },
    ],
  },
  {
    year: '2022-23',
    rows: [
      { stream: 'Bi.P.C – Boys',  OC: '3,062 – 7,236', BCA: '—',              BCB: '699 – 9,217',    BCC: '—',             BCD: '8,137',          BCE: '—',              SC: '12,614 – 13,807', ST: '7,389 – 47,139'  },
      { stream: 'Bi.P.C – Girls', OC: '2,001 – 7,669', BCA: '3,975 – 10,697', BCB: '3,166 – 9,522',  BCC: '11,618 – 16,221',BCD: '3,150 – 8,032', BCE: '3,824 – 10,784', SC: '5,367 – 42,687',  ST: '14,463'          },
      { stream: 'M.P.C – Boys',   OC: '22,087',        BCA: '—',              BCB: '1,09,091',       BCC: '—',             BCD: '—',              BCE: '—',              SC: '—',               ST: '—'               },
      { stream: 'M.P.C – Girls',  OC: '—',             BCA: '—',              BCB: '—',              BCC: '—',             BCD: '1,04,426',       BCE: '58,400',         SC: '—',               ST: '—'               },
    ],
  },
  {
    year: '2021-22',
    rows: [
      { stream: 'Bi.P.C – Boys',  OC: '5,518 – 13,666', BCA: '4,744',          BCB: '9,815',          BCC: '—',             BCD: '5,426 – 12,898', BCE: '52,738',         SC: '16,617',          ST: '15,087'          },
      { stream: 'Bi.P.C – Girls', OC: '3,001 – 14,768', BCA: '7,076 – 23,691', BCB: '6,543 – 38,693', BCC: '5,976 – 21,402', BCD: '1,552 – 12,248', BCE: '13,865 – 36,331',SC: '12,366 – 17,275', ST: '14,019 – 16,314' },
      { stream: 'M.P.C – Boys',   OC: '34,387 – 81,961',BCA: '—',              BCB: '57,150',         BCC: '—',             BCD: '87,143',         BCE: '93,675',         SC: '1,19,898',        ST: '—'               },
      { stream: 'M.P.C – Girls',  OC: '72,165 – 97,293',BCA: '—',              BCB: '—',              BCC: '—',             BCD: '71,586',         BCE: '—',              SC: '—',               ST: '—'               },
    ],
  },
]

// ── PGECET Last Ranks ─────────────────────────────────────────────────────────
// Structured as flat entries per year per specialisation — (gender, category, rank)

export const pgecetRanks = {
  pharmaceutics: [
    {
      year: '2025-26',
      entries: [
        { gender: 'Boys',  category: 'OC',     rank: '208 – 254' },
        { gender: 'Boys',  category: 'GPAT',   rank: '410' },
        { gender: 'Girls', category: 'OC',     rank: '150 – 233' },
        { gender: 'Girls', category: 'BC',     rank: '2,868' },
        { gender: 'Girls', category: 'SC',     rank: '238 – 874' },
        { gender: 'Girls', category: 'ST',     rank: '245 – 619' },
        { gender: 'Girls', category: 'GPAT-E', rank: '950 – 2,644' },
      ],
    },
    {
      year: '2024-25',
      entries: [
        { gender: 'Boys',  category: 'OC',     rank: '233 – 732' },
        { gender: 'Boys',  category: 'GPAT-B', rank: '821' },
        { gender: 'Girls', category: 'OC',     rank: '322' },
        { gender: 'Girls', category: 'BC',     rank: '631' },
        { gender: 'Girls', category: 'SC',     rank: '341 – 370' },
        { gender: 'Girls', category: 'GPAT-C', rank: '340 – 1,461' },
        { gender: 'Girls', category: 'GPAT-D', rank: '2,620' },
        { gender: 'Girls', category: 'GPAT-E', rank: '6,124' },
      ],
    },
    {
      year: '2023-24',
      entries: [
        { gender: 'Boys',  category: 'OC',     rank: '718' },
        { gender: 'Girls', category: 'OC',     rank: '62 – 670' },
        { gender: 'Girls', category: 'BC',     rank: '992' },
        { gender: 'Girls', category: 'SC',     rank: '240 – 2,470' },
        { gender: 'Girls', category: 'ST',     rank: '1,081' },
        { gender: 'Girls', category: 'GPAT-A', rank: '137 – 443' },
        { gender: 'Girls', category: 'GPAT-B', rank: '3,499' },
        { gender: 'Girls', category: 'GPAT-C', rank: '1,199 – 1,270' },
      ],
    },
    {
      year: '2022-23',
      entries: [
        { gender: 'Boys',  category: 'OC',     rank: '1,128' },
        { gender: 'Boys',  category: 'GPAT-A', rank: '922' },
        { gender: 'Girls', category: 'OC',     rank: '107 – 262' },
        { gender: 'Girls', category: 'BC',     rank: '709' },
        { gender: 'Girls', category: 'SC',     rank: '347' },
        { gender: 'Girls', category: 'GPAT-A', rank: '97 – 359' },
        { gender: 'Girls', category: 'GPAT-B', rank: '1,061' },
        { gender: 'Girls', category: 'GPAT-D', rank: '300' },
      ],
    },
    {
      year: '2021-22',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '227 – 1,927' },
        { gender: 'Girls', category: 'BC',     rank: '658 – 3,490' },
        { gender: 'Girls', category: 'ST',     rank: '210 – 4,755' },
        { gender: 'Girls', category: 'GPAT-A', rank: '1,114' },
        { gender: 'Girls', category: 'GPAT-B', rank: '2,442' },
      ],
    },
  ],
  pharmaceuticalAnalysis: [
    {
      year: '2025-26',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '9 – 1,123' },
        { gender: 'Girls', category: 'SC',     rank: '284 – 947' },
        { gender: 'Girls', category: 'GPAT-A', rank: '318' },
        { gender: 'Girls', category: 'GPAT-B', rank: '4,200' },
        { gender: 'Girls', category: 'GPAT-C', rank: '870 – 4,289' },
        { gender: 'Girls', category: 'GPAT-E', rank: '3,850' },
      ],
    },
    {
      year: '2024-25',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '505 – 926' },
        { gender: 'Girls', category: 'BC',     rank: '1,166' },
        { gender: 'Girls', category: 'SC',     rank: '15 – 1,059' },
        { gender: 'Girls', category: 'GPAT-A', rank: '568 – 783' },
        { gender: 'Girls', category: 'GPAT-C', rank: '1,055 – 1,255' },
        { gender: 'Girls', category: 'GPAT-E', rank: '3,550' },
      ],
    },
    {
      year: '2023-24',
      entries: [
        { gender: 'Boys',  category: 'OC',     rank: '833' },
        { gender: 'Boys',  category: 'GPAT-A', rank: '1,255' },
        { gender: 'Girls', category: 'BC',     rank: '1,604' },
        { gender: 'Girls', category: 'SC',     rank: '2,398' },
        { gender: 'Girls', category: 'GPAT-A', rank: '265' },
        { gender: 'Girls', category: 'GPAT-B', rank: '1,711' },
        { gender: 'Girls', category: 'GPAT-C', rank: '934 – 2,269' },
      ],
    },
    {
      year: '2022-23',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '156 – 2,004' },
        { gender: 'Girls', category: 'BC',     rank: '1,934' },
        { gender: 'Girls', category: 'SC',     rank: '555 – 1,226' },
        { gender: 'Girls', category: 'GPAT-A', rank: '4,127' },
        { gender: 'Girls', category: 'GPAT-C', rank: '1,765 – 3,805' },
      ],
    },
    {
      year: '2021-22',
      entries: [
        { gender: 'Boys',  category: 'BC',     rank: '1,058' },
        { gender: 'Boys',  category: 'SC',     rank: '1,151 – 1,195' },
        { gender: 'Boys',  category: 'GPAT-A', rank: '2,708' },
        { gender: 'Boys',  category: 'GPAT-B', rank: '2,606' },
        { gender: 'Girls', category: 'OC',     rank: '4,923' },
        { gender: 'Girls', category: 'BC',     rank: '677 – 2,100' },
        { gender: 'Girls', category: 'GPAT-A', rank: '797 – 1,462' },
        { gender: 'Girls', category: 'GPAT-B', rank: '2,355' },
        { gender: 'Girls', category: 'GPAT-E', rank: '53' },
      ],
    },
  ],
  pharmacology: [
    {
      year: '2025-26',
      entries: [
        { gender: 'Boys',  category: 'SC',     rank: '798' },
        { gender: 'Boys',  category: 'GPAT-E', rank: '1,930' },
        { gender: 'Girls', category: 'OC',     rank: '334 – 1,113' },
        { gender: 'Girls', category: 'BC',     rank: '1,283' },
        { gender: 'Girls', category: 'SC',     rank: '671' },
        { gender: 'Girls', category: 'GPAT-A', rank: '606 – 1,159' },
        { gender: 'Girls', category: 'GPAT-B', rank: '82' },
        { gender: 'Girls', category: 'GPAT-C', rank: '1,458 – 2,252' },
      ],
    },
    {
      year: '2024-25',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '122 – 2,357' },
        { gender: 'Girls', category: 'BC',     rank: '194 – 1,512' },
        { gender: 'Girls', category: 'SC',     rank: '314 – 695' },
        { gender: 'Girls', category: 'GPAT-A', rank: '592' },
        { gender: 'Girls', category: 'GPAT-C', rank: '313 – 1,249' },
        { gender: 'Girls', category: 'GPAT-E', rank: '6,040' },
      ],
    },
    {
      year: '2023-24',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '776' },
        { gender: 'Girls', category: 'BC',     rank: '196' },
        { gender: 'Girls', category: 'SC',     rank: '219 – 723' },
        { gender: 'Girls', category: 'GPAT-A', rank: '277 – 455' },
        { gender: 'Girls', category: 'GPAT-C', rank: '375 – 647' },
        { gender: 'Girls', category: 'GPAT-E', rank: '4,388' },
      ],
    },
    {
      year: '2022-23',
      entries: [
        { gender: 'Girls', category: 'OC',     rank: '35 – 250' },
        { gender: 'Girls', category: 'BC',     rank: '3,552' },
        { gender: 'Girls', category: 'SC',     rank: '206 – 330' },
        { gender: 'Girls', category: 'GPAT-A', rank: '887 – 1,387' },
        { gender: 'Girls', category: 'GPAT-C', rank: '1,035 – 2,958' },
        { gender: 'Girls', category: 'GPAT-E', rank: '1,348' },
      ],
    },
    {
      year: '2021-22',
      entries: [
        { gender: 'Boys',  category: 'SC',     rank: '275 – 713' },
        { gender: 'Boys',  category: 'GPAT-B', rank: '3,034' },
        { gender: 'Girls', category: 'OC',     rank: '2,599' },
        { gender: 'Girls', category: 'BC',     rank: '622' },
        { gender: 'Girls', category: 'SC',     rank: '962 – 1,369' },
        { gender: 'Girls', category: 'GPAT-A', rank: '1,199' },
        { gender: 'Girls', category: 'GPAT-C', rank: '128 – 2,627' },
      ],
    },
  ],
}
