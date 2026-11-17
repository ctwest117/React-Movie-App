import { Routes, Route } from "react-router";
import App from "../App";
import { Movies } from "./MoviesPage";
import { Home } from "./HomePage";
import { MovieDetails } from "./MovieDetails";
import { Page404 } from "./404";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
