import React from 'react'

import { cn } from '@/lib/cn'

function ListItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('min-w-0 flex-1', className)}
      {...props}
    />
  )
}

function List({
  className,
  vertical,
  ...props
}: React.ComponentProps<'ul'> & {
  vertical?: boolean
}) {
  return (
    <ul
      className={cn(
        'flex w-full gap-4 text-left',
        vertical && 'flex-col',
        className
      )}
      {...props}
    />
  )
}

export { List, ListItem }
