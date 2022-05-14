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

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)]
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6
  })
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    mocks,
    csrfPrevention: true,
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });