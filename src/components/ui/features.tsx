import { Children } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function FeatureWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      id="features"
      className={cn('mx-auto max-w-7xl px-8 py-16', className)}
      {...props}
    >
      {children}
    </section>
  )
}

export function FeatureHeader({
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

export function FeatureTitle({
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

export function FeatureDescription({
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

export function FeatureContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const childrenCount = Children.count(children)
  return (
    <div
      className={cn(
        'mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2',
        childrenCount % 2 !== 0 && 'lg:grid-cols-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

export function FeatureItem({ children, title, description }: FeatureProps) {
  return (
    <Card className="space-y-3 rounded-lg border hover:border-primary">
      <CardHeader className="px-6 pb-2 pt-4">
        <div className="mt-4 inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
          {children}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
