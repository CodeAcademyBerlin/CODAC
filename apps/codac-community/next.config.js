module.exports = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  transpilePackages: ["codac-ui", "codac-graphql-types"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
