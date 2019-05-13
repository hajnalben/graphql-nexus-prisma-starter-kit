import { prismaExtendType } from 'nexus-prisma'

export const Query = prismaExtendType({
  name: 'Query',
  type: 'Query',
  definition: (t) => {
    t.prismaFields([ 'user', 'users' ])
  }
})