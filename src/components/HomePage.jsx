import { Message } from "./Message";

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
