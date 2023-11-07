import React from "react";

const MovieList = (props) => {
  return (
    <div className="d-flex flex-row flex-wrap">
      {" "}
      {/* This will ensure flex row layout */}
      {props.movies.map((movie, index) => (
        <div key={movie.imdbID} className="m-3">
          {" "}
          {/* Unique key and margin */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie-poster"
          />{" "}
          {/* Alt should use movie title */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
