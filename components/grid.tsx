import { cn } from '@/lib/cn'

function GridItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('grid w-full', className)}
      {...props}
    />
  )
}

function Grid({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('grid gap-4 w-full', className)}
      {...props}
    />
  )
}

export { Grid, GridItem }
