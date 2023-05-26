const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: !!process.env.ANALYZE,
});

module.exports = ({ basePath }) => {
  /** @type {import('next').NextConfig} */
  const config = {
    // basePath,
    images: { unoptimized: true },
    reactStrictMode: true,
    transpilePackages: ["codac-ui", "codac-server-graphql", "toxic-ui"],


  };

  return withBundleAnalyzer(config);
};
