import { useState } from "react";
import { Color } from "./Color";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getFromStorage, updateStorageMovies } from "./getFromStorage";

import "./App.css";

const INITIAL_MOVIES = [
  {
    name: "Interstellar",
    pic: "http://www.ryzhakov.co.uk/wp-content/uploads/2014/11/ifhv.jpg",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    name: "RRR",
    pic: "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/07/RRR.jpeg",
    description:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt and Olivia Morris while Samuthirakani, Ray Stevenson and Alison Doody play",
    trailer: "https://www.youtube.com/embed/BN1MwXUR3PM",
  },
  {
    name: "3 idiots",
    pic: "https://im.rediff.com/money/2010/aug/05idiot1.jpg",
    description:
      "In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.",
    trailer: "https://www.youtube.com/embed/K0eDlFX9GMc",
  },

  {
    name: "SPIDER-MAN: FAR FROM HOME",
    pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/674b36f0-7771-4188-b382-ade2d495544a/dd8h6td-ea943be7-b2be-4fbd-bacc-e80f3642094f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3NGIzNmYwLTc3NzEtNDE4OC1iMzgyLWFkZTJkNDk1NTQ0YVwvZGQ4aDZ0ZC1lYTk0M2JlNy1iMmJlLTRmYmQtYmFjYy1lODBmMzY0MjA5NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZXr0_c39iBrZMnZYXZUyBO7QQfSzZ4Wy-uyCBcric88",
    description:
      "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
    trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
  },
];

updateStorageMovies(INITIAL_MOVIES);

export default function App() {
  const [movies, setMovies] = useState(getFromStorage("movies"));

  return (
    <section>
      <AppBar position="static">
        <Toolbar className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Movie">Movie</Link>
          <Link to="/Movie/add">Add Movie</Link>
          <Link to="/color">Color</Link>
        </Toolbar>
      </AppBar>

      <div className="main-content">
        <Switch>
          <Route exact path="/about">
            About
          </Route>

          <Route exact path="/color">
            <Color />
          </Route>

          <Route exact path="/Movie/add">
            <AddMovie
              movies={movies}
              setMovies={setMovies}
              // type="ADD"
              // moviePoster={moviePoster}
              // setMoviePoster={setMoviePoster}
              // movieDescription={movieDescription}
              // setMovieDescription={setMovieDescription}
              // movieTrailer={movieTrailer}
              // setMovieTrailer={setMovieTrailer}
              // addMovie={addMovie}
            />
          </Route>

          <Route exact path="/Movie/:id">
            <MovieDetails />
          </Route>

          <Route exact path="/Movie">
            <MovieList movies={movies} setMovies={setMovies} />
          </Route>

          <Route exact path="/">
            Welcome to all our movie page
          </Route>

          <Route exact path="/Movie/edit/:id">
            <EditMovie movies={movies} setMovies={setMovies} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

// Edited on VScode Browser via github