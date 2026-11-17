import { VidSvg } from "./VidSvg";

export function Message({ isLoading, err, term, totalResults, txt }) {
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
          <div>{txt}</div>
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
