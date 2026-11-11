export function Message({ isLoading, err, movies }) {
  const message = () => {
    if (err) return <div className="text-red-600">{err}</div>;
    else
      return isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{movies.length} results</div>
      );
  };

  return <div className="flex justify-center my-4">{message()}</div>;
}
