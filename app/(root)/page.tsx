import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="mx-2 my-2 text-3xl">Hi, Welcome to Next.js</h1>

      <form action={async () => {
        "use server";
        await signOut({ redirectTo: ROUTES.SIGN_IN })
      }}>
        <Button className="cursor-pointer background-light700_dark400" type="submit">
          Sign Out
        </Button>
      </form>
    </>
  );
}
