/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["i.ytimg.com"],
    },
};

module.exports = nextConfig;
