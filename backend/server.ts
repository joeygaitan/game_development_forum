const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const {graphqlHTTP } = require('express-graphql');

const PORT = process.env.PORT || 5000;
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use('/graphql', graphqlHTTP({
  context,
  graphiql: {
    defaultQuery: config.defaultQuery,
  } as undefined,
  schema,
}));



const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
