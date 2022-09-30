import { withTRPC } from '@trpc/next'
import type { AppRouter } from 'server/router'
import type { CustomAppType } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { transformer } from 'utils/trpc'
import NextNProgress from 'nextjs-progressbar'
import 'styles/globals.css'

const MyApp: CustomAppType = ({
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
				<title>Loading Application...</title>
			</Head>

			<SessionProvider session={session} refetchOnWindowFocus={false}>
				<NextNProgress height={7} color="#5E8E5E" />
				<Component {...pageProps} />;
			</SessionProvider>
		</>
	)
}

const getBaseUrl = () => {
	if (typeof window !== 'undefined') return ''
	else if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

	return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
	config: () => {
		const url = `${getBaseUrl()}/api/trpc`

		return {
			url,
			transformer,
			queryClientConfig: {
				defaultOptions: {
					queries: { staleTime: 60 },
				},
			},
		}
	},
	ssr: false,
})(MyApp)
