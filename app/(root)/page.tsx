import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="mx-2 my-2 text-3xl">
        Hi, Welcome to Next.js
      </h1>
    </>
  );
}
