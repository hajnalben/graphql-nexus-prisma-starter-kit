import { shield } from 'graphql-shield'
import deepmerge from 'deepmerge'

import { isAuthenticatedUser } from './rules'
import requireAll from '../util/requireAll'

const permissions = requireAll(__dirname)

const basePermissions = {
  Query: {
    '*': isAuthenticatedUser
  },
  Mutation: {
    '*': isAuthenticatedUser
  }
}

const mergedPermissions = deepmerge.all([
  basePermissions,
  ...permissions.reduce((acc, curr) => acc.concat(Object.values(curr)), [])
], { clone: false })

export default shield(mergedPermissions)
