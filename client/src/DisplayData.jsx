import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
const QUERY_ALL_USERS = gql`
  query getUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query getMovies {
    movies {
      id
      name
      year
    }
  }
`;
function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: moviedata, error: movieerror } = useQuery(QUERY_ALL_MOVIES);
  console.log("movieerror:", movieerror);
  console.log("moviedata:", moviedata);
  // console.log("data:", data);
  if (loading) {
    <h1>Data is loading</h1>;
  }
  if (error) {
    <h1>Error in loading data</h1>;
  }

  return (
    <div>
      {data?.users?.map(({ id, name, username, age, nationality }) => {
        return (
          <div style={{ border: "2px solid black" }} key={id}>
            <p>Name := {name}</p>
            <p>Username :={username}</p>
            <p>Age :={age}</p>
            <p>Nationality :={nationality}</p>
          </div>
        );
      })}
      {moviedata?.movies?.map(({ id, name, year }) => {
        return (
          <div style={{ border: "2px solid black" }} key={id}>
            <p>Movie Name := {name}</p>
            <p>Year :={year}</p>
          </div>
        );
      })}
      <input type="text"  />
      <button>Search</button>
    </div>
  );
}

export default DisplayData;
