import { useParams } from "react-router";
import { Message } from "./Message";
import { useMoviesDetails } from "../hooks/useMovieDetails";

export function MovieDetails() {
  const { movieId } = useParams();
  const { movie, isLoading, err } = useMoviesDetails(movieId);

  if (isLoading || err) {
    return (
      <Message
        isLoading={isLoading}
        err={err}
        term="  "
        totalResults={0}
        txt={err}
      />
    );
  }

  if (!movie.Title) return null;

  return (
    <article className="mx-auto my-6 w-[calc(100%-2rem)] max-w-5xl rounded-sm border border-slate-700 bg-slate-800 p-5 text-slate-200 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {movie.Poster && movie.Poster !== "N/A" && (
          <img
            src={movie.Poster}
            alt={`Poster for ${movie.Title}`}
            className="mx-auto w-full max-w-64 self-start rounded-sm object-contain shadow-md md:mx-0 md:w-64 md:shrink-0"
          />
        )}
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-amber-400 sm:text-3xl">
            {movie.Title}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {movie.Year} &middot; {movie.Runtime} &middot; {movie.Rated}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(movie.Ratings ?? []).map((rate) => (
              <span
                key={rate.Source}
                className="rounded-sm border border-slate-600 bg-slate-900 px-3 py-1 text-sm"
              >
                <span className="text-slate-400">{rate.Source}</span>{" "}
                <span className="font-semibold text-amber-400">
                  {rate.Value}
                </span>
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-4 border-t border-slate-700 pt-5 text-sm leading-relaxed sm:text-base">
            <div>
              <h2 className="font-semibold text-amber-400">Plot</h2>
              <p className="mt-1">{movie.Plot}</p>
            </div>
            <div>
              <h2 className="font-semibold text-amber-400">Director</h2>
              <p className="mt-1">{movie.Director}</p>
            </div>
            <div>
              <h2 className="font-semibold text-amber-400">Actors</h2>
              <p className="mt-1">{movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
