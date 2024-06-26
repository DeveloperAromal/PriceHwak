import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core'],
  },
  images: {
    domains: [
      'm.media-amazon.com',
      'rukminim2.flixcart.com',
    ]
  },
};

export default withPWA(nextConfig);
