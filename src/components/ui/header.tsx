import { Link } from '@remix-run/react'
import { MenuIcon } from 'lucide-react'
import { cloneElement } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import LinkButton, { LinkButtonProps } from '@/components/blocks/link-button'
import { cn } from '@/lib/utils'

type NavLink = {
  title: string
  to: string
}

export function HeaderWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Sheet>
      <header
        id="header"
        className={cn(
          'mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4',
          className,
        )}
        {...props}
      >
        {children}
      </header>
    </Sheet>
  )
}

export function HeaderImage({
  alt,
  className,
  src,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return (
    <Link to="/">
      <img
        src={src ? src : '/images/logo.svg'}
        className={cn('w-28 md:w-32', className)}
        alt={alt ? alt : 'logo'}
        {...props}
      />
    </Link>
  )
}

interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  links: NavLink[]
}

export function HeaderNav({ className, links, ...props }: HeaderNavProps) {
  return (
    <nav
      className={cn(
        'hidden w-full items-center gap-4 pl-12 md:flex md:gap-12 lg:pl-24',
        className,
      )}
      {...props}
    >
      {links.map(({ title, to }, index) => (
        <Link
          to={to}
          key={index}
          className="link"
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}

interface HeaderMobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  alt?: string
  src?: string
  children: JSX.Element
  links: NavLink[]
}

export function HeaderMobileNav({
  alt,
  children,
  className,
  links,
  src,
  ...props
}: HeaderMobileNavProps) {
  return (
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>
          <HeaderImage
            src={src}
            alt={alt}
          />
        </SheetTitle>
        <SheetDescription>
          <nav
            className={cn(
              'flex flex-col items-start justify-center gap-4 py-4 text-lg',
              className,
            )}
            {...props}
          >
            {links.map(({ title, to }, index) => (
              <Link
                to={to}
                key={index}
                className="link"
              >
                {title}
              </Link>
            ))}
          </nav>
          {children && cloneElement(children, { className: 'flex' })}
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}

interface HeaderMobileNavTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element
}

export function HeaderMobileNavTrigger({
  children,
  className,
  ...props
}: HeaderMobileNavTriggerProps) {
  return (
    <SheetTrigger
      className={cn('md:hidden', className)}
      asChild
      {...props}
    >
      <Button
        variant="outline"
        size="icon"
      >
        {children ? (
          cloneElement(children, {
            className: cn(children.props.className, 'size-4'),
          })
        ) : (
          <MenuIcon className="size-4" />
        )}
      </Button>
    </SheetTrigger>
  )
}

export function HeaderActionButton({
  children,
  className,
  variant,
  ...props
}: LinkButtonProps) {
  return (
    <LinkButton
      className={cn('hidden w-full md:inline-flex md:w-min', className)}
      variant={variant ? variant : 'default'}
      {...props}
    >
      {children}
    </LinkButton>
  )
}
