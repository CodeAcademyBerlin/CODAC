import { defineConfig, type Options } from "tsup";

// const env = process.env.NODE_ENV

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  bundle: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: [""],
  ...options,
}));
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
