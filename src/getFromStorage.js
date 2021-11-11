// import { INITIAL_MOVIES } from "./App";
export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const updateStorageMovies = (updateMovies) =>
  localStorage.setItem("movies", JSON.stringify(updateMovies));

// set :stringify ->localStorage
// get: localStorage -> parse
