import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateStorageMovies } from "./getFromStorage.js";

export function AddMovie({ movies, setMovies, type }) {
  // const { id } = useParams();
  // moviePoster,
  // setMoviePoster,
  // movieDescription,
  // setMovieDescription,
  // movieTrailer,
  // setMovieTrailer,
  // addMovie,
  const history = useHistory();

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");

  const addMovie = () => {
    const newMovies = {
      name: movieName,
      pic: moviePoster,
      description: movieDescription,
      trailer: movieTrailer,
    };

    setMovies([...movies, newMovies]);
    updateStorageMovies([...movies, newMovies]);
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
      {/* Add button */}
      {/* {type === "EDIT" ? (
        <Button onClick={editMovie} variant="contained">
          Edit Movie
        </Button>
      ) : (
        <Button onClick={addMovie} variant="contained">
          Add Movie
        </Button>
      )} */}
      <Button onClick={addMovie} variant="contained">
        Add Movie
      </Button>
    </div>
  );
}
