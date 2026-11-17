import React from "react";
const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`;

export function useMoviesDetails(id) {
  const [movie, setMovie] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    setMovie({});
    setErr(null);
    setLoading(false);
    if (!id?.trim()) {
      return;
    }

    const controller = new AbortController();
    const fullURL = `${baseUrl}i=${id}`;
    async function fetchMovie() {
      setLoading(true);
      try {
        const response = await fetch(fullURL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed (status: ${response.status})`);
        }

        const data = await response.json();

        if (data.Response === "False") {
          if (data.Error === "Movie not found!") {
            setMovie({});
            return;
          }
          throw new Error(data.Error);
        }

        setMovie(data ?? {});
      } catch (error) {
        if (!controller.signal.aborted) {
          setErr(error.message);
          setMovie({});
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchMovie();
    return () => controller.abort();
  }, [id]);

  return { movie, isLoading, err };
}
