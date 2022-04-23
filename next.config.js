/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
// const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  // reactStrictMode: true,
  // trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? '/yumemi-test-frontend/' : '',
  // assetPrefix: !debug ? "/yumemi-frontend-test/" : '',
}

module.exports = nextConfig
