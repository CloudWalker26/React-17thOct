import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Msg } from "./Msg";
import { updateStorageMovies } from "./getFromStorage";
import { useHistory } from "react-router";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  return (
    <div className="App">
      {movies.map((p, index) => {
        return (
          <div>
            <Msg
              deleteMovieBtn={
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    const removeIdx = index;
                    setMovies(movies.filter((mv, idx) => idx != removeIdx));
                    updateStorageMovies(
                      movies.filter((mv, idx) => idx != removeIdx)
                    );
                  }}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              editMovieBtn={
                <IconButton
                  style={{ marginLeft: "auto" }}
                  onClick={() => history.push("/Movie/edit/" + index)}
                  color="secondary"
                  aria-label="edit"
                >
                  <CreateIcon />
                </IconButton>
              }
              key={index}
              pic={p.pic}
              name={p.name}
              des={p.description}
              id={index}
            />
          </div>
        );
      })}
    </div>
  );
}
