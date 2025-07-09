import React from "react";
import NavLinks from "./navbar/NavLinks";
import Routes from "@/constant/routes";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar sticky top-0 left-0 flex h-[calc(100vh-10vh)] flex-col justify-between overflow-y-auto border-r light-border background-light900_dark200 p-3 px-4 shadow-light-300 max-sm:hidden lg:w-[266px] dark:border-hidden dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="min-h-[41px] w-full rounded-lg btn-secondary px-4 py-3 small-medium shadow-none"
          asChild
        >
          <Link href={Routes.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className="min-h-[41px] w-full rounded-lg border light-border-2 btn-tertiary px-4 py-3 small-medium text-dark400_light900 shadow-none"
          asChild
        >
          <Link href={Routes.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSideBar;
