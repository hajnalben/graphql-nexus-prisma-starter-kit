import { prismaExtendType } from 'nexus-prisma'


export const Mutation = prismaExtendType({
  name: 'Mutation',
  type: 'Mutation',
  definition: (t) => {
    // Forwarding prisma mutations
    t.prismaFields([ 'createUser', 'updateUser', 'deleteUser', 'deleteManyUsers' ])

    // Here we can add more custom mutations
  },
})