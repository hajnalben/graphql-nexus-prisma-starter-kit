import { rule } from 'graphql-shield'
import { verify } from 'jsonwebtoken'
import env from '../env'

function getUserId (context) {
  const Authorization = context.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')

    const verifiedToken = verify(token, env.APP_SECRET)

    return verifiedToken && verifiedToken.userId
  }
}

export const isAuthenticatedUser = rule()((parent, args, context) => {
  const userId = getUserId(context)
  return Boolean(userId)
})
