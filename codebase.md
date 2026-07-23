# Codebase

## File: .cta.json

```json
{
  "projectName": "blog-portfolio",
  "mode": "file-router",
  "typescript": true,
  "tailwind": true,
  "packageManager": "npm",
  "git": false,
  "install": true,
  "intent": true,
  "addOnOptions": {},
  "includeExamples": false,
  "envVarValues": {},
  "routerOnly": false,
  "version": 1,
  "framework": "react",
  "chosenAddOns": [
    "biome",
    "nitro"
  ]
}
```

## File: .env.example

```example
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Owner gate
SITE_ADMIN_PASSWORD=your-secure-password-here
SESSION_SECRET=generate-a-32-plus-char-random-string-here

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-upstash-token

```

## File: .gitignore

```text
node_modules
.DS_Store
dist
dist-ssr
*.local
.env
.nitro
.tanstack
.wrangler
.output
.vinxi
.vercel
__unconfig*
todos.json
.env.local

```

## File: AGENTS.md

```md
<!-- intent-skills:start -->
# TanStack Intent - before editing files, run the matching guidance command.
tanstackIntent:
  - id: "@tanstack/devtools#devtools-app-setup"
    run: "npx @tanstack/intent@latest load @tanstack/devtools#devtools-app-setup"
    for: "Install TanStack Devtools, pick framework adapter (React/Vue/Solid/Preact), register plugins via plugins prop, configure shell (position, hotkeys, theme, hideUntilHover, requireUrlFlag, eventBusConfig). TanStackDevtools component, defaultOpen, localStorage persistence."
  - id: "@tanstack/devtools#devtools-marketplace"
    run: "npx @tanstack/intent@latest load @tanstack/devtools#devtools-marketplace"
    for: "Publish plugin to npm and submit to TanStack Devtools Marketplace. PluginMetadata registry format, plugin-registry.ts, pluginImport (importName, type), requires (packageName, minVersion), framework tagging, multi-framework submissions, featured plugins."
  - id: "@tanstack/devtools#devtools-plugin-panel"
    run: "npx @tanstack/intent@latest load @tanstack/devtools#devtools-plugin-panel"
    for: "Build devtools panel components that display emitted event data. Listen via EventClient.on(), handle theme (light/dark), use @tanstack/devtools-ui components. Plugin registration (name, render, id, defaultOpen), lifecycle (mount, activate, destroy), max 3 active plugins. Two paths: Solid.js core with devtools-ui for multi-framework support, or framework-specific panels."
  - id: "@tanstack/devtools#devtools-production"
    run: "npx @tanstack/intent@latest load @tanstack/devtools#devtools-production"
    for: "Handle devtools in production vs development. removeDevtoolsOnBuild, devDependency vs regular dependency, conditional imports, NoOp plugin variants for tree-shaking, non-Vite production exclusion patterns."
  - id: "@tanstack/devtools-event-client#devtools-bidirectional"
    run: "npx @tanstack/intent@latest load @tanstack/devtools-event-client#devtools-bidirectional"
    for: "Two-way event patterns between devtools panel and application. App-to-devtools observation, devtools-to-app commands, time-travel debugging with snapshots and revert. structuredClone for snapshot safety, distinct event suffixes for observation vs commands, serializable payloads only."
  - id: "@tanstack/devtools-event-client#devtools-event-client"
    run: "npx @tanstack/intent@latest load @tanstack/devtools-event-client#devtools-event-client"
    for: "Create typed EventClient for a library. Define event maps with typed payloads, pluginId auto-prepend namespacing, emit()/on()/onAll()/onAllPluginEvents() API. Connection lifecycle (5 retries, 300ms), event queuing, enabled/disabled state, SSR fallbacks, singleton pattern. Unique pluginId requirement to avoid event collisions."
  - id: "@tanstack/devtools-event-client#devtools-instrumentation"
    run: "npx @tanstack/intent@latest load @tanstack/devtools-event-client#devtools-instrumentation"
    for: "Analyze library codebase for critical architecture and debugging points, add strategic event emissions. Identify middleware boundaries, state transitions, lifecycle hooks. Consolidate events (1 not 15), debounce high-frequency updates, DRY shared payload fields, guard emit() for production. Transparent server/client event bridging."
  - id: "@tanstack/devtools-vite#devtools-vite-plugin"
    run: "npx @tanstack/intent@latest load @tanstack/devtools-vite#devtools-vite-plugin"
    for: "Configure @tanstack/devtools-vite for source inspection (data-tsd-source, inspectHotkey, ignore patterns), console piping (client-to-server, server-to-client, levels), enhanced logging, server event bus (port, host, HTTPS), production stripping (removeDevtoolsOnBuild), editor integration (launch-editor, custom editor.open). Must be FIRST plugin in Vite config. Vite ^6 || ^7 only."
  - id: "@tanstack/react-start#lifecycle/migrate-from-nextjs"
    run: "npx @tanstack/intent@latest load @tanstack/react-start#lifecycle/migrate-from-nextjs"
    for: "Step-by-step migration from Next.js App Router to TanStack Start: route definition conversion, API mapping, server function conversion from Server Actions, middleware conversion, data fetching pattern changes."
  - id: "@tanstack/react-start#react-start"
    run: "npx @tanstack/intent@latest load @tanstack/react-start#react-start"
    for: "React bindings for TanStack Start: createStart, StartClient, StartServer, React-specific imports, re-exports from @tanstack/react-router, full project setup with React, useServerFn hook."
  - id: "@tanstack/react-start#react-start/server-components"
    run: "npx @tanstack/intent@latest load @tanstack/react-start#react-start/server-components"
    for: "Implement, review, debug, and refactor TanStack Start React Server Components in React 19 apps. Use when tasks mention @tanstack/react-start/rsc, renderServerComponent, createCompositeComponent, CompositeComponent, renderToReadableStream, createFromReadableStream, createFromFetch, Composite Components, React Flight streams, loader or query owned RSC caching, router.invalidate, structuralSharing: false, selective SSR, stale names like renderRsc or .validator, or migration from Next App Router RSC patterns. Do not use for generic SSR or non-TanStack RSC frameworks except brief comparison."
  - id: "@tanstack/router-core#router-core"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core"
    for: "Framework-agnostic core concepts for TanStack Router: route trees, createRouter, createRoute, createRootRoute, createRootRouteWithContext, addChildren, Register type declaration, route matching, route sorting, file naming conventions. Entry point for all router skills."
  - id: "@tanstack/router-core#router-core/auth-and-guards"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/auth-and-guards"
    for: "Route protection with beforeLoad, redirect()/throw redirect(), isRedirect helper, authenticated layout routes (_authenticated), non-redirect auth (inline login), RBAC with roles and permissions, auth provider integration (Auth0, Clerk, Supabase), router context for auth state."
  - id: "@tanstack/router-core#router-core/code-splitting"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/code-splitting"
    for: "Automatic code splitting (autoCodeSplitting), .lazy.tsx convention, createLazyFileRoute, createLazyRoute, lazyRouteComponent, getRouteApi for typed hooks in split files, codeSplitGroupings per-route override, splitBehavior programmatic config, critical vs non-critical properties."
  - id: "@tanstack/router-core#router-core/data-loading"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/data-loading"
    for: "Route loader option, loaderDeps for cache keys, staleTime/gcTime/ defaultPreloadStaleTime SWR caching, pendingComponent/pendingMs/ pendingMinMs, errorComponent/onError/onCatch, beforeLoad, router context and createRootRouteWithContext DI pattern, router.invalidate, Await component, deferred data loading with unawaited promises."
  - id: "@tanstack/router-core#router-core/navigation"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/navigation"
    for: "Link component, useNavigate, Navigate component, router.navigate, ToOptions/NavigateOptions/LinkOptions, from/to relative navigation, activeOptions/activeProps, preloading (intent/viewport/render), preloadDelay, navigation blocking (useBlocker, Block), createLink, linkOptions helper, scroll restoration, MatchRoute."
  - id: "@tanstack/router-core#router-core/not-found-and-errors"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/not-found-and-errors"
    for: "notFound() function, notFoundComponent, defaultNotFoundComponent, notFoundMode (fuzzy/root), errorComponent, CatchBoundary, CatchNotFound, isNotFound, NotFoundRoute (deprecated), route masking (mask option, createRouteMask, unmaskOnReload)."
  - id: "@tanstack/router-core#router-core/path-params"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/path-params"
    for: "Dynamic path segments ($paramName), splat routes ($ / _splat), optional params ({-$paramName}), prefix/suffix patterns ({$param}.ext), useParams, params.parse/stringify, pathParamsAllowedCharacters, i18n locale patterns."
  - id: "@tanstack/router-core#router-core/search-params"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/search-params"
    for: "validateSearch, search param validation with Zod/Valibot/ArkType adapters, fallback(), search middlewares (retainSearchParams, stripSearchParams), custom serialization (parseSearch, stringifySearch), search param inheritance, loaderDeps for cache keys, reading and writing search params."
  - id: "@tanstack/router-core#router-core/ssr"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/ssr"
    for: "Non-streaming and streaming SSR, RouterClient/RouterServer, renderRouterToString/renderRouterToStream, createRequestHandler, defaultRenderHandler/defaultStreamHandler, HeadContent/Scripts components, head route option (meta/links/styles/scripts), ScriptOnce, automatic loader dehydration/hydration, memory history on server, data serialization, document head management."
  - id: "@tanstack/router-core#router-core/type-safety"
    run: "npx @tanstack/intent@latest load @tanstack/router-core#router-core/type-safety"
    for: "Full type inference philosophy (never cast, never annotate inferred values), Register module declaration, from narrowing on hooks and Link, strict:false for shared components, getRouteApi for code-split typed access, addChildren with object syntax for TS perf, LinkProps and ValidateLinkOptions type utilities, as const satisfies pattern."
  - id: "@tanstack/router-plugin#router-plugin"
    run: "npx @tanstack/intent@latest load @tanstack/router-plugin#router-plugin"
    for: "TanStack Router bundler plugin for route generation and automatic code splitting. Supports Vite, Webpack, Rspack, and esbuild. Configures autoCodeSplitting, routesDirectory, target framework, and code split groupings."
  - id: "@tanstack/start-client-core#start-core"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core"
    for: "Core overview for TanStack Start: tanstackStart() Vite plugin, getRouter() factory, root route document shell (HeadContent, Scripts, Outlet), client/server entry points, routeTree.gen.ts, tsconfig configuration. Entry point for all Start skills."
  - id: "@tanstack/start-client-core#start-core/auth-server-primitives"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core/auth-server-primitives"
    for: "Server-side authentication primitives for TanStack Start: session cookies (HttpOnly, Secure, SameSite, __Host- prefix), session read/issue/destroy via createServerFn and middleware, OAuth authorization-code flow with state and PKCE, password-reset enumeration defense, CSRF for non-GET RPCs, rate limiting auth endpoints, session rotation on privilege change. Pairs with router-core/auth-and-guards for the routing side."
  - id: "@tanstack/start-client-core#start-core/deployment"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core/deployment"
    for: "Deploy to Cloudflare Workers, Netlify, Vercel, Node.js/Docker, Bun, Railway. Selective SSR (ssr option per route), SPA mode, static prerendering, ISR with Cache-Control headers, SEO and head management."
  - id: "@tanstack/start-client-core#start-core/execution-model"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core/execution-model"
    for: "Isomorphic-by-default principle, environment boundary functions (createServerFn, createServerOnlyFn, createClientOnlyFn, createIsomorphicFn), ClientOnly component, useHydrated hook, import protection, dead code elimination, environment variable safety (VITE_ prefix, process.env)."
  - id: "@tanstack/start-client-core#start-core/middleware"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core/middleware"
    for: "createMiddleware, request middleware (.server only), server function middleware (.client + .server), context passing via next({ context }), sendContext for client-server transfer, global middleware via createStart in src/start.ts, middleware factories, method order enforcement, fetch override precedence."
  - id: "@tanstack/start-client-core#start-core/server-functions"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core/server-functions"
    for: "createServerFn (GET/POST), validator (Zod or function), useServerFn hook, server context utilities (getRequest, getRequestHeader, setResponseHeader, setResponseStatus), error handling (throw errors, redirect, notFound), streaming, FormData handling, file organization (.functions.ts, .server.ts)."
  - id: "@tanstack/start-client-core#start-core/server-routes"
    run: "npx @tanstack/intent@latest load @tanstack/start-client-core#start-core/server-routes"
    for: "Server-side API endpoints using the server property on createFileRoute, HTTP method handlers (GET, POST, PUT, DELETE), createHandlers for per-handler middleware, handler context (request, params, context), request body parsing, response helpers, file naming for API routes."
  - id: "@tanstack/start-server-core#start-server-core"
    run: "npx @tanstack/intent@latest load @tanstack/start-server-core#start-server-core"
    for: "Server-side runtime for TanStack Start: createStartHandler, request/response utilities (getRequest, setResponseHeader, setCookie, getCookie, useSession), three-phase request handling, AsyncLocalStorage context."
  - id: "@tanstack/virtual-file-routes#virtual-file-routes"
    run: "npx @tanstack/intent@latest load @tanstack/virtual-file-routes#virtual-file-routes"
    for: "Programmatic route tree building as an alternative to filesystem conventions: rootRoute, index, route, layout, physical, defineVirtualSubtreeConfig. Use with TanStack Router plugin's virtualRouteConfig option."
<!-- intent-skills:end -->

```

