import { ClientOnly, HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
import * as React from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import appCss from '../styles.css?url'

const getTheme = createServerFn({ method: 'GET' }).handler(async () => {
  return {
    variant: getCookie('theme') || 'rust',
    mode: getCookie('colorMode') || 'dark', // default to dark
  }
})

export const Route = createRootRoute({
  loader: async () => {
    const theme = await getTheme()
    return { theme }
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Harsh | Hardware & Software' },
      { name: 'description', content: 'Personal portfolio and engineering blog.' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="font-display text-4xl text-accent-red mb-4">404</h1>
      <p className="font-mono text-muted-foreground uppercase tracking-wider">
        Trace not found. Path disconnected.
      </p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-8 border border-accent-red bg-background text-foreground m-8">
      <h1 className="font-display text-2xl text-accent-red mb-4">SYSTEM FAULT</h1>
      <pre className="font-mono text-sm whitespace-pre-wrap">
        {error.message}
      </pre>
    </div>
  ),
})

function RootComponent() {
  const { theme } = Route.useLoaderData()

  return (
    <html lang="en" data-theme={theme.variant} className={theme.mode === 'dark' ? 'dark' : ''} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="app" className="shell-grid">
          {/* Main Content Column */}
          <main className="shell-center shell-guideline-left shell-guideline-right flex flex-col min-h-screen">
            <Header />
            
            <div className="flex-1">
              <Outlet />
            </div>

            <Footer />
          </main>
        </div>

        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            { name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
