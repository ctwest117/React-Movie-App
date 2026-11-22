import { Message } from "../components/Message";

export function Home() {
  return (
    <Message
      txt={"Home"}
      isLoading={false}
      err={null}
      term=""
      totalResults="0"
    />
  );
}
