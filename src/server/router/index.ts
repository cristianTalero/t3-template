import { createRouter } from './context'
import { exampleRouter } from './example'
import { transformer } from 'utils/trpc'

export const appRouter = createRouter()
	.transformer(transformer)
	.merge('example.', exampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
