import { subscriptionField, arg } from 'nexus'

export const UserSubscription = subscriptionField('user', {
  type: 'UserSubscriptionPayload',
  args: {
    where: arg({
      type: 'UserSubscriptionWhereInput'
    })
  },
  subscribe: (root, args, ctx) => ctx.prisma.$subscribe.user(args.where),
  resolve: payload => payload
})
