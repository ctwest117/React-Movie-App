import { MovieCard } from "./MovieCard";
import { PageButton } from "./PageButton";

export function List({ movies, page, setPage }) {
  const handleClick = (num) => {
    if (movies.length === 0) return;
    if (page === 1 && num < 1) return;
    setPage((prev) => prev + num);
  };
  return (
    <div className="flex flex-col items-center">
      <PageButton movies={movies} page={page} handleClick={handleClick} />
      <ul className="p-5 gap-3 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
      <PageButton movies={movies} page={page} handleClick={handleClick} />
    </div>
  );
}
