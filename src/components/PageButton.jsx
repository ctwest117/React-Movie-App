export function PageButton({ movies, page, handleClick }) {
  return (
    <div className="flex gap-1">
      {page > 1 && movies.length !== 0 && (
        <>
          <button
            className="border-slate-700 border-2 bg-amber-400 Button hover: hover:bg-amber-500 hover:cursor-pointer rounded-sm p-2"
            onClick={() => handleClick(0)}
          >
            {"<<"}
          </button>
          <button
            className="border-slate-700 border-2 bg-amber-400 Button hover: hover:bg-amber-500 hover:cursor-pointer rounded-sm p-2"
            onClick={() => handleClick(-1)}
          >
            {"<"}
          </button>
        </>
      )}
      {movies.length !== 0 && (
        <div className="border-slate-700 border-2 hover:cursor-pointer rounded-sm p-2">
          {page}
        </div>
      )}
      {movies.length !== 0 && (
        <button
          className="border-slate-700 border-2  bg-amber-400 Button hover: hover:bg-amber-500 hover:cursor-pointer rounded-sm p-2"
          onClick={() => handleClick(1)}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
