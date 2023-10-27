const gql = require("graphql-tag");
const typeDefs = gql `
"A track is a group of Modules that teaches about a specific topic"
type Track {
  # Fields go here
  id: ID!
  title: String!
  author: Author!
  "Thumbnail is a URL"
  thumbnail: String
  length: Int
  modulesCount: Int
}
"Author of a complete Track or a Module"
type Author {
  # Fields go here
  id: ID!
  name: String!
  "Photo is a URL"
  photo: String
}
type Query {
    "get tracks for grid"
    # Fields go here
    tracksForHome: [Track!]!
  }
`;
module.exports = typeDefs;