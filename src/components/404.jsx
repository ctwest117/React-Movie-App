import { Message } from "./Message";
import { useNavigate } from "react-router";

export function Page404() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <Message
        txt={"404 not found"}
        isLoading={false}
        err={null}
        term=""
        totalResults="0"
      />
      <button
        className="cursor-pointer rounded-sm bg-amber-400 px-5 py-2 font-medium text-slate-900 hover:bg-amber-300"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}
