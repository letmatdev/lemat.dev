// oxlint-disable shadcn/no-raw-colors react-doctor/rendering-svg-precision
import { cn } from '@/lib/cn'

function VercelIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox='0 0 256 222'
      preserveAspectRatio='xMidYMid'
      aria-label='Vercel'
      className={cn('size-6 bg-primary px-1.5 pb-0.5', className)}
      {...props}
    >
      <title>Vercel</title>
      <path
        fill='#fff'
        d='m128 0 128 221.705H0z'
      />
    </svg>
  )
}

export { VercelIcon }
