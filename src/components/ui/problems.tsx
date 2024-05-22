import { MoveRightIcon } from 'lucide-react'
import { cloneElement } from 'react'
import { cn } from '@/lib/utils'

export function ProblemWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      id="problems"
      className={cn(
        'flex min-h-screen items-center bg-accent px-8 py-16 text-accent-foreground md:py-40',
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl text-center">{children}</div>
    </section>
  )
}

export function ProblemHeader({
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

export function ProblemTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'mb-6 text-4xl font-extrabold md:mb-8 md:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function ProblemDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'mx-auto mb-12 max-w-xl text-lg leading-relaxed text-muted-foreground md:mb-20',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function ProblemContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex h-full flex-col items-center justify-center gap-6 md:flex-row',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ProblemProps {
  children: JSX.Element | string
  lastItem?: boolean
  description: string
}

export function Problem({ description, children, lastItem }: ProblemProps) {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 md:w-48">
        <span className="text-4xl">
          {typeof children === 'string'
            ? children
            : cloneElement(children, {
                className: cn(children.props.className, 'size-10'),
              })}
        </span>
        <p className="font-bold">{description}</p>
      </div>
      {!lastItem && (
        <div className="flex h-full w-full items-center justify-center md:w-auto">
          <MoveRightIcon className="h-6 w-6 rotate-90 md:rotate-0" />
        </div>
      )}
    </>
  )
}
