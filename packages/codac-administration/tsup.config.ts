import { defineConfig, Options } from 'tsup'

// const env = process.env.NODE_ENV

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/__generated__/*.ts'],
  format: ['esm'],
  dts: true,
  minify: false,
  clean: true,
  external: ["react", "react-dom"],
  ...options,
}))
// import { defineConfig, Options } from "tsup";

// export default defineConfig((options: Options) => ({
//   treeshake: true,
//   splitting: true,
//   entry: ["src/**/*.tsx"],
//   format: ["esm"],
//   dts: true,
//   minify: true,
//   clean: true,
//   external: ["react", "react-dom"],
//   ...options,
// }));
