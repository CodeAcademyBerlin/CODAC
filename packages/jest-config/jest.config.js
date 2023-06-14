import nextJest from "next/jest";

/** @type {import('jest').Config} */
const config = {
  coverageReporters: ["text", "html"],
  setupFilesAfterEnv: ["jest-config/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  }
};

const defineConfig = nextJest({ dir: "./" });
export default defineConfig(config);
