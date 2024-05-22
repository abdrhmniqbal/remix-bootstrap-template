import {
  PricingActionButton,
  PricingContent,
  PricingDescription,
  PricingHeader,
  PricingTier,
  PricingTitle,
  PricingWrapper,
} from '@/components/ui/pricing'

export default function Pricing() {
  return (
    <PricingWrapper>
      <PricingHeader>
        <PricingTitle>Choose Your Plan</PricingTitle>
        <PricingDescription>
          Choose the plan that fits your needs. All plans come with a 30-day
          money-back guarantee
        </PricingDescription>
      </PricingHeader>
      <PricingContent>
        <PricingTier
          title="Starter"
          description="For hobbyists and beginners who want to learn."
          price="Free"
          features={['Unlimited public projects', 'Community support']}
        >
          <PricingActionButton to="/get/starter">
            Subscribe Now
          </PricingActionButton>
        </PricingTier>
        <PricingTier
          title="Pro"
          description="For professionals and businesses who want to grow."
          price="$49.99"
          priceSuffix="per month"
          features={[
            'All starter features',
            'Access to boilerplate CLI',
            'Priority support',
          ]}
          highlighted
        >
          <PricingActionButton to="/get/pro">Subscribe Now</PricingActionButton>
        </PricingTier>
      </PricingContent>
    </PricingWrapper>
  )
}
