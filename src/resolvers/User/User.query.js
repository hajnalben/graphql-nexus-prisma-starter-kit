import { prismaExtendType } from 'nexus-prisma'

export const Query = prismaExtendType({
  name: 'Query',
  type: 'Query',
  definition: t => {
    // Forwarding prisma queries
    t.prismaFields([
      'user',
      'users',
    ])

    // Here you can add your custom fields to the User query
  }
})
