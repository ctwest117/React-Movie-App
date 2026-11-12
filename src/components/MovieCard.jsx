import { useState } from "react";

export function MovieCard({ movie }) {
  const handleError = (event) => {
    const fallback = poster(true);
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback;
    }
  };

  const poster = (useFallback = false) => {
    if (!useFallback && movie.Poster && movie.Poster !== "N/A") {
      return movie.Poster;
    }

    const placeholder = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">
      <rect width="300" height="450" rx="12" fill="#1e293b"/>
      <rect x="100" y="155" width="100" height="80" rx="8" fill="none" stroke="#94a3b8" stroke-width="4"/>
      <path d="M125 155v80m50-80v80M100 175h25m-25 40h25m50-40h25m-25 40h25" stroke="#94a3b8" stroke-width="4"/>
      <text x="150" y="285" text-anchor="middle" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="18">No poster available</text>
    </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(placeholder)}`;
  };
  return (
    <li className="min-w-10 p-1 bg-slate-800 flex flex-col hover:-translate-y-0.5 shadow-black hover:shadow text-slate-90">
      <img
        src={poster()}
        alt={"poster for " + movie.Title}
        className="h-[85%]"
        onError={(e) => handleError(e)}
      />
      <h1 className="truncate text-md md:text-2xl py-3">{movie.Title}</h1>
      <p className="text-sm md:text-lg py-3">{movie.Year}</p>
    </li>
  );
}
