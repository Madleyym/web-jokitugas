/** @type {import('next').NextConfig} */
const nextConfig = {
    // next/image remote config
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
            }
        ],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;