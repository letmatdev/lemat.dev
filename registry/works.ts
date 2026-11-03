import type { EntryData } from '@/components/entry-card'
import { getPartnerBrand } from '@/utils/get-brand'

const COMPANIES = {
  ATEM_GROUP: 'Atem Group',
  AVAL: 'Aval',
  CLICK_IP_GROUP: 'Click-Ip Group',
  MANAUS_ADVENTIST_HOSPITAL: 'M.A.H',
  MARGINS_DESIGN: 'Margins Design',
  REAM: 'Ream',
  TRIXX: 'Trixx',
  ZAIA: 'Zaia'
} as const

const ROLES = {
  CLIENT_FACING_SOFTWARE_ENGINEER: 'Client-Facing Software Engineer',
  DESIGN_ENGINEER: 'Design Engineer',
  DX_ENGINEER: 'DX Engineer',
  FRONTEND_ENGINEER: 'Front-end Engineer',
  FRONTEND_MOBILE_ENGINEER: 'Front-end & Mobile Engineer',
  FULLSTACK_ENGINEER: 'Full-Stack Engineer',
  MOBILE_ENGINEER: 'Mobile Engineer',
  PRINCIPAL_SOFTWARE_ENGINEER: 'Principal Software Engineer',
  RD_ENGINEER: 'R&D Engineer',
  SENIOR_FRONTEND_ENGINEER: 'Senior Front-end Engineer',
  SENIOR_SOFTWARE_ENGINEER: 'Senior Software Engineer',
  SOFTWARE_ARCHITECT: 'Software Architect'
} as const

export const works: EntryData[] = [
  {
    items: [ROLES.PRINCIPAL_SOFTWARE_ENGINEER],
    logo: getPartnerBrand('aval-studio'),
    period: '2026 - Present',
    ref: 'aval-studio',
    title: COMPANIES.AVAL
  },
  {
    items: [ROLES.SOFTWARE_ARCHITECT, ROLES.SENIOR_SOFTWARE_ENGINEER],
    logo: getPartnerBrand('zaia'),
    period: '2026',
    ref: 'zaia',
    title: COMPANIES.ZAIA
  },
  {
    items: [ROLES.SENIOR_FRONTEND_ENGINEER],
    logo: getPartnerBrand('click-ip'),
    period: '2026',
    ref: 'click-ip',
    title: COMPANIES.CLICK_IP_GROUP
  },
  {
    items: [
      ROLES.RD_ENGINEER,
      ROLES.DESIGN_ENGINEER,
      ROLES.FRONTEND_MOBILE_ENGINEER
    ],
    logo: getPartnerBrand('atem'),
    period: '2025 - 2026',
    ref: 'atem',
    title: COMPANIES.ATEM_GROUP
  },
  {
    items: [ROLES.MOBILE_ENGINEER, ROLES.FRONTEND_ENGINEER],
    logo: getPartnerBrand('ream'),
    period: '2024 - 2025',
    ref: 'ream',
    title: COMPANIES.REAM
  },
  {
    items: [
      ROLES.SOFTWARE_ARCHITECT,
      ROLES.DX_ENGINEER,
      ROLES.FULLSTACK_ENGINEER
    ],
    logo: getPartnerBrand('ham'),
    period: '2023 - 2024',
    ref: 'ham',
    title: COMPANIES.MANAUS_ADVENTIST_HOSPITAL
  },
  {
    items: [
      ROLES.CLIENT_FACING_SOFTWARE_ENGINEER,
      ROLES.FULLSTACK_ENGINEER,
      ROLES.FRONTEND_ENGINEER
    ],
    logo: getPartnerBrand('trixx'),
    period: '2022 - 2023',
    ref: 'trixx',
    title: COMPANIES.TRIXX
  },
  {
    items: [ROLES.FRONTEND_ENGINEER],
    logo: getPartnerBrand('margins-design'),
    period: '2021 - 2022',
    ref: 'margins-design',
    title: COMPANIES.MARGINS_DESIGN
  }
]
