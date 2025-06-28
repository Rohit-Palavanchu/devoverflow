import React, { ReactNode } from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section
        className="min-w-full rounded-[10px] light-border background-light800_dark200 px-4 py-10 shadow-light100_dark100 shadow-md
      sm:min-w-[520px] sm:px-8"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h1-bold text-dark100_light900">Join DevOverflow</h1>
            <p className="paragraph-regular text-dark500_light400">
              Ponder The Questions You Have
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="DevOverflow Logo"
            height={45}
            width={45}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm/>
      </section>
    </main>
  );
};

export default AuthLayout;
