import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200">
      <h1 className="text-3xl font-bold">Flat Routes works!</h1>
    </div>
  )
}
