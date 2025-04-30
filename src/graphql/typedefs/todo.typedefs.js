const { gql } = require("graphql-tag");

const todoTypeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(title: String!): Todo
    toggleTodoCompleted(id: ID!): Todo
    deleteTodo(id: ID!): ID
  }
`;

module.exports = todoTypeDefs;
