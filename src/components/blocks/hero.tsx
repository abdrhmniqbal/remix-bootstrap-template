import { GithubIcon } from '@/assets/icons'
import HeroContent, {
  HeroActionButton,
  HeroButtonGroup,
  HeroDescription,
  HeroImage,
  HeroSecondButton,
  HeroTitle,
  HeroWrapper,
} from '@/components/ui/hero'

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Launch your website in days.</HeroTitle>
        <HeroDescription>
          The boilerplate with all you need to build your production ready
          website, and start making money online fast.
        </HeroDescription>
        <HeroButtonGroup>
          <HeroActionButton to="/login">Get Now</HeroActionButton>
          <HeroSecondButton
            to="https://github.com/iblabd/remix-boilerplate-template"
            target="_blank"
          >
            <GithubIcon className="btn-icon-l text-[#24292f]" />
            View on Github
          </HeroSecondButton>
        </HeroButtonGroup>
      </HeroContent>
      <HeroImage src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920" />
    </HeroWrapper>
  )
}
