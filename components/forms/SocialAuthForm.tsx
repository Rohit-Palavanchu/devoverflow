import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SocialAuthForm = () => {
    const buttonClass = "min-h-12 flex-1 cursor-pointer rounded-2 background-dark400_light900 px-4 py-3.5 body-medium text-dark200_light800"
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass}>
        <Image
          src="/icons/github.svg"
          height={20}
          width={20}
          alt="Github Logo"
          className="mr-2.5 object-contain invert-colors"
        />
        <span className="text-[15px] font-light">Log in With Github</span>
      </Button>
      <Button className={buttonClass}>
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
