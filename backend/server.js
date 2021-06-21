var express = require('express');
var ApolloServer = require('apollo-server-express').ApolloServer;
var path = require('path');
var _a = require('./schemas'), typeDefs = _a.typeDefs, resolvers = _a.resolvers;
var authMiddleware = require('./utils/auth').authMiddleware;
var db = require('./config/connection');
var PORT = process.env.PORT || 5000;
var app = express();
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: authMiddleware
});
server.applyMiddleware({ app: app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets
db.once('open', function () {
    app.listen(PORT, function () {
        console.log("API server running on port " + PORT + "!");
        console.log("Use GraphQL at http://localhost:" + PORT + server.graphqlPath);
    });
});
