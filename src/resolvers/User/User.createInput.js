import { prismaInputObjectType } from 'nexus-prisma'

export const UserCreateInput = prismaInputObjectType({
  name: 'UserCreateInput',
  definition (t) {
    // Forwarding prisma type fields
    t.prismaFields([
      'id',
      'email',
      'name',
      'password'
    ])

    t.upload('profile')
  }
})
