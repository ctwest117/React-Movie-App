import { useParams } from "react-router";
import { Message } from "./Message";
import { useMoviesDetails } from "../hooks/useMovieDetails";

export function MovieDetails() {
  const { movieId } = useParams();
  const { movie, isLoading, err } = useMoviesDetails(movieId);
  const message = () => {
    if (isLoading || err)
      return (
        <Message
          isLoading={isLoading}
          err={err}
          term=""
          totalResults={0}
          txt={err}
        />
      );

    return <></>;
  };
  return (
    <>
      {message()}
      <h1>{movie.Title}</h1>
      <h2>{`${movie.Year} · ${movie.Runtime} · ${movie.Rated}`}</h2>
      <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
      <div>{movie.Plot}</div>
      <div>{movie.Director}</div>
      <div>{movie.Actors}</div>
    </>
  );
}
