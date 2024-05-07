import { Link } from '@remix-run/react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type ErrorStackProps = {
  message: string
  stack?: string
}

export function ErrorStack({ message, stack }: ErrorStackProps) {
  return (
    <>
      <div className="flex flex-col bg-background px-4 py-16">
        <div className="flex w-full flex-col items-center justify-center md:flex-row md:space-x-6 md:px-4">
          <div className="flex w-full flex-col">
            <span className="text-2xl font-bold text-foreground md:text-4xl">
              {message || 'App Error'}
            </span>
            <span className="text-muted-foreground">
              An error has occurred processing your request. You may try again
              or contact support if the problem persists.
            </span>
          </div>
          <Button
            className="mt-4 w-full md:mt-0 md:w-min"
            asChild
          >
            <Link to="/">Take me back</Link>
          </Button>
        </div>
        <Card className="mt-8 w-full bg-foreground text-background">
          <CardHeader>
            <CardTitle className="text-destructive">Stack Error:</CardTitle>
            <CardDescription>
              Stack trace only displayed in DEVELOPMENT
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="max-w-full overflow-auto text-destructive">
              {stack}
            </pre>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
