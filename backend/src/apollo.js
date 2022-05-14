const Koa = require('koa');
const app = new Koa();
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require("./schema")

const mockDataSet = [
  {
    status: "TODO",
    name: "Buy groceries",
    id:"1"
  },
  {
    status: "DOING",
    name: "Study GraphQL",
    id:"2"
  }, {
    status: "DONE",
    name: "Learn how to create a clone of yourself",
    id:"3"
  }, {
    status: "STUCK - (just for now)",
    name: "Become immortal",
    id:"4"
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves tasks from the "mockDataSet" array above.
const resolvers = {
  Query: {
    tasks: () => mockDataSet,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });