const { makeExecutableSchema } = require("@graphql-tools/schema");
const todoTypeDefs = require("./typedefs/todo.typedefs");
const todoResolvers = require("./resolvers/todo.resolvers");

const schema = makeExecutableSchema({
  typeDefs: [todoTypeDefs],
  resolvers: [todoResolvers],
});

module.exports = {
  schema,
};