## File: check-bbox.mjs

```mjs
import fs from 'fs'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// Need a headless DOM for GLTFLoader
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
global.window = dom.window
global.document = dom.window.document
global.self = global.window

// We can just read the raw JSON from the GLB using a simpler approach since we just need the bounding box, but GLTFLoader is better.
// Actually, using a simpler script to just parse the GLTF JSON chunk might be faster, but let's try a different approach.

// Let's just create a React component that logs the bounding box on mount!

```

## File: fix-oklch.cjs

```cjs
const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(dirPath);
  });
}

let modifiedFiles = 0;

walkDir('./src', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Regex to match oklch(0.xxx ...)
  // We want to capture the decimal part
  // e.g. oklch(0.62 0.24 27) -> match group 1 is '0.62'
  content = content.replace(/oklch\(\s*0\.(\d+)/g, (match, p1) => {
    // p1 is the digits after the decimal point
    let val = parseFloat('0.' + p1) * 100;
    // Format to avoid 62.00000000000001
    val = Math.round(val * 10) / 10;
    return `oklch(${val}%`;
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated ${filePath}`);
  }
});

console.log(`Done! Modified ${modifiedFiles} files.`);

```

## File: generate-codebase.cjs

```cjs
const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['.git', 'node_modules', '.output', '.tanstack', '.vscode', 'public', 'glb_files', 'dist', 'build'];
const IGNORE_FILES = ['package-lock.json', '.DS_Store', 'codebase.md'];
const IGNORE_EXTS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.glb', '.gltf', '.mp3', '.mp4', '.woff', '.woff2', '.ttf', '.eot', '.pdf'];

function generateCodebaseMd(rootDir, outputFile) {
    let mdContent = '# Codebase\n\n';

    function walkDir(currentDir) {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (!IGNORE_DIRS.includes(item)) {
                    walkDir(fullPath);
                }
            } else {
                if (IGNORE_FILES.includes(item)) continue;
                const ext = path.extname(item).toLowerCase();
                if (IGNORE_EXTS.includes(ext)) continue;
                
                // Exclude large lockfiles or weird binaries if missed
                if (stat.size > 1024 * 1024) continue; // Skip files > 1MB

                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
                    mdContent += `## File: ${relativePath}\n\n`;
                    
                    const mdLang = ext.slice(1) || 'text';
                    mdContent += `\`\`\`${mdLang}\n${content}\n\`\`\`\n\n`;
                } catch (err) {
                    console.error(`Error reading ${fullPath}:`, err.message);
                }
            }
        }
    }

    walkDir(rootDir);
    fs.writeFileSync(outputFile, mdContent, 'utf8');
    console.log(`Successfully generated ${outputFile}`);
}

generateCodebaseMd(process.cwd(), 'codebase.md');

```

## File: package.json

```json
{
  "name": "blog-portfolio",
  "private": true,
  "type": "module",
  "imports": {
    "#/*": "./src/*"
  },
  "scripts": {
    "dev": "vite dev --port 3000",
    "generate-routes": "tsr generate",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "format": "biome format",
    "lint": "biome lint",
    "check": "biome check"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.6.1",
    "@supabase/supabase-js": "^2.110.0",
    "@tailwindcss/vite": "^4.1.18",
    "@tanstack/react-devtools": "latest",
    "@tanstack/react-router": "latest",
    "@tanstack/react-router-devtools": "latest",
    "@tanstack/react-router-ssr-query": "latest",
    "@tanstack/react-start": "latest",
    "@tanstack/router-plugin": "^1.132.0",
    "@types/three": "^0.185.0",
    "@upstash/redis": "^1.38.0",
    "date-fns": "^4.4.0",
    "iron-session": "^8.0.4",
    "lucide-react": "^0.545.0",
    "nitro": "npm:nitro-nightly@latest",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-markdown": "^10.1.0",
    "rehype-raw": "^7.0.0",
    "rehype-sanitize": "^6.0.0",
    "remark-gfm": "^4.0.1",
    "tailwindcss": "^4.1.18",
    "three": "^0.185.1",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@biomejs/biome": "2.4.5",
    "@tailwindcss/typography": "^0.5.16",
    "@tanstack/devtools-vite": "latest",
    "@tanstack/router-cli": "^1.132.0",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/react": "^16.3.0",
    "@types/node": "^22.10.2",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^6.0.1",
    "jsdom": "^28.1.0",
    "typescript": "^6.0.2",
    "vite": "^8.0.0",
    "vitest": "^4.1.5"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild",
      "lightningcss"
    ]
  }
}

