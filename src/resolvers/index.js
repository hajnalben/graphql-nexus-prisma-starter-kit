import { Query } from './Query'
import { Mutation } from './Mutation'
// import { Subscription } from './Subscription'
import { AuthPayload } from './AuthPayload'
import { User } from './User'
import * as Input from './Input'

export const resolvers = {
  Query,
  // Subscription,
  AuthPayload,
  User,
  Mutation,
  ...Input
}