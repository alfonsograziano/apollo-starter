const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query{
        "Query to get tracks for the homepage"
        tracksForHome: [Track!]!
        "Track takes an id as parameter"
        track(id:ID!): Track
    }

  type Track{
      id: ID!
      title: String!
      author: Author!
      thumbnail: String
      length:Int
      modulesCount: Int,
      description: Int,
      numberOfViews: Int
      modules: [Module!]!
  }

  type Author{
      id:ID!
      name:String!
      photo:String
  }

  type Module{
      id: ID!
      title: String!
      length: Int
  }
`;

module.exports = typeDefs