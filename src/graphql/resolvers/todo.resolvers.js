const { GraphQLError } = require("graphql");
const {
  getTodos,
  createTodo,
  toggleTodoCompleted,
  deleteTodo,
} = require("../../models/todo.model");

const todoResolvers = {
  Query: {
    todos: async () => {
      return await getTodos();
    },
  },

  Mutation: {
    createTodo: async (_, { title }) => {
      if (title.length < 2) {
        throw new GraphQLError("Enter atleast 2 characters", {
          extensions: {
            code: "BAD_USER_INPUT",
            http: { status: 400 },
            field: "title",
            message: "Title must be at least 2 characters long",
          },
        });
      }
      return await createTodo(title);
    },

    toggleTodoCompleted: async (_, { id }) => {
      return await toggleTodoCompleted(id);
    },

    deleteTodo: async (_, { id }) => {
      return await deleteTodo(id);
    },
  },
};

module.exports = todoResolvers;
