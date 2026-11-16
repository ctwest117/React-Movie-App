import React from "react";
import { Routes, Route, NavLink } from "react-router";
import { Router } from "./components/Router";

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
      <Router />
    </main>
  );
}

export default App;
