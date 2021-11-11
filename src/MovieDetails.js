import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory, useParams } from "react-router-dom";
import { getFromStorage } from "./getFromStorage.js";

export function MovieDetails() {
  const { id } = useParams();
  const history = useHistory();

  const movie = getFromStorage("movies")[id];
  console.log(movie);
  return (
    <div className="">
      <iframe
        width="100%"
        height="506"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <h1> {movie.name}</h1>
        <p>{movie.description}</p>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          startIcon={<ArrowBackIcon fontSize="small" />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
