import { Link } from '@remix-run/react'
import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'

interface LinkButtonProps extends ButtonProps {
  to: string
  target?: React.HTMLAttributeAnchorTarget
}

export default function LinkButton({
  to,
  children,
  target,
  ...props
}: LinkButtonProps) {
  return (
    <Button
      asChild
      {...props}
    >
      <Link
        to={to}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
      >
        {children}
      </Link>
    </Button>
  )
}