```

## File: README.md

```md
Welcome to your new TanStack Start app! 

# Getting Started

To run this application:

```bash
npm install
npm run dev
```

# Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/styles.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Uninstall the packages: `npm install @tailwindcss/vite tailwindcss -D`

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting. The following scripts are available:


```bash
npm run lint
npm run format
npm run check
```


## Deploy with Nitro

This project uses Nitro as a generic server adapter, so it can run on any Node-compatible host.

```bash
npm run build
node dist/server/index.mjs
```

The build output is a self-contained Node server. To deploy, push the `dist/` directory to your host (Render, Fly.io, your own VPS, etc.) and run the server command above.

For host-specific presets (Vercel, Netlify, Cloudflare, AWS Lambda, etc.) and tuning, see https://v3.nitro.build/deploy.



## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you render `{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My App' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
})
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from '@tanstack/react-start'

const getServerTime = createServerFn({
  method: 'GET',
}).handler(async () => {
  return new Date().toISOString()
})

// Use in a component
function MyComponent() {
  const [time, setTime] = useState('')
  
  useEffect(() => {
    getServerTime().then(setTime)
  }, [])
  
  return <div>Server time: {time}</div>
}
```

## API Routes

You can create API routes by using the `server` property in your route definitions:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit [TanStack Start](https://tanstack.com/start).

```

## File: src/components/Footer.tsx

```tsx
import { useState, useEffect } from 'react'

export function Footer() {
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((u) => u + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(uptime / 3600)
  const minutes = Math.floor((uptime % 3600) / 60)
  const seconds = uptime % 60
  const uptimeStr = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':')

  return (
    <footer className="mt-16 py-6 border-t border-dashed border-foreground/15">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground tracking-wider uppercase">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent-rust"
            style={{
              boxShadow: '0 0 4px oklch(58% 0.16 42 / 0.7)',
            }}
          />
          ONLINE
        </span>
        <span className="text-foreground/20">·</span>
        <span>UPTIME {uptimeStr}</span>
        <span className="text-foreground/20">·</span>
        <span>© {new Date().getFullYear()}</span>
        <span className="text-foreground/20">·</span>
        <span>v1.0.0</span>
      </div>
    </footer>
  )
}

```

## File: src/components/Header.tsx

```tsx
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { DotMatrixText } from './primitives/DotMatrixText'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="relative flex items-center justify-between py-5 border-b border-dashed border-foreground/10 mb-10">
      {/* Monogram */}
      <Link to="/" className="no-underline">
        <DotMatrixText size="sm" glow="rust" as="span">
          H.S
        </DotMatrixText>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.to === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.to)

          return (
            <Link
              key={link.to}
              to={link.to}
              className={`
                font-mono text-[10px] uppercase tracking-[0.14em]
                px-2.5 py-1.5 no-underline transition-all duration-150
                ${isActive
                  ? 'text-accent-rust bg-accent-rust/[0.06]'
                  : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]'
                }
              `}
            >
              {isActive ? `[ ${link.label} ]` : link.label}
            </Link>
          )
        })}
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          {mobileOpen ? (
            <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
          ) : (
            <>
              <rect x="2" y="4" width="14" height="1.5" rx="0.5" />
              <rect x="2" y="8.5" width="14" height="1.5" rx="0.5" />
              <rect x="2" y="13" width="14" height="1.5" rx="0.5" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav
          className="absolute top-full left-0 right-0 bg-background border-b border-dashed border-foreground/10 z-40 md:hidden"
          style={{ marginTop: '-1px' }}
        >
          <div className="flex flex-col py-3 px-4 gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.to)

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    font-mono text-xs uppercase tracking-widest
                    py-2.5 px-2 no-underline transition-colors
                    ${isActive
                      ? 'text-accent-rust bg-accent-rust/[0.06]'
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {isActive ? `[ ${link.label} ]` : link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

```

## File: src/components/primitives/Card.tsx

```tsx
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-background border border-foreground/12
        p-5 relative
        card-brackets
        ${hover ? 'transition-all duration-200 hover:border-foreground/25 hover:shadow-[0_2px_16px_-4px_oklch(18%_0.02_40/0.08)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

```

## File: src/components/primitives/CyberButton.tsx

```tsx
import type { ReactNode, MouseEventHandler } from 'react'
import { Link } from '@tanstack/react-router'

type CyberVariant = 'rust' | 'blue' | 'red'

interface CyberButtonProps {
  children: ReactNode
  variant?: CyberVariant
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantConfig: Record<CyberVariant, {
  borderColor: string
  hoverBg: string
  glowColor: string
  ledGlow: string
}> = {
  rust: {
    borderColor: 'oklch(58% 0.16 42)',
    hoverBg: 'oklch(58% 0.16 42)',
    glowColor: 'oklch(58% 0.16 42 / 0.4)',
    ledGlow: 'oklch(58% 0.16 42 / 0.6)',
  },
  blue: {
    borderColor: 'oklch(52% 0.24 265)',
    hoverBg: 'oklch(52% 0.24 265)',
    glowColor: 'oklch(52% 0.24 265 / 0.4)',
    ledGlow: 'oklch(52% 0.24 265 / 0.6)',
  },
  red: {
    borderColor: 'oklch(62% 0.24 27)',
    hoverBg: 'oklch(62% 0.24 27)',
    glowColor: 'oklch(62% 0.24 27 / 0.4)',
    ledGlow: 'oklch(62% 0.24 27 / 0.6)',
  },
}

export function CyberButton({
  children,
  variant = 'rust',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: CyberButtonProps) {
  const v = variantConfig[variant]

  const baseStyle: React.CSSProperties = {
    borderColor: v.borderColor,
    '--btn-hover-bg': v.hoverBg,
    '--btn-glow': v.glowColor,
    '--btn-led': v.ledGlow,
  } as React.CSSProperties

  const content = (
    <>
      {/* LED indicator dot */}
      <span
        aria-hidden="true"
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-shadow duration-200"
        style={{
          background: v.borderColor,
          boxShadow: `0 0 4px ${v.ledGlow}`,
        }}
      />
      {/* Label */}
      <span className="relative z-20">{children}</span>
      {/* Hover fill overlay */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 z-10 opacity-0
          group-hover:opacity-100
          transition-opacity duration-200
        "
        style={{
          background: v.hoverBg,
        }}
      />
    </>
  )

  const sharedClasses = `
    inline-flex items-center gap-2.5
    font-display text-xs uppercase tracking-widest
    px-5 py-2.5
    border bg-transparent text-foreground
    group-hover:text-background
    transition-all duration-200
    relative overflow-hidden
    group no-underline
    ${disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}
    ${className}
  `

  if (href) {
    return (
      <Link to={href} className={sharedClasses} style={baseStyle}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClasses}
      style={baseStyle}
    >
      {content}
    </button>
  )
}

```

## File: src/components/primitives/Divider.tsx

```tsx
interface DividerProps {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 my-12 ${className}`}>
      {/* Left dashed line */}
      <div className="flex-1 border-t border-dashed border-foreground/20" />

      {/* Diode symbol */}
      <svg
        width="32"
        height="16"
        viewBox="0 0 32 16"
        className="text-accent-rust flex-shrink-0"
        aria-hidden="true"
      >
        {/* Triangle (anode) */}
        <polygon
          points="6,2 6,14 18,8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Bar (cathode) */}
        <line
          x1="18"
          y1="2"
          x2="18"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Lead lines */}
        <line
          x1="0"
          y1="8"
          x2="6"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="8"
          x2="32"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Right dashed line */}
      <div className="flex-1 border-t border-dashed border-foreground/20" />
    </div>
  )
}

```

## File: src/components/primitives/DotMatrixText.tsx

```tsx
import type { ReactNode } from 'react'

type DotMatrixSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type GlowColor = 'rust' | 'red' | 'blue' | 'cyan'

interface DotMatrixTextProps {
  children: ReactNode
  size?: DotMatrixSize
  glow?: GlowColor
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  className?: string
}

