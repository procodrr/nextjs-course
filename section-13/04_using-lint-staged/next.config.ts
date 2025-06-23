import type { NextConfig } from 'next'

const folders = ['app', 'models', 'lib']
const files = [
  'auth.ts',
  'middleware.ts',
  'eslint.config.mjs',
  'next.config.ts',
]

const nextConfig: NextConfig = {
  eslint: {
    dirs: [...folders, ...files],
  },
}

export default nextConfig
