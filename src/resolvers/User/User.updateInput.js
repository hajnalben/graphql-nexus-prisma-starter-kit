import { prismaInputObjectType } from 'nexus-prisma'

export const UserUpdateInput = prismaInputObjectType({
  name: 'UserUpdateInput',
  definition (t) {
    // Forwarding prisma type fields
    t.prismaFields([
      'email',
      'name',
    ])
  }
})
