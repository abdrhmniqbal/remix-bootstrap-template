import type { MetaFunction } from '@remix-run/node'
import FAQ from '@/components/blocks/faq'
import Features from '@/components/blocks/features'
import Header from '@/components/blocks/header'
import Hero from '@/components/blocks/hero'
import LogoList from '@/components/blocks/logo-list'
import Pricing from '@/components/blocks/pricing'
import Problems from '@/components/blocks/problems'
import Reviews from '@/components/blocks/reviews'
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
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  )
}
