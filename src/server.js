import { GraphQLServer } from 'graphql-yoga'

import permissions from './permissions'
import env from './env'
import schema from './schema'
import prisma from './prismaClient'

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start({
  port: env.PORT,
  tracing: true
}, () => console.log(`Server is running on http://localhost:${env.PORT}`))
