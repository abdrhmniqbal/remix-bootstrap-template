import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Question = {
  question: string
  answer: JSX.Element | string
}
interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: JSX.Element | string
  questions: Question[]
}

const FAQ = React.forwardRef<HTMLDivElement, FAQProps>(
  ({ title, description, questions, ...props }, ref) => (
    <section
      ref={ref}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-8 py-24 ">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex basis-1/2 flex-col text-left">
            <h2 className="text-base-content text-3xl font-extrabold md:text-4xl">
              {title ? title : 'Frequently Asked Questions'}
            </h2>
            <p className="mt-2 text-muted-foreground md:mt-4">{description}</p>
          </div>
          <Accordion
            type="multiple"
            className="flex w-full basis-1/2 flex-col"
          >
            {questions.map(({ question, answer }, index) => (
              <AccordionItem
                value={`faq#${index + 1}`}
                className="w-full"
                key={index}
              >
                <AccordionTrigger className="text-base font-semibold md:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  ),
)

FAQ.displayName = 'FAQ'

export default FAQ
