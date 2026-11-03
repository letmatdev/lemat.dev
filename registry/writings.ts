type Writing = {
  id: string
  href: string
  title: string
  description: string
  releaseDate: string
}

export const writings: Writing[] = [
  {
    description:
      'Why multiple state updates can trigger just one render.',
    href: '/writings/how-react-batching-works',
    id: 'react-batching',
    releaseDate: '2026-10-28',
    title: 'How React Batching Actually Works'
  },
  {
    description:
      'How React decides what stays, changes, or disappears.',
    href: '/writings/understanding-react-reconciliation',
    id: 'react-reconciliation',
    releaseDate: '2026-10-21',
    title: 'Understanding React Reconciliation'
  },
  {
    description: 'Why shape matters more than names in TypeScript.',
    href: '/writings/typescript-structural-typing',
    id: 'typescript-structural-typing',
    releaseDate: '2026-10-14',
    title: 'TypeScript and Structural Typing'
  },
  {
    description:
      'What really happens between one line of code and the next?',
    href: '/writings/javascript-event-loop',
    id: 'javascript-event-loop',
    releaseDate: '2026-10-07',
    title: 'Inside the JavaScript Event Loop'
  },
  {
    description:
      'Why your callbacks sometimes remember the wrong state.',
    href: '/writings/react-closures-and-stale-state',
    id: 'react-closures-stale-state',
    releaseDate: '2026-09-30',
    title: 'Closures, Stale State, and React'
  }
]
