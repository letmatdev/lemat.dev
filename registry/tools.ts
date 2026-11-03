import type { EntryData } from '@/components/entry-card'
import { ClaudeIcon } from '@/components/icons/software/claude'
import { CodexIcon } from '@/components/icons/software/codex'
import { ComposioIcon } from '@/components/icons/software/composio'
import { CursorIcon } from '@/components/icons/software/cursor'
import { DiscordIcon } from '@/components/icons/software/discord'
import { FigmaIcon } from '@/components/icons/software/figma'
import { LinearIcon } from '@/components/icons/software/linear'
import { SlackIcon } from '@/components/icons/software/slack'
import { VercelIcon } from '@/components/icons/software/vercel'
import { HyperDXIcon } from '@/components/icons/tech/hyper-dx'
import { NextJsIcon } from '@/components/icons/tech/next-js'
import { NodeJsIcon } from '@/components/icons/tech/node-js'
import { OpenRouterIcon } from '@/components/icons/tech/open-router'
import { PostgreIcon } from '@/components/icons/tech/postgre'
import { ReactIcon } from '@/components/icons/tech/react'
import { SentryIcon } from '@/components/icons/tech/sentry'
import { StripeIcon } from '@/components/icons/tech/stripe'
import { SupabaseIcon } from '@/components/icons/tech/supabase'

export const tools = {
  apps: [
    {
      logo: ReactIcon,
      ref: 'react',
      title: 'React'
    },
    {
      logo: NextJsIcon,
      ref: 'nextjs',
      title: 'Next.js'
    },
    {
      logo: NodeJsIcon,
      ref: 'nodejs',
      title: 'Node.js'
    },
    {
      logo: PostgreIcon,
      ref: 'postgresql',
      title: 'PostgreSQL'
    },
    {
      logo: SupabaseIcon,
      ref: 'supabase',
      title: 'Supabase'
    },
    {
      logo: StripeIcon,
      ref: 'stripe',
      title: 'Stripe'
    },
    {
      logo: ComposioIcon,
      ref: 'composio',
      title: 'Composio'
    },
    {
      logo: OpenRouterIcon,
      ref: 'open-router',
      title: 'Open Router'
    },
    {
      logo: VercelIcon,
      ref: 'vercel',
      title: 'Vercel'
    },
    {
      logo: SentryIcon,
      ref: 'sentry',
      title: 'Sentry'
    },
    {
      logo: HyperDXIcon,
      ref: 'hyperdx',
      title: 'HyperDX'
    }
  ],
  life: [
    {
      logo: ClaudeIcon,
      ref: 'claude-code',
      title: 'Claude Code'
    },
    {
      logo: CodexIcon,
      ref: 'codex',
      title: 'Codex'
    },
    {
      logo: CursorIcon,
      ref: 'cursor',
      title: 'Cursor'
    },
    {
      logo: LinearIcon,
      ref: 'linear',
      title: 'Linear'
    },
    {
      logo: FigmaIcon,
      ref: 'figma',
      title: 'Figma'
    },
    {
      logo: SlackIcon,
      ref: 'slack',
      title: 'Slack'
    },
    {
      logo: DiscordIcon,
      ref: 'discord',
      title: 'Discord'
    }
  ]
} satisfies Record<string, EntryData[]>
