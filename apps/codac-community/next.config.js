module.exports = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  transpilePackages: ["codac-ui", "codac-server-graphql"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};