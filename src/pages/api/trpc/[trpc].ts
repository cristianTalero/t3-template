import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from 'server/router'
import { createContext } from 'server/router/context'
import { withSentry } from '@sentry/nextjs'

const TRPC_MAX_SIZE = Number(process.env.NEXT_PUBLIC_TRPC_MAX_SIZE) / 1_000_000

export const config = {
	api: {
		externalResolver: true,
		bodyParser: {
			sizeLimit: `${TRPC_MAX_SIZE}mb`,
		},
	},
}

// export API handler
export default withSentry(
	createNextApiHandler({
		router: appRouter,
		createContext,
	})
)
