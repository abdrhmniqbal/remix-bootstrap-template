import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Feature = {
  icon: JSX.Element
  title: string
  description: string
}

interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  features: Feature[]
}

const Features = React.forwardRef<HTMLDivElement, FeaturesProps>(
  ({ title, description, features, className, ...props }, ref) => (
    <section
      id="features"
      className={cn('mx-auto max-w-7xl px-8 py-16', className)}
      ref={ref}
      {...props}
    >
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="relative z-10">
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-6 text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="relative mt-12">
        <div
          className={cn(
            'grid gap-8 sm:grid-cols-2 lg:grid-cols-2',
            features.length % 2 !== 0 && 'lg:grid-cols-3',
          )}
        >
          {features.map(({ title, description, icon }, idx) => (
            <Card
              key={idx}
              className="space-y-3 rounded-lg border hover:border-primary"
            >
              <CardHeader className="px-6 pb-2 pt-4">
                <div className="mt-4 inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
                  {icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="mt-2">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  ),
)

Features.displayName = 'Features'

export default Features
