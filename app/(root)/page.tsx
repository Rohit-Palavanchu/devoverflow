import { Button } from "@/components/ui/button";
import Routes from "@/constant/routes";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="min-h-[46px] px-4 py-3 !text-light-900 primary-gradient"
          asChild
        >
          <Link href={Routes.ASK_QUESTION}>Ask Questions</Link>
        </Button>
      </section>
      <section className="mt-10">Local Search</section>
      Home Filter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question1</p>
        <p>Question2</p>
        <p>Question3</p>
      </div>
    </>
  );
}
