import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use((req, res, next) => {
  const token = req.headers.authorization;
  try {
    req.user = jwt.verify(token, 'secret-key');
  } catch (e) {
    req.user = null;
  }
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: req.user })
});

server.applyMiddleware({ app });

app.listen(4000);
