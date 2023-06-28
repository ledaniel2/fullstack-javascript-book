const resolvers = {
  Query: {
    user: async (parent, args, context, info) => {
      console.log(`Resolving user query with args: ${JSON.stringify(args)}`);
      
      const user = await context.db.user.findUnique({ where: { id: args.id } });
      
      console.log(`Resolved user query: ${JSON.stringify(user)}`);
      
      return user;
    },
  },
};
