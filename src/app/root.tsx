import '@/app/globals.css'
import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { ErrorBoundaryBlock } from '@/components/blocks/error-boundary'
import { getEnvValue, getSiteUrl } from '@/lib/utils'

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const appName = getEnvValue('VITE_APP_NAME')
  return [
    { title: data ? appName : `Error | ${appName}` },
    { name: 'description', content: `Your own captain's log` },
  ]
}

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    requestInfo: {
      origin: getSiteUrl(request),
      path: new URL(request.url).pathname,
    },
  })
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  return (
    <Layout>
      <ErrorBoundaryBlock />
    </Layout>
  )
}
