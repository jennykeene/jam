const express = require('express');
const path = require('path');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

db.once('open', () => {
  const startApolloServer = async () => {
    const PORT = process.env.PORT || 3001;
    const app = express();
    const httpServer = http.createServer(app);

    // create new Apollo Server & pass in plugins, schema, auth middleware
    const server = new ApolloServer({
      plugins: [ 

        ApolloServerPluginDrainHttpServer({ httpServer }) 
      ],
      typeDefs,
      resolvers,
      context: authMiddleware
    });
    await server.start(); //start Apollo Server
    server.applyMiddleware({ app }); //integrate Apollo Server with Express.js

    await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 3001 }, resolve));
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
      });
    }
  };
  startApolloServer();
})




