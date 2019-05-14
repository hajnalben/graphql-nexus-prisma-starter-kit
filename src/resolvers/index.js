// This empty definitions are needed to prevent prisma-nexus binding all queries and mutations
import Query from './Query'
import Mutation from './Mutation'

import * as User from './User'
import * as AuthPayload from './AuthPayload'
import UserPermissions from './User/User.permissions'
import AuthPayloadPermissions from './AuthPayload/AuthPayload.permissions'

export const resolvers = {
  Query,
  Mutation,
  User,
  AuthPayload
}

export const permissions = [ UserPermissions, AuthPayloadPermissions ]
