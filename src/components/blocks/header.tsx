import {
  HeaderActionButton,
  HeaderImage,
  HeaderMobileNav,
  HeaderMobileNavTrigger,
  HeaderNav,
  HeaderWrapper,
} from '@/components/ui/header'

export default function Header() {
  const links = [
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
  ]

  return (
    <HeaderWrapper>
      <HeaderImage />
      <HeaderNav links={links} />
      <HeaderMobileNav links={links}>
        <HeaderActionButton to="/register">Get Started</HeaderActionButton>
      </HeaderMobileNav>
      <HeaderActionButton to="/register">Get Started</HeaderActionButton>
      <HeaderMobileNavTrigger />
    </HeaderWrapper>
  )
}
