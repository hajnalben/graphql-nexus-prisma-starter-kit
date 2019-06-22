import { GraphQLServer } from 'graphql-yoga'

import permissions from './permissions'
import env from './env'
import schema from './schema'
import prisma from './prismaClient'
import initRestAPI from './restAPI'

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

if (env.REST_API_PREFIX) {
  initRestAPI(server.express)
}

server.start({
  port: env.PORT,
  tracing: env.GRAPHQL_TRACING
}, () => console.log(`Server is running on http://localhost:${env.PORT}`))
