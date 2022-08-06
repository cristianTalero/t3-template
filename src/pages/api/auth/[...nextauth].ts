import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { withSentry } from '@sentry/nextjs'

const prisma = new PrismaClient()

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
