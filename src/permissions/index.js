import { shield } from 'graphql-shield'
import deepmerge from 'deepmerge'

import { isAuthenticatedUser } from './rules'

import { permissions } from '../resolvers'

const basePermissions = {
  Query: {
    '*': isAuthenticatedUser
  },
  Mutation: {
    '*': isAuthenticatedUser
  },
}

const mergedPermissions = deepmerge.all([ basePermissions, ...permissions ], { clone: false })

export default shield(mergedPermissions)