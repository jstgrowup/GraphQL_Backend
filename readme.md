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
```
 query ExampleQuery {
   user(id:1) {
     id
     name
     age
     nationality
     friends {
       name
       age
     }
   }
 }
 query GetUser($id: ID!) {
   user(id: $id) {
     name
     username
     favouriteMovies {
       name
     }
     friends {
       name
     }
   }
 }

 query getmovie($moviename: String!) {
   movie(name: $moviename) {
     name
     isPublished
   }
 }

query getUsers{
  users {
    id
    name
    username
  }
}

 mutation createUser($user: CreateUserInput!){
   createUser(input: $user) {
     id
     name
     age
   }
 }

mutation updateUser($input: UpdateUserInput!){
  updateUser(input: $input) {
    id
    name
    username
  }
}

mutation deleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
  }
}

```