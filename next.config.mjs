/** @type {import('next').NextConfig} */
const rewrites = [
  {
    source: `${process.env.NEXT_PUBLIC_API_BASE}/:path*`,
    destination: `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_BASE}/:path*`,
  },
];

const nextConfig = {
  rewrites: async () => rewrites,
};

export default nextConfig;
