import type { CodegenConfig } from "@graphql-codegen/cli";

import { loadEnvConfig } from "@next/env";
type HookFunction = () => void;

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  // schema: `https://codac-server-graphql.up.railway.app/graphql`,
  schema: `https://codac-admin-dev.up.railway.app/graphql`,
  documents: "./**/*.graphql",
  generates: {
    "src/global/__generated__/types.ts": {
      plugins: ["typescript"],
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
    // },
  },
};
export default config;
