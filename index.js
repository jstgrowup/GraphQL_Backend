import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema/typedefs.js";
import { resolvers } from "./schema/resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 3000 } });

console.log("server satrted");
