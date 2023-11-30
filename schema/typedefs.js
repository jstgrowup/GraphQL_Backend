export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
    favouriteMovies:[Movie]
  }
  type Movie{
    id:ID!
    name:String!
    year:Int!
    isPublished:Boolean
  }
  type Query {
    users: [User!]!
    user(id:ID!):User
    movies:[Movie]
    movie(name:String!):Movie
  }
  enum Nationality{
    Canada
    USA
    UK
    Australia 
    Germany
  }
  input CreateUserInput{
    name: String!
    username: String!
    age: Int =18
    nationality: Nationality=India
  
  }
  input UpdateUserInput{
    id:ID!
    newUserName:String!
  }
  type Mutation{
    createUser(input:CreateUserInput!):User
    updateUser(input:UpdateUserInput!):User
    deleteUser(id:ID!):User
  }
`;
