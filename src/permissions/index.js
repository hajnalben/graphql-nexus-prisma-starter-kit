import { shield, not } from 'graphql-shield'
import { isAuthenticatedUser } from './rules'

export default shield({
  Query: {
    '*': isAuthenticatedUser
  },
  Mutation: {
    '*': isAuthenticatedUser,
    login: not(isAuthenticatedUser),
    signup: not(isAuthenticatedUser),
  },
  UserCreateInput: {
    '*': not(isAuthenticatedUser)
  }
})