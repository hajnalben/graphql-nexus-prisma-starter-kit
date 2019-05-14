import { graphql } from 'graphql'

import schema from '../../src/schema'
import prismaClient from '../../src/prismaClient'

const context = {
  prisma: prismaClient
}

export default (query, variables) => {
  return graphql(schema, query, null, context, variables)
}
