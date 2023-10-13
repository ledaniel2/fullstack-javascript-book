# Chapter 25: Building Web Applications with GraphQL

## Introduction to GraphQL and its Advantages

### What is GraphQL? A Brief History

GraphQL, short for Graph Query Language, is a data query and manipulation language for APIs. Developed internally by Facebook in 2012, it was released to the public in 2015. Facebook developed GraphQL as a better alternative to the traditional REST API architecture to handle their increasingly complex data needs.

The essence of GraphQL lies in its name&nbsp;&mdash;&nbsp;"Graph"&nbsp;&mdash;&nbsp;signifying how it views the data: instead of as isolated resources, it sees them as a graph interconnected with different nodes. This property allows clients to request exactly what they need, making it a powerful tool for building APIs.

```javascript
const gqlQuery = `
  {
    user(id: 4) {
      name
      email
      friends {
        name
      }
    }
  }
`
```

In the above GraphQL query, we ask for a user's name, email, and their friends' names all in one request. This kind of flexibility is rarely seen in traditional REST APIs.

### Comparing GraphQL with REST

One of the most striking differences between REST and GraphQL is how they handle data fetching. REST APIs usually require loading from multiple URLs while GraphQL APIs get all the data your app needs in a single request.

With REST, for each resource, there's a URL you fetch from. If you have multiple resources and relationships between them, you might end up sending several HTTP requests to fetch all the data needed. This is known as over-fetching and under-fetching of data, a problem that GraphQL aims to solve.

GraphQL, on the other hand, has a powerful querying syntax that allows clients to specify exactly what data they need. This reduces the amount of data that needs to be transferred over the network and solves the over-fetching and under-fetching problem.

### Advantages of GraphQL

Utilizing GraphQL delivers a number of advantages:

1. **Efficient Data Loading**: With GraphQL, you can fetch all the required data in a single request. This can reduce the load on your server and significantly improve the performance of your web applications.

2. **Type Safety**: GraphQL schemas are strongly typed. This means each level of the request is checked at runtime to ensure it adheres to the predefined schema, making your API more reliable.

3. **Developer Experience**: Developers can use the schema to easily understand the API and know what data to expect. The strongly-typed schema and the GraphQL query language also enable excellent developer tooling, like auto-completing queries in IDEs.

### Understanding the Structure of a GraphQL API

The GraphQL API can be used in a number of different ways:

1. **Queries**: In GraphQL, queries are used to fetch data. They're the equivalent of GET requests in REST APIs. Queries in GraphQL are readable and straightforward, making it easier to understand what data the client is requesting. Here is an example:

```graphql
query {
  user(id: 4) {
    name
    email
  }
}
```

2. **Mutations**: Mutations are used to change data. They're the equivalent of POST, PUT, and DELETE requests in REST APIs. Just like queries, mutations in GraphQL are clear, indicating precisely what data is being changed and how. Here is an example:

```graphql
mutation {
  addUser(name: "New User", email: "newuser@example.com") {
    id
    name
  }
}
```

3. **Subscriptions**: Subscriptions are a GraphQL feature that allows the server to send data to its clients when a specific event happens. This is perfect for real-time applications. Here is an example subscription request:

```graphql
subscription {
  userAdded {
    id
    name
    email
  }
}
```

### Use Cases for GraphQL

While GraphQL can be beneficial in many scenarios, here are a few specific use cases where it truly shines:

