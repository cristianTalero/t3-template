// Middleware for protected pages (Requires authentication)

import { withAuth } from 'next-auth/middleware'

export default withAuth(
	function middleware(req) {
		console.log(req.nextauth.token)
	},
	{
		callbacks: {
			authorized: ({ token /* req */ }) => token?.role === 'admin',
		},
	}
)

// Protected routes
export const config = { matcher: ['/protected'] }
