import React, { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/Searchbox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

const App = () => {
  // State hooks for movies, favourites, and search value
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //function to get movie objects from api
  const getMovieRequest = async (searchValue) => {
    //url for api please see my slack message for api code
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6702906c`;
    //get api response as variable using fetch
    const response = await fetch(url);
    //convert response to json
    const responseJson = await response.json();

    // Setting the movies state if the response contains movies
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Add two new functions to handle the scrolling of the movie list
  const scrollLeft = () => {
    document.getElementById("movieRow").scrollLeft -= 200; // Scrolls left by 200px;
  };

  const scrollRight = () => {
    document.getElementById("movieRow").scrollLeft += 200; // Scrolls right by 200px;
  };

  //getmovie request when the page loads only
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // useEffect to load favourites from local storage on component mount
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    // If there are stored favourites then update the state
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);
  // Function to save favourites to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  // Function to remove a movie from favourites
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  // The layout of the app
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row" id="movieRow">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <button onClick={scrollLeft} className="scroll-button left">
        scroll left 👈
      </button>
      <button onClick={scrollRight} className="scroll-button right">
        👉 scroll right
      </button>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
