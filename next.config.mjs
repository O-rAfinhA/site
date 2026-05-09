/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/login", destination: "/sign-in", permanent: true },
      { source: "/cadastro", destination: "/sign-up", permanent: true },
    ];
  },
};

export default nextConfig;
