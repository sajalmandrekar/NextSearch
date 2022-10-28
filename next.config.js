/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "buildnew",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["i.ytimg.com"],
    },
};

module.exports = nextConfig;
