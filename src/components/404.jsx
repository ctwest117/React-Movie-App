import { Message } from "./Message";
import { useNavigate } from "react-router";

export function Page404() {
  let navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <Message
        txt={"404 not found"}
        isLoading={false}
        err={null}
        term=""
        totalResults="0"
      />
    </>
  );
}
