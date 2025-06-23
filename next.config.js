/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables `next export`
  images: {
    unoptimized: true, // Required if you're using the Next.js Image component
  },
  // add base path for gh-pages
  env: {
    BASE_PATH: "/webportfolio",
  },
};

module.exports = nextConfig;
