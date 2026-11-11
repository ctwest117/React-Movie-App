import React from "react";
const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`;

export function useMovies(term, page) {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    if (!term.trim()) {
      setMovies([]);
      setErr(null);
      setLoading(false);
      return;
    }
    setErr(null);
    setLoading(false);
    const controller = new AbortController();
    const searchTerm = `${baseUrl}s=${term}&page=${page}`;
    async function fetchMovies() {
      setLoading(true);
      try {
        const response = await fetch(searchTerm, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed (status: ${response.status})`);
        }

        const data = await response.json();

        if (data.Response === "False") {
          if (data.Error === "Movie not found!") {
            setMovies([]);
            return;
          }
          throw new Error(data.Error);
        }

        setMovies(data.Search ?? []);
      } catch (error) {
        if (!controller.signal.aborted) {
          setErr(error.message);
          setMovies([]);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchMovies();
    return () => controller.abort();
  }, [term, page]);

  return { movies, isLoading, err };
}