const sizeMap: Record<DotMatrixSize, string> = {
  sm: 'text-xs leading-relaxed',
  md: 'text-base md:text-lg',
  lg: 'text-xl md:text-2xl',
  xl: 'text-2xl md:text-4xl',
  '2xl': 'text-4xl md:text-6xl lg:text-7xl',
}

const glowStyles: Record<GlowColor, { filter: string; color: string }> = {
  rust: {
    filter: 'drop-shadow(0 0 12px oklch(58% 0.16 42 / 0.5)) drop-shadow(0 0 4px oklch(58% 0.16 42 / 0.3))',
    color: 'oklch(58% 0.16 42)',
  },
  red: {
    filter: 'drop-shadow(0 0 12px oklch(62% 0.24 27 / 0.5)) drop-shadow(0 0 4px oklch(62% 0.24 27 / 0.3))',
    color: 'oklch(62% 0.24 27)',
  },
  blue: {
    filter: 'drop-shadow(0 0 12px oklch(52% 0.24 265 / 0.5)) drop-shadow(0 0 4px oklch(52% 0.24 265 / 0.3))',
    color: 'oklch(52% 0.24 265)',
  },
  cyan: {
    filter: 'drop-shadow(0 0 12px oklch(78% 0.15 195 / 0.5)) drop-shadow(0 0 4px oklch(78% 0.15 195 / 0.3))',
    color: 'oklch(78% 0.15 195)',
  },
}

export function DotMatrixText({
  children,
  size = 'md',
  glow,
  as: Tag = 'span',
  className = '',
}: DotMatrixTextProps) {
  const glowStyle = glow ? glowStyles[glow] : null

  return (
    <Tag
      className={`
        font-display uppercase tracking-wider
        ${sizeMap[size]}
        relative inline-block
        ${className}
      `}
      style={{
        ...(glowStyle ? { filter: glowStyle.filter } : {}),
      }}
    >
      {/* Dot-matrix overlay — tighter grid for more visible pixelation */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, transparent 35%, oklch(96.5% 0.012 80 / 0.5) 36%)',
          backgroundSize: '4px 4px',
          mixBlendMode: 'multiply',
        }}
      />
      {/* Actual text */}
      <span className="relative z-0">{children}</span>
    </Tag>
  )
}

```

## File: src/components/primitives/SectionLabel.tsx

```tsx
interface SectionLabelProps {
  number: string
  label: string
  className?: string
}

export function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`
        font-mono text-accent-rust uppercase tracking-widest text-xs
        flex items-center gap-2 mb-8
        ${className}
      `}
    >
      <span className="text-muted-foreground">[</span>
      <span>{number}</span>
      <span className="text-muted-foreground">//</span>
      <span>{label}</span>
      <span className="text-muted-foreground">]</span>
    </div>
  )
}

```

## File: src/components/primitives/TerminalCursor.tsx

```tsx
interface TerminalCursorProps {
  className?: string
}

export function TerminalCursor({ className = '' }: TerminalCursorProps) {
  return (
    <span
      className={`inline-block font-terminal text-accent-rust ${className}`}
      style={{ animation: 'blink 1s step-end infinite' }}
      aria-hidden="true"
    >
      █
    </span>
  )
}

```

## File: src/data/projects.ts

```ts
export interface Project {
  id: string
  title: string
  date: string
  summary: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'cyber-deck',
    title: 'Cyberdeck mk III',
    date: '2025-11',
    summary: 'A custom mechanical keyboard and integrated display housed in a 3D-printed chassis. Powered by a Raspberry Pi 5 with a custom embedded Linux distro.',
    tags: ['Hardware', 'C++', 'Linux', '3D Printing'],
    github: 'https://github.com/example/cyberdeck',
  },
  {
    id: 'neural-synth',
    title: 'Neural Synth Engine',
    date: '2025-06',
    summary: 'A polyphonic hardware synthesizer using a neural network for real-time waveform generation. Implemented on an FPGA.',
    tags: ['Verilog', 'DSP', 'FPGA', 'Python'],
    github: 'https://github.com/example/neural-synth',
    demo: 'https://youtube.com/example',
  },
  {
    id: 'mesh-net',
    title: 'LoRa Mesh Comm',
    date: '2024-12',
    summary: 'Off-grid encrypted messaging system using LoRa radios and ESP32 microcontrollers. 10km range with multi-hop routing.',
    tags: ['ESP32', 'C', 'Crypto', 'RF'],
    github: 'https://github.com/example/mesh-net',
  }
]

```

## File: src/data/skills.ts

```ts
export interface SkillCategory {
  title: string
  skills: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Hardware & Embedded',
    skills: ['C / C++', 'Rust', 'Verilog', 'FreeRTOS', 'PCB Design (KiCad)', 'ESP32 / STM32', 'Oscilloscope / Logic Analyzer'],
  },
  {
    title: 'Web & Systems',
    skills: ['TypeScript', 'React / Next.js / TanStack', 'Node.js / Go', 'PostgreSQL', 'Redis', 'Docker', 'Linux Admin'],
  },
  {
    title: 'Fabrication',
    skills: ['3D Modeling (Fusion 360)', 'FDM / Resin Printing', 'Laser Cutting', 'SMD Soldering'],
  }
]

```

## File: src/lib/auth.ts

```ts
import { createServerFn } from '@tanstack/react-start'
import { useSession, clearSession } from '@tanstack/react-start/server'
import crypto from 'node:crypto'

// Session configuration
const sessionConfig = {
  // Use a fallback for dev, but require a real secret in prod
  password: process.env.SESSION_SECRET || 'fallback-secret-must-be-32-chars-long!',
  name: 'cyber-admin-session',
  maxAge: 60 * 60 * 24 * 7, // 7 days
}

export type AuthSession = {
  isAdmin: boolean
}

// 1. Get current session state
export const getAuthSession = createServerFn({ method: 'GET' })
  .handler(async () => {
    const session = await useSession<AuthSession>(sessionConfig)
    return session.data
  })

// 2. Login function (checks password)
export const loginAdmin = createServerFn({ method: 'POST' })
  .validator((password: string) => password)
  .handler(async ({ data: password }) => {
    const correctPassword = process.env.SITE_ADMIN_PASSWORD

    if (!correctPassword) {
      throw new Error('SITE_ADMIN_PASSWORD is not configured on the server.')
    }

    // Use timing-safe equal to prevent timing attacks
    const a = Buffer.from(password)
    const b = Buffer.from(correctPassword)
    
    // Quick length check (leaks length, but that's standard)
    if (a.length !== b.length) {
      return { success: false, error: 'Invalid password' }
    }

    const isValid = crypto.timingSafeEqual(a, b)

    if (!isValid) {
      return { success: false, error: 'Invalid password' }
    }

    // Update session
    const session = await useSession<AuthSession>(sessionConfig)
    await session.update({ isAdmin: true })

    return { success: true }
  })

// 3. Logout function
export const logoutAdmin = createServerFn({ method: 'POST' })
  .handler(async () => {
    await clearSession(sessionConfig)
    return { success: true }
  })

```

## File: src/lib/markdown.tsx

```tsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-cyber">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Override specific elements if needed
          img: ({ node, ...props }) => (
            <img {...props} className="rounded-sm border border-foreground/20 max-w-full my-4" />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return <code className="bg-muted px-1.5 py-0.5 rounded-sm" {...props}>{children}</code>
            }
            return (
              <pre className="bg-foreground text-oled-green p-4 overflow-x-auto rounded-sm border border-muted" {...props}>
                <code>{children}</code>
              </pre>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

```

## File: src/lib/supabase.ts

```ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// We use the service role key because this will only run on the server
// (Nitro environment). No client-side database access for security.
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

```

## File: src/router.tsx

```tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}

```

## File: src/routes/about.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { Divider } from '../components/primitives/Divider'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="rust" className="mb-12">
        ABOUT
      </DotMatrixText>

      <SectionLabel number="00" label="SYS_INFO" />
      
      <div className="prose-cyber max-w-2xl">
        <p>
          I am a multidisciplinary engineer bridging the gap between hardware and software. 
          My background in Electrical Engineering has given me a deep appreciation for the physical 
          reality of computing—electrons flowing through silicon, signals propagating across traces, 
          and the physical constraints that software often takes for granted.
        </p>
        
        <p>
          Currently, I'm exploring the intersection of modern web technologies and embedded systems.
          I believe the next wave of innovation lies in tightly coupled hardware-software ecosystems
          where the boundaries between physical devices and digital services disappear.
        </p>
        
        <Divider />
        
        <h3 className="font-display text-lg text-foreground mb-4">BACKGROUND</h3>
        <ul>
          <li>B.S. Electrical Engineering</li>
          <li>Embedded Systems Developer</li>
          <li>Full-Stack Web Architect</li>
        </ul>
      </div>
    </div>
  )
}

```

