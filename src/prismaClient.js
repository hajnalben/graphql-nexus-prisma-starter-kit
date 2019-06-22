import { Prisma } from '../generated/prisma-client'
import env from './env'

export default new Prisma({
  endpoint: env.PRISMA_ENDPOINT,
  debug: false
})
