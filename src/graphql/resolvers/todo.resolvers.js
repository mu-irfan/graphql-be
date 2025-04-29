const { getTodos, createTodo } = require("../../models/todo.model");

const todoResolvers = {
  Query: {
    todos: async () => {
      return await getTodos();
    },
  },

  Mutation: {
    createTodo: async (_, { title }) => {
      return await createTodo(title);
    },
  },
};

module.exports = todoResolvers;
