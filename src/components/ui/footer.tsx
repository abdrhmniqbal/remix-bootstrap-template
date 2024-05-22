import { Link } from '@remix-run/react'
import { cn } from '@/lib/utils'

export function FooterWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      id="footer"
      className={cn('bg-secondary px-8 pt-8', className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </footer>
  )
}

export function FooterContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-8 lg:flex-row lg:gap-24',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface FooterAboutProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string
  src?: string
}

export function FooterAbout({
  className,
  description,
  src,
  ...props
}: FooterAboutProps) {
  return (
    <div
      className={cn('flex w-full flex-col lg:w-1/3', className)}
      {...props}
    >
      <Link to="/">
        <img
          src={src ? src : '/images/logo.svg'}
          className="w-28 md:w-32"
          alt="logo"
        />
      </Link>
      <p className="mt-2 w-full text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export function FooterLinkGroup({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'md:3/4 flex w-full flex-wrap gap-x-16 gap-y-4 sm:flex-nowrap sm:gap-y-8 md:gap-x-24 lg:w-2/3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface FooterLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  links: { title: string; to: string }[]
}

export function FooterLink({
  className,
  title,
  links,
  ...props
}: FooterLinkProps) {
  return (
    <div
      className={cn('flex flex-col', className)}
      {...props}
    >
      <span className="mb-1 font-medium">{title}</span>
      <ul className="list-none">
        {links.map(({ title, to }, index) => (
          <li
            key={index}
            className="link w-full text-sm"
          >
            <Link
              to={to}
              target={to.startsWith('/') ? undefined : '_blank'}
              rel="noreferrer"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FooterCopyright({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('pb-4 pt-8 text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </div>
  )
}
