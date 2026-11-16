import { Routes, Route } from "react-router";
import { Movies } from "./MoviesPage";
import { Home } from "./HomePage";

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}
