import { CheckIcon, MoveRightIcon } from 'lucide-react'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Tier = {
  cta: string
  description: string
  features: string[]
  highlighted?: boolean
  name: string
  price: string
  priceSuffix?: string
}

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  tiers: Tier[]
}

const Pricing = React.forwardRef<HTMLDivElement, PricingProps>(
  ({ title, description, tiers, className, ...props }, ref) => (
    <section
      id="pricing"
      className={cn('max-w-7xl px-8 py-8 lg:py-20', className)}
      ref={ref}
      {...props}
    >
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
          {title ? title : 'Choose your plan'}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">{description}</p>
      </div>
      <ul
        className={cn(
          `mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-${tiers.length}`,
          tiers.length > 3 && '2xl:grid-cols-4',
        )}
      >
        {tiers.map(
          (
            {
              highlighted,
              name,
              description,
              price,
              priceSuffix,
              cta,
              features,
            },
            index,
          ) => (
            <li
              className="flex"
              key={index}
            >
              <Card
                className={cn(
                  'w-full',
                  highlighted && 'ring-2 ring-primary dark:bg-border/50',
                  tiers.length === 1 && 'xl-col-span-2 xl:col-start-2',
                )}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className={cn(
                        'text-lg font-semibold',
                        highlighted && 'text-primary',
                      )}
                    >
                      {name}
                    </CardTitle>
                    {highlighted && (
                      <Badge
                        className="rounded-full border-primary bg-primary/10 text-primary dark:border-transparent dark:bg-primary dark:text-primary-foreground"
                        variant="outline"
                      >
                        Most popular
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {price}
                    </span>
                    {priceSuffix && (
                      <span className="text-sm font-semibold text-muted-foreground">
                        {priceSuffix}
                      </span>
                    )}
                  </p>
                  <Button className="w-full">{cta}</Button>
                  <ul className="space-y-3">
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
                </CardContent>
              </Card>
            </li>
          ),
        )}
      </ul>
    </section>
  ),
)

Pricing.displayName = 'Pricing'

export default Pricing
