import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { makePrismaSchema } from 'nexus-prisma'

import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'

import { resolvers } from './resolvers'
import permissions from './permissions'
import env from './env'

const schema = makePrismaSchema({
  types: resolvers,

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  }
})

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
