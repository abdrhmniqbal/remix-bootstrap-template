import {
  GithubIcon,
  PrismaIcon,
  RemixIcon,
  ShadcnIcon,
  StripeIcon,
  ViteIcon,
} from '@/assets/icons'
import type { MetaFunction } from '@remix-run/node'
import Header from '@/components/blocks/header'
import Hero from '@/components/blocks/hero'
import LinkButton from '@/components/blocks/link-button'
import LogoList from '@/components/blocks/logo-list'
import Problem from '@/components/blocks/problem'
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
            to: '#about',
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
    </>
  )
}
