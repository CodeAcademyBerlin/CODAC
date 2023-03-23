# CODAC Monorepo

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

Apps:

- `codac-ts-next-tailwind`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) dedicated to UI components develoment
- `codac-ts-next-lms`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) dedicated to making a standadole LMS interface
- `codac-ts-next-mui`: a [Next.js](https://nextjs.org/) app with [MUI v5](https://mui.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
Packages:
- `codac-administration`: a graphql types code generation app using codegen. It generates types and custom react hooks to query the CODAC administration backend
- `codac-ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/)
shared by both `codac-ts-next-tailwind` and `storybook` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tailwind-config`: Commonalized theme of Tailwind [Tailwind CSS](https://tailwindcss.com/)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building Types packages/codac-administration

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

- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Make your changes
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a pull request
