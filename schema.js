export const typeDefs = `#graphql
  type Game{
    id:ID!,
    # !means required
    title:String,
    platform:[String!]!,
    }
  type Review{
    id:ID!
    rating:Int!
    content:String! 

  }
  type Author{
    id:ID! 
    name:String! 
    verified:Boolean! 
  }
  type Query{
      reviews:[Reviews]
      games:[Games]
      authors:[Author]
   }

`;
