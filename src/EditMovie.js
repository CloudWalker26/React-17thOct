import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateStorageMovies, getFromStorage } from "./getFromStorage.js";

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = getFromStorage("movies")[id]; // Get movie details
  const history = useHistory();

  // same as add movie but with parameters
  const [movieName, setMovieName] = useState(movie.name);
  const [moviePoster, setMoviePoster] = useState(movie.pic);
  const [movieDescription, setMovieDescription] = useState(movie.description);
  const [movieTrailer, setMovieTrailer] = useState(movie.trailer);

  const editMovie = () => {
    // Find the element and update the data
    const newMovies = {
      name: movieName,
      pic: moviePoster,
      description: movieDescription,
      trailer: movieTrailer,
    };

    // create a copy of the movie
    // replace the edited movie
    let updatedMovies = [...movies]; // taking the copy of the movie
    updatedMovies[id] = newMovies; // updating the the movie
    setMovies(updatedMovies); // updating the setMovie
    updateStorageMovies(updatedMovies); // updating the local storage
    history.push("/Movie");
  };
  return (
    <div className="movie-form">
      {/* To take movie name */}
      <TextField
        id="movieName"
        label="Enter movie Name"
        variant="standard"
        value={movieName}
        onChange={(e) => {
          setMovieName(e.target.value);
        }}
      />
      {/* take movie poster */}
      <TextField
        id="moviePoster"
        label="Upload movie Poster URL"
        variant="standard"
        value={moviePoster}
        onChange={(e) => {
          setMoviePoster(e.target.value);
        }}
      />
      {/* take movie description */}
      <TextField
        id="movieDescription"
        label="Enter movie Description"
        variant="standard"
        value={movieDescription}
        onChange={(e) => {
          setMovieDescription(e.target.value);
        }}
      />
      {/* take movie trailer */}
      <TextField
        id="movieTrailer"
        label="Upload Movie Trailer"
        variant="standard"
        value={movieTrailer}
        onChange={(e) => {
          setMovieTrailer(e.target.value);
        }}
      />
      {/* Edit button */}
      <Button onClick={editMovie} variant="contained">
        Edit Movie
      </Button>
    </div>
  );
}
