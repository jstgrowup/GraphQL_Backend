import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// server setup
import { typeDefs } from "./schema";
const server = new ApolloServer({
  // typedefs - definitions of types of data
  typeDefs,
  // resolvers
  
  
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log("server ready at port");
