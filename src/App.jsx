import React from "react";
import { SearchBar } from "./components/SearchBar";
import { List } from "./components/List";
import { useMovies } from "./hooks/useMovies";
import { Message } from "./components/Message";

function App() {
  const [term, setTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { movies, isLoading, err } = useMovies(term, page);

  React.useEffect(() => setPage(1), [term]);

  const handleSearch = (value) => {
    const cleanVal = value.toLowerCase().trim();
    setTerm(cleanVal);
  };

  return (
    <main id="app">
      <SearchBar handleSearch={handleSearch} />
      <Message isLoading={isLoading} err={err} movies={movies} term={term} />
      <List
        movies={movies}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
        error={err}
      />
    </main>
  );
}

export default App;
