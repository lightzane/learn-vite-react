# Learn Vite React

Discovering **Vite**...

Simply learning how to do `React` on `Vite`

Reference: https://vitejs.dev

**Vite** is a frontend tooling for development environment.

- Instant server start
- Lightning fast HMR (Hot Module Reload)
- Others (see: https://vitejs.dev)

## How this Project was created

Reference: https://vitejs.dev/guide/#scaffolding-your-first-vite-project

1. Scaffolding the project

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest learn-vite-react -- --template react-ts

# npm 6.x
npm create vite@latest learn-vite-react --template react-ts
```

2. `npm install`
3. `npm run dev`

## Update the Vite configuration (optional)

To enable static web application in a `file:///` protocol, then configure the following:

(see `vite.config.ts`)

```ts
// =========================================================================
//    Enable to run production build in `file:///` protocol
// =========================================================================
// * [Lz] 1. Base href to root
{
    base: '',
    build: {
    target: 'esnext',
    outDir: 'docs',
    // * [Lz] 2. Supply options to rollup to output in `umd`
    rollupOptions: {
        output: {
        format: 'umd',
        },
    },
    // * [Lz] 3. In docs/index.html - script.js, Remove -> type="module" crossorigin and change to "defer"
    },
}
```

Then in the generated `index.html` - update the `<script>` by removing the `type="module" origin` and replace it with `defer`

```diff
- <script type="module" crossorigin src="./assets/index-6c5d4688.js"></script>
+ <script defer src="./assets/index-6c5d4688.js"></script>
```
