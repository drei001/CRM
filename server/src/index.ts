import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dbConfig from './dbconfig';
import typeDefs from './graphql/TypeDefs';
import callTypeDefs from './graphql/typeDefs/call';
import resolvers from './graphql/Resolvers';

const app = express();
//IMPORTANT YOU CAN EXECUTE MULTIPLE QUERIES IN ONE TIME

//run db connection config
dbConfig();

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs: [typeDefs, callTypeDefs],
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer();

app.listen(5000, () => 'Server running on port 5000');
