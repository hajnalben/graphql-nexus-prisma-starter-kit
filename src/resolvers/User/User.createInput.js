import { prismaInputObjectType } from 'nexus-prisma'

export const UserCreateInput = prismaInputObjectType({
  name: 'UserCreateInput',
  definition (t) {
    // Forwarding prisma type fields
    t.prismaFields([
      'email',
      'name'
    ])
  }
})

export const UserUpdateInput = prismaInputObjectType({
  name: 'UserUpdateInput',
  definition (t) {
    // Forwarding prisma type fields
    t.prismaFields([
      'email',
      'name'
    ])
  }
})
