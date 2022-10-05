import { withSentryConfig } from '@sentry/nextjs'
import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'
import { withSuperjson } from 'next-superjson'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //assetPrefix: process.env.NODE_ENV === 'production' ? `https://cdn.${process.env.VERCEL_URL}` : undefined
}

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV !== 'production'
}

const sentryWebpackPluginOptions = {
  silent: true
}

export default withSentryConfig(
  withPWA(pwaConfig)(withSuperjson()(
    nextConfig
  )),
  sentryWebpackPluginOptions
)
