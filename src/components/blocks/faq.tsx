import {
  FAQContent,
  FAQHeader,
  FAQItem,
  FAQTitle,
  FAQWrapper,
} from '@/components/ui/faq'

export default function FAQ() {
  return (
    <FAQWrapper>
      <FAQHeader>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
      </FAQHeader>
      <FAQContent type="multiple">
        <FAQItem
          question="Why you should use Landfast?"
          answer="With Landfast you can make website faster with prebuilt boilerplate. You just only need to use command to add boilerplate that you need."
        />
        <FAQItem
          question="Is it free?"
          answer="The basic template is free. For more advance use we recommend to buy pro plans."
        />
        <FAQItem
          question="Are we get updates?"
          answer="Yes. We eventually doing updates. Check our changelogs to see our latest update."
        />
      </FAQContent>
    </FAQWrapper>
  )
}
