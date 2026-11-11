import { useState } from "react";
import { MovieCard } from "./MovieCard";

export function List({ movies, page, setPage, isLoading, error }) {
  const handleClick = (num) => {
    if (movies.length === 0) return;
    if (page === 0 && num < 1) return;
    setPage((prev) => prev + num);
  };
  return (
    <div>
      <ul>
        {isLoading
          ? "Loading Movies..."
          : movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
      </ul>
      {page > 1 && movies.length !== 0 && (
        <button className="border p-1" onClick={() => handleClick(-1)}>
          Previous Page
        </button>
      )}
      {movies.length !== 0 && <span className="border p-1">{page}</span>}
      {movies.length !== 0 && (
        <button className="border p-1" onClick={() => handleClick(1)}>
          Next Page
        </button>
      )}
    </div>
  );
}
