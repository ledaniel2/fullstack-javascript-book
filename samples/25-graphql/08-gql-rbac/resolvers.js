const resolvers = {
  Query: {
    users: (parent, args, context) => {
      if (!context.user || context.user.role !== 'ADMIN') {
        throw new Error('Unauthorized');
      }

      // fetch and return users
    },
  },
};
