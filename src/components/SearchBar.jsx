import React from "react";

export function SearchBar({ handleSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query.toLowerCase().trim());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={query}
        className="border"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="border">
        Search
      </button>
    </form>
  );
}
