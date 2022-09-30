import { withSentryConfig } from '@sentry/nextjs'
import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'
import { withSuperjson } from 'next-superjson'
import withTM from 'next-transpile-modules'
import withPlugins from 'next-compose-plugins'

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig() {
  return {
    reactStrictMode: true,
    swcMinify: true,
  }
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true
}

export default withSentryConfig(
  withPlugins([
    withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      disable: process.env.NODE_ENV !== 'production'
    }),
    withSuperjson(),
    withTM(['react-daisyui'])
  ], defineNextConfig()),
  sentryWebpackPluginOptions
)
