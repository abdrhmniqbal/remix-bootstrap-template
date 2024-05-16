import { Link } from '@remix-run/react'
import React from 'react'
import { cn } from '@/lib/utils'

type LogoList = {
  logo: JSX.Element
  to: string
  target?: React.HTMLAttributeAnchorTarget
}
interface LogoListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  lists: LogoList[]
}

const LogoList = React.forwardRef<HTMLDivElement, LogoListProps>(
  ({ title, lists, className, ...props }, ref) => (
    <section
      id="logoList"
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 px-8 py-16 lg:py-20',
        className,
      )}
      ref={ref}
      {...props}
    >
      <h2 className="text-center text-xl font-medium text-foreground">
        {title}
      </h2>
      <div className="my-8 flex flex-wrap items-center justify-center gap-10 gap-y-8 lg:gap-14">
        {lists.map(({ to, target, logo }, index) => (
          <Link
            to={to}
            target={target}
            rel={target === '_blank' ? 'noreferrer' : undefined}
            className="flex items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100 "
            key={index}
          >
            {logo &&
              React.cloneElement(logo, {
                className: cn(logo.props.className, 'h-8 object-cover md:h-12'),
              })}
          </Link>
        ))}
      </div>
    </section>
  ),
)

LogoList.displayName = 'LogoList'

export default LogoList
