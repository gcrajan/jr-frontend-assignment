/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = 
{
nextConfig,
images: {
    remotePatterns: [
    {
        protocol: 'https',
        hostname: '**.co',
    },
    {
        protocol: 'https',
        hostname: '**.com',
    },
    
    ],
},
}
