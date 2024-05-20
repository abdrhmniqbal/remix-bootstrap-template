import LinkButton, { LinkButtonProps } from '@/components/blocks/link-button'
import { cn } from '@/lib/utils'

export function HeroWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      id="hero"
      className={cn(
        'mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:items-start lg:gap-20 lg:py-20',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export default function HeroContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-8 text-center lg:items-start lg:gap-10 lg:text-left',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function HeroTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'flex flex-col items-center gap-3 text-4xl font-extrabold tracking-tighter lg:items-start lg:text-6xl/tight',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function HeroDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-lg leading-relaxed opacity-80', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function HeroButtonGroup({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function HeroActionButton({
  children,
  className,
  size,
  variant,
  ...props
}: LinkButtonProps) {
  return (
    <LinkButton
      className={cn('w-full sm:w-auto', className)}
      size={size ? size : 'lg'}
      variant={variant ? variant : 'default'}
      {...props}
    >
      {children}
    </LinkButton>
  )
}

export function HeroSecondButton({
  children,
  className,
  size,
  variant,
  ...props
}: LinkButtonProps) {
  return (
    <LinkButton
      className={cn('w-full sm:w-auto', className)}
      size={size ? size : 'lg'}
      variant={variant ? variant : 'outline'}
      {...props}
    >
      {children}
    </LinkButton>
  )
}

export function HeroImage({
  alt,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return (
    <div className={cn('relative max-w-xl max-md:-m-4 lg:w-full', className)}>
      <img
        alt={alt}
        className="ml-auto w-full overflow-hidden rounded-md"
        {...props}
      />
    </div>
  )
}
