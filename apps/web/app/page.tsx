import { client } from "@repo/db/client";


export default function Home() {
  const user = client.user.findFirst();
  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  );
}