## File: src/routes/admin/index.tsx

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { Card } from '../../components/primitives/Card'
import { SectionLabel } from '../../components/primitives/SectionLabel'

export const Route = createFileRoute('/admin/')({
  component: AdminIndex,
})

function AdminIndex() {
  return (
    <div className="animate-in fade-in duration-500">
      <SectionLabel number="00" label="DASHBOARD" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link to="/admin/write" className="no-underline group">
          <Card className="h-full flex flex-col items-center justify-center p-8 text-center group-hover:border-accent-blue transition-colors">
            <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-accent-blue transition-colors">
              NEW TRANSMISSION
            </h3>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
              Draft a new blog post
            </p>
          </Card>
        </Link>

        <Card className="h-full flex flex-col items-center justify-center p-8 text-center opacity-50">
          <h3 className="font-display text-2xl text-foreground mb-2">
            MANAGE MEDIA
          </h3>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            (Coming Soon)
          </p>
        </Card>
      </div>
    </div>
  )
}

```

## File: src/routes/admin/write.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { SectionLabel } from '../../components/primitives/SectionLabel'

export const Route = createFileRoute('/admin/write')({
  component: WritePost,
})

function WritePost() {
  return (
    <div className="animate-in fade-in duration-500">
      <SectionLabel number="01" label="NEW POST" />
      
      <div className="p-8 border border-foreground/20 bg-foreground/5 mt-8 text-center">
        <p className="font-mono text-muted-foreground uppercase tracking-wider">
          WYSIWYG Markdown Editor Placeholder
        </p>
        <p className="font-mono text-xs text-foreground/40 mt-2">
          (To be implemented in a future phase with Supabase storage)
        </p>
      </div>
    </div>
  )
}

```

## File: src/routes/admin.tsx

```tsx
import { createFileRoute, Outlet, redirect, useRouter } from '@tanstack/react-router'
import { getAuthSession, logoutAdmin } from '../lib/auth'
import { useServerFn } from '@tanstack/react-start'
import { DotMatrixText } from '../components/primitives/DotMatrixText'

export const Route = createFileRoute('/admin')({
  beforeLoad: async () => {
    // Check auth session before rendering any admin route
    const session = await getAuthSession()
    
    if (!session?.isAdmin) {
      // Redirect to unlock screen if not logged in
      throw redirect({
        to: '/unlock',
      })
    }
    
    return { session }
  },
  component: AdminLayout,
})

function AdminLayout() {
  const logoutFn = useServerFn(logoutAdmin)
  const router = useRouter()

  const handleLogout = async () => {
    await logoutFn()
    router.invalidate() // Force router to re-run beforeLoad, which will redirect to /unlock
  }

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="flex items-center justify-between py-4 border-b border-foreground/10 mb-8">
        <DotMatrixText size="md" glow="cyan">
          SYS_ADMIN
        </DotMatrixText>
        
        <button
          type="button"
          onClick={handleLogout}
          className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent-rust transition-colors cursor-pointer"
        >
          [ DISCONNECT ]
        </button>
      </header>

      <Outlet />
    </div>
  )
}

```

## File: src/routes/blog/$slug.tsx

```tsx
import { createFileRoute, notFound, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { supabase } from '../../lib/supabase'
import { MarkdownRenderer } from '../../lib/markdown'
import { DotMatrixText } from '../../components/primitives/DotMatrixText'
import { SectionLabel } from '../../components/primitives/SectionLabel'
import { Divider } from '../../components/primitives/Divider'

const getPost = createServerFn({ method: 'GET' })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    try {
      if (!process.env.SUPABASE_URL) {
        // Mock fallback
        if (slug === 'hello-world') {
          return {
            title: 'Hello World: Boot sequence initiated',
            created_at: '2026-07-04T12:00:00Z',
            content: '# Booting...\n\nThis is a test transmission from the new system.\n\n## Systems check\n- Power: OK\n- Logic: OK\n- Memory: OK\n\n```c\nint main() {\n  printf("Hello hardware.");\n  return 0;\n}\n```\n\nEnd of transmission.',
          }
        }
        return null
      }
      
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()
        
      if (error || !data) return null
      return data
    } catch (err) {
      console.error(err)
      return null
    }
  })

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await getPost(params.slug)
    if (!post) throw notFound()
    return { post }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post?.title} | Transmissions` },
    ]
  }),
  component: BlogPost,
})

function BlogPost() {
  const { post } = Route.useLoaderData()

  return (
    <article className="animate-in fade-in duration-500 pb-20 max-w-[65ch]">
      <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-accent-blue uppercase tracking-widest no-underline mb-8 inline-block">
        &larr; BACK TO TRANSMISSIONS
      </Link>
      
      <header className="mb-12">
        <SectionLabel 
          number="LOG" 
          label={new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: '2-digit'
          })} 
          className="mb-6"
        />
        <DotMatrixText size="xl" as="h1" glow="blue">
          {post.title}
        </DotMatrixText>
      </header>
      
      <Divider />
      
      <div className="mt-12">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  )
}

```

## File: src/routes/blog/index.tsx

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { supabase } from '../../lib/supabase'
import { DotMatrixText } from '../../components/primitives/DotMatrixText'
import { SectionLabel } from '../../components/primitives/SectionLabel'
import { Card } from '../../components/primitives/Card'

// Mock data fallback if DB not configured yet
const MOCK_POSTS = [
  {
    slug: 'hello-world',
    title: 'Hello World: Boot sequence initiated',
    created_at: '2026-07-04T12:00:00Z',
    summary: 'Testing the new portfolio and transmission system.',
  },
  {
    slug: 'building-the-cyberdeck',
    title: 'Building a Cyberdeck from Scratch',
    created_at: '2026-06-15T09:30:00Z',
    summary: 'A deep dive into the mechanical and electrical design of my latest custom hardware project.',
  }
]

const getPosts = createServerFn({ method: 'GET' }).handler(async () => {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return MOCK_POSTS
    }
    const { data, error } = await supabase
      .from('posts')
      .select('slug, title, created_at, summary')
      .eq('published', true)
      .order('created_at', { ascending: false })
      
    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Error fetching posts:', err)
    return MOCK_POSTS // fallback for now
  }
})

export const Route = createFileRoute('/blog/')({
  loader: () => getPosts(),
  component: BlogIndex,
})

function BlogIndex() {
  const posts = Route.useLoaderData()

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="blue" className="mb-12">
        TRANSMISSIONS
      </DotMatrixText>

      <SectionLabel number="04" label="ENGINEERING LOGS" />
      
      <div className="flex flex-col gap-6 mt-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="no-underline group block">
            <Card className="group-hover:border-accent-blue transition-colors relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="pl-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: '2-digit'
                  })}
                </span>
                
                <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="prose-cyber mb-0 text-muted-foreground">
                  {post.summary}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

```

## File: src/routes/contact.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { CyberButton } from '../components/primitives/CyberButton'
import { Card } from '../components/primitives/Card'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="red" className="mb-12">
        CONTACT
      </DotMatrixText>

      <SectionLabel number="09" label="TRANSMISSION" />
      
      <div className="max-w-xl">
        <Card>
          <h2 className="font-display text-xl text-foreground mb-4">ESTABLISH CONNECTION</h2>
          <p className="prose-cyber mb-8">
            Looking for a collaborator on a hardware/software project? Want to discuss embedded systems, web architecture, or mechanical keyboards? Send a transmission.
          </p>
          
          <div className="flex flex-col gap-4">
            <CyberButton href="mailto:hello@example.com" variant="rust" className="w-fit">
              EMAIL // HELLO@EXAMPLE.COM
            </CyberButton>
            
            <CyberButton href="https://github.com" variant="blue" className="w-fit">
              GITHUB // OPEN_SOURCE
            </CyberButton>
            
            <CyberButton href="https://linkedin.com" variant="blue" className="w-fit">
              LINKEDIN // NETWORK
            </CyberButton>
          </div>
        </Card>
      </div>
    </div>
  )
}

