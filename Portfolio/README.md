# Portfolio SE — Phase 1

Next.js App Router, React, TypeScript, CSS tokens and Server Components. No backend, external scripts, web fonts, animation or WebGL dependencies.

## Run

Node 22+ is required. On a network-enabled machine:

```sh
npm install
npx tsc --noEmit
npm run lint
npm run test
npm run build
npm start
# In another terminal:
npm run verify:routes
```

Commit the generated `package-lock.json` after a successful install; use `npm ci` thereafter. No lockfile is supplied because registry access was unavailable during authoring. Resolve versions and run `npm audit` before deployment; dependency security is not yet verified.

## Content

- Add a typed `Project` under `content/projects/`, then register it in `lib/content/projects.ts`. Work index, featured work and static route generation read the same registry.
- Put biography and an explicitly approved contact link in `content/about/index.ts`.
- Put confirmed internships, jobs, achievements, certifications and writing in `content/journey/index.ts` using `JourneyEntry`.
- SOC-IQ is an outline, not verified project documentation. Null metadata and `Evidence.state: 'pending'` are intentional. Replace with source-backed facts only.
- `ProjectMedia` reserves typed alt/caption metadata; media rendering is intentionally deferred until real assets are supplied.

## Foundation decisions

Native anchors and `<details>` keep navigation and disclosure usable without JavaScript. CSS supplies visible focus, system light/dark themes and reduced-motion behavior. The Intelligence Core is a conceptual DOM reading map, not a SOC-IQ runtime claim. A future client-only visualization should mount beside it and never replace it.

Node's built-in test runner plus `tsx` covers the pure registry and server rendering without a DOM simulator or an unnecessary Vitest dependency. Tests do not substitute for Next route/build verification. `verify:routes` checks a running Next server, including unknown-route HTTP 404 responses.

The project was created in an isolated folder because no source repository was mounted. No existing application, assets or Git history were modified. See `VALIDATION.md` for actual results and unresolved checks. Phase 2 has not started.
