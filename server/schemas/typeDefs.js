const { gql } = require('graphql-tag');

module.exports = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllUsers: [User]
    getUser(userId: ID): User
  }

  type Mutation {
    createUser(username: String, email: String, password: String): Auth
    login(username: String!, password: String!): Auth
  }
`;
