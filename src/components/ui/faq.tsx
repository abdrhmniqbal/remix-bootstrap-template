import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export function FAQWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      id="faq"
      className={cn('mx-auto max-w-7xl px-8 py-24', className)}
      {...props}
    >
      <div className="flex flex-col gap-12 md:flex-row">{children}</div>
    </section>
  )
}

export function FAQHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex basis-1/2 flex-col text-left', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function FAQTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-base-content text-3xl font-extrabold md:text-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function FAQDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-2 text-muted-foreground md:mt-4', className)}
      {...props}
    >
      {children}
    </p>
  )
}

type FAQContentProps = (
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps
) &
  React.RefAttributes<HTMLDivElement> & {
    className?: string
  }

export function FAQContent({ children, className, ...props }: FAQContentProps) {
  return (
    <Accordion
      className={cn('flex w-full basis-1/2 flex-col', className)}
      {...props}
    >
      {children}
    </Accordion>
  )
}

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string
  answer?: string
}

export function FAQItem({ question, answer }: FAQProps) {
  return (
    <AccordionItem
      value={question}
      className="w-full"
    >
      <AccordionTrigger className="text-base font-semibold md:text-lg">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-base">{answer}</AccordionContent>
    </AccordionItem>
  )
}
