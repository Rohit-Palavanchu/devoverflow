import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Routes from "@/constant/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none background-light900_dark200"
      >
        <SheetHeader>
          <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
          <Link href={Routes.HOME} className="flex items-center gap-2.5">
            <Image
              src="/images/site-logo.svg"
              width={23}
              height={23}
              alt="logo"
              className=""
            />
            <p className="font-space-grotesk h2-bold text-[20px] text-dark-100 dark:text-light-900">
              Dev<span className="text-primary-500">Overflow</span>
            </p>
          </Link>
          <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-8">
                <NavLinks isMobileNav />
              </section>
            </SheetClose>
            <div className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link href={Routes.SIGN_IN}>
                  <Button className="min-h-[40px] w-full rounded-lg btn-secondary small-medium shadow-none">
                    <p className="primary-text-gradient">Log in</p>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={Routes.SIGN_UP}>
                  <Button className="min-h-[40px] w-full rounded-lg light-border-2 btn-tertiary px-4 py-3 small-medium text-dark400_light500 shadow-none">
                    <p className="primary-text-gradient">Sign Up</p>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
