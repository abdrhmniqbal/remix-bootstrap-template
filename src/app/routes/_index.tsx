import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="bg-foreground flex h-screen items-center justify-center bg-slate-200">
      <h1 className="text-background text-3xl font-bold">shadcn works!</h1>
    </div>
  )
}
