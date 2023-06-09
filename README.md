# CODAC Monorepo

## Technologies

- 📏 [TypeScript 5.0](https://www.typescriptlang.org/)
- ⚡️ [Next.js 13.2](https://nextjs.org/)
- ⚛️ [React 18.2](https://reactjs.org/)
- 🌬️ [Tailwind CSS 3.3](https://tailwindcss.com/)
- 📕 [Storybook 7.0](https://storybook.js.org/)
- 🧪 [Testing Library](https://testing-library.com/)
- 🃏 [Jest](https://jestjs.io/)
- 🎭 [Playwright](https://playwright.dev/)
- 🧹 [ESLint](https://eslint.org/)
- 🤖 [CommitLint](https://commitlint.js.org/)
- 💖 [Prettier](https://prettier.io/)
- 📦 [pnpm](https://pnpm.io/)
- 🏎️ [Turborepo](https://turbo.build/repo)
- 👷 [Github Actions](https://github.com/features/actions)

## What's inside?

This monorepo includes the following packages/apps:

### Apps

- `codac-community`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) dedicated to for the Code Academy Berlin community

- `codac-lms`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) dedicated to making a standadone LMS

### Packages

- `codac-server-graphql`: a graphql types code generation app using codegen. It generates types and custom react hooks to query the CODAC administration server

- `codac-ui`: official design system of React/Next components done with [Tailwind CSS](https://tailwindcss.com/) and [Storybook](https://storybook.js.org/)

- `eslint-config-custom`: shared `eslint` configuration

- `jest-config`: shared `jest` configuration

- `tailwind-config`: shared `tailwind` configuration with custom theme

- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Building Types packages/codac-server-graphql

This page generates the types and custom Apollo GraphQl hooks from a Strapi backend
[Strapi Admin](https://codac-admin-dev.up.railway.app/admin)
[GraphQl Playground](https://codac-admin-dev.up.railway.app/admin/graphql)

### Building packages/codac-ui

This example is setup to build `packages/codac-ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Contributing

- Fork the project on Github
- Clone the project : `git clone https://github.com/CodeAcademyBerlin/CODAC.git`
- Go to the project directory : `cd CODAC`
- Install dependencies : `pnpm install`
- Build the project : `pnpm build`
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Make your changes
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a pull request
