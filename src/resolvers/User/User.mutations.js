import { prismaExtendType } from 'nexus-prisma'
import mail from '../../mail'

export const Mutation = prismaExtendType({
  name: 'Mutation',
  type: 'Mutation',
  definition: (t) => {
    // Forwarding prisma mutations
    t.prismaFields([
      'updateUser',
      'deleteUser',
      'deleteManyUsers'
    ])

    t.field('createUser', {
      ...t.prismaType.createUser,
      resolve: async (root, args, ctx) => {
        args.data.password = 'inactive'

        mail({
          to: args.data.email,
          subject: 'User activation'
        }, 'activateUser', {
          ...args.data
        })

        return t.prismaType.createUser.resolve(root, args, ctx)
      }
    })
  }
})
