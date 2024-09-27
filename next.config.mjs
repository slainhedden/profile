/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove `output: 'export'` since Vercel will handle the server-side rendering and deployment for you.
  // Also, `distDir` and `images.unoptimized` are not required unless you have specific needs.
  // Use the default settings Vercel recommends.

  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification for smaller builds
};

export default nextConfig;

