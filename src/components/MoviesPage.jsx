import React from "react";
import { SearchBar } from "./SearchBar";
import { List } from "./List";
import { useMovies } from "../hooks/useMovies";
import { Message } from "./Message";

export function Movies() {
  const [term, setTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { movies, totalResults, isLoading, err } = useMovies(term, page);

  const handleSearch = (value) => {
    const cleanVal = value.toLowerCase().trim();
    setPage(1);
    setTerm(cleanVal);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <Message
        isLoading={isLoading}
        err={err}
        movies={movies}
        term={term}
        totalResults={totalResults}
        txt="Type Something"
      />
      <List
        movies={movies}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
        error={err}
      />
    </>
  );
}
