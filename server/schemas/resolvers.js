const { AuthenticationError, signToken } = require("../utils/auth");

const { User } = require("../models");

module.exports = {
  Query: {
    getAllUsers: async () => {
      return await User.find({});
    },
    getUser: async (_, args) => {
      return await User.findById(args.userId);
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};
