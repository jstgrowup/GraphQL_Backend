- GraphQL is a query language 
- REST API 
- graphql is a query language
- graphQL!==DATABASE
- every graphQL has two types of requests query and mutation
- inside query its like get method in http
- mutation is like mutating the data (POST,PUT,DELETE)
- in graphql has only one endpoint
- overfetch/underfetching
``
type User {
id:ID!
  name:String!
  age:Int!
  height:Float!
  isMarried:Boolean
  friends:[User!]
  videoesPosted:[Video!]
}
type Video {
  id:ID!
  title:String!
  description:String!
}
``