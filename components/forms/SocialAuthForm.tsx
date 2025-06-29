"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constant/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "min-h-12 flex-1 cursor-pointer rounded-2 background-dark400_light900 px-4 py-3.5 body-medium text-dark200_light800";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider,{
        callbackUrl: ROUTES.HOME,
      })
    } catch (e) {
      console.error(e);
      toast.error(`Failed to sign in with ${provider}. Please try again.`);
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          height={20}
          width={20}
          alt="Github Logo"
          className="mr-2.5 object-contain invert-colors"
        />
        <span className="text-[15px] font-light">Log in With Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          height={20}
          width={20}
          alt="Google Logo"
          className="mr-2.5 object-contain"
        />
        <span className="text-[15px] font-light">Log in With Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
