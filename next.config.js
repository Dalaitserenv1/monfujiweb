/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT: 'https://api-ap-northeast-1.hygraph.com/v2/cl8ii99h45vtm01ul0iqldvh5/master'
  }
}

module.exports = nextConfig
