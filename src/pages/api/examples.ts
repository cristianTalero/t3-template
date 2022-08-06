import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'server/db/client'
import { withSentry } from '@sentry/nextjs'

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.user.findMany()
  return res.status(200).json(examples)
}

export default withSentry(examples)
