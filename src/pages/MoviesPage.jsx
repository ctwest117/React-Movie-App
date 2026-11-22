import React from "react";
import { SearchBar } from "../components/SearchBar";
import { List } from "../components/List";
import { useMovies } from "../hooks/useMovies";
import { Message } from "../components/Message";
import { useSearchParams } from "react-router";

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const term = searchParams.get("term") ?? "";
  const rawPage = Number(searchParams.get("page") ?? 1);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  const { movies, totalResults, isLoading, err } = useMovies(term, page);

  const handleSearch = (value) => {
    setSearchParams((params) => {
      params.set("term", value.toLowerCase().trim());
      params.set("page", "1");
      return params;
    });
  };

  const setPage = (value) => {
    const nextPage = typeof value === "function" ? value(page) : value;

    setSearchParams((params) => {
      params.set("page", String(Math.max(1, nextPage)));
      return params;
    });
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
