import { Link } from '@remix-run/react'
import { RemixLinkProps } from '@remix-run/react/dist/components'
import { cloneElement } from 'react'
import { cn } from '@/lib/utils'

export function LogoListWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      id="logo-list"
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 px-8 py-16 lg:py-20',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export function LogoListTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-center text-xl font-medium text-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function LogoListContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'my-8 flex flex-wrap items-center justify-center gap-10 gap-y-8 lg:gap-14',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface LogoProps extends RemixLinkProps {
  children: JSX.Element
}

export function Logo({
  children,
  className,
  to,
  target = '_blank',
  ...props
}: LogoProps) {
  return (
    <Link
      to={to}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      className={cn(
        'flex items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100',
        className,
      )}
      {...props}
    >
      {cloneElement(children, {
        className: cn(children.props.className, 'h-8 object-cover md:h-12'),
      })}
    </Link>
  )
}
