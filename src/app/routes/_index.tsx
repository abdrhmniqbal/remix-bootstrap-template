import type { MetaFunction } from '@remix-run/node'
import Header from '@/components/blocks/header'
import Hero from '@/components/blocks/hero'
import LinkButton from '@/components/blocks/link-button'
import LogoList from '@/components/blocks/logo-list'
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
      <Hero />
      <LogoList />
    </>
  )
}
