import { createRouter } from './context'
import { exampleRouter } from './example'
import { transformer } from 'utils/trpc'
import { allow, shield } from '@conte-ltd/trpc-shield'
import { TRPCError } from '@trpc/server'

// Middlewares
const permissions = shield(
	{
		// query : {
		//		'*': rule
		// },
		// mutation: {
		//		'*': rule
		// }
	},
	{
		fallbackError: new TRPCError({
			message: 'An unknown error ocurred!',
			code: 'INTERNAL_SERVER_ERROR',
		}),
		fallbackRule: allow,
	}
)

export const appRouter = createRouter()
	.transformer(transformer)
	.merge('example.', exampleRouter)
	.middleware(permissions)

// export type definition of API
export type AppRouter = typeof appRouter
