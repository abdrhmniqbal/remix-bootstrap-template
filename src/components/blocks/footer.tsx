import {
  FooterAbout,
  FooterContent,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  FooterWrapper,
} from '@/components/ui/footer'

export default function Footer() {
  const links = [
    { title: 'Documentation', to: '/docs' },
    { title: 'Sitemaps', to: '/sitemap.xml' },
  ]
  const legalLinks = [
    { title: 'Documentation', to: '/docs' },
    { title: 'Terms & Conditions', to: '/terms' },
    { title: 'License', to: '/license' },
  ]
  const moreLinks = [{ title: 'Discord', to: '/#' }]
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterAbout description="Landfast remix boilerplate template." />
        <FooterLinkGroup>
          <FooterLink
            title="Links"
            links={links}
          />
          <FooterLink
            title="Legal"
            links={legalLinks}
          />
          <FooterLink
            title="More"
            links={moreLinks}
          />
        </FooterLinkGroup>
      </FooterContent>
      <FooterCopyright>
        © 2024 ‧ Landfast ‧ All rights reserved.
      </FooterCopyright>
    </FooterWrapper>
  )
}
