import packageJson from './package.json' with { type: 'json' }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    APP_VERSION: packageJson.version,
  },
}

export default nextConfig
