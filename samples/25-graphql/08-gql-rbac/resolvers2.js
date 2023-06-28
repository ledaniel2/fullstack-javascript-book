const resolvers = {
  User: {
    email: (parent, args, context) => {
      if (!context.user || context.user.id !== parent.id) {
        return null;  // Don't reveal email
      }

      return parent.email;  // It's okay to reveal email
    },
  },
};
