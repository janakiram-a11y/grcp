export const navItems = [
  { label: 'HOME', href: '/' },
  {
    label: 'ABOUT US',
    href: '#',
    dropdown: [
      { label: 'About GRCP', href: '/about' },
      { label: 'PEO', href: '/peo' },
      { label: 'POs', href: '/pos' },
    ],
  },
  {
    label: 'ADMINISTRATION',
    href: '#',
    dropdown: [
      { label: 'Chairman',            href: '/administration/chairman'       },
      { label: 'Vice President',      href: '/administration/vice-president' },
      { label: 'Principal',           href: '/administration/principal'      },
      { label: 'Governing Body',      href: '/administration/governing-body' },
      { label: 'IDMC',                href: '/administration/idmc'           },
      { label: 'Organizational Chart',href: '/administration/org-chart'      },
    ],
  },
  {
    label: 'ADMISSIONS',
    href: '#',
    dropdown: [
      { label: 'Admission Procedure', href: '/admissions/admission-procedure' },
      { label: 'Course Fees',         href: '/admissions/course-fees'         },
      { label: 'EAMCET Last Rank',    href: '/admissions/eamcet'              },
      { label: 'PGECET Last Rank',    href: '/admissions/pgecet'              },
    ],
  },
  {
    label: 'PROGRAMMES',
    href: '#',
    dropdown: [
      { label: 'B.Pharmacy', href: '/programmes/b-pharmacy' },
      {
        label: 'M.Pharmacy',
        href: '#',
        submenu: [
          { label: 'Pharmaceutics',           href: '/programmes/m-pharmacy/pharmaceutics'           },
          { label: 'Pharmaceutical Analysis', href: '/programmes/m-pharmacy/pharmaceutical-analysis' },
          { label: 'Pharmacology',            href: '/programmes/m-pharmacy/pharmacology'            },
          { label: 'PG Program Committee',    href: '/programmes/pg-program-committee'               },
        ],
      },
    ],
  },
  {
    label: 'ACADEMICS',
    href: '#',
    dropdown: [
      {
        label: 'Syllabus (UG/PG)',
        href: '#',
        submenu: [
          { label: 'B.Pharmacy Syllabus', href: '/academics/syllabus-b-pharmacy' },
          { label: 'M.Pharmacy Syllabus', href: '/academics/syllabus-m-pharmacy' },
        ],
      },
      { label: 'Academic Calendar',  href: '/academics/academic-calendar'           },
      { label: 'Time Tables',        href: '/academics/time-tables'                 },
      {
        label: 'Library',
        href: '/academics/library',
        submenu: [
          { label: 'About Library Committee', href: '/academics/library'                        },
          { label: 'Information Center@GRCP', href: '/academics/library/information-center'     },
          { label: 'E-Journals List',         href: '/academics/library/e-journals'             },
          { label: 'Daily News Papers',       href: '/academics/library/daily-news-papers'      },
          { label: 'Statistics 2025-26',      href: '/academics/library/statistics'             },
          { label: 'Titles & Volumes 2025-26',href: '/academics/library/title-volumes'          },
        ],
      },
      { label: 'Faculty List',       href: '/academics/faculty'                     },
      { label: 'Non-Teaching Staff', href: '/academics/non-teaching-staff'          },
    ],
  },
  {
    label: 'RESEARCH',
    href: '#',
    dropdown: [
      { label: 'Research@GRCP',                    href: '/research/research-at-grcp' },
      { label: 'Ph.D Guideships',                  href: '/research/phd-guideships'   },
      { label: 'Publications',                     href: '/research/publications'     },
      { label: 'Patents',                          href: '/research/patents'          },
      { label: 'Sponsored Projects / Consultancy', href: '/research/consultancy'      },
    ],
  },
  {
    label: 'EXAMINATION',
    href: '#',
    dropdown: [
      { label: 'Examination Branch@GRCP', href: '/examination/examination-branch' },
      { label: 'Sessional Time Table',    href: '/examination/sessional-timetable' },
      { label: 'OU Time Tables',          href: '/examination/ou-timetables'       },
      { label: 'OU Notifications',        href: '/examination/ou-notifications'    },
      { label: 'Results',                 href: '/examination/results'             },
      { label: 'Question Papers',         href: '/examination/question-papers'     },
    ],
  },
  {
    label: 'PLACEMENTS',
    href: '#',
    dropdown: [
      { label: 'Placement Cell@GRCP', href: '/placements/placement-cell'   },
      { label: 'Placement Status',    href: '/placements/placement-status' },
    ],
  },
]
