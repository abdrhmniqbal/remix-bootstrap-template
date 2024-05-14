import { Link } from '@remix-run/react'
import { MenuIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

type NavLink = {
  title: string
  to: string
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  navLinks: NavLink[]
  actionButton?: JSX.Element
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, navLinks, actionButton, ...props }, ref) => (
    <Sheet>
      <header
        ref={ref}
        className={cn(
          'mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4',
          className,
        )}
        {...props}
      >
        <Link to="/">
          <img
            src="/images/logo.svg"
            className="w-28 md:w-32"
            alt="logo"
          />
        </Link>
        <nav className="hidden w-full items-center gap-4 pl-12 md:flex md:gap-12 lg:pl-24">
          {navLinks.map(({ title, to }, index) => (
            <Link
              to={to}
              key={index}
              className="link"
            >
              {title}
            </Link>
          ))}
        </nav>
        <SheetTrigger
          className="md:hidden"
          asChild
        >
          <Button
            variant="outline"
            size="icon"
          >
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>
              <Link to="/">
                <img
                  src="/images/logo.svg"
                  className="w-28 md:w-32"
                  alt="logo"
                />
              </Link>
            </SheetTitle>
            <SheetDescription>
              <nav className="flex flex-col items-start justify-center gap-4 py-4 text-lg">
                {navLinks.map(({ title, to }, index) => (
                  <Link
                    to={to}
                    key={index}
                    className="link"
                  >
                    {title}
                  </Link>
                ))}
              </nav>
              {actionButton &&
                React.cloneElement(actionButton, {
                  className: cn(
                    actionButton.props.className,
                    'w-full md:hidden',
                  ),
                })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
        {actionButton &&
          React.cloneElement(actionButton, {
            className: cn(
              actionButton.props.className,
              'hidden md:inline-flex',
            ),
          })}
      </header>
    </Sheet>
  ),
)

Header.displayName = 'Header'

export default Header
