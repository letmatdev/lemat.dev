import { getPartnerBrand } from '@/utils/get-brand'

export const externalLinks = [
  {
    background: 'dot',
    disabled: false,
    href: 'https://avalsoft.vercel.app',
    id: 'my-studio',
    label: 'Discover my Studio',
    logo: getPartnerBrand('aval-studio')
  }
  // {
  //   disabled: true,
  //   href: '',
  //   id: 'degusta',
  //   label: 'Simplify restaurant management',
  //   logo: getPartnerBrand('degusta')
  // },
  // {
  //   disabled: true,
  //   href: '',
  //   id: 'sync',
  //   label: 'Build something extraordinary',
  //   logo: getPartnerBrand('sync')
  // }
  // {
  //   disabled: true,
  //   href: '',
  //   id: 'meeting',
  //   label: 'Book a Meeting',
  //   logo: getPartnerBrand('call-com')
  // }
] as const
