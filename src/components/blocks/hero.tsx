import { GithubIcon } from '@/assets/icons'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:items-start lg:gap-20 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-8 text-center lg:items-start lg:gap-10 lg:text-left">
        <h1 className="flex flex-col items-center gap-3 text-4xl font-extrabold tracking-tighter lg:items-start lg:text-6xl/tight">
          Launch your website in days.
        </h1>
        <p className="text-lg leading-relaxed opacity-80">
          The boilerplate with all you need to build your production ready
          website, and start making money online fast.
        </p>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full sm:w-auto"
          >
            Get LandFast
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto"
            variant="outline"
          >
            <GithubIcon className="mr-2 size-4 text-[#24292f]" />
            View on Github
          </Button>
        </div>
      </div>
      <div className="relative max-md:-m-4 lg:w-full">
        <img
          alt="Example"
          width="1080"
          height="1080"
          decoding="async"
          data-nimg="1"
          className="ml-auto w-full max-w-xl rounded-md"
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE3MTUzMjMxMTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
        />
      </div>
    </section>
  )
}

export default Hero
