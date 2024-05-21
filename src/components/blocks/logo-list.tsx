import {
  PrismaIcon,
  RemixIcon,
  ShadcnIcon,
  StripeIcon,
  ViteIcon,
} from '@/assets/icons'
import {
  Logo,
  LogoListContent,
  LogoListTitle,
  LogoListWrapper,
} from '@/components/ui/logo-list'

export default function LogoList() {
  return (
    <LogoListWrapper>
      <LogoListTitle>Built for developers:</LogoListTitle>
      <LogoListContent>
        <Logo to="https://remix.run">
          <RemixIcon />
        </Logo>
        <Logo to="https://vitejs.dev">
          <ViteIcon />
        </Logo>
        <Logo to="https://stripe.com">
          <StripeIcon />
        </Logo>
        <Logo to="https://www.prisma.io">
          <PrismaIcon />
        </Logo>
        <Logo to="https://ui.shadcn.com">
          <ShadcnIcon />
        </Logo>
      </LogoListContent>
    </LogoListWrapper>
  )
}
