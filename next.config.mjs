/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  // These server-only vars are not available at Lambda runtime in Amplify standalone mode.
  // The env config causes webpack to inline them as literals in the server bundle at build time.
  env: {
    SMTP_USER: process.env.SMTP_USER ?? '',
    SMTP_PASS: process.env.SMTP_PASS ?? '',
    ASAAS_API_KEY: process.env.ASAAS_API_KEY ?? '',
    ASAAS_BASE_URL: process.env.ASAAS_BASE_URL ?? 'https://api.asaas.com/v3',
    ASAAS_WEBHOOK_TOKEN: process.env.ASAAS_WEBHOOK_TOKEN ?? '',
  },
  async redirects() {
    return [
      { source: "/login", destination: "/sign-in", permanent: true },
      { source: "/cadastro", destination: "/sign-up", permanent: true },
    ];
  },
};

export default nextConfig;
