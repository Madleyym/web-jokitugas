/** @type {import('next').NextConfig} */
const nextConfig = {
    // next/image remote config
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            }
        ]
    }
};

export default nextConfig;
