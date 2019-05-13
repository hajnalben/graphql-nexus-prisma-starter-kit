import { prismaInputObjectType } from 'nexus-prisma'

export const UserCreateInput = prismaInputObjectType({
  name: 'UserCreateInput',
  definition (t) {
    t.prismaFields([ 'email', 'name' ])
  }
})
