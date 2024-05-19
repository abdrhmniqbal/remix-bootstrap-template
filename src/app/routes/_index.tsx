import {
  GithubIcon,
  PrismaIcon,
  RemixIcon,
  ShadcnIcon,
  StripeIcon,
  ViteIcon,
} from '@/assets/icons'
import type { MetaFunction } from '@remix-run/node'
import {
  CreditCardIcon,
  DatabaseIcon,
  HomeIcon,
  SquareChevronRightIcon,
} from 'lucide-react'
import FAQ from '@/components/blocks/faq'
import Features from '@/components/blocks/features'
import Header from '@/components/blocks/header'
import Hero from '@/components/blocks/hero'
import LinkButton from '@/components/blocks/link-button'
import LogoList from '@/components/blocks/logo-list'
import Pricing from '@/components/blocks/pricing'
import Problem from '@/components/blocks/problem'
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
  const appName = getEnvValue('VITE_APP_NAME')
  return (
    <>
      <Header
        navLinks={[
          {
            title: 'Pricing',
            to: '#pricing',
          },
          {
            title: 'Features',
            to: '#features',
          },
          {
            title: 'FAQ',
            to: '#faq',
          },
        ]}
        actionButton={<LinkButton to="/register">Get Started</LinkButton>}
      />

      <Hero
        title="Launch your website in days."
        description="The boilerplate with all you need to build your production ready
          website, and start making money online fast."
        featuredImage="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE3MTUzMjMxMTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
        actionButton={<LinkButton to="/login">Get {appName}</LinkButton>}
        secondButton={
          <LinkButton
            to="https://github.com/iblabd/remix-boilerplate-template"
            target="_blank"
          >
            <GithubIcon className="btn-icon-l text-[#24292f]" />
            View on Github
          </LinkButton>
        }
      />

      <LogoList
        title="Built for Developers"
        lists={[
          {
            to: 'https://remix.run',
            target: '_blank',
            logo: <RemixIcon />,
          },
          {
            to: 'https://vitejs.dev',
            target: '_blank',
            logo: <ViteIcon />,
          },
          {
            to: 'https://stripe.com',
            target: '_blank',
            logo: <StripeIcon />,
          },
          {
            to: 'https://www.prisma.io',
            target: '_blank',
            logo: <PrismaIcon />,
          },
          {
            to: 'https://ui.shadcn.com',
            target: '_blank',
            logo: <ShadcnIcon />,
          },
        ]}
      />

      <Problem
        title={`80% of startups never launched`}
        description="Auth, payment, design... there is too much to do."
        problems={[
          {
            icon: '💻',
            title: 'Start creating a project',
          },
          {
            icon: '⏱️',
            title: 'Not have time enough',
          },
          {
            icon: '🚪',
            title: 'Leave the project',
          },
        ]}
      />

      <Features
        title="Fast your developments"
        description="Use our boilerplate to make development more fast, fast, and faster."
        features={[
          {
            icon: <SquareChevronRightIcon />,
            title: 'CLI Tools',
            description:
              'Easy to use boilerplate just run command and the boilerplate ready to use. No need to copy. No need to paste.',
          },
          {
            icon: <DatabaseIcon />,
            title: 'Database',
            description:
              "Easy to integrate with any database, didn't care that is SQL or noSQL.",
          },
          {
            icon: <CreditCardIcon />,
            title: 'Payment',
            description:
              'This stacks has built-in payment integration with Stripe in base template.',
          },
          {
            icon: <HomeIcon />,
            title: 'Host anywhere',
            description:
              'This stacks can be hosted anywhere. Check docs for advanced configuration.',
          },
        ]}
      />

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
