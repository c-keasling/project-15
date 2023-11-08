import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/searchbox";

const App = () => {
  const [movies, setMovies] = useState([]);
  //
  const [searchValue, setSearch] = useState("");

  const getMovieRequest = async () => {
    //url for api please see my slack message for api code
    const url = "https://www.omdbapi.com/?s=die hard&apikey=6702906c";
    //get api response as variable using fetch
    const response = await fetch(url);
    //convert response to json
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  //getmovie request when the page loads only
  useEffect(() => {
    getMovieRequest();
  });
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
