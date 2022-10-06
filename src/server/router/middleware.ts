import { rule } from 'trpc-shield'
import { getSession } from 'next-auth/react'

// Verify if user is already  authenticated
export const isAuthenticated = rule()(async ctx => {
	const session = await getSession(ctx)

	return session !== null
})
