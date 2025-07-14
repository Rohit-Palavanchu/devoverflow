"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  imgSrc: string;
  otherClasses?: string;
  route: string;
  placeholder?: string;
}
const LocalSearch = ({ imgSrc, otherClasses, route, placeholder }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery) {
        const newurl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newurl, { scroll: false });
      } else {
        if (pathName === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, searchParams, router, route, pathName]);

  return (
    <div
      className={`flex min-h-[56px] grow items-center gap-4 rounded-[10px] background-light800_darkgradient px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={25}
        height={25}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        className="w-full border-none paragraph-medium text-dark400_light700 shadow-none no-focus outline-none"
        value={searchQuery}
        placeholder={placeholder}
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default LocalSearch;