1. **Complex Systems**/**Microservices**: GraphQL can serve as the unified interface across multiple systems, making data fetching simpler and more efficient.
2. **Real-time Data**: With subscriptions, GraphQL makes real-time data handling much more straightforward than traditional REST APIs.
3. **Mobile Applications**: Since mobile networks can be slow, reducing the amount of data transferred over the network can significantly improve performance. GraphQL's ability to fetch exactly what's needed makes it a good fit for mobile applications.
4. **APIs with Changing Requirements**: If you're developing an application and the data requirements keep changing, GraphQL’s flexibility can be a great advantage.

## Getting Started with GraphQL

### GraphQL Syntax and Operation Types

GraphQL queries look very similar to JSON objects without the values. This makes them quite readable and easy to work with. As we have already discovered, GraphQL operations are mainly categorized into queries, mutations, and subscriptions.

Here's a simple GraphQL query that fetches a user's name and email and is labeled as an operation called `getUserData`:

```graphql
query getUserData {
  user {
    name
    email
  }
}
```

### Setting Up a GraphQL Development Environment

To begin, we need to set up a new Node.js project and install the necessary GraphQL packages.

First, initialize a new Node.js project:

```bash
$ mkdir graphql-server && cd graphql-server
$ npm init -y
```

Then, install the necessary packages:

```bash
npm install graphql express-graphql
```

This installs GraphQL.js, which is a general-purpose library for building GraphQL APIs in JavaScript, as well as the express-graphql library, which will help us mount a GraphQL API server on the Express server.

### Implementing and Testing a Simple GraphQL API

With the environment ready, let's build a simple GraphQL API. First, create a new file `server.js` and import the necessary modules:

```javascript
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
```

Next, define your schema:

```javascript
const schema = buildSchema(`
  type Query {
    message: String
  }
`);
```

This schema simply says that we have a Query type with a message field that returns a String.

Now, you'll need to define a root resolver to provide a resolver function for your message field:

```javascript
const root = {
  message: () => 'Hello World!'
};
```

Finally, set up your Express server and use graphqlHTTP to create a GraphQL endpoint at `/graphql`:

```javascript
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Running a GraphQL API server at http://localhost:4000/graphql'));
```

This GraphQL server setup allows for HTTP requests to be handled at the `/graphql` endpoint, with GraphiQL enabled for interactive exploration of your API. Run the server with `node server.js`.

To test the API, navigate to `http://localhost:4000/graphql` in your browser and you'll see the GraphiQL interface. Enter the following query:

```graphql
{
  message
}
```

Press the play button, and you should see the server respond with:

```json
{
  "data": {
    "message": "Hello World!"
  }
}
```

This basic setup of a GraphQL server lays the foundation for creating more complex schemas and resolvers as your application requirements expand.

## Creating GraphQL APIs with Apollo Server and Prisma

### Setting Up Apollo Server: Installation and Basic Configuration

To get started with Apollo Server, we first need to install the required packages:

```bash
npm install apollo-server
```

Let's define a basic Apollo Server:

```javascript
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello, world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

Here, `typeDefs` defines our schema, and `resolvers` is an object that maps the schema fields to functions to provide data. It is possible to navigate to the online portal and enter the same query as previously.

### Introduction to Prisma: Modern Database Access for TypeScript & Node.js

Prisma is an open-source database toolkit that makes working with databases easy for developers. It provides an auto-generated and type-safe query builder that's tailored to your database schema, enabling you to interact with your database in a much more intuitive way.

To get started with Prisma, first install it as a development dependency:

```bash
npm install prisma --save-dev
```

Next, initialize Prisma in your project:

```bash
npx prisma init
```

This command creates a new prisma directory in your project root, containing a `schema.prisma` file. This file defines your database schema and the models you'll use to interact with your database.

### Building a Simple GraphQL Schema with Apollo Server

Let's create a simple GraphQL schema for a blog. This blog has users and posts. Each user can have multiple posts:

```javascript
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String
    author: User!
  }

  type User {
    email: String!
    name: String
    posts: [Post!]
  }

  type Query {
    allUsers: [User!]
    allPosts: [Post!]
  }
`;
```

In the schema above, we have two types User and Post. A User can have multiple Posts, and each Post has an author of type User.

### Connecting Your Apollo Server to a Database with Prisma

With Prisma, connecting your Apollo Server to a database is straightforward. After initializing Prisma and defining your models in `schema.prisma`, you can generate Prisma Client:

```bash
npx prisma generate
```

Now, you can use Prisma Client in your Apollo Server setup:

```javascript
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

Here, we have passed an instance of PrismaClient into Apollo Server's context. The context is an object that gets passed to every resolver that executes for a particular operation. This allows resolvers to share helpful context, like database access.

### Resolving Queries with Resolvers and Connectors

In Apollo Server, resolvers provide the instructions for turning a GraphQL operation into data. They resolve the query to data by defining resolver functions.

Now, let's define the resolvers for our allUsers and allPosts queries:

```javascript
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
```

Here, the allUsers and allPosts resolvers fetch data from the database using Prisma Client. The `User.posts` and `Post.author` resolvers fetch the relational data.

## Advanced Schema Design

### Arguments and Input Types

In GraphQL, you can pass arguments to fields to create more complex queries. These arguments can be scalar types (String, Int, Boolean, etc.) or custom input types.

Let's say we want to fetch a single user by their ID. Here's how we would define this in our schema:

```graphql
type Query {
  userById(id: ID!): User
}
```

We've added an id argument to our userById field, which is of type ID and is required (`!`).

For complex arguments, we use input types. Consider adding a mutation to create a post, which requires multiple input fields:

```graphql
input CreatePostInput {
  title: String!
  content: String!
  authorEmail: String!
}

type Mutation {
  createPost(input: CreatePostInput!): Post
}
```

Here, CreatePostInput is an input type, which represents the input argument for our createPost mutation.

### Enumerations and Custom Scalars

Enumerations (enums) are a special type of scalar that is restricted to a particular set of allowed values:

```graphql
enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

type Post {
  status: PostStatus!
}
```

A custom scalar represents a scalar type that can't be represented by the default scalar types in GraphQL (Int, Float, String, Boolean, and ID). For instance, to add a Date scalar:

```graphql
scalar Date

type Post {
  createdAt: Date!
}
```

### Interfaces and Union Types

Interfaces are abstract types that can't be used as field types directly but used as foundations for explicit types.

```graphql
interface Notification {
  id: ID!
  createdAt: String!
}

type CommentNotification implements Notification {
  id: ID!
  createdAt: String!
  message: String!
  postId: ID!
}

type LikeNotification implements Notification {
  id: ID!
  createdAt: String!
  username: String!
}

type Query {
  notifications: [Notification!]
}
```

Union types are similar to interfaces but don't have any common fields amongst the types.

```graphql
union SearchResult = Post | User

type Query {
  search(term: String!): [SearchResult]
}
```

### Implementing Server-Side Directives

Directives provide a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

```graphql
directive @auth(requires: Role = USER) on OBJECT | FIELD_DEFINITION

enum Role {
  ADMIN
  REVIEWER
  USER
  UNKNOWN
}

type User @auth(requires: ADMIN) {
  id: ID!
  name: String!
  email: String!
}
```

In the above example, we've defined an @auth directive that takes a Role argument. We've applied this directive to our User type, specifying that it requires ADMIN permissions.

With advanced schema design concepts like these, you can create robust, flexible, and secure GraphQL APIs.

## Managing Complex Data Queries and Mutations

### GraphQL Queries: Fields, Arguments, Aliases, Fragments, and Variables

In GraphQL, the structure of your query closely matches the result. You can ask for exactly what you need, and nothing more. This makes it easier to reason about your API calls and improves performance.

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

Here, we're asking for a user's name and email. You can give fields arguments:

```graphql
{
  user(id: 1) {
    posts(titleContains: "Hello") {
      title
      content
    }
  }
}
```

In this example, we are querying for a user's posts containing the word "Hello" in their title.

If you have a complex schema with multiple fields needing to use the same set of sub-fields, you can use fragments to keep your code DRY:

```graphql
fragment userData on User {
  name
  email
}

query {
  user(id: 1) {
    ...userData
  }
}
```

### Understanding and Implementing GraphQL Mutations

Mutations allow you to modify data. They are defined in the schema and use resolvers, like queries. The main difference is that mutations are for writing data, while queries are for reading it. Here's an example of a mutation:

```graphql
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}
```

This mutation creates a new user with the name "John Doe" and email "john@example.com", then returns the new user's id, name, and email.

### Managing Errors and Nullability in GraphQL

In GraphQL, you can specify whether a field can return null:

```graphql
type User {
  name: String!
  email: String!
}
```

Here, the name and email fields are non-nullable (`!`), meaning the server promises to always provide non-null values for them. If the promise is not fulfilled, the server will return an error.

When handling errors, GraphQL doesn't have a specific way to do so. Instead, errors propagate from the resolver that threw them up to the nearest nullable field where they are replaced with null:

```graphql
query {
  user {
    email
    posts {
      title
    }
  }
}
```

If fetching posts throws an error, `user.posts` will return null and an errors array will be added to the response:

```json
{
  "data": {
    "user": {
      "email": "john@example.com",
      "posts": null
    }
  },
  "errors": [
    {"message": "Failed to get posts."}
  ]
}
```

### Real-Time Data with GraphQL Subscriptions

Subscriptions allow for real-time notifications. They're similar to queries and mutations in that they're declared in your schema, but they're operated over websockets, not HTTP:

```graphql
type Subscription {
  postCreated: Post
}
```

In this example, we're subscribing to `postCreated`, which will send us a Post object each time a post is created.

### Pagination and Server-Side Filtering

GraphQL provides a powerful way to work with large amounts of data by allowing the client to specify exactly what they need. For example, you can implement pagination:

```graphql
type Query {
  posts(first: Int, after: ID): PostConnection
}

type PostConnection {
  edges: [PostEdge]
  pageInfo: PageInfo
}

type PostEdge {
  cursor: ID!
  node: Post
}

type PageInfo {
  endCursor: ID
  hasNextPage: Boolean
}
```

In this example, first specifies the number of edges to return from a list, while after provides a cursor indicating where in the list to start returning elements.

Server-side filtering can also be done:

```graphql
type Query {
  posts(filter: PostFilter): [Post]
}

input PostFilter {
  titleContains: String
  contentContains: String
}
```

Here, the filter argument is an input object, PostFilter, which has fields to filter posts by their title and content.

In conclusion, with GraphQL, you have the tools to query, modify, and subscribe to your data effectively and efficiently.

## Authentication and Authorization in GraphQL

GraphQL doesn't provide built-in authorization and authentication tools. It's up to the developer to implement these security measures. However, this also provides the freedom to adopt the authentication and authorization practices that best suit your application.

### Handling Authentication in GraphQL

The most common practice for handling authentication is to use HTTP headers. When a client sends a request to a server, it includes an Authorization header. The server decodes the header, often a JSON Web Token (JWT), to identify the user.

Here's an example of how you might handle this with Apollo Server and Express:

```javascript
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
```

In this example, Express middleware decodes the JWT and adds a user object to the request. This user object is then added to the GraphQL context in the Apollo Server setup, making it accessible in every resolver.

### Implementing Role-Based Authorization

Once the user is authenticated, you can restrict their access using role-based authorization. Here's an example of how you might handle this in your resolvers:

```javascript
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
```

In this resolver for a users query, we check the context for the user object and its role. If there's no user or if the user is not an ADMIN, an error is thrown.

### Privacy Implications and Field-Level Security

Depending on your application's privacy needs, you may need to implement field-level security. This restricts the data that can be queried based on the user's permissions.

```javascript
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
```

In this resolver for the email field of a User, we check if the user in the context is the same as the user being queried. If they're not the same, null is returned for the email.

By integrating these practices into your GraphQL server, you can ensure secure access to your data.

## Integrating GraphQL with Frontend Frameworks

Frontend applications need a way to interact with your GraphQL API. The Apollo Client library is a popular choice due to its comprehensive feature set.

### Client-Side GraphQL with Apollo Client

Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. To get started, install the Apollo Client package:

```bash
npm install @apollo/client
```

Next, create an instance of Apollo Client:

```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
```

You're now set up to send queries and mutations to your GraphQL server!

### Integrating Apollo Client with React: Queries and Mutations

In a React application, you can use the `useQuery` and `useMutation` hooks provided by Apollo Client.

To send a query:

```jsx
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return data.users.map(user => (
    <div key={user.id}>
      {user.name}
    </div>
  ));
}
```

To send a mutation:

```jsx
import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation ($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;

function AddUser() {
  let input;
  const [addUser, { data }] = useMutation(ADD_USER);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser({ variables: { name: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
```

### Apollo Client's Local State Management

Apollo Client can also manage your local state. This makes it a powerful alternative to libraries like Redux or MobX. You can directly write to the cache or use local resolvers to manage local state.

### Apollo Client with Other Frontend Libraries: Vue.js, Angular

Apollo Client also works well with other popular frontend frameworks like Vue.js and Angular.

For Vue.js, you can use the Vue Apollo library. For Angular, you can use Apollo Angular. Both libraries provide similar features to the Apollo React hooks, such as components for queries and mutations and integrations with the Vue or Angular lifecycle.

### Caching and Performance Optimization with Apollo Client

Apollo Client comes with a powerful caching feature out of the box. This means that if you request the same data twice, Apollo Client fetches it from the cache the second time. You can also configure the caching behavior to suit your needs.

Apollo Client also provides tools to paginate data, prefetch data for faster load times, and batch multiple queries into a single request.

Using GraphQL with Apollo Client and your chosen frontend framework, you can create powerful, efficient, and flexible web applications.

## Error Handling, Logging, and Testing in GraphQL

Having a robust strategy for error handling, logging, and testing in your GraphQL implementation is crucial for maintaining a healthy and reliable API.

### Error Handling in GraphQL

In GraphQL, there are two types of errors: operation and system errors.

*Operation errors* are expected errors in the execution of a GraphQL operation. For example, an operation error might be triggered if a client attempts to query a field that doesn't exist in the schema.

*System errors* are unexpected and indicate that something has gone wrong with the server's operation, such as a database outage.

Here's an example of a GraphQL error:

```javascript
{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field User.email.",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": [
        "user",
        "email"
      ]
    }
  ],
  "data": {
    "user": null
  }
}
```

In this example, GraphQL is trying to resolve a non-nullable field (email), but a null value is being returned, triggering an error.

### Logging GraphQL Operations

Effective logging can help you understand the behaviors and troubleshoot issues in your GraphQL server. Here's a simple way of logging your resolvers:

```javascript
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
```

In this resolver, we're logging both before and after we interact with our database.

### Unit Testing and Integration Testing with GraphQL

Testing is an essential aspect of any application to ensure its correctness and resilience. GraphQL is no different, and you should aim to have both unit tests (testing individual parts of your codebase) and integration tests (testing how multiple parts work together).

Here's an example of a simple unit test using Jest and a mock server from Apollo Server:

```javascript
import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from '../src/schema';

const server = new ApolloServer({ typeDefs, resolvers });
const { query, mutate } = createTestClient(server);

describe('Queries', () => {
  it('fetches list of users', async () => {
    const GET_USERS = gql`
      query {
        users {
          id
          name
        }
      }
    `;

    const res = await query({ query: GET_USERS });
    expect(res).toMatchSnapshot();
  });
});
```

In this example, we're creating a test client with our server setup, defining our GraphQL operation, executing it, and comparing the response with a stored snapshot.

Testing, error handling, and logging together form a strong safety net for your GraphQL APIs. By implementing these strategies, you can ensure the smooth operation and maintenance of your fullstack JavaScript application.
