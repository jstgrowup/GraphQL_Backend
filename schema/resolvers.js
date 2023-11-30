import { UserList, Movies } from "../db.js";
import _ from "lodash";
export const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user(parent, args) {
      //here you can connect to DB
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // movie resolver
    movies: () => {
      return Movies;
    },
    movie: (parent, args) => {
      const name = args.name;
      return _.find(Movies, { name });
    },
  },
  User: {
    favouriteMovies: () => {
      return _.filter(Movies, (movie) => movie.year >= 2023);
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      
      const user = args.input;
      user.id = UserList[UserList.length - 1].id + 1;
      UserList.push(user);
      return user;
    },
    updateUser: (parent, args) => {
      console.log("args:here in", args);
      const { id, newUserName } = args.input;
      const target = _.find(UserList, { id: Number(id) });

      target.username = newUserName;
      return target;
    },
    deleteUser: (parent, args) => {
      const id = args.id;

      _.remove(UserList, (user) => user.id === Number(id));

      return null;
    },
  },
};
