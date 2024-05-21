import type { MetaFunction } from '@remix-run/node'
import FAQ from '@/components/blocks/faq'
import Features from '@/components/blocks/features'
import Header from '@/components/blocks/header'
import Hero from '@/components/blocks/hero'
import LogoList from '@/components/blocks/logo-list'
import Pricing from '@/components/blocks/pricing'
import Problems from '@/components/blocks/problems'
import Testimonial from '@/components/blocks/testimonial'
import { getEnvValue } from '@/lib/utils'

export const meta: MetaFunction = () => {
  return [
    { title: getEnvValue('VITE_APP_NAME') },
    {
      name: 'description',
      content: `Welcome to ${getEnvValue('VITE_APP_NAME')}!`,
    },
  ]
}

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <LogoList />
      <Problems />
      <Features />

      <Testimonial
        message="I don't believe just launched project in one day. This so fast and easy."
        name="Iqbal Abdurrahman"
        userRole="Software Engineer"
        src="https://github.com/iblabd.png"
      />

      <Pricing
        description="Choose the plan that fits your needs. All plans come with a 30-day
          money-back guarantee."
        tiers={[
          {
            cta: 'Subscribe now',
            description: 'For hobbyists and beginners who want to learn.',
            features: ['Unlimited public projects', 'Community support'],
            name: 'Starter',
            price: 'Free',
          },
          {
            cta: 'Subscribe now',
            description: 'For professionals and businesses who want to grow.',
            features: ['Access to boilerplate CLI', 'Priority support'],
            highlighted: true,
            name: 'Pro',
            price: '$49.99',
            priceSuffix: 'per year',
          },
        ]}
      />

      <FAQ
        questions={[
          {
            question: 'Why you should use Landfast?',
            answer:
              'With Landfast you can make website faster with prebuilt boilerplate. You just only need to use command to add boilerplate that you need.',
          },
          {
            question: 'Is it free?',
            answer:
              'The basic template is free. For more advance use we recommend to buy pro plans.',
          },
          {
            question: 'Are we get updates?',
            answer:
              'Yes. We eventually doing updates. Check our changelogs to see our latest update.',
          },
        ]}
      />
    </>
  )
}
