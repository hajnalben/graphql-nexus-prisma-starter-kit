import gql from 'gql-tag'
import graphql from './utils/graphql'

const deleteAllUserQuery = gql`
  mutation {
    deleteManyUsers(where: {}) {
      count
    }
  }
`

const signupQuery = gql`
  mutation signup($name: String, $email: String, $password: String) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const loginQuery = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

describe('Authentication', () => {
  beforeAll(async (done) => {
    await graphql(deleteAllUserQuery)

    done()
  })

  const user = {
    name: 'Beni',
    email: 'beni@asd.com',
    password: 'qwe123'
  }

  test(`new user can signup`, async () => {
    const result = await graphql(signupQuery, user)

    expect(result.data).toHaveProperty('signup.token')
    expect(result.data).toHaveProperty('signup.user')
    expect(result.data).toHaveProperty('signup.user.id')
    expect(result.data).toHaveProperty('signup.user.name', user.name)
    expect(result.data).toHaveProperty('signup.user.email', user.email)
    expect(result.data).not.toHaveProperty('signup.user.password')
  })

  test(`new user cannot signup with existing email`, async () => {
    const otherUser = {
      name: 'Alfred',
      email: user.email,
      password: 'qwe123'
    }

    const result = await graphql(signupQuery, otherUser)

    expect(result).toHaveProperty('errors')
  })

  test(`user can login`, async () => {
    const result = await graphql(loginQuery, user)

    expect(result.data).toHaveProperty('login.token')
    expect(result.data).toHaveProperty('login.user')
    expect(result.data).toHaveProperty('login.user.id')
    expect(result.data).toHaveProperty('login.user.name', user.name)
    expect(result.data).toHaveProperty('login.user.email', user.email)
    expect(result.data).not.toHaveProperty('login.user.password')
  })
})
