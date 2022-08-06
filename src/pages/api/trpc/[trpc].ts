import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from 'server/router'
import { createContext } from 'server/router/context'
import { withSentry } from '@sentry/nextjs'

export const config = {
  api: {
    externalResolver: true,
  },
}

// export API handler
export default withSentry(
  createNextApiHandler({
    router: appRouter,
    createContext: createContext,
  })
)
