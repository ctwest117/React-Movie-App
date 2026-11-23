import { Routes, Route } from "react-router";
import App from "./App";
import { Movies } from "./pages/MoviesPage";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { MovieDetails } from "./components/MovieDetails";
import { Page404 } from "./pages/404";
import { Review } from "./pages/ReviewPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/Review" element={<Review />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
