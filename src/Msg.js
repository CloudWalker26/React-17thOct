import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "./Counter";

// Msg
export function Msg({ name, pic, des, deleteMovieBtn, editMovieBtn, id }) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  return (
    <Card className="movie-container">
      <img height="250px" className="poster" src={pic} alt={name} />
      <CardContent>
        <h1 className="name">
          {name}
          <IconButton
            onClick={() => {
              history.push("/Movie/" + id);
            }}
            aria-label="infoBtn"
            color="primary"
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            onClick={() => setShow(!show)}
            aria-label="delete"
            color="primary"
          >
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </h1>
        {show ? <p>{des}</p> : ""}
        <CardActions>
          <Counter />
          {editMovieBtn}
          {deleteMovieBtn}
        </CardActions>
      </CardContent>
    </Card>
  );
}
