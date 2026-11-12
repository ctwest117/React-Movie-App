import { VidSvg } from "./VidSvg";
export function Message({ isLoading, err, movies, term, totalResults }) {
  const message = () => {
    if (err)
      return (
        <>
          <div className="text-red-600">{err}</div>;
          <VidSvg />
        </>
      );
    if (!term)
      return (
        <>
          <div>Type something</div>
          <VidSvg />
        </>
      );
    else
      return isLoading ? (
        <>
          <div>Loading...</div>
          <VidSvg />
        </>
      ) : (
        <div>{totalResults} results</div>
      );
  };

  return (
    <div className="flex flex-col items-center gap-5 my-4">{message()}</div>
  );
}
