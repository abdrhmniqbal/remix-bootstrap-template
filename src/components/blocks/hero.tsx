import React from 'react'
import { cn } from '@/lib/utils'

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  featuredImage: string
  actionButton: JSX.Element
  secondButton?: JSX.Element
}
const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      title,
      description,
      actionButton,
      secondButton,
      featuredImage,
      className,
      ...props
    },
    ref,
  ) => (
    <section
      className={cn(
        'mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:items-start lg:gap-20 lg:py-20',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center lg:items-start lg:gap-10 lg:text-left">
        <h1 className="flex flex-col items-center gap-3 text-4xl font-extrabold tracking-tighter lg:items-start lg:text-6xl/tight">
          {title}
        </h1>
        <p className="text-lg leading-relaxed opacity-80">{description}</p>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          {actionButton &&
            React.cloneElement(actionButton, {
              size: actionButton.props.size ? actionButton.props.size : 'lg',
              className: cn(actionButton.props.className, 'w-full sm:w-auto'),
            })}
          {secondButton &&
            React.cloneElement(secondButton, {
              variant: 'outline',
              size: secondButton.props.size ? secondButton.props.size : 'lg',
              className: cn(secondButton.props.className, 'w-full sm:w-auto'),
            })}
        </div>
      </div>
      <div className="relative max-md:-m-4 lg:w-full">
        <img
          alt="Example"
          width="1080"
          height="1080"
          decoding="async"
          data-nimg="1"
          className="ml-auto w-full max-w-xl rounded-md"
          src={featuredImage}
        />
      </div>
    </section>
  ),
)

Hero.displayName = 'Hero'

export default Hero
