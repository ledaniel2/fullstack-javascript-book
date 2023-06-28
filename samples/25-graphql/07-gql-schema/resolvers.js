const resolvers = {
  Query: {
    allUsers: async (_, __, context) => {
      return context.prisma.user.findMany();
    },
    allPosts: async (_, __, context) => {
      return context.prisma.post.findMany();
    },
  },
  User: {
    posts: async (parent, _, context) => {
      return context.prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .posts();
    },
  },
  Post: {
    author: async (parent, _, context) => {
      return context.prisma.post
        .findUnique({
          where: { id: parent.id },
        })
        .author();
    },
  },
};