```

## File: src/routes/index.tsx

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState, useEffect } from 'react'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { TerminalCursor } from '../components/primitives/TerminalCursor'
import { CyberButton } from '../components/primitives/CyberButton'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { Divider } from '../components/primitives/Divider'
import { Card } from '../components/primitives/Card'

export const Route = createFileRoute('/')(  {
  component: Index,
})

const TERMINAL_LINES = [
  { prefix: '>', text: ' INITIALIZING SYSTEM...' },
  { prefix: '>', text: ' LOADING MODULES...' },
  { prefix: '>', text: ' ESTABLISHING CONNECTION...' },
  { prefix: '>', text: ' ALL SYSTEMS NOMINAL.' },
  { prefix: '$', text: ' echo "HELLO, WORLD."' },
]

function Index() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [lines, setLines] = useState<string[]>([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) {
      setDone(true)
      return
    }

    const currentLine = TERMINAL_LINES[lineIndex]
    const fullLine = currentLine.prefix + currentLine.text

    if (charIndex < fullLine.length) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c + 1)
      }, 25 + Math.random() * 20)
      return () => clearTimeout(timeout)
    }

    // Line complete — pause then move to next
    const pauseTimeout = setTimeout(() => {
      setLines((prev) => [...prev, fullLine])
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, 200)
    return () => clearTimeout(pauseTimeout)
  }, [lineIndex, charIndex])

  const currentLine = lineIndex < TERMINAL_LINES.length
    ? (TERMINAL_LINES[lineIndex].prefix + TERMINAL_LINES[lineIndex].text).slice(0, charIndex)
    : ''

  return (
    <div>
      {/* ════════════ HERO ════════════ */}
      <section className="hero-section">
        {/* Accent tag above name */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="inline-block w-8 h-0.5 bg-accent-rust"
            style={{ boxShadow: '0 0 8px oklch(58% 0.16 42 / 0.4)' }}
          />
          <span className="font-mono text-xs text-accent-rust uppercase tracking-[0.2em]">
            Portfolio v1.0
          </span>
        </div>

        {/* Main name */}
        <div className="hero-title-wrapper">
          <DotMatrixText size="2xl" as="h1" glow="rust">
            HARSH
          </DotMatrixText>
        </div>

        {/* Subtitle with LED indicators */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-mono text-muted-foreground text-xs uppercase tracking-[0.18em] leading-relaxed">
            <span className="text-accent-rust">{'>'}</span> Hardware Engineer
            <span className="text-muted-foreground/40 mx-1.5">|</span>
            <span className="text-accent-blue">{'>'}</span> Software Developer
            <span className="text-muted-foreground/40 mx-1.5">|</span>
            <span className="text-accent-red">{'>'}</span> Maker
          </h2>
        </div>

        {/* Terminal block */}
        <div className="terminal-block">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot--red" />
            <span className="terminal-dot terminal-dot--yellow" />
            <span className="terminal-dot terminal-dot--green" />
            <span className="terminal-header-label">bash — system_init</span>
          </div>
          <div className="relative z-10">
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap">
                <span className="text-accent-rust opacity-70">{line[0]}</span>
                <span>{line.slice(1)}</span>
              </div>
            ))}
            {!done && (
              <div className="whitespace-pre-wrap">
                <span className="text-accent-rust opacity-70">{currentLine[0] || ''}</span>
                <span>{currentLine.slice(1)}</span>
                <TerminalCursor className="text-oled-green" />
              </div>
            )}
            {done && (
              <div className="mt-2 text-oled-cyan">
                <span className="text-accent-rust opacity-70">$</span> <TerminalCursor className="text-oled-cyan" />
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <CyberButton href="/projects" variant="rust">
            VIEW PROJECTS →
          </CyberButton>
          <CyberButton href="/blog" variant="blue">
            READ TRANSMISSIONS
          </CyberButton>
        </div>

        {/* Status chips */}
        <div className="status-row">
          <div className="status-chip">
            <span className="status-chip__dot status-chip__dot--online" />
            <span>Systems Online</span>
          </div>
          <div className="status-chip">
            <span className="status-chip__dot status-chip__dot--accent" />
            <span>Open to Collaborate</span>
          </div>
          <div className="status-chip">
            <span className="status-chip__dot" style={{ background: 'var(--color-accent-blue)', boxShadow: '0 0 6px oklch(52% 0.24 265 / 0.5)' }} />
            <span>Based in India</span>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════ ABOUT BRIEF ════════════ */}
      <section className="py-10">
        <SectionLabel number="01" label="STATUS" />
        <div className="max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-foreground">
            I build things that bridge the gap between <span className="text-accent-rust font-medium">bits</span> and <span className="text-accent-blue font-medium">atoms</span>.
            From embedded C firmware on bare metal to modern React web applications,
            I enjoy working across the entire stack.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to my personal databank — part portfolio, part engineering log.
            Explore my projects, read technical deep-dives, or get in touch for a collaboration.
          </p>
        </div>
      </section>

      <Divider />

      {/* ════════════ FEATURED PROJECTS ════════════ */}
      <section className="py-10">
        <SectionLabel number="02" label="FEATURED BUILDS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 stagger-fade-in">
          <Card className="group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-sm text-foreground group-hover:text-accent-rust transition-colors">
                CYBERDECK MK III
              </h3>
              <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5">
                2025
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Custom mechanical keyboard & display in a 3D-printed chassis. Raspberry Pi 5, custom embedded Linux.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Hardware', 'C++', 'Linux'].map((t) => (
                <span key={t} className="font-mono text-xs text-accent-rust/70 border border-accent-rust/20 px-1.5 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </Card>

          <Card className="group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-sm text-foreground group-hover:text-accent-blue transition-colors">
                NEURAL SYNTH ENGINE
              </h3>
              <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5">
                2025
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Polyphonic hardware synthesizer using neural network waveform generation on FPGA.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Verilog', 'DSP', 'FPGA'].map((t) => (
                <span key={t} className="font-mono text-xs text-accent-blue/70 border border-accent-blue/20 px-1.5 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6">
          <CyberButton href="/projects" variant="rust" className="!text-[10px]">
            ALL PROJECTS →
          </CyberButton>
        </div>
      </section>

      <Divider />

      {/* ════════════ QUICK LINKS / CAPABILITIES ════════════ */}
      <section className="py-10">
        <SectionLabel number="03" label="CAPABILITIES" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2 stagger-fade-in">
          {[
            { label: 'Embedded C/C++', icon: '[C]' },
            { label: 'PCB Design', icon: '[P]' },
            { label: 'FPGA / Verilog', icon: '[F]' },
            { label: 'React / TS', icon: '[R]' },
            { label: 'Systems Design', icon: '[S]' },
            { label: '3D Fabrication', icon: '[3D]' },
          ].map((s) => (
            <div
              key={s.label}
              className="
                flex items-center gap-3 px-4 py-3
                border border-foreground/10 bg-foreground/[0.02]
                hover:border-accent-rust/40 hover:bg-foreground/[0.04]
                transition-all duration-200 cursor-default group
              "
            >
              <span className="text-accent-rust/60 text-base group-hover:text-accent-rust transition-colors">{s.icon}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-foreground/80">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <CyberButton href="/skills" variant="blue" className="!text-[10px]">
            FULL SKILL MATRIX →
          </CyberButton>
          <CyberButton href="/contact" variant="rust" className="!text-[10px]">
            GET IN TOUCH
          </CyberButton>
        </div>
      </section>
    </div>
  )
}

```

