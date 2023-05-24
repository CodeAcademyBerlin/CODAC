import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  // schema: `https://codac-server-graphql.up.railway.app/graphql`,
  schema: `https://codac-admin-dev.up.railway.app/graphql`,
  documents: "./**/*.graphql",
  generates: {
    //   "src/__generated__/op.ts": {
    //     preset: "import-types",
    //     plugins: ["typescript-operations"],
    //     presetConfig: {
    //       typesPath: "./schema",
    //       extension: ".ts",
    //     },
    //   },
    "src/__generated__/apollo.ts": {
      preset: "import-types",
      plugins: ["typescript-react-apollo"],
      presetConfig: {
        typesPath: "./schema",
        extension: ".ts",
      },
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

// pnpm add -D @graphql-codegen/near-operation-file-preset
// const configNearfile: CodegenConfig = {
//   overwrite: true,
//   // schema: `https://codac-server-graphql.up.railway.app/graphql`,
//   schema: `https://codac-admin-dev.up.railway.app/graphql`,
//   documents: "./**/*.graphql",
//   generates: {
//     "src/__generated__/op.ts": {
//       preset: "near-operation-file",
//       plugins: ["typescript-react-apollo", "typescript-operations"],
//       presetConfig: {
//         folder: "__generated__",
//         baseTypesPath: "schema/__generated__/types.ts",
//         extension: ".ts",
//       },
//       config: {
//         reactApolloVersion: 3,
//         withHooks: true,
//         withHOC: false,
//         withComponent: false,
//         // hooks: { afterOneFileWrite: ['eslint --fix'] },
//       }
//     },
//   },
// };

export default config;
