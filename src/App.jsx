import { NavLink, Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const navLinkClass = ({ isActive }) =>
    `rounded-sm px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
      isActive
        ? "bg-amber-400 text-slate-900"
        : "text-slate-300 hover:bg-slate-700 hover:text-amber-400"
    }`;

  return (
    <main id="app" className="flow-root">
      <nav
        aria-label="Main navigation"
        className="m-3 flex flex-wrap items-center justify-between gap-3 rounded-sm border border-slate-700 bg-slate-800 px-4 py-3 shadow-sm sm:m-5 sm:px-5"
      >
        <NavLink
          to="/"
          className="rounded-sm text-lg font-bold tracking-tight text-amber-400 transition-colors hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          OMBd Movies
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/review" className={navLinkClass}>
            Reviews
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>
      </nav>
      <ErrorBoundary fallback={<p>Something went wrong.</p>}>
        <Outlet />
      </ErrorBoundary>
    </main>
  );
}

export default App;
