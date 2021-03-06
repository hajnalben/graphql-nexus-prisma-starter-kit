import { prismaObjectType } from 'nexus-prisma'

export const User = prismaObjectType({
  name: 'User',
  definition: t => {
    // Forwarding prisma type fields
    t.prismaFields([
      'id',
      'createdAt',
      'updatedAt',
      'email',
      'name'
    ])
  }
})

export const UserConnection = prismaObjectType({
  name: 'UserConnection',
  definition (t) {
    t.prismaFields(['*'])

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve (root, args, ctx) {
        return ctx.prisma.usersConnection(args).aggregate()
      }
    })
  }
})
