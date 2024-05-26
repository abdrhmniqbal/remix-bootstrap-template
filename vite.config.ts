import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { remixDevTools } from 'remix-development-tools'
import { flatRoutes } from 'remix-flat-routes'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

const ReactCompilerConfig = {
  sources: (filename: string | string[]) => {
    return filename.indexOf('./src') !== -1
  },
}

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({
      appDirectory: './src/app',
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes, { appDir: './src/app' })
      },
    }),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    tsconfigPaths(),
  ],
})
