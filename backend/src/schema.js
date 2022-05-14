const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query{
        "Query to get tracks for the homepage"
        tracksForHome: [Track!]!
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
  }

  type Author{
      id:ID!
      name:String!
      photo:String
  }
`;

module.exports = typeDefs