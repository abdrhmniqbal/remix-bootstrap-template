import { CheckIcon } from 'lucide-react'
import { Children } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import LinkButton, { LinkButtonProps } from '@/components/blocks/link-button'
import { cn } from '@/lib/utils'

export function PricingWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      id="pricing"
      className={cn('max-w-7xl px-8 py-8 lg:py-20', className)}
      {...props}
    >
      {children}
    </section>
  )
}

export function PricingHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto mb-16 max-w-3xl text-center', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function PricingTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('mt-2 text-4xl font-bold sm:text-5xl', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function PricingDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-6 text-lg text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function PricingContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  const childrenCount = Children.count(children)
  return (
    <ul
      className={cn(
        `mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-${childrenCount}`,
        childrenCount > 3 && '2xl:grid-cols-4',
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

interface PricingTierProps extends React.HTMLAttributes<HTMLLIElement> {
  highlighted?: boolean
}

export function PricingTier({
  children,
  className,
  highlighted,
  ...props
}: PricingTierProps) {
  return (
    <li
      className={cn(`flex`, className)}
      {...props}
    >
      <Card
        className={cn(
          'w-full',
          highlighted && 'ring-2 ring-primary dark:bg-border/50',
        )}
      >
        {children}
      </Card>
    </li>
  )
}

export function PricingTierHeader({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <CardHeader {...props}>{children}</CardHeader>
}

interface PricingTierTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean
  highlightedText?: string
}

export function PricingTierTitle({
  children,
  className,
  highlighted,
  highlightedText,
  ...props
}: PricingTierTitleProps) {
  return (
    <div
      className={'flex items-center justify-between'}
      {...props}
    >
      <h2 className={cn('text-lg font-semibold', className)}>{children}</h2>
      {highlighted && (
        <Badge
          className="rounded-full border-primary bg-primary/10 text-primary dark:border-transparent dark:bg-primary dark:text-primary-foreground"
          variant="outline"
        >
          {highlightedText ? highlightedText : 'Most popular'}
        </Badge>
      )}
    </div>
  )
}

export function PricingTierDescription({
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <CardDescription {...props}>{children}</CardDescription>
}

export function PricingTierContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <CardContent
      className={cn('space-y-6', className)}
      {...props}
    >
      {children}
    </CardContent>
  )
}

interface PricingTierPriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  priceSuffix?: string
}

export function PricingTierPrice({
  children,
  className,
  priceSuffix,
  ...props
}: PricingTierPriceProps) {
  return (
    <p className="flex items-baseline gap-x-1">
      <span
        className={cn('text-4xl font-bold tracking-tight', className)}
        {...props}
      >
        {children}
      </span>
      {priceSuffix && (
        <span className="text-sm font-semibold text-muted-foreground">
          {priceSuffix}
        </span>
      )}
    </p>
  )
}

export function PricingActionButton({
  children,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <LinkButton
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </LinkButton>
  )
}

interface PricingTierFeaturesProps
  extends React.HTMLAttributes<HTMLUListElement> {
  features: string[]
}

export function PricingTierFeatures({
  className,
  features,
  ...props
}: PricingTierFeaturesProps) {
  return (
    <ul
      className={cn(`space-y-3`, className)}
      {...props}
    >
      {features.map(feature => (
        <li
          key={feature}
          className="flex items-center gap-x-3 text-sm text-muted-foreground"
        >
          <CheckIcon
            aria-hidden="true"
            className="size-5 flex-none text-primary dark:text-foreground"
          />
          {feature}
        </li>
      ))}
    </ul>
  )
}
