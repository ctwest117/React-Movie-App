export function PageButton({ movies, page, handleClick }) {
  return (
    <div>
      {page > 1 && movies.length !== 0 && (
        <>
          <button className="border p-1" onClick={() => handleClick(0)}>
            First Page
          </button>
          <button className="border p-1" onClick={() => handleClick(-1)}>
            Previous Page
          </button>
        </>
      )}
      {movies.length !== 0 && <span className="border p-1">{page}</span>}
      {movies.length !== 0 && (
        <button className="border p-1" onClick={() => handleClick(1)}>
          Next Page
        </button>
      )}
    </div>
  );
}
