import React from "react";
import { SearchBar } from "./components/SearchBar";
import { List } from "./components/List";
import { useMovies } from "./hooks/useMovies";
import { NavBar } from "./components/NavBar";
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
    <>
      <NavBar>
        <SearchBar handleSearch={handleSearch} />
      </NavBar>
      <main id="app">
        <Message isLoading={isLoading} err={err} movies={movies} />
        <List
          movies={movies}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
          error={err}
        />
      </main>
    </>
  );
}

export default App;
