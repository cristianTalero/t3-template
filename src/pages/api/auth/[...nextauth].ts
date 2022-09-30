import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { withSentry } from '@sentry/nextjs'
import { prisma } from 'server/db/client'

export const config = {
	api: {
		externalResolver: true,
	},
}

export default withSentry(
	NextAuth({
		adapter: PrismaAdapter(prisma),
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID as string,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			}),
		],
	})
)
