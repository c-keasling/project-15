import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Spirited Away",
      Year: "2001",
      imdbID: "tt0245429",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "My Neighbor Totoro",
      Year: "1988",
      imdbID: "tt0096283",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Ponyo",
      Year: "2008",
      imdbID: "tt0876563",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Howl's Moving Castle",
      Year: "2004",
      imdbID: "tt0347149",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Princess Mononoke",
      Year: "1997",
      imdbID: "tt0119698",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Kiki's Delivery Service",
      Year: "1989",
      imdbID: "tt0097814",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTQ1ZTM1ZTgtN2Q2Ny00YjFkLTliNjEtN2I1ZmY5ZTY1OTEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
  ]);
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
