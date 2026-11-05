<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

Wanderlust is an early-stage travel landing page. The navbar wordmark is text-based "Wanderlust" (Poppins); ignore the misspelled legacy `public/images/Wanderlast*.png` assets. Routes live in `src/app`: `/` is the landing page and `/add-destination` is the "Add New Travel Package" admin form. The root layout wraps every route in `Navbar`/`Footer`; page components should not render them again. Submissions post to `src/app/api/travel-packages/route.ts`, which persists them to the git-ignored `data/travel-packages.json`. `README.md` is still the stock create-next-app text, so trust `package.json` and `next.config.ts` over it.

Do not remove the managed `nextjs-agent-rules` block above; `next dev` re-adds it. Keep it in commits.

## Commands

- `npm run dev` — dev server at http://localhost:3000, Turbopack by default. If a server is already running, its URL/PID are in `.next/dev/lock`.
- `npm run lint` — full ESLint (flat config). Single file: `npx eslint src/app/page.tsx` (add `--fix` to autofix).
- `npx tsc --noEmit` — typecheck. There is no `typecheck` script.
- `npm run build` — production build; also runs TypeScript.
- No tests, test runner, or CI are configured. Verify with `npm run lint`, `npx tsc --noEmit`, and `npm run build`.

## Stack and conventions

- Next.js 16.4.3 App Router, React 19.3, React Compiler enabled in `next.config.ts`. Read the version-matched docs in `node_modules/next/dist/docs/` before editing framework code; APIs differ from older Next.js.
- Next 16 specifics: `params`/`searchParams` are Promises, `PageProps<'/route'>` and `LayoutProps<'/'>` are global generated types (no import), Turbopack is the default for dev and build, `next lint` no longer exists, and `middleware` is replaced by `proxy`.
- Tailwind CSS v4 is CSS-first: there is no `tailwind.config.*`. Theme tokens live in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`); CSS is wired through the `turbopack.rules` entry in `next.config.ts` using `@tailwindcss/turbopack`.
- UI is shadcn's `base-nova` style built on Base UI (`@base-ui/react`), not Radix. `components.json` defines the `@/components`, `@/components/ui`, `@/lib/utils`, and `@/hooks` aliases. Add missing primitives with `npx shadcn add <name>`.
- Files under `src/components/ui/` are checked-in source, not generated at build time. Edit them directly and commit changes. They follow `cva` variants, `data-slot`/`data-variant` attributes, and Base UI composition.
- There is no `asChild`: use the `render` prop with `useRender` + `mergeProps` (see `bubble.tsx` and `attachment.tsx`). Keep `data-slot` attributes intact because classes target them via `has-data-[slot=...]`.
- Import class merging as `import { cn } from "cn"`; `src/lib/utils.ts` only re-exports it to satisfy the shadcn CLI.
- Add `"use client"` to interactive components (state, effects, event handlers, Base UI parts).
- Code highlighting uses shiki through `src/lib/highlighter.tsx` and `src/hooks/use-highlighted-code.ts`. Languages are lazily loaded from the explicit `languages` map; add new languages and aliases there rather than importing all of shiki.
- Landing-page images are in `public/images/`.

## Gotchas

- ESLint enables the newer React hooks rules; some vendored shadcn files trip `react-hooks/set-state-in-effect`, so `npm run lint` can fail on files you did not touch. Check `git diff` before "fixing" them.
- Use npm; `package-lock.json` is the only lockfile.
