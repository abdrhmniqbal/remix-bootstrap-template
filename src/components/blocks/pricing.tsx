import {
  PricingActionButton,
  PricingContent,
  PricingDescription,
  PricingHeader,
  PricingTier,
  PricingTierContent,
  PricingTierDescription,
  PricingTierFeatures,
  PricingTierHeader,
  PricingTierPrice,
  PricingTierTitle,
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
        <PricingTier>
          <PricingTierHeader>
            <PricingTierTitle>Starter</PricingTierTitle>
            <PricingTierDescription>
              For hobbyists and beginners who want to learn.
            </PricingTierDescription>
          </PricingTierHeader>
          <PricingTierContent>
            <PricingTierPrice>Free</PricingTierPrice>
            <PricingActionButton to="/get/starter">
              Subscribe Now
            </PricingActionButton>
            <PricingTierFeatures
              features={['Unlimited public projects', 'Community support']}
            />
          </PricingTierContent>
        </PricingTier>
        <PricingTier highlighted>
          <PricingTierHeader>
            <PricingTierTitle highlighted>Pro</PricingTierTitle>
            <PricingTierDescription>
              For professionals and businesses who want to grow.
            </PricingTierDescription>
          </PricingTierHeader>
          <PricingTierContent>
            <PricingTierPrice priceSuffix="per month">$49.99</PricingTierPrice>
            <PricingActionButton to="/get/pro">
              Subscribe Now
            </PricingActionButton>
            <PricingTierFeatures
              features={['Access to boilerplate CLI', 'Priority support']}
            />
          </PricingTierContent>
        </PricingTier>
      </PricingContent>
    </PricingWrapper>
  )
}
