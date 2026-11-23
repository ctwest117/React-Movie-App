import { Link } from "react-router";

export function Home() {
  return (
    <section className="m-3 rounded-sm border border-slate-700 bg-slate-800 p-6 text-slate-100 sm:m-5 sm:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Find your next movie</h1>
      <p className="mt-3 text-slate-300">
        Browse movies and select a title to see its details.
      </p>
      <Link
        to="/movies"
        className="mt-5 inline-block rounded-sm bg-amber-400 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
      >
        Browse movies
      </Link>
    </section>
  );
}
