import React from "react";
import { SearchBar } from "./components/SearchBar";
import { List } from "./components/List";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [term, setTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { movies, isLoading, err } = useMovies(term, page);

  React.useEffect(() => setPage(1), [term]);

  const handleSearch = (value) => {
    const cleanVal = value.toLowerCase().trim();
    setTerm(cleanVal);
    console.log(movies);
  };

  return (
    <main id="app">
      <SearchBar handleSearch={handleSearch} />
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
