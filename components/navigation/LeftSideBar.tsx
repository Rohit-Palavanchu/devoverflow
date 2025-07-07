import React from "react";
import NavLinks from "./navbar/NavLinks";
import Routes from "@/constant/routes";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar sticky top-0 left-0 flex h-[calc(100vh-10vh)] flex-col justify-between overflow-y-auto border-r light-border background-light900_dark200 p-6 shadow-light-300 max-sm:hidden lg:w-[266px] dark:border-hidden dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Link href={Routes.SIGN_IN}>
          <Button className="min-h-[40px] w-full rounded-lg btn-secondary small-medium shadow-none">
            <Image
              src="/icons/account.svg"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
              alt="Log in"
            />
            <p className="primary-text-gradient max-lg:hidden">Log in</p>
          </Button>
        </Link>
        <Link href={Routes.SIGN_UP}>
          <Button className="min-h-[40px] w-full rounded-lg light-border-2 btn-tertiary px-4 py-3 small-medium text-dark400_light500 shadow-none">
            <Image
              src="/icons/sign-up.svg"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
              alt="Log in"
            />
            <p className="primary-text-gradient max-lg:hidden">Sign Up</p>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSideBar;
