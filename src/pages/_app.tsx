import { withTRPC } from '@trpc/next'
import type { AppRouter } from 'server/router'
import type { AppType } from 'next/dist/shared/lib/utils'
import superjson from 'superjson'
import 'styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </>
  )
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`

    return {
      url,
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: { staleTime: 60 },
        },
      },
    }
  },
  ssr: false,
})(MyApp)
