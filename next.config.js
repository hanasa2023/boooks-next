/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boooks.oss-cn-shanghai.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
