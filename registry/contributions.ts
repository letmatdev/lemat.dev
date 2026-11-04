import type { EntryData } from '@/components/entry-card'
import { getPartnerBrand } from '@/utils/get-brand'

export const contributions: EntryData[] = [
  {
    items: [
      {
        href: 'https://github.com/pheralb/svgl/pull/962',
        title: 'Add Adobe Product Icons and Category'
      },
      {
        href: 'https://github.com/pheralb/svgl/pull/958',
        title: 'Add Zaia Endless Brand Icon'
      }
    ],
    logo: getPartnerBrand('svgl'),
    period: '2026',
    ref: 'svgl',
    title: 'SVGL'
  },
  {
    items: [
      {
        href: 'https://github.com/magicuidesign/cli/pull/4',
        title: 'Add Visual Studio Code MCP Integration'
      },
      {
        href: 'https://github.com/magicuidesign/cli/pull/3',
        title: 'Add Codex MCP Installation Support'
      },
      {
        href: 'https://github.com/magicuidesign/magicui/pull/955',
        title: 'Add Kinetic Text component'
      },
      {
        href: 'https://github.com/magicuidesign/mcp/pull/14',
        title: 'Enhance code and types in MCP'
      },
      {
        href: 'https://github.com/magicuidesign/magicui/pull/938',
        title: 'Introduce Glare Hover component'
      },
      {
        href: 'https://github.com/magicuidesign/magicui/pull/940',
        title: 'Add Hexagon Pattern component'
      },
      {
        href: 'https://github.com/magicuidesign/magicui/pull/947',
        title: 'Add shape variants to Animated Theme Toggler'
      },
      {
        href: 'https://github.com/magicuidesign/magicui/pull/948',
        title: 'Add Dia Text Reveal component'
      }
    ],
    logo: getPartnerBrand('magicui'),
    period: '2026',
    ref: 'magicui',
    title: 'Magic UI'
  }
]
