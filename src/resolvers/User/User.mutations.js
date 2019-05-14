import { prismaExtendType } from 'nexus-prisma'

export const Mutation = prismaExtendType({
  name: 'Mutation',
  type: 'Mutation',
  definition: (t) => {
    // Forwarding prisma mutations
    t.prismaFields([
      'createUser',
      'updateUser',
      'deleteUser'
    ])

    // Here we can add more custom mutations
  }
})
