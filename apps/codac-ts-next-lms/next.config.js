module.exports = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  transpilePackages: ["codac-ui", "codac-server-graphql", "toxic-ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};