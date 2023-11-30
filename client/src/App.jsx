import { useState } from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
} from "@apollo/client";
import DisplayData from "./DisplayData";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of users</h1>
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
