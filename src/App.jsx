import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <main id="app">
      <nav className="flex justify-between">
        <NavLink to="/">OMBd Movies</NavLink>
        <div className="flex gap-3">
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/">Home</NavLink>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}

export default App;
