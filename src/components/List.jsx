import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { PageButton } from "./Paginate";

export function List({ movies, page, setPage }) {
  const handleClick = (num) => {
    if (movies.length === 0) return;
    if (page === 0 && num < 1) return;
    setPage((prev) => prev + num);
  };
  return (
    <div>
      <PageButton movies={movies} page={page} handleClick={handleClick} />
      <ul className="grid lg:grid-cols-5 grid-cols-2">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
      <PageButton movies={movies} page={page} handleClick={handleClick} />
    </div>
  );
}
