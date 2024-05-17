import { MoveRightIcon } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

type Problem = {
  icon: JSX.Element | string
  title: string
}
interface ProblemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  problems: Problem[]
}

const Problem = React.forwardRef<HTMLDivElement, ProblemProps>(
  ({ title, description, problems, className, ...props }, ref) => (
    <section
      id="problem"
      className={cn('min-h-screen bg-accent text-accent-foreground', className)}
      ref={ref}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-8 py-16 text-center md:py-40">
        <h2 className="mb-6 text-4xl font-extrabold md:mb-8 md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-muted-foreground md:mb-20">
          {description}
        </p>
        <div className="flex h-full flex-col items-center justify-center gap-6 md:flex-row md:items-start">
          {problems.map(({ icon, title }, index) => (
            <div key={index}>
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-2 md:w-48"
              >
                <span className="text-4xl">
                  {typeof icon === 'string'
                    ? icon
                    : React.cloneElement(icon, {
                        className: cn(icon.props.className, 'size-10'),
                      })}
                </span>
                <p className="font-bold">{title}</p>
              </div>
              {index < problems.length - 1 && (
                <div className="flex h-full w-full items-center justify-center md:w-auto">
                  <MoveRightIcon className="h-6 w-6 rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
)

Problem.displayName = 'Problem'

export default Problem