## File: src/routes/projects.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { Card } from '../components/primitives/Card'
import { CyberButton } from '../components/primitives/CyberButton'
import { PROJECTS } from '../data/projects'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="blue" className="mb-12">
        PROJECTS
      </DotMatrixText>

      <SectionLabel number="03" label="HARDWARE & SOFTWARE" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {PROJECTS.map((p) => (
          <Card key={p.id} className="flex flex-col h-full">
            <div className="mb-4 flex justify-between items-start">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1">
                {p.date}
              </span>
            </div>
            
            <p className="prose-cyber flex-grow mb-6">
              {p.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-accent-rust border border-accent-rust/30 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {p.github && (
                <CyberButton href={p.github} variant="blue" className="!py-1.5 !px-3">
                  SRC
                </CyberButton>
              )}
              {p.demo && (
                <CyberButton href={p.demo} variant="rust" className="!py-1.5 !px-3">
                  DEMO
                </CyberButton>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

```

## File: src/routes/skills.tsx

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { SKILLS } from '../data/skills'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

function Skills() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="rust" className="mb-12">
        SKILLS
      </DotMatrixText>

      <SectionLabel number="02" label="TECHNICAL EXPERTISE" />

      <div className="space-y-12 mt-8">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="font-display text-lg text-accent-blue mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    font-mono text-sm px-4 py-2 
                    bg-foreground/5 border border-foreground/15
                    hover:border-accent-rust hover:text-accent-rust
                    transition-colors cursor-default
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

```

## File: src/routes/unlock.tsx

```tsx
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { loginAdmin } from '../lib/auth'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { Card } from '../components/primitives/Card'
import { CyberButton } from '../components/primitives/CyberButton'

export const Route = createFileRoute('/unlock')({
  component: Unlock,
})

function Unlock() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const loginFn = useServerFn(loginAdmin)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await loginFn(password)
      if (result.success) {
        // Redirect to admin
        navigate({ to: '/admin' })
      } else {
        setError(result.error || 'Access denied.')
      }
    } catch (err: any) {
      setError(err.message || 'System fault during authentication.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="animate-in fade-in duration-500 min-h-[70vh] flex flex-col justify-center max-w-md mx-auto">
      <DotMatrixText size="xl" as="h1" glow="rust" className="mb-8 text-center w-full">
        AUTH_GATE
      </DotMatrixText>

      <SectionLabel number="99" label="RESTRICTED AREA" className="justify-center" />

      <Card hover={false} className="mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="passcode" className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
              Enter Passcode
            </label>
            <input
              id="passcode"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                bg-background border border-foreground/20 px-4 py-3
                font-mono text-foreground focus:outline-none focus:border-accent-rust
                transition-colors
              "
              autoFocus
              disabled={loading}
            />
          </div>

          {error && (
            <div className="font-mono text-sm text-accent-red p-3 border border-accent-red/30 bg-accent-red/5">
              ERROR: {error}
            </div>
          )}

          <CyberButton type="submit" variant="rust" disabled={loading} className="justify-center mt-2">
            {loading ? 'VERIFYING...' : 'UNLOCK'}
          </CyberButton>
        </form>
      </Card>
    </div>
  )
}

```

## File: src/routes/__root.tsx

```tsx
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
  return getCookie('theme') || 'rust'
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
    <html lang="en" data-theme={theme} suppressHydrationWarning>
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

```

## File: src/routeTree.gen.ts

```ts
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as UnlockRouteImport } from './routes/unlock'
import { Route as SkillsRouteImport } from './routes/skills'
import { Route as ProjectsRouteImport } from './routes/projects'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as BlogIndexRouteImport } from './routes/blog/index'
import { Route as AdminIndexRouteImport } from './routes/admin/index'
import { Route as BlogSlugRouteImport } from './routes/blog/$slug'
import { Route as AdminWriteRouteImport } from './routes/admin/write'

const UnlockRoute = UnlockRouteImport.update({
  id: '/unlock',
  path: '/unlock',
  getParentRoute: () => rootRouteImport,
} as any)
const SkillsRoute = SkillsRouteImport.update({
  id: '/skills',
  path: '/skills',
  getParentRoute: () => rootRouteImport,
} as any)
const ProjectsRoute = ProjectsRouteImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminRoute = AdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const BlogIndexRoute = BlogIndexRouteImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminIndexRoute = AdminIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)
const BlogSlugRoute = BlogSlugRouteImport.update({
  id: '/blog/$slug',
  path: '/blog/$slug',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminWriteRoute = AdminWriteRouteImport.update({
  id: '/write',
  path: '/write',
  getParentRoute: () => AdminRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/contact': typeof ContactRoute
  '/projects': typeof ProjectsRoute
  '/skills': typeof SkillsRoute
  '/unlock': typeof UnlockRoute
  '/admin/write': typeof AdminWriteRoute
  '/blog/$slug': typeof BlogSlugRoute
  '/admin/': typeof AdminIndexRoute
  '/blog/': typeof BlogIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/projects': typeof ProjectsRoute
  '/skills': typeof SkillsRoute
  '/unlock': typeof UnlockRoute
  '/admin/write': typeof AdminWriteRoute
  '/blog/$slug': typeof BlogSlugRoute
  '/admin': typeof AdminIndexRoute
  '/blog': typeof BlogIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/admin': typeof AdminRouteWithChildren
  '/contact': typeof ContactRoute
  '/projects': typeof ProjectsRoute
  '/skills': typeof SkillsRoute
  '/unlock': typeof UnlockRoute
  '/admin/write': typeof AdminWriteRoute
  '/blog/$slug': typeof BlogSlugRoute
  '/admin/': typeof AdminIndexRoute
  '/blog/': typeof BlogIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/admin'
    | '/contact'
    | '/projects'
    | '/skills'
    | '/unlock'
    | '/admin/write'
    | '/blog/$slug'
    | '/admin/'
    | '/blog/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/contact'
    | '/projects'
    | '/skills'
    | '/unlock'
    | '/admin/write'
    | '/blog/$slug'
    | '/admin'
    | '/blog'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/admin'
    | '/contact'
    | '/projects'
    | '/skills'
    | '/unlock'
    | '/admin/write'
    | '/blog/$slug'
    | '/admin/'
    | '/blog/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  AdminRoute: typeof AdminRouteWithChildren
  ContactRoute: typeof ContactRoute
  ProjectsRoute: typeof ProjectsRoute
  SkillsRoute: typeof SkillsRoute
  UnlockRoute: typeof UnlockRoute
  BlogSlugRoute: typeof BlogSlugRoute
  BlogIndexRoute: typeof BlogIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/unlock': {
      id: '/unlock'
      path: '/unlock'
      fullPath: '/unlock'
      preLoaderRoute: typeof UnlockRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/skills': {
      id: '/skills'
      path: '/skills'
      fullPath: '/skills'
      preLoaderRoute: typeof SkillsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog/'
      preLoaderRoute: typeof BlogIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/': {
      id: '/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminIndexRouteImport
      parentRoute: typeof AdminRoute
    }
    '/blog/$slug': {
      id: '/blog/$slug'
      path: '/blog/$slug'
      fullPath: '/blog/$slug'
      preLoaderRoute: typeof BlogSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/write': {
      id: '/admin/write'
      path: '/write'
      fullPath: '/admin/write'
      preLoaderRoute: typeof AdminWriteRouteImport
      parentRoute: typeof AdminRoute
    }
  }
}

interface AdminRouteChildren {
  AdminWriteRoute: typeof AdminWriteRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminWriteRoute: AdminWriteRoute,
  AdminIndexRoute: AdminIndexRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  ContactRoute: ContactRoute,
  ProjectsRoute: ProjectsRoute,
  SkillsRoute: SkillsRoute,
  UnlockRoute: UnlockRoute,
  BlogSlugRoute: BlogSlugRoute,
  BlogIndexRoute: BlogIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}

```

## File: src/styles.css

```css
@import "tailwindcss";

/* ═══════════════════════════════════════════════════════
   CYBERPUNK BREADBOARD PORTFOLIO — DESIGN TOKENS
   ═══════════════════════════════════════════════════════ */

@theme {
  /* ─── Palette ─── */
  --color-background: oklch(96.5% 0.012 80);       /* warm off-white paper #f4efe6 */
  --color-foreground: oklch(18% 0.02 40);          /* deep ink #1a1512 */
  --color-muted: oklch(92% 0.008 80);              /* faded paper */
  --color-muted-foreground: oklch(55% 0.015 60);   /* muted text */

  --color-accent-rust: oklch(58% 0.16 42);         /* #c8461a rust orange */
  --color-accent-red: oklch(62% 0.24 27);          /* #e60000 bright red */
  --color-accent-blue: oklch(52% 0.24 265);        /* #1a5fff bright blue */

  --color-pcb-green: oklch(42% 0.12 155);          /* breadboard base */
  --color-copper: oklch(62% 0.10 60);              /* traces/pads */

  --color-oled-bg: oklch(12% 0.005 240);           /* OLED dark screen */
  --color-oled-cyan: oklch(78% 0.15 195);          /* OLED pixel cyan */
  --color-oled-green: oklch(72% 0.18 145);         /* OLED terminal green */

  /* ─── LED Glow Shadows ─── */
  --shadow-led-red: 0 0 8px 2px oklch(62% 0.24 27 / 0.6);
  --shadow-led-blue: 0 0 8px 2px oklch(52% 0.24 265 / 0.6);
  --shadow-led-rust: 0 0 8px 2px oklch(58% 0.16 42 / 0.6);
  --shadow-led-cyan: 0 0 8px 2px oklch(78% 0.15 195 / 0.6);

  /* ─── Typography ─── */
  --font-display: "Press Start 2P", monospace;     /* dot-matrix LED headings */
  --font-terminal: "Courier Prime", "Courier New", monospace; /* typewriter terminal */
  --font-mono: "Share Tech Mono", monospace;         /* small caps / meta labels */
  --font-body: "Inter", sans-serif;                  /* body prose */

  /* ─── Spacing / Layout ─── */
  --rail-width: 220px;
  --content-max-w: 720px;
  --mobile-bar-h: 40px;
}

/* ═══════════════════════════════════════════════════════
   BASE STYLES
   ═══════════════════════════════════════════════════════ */

* {
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
}

body {
  margin: 0;
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-body);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── Theme Variants (toggle switch easter egg) ─── */
[data-theme="blue"] {
  --color-accent-rust: oklch(52% 0.24 265);
  --shadow-led-rust: 0 0 8px 2px oklch(52% 0.24 265 / 0.6);
}

/* ═══════════════════════════════════════════════════════
   DOT-MATRIX & DISPLAY EFFECTS
   ═══════════════════════════════════════════════════════ */

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* ─── LED Glow Pulse ─── */
@keyframes pulse-glow {
  0%, 100% { filter: brightness(1) drop-shadow(0 0 4px currentColor); }
  50% { filter: brightness(1.3) drop-shadow(0 0 12px currentColor); }
}

/* ─── LED Blink (staggered) ─── */
@keyframes led-blink-slow {
  0%, 45%, 100% { opacity: 0.3; }
  50%, 95% { opacity: 1; }
}

/* ─── Electron Flow ─── */
@keyframes electron-flow {
  0% { transform: translateY(-20px); }
  100% { transform: translateY(calc(100vh + 20px)); }
}

/* ─── Current Trace ─── */
@keyframes trace-flow {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}

/* ─── Spin ─── */
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ─── OLED Frame Cycle ─── */
@keyframes oled-cycle {
  0%, 24% { opacity: 1; }
  25%, 100% { opacity: 0; }
}

/* ─── Button Press ─── */
@keyframes led-flash {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.5); }
}

/* ─── Gentle float ─── */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* ─── Fade in up ─── */
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ─── Typing cursor blink ─── */
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ─── Subtle shimmer for accents ─── */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ─── Glow pulse for borders ─── */
@keyframes border-glow {
  0%, 100% { border-color: oklch(58% 0.16 42 / 0.3); box-shadow: 0 0 0 0 oklch(58% 0.16 42 / 0); }
  50% { border-color: oklch(58% 0.16 42 / 0.7); box-shadow: 0 0 20px 0 oklch(58% 0.16 42 / 0.1); }
}


/* ═══════════════════════════════════════════════════════
   LAYOUT SHELL
   ═══════════════════════════════════════════════════════ */

.shell-grid {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
}

.shell-center {
  max-width: var(--content-max-w);
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
}

/* ─── Dashed Guidelines ─── */
.shell-guideline-left {
  border-left: 1px dashed oklch(55% 0.015 60 / 0.2);
}

.shell-guideline-right {
  border-right: 1px dashed oklch(55% 0.015 60 / 0.2);
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */

.hero-section {
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0 2rem;
}

/* ─── Hero title accent bar ─── */
.hero-title-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.hero-title-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  top: -12px;
  width: 48px;
  height: 3px;
  background: var(--color-accent-rust);
  box-shadow: var(--shadow-led-rust);
}

/* ─── Terminal block ─── */
.terminal-block {
  position: relative;
  background: var(--color-foreground);
  color: var(--color-oled-green);
  border: 1px solid oklch(30% 0.01 40);
  padding: 1.5rem 1.75rem;
  font-family: var(--font-terminal);
  font-size: 0.9375rem;
  line-height: 1.8;
  max-width: 540px;
  margin-bottom: 2.5rem;
  overflow: hidden;
}

.terminal-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--color-accent-rust) 0%,
    var(--color-accent-red) 40%,
    var(--color-accent-blue) 100%
  );
}

/* Scanline overlay for the terminal */
.terminal-block::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    oklch(0% 0 0 / 0.06) 2px,
    oklch(0% 0 0 / 0.06) 4px
  );
}

/* ─── Terminal header bar ─── */
.terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid oklch(30% 0.01 40);
}

.terminal-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.terminal-dot--red { background: oklch(62% 0.24 27); }
.terminal-dot--yellow { background: oklch(78% 0.18 95); }
.terminal-dot--green { background: oklch(72% 0.18 145); }

.terminal-header-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: oklch(50% 0.01 240);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-left: auto;
}

/* ─── Status indicators row ─── */
.status-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem 0;
  margin: 1rem 0 0.5rem;
  border-top: 1px dashed oklch(55% 0.015 60 / 0.15);
}

.status-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted-foreground);
}

.status-chip__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-chip__dot--online {
  background: var(--color-oled-green);
  box-shadow: 0 0 6px oklch(72% 0.18 145 / 0.6);
}

.status-chip__dot--accent {
  background: var(--color-accent-rust);
  box-shadow: 0 0 6px oklch(58% 0.16 42 / 0.5);
}


/* ═══════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════ */

@media (max-width: 1023px) {
  .hero-section {
    min-height: 65vh;
    padding-top: 1rem;
  }
}

/* ═══════════════════════════════════════════════════════
   REDUCED MOTION
   ═══════════════════════════════════════════════════════ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ═══════════════════════════════════════════════════════
   TYPOGRAPHY UTILITIES
   ═══════════════════════════════════════════════════════ */

.dot-matrix {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.terminal-text {
  font-family: var(--font-terminal);
  letter-spacing: 0.02em;
}

.mono-label {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
}

/* ═══════════════════════════════════════════════════════
   CARD & BUTTON SHARED
   ═══════════════════════════════════════════════════════ */

.card-brackets {
  position: relative;
}

.card-brackets::before,
.card-brackets::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--color-foreground);
  pointer-events: none;
  opacity: 0.25;
  transition: opacity 0.2s ease;
}

.card-brackets:hover::before,
.card-brackets:hover::after {
  opacity: 0.6;
}

.card-brackets::before {
  top: -1px;
  left: -1px;
  border-top: 2px solid;
  border-left: 2px solid;
}

.card-brackets::after {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

/* ─── Staggered fade-in for lists ─── */
.stagger-fade-in > * {
  opacity: 0;
  animation: fade-in-up 0.5s ease-out forwards;
}
.stagger-fade-in > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-fade-in > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-fade-in > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-fade-in > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-fade-in > *:nth-child(5) { animation-delay: 0.5s; }
.stagger-fade-in > *:nth-child(6) { animation-delay: 0.6s; }

/* ─── Prose (for blog markdown) ─── */
.prose-cyber {
  font-family: var(--font-body);
  line-height: 1.75;
  color: var(--color-foreground);
}

.prose-cyber h1,
.prose-cyber h2,
.prose-cyber h3,
.prose-cyber h4 {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-foreground);
  margin-top: 2em;
  margin-bottom: 0.75em;
}

.prose-cyber h1 { font-size: 1.75rem; }
.prose-cyber h2 { font-size: 1.375rem; }
.prose-cyber h3 { font-size: 1.125rem; }

.prose-cyber p {
  margin-bottom: 1.25em;
}

.prose-cyber a {
  color: var(--color-accent-rust);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose-cyber a:hover {
  color: var(--color-accent-blue);
}

.prose-cyber code {
  font-family: var(--font-mono);
  background: var(--color-muted);
  padding: 0.125em 0.375em;
  border-radius: 2px;
  font-size: 0.875em;
}

.prose-cyber pre {
  background: var(--color-foreground);
  color: var(--color-oled-green);
  padding: 1rem 1.25rem;
  overflow-x: auto;
  border: 1px solid var(--color-muted);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 1.5em 0;
}

.prose-cyber pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.prose-cyber blockquote {
  border-left: 3px solid var(--color-accent-rust);
  padding-left: 1rem;
  color: var(--color-muted-foreground);
  font-style: italic;
  margin: 1.5em 0;
}

.prose-cyber img,
.prose-cyber video {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--color-muted);
  margin: 1.5em 0;
}

.prose-cyber ul,
.prose-cyber ol {
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}

.prose-cyber li {
  margin-bottom: 0.375em;
}

.prose-cyber hr {
  border: none;
  border-top: 1px dashed var(--color-muted);
  margin: 2em 0;
}

.prose-cyber table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: 0.875rem;
}

.prose-cyber th,
.prose-cyber td {
  border: 1px solid var(--color-muted);
  padding: 0.5em 0.75em;
  text-align: left;
}

.prose-cyber th {
  font-family: var(--font-mono);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  background: var(--color-muted);
}

```

## File: tsconfig.json

```json
{
  "include": ["**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "paths": {
      "#/*": ["./src/*"],
      "@/*": ["./src/*"]
    },
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  }
}

```

## File: tsr.config.json

```json
{
  "target": "react"
}

```

## File: vercel.json

```json
{
  "headers": [
    {
      "source": "/blog/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=60, stale-while-revalidate=3600"
        }
      ]
    },
    {
      "source": "/api/public/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=3600, stale-while-revalidate=86400"
        }
      ]
    }
  ]
}

```

## File: vite.config.ts

```ts
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config

```

