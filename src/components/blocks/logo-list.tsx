import {
  PrismaIcon,
  RemixIcon,
  ShadcnIcon,
  StripeIcon,
  ViteIcon,
} from '@/assets/icons'
import { Link } from '@remix-run/react'

export default function LogoList() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 px-8 py-8 lg:py-20">
      <h2 className="text-center text-xl font-medium text-foreground">
        Built for Developers
      </h2>
      <div className="my-8 flex flex-wrap items-center justify-center gap-10 gap-y-8 lg:gap-14">
        <Link
          to="https://remix.run"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100 "
        >
          <RemixIcon className="h-8 object-cover md:h-12" />
        </Link>
        <Link
          to="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100"
        >
          <ViteIcon className="h-8 object-cover md:h-12" />
        </Link>

        <Link
          to="https://stripe.com"
          target="_blank"
          rel="noreferrer"
          className="flex  items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100"
        >
          <StripeIcon className="h-8 object-cover md:h-12" />
        </Link>
        <Link
          to="https://www.prisma.io"
          target="_blank"
          rel="noreferrer"
          className="flex  items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100"
        >
          <PrismaIcon className="h-8 object-cover md:h-12" />
        </Link>
        <Link
          to="https://ui.shadcn.com"
          target="_blank"
          rel="noreferrer"
          className="flex  items-center justify-center text-primary opacity-80 grayscale transition hover:opacity-100"
        >
          <ShadcnIcon className="h-8 object-cover md:h-12" />
        </Link>
      </div>
    </div>
  )
}
