import path from 'path'
import { makePrismaSchema } from 'nexus-prisma'
import datamodelInfo from '../generated/nexus-prisma'

import resolvers from './resolvers'
import prismaClient from './prismaClient'

const schema = makePrismaSchema({
  types: resolvers,

  prisma: {
    datamodelInfo,
    client: prismaClient
  },

  outputs: {
    schema: path.join(__dirname, '../generated/schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts')
  }
})

export default schema
