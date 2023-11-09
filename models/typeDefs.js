import gql from "graphql-tag";

export const typeDefs = gql`
  type List {
    id: ID
    name: String
    surname: String
    email: String
    telephone: String
    birthday: String
  }

  type Users {
    lists: [List]
    cursor: String
    hasNextPage: Boolean
  }

  type Query {
    name(name: String): [List]
    surname(surname: String): [List]
    email(email: String): [List]
    telephone(telephone: String): [List]
    birthday(birthday: String): [List]
    users(cursor: String): Users
    lists: [List]
  }

  type Mutation {
    create(
      name: String
      surname: String
      email: String
      telephone: String
      birthday: String
    ): List

    delete(id: ID): ID

    edit(
      id: ID
      name: String
      surname: String
      email: String
      telephone: String
      birthday: String
    ): List
  }
`