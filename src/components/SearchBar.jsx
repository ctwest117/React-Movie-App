import React from "react";

export function SearchBar({ handleSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query.toLowerCase().trim());
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center my-4"
    >
      <input
        type="text"
        value={query}
        placeholder="Search OMBd"
        className="bg-slate-800 rounded-l-sm p-2 focus:outline-amber-400 "
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-amber-400 Button hover: hover:bg-amber-500 p-2 rounded-r-sm"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4.5 4.5" />
        </svg>
      </button>
    </form>
  );
}
