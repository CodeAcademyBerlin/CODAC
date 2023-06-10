/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  // schema: `${process.env.NEXT_PUBLIC_CODAC_SERVER_URL}/graphql`,
  schema: `https://codac-admin-dev.up.railway.app/graphql`,
  documents: "./**/*.graphql",
  generates: {
    "src/__generated__/schema.ts": {
      // plugins: ["typescript"],
      plugins: ["typescript", "typescript-operations"],
      config: {
        flattenGeneratedTypes: true,
      },
      // "src/global/__generated__": {
      //   preset: "near-operation-file",
      //   plugins: ["typescript-react-apollo", "typescript-operations"],
      //   presetConfig: {
      //     folder: "__generated__",
      //     baseTypesPath: "types.ts",
      //     extension: ".ts",
      //   },
      //   config: {
      //     reactApolloVersion: 3,
      //     withHooks: true,
      //     withHOC: false,
      //     withComponent: false,
      //     // hooks: { afterOneFileWrite: ['eslint --fix'] },
      //   },
    },
  },
};

// const config2: CodegenConfig = {
//   overwrite: true,
//   // schema: `https://codac-graphql-types.up.railway.app/graphql`,
//   schema: `https://codac-admin-dev.up.railway.app/graphql`,
//   documents: "./**/*.graphql",
//   generates: {
//     "src/global/__generated__/types.ts": {
//       plugins: [
//         "typescript",
//         "typescript-resolvers",
//         "typescript-operations",
//         // "typescript-react-apollo",
//       ],
//       config: {
//         reactApolloVersion: 3,
//         withHooks: true,
//         withHOC: false,
//         withComponent: false,
//         // hooks: { afterOneFileWrite: ['eslint --fix'] },
//       },
//     },
//   },
// };
export default config;
