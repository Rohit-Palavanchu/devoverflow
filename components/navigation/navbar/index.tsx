import React from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="sticky z-50 flex-between w-full items-center gap-5 background-light850_dark100 p-5 shadow-light-300 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/site-logo.svg"
          alt="DevOverflow Logo"
          height={24}
          width={24}
        />
        <p className="font-space-grotesk h2-bold text-[20px] text-dark-100 max-sm:hidden dark:text-light-900">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5"><Theme /></div>
    </nav>
  );
};

export default Navbar;
