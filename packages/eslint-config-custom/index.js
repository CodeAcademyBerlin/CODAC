// const { resolve } = require("node:path");

const level = "warn";
// const level = "error";

module.exports = {
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   tsconfigRootDir: resolve(__dirname, "../.."),
  //   project: [
  //     "./apps/codac-ts-next-lms/tsconfig.json",
  //     "./packages/codac-ui/tsconfig.json",
  //     "./packages/toxic-ui/tsconfig.json",
  //     "./packages/codac-graphql-types/tsconfig.json",
  //   ],
  //   sourceType: "module",
  //   ecmaVersion: 2020,
  // },
  // parserOptions: {
  //   babelOptions: {
  //     presets: [require.resolve("next/babel")],
  //   },
  //   project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
  //   tsconfigRootDir: resolve(__dirname, "../.."),
  // },
  // parserOptions: {
  //   ecmaVersion: "latest",
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     "jsx": true
  //   }
  // },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:storybook/recommended",
    "plugin:storybook/csf-strict",
    "next/core-web-vitals",
    "turbo",
    "prettier",
  ],
  plugins: ["simple-import-sort", "testing-library"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/consistent-type-exports": `${level}`,
    "@typescript-eslint/consistent-type-imports": [
      `${level}`,
      {
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/member-ordering": `${level}`,
    "@typescript-eslint/method-signature-style": `${level}`,
    "@typescript-eslint/naming-convention": [
      `${level}`,
      {
        selector: ["interface", "typeAlias"],
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "@typescript-eslint/no-confusing-void-expression": `${level}`,
    "@typescript-eslint/no-duplicate-type-constituents": `${level}`,
    "@typescript-eslint/no-import-type-side-effects": `${level}`,
    "@typescript-eslint/no-redundant-type-constituents": `${level}`,
    "@typescript-eslint/no-unnecessary-qualifier": `${level}`,
    "@typescript-eslint/no-unused-vars": [
      `${level}`,
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-useless-empty-export": `${level}`,
    "@typescript-eslint/promise-function-async": `${level}`,
    "@typescript-eslint/strict-boolean-expressions": `${level}`,
    "@typescript-eslint/switch-exhaustiveness-check": `${level}`,
    "simple-import-sort/imports": `${level}`,
    "simple-import-sort/exports": `${level}`,
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
};
