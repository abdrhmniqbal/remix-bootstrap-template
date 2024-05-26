import { createRequestHandler } from '@remix-run/express'
import { installGlobals } from '@remix-run/node'
import compression from 'compression'
import crypto from 'crypto'
import express from 'express'
import morgan from 'morgan'

installGlobals()

const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV ?? 'development'

const viteDevServer =
  NODE_ENV === 'production'
    ? undefined
    : await import('vite').then(vite =>
        vite.createServer({
          server: { middlewareMode: true },
        }),
      )

const app = express()

/**
 * Good practices: Disable x-powered-by.
 * @see http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
 */
app.disable('x-powered-by')

app.use(compression())
app.use(morgan('tiny'))

/**
 * Content Security Policy.
 * Implementation based on github.com/epicweb-dev/epic-stack
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
 */
app.use((_, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString('hex')
  next()
})

// Handle assets requests.
if (viteDevServer) {
  app.use(viteDevServer.middlewares)
} else {
  app.use(
    '/assets',
    express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
  )
}

// Everything else (like favicon.ico) is cached for an hour.
// You may want to be more aggressive with this caching.
app.use(express.static('build/client', { maxAge: '1h' }))

app.get(['/img/*', '/favicons/*'], (req, res) => {
  // If we've gone beyond express.static for these, it means something is missing.
  // In this case, we'll simply send a 404 and skip calling other middleware.
  return res.status(404).send('Not found')
})

// Handle SSR requests.
app.all(
  '*',
  createRequestHandler({
    getLoadContext: (_, res) => ({
      cspNonce: res.locals.cspNonce,
    }),

    build: viteDevServer
      ? () => viteDevServer.ssrLoadModule('virtual:remix/server-build')
      : await import('./build/server/index.js'),
  }),
)

app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`),
)
