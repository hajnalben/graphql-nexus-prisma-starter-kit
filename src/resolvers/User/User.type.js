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

    // React-admin ra-data-opencrud needs this additinal field to support file uploading
    // Field name must match UserCreateInput's upload scalar field name
    t.string('profile', {
      resolve () {
        return ''
      }
    })

    // Here you can add your custom fields to the User type
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
