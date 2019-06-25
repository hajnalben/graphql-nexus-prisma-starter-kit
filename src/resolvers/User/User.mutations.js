import { prismaExtendType } from 'nexus-prisma'

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

    // Supporting file upload
    t.field('createUser', {
      ...t.prismaType.createUser,
      resolve: async (root, args, ctx) => {
        if (args.data.profile) {
          const { createReadStream, filename, mimetype, encoding } = await args.data.profile

          // do something with the uploaded file

          delete args.data.profile
        }

        return t.prismaType.createUser.resolve(root, args, ctx)
      }
    })

    // Here we can add more custom mutations
  }
})
