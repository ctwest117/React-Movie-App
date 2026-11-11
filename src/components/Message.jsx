export function Message({ isLoading, err, movies }) {
  const message = () => {
    if (err) return err;
    else return isLoading ? "Loading..." : `${movies.length} results`;
  };

  return <div>{message()}</div>;
}
