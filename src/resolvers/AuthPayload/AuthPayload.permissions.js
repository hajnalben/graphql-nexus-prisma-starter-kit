import { isAuthenticatedUser } from '../../permissions/rules'
import { not } from 'graphql-shield'

export default {
  Query: {
  },
  Mutation: {
    login: not(isAuthenticatedUser),
    signup: not(isAuthenticatedUser)
  }
}
