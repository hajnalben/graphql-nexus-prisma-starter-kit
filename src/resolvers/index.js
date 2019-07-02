
// This empty definitions are needed to prevent prisma-nexus binding all queries and mutations
import Query from './Query'
import Mutation from './Mutation'
import * as scalars from './scalars'
import requireAll from '../util/requireAll'

const resolvers = requireAll(__dirname)

export default {
  scalars,
  Query,
  Mutation,
  ...resolvers
}
