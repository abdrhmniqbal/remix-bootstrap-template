import {
  CreditCardIcon,
  DatabaseIcon,
  HomeIcon,
  SquareChevronRightIcon,
} from 'lucide-react'
import {
  FeatureContent,
  FeatureDescription,
  FeatureHeader,
  FeatureItem,
  FeatureTitle,
  FeatureWrapper,
} from '@/components/ui/features'

export default function Features() {
  return (
    <FeatureWrapper>
      <FeatureHeader>
        <FeatureTitle>Fast your developments</FeatureTitle>
        <FeatureDescription>
          Use our boilerplate to make development more fast, fast, and faster.
        </FeatureDescription>
      </FeatureHeader>
      <FeatureContent>
        <FeatureItem
          title="CLI Tools"
          description="Easy to use boilerplate just run command and the boilerplate ready to use. No need to copy. No need to paste."
        >
          <SquareChevronRightIcon />
        </FeatureItem>
        <FeatureItem
          title="Database"
          description="Easy to integrate with any database, didn't care that is SQL or noSQL."
        >
          <DatabaseIcon />
        </FeatureItem>
        <FeatureItem
          title="Payment"
          description="This stacks has built-in payment integration with Stripe in base template."
        >
          <CreditCardIcon />
        </FeatureItem>
        <FeatureItem
          title="Host anywhere"
          description="This stacks can be hosted anywhere. Check docs for advanced configuration."
        >
          <HomeIcon />
        </FeatureItem>
      </FeatureContent>
    </FeatureWrapper>
  )
}
