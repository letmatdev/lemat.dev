// oxlint-disable shadcn/no-raw-colors react-doctor/rendering-svg-precision
import { cn } from '@/lib/cn'

function StripeIcon({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill='none'
      viewBox='100 100 312 312'
      aria-label='Stripe'
      className={cn('size-6', className)}
      {...props}
    >
      <title>Stripe</title>

      <path
        fill='#533afd'
        fillRule='evenodd'
        d='m120 392 272-57.683V120l-272 58.357z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export { StripeIcon }
