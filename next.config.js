/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/webportfolio" : "";

const nextConfig = {
  output: "export", // Enables `next export`
  basePath: basePath, // Only set basePath in production for GitHub Pages
  images: {
    unoptimized: true, // Required if you're using the Next.js Image component
  },
  // add base path for gh-pages (only in production)
  env: {
    BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
